import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { FeeService } from '../../../core/services/fee.service';
import { AuthService } from '../../../core/services/auth.service';
import { Fee } from '../../../core/models/fee.model';
import { DataTableComponent, TableColumn } from '../../../shared/components/data-table/data-table.component';
import { formatDate } from '../../../date.util';
 
/**
 * NOTE: FeeService.getByStudent() attend un studentId. Si un parent a
 * plusieurs enfants, cette page doit être adaptée pour boucler sur chaque
 * enfant (ex: via ChildrenComponent) plutôt que d'utiliser l'id du parent.
 */
@Component({
  selector: 'app-parent-fees',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  template: `
    <h1>Frais scolaires</h1>
 
    <div *ngIf="loading">Chargement...</div>
    <div *ngIf="error" class="error">{{ error }}</div>
 
    <app-data-table *ngIf="!loading && !error" [columns]="columns" [rows]="fees"></app-data-table>
  `
})
export class FeesComponent implements OnInit {
  private feeService = inject(FeeService);
  private authService = inject(AuthService);
 
  @Input() studentId = '';
 
  fees: Fee[] = [];
  loading = true;
  error = '';
 
  columns: TableColumn<Fee>[] = [
    { key: 'label', label: 'Libellé' },
    { key: 'amount', label: 'Montant' },
    { key: 'amountPaid', label: 'Payé' },
    { key: 'dueDate', label: 'Échéance', format: (v) => formatDate(v as string) },
    { key: 'status', label: 'Statut' }
  ];
 
  ngOnInit(): void {
    if (!this.studentId) {
      this.error = 'Aucun enfant sélectionné.';
      this.loading = false;
      return;
    }
 
    this.feeService.getByStudent(this.studentId).subscribe({
      next: (fees) => {
        this.fees = fees;
        this.loading = false;
      },
      error: () => {
        this.error = 'Impossible de charger les frais.';
        this.loading = false;
      }
    });
  }
}
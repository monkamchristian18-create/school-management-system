import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Fee } from '../models';
import { MOCK_FEES } from './mock-data';


@Injectable({
  providedIn: 'root'
})
export class MockFeeService {

  private fees: Fee[] = [...MOCK_FEES];


  /**
   * Get all fees
   */
  list(): Observable<Fee[]> {

    return of(this.fees)
      .pipe(delay(300));
  }


  /**
   * Get fee by id
   */
  get(id: number): Observable<Fee | undefined> {

    const fee = this.fees.find(
      item => item.id === id
    );

    return of(fee)
      .pipe(delay(300));
  }


  /**
   * Create fee
   */
  create(
    fee: Fee
  ): Observable<Fee> {

    const newFee: Fee = {
      ...fee,
      id: this.generateId()
    };

    this.fees.push(newFee);

    return of(newFee)
      .pipe(delay(300));
  }


  /**
   * Update fee
   */
  update(
    id: number,
    fee: Fee
  ): Observable<Fee> {

    const index = this.fees.findIndex(
      item => item.id === id
    );


    if (index !== -1) {

      this.fees[index] = {
        ...fee,
        id
      };

    }


    return of(this.fees[index])
      .pipe(delay(300));
  }


  /**
   * Delete fee
   */
  delete(
    id: number
  ): Observable<boolean> {


    this.fees = this.fees.filter(
      item => item.id !== id
    );


    return of(true)
      .pipe(delay(300));
  }


  /**
   * Get fees by student
   */
  getByStudent(
    studentId: number
  ): Observable<Fee[]> {


    const result = this.fees.filter(
      fee => fee.studentId === studentId
    );


    return of(result)
      .pipe(delay(300));
  }



  /**
   * Get unpaid fees
   */
  getUnpaid(): Observable<Fee[]> {


    const result = this.fees.filter(
      fee => fee.status !== 'Paid'
    );


    return of(result)
      .pipe(delay(300));
  }



  /**
   * Calculate total collected money
   */
  getTotalCollected(): Observable<number> {


    const total = this.fees
      .filter(fee => fee.status === 'Paid')
      .reduce(
        (sum, fee) => sum + fee.amount,
        0
      );


    return of(total)
      .pipe(delay(300));
  }



  /**
   * Count fees
   */
  count(): Observable<number> {

    return of(this.fees.length)
      .pipe(delay(300));
  }



  /**
   * Generate next id
   */
  private generateId(): number {


    if (this.fees.length === 0) {
      return 1;
    }


    return Math.max(
      ...this.fees.map(
        fee => fee.id
      )
    ) + 1;

  }

}
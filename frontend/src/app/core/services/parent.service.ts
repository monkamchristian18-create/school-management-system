import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ApiService } from "./api.service";
import { ApiResponse, Parent } 
 from "../models";

@Injectable({
  providedIn: 'root'
})
export class parentservice{

  private readonly endpoint =
  '/parents';
    
    constructor(private api: ApiService){}
    /** 
     * Get all parents
     */
    list():
    Observable<ApiResponse<Parent[]>> {return this.api.get<Parent[]>(this.endpoint); }
    
    /**
     * Get prent by id
     */
    get(id: number):
    Observable<ApiResponse<Parent>>{
      return this.api.get<Parent('${this.endpoint}/${id}');}

      /**
       * Create parent
       */
      create(parent: Parent):Observable<ApiResponse<Parent>>{
        return this.api.post<parent>(this.endpoint, parent);
      }
      /**
       * Update parent
       */
      update(id: number, parent:Parent):Observable<ApiResponse<Parent>>{
        return this.api.put<Parent>('${this.endpoint}/${id}', parent);
      }
      /**
       * Delete parent
       */
      delete(id: number):Observable<ApiResponse<void>>{
        return this.api.delete<void>('${this.endpoint}/${id}');
      }
}
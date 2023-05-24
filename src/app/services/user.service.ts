import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export let currentUser: Observable<any>; 

let allUsers: any[] = [] ; 

/**
 * User Service
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {

  private jsonPlaceHolderURL = "https://jsonplaceholder.typicode.com/users" ;

  /**
   * Constructor
   * @param http Http Client
   */
  constructor(private http: HttpClient) {}

  /**
   *  GET: Get All Users
   */
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.jsonPlaceHolderURL}`).pipe(
      tap((users) => {        
        allUsers = users
      })
    );
  }

  /**
   *  GET: Get User By Id
   */
  getUSerById(id:number): Observable<any> {
    return  currentUser = this.http.get<any>(`${this.jsonPlaceHolderURL}/${id}`)
  }

}

export function getAllUSer(): Observable<any> {
  return of(allUsers);
 }
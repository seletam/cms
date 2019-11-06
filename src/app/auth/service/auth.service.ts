import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
///import { User } from '../model/user/user.model';
import { Router } from '@angular/router';
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
 private loginUrl = "https://localhost:8085/finance/auth";
  private currentUserSubject : BehaviorSubject<any>;
  private currentUser : Observable<any>;
  
  constructor(private http : HttpClient, private router : Router) { 
	this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
	this.currentUser = this.currentUserSubject.asObservable();
  }
  
  public get currentUserValue() : any {
	  return this.currentUserSubject.value;
  }
  
  public login(username, password){
	  return this.http.post<any>(this.loginUrl+'/authenticate', {username, password}).pipe(map(user => {
		  localStorage.setItem('currentUser', JSON.stringify(user));
		  localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
		  localStorage.setItem('refreshToken', JSON.stringify(user.refreshToken));
		  this.currentUserSubject.next(user);
		  
		  return user;
	  }));
  }
  
  public getToken(){
	return localStorage.getItem('accessToken');
  }
  
  public getRefreshToken(){
	return localStorage.getItem('refreshToken');
  }
  
  public logout(){
		localStorage.removeItem('currentUser');
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		this.currentUserSubject.next(null);
		this.router.navigate(['/login']);
  }
  
}

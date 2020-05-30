import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://backend1.recruitment.cybersecurity.cloud/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(person): Observable<any> {
    return this.http.post(AUTH_API + 'persons', {
      username: person.username,
      email: person.email,
      password: person.password,
      name: person.name,
      age: person.age,
      family: person.family,
      role: person.role
    }, httpOptions);
  }
}
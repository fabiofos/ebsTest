import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'

@Injectable({
providedIn: 'root'
})

export class JwtService {
    constructor(private httpClient: HttpClient) { }


    login(email:string, password:string) {
      return this.httpClient.post<{token:  string, person_role: string}>('https://backend1.recruitment.cybersecurity.cloud/api/login', {email, password}).pipe(tap(res => {
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.person_role);

    }))
    }

    register(email:string, password:string) {
      return this.httpClient.post<{token: string}>('http://www.your-server.com/auth/register', {email, password}).pipe(tap(res => {
      this.login(email, password)
    }))
    }

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    }

    public get loggedIn(): boolean{
      return localStorage.getItem('token') !==  null;
    }


    public get getUserRoleLoggedIn(): string{
      return localStorage.getItem('role');
    }

  }




import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {LoginResponse} from '../models/loginResponse.model';

@Injectable()
export class ApiBaseUrl {
  constructor(private http: HttpClient) {

  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.get({
      email: username,
      password: password,
      returnSecureToken: true
    });

  }

  private get<T>(params: { [key: string]: any }): Observable<T> {
    console.log('apicalling');
    return this.http.post<T>(environment.apiAuthUrl + environment.webApiKey, {...params});
  }

  signUp<T>(data): Observable<T> {
    return this.http.post<T>(environment.apiSignUpUrl + environment.webApiKey, {...data});
  }
}

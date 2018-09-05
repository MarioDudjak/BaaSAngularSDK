import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IUserAccountService, ILoginUser, IRegisterUser, IAppUser, IChangePassword, IPasswordMessage, ISetPassword } from './contracts/account';
import { UsersEndpoints } from '../../infrastructure/httpApi';
import { BaasService } from '../../services';

@Injectable()
export class UsersService {
  constructor(
    private http: HttpClient,
    private baasService: BaasService) { }

  get account(): IUserAccountService {
    return {
      register(data: IRegisterUser): Observable<HttpResponse<IAppUser>> {
        return this.http.post(UsersEndpoints.register, data, { observe: 'response' });
      },
      login(data: ILoginUser): Observable<HttpResponse<IAppUser>> {
        let httpOptions = {
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }),
          params: new HttpParams().set('username', data.userName).append('password', data.password).append('grant_type', 'password')
        };
        return this.http.post(UsersEndpoints.token, httpOptions).pipe(switchMap(response => {
          if (response['_body']['access_token']) {
            localStorage.setItem('access_token', JSON.stringify(response['_body']['access_token']));
            let loginHttpOptions = {
              observe: 'response',
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }),
            };
            return this.http.post(UsersEndpoints.login, data, loginHttpOptions);
          }
        })
        );
      },
      logout(): Observable<HttpResponse<void>> {
        return null;
      },
      setPassword(data: ISetPassword): Observable<HttpResponse<IPasswordMessage>> {
        return null;
      },
      changePassword(data: IChangePassword): Observable<HttpResponse<IPasswordMessage>> {
        return null;
      }
    };
  }

}

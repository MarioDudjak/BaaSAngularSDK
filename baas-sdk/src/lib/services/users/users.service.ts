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
    let http = this.http;
    let token = localStorage.getItem('access_token');
    return {
      register(data: IRegisterUser): Observable<HttpResponse<IAppUser>> {
        return http.post<IAppUser>(UsersEndpoints.register, data, { observe: 'response' });
      },
      login(data: ILoginUser): Observable<HttpResponse<IAppUser>> {
        let body = new HttpParams().set('username', data.UserName).append('password', data.Password).append('grant_type', 'password');
        return http.post(UsersEndpoints.token, body.toString(), {
          observe: 'body',
          responseType: 'json',
          headers: new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          })
        }).pipe(switchMap(response => {
          if (response['access_token']) {
            localStorage.setItem('access_token', JSON.stringify(response['access_token']));
            return http.post<IAppUser>(UsersEndpoints.login, data, {
              observe: 'response',
              responseType: 'json',
              headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }),
            });
          }
        })
        );
      },
      logout(): Observable<HttpResponse<void>> {
        localStorage.removeItem('access_token');
        return http.post<void>(UsersEndpoints.logout, '',{
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
          }),
         });
      },
      setPassword(data: ISetPassword): Observable<HttpResponse<IPasswordMessage>> {
        return http.post<IPasswordMessage>(UsersEndpoints.setPassword, data, {
          responseType: 'json',
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
          })
       });
      },
      changePassword(data: IChangePassword): Observable<HttpResponse<IPasswordMessage>> {
        return http.post<IPasswordMessage>(UsersEndpoints.changePassword, data, {
          responseType: 'json',
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer '+ token
          })
       });
      }
    };
  }

}

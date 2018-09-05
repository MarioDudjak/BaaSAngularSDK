import {  HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegisterUser, IAppUser, ILoginUser, IPasswordMessage, IChangePassword, ISetPassword } from './';

export interface IUserAccountService {
  register(data: IRegisterUser): Observable<HttpResponse<IAppUser>>,
  login(data: ILoginUser): Observable<HttpResponse<IAppUser>>,
  logout(): Observable<HttpResponse<void>>
  setPassword(data: ISetPassword): Observable<HttpResponse<IPasswordMessage>>,
  changePassword(data: IChangePassword): Observable<HttpResponse<IPasswordMessage>>
}

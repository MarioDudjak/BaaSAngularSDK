import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaasService } from '../../services';
import { IDataStorageResourceService, IResource } from './contracts/resource';
import { DataStorageEndpoints } from '../../infrastructure/httpApi';

@Injectable()
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private baasService: BaasService
  ) { }

  get resource(): IDataStorageResourceService {
    return {
      create(collectionName: string, data: string): Observable<HttpResponse<IResource>> {
        let httpOptions = {
          observe: 'response',
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('access_token')
          })
        };
        return this.http.post(DataStorageEndpoints.resources + collectionName, data, { observe: 'response' });
      }
    };
  }
}




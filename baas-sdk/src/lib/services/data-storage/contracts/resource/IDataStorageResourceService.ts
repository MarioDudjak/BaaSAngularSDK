import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import {IResource} from './';

export interface IDataStorageResourceService {
  create(collectionName: string, data: string) : Observable<HttpResponse<IResource>>
}

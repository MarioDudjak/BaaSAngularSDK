import { Injectable, Inject } from '@angular/core';

import { CONFIGURATION } from '../infrastructure/common/contracts';

@Injectable()
export class BaasService {
  apiKey: string;
  constructor( @Inject('config') config: CONFIGURATION) {
    this.apiKey = config.ApiKey;
  }
};

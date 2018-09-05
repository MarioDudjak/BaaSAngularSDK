import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BaasService, DataStorageService, FilesService, UsersService } from './services';
import { CONFIGURATION } from './infrastructure/common/contracts';

@NgModule({
  imports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    BaasService,
    DataStorageService,
    FilesService,
    UsersService
  ],
  exports: []
})

export class BaasSdkModule {
  static forRoot(config: CONFIGURATION): ModuleWithProviders {
    return {
      ngModule: BaasSdkModule,
      providers: [
        BaasService,
        {
          provide: 'config',
          useValue: config
        }]
    };
  }
}

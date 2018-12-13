import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLabelComponent } from './components/fs-label/fs-label.component';
import { FsLabelFieldComponent } from './components/fs-label-field/fs-label-field.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsLabelComponent,
    FsLabelFieldComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsLabelComponent,
    FsLabelFieldComponent
  ]
})
export class FsLabelModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsLabelModule
    };
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLabelComponent } from './components/label/label.component';
import { FsLabelFieldComponent } from './components/label-field/label-field.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsLabelComponent,
    FsLabelFieldComponent,
  ],
  entryComponents: [
  ],
  declarations: [
    FsLabelComponent,
    FsLabelFieldComponent
  ]
})
export class FsLabelModule {
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsLabelModule
    };
  }*/
}

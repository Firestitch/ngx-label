import { NgModule } from '@angular/core';

import { FsLabelFieldComponent } from './components/label-field/label-field.component';
import { FsLabelMessageComponent } from './components/label-message/label-message.component';
import { FsLabelComponent } from './components/label/label.component';


@NgModule({
  imports: [
    FsLabelComponent,
    FsLabelFieldComponent,
    FsLabelMessageComponent,
  ],
  exports: [
    FsLabelComponent,
    FsLabelFieldComponent,
    FsLabelMessageComponent,
  ],
})
export class FsLabelModule {}

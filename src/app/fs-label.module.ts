import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsLabelComponent } from './components/label/label.component';
import { FsLabelFieldComponent } from './components/label-field/label-field.component';
import { FsLabelMessageComponent } from './components/label-message/label-message.component';


@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        FsLabelComponent,
        FsLabelFieldComponent,
        FsLabelMessageComponent
    ],
    declarations: [
        FsLabelComponent,
        FsLabelFieldComponent,
        FsLabelMessageComponent
    ]
})
export class FsLabelModule {}

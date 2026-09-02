import { Component } from '@angular/core';
import { FsLabelComponent } from '../../../../src/app/components/label/label.component';
import { FsLabelFieldComponent } from '../../../../src/app/components/label-field/label-field.component';
import { FsLabelMessageComponent } from '../../../../src/app/components/label-message/label-message.component';

@Component({
    selector: 'example-stacked',
    templateUrl: 'example-stacked.component.html',
    styleUrls: ['example-stacked.component.scss'],
    standalone: true,
    imports: [FsLabelComponent, FsLabelFieldComponent, FsLabelMessageComponent]
})
export class ExampleStackedComponent {
}

import { Component } from '@angular/core';
import { FsLabelComponent } from '../../../../src/app/components/label/label.component';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FsLabelFieldComponent } from '../../../../src/app/components/label-field/label-field.component';
import { FsLabelMessageComponent } from '../../../../src/app/components/label-message/label-message.component';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    styleUrls: ['example.component.scss'],
    standalone: true,
    imports: [FsLabelComponent, MatFormField, MatLabel, MatInput, MatHint, FsLabelFieldComponent, FsLabelMessageComponent]
})
export class ExampleComponent {
  public select;
}

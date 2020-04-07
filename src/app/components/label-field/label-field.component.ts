import { FsLabelComponent } from './../label/label.component';
import { ChangeDetectionStrategy, Component, HostBinding, Input, ContentChild } from '@angular/core';

@Component({
  selector: 'fs-label-field',
  templateUrl: 'label-field.component.html',
  styleUrls: [ 'label-field.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsLabelFieldComponent {

  @Input('bottomMargin') set setBottomMargin(value) {
    this.bottomMargin = value;
  }

  @Input('topMargin') set setTopMargin(value) {
    this.topMargin = value;
  }

  @Input('labelMargin') set setLabelMargin(value) {
    this.labelMargin = value;
  }

  @HostBinding('class.field-bottom-margin')
  public bottomMargin = true;

  @HostBinding('class.field-top-margin')
  public topMargin = true;

  @HostBinding('class.field-label-margin')
  public labelMargin = true;
}

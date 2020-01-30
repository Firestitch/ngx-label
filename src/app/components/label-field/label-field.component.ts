import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

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

  @HostBinding('class.field-bottom-margin')
  public bottomMargin = true;

  constructor() {
  }
}

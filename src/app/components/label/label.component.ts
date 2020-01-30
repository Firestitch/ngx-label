import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-label',
  templateUrl: 'label.component.html',
  styleUrls: [ 'label.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsLabelComponent {

  constructor() {
  }
}

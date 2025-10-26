import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'fs-label',
    templateUrl: './label.component.html',
    styleUrls: ['./label.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
})
export class FsLabelComponent {

  constructor() {
  }
}

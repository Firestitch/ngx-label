import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'fs-label-message',
    templateUrl: 'label-message.component.html',
    styleUrls: ['label-message.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class FsLabelMessageComponent {

  constructor() {
  }
}

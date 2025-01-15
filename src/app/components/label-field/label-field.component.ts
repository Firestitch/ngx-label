import {
  ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation,
} from '@angular/core';


@Component({
  selector: 'fs-label-field',
  templateUrl: './label-field.component.html',
  styleUrls: ['./label-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FsLabelFieldComponent {
  
  @Input('appearance') 
  public set setAppearance(appearance: 'basic' | 'outline') {
    this.outlineAppearance = appearance === 'outline';
    this.basicAppearance = appearance === 'basic';
  }
  
  @Input('showOutline') 
  @HostBinding('class.show-outline')
  public showOutline = true;
  
  @Input('disabled')  
  @HostBinding('class.disabled')
  public disabled = false;
  
  @Input('focused') 
  @HostBinding('class.focused')
  public focused = false;
  
  @Input('hoverable') 
  @HostBinding('class.hoverable')
  public hoverable = false;

  @Input('padless') 
  @HostBinding('class.padless')
  public padless = false;

  @HostBinding('class.appearance-outline')
  public outlineAppearance = false;
  
  @HostBinding('class.appearance-basic')
  public basicAppearance = true;
}

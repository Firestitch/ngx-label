import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';


@Component({
  selector: 'fs-label-field',
  templateUrl: './label-field.component.html',
  styleUrls: ['./label-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsLabelFieldComponent {
  
  @Input('outline') 
  @HostBinding('class.outline')
  public outline = false;
  
  @Input('disabled') 
  @HostBinding('class.disabled')
  public disabled = false;
  
  @Input('focused') 
  @HostBinding('class.focused')
  public focused = false;
  
  @Input('hoverable') 
  @HostBinding('class.hoverable')
  public hoverable = false;

  @Input('bottomMargin') 
  @HostBinding('class.field-bottom-margin')
  public bottomMargin = true;

  @Input('topMargin') 
  @HostBinding('class.field-top-margin')
  public topMargin = true;

  @Input('labelMargin') 
  @HostBinding('class.field-label-margin')
  public labelMargin = true;

}

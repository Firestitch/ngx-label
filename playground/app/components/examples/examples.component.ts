import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { FsExampleModule } from '@firestitch/example';
import { ExampleComponent } from '../example/example.component';
import { ExampleStackedComponent } from '../example-stacked/example-stacked.component';
import { ExampleHorizontalComponent } from '../example-horizontal/example-horizontal.component';


@Component({
    templateUrl: 'examples.component.html',
    standalone: true,
    imports: [
      FsExampleModule,
      ExampleComponent,
      ExampleStackedComponent,
      ExampleHorizontalComponent,
    ]
})
export class ExamplesComponent {
  public config = environment;
}

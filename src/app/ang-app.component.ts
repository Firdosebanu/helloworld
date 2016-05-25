import { Component } from '@angular/core';
import { FirComponent } from './+fir';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'ang-app-app',
  templateUrl: 'ang-app.component.html',
  styleUrls: ['ang-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/fir', component: FirComponent}
])
export class AngAppAppComponent {
  title = 'ang-app works!';
}

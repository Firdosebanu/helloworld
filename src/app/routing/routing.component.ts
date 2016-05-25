import { Component } from '@angular/core';
import{ROUTER_DIRECTIVES,Routes} from '@angular/router';
import {FirstRouteComponent} from '../first-route-component/first-route-component.component';
import {SecondRouteComponent} from '../second-route-component/second-route-component.component';
@Component({
  selector: 'app-routing',
  templateUrl: './app/routing/routing.component.html',
  styleUrls: ['./app/routing/routing.component.css'],
  directives:[ROUTER_DIRECTIVES]
})
@Routes([{path:'/routing1',component:FirstRouteComponent},{path:'/routing2',component:SecondRouteComponent}])
export class RoutingComponent {


}

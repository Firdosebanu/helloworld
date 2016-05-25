import { Component, OnInit } from '@angular/core';
import { ExampleComponent } from './+example';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({

  selector: 'app-second-route-component',
  templateUrl: './app/second-route-component/second-route-component.component.html',
  styleUrls: ['./app/second-route-component/second-route-component.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/example', component: ExampleComponent}
])
export class SecondRouteComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

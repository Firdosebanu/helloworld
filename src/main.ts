import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {  environment } from './app/';
import{ROUTER_PROVIDERS} from '@angular/router';
import{AdditionComponent} from './app/addition/addition.component'

import{ RoutingComponent } from './app/routing/routing.component';
if (environment.production) {
  enableProdMode();
}

bootstrap(AdditionComponent,[ROUTER_PROVIDERS]);

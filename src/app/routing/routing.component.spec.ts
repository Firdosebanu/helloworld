// import {describe, it, expect, inject, injectAsync, beforeEach, beforeEachProviders} from '@angular/core/testing';
// import {provide} from '@angular/core';

// import {Router} from '@angular/router';
// import {RouteRegistry} from '@angular/core/src/router/route_registry';
// import {SpyLocation} from '@angular/core/src/mock/location_mock';
// import {RootRouter} from '@angular/';
// import {RoutingComponent} from './routing.component';


// describe('Router tests', () => {
//   var location, router;
  
//   beforeEachProviders(() => [
//     RouteRegistry,
//     provide(Location, {useClass: SpyLocation}),
//     provide(Router, {useClass: RootRouter}),
//     provide(ROUTER_PRIMARY_COMPONENT, {useValue: RoutingComponent})
//   ]);
  
//   beforeEach(inject([Router, Location], (r, l) => {
//     router = r;
//     location = l;
//   }));
  
//   it('Should be able to navigate to Home', done => {    
//     router.navigate(['Home']).then(() => {
//       expect(location.path()).toBe('/home');
//       done();
//     }).catch(e => done.fail(e));
//   });

//   it('Should be able to navigate to People', done => {    
//     router.navigate(['People']).then(() => {
//       expect(location.path()).toBe('/people');
//       done();
//     }).catch(e => done.fail(e));
//   });

//   it('Should be able to navigate to About', done => {    
//     router.navigate(['About']).then(() => {
//       expect(location.path()).toBe('/about');
//       done();
//     }).catch(e => done.fail(e));
//   });

//   it('should redirect not registered urls to Home', done => {
//     router.navigateByUrl('/unknown').then(() => {
//       expect(location.path()).toBe('/home');
//       done();
//     }).catch(e => done.fail(e));
//   });
// });
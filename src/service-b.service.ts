import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ServiceB {
  doSomething() {
    console.log('hello');
  }
}
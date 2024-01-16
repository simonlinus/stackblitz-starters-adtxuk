import { inject, Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class ServiceA {
  serviceB = inject()
}
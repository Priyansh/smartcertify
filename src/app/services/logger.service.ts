import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  log (message : string ) { console.log(`[Log]: ${message}`); }
  error (message : string ) { console.log(`[Error]: ${message}`); }
}
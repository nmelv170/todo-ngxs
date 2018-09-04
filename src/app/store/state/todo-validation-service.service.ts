import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { delay} from 'rxjs/operators';

@Injectable()
export class TodoValidationServiceService {

  constructor() { }

  validate(payload: any): Observable<string> {
    return of('done').pipe(delay(2000));
  }
}

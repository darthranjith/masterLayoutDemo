import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()
export class SharedService {

  constructor() { }

  private dataObs$ = new Subject<string>();

    getData() {
        return this.dataObs$;
    }

    updateData(data: string) {
        this.dataObs$.next(data);
    }


}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterThongketheongayService {
  private dataSubject = new BehaviorSubject<string>("all");
  getData() {
    return this.dataSubject.asObservable();
  }
  updateData(data: string) {
    this.dataSubject.next(data);
  }
  constructor() { }
}

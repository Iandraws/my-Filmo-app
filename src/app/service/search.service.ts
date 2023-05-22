import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchSubject$ = new BehaviorSubject<string>('');
  public search$ = this.searchSubject$.asObservable();

 public set search(value: string) {
    this.searchSubject$.next(value);
  }

  public get search(): string {
    return this.searchSubject$.getValue();
  }

}

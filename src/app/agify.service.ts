import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgifyService {
  private apiUrl = 'https://api.agify.io';

  constructor(private http: HttpClient) { }

  getAge(name: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?name=${name}`);
  }
}

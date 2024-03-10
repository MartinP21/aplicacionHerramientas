import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversidadesService {
  private apiUrl = 'http://universities.hipolabs.com/search?country=';

  constructor(private http: HttpClient) { }

  getUniversidades(pais: string): Observable<any> {
    const url = `${this.apiUrl}${pais}`;
    return this.http.get(url);
  }
}

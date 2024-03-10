import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather?id=6201373&appid=64f56be6465290cd96b62ff03bc5b580';

  constructor(private http: HttpClient) { }

  getWeather(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}


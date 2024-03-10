// clima.page.ts
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.page.html',
  styleUrls: ['./clima.page.scss'],
})
export class ClimaPage implements OnInit {

  weatherData: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
}



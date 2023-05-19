import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  avrg: number = 0;
  selected: Boolean =  false;

  selectedSerie!: Serie;

  constructor(private serieService: SerieService) { }

  getSeries(): void {
    this.serieService.getSeries().subscribe((series) => {
      this.series = series;


      let sum: number = 0;
      series.map((s) => {
        sum += s.seasons;
      });
      this.avrg = sum / series.length;
    });
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
    this.selected = true;
    console.log("Asignó!");
  }
  ngOnInit() {
    this.getSeries();
  }

}

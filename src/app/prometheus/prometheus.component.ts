import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './prometheus.component.html',
  styleUrls: ['./prometheus.component.scss']
})
export class prometheusComponent implements OnInit {

  constructor() { }
  goToLink(url: string){
    window.open(url, "_blank");
    }

  ngOnInit(): void {
  }

}

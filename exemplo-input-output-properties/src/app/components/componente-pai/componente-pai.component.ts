import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrls: ['./componente-pai.component.css']
})
export class ComponentePaiComponent implements OnInit {

  @Output() informacaoComponentePai: string[] = ["Abacate", "Laranja", "Acerola", "Maracujá"];

  constructor() { }

  ngOnInit(): void {
  }

}

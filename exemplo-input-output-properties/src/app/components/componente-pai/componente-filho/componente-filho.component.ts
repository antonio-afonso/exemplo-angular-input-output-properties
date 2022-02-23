import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent implements OnInit {

  @Input() informacaoComponenteFilho: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}

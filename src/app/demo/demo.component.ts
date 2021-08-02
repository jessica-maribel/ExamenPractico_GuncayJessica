import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'ups-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent implements OnInit {

  @Input() icon: string = 'airplane-outline';
  @Output() updateData = new EventEmitter<any>();
  
  contador = 0;

  constructor() { }

  ngOnInit() {}

  saludar(){
    this.contador = this.contador + 1;
    this.updateData.emit(this.contador);
  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  @Output() sendIceCream = new EventEmitter();

  submitForm(newFlavor: string, type: string, price: string) {
    let newIceCream: IceCream = new IceCream(newFlavor, type, parseFloat(price), 0);
    this.sendIceCream.emit(newIceCream);
  }
}

import { Component } from '@angular/core';
import { IceCream } from './models/ice-cream.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedIceCream = null;

  masterList: IceCream [] = [
    new IceCream('vanilla', 'basic', 4.5, 4),
    new IceCream('chocolate', 'basic', 4.5, 4),
    new IceCream('strawberry', 'basic', 4.5, 2),
    new IceCream('turtle', 'deluxe', 5.5, 4),
    new IceCream('rocky road', 'deluxe', 5.5, 4.5),
    new IceCream('peach', 'sorbet', 4, 3.5),
    new IceCream('coconut', 'sorbet', 4, 4.5)
  ];
  addIceCream(newIceCream: IceCream){
    this.masterList.push(newIceCream);
  }
  editButtonClicked(clickedIceCream) {
    this.selectedIceCream = clickedIceCream;
  }
  finishedEditing() {
    this.selectedIceCream = null;
  }
  sellIceCream(iceCream: IceCream) {
    if (iceCream.amount > 0){
      iceCream.amount-=1;
    }
  }
}

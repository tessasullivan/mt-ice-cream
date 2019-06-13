app.component.ts

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

// -------------------------------------------------------------------------
new.component.ts

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
// -------------------------------------------------------------------------
edit.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent  {

  @Input() childSelectedIceCream: IceCream;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}

// -------------------------------------------------------------------------
list.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() childIceCreamList: IceCream[];
  @Output() clickSender = new EventEmitter();
  @Output() sellSender = new EventEmitter();

  editButtonClicked(iceCreamToEdit: IceCream){
    this.clickSender.emit(iceCreamToEdit);
  }
  sellButtonClicked(iceCream: IceCream) {
    this.sellSender.emit(iceCream);
  }
  filterByAmountLeft: string = "allIceCream";
  onAmountChange(optionFromMenu) {
    this.filterByAmountLeft = optionFromMenu;
  }
  filterByType:string = "allTypes";
  onTypeChange(optionFromMenu) {
    this.filterByType = optionFromMenu;
  }
}


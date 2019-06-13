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

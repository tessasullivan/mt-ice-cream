import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IceCream } from '../models/ice-cream.model';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() childList: IceCream[];


}

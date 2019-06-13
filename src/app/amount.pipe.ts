import {Pipe, PipeTransform} from '@angular/core';
import { IceCream } from './models/ice-cream.model';

@Pipe({
  name: "amount",
  pure: false
})

export class AmountPipe implements PipeTransform {
  transform(input: IceCream[], inStock) {
    let output: IceCream[] = [];
    if (inStock === "Less than 50") {
      for (let i=0; i < input.length; i++) {
        if(input[i].amount <= 50) {
          output.push(input[i]);
        }
      }
    } else {
      output = input;
    }
    return output;
  }
}
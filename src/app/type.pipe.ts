import {Pipe, PipeTransform} from '@angular/core';
import { IceCream } from './models/ice-cream.model';

@Pipe({
  name: "type",
  pure: false
})

export class TypePipe implements PipeTransform {
  transform(input: IceCream[], inStock) {
    let output: IceCream[] = [];
    if (inStock === "basic") {
      for (let i=0; i < input.length; i++){
        if(input[i].type === "basic") {
          output.push(input[i]);
        }
      } 
    } else if (inStock === "deluxe") {
      for (let i=0; i < input.length; i++){
        if(input[i].type === "deluxe") {
          output.push(input[i]);
        }
      }       
    } else if (inStock === "sorbet") {
      for (let i=0; i < input.length; i++){
        if(input[i].type === "sorbet") {
          output.push(input[i]);
        }
      } 
    } else {
      output = input;
    }
    return output;
  }
}
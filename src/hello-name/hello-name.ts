import { ICustomElementViewModel } from 'aurelia';

export class HelloName implements ICustomElementViewModel {
  name = 'Person'
  constructor() {
    // you can inject the element or any DI in the constructor
   }
}

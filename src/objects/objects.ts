export class Product {
  public readonly id: number;
  
  public name: string;
  public price: number;
  
  constructor(props: Product) {
    Object.assign(this, props);
  }
}
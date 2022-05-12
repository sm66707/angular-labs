import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    new Product(1, "first product", "gdn-0011", new Date(2021, 2, 19), 35.59, 3.25, "download.jpg"),
    new Product(2, "second product", "gdn-0023", new Date(2021, 2, 18), 20.99, 4.25, "download.jpg"),
    new Product(3, "third product", "gdn-0048", new Date(2021, 4, 21), 14.90, 2, "download.jpg"),
    new Product(4, "fourth product", "gdn-0022", new Date(2021, 4, 15), 40.55, 3.75, "download.jpg"),
    new Product(5, "fifth product", "gdn-0042", new Date(2020, 9, 15), 10.95, 4.5, "download.jpg")
  ]

  filteredProducts: Product[] = [];
  newProduct: Product = new Product(0," ", " ", new Date(), 0.0, 5, "download.jpg");
  viewProduct: Product = new Product(0," ", " ", new Date(), 0.0, 5, "download.jpg");
  product: Product = new Product(0," ", " ", new Date(), 0.0, 5, "download.jpg");

  productName = '';
  imgFlag = false;
  showFlag = false;
  editFlag = false;

  showImage() {
    this.imgFlag = !this.imgFlag;
    console.log(this.imgFlag);
  }

  filter() {
    let count = 0;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name.toLowerCase() === this.productName.toLowerCase()) {
        this.filteredProducts[count] = this.products[i];
        count++;
      }
    }
  }

  addNewProduct(){
    this.showFlag = false;
    this.editFlag = false;
    this.products.push(new Product(this.newProduct.id, this.newProduct.name, this.newProduct.code, this.newProduct.available, this.newProduct.price, this.newProduct.rate, this.newProduct.img));
    this.newProduct.id = 0;
    this.newProduct.name = " ";
    this.newProduct.code = " ";
    this.newProduct.available = new Date();
    this.newProduct.price = 0.0;
    this.newProduct.rate = 5;
  }

  showProduct(productId: number) {
    this.showFlag = true;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == productId) {
        this.viewProduct = this.products[i];
        break;
      }
    }
  }

  editProduct(productId: number) {
    this.editFlag = true;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == productId) {
        this.product = this.products[i];
        break;
      }
    }
  }

  deleteProduct(productId: number) {
    this.showFlag = false;
    this.editFlag = false;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == productId) {
        this.products.splice(i, 1);
        break;
      }
    }
    for (let i = 0; i < this.filteredProducts.length; i++) {
      if (this.filteredProducts[i].id == productId) {
        this.filteredProducts.splice(i, 1);
        break;
      }
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }


}

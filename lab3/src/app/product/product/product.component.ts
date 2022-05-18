import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [
    new Product(1, "itemx", "10011", new Date(2021, 5, 11), 100, 2.5, "itemx.jpg"),
    new Product(2, "itemy", "10023", new Date(2021, 4, 30), 250, 3.5, "itemy.jpg"),
    new Product(3, "itemz", "20024", new Date(2021, 4, 21), 300, 5, "itemz.jpg")
    
  ]

  filteredProducts: Product[] = [];
  newProduct: Product = new Product(0," ", " ", new Date(), 0.0, 5, "img.png");
  viewProduct: Product = new Product(0," ", " ", new Date(), 0.0, 5, "img.png");
  product: Product = new Product(0," ", " ", new Date(), 0.0, 5, "img.png");

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
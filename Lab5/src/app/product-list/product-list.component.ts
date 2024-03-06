import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  type: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const brandParam = params.get('type');
      if (brandParam) {
        this.type = brandParam;
        this.filterProducts();
      }
    });
  }

  filterProducts() {
    if (this.type && this.type !== 'all') {
      this.products = products.filter(product => product.type === this.type);
    } else {
      this.products = [...products];
    }
  }

  share(productUrl: string) {
    let message = encodeURIComponent(`Check out this product: ${productUrl}`);
    window.open(`https://t.me/share/url?url=${message}`);
  }

  putLike(product: Product){
    product.likes++;
  }

  removeProduct(product: Product) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

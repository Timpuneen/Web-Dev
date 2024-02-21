import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  ratingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {
    this.ratingForm = this.formBuilder.group({
      rating: [null, [Validators.required, Validators.min(0), Validators.max(5)]]
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  rate() {
    if (this.product) {
      const newRating = this.ratingForm.value.rating;
      this.product.rating = (this.product.rating * this.product.cnt + newRating) / (this.product.cnt + 1);
      this.product.cnt++;
    }
  }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
}

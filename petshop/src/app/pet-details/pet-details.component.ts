import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  // package that have some methods and properties that will help us to grab the value from the URL and use it with some build-in methods
import { CartService } from '../cart.service';
import { products } from '../products';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private  cartService: CartService) { }
  pet: any;
  addToCart(pet: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(pet);
}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id : any = params.get('id');
        this.pet = products[id];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {
  products = products;
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-tickets',
  templateUrl: './buy-tickets.component.html',
  styleUrls: ['./buy-tickets.component.css']
})
export class BuyTicketsComponent implements OnInit {

  name!: string;
  email!: string;
  phone!: string;
  selectedEvents: number[] = [];

  events: {name: string, price: number}[] = [
    {name: 'Event A', price: 10},
    {name: 'Event B', price: 20},
    {name: 'Event C', price: 30},
  ];

  constructor() { }

  ngOnInit(): void {
  }
 
  calculateTotal(): number {
    let total = 0;
    for (let i = 0; i < this.selectedEvents.length; i++) {
      total += this.selectedEvents[i];
    }
    return total;
  }

  onSubmit(): void {
    // Add code to process the payment here
  }

  onCheckboxChange(event:any, price: number) {
    if (event.target.checked) {
      this.selectedEvents.push(price);
    } else {
      let index = this.selectedEvents.indexOf(price);
      this.selectedEvents.splice(index, 1);
    }
  }
}
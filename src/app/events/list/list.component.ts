import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
TechnicalEvents=[{
  title: "techevent1",
  description: "we have our reason  ",
  date: "26/11/23",
  location: "oIst Ground",
  image:"https://via.placeholder.com/300x200.png",
  price: 100,
  contact:"898979859858",
},
{
  title: "techevent2",
  description: "we have our reason  ",
  date: "26/11/23",
  location: "oIst Ground",
  price: 100,
  contact:"898979859858",
},
{
  title: "techevent3",
  description: "we have our reason  ",
  date: "25/11/23",
  location: "oIst Ground",
  price: 100,
  contact:"898979859858",
},
{
  title: "techevent2",
  description: "we have our reason  ",
  date: "25/11/23",
  location: "oIst Ground",
  price: 100,  contact:"898979859858",
},
{
  title: "techevent2",
  description: "we have our reason  ",
  date: "28/11/23",
  location: "oIst Ground",
  price: 100,  contact:"898979859858",
},{
  title: "techevent2",
  description: "we have our reason  ",
  date: "23/11/23",
  location: "oIst Ground",
  price: 400,
  contact:"898979859858",
}
]

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events!: any[];

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      this.events = data.filter(event => event.category === this.eventService.selectedCategory);
    });
  
}

}
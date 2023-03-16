import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  constructor(private categoryService: EventService, private router: Router) { }

  ngOnInit(): void {
  }
  onSelect(category: string) {
    this.categoryService.selectedCategory = category;
   this.router.navigate(['/list']);
  }
}

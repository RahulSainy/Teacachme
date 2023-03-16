import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  selectedCategory: string = '';
  private eventsUrl = '/api/events';
  private buyTicketUrl = '/api/buy-ticket';

  constructor(private http: HttpClient) {}

  getEvents() {
    // return this.http.get<any[]>(this.eventsUrl);
    return this.http.get<any[]>('/assets/events.json');
  }

  buyTicket(ticketRequest: any) {
    return this.http.post(this.buyTicketUrl, ticketRequest);
  }
}

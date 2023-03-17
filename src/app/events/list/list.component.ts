import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EventService } from '../event.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(data => {
      if (this.eventService.selectedCategory) {
        this.events = data.filter(event => event.category === this.eventService.selectedCategory);
      } else {
        this.events = data;
      }
    });
  }

  openPdfModal(event: any, index: number): void {
    const pdfUrl = event.moreDetails;
    const pdfIframeId = 'pdfFrame' + index;
    const pdfModalId = 'pdfModal' + index;

    const pdfIframe = document.getElementById(pdfIframeId) as HTMLIFrameElement;
    pdfIframe.src = pdfUrl;

    const pdfModal = document.getElementById(pdfModalId) as HTMLElement;
    pdfModal.classList.add('show');
    pdfModal.style.display = 'block';
  }

  closePdfModal(index: number): void {
    const pdfModalId = 'pdfModal' + index;
    const pdfModal = document.getElementById(pdfModalId) as HTMLElement;
    pdfModal.classList.remove('show');
    pdfModal.style.display = 'none';
  }
}




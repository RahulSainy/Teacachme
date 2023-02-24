import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  eventsCollection!: AngularFirestoreCollection<any>;
  events = [
    {
      id: 1,
      category: 'Technical',
      title: 'Lan Gaming',
      pricing:
        'Rs 100/- per person for individual event, 300 Rs. Per Team (Max Team Size 4- PubG), 400 Rs. Per Team for group event (Max Team Size 4- Valorant)',
    },
    {
      id: 2,
      category: 'Technical',
      title: 'Paper Presentation',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 3,
      category: 'Technical',
      title: 'Code hunt',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 4,
      category: 'Technical',
      title: 'Assemble and Dissemble',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 5,
      category: 'Technical',
      title: 'Circuit Desiging',
      pricing: 'Rs 300/- per Team (Max size 3)',
    },
    {
      id: 6,
      category: 'Technical',
      title: 'Lensense and photography workshop cum contest',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 7,
      category: 'Technical',
      title: 'Project/Model and Mega structure Competition',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 8,
      category: 'Technical',
      title: 'Art of junkies',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 9,
      category: 'Technical',
      title:
        'Robodino competition(robotics,robo race, line follower, gripper)',
      pricing: 'Rs 300/- Team (Max Team size 4)',
    },
    {
      id: 10,
      category: 'Mega Events/Games',
      title: 'Water rocket Propulsion',
      pricing: 'Rs 300/- Per Team (Team Size max 3)',
    },
    {
      id: 11,
      category: 'Mega Events/Games',
      title:
        'Talent Star light(singing, dancing, acting, instrumental, poetry, mime) and band show',
      pricing:
        'Rs 200/- Per Person, 500/-Rs per Team (Dance Max 5 and Rs 100 per person for above 5 members), Rs 500/- per Team(Bandshow) (Max 5 and Rs 100 per person for above 5 members)',
    },
    {
      id: 12,
      category: 'Mega Events/Games',
      title: 'Treasure HUnt',
      pricing: 'Rs 100/- Per Person',
    },
    {
      id: 13,
      category: 'Mega Events/Games',
      title: 'Auto Expo',
      pricing: '300'
    },
    {
      id: 14,
      category: 'Mega Events/Games',
      title: 'Fiesta Evening',
      pricing: 'Rs 300/- per person',
    },

    {
      id: 15,
      category: 'Mega Events/Games',
      title: 'Roadies Battle yard and stunt show',
      pricing: 'Rs.100/- per person',
    },
    {
      id: 16,
      category: 'Mega Events/Games',
      title: 'Traditional Fasion Show',
      pricing: 'Rs. 300/- per person',
    },
    {
      id: 17,
      category: 'Mega Events/Games',
      title: '100 Rs Venture',
      pricing: 'Rs 500/- per Team (Team Size Max 5)',
    },
    {
      id: 18,
      category: 'Cultural',
      title: 'Face Painting',
      pricing: 'Rs 100/- per person',
    },
    {
      id: 19,
      category: 'Cultural',
      title: 'Flash mob and nukkad natak',
      pricing: '300'
    },
    {
      id: 20,
      category: 'Cultural',
      title: 'Admad show',
      pricing: 'Rs 100/- per person',
    },
    {
      id: 21,
      category: 'Cultural',
      title: 'Extempore',
      pricing: 'Rs 100/- per person',
    },
    {
      id: 22,
      category: 'Cultural',
      title: 'Mock Parliament',
      pricing: 'Rs 100/- per person',
    },
    {
      id: 23,
      category: 'Cultural',
      title: 'Mega workshop/Lecture Series',
      pricing: 'Rs 200/- per person',
    },
    {
      id: 24,
      category: 'Sports',
      title: 'Volleyball',
      pricing: 'Rs 600/- per team (Max 6 members)',
    },
    {
      id: 25,
      category: 'Sports',
      title: 'Badminton',
      pricing: 'Rs 100/- single and Rs 200/- for Doubles',
    },
    {
      id: 26,
      category: 'Sports',
      title: 'Cricket',
      pricing: 'Rs 1100/- per team',
    },
    {
      id: 27,
      category: 'Sports',
      title: 'Chess',
      pricing: 'Rs 100/- per person',
    },
    {
      id: 28,
      category: 'Sports',
      title: 'Basketball',
      pricing: 'Rs 500/- per team',
    },
    {
      id: 29,
      category: 'Sports',
      title: 'Futsal',
      pricing: 'Rs 700/- per team',
    },
    {
      id: 30,
      category: 'Sports',
      title: 'Kabbadi',
      pricing: 'Rs 700/- per team',
    },
  ];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    // this.addEvents() 
  }
  addEvents() {
    this.events.forEach((event) => {
        this.db.collection('Events').add({
          id:event.id,
          category: event.category,
          title: event.title,
          pricing: event.pricing,
        })
        .then(() => {
          console.log("Document updated successfully");
        })
        .catch(error => {
          console.error("Error updating document: ", error);
        });
      });
  }
}

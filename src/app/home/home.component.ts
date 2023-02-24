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
      event_category: 'Technical',
      event_name: 'Lan Gaming',
      price:
        'Rs 100/- per person for individual event, 300 Rs. Per Team (Max Team Size 4- PubG), 400 Rs. Per Team for group event (Max Team Size 4- Valorant)',
    },
    {
      id: 2,
      event_category: 'Technical',
      event_name: 'Paper Presentation',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 3,
      event_category: 'Technical',
      event_name: 'Code hunt',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 4,
      event_category: 'Technical',
      event_name: 'Assemble and Dissemble',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 5,
      event_category: 'Technical',
      event_name: 'Circuit Desiging',
      price: 'Rs 300/- per Team (Max size 3)',
    },
    {
      id: 6,
      event_category: 'Technical',
      event_name: 'Lensense and photography workshop cum contest',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 7,
      event_category: 'Technical',
      event_name: 'Project/Model and Mega structure Competition',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 8,
      event_category: 'Technical',
      event_name: 'Art of junkies',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 9,
      event_category: 'Technical',
      event_name:
        'Robodino competition(robotics,robo race, line follower, gripper)',
      price: 'Rs 300/- Team (Max Team size 4)',
    },
    {
      id: 10,
      event_category: 'Mega Events/Games',
      event_name: 'Water rocket Propulsion',
      price: 'Rs 300/- Per Team (Team Size max 3)',
    },
    {
      id: 11,
      event_category: 'Mega Events/Games',
      event_name:
        'Talent Star light(singing, dancing, acting, instrumental, poetry, mime) and band show',
      price:
        'Rs 200/- Per Person, 500/-Rs per Team (Dance Max 5 and Rs 100 per person for above 5 members), Rs 500/- per Team(Bandshow) (Max 5 and Rs 100 per person for above 5 members)',
    },
    {
      id: 12,
      event_category: 'Mega Events/Games',
      event_name: 'Treasure HUnt',
      price: 'Rs 100/- Per Person',
    },
    {
      id: 13,
      event_category: 'Mega Events/Games',
      event_name: 'Auto Expo',
    },
    {
      id: 14,
      event_category: 'Mega Events/Games',
      event_name: 'Fiesta Evening',
      price: 'Rs 300/- per person',
    },

    {
      id: 15,
      event_category: 'Mega Events/Games',
      event_name: 'Roadies Battle yard and stunt show',
      price: 'Rs.100/- per person',
    },
    {
      id: 16,
      event_category: 'Mega Events/Games',
      event_name: 'Traditional Fasion Show',
      price: 'Rs. 300/- per person',
    },
    {
      id: 17,
      event_category: 'Mega Events/Games',
      event_name: '100 Rs Venture',
      price: 'Rs 500/- per Team (Team Size Max 5)',
    },
    {
      id: 18,
      event_category: 'Cultural',
      event_name: 'Face Painting',
      price: 'Rs 100/- per person',
    },
    {
      id: 19,
      category: 'Cultural',
      name: 'Flash mob and nukkad natak',
    },
    {
      id: 20,
      category: 'Cultural',
      name: 'Admad show',
      price: 'Rs 100/- per person',
    },
    {
      id: 21,
      category: 'Cultural',
      name: 'Extempore',
      price: 'Rs 100/- per person',
    },
    {
      id: 22,
      category: 'Cultural',
      name: 'Mock Parliament',
      price: 'Rs 100/- per person',
    },
    {
      id: 23,
      category: 'Cultural',
      name: 'Mega workshop/Lecture Series',
      price: 'Rs 200/- per person',
    },
    {
      id: 24,
      category: 'Sports',
      name: 'Volleyball',
      price: 'Rs 600/- per team (Max 6 members)',
    },
    {
      id: 25,
      category: 'Sports',
      name: 'Badminton',
      price: 'Rs 100/- single and Rs 200/- for Doubles',
    },
    {
      id: 26,
      category: 'Sports',
      name: 'Cricket',
      price: 'Rs 1100/- per team',
    },
    {
      id: 27,
      category: 'Sports',
      name: 'Chess',
      price: 'Rs 100/- per person',
    },
    {
      id: 28,
      category: 'Sports',
      name: 'Basketball',
      price: 'Rs 500/- per team',
    },
    {
      id: 29,
      category: 'Sports',
      name: 'Futsal',
      price: 'Rs 700/- per team',
    },
    {
      id: 30,
      category: 'Sports',
      name: 'Kabbadi',
      price: 'Rs 700/- per team',
    },
  ];

  constructor(private db: AngularFirestore) {}

  ngOnInit(): void {
    this.events.forEach((event, index) => {
      this.db.collection('Events').add({
        category: event.event_category || event.category,
        name: event.event_name || event.name,
        price: event.price,
      })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch(error => {
        console.error("Error updating document: ", error);
      });
    });

    // this.eventsCollection = this.db.collection('Events');
    // this.eventsCollection.valueChanges().subscribe((data:any) => {
    //   this.events = data;
    //   // If the collection is empty, add the default events
    //   if (this.events.length === 0) {
    //   }
    // });
    // this.addDefaultEvents();
  }
  addDefaultEvents() {
    this.events.forEach((event, index) => {
      const id = this.db.createId(); // Generate a new ID for the document
      this.eventsCollection.doc(id).set({
        category: event.event_category || event.category,
        name: event.event_name || event.name,
        price: event.price,
      })
      .then(() => {
        console.log("Document updated successfully");
      })
      .catch(error => {
        console.error("Error updating document: ", error);
      });;
    });
  }
}

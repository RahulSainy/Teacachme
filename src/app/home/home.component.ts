import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
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
 
  name!: string;
  email!: string;
  comments!:string
  
  
  constructor(private db: AngularFirestore,private afdb: AngularFireDatabase,) {}

  ngOnInit(): void {
  }
 
  onSubmit() {
    const footerform = {
      name:this.name,
      email: this.email,
      comments: this.comments
    }
    this.afdb.list('contact').push(footerform).then(() => {
  this.name="",this.email="",this.comments=""
      });
  }
  }

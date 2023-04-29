 import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: any;
  constructor(private http:HttpClient){

  }
  title = 'client';
 
  ngOnInit(): void {
    this.http.get('http://localhost:5155/api/users').subscribe({
      next: response => this.users = response,
      error: error =>console.log(error),
      complete:()=>console.log('completed')
    });

  }
}
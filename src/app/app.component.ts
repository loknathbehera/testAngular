import { NgModel } from '@angular/forms/src/directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details</h2>
  <div><label>Id :</label>{{hero.id}}</div>
 <div>
 <label>Name:</label>
 <input [(ngModel)] = "hero.name" placeholder="name">
 </div>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello App';
  hero: Hero = {
    id: 1,
    name: 'Lokanath'
  };
}
export class Hero {
  id: number;
 name: String;
}

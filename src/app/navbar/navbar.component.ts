import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private date: Date;

  constructor(private _route: ActivatedRoute) {
    this.date = new Date();
  }

  ngOnInit() {}
}

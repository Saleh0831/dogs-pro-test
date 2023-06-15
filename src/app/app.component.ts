import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AuthentionService } from './services/authention.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cookieValue:any;
  constructor(private cookieService: CookieService,private authService:AuthentionService,private router:Router){
    this.cookieValue = this.cookieService.get('esohp-cookie');
  }
  ngOnInit(): void {
    if(this.cookieValue){
      this.authService.setCurrentUser(true);
    }

    
  }}
    
    
  
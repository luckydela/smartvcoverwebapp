import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landinglogin',
  templateUrl: './landinglogin.component.html',
  styleUrls: ['./landinglogin.component.scss']
})
export class LandingloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/dashboard'])
  }
}

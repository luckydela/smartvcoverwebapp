import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motorinsurance',
  templateUrl: './motorinsurance.component.html',
  styleUrls: ['./motorinsurance.component.scss']
})
export class MotorinsuranceComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  route(path:any){
    this.router.navigate([path])
  }

}

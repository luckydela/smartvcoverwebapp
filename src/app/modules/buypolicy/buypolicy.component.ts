import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-buypolicy',
  templateUrl: './buypolicy.component.html',
  styleUrls: ['./buypolicy.component.scss']
})
export class BuypolicyComponent implements OnInit {
  

  constructor(private router:Router, private service: AppService) { }

  ngOnInit() {
  }

  buynewPolicy(){
    this.router.navigate(['/payments']);
  }

  renewPolicy(){
    this.router.navigate(['/payments']);
  }

}

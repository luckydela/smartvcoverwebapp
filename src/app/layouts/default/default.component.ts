import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CUSTOMER_MENUS, AGENT_MENUS } from '../../data.model';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  menus:any;
  constructor(private router: Router ) { }

  ngOnInit() {
    // This will be set at login
    this.menus = false ? CUSTOMER_MENUS : AGENT_MENUS;
  }

  route(path:any){
    this.router.navigate([path])
  }

}

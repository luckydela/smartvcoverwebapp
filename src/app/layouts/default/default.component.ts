import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  menus:any = [
    {
      name: 'Policies',
      submenus: [
        {
          name: 'Buy Policy',
          img: 'buy-16.png',
          path:'buypolicy'
        },
        {
          name: 'Review Policy',
          img:'buy-2-16.png',
          path: 'mypolicies'
        },
        {
          name: 'My Policies',
          img:'text-file-5-16.png',
          path: 'mypolicies'
        }
      ]
    },
    {
      name: 'Claims',
      submenus: [
        {
          name: 'Make a new claim',
          img: 'add-user-2-16.png',
          path: 'make-a-claim'
        },
        {
          name: 'My claim status',
          img:'outline-16.png',
          path: 'claimstatus'
        },
        {
          name: 'My Claims',
          img:'text-file-5-16.png',
          path: 'myclaims'
        }
      ]
    },
    {
      name: 'Other',
      submenus: [
        {
          name: 'My sticker',
          img: 'checked-user-16.png',
          path: 'mysitcker'
        },
        {
          name: 'Notification',
          img:'check-mark-3-16.png',
          path: 'notifications'
        },
        {
          name: 'Settings',
          img:'user-3-16.png',
          path: 'settings'
        }
      ]
    }
  ]
  constructor(private router: Router ) { }

  ngOnInit() {
  }

  route(path:any){
    this.router.navigate([path])
  }

}

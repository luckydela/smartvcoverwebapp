import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'smartcoverweb';

  constructor(private appservice: AppService, private router: Router){
    
  }

  ngOnInit(){
    if(this.appservice.retrieveuserdata()){
      this.router.navigate(['/dashboard'])
    } else {
      this.router.navigate['/']
    }
  }
}

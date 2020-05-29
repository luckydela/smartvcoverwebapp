import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
  formstate:any = 'Agent Login';
  formtitle:any = 'Customer Login'
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.router.navigate(['/dashboard'])
  }
  route(path:any){
    this.router.navigate([path])
  }
  show(state:any){
    this.formstate = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
    this.formtitle = this.formstate === 'Agent Login' ? 'Customer Login' : 'Agent Login';
  }

}

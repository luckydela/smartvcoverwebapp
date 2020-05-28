import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() message:any = ''
  @Input() type:any = '' 
  @Input() show:boolean = false;
  @Input() time:any = ''
  constructor() { }

  ngOnInit() {
    console.log(this.message);
    
    
  }
  ngAfterViewInit(){
    // setTimeout(()=>{
    //   this.show = false
    // }, this.time)
    // console.log('allen');
    
  }
  ngAfterContentInit(): void {
    // console.log('Kwasi');
    
  }
  close(){
    this.show = false;
  }
}

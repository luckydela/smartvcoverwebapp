import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() message:any = '';
  @Input() type:any = '';
  @Output() emitterfn = new EventEmitter();
  constructor() { }

  ngOnInit() { 
    
  }

  close(){
   this.emitterfn.emit(false)
  }
}

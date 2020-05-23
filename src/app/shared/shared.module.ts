import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    HeaderComponent,
     SidebarComponent,
      FooterComponent,
      CardComponent,
      
    ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }

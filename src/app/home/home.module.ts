import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
// import { ServicesPageModule } from '../services/services.module';
import { ServicesPage } from '../services/services.page'





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // ServicesPageModule // Make sure this is correctly imported

  ],
  declarations: [HomePage],
  providers: [ServicesPage]
})
export class HomePageModule {}

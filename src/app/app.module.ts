import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "app/app.component";

import { Router } from '@angular/router';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { TaskModule } from './task/task.module';

@NgModule({
  declarations: [
    AppComponent,  
    appRouterComponents, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TaskModule,
    AppRoutingModule,   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './guards/auth.guard';
import { AppComponent } from "./app.component";
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AppRoutingModule, appRouterComponents } from './app.routing.module';
import { TaskModule } from './task/task.module';
import { UsersModule } from './users/users.module';
import { AdminModule } from './admin/admin.module';
import { ShopModule } from './shop/shop.module';
import { DialogService } from './services/dialog.service';
import { LocalStorageModule } from 'angular-2-local-storage';

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
    UsersModule,
    AdminModule,
    ShopModule,
    AppRoutingModule,  
    LocalStorageModule.withConfig({
            prefix: 'my-app',
            storageType: 'localStorage'
    })             
  ],
  providers: [AuthGuard, AuthService, DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {ProductComponent} from "./product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing/app-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent ,
    NavBarComponent ,
    ProductComponent ,
    ProductListComponent,

  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        BrowserModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatGridListModule,
        MatCardModule

    ],
  bootstrap:[AppComponent]
})
export class AppModule { }

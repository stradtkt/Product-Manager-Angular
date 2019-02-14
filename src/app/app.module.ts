import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { AppComponent } from './app.component';
import * as fromProducts from './products';

@NgModule({
  declarations: [
    AppComponent, ...fromProducts.components],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

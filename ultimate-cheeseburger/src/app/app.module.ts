import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BottomBreadComponent } from './bottom-bread/bottom-bread.component';
import { TopBreadComponent } from './top-bread/top-bread.component';
import { MeatComponent } from './meat/meat.component';
import { CheeseComponent } from './cheese/cheese.component';
import { CheddarComponent } from './cheddar/cheddar.component';
import { LettuceComponent } from './lettuce/lettuce.component';
import { KetchupComponent } from './ketchup/ketchup.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomBreadComponent,
    TopBreadComponent,
    MeatComponent,
    CheeseComponent,
    CheddarComponent,
    LettuceComponent,
    KetchupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

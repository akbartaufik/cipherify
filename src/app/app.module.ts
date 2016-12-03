import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CaesarComponent} from './caesar.component';
import {VigenereComponent} from './vigenere.component';
import {TransposeComponent} from './transpose.component';
import {PlayfairComponent} from './playfair.component';

@NgModule({
  declarations: [
    AppComponent,
    CaesarComponent,
    VigenereComponent,
    TransposeComponent,
    PlayfairComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ButtonComponent } from './button/button.component';
import { ThemeComponent } from './theme/theme.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ButtonComponent, ThemeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

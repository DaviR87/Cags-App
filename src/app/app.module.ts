import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestModule } from './test/test.module';
import { LoginComponent } from './login/login.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { RegexValidatorDirective } from './regex-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReactiveComponent,
    RegexValidatorDirective
  ],
  imports: [
    TestModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AvPackagesComponent } from './av-packages/av-packages.component';
import { AvPackageComponent } from './av-packages/av-package/av-package.component';

@NgModule({
  declarations: [
    AppComponent,
    AvPackagesComponent,
    AvPackageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

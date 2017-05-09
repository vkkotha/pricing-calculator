import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AvPackagesRoutingModule } from './av-packages/av-packages-routing.module';
import { AppComponent } from './app.component';
import { AvPackageListComponent } from './av-packages/av-package-list/av-package-list.component';
import { AvPackageComponent } from './av-packages/av-package/av-package.component';
import { AvPackageCustomizerComponent } from './av-packages/av-package-customizer/av-package-customizer.component';

@NgModule({
  declarations: [
    AppComponent,
    AvPackageListComponent,
    AvPackageComponent,
    AvPackageCustomizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AvPackagesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

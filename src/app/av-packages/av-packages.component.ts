import { Component, OnInit } from '@angular/core';
import { AvPackagesService } from './av-packages.service';
import { AvPackage } from './av-package';

@Component({
  selector: 'app-av-packages',
  templateUrl: './av-packages.component.html',
  styleUrls: ['./av-packages.component.css'],
  providers: [ AvPackagesService ]
})
export class AvPackagesComponent implements OnInit {
  packages: AvPackage[];

  constructor(private packagesService: AvPackagesService) { }

  ngOnInit() {
  	this.packages = this.packagesService.getSamplePackages();
  }
}

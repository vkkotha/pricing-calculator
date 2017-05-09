import { Component, OnInit } from '@angular/core';
import { AvPackagesService } from '../av-packages.service';
import { AvPackage } from '../av-package.model';

@Component({
  selector: 'app-av-package-list',
  templateUrl: './av-package-list.component.html',
  styleUrls: ['./av-package-list.component.css'],
  providers: [ AvPackagesService ]
})
export class AvPackageListComponent implements OnInit {
  packages: AvPackage[];

  constructor(private packagesService: AvPackagesService) { }

  ngOnInit() {
  	this.packages = this.packagesService.getSamplePackages();
  }
}

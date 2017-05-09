import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvPackagesService } from '../av-packages.service';
import { AvPackage } from '../av-package.model';
import { AvPackageItem } from '../av-package-item.model';

@Component({
  selector: 'app-av-package-customizer',
  templateUrl: './av-package-customizer.component.html',
  styleUrls: ['./av-package-customizer.component.css'],
  providers: [ AvPackagesService ]
})
export class AvPackageCustomizerComponent implements OnInit {
  selectedPackage: AvPackage;
  projectors: AvPackageItem[];
  screens: AvPackageItem[];
  receivers: AvPackageItem[];
  speakerSystems: AvPackageItem[];

  constructor(private route: ActivatedRoute, private packagesService: AvPackagesService) { }

  ngOnInit() {
  	let strSelectedPackage = this.route.snapshot.paramMap.get('selectedPackage');
  	this.selectedPackage = this.packagesService.getSamplePackageByName(strSelectedPackage);
    this.projectors = this.packagesService.getItemsByCategory("Projector");
    this.screens = this.packagesService.getItemsByCategory("Screen");
    this.receivers = this.packagesService.getItemsByCategory("Receiver");
    this.speakerSystems = this.packagesService.getItemsByCategory("SpeakerSystem");
  }
}

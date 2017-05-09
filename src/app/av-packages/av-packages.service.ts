import { Injectable } from '@angular/core';
import {AvPackageItem} from './av-package-item.model';
import {AvPackage} from './av-package.model';

@Injectable()
export class AvPackagesService {

  private strPackageItems: string = `
  	Sony-1080p-1,Sony 45E 1080p Projector,Projector,1999.23
  	Denon-7.1-1,Denon S950W 7.1 Receiver,Receiver,599.94
    Martin-1,Martin Logan SX Series Speakers and Subwoofer,SpeakerSystem,1200.00
    B&W-1,B&W Premium Series Speakers and Subwoofer,SpeakerSystem,3200.00
  `;

  private packageItems: AvPackageItem[];
  private samplePackages: AvPackage[] = [];
  
  

  constructor() { 
  	this.buildPackageItems();
  	this.buildSamplePackages();
  }

  private buildPackageItems() {
  	let arrLines: string[] = this.strPackageItems.split('\n');
  	let arrTrimmedLines: string[] = arrLines.map(l => l.trim());
  	let arrNonEmptyLines: string[] = arrTrimmedLines.filter(l => l.length > 0);
  	let arrPackageItems: string[][] = arrNonEmptyLines.map(l => l.split(','));
  	this.packageItems = arrPackageItems.map(r => {
  		return new AvPackageItem(r[0], r[1], r[2], Number(r[3]));
  	});
  }

  private buildSamplePackages() {
  	let silver: AvPackage = this.createAvPackage('Silver', {
  		'projector': 'Sony-1080p-1',
  		'receiver': 'Denon-7.1-1',
      'speakerSystem': 'Martin-1',
      'soundSystem': '5.1'
  	});

  	let gold: AvPackage = this.createAvPackage('Gold', {
  		'projector': 'Sony-1080p-1',
  		'receiver': 'Denon-7.1-1'
  	});

  	let platinum: AvPackage = this.createAvPackage('Platinum', {
  		'projector': 'Sony-1080p-1',
  		'receiver': 'Denon-7.1-1'
  	});

  	this.samplePackages.push(silver);
  	this.samplePackages.push(gold);
  	this.samplePackages.push(platinum);
  }

  getAllItems(): AvPackageItem[] {
  	return this.packageItems;
  }

  getItemsByCategory(category: string): AvPackageItem[] {
  	return this.packageItems.filter(item => {
  		return item.category.toUpperCase() === category.toUpperCase();
  	});
  }

  getItemByCode(code: string): AvPackageItem {
  	code = code || '';
  	let matchIndex: number = this.packageItems.findIndex(item => item.code.toUpperCase() === code.toUpperCase());
  	if (matchIndex >= 0) {
  		return this.packageItems[matchIndex];
  	}
  	return null;
  }

  createAvPackage(name: string, items: any): AvPackage {
  	const pack = new AvPackage(name);
  	pack.soundSystem = items['soundSystem'];
  	pack.projector = this.getItemByCode(items['projector']);
  	pack.screen = this.getItemByCode(items['screen']);
  	pack.receiver = this.getItemByCode(items['receiver']);
  	pack.speakerSystem = this.getItemByCode(items['speakerSystem']);
  	pack.controlSystem = this.getItemByCode(items['controlSystem']);
  	return pack;
  }

  getSamplePackages(): AvPackage[] {
  	return this.samplePackages;
  }

  getSamplePackageByName(packageName: string): AvPackage {
    let matchIndex: number = this.samplePackages.findIndex(item => item.name.toUpperCase() === packageName.toUpperCase());
    if (matchIndex >= 0) {
      return this.samplePackages[matchIndex];
    }
    return null;
  }
}

import {AvPackageItem} from './av-package-item';

export class AvPackage {
	name: string;
	soundSystem: string;
	projector: AvPackageItem;
	screen: AvPackageItem;
	receiver: AvPackageItem;
	speakerSystem: AvPackageItem;
	controlSystem: AvPackageItem;

	constructor(name: string) {
		this.name = name;
	}

	getTotalPrice(): number {
		let total = 0;
		if (this.projector) {
			total += this.projector.price;
		}
		if(this.screen) {
			total += this.screen.price;
		}
		if(this.receiver) {
			total += this.receiver.price;
		}
		if(this.speakerSystem) {
			total += this.speakerSystem.price;
		}
		if(this.controlSystem) {
			total += this.controlSystem.price;
		}
		return total;
	}
}

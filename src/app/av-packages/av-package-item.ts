export class AvPackageItem {
	code: string;
	name: string;
	category: string;
	price: number;


	constructor(code: string, name: string, category: string, price: number) {
		this.code = code;
		this.name = name;
		this.category = category || 'Unknown';
		this.price = price || 0;
	}
}
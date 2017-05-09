import { TestBed, inject } from '@angular/core/testing';
import { AvPackagesService } from './av-packages.service';

describe('AvPackagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvPackagesService]
    });
  });

  it('should ...', inject([AvPackagesService], (service: AvPackagesService) => {
    expect(service).toBeTruthy();
  }));

  it('should getAllItems', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getAllItems().length).toBeGreaterThan(0);
  }));

  it('should getItemsByCategory for Projector', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getItemsByCategory('Projector').length).toBeGreaterThan(0);
  }));

  it('should getItemsByCategory for invalid cateogry', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getItemsByCategory('invalid').length).toEqual(0);
  }));

  it('should getItemByCode for Sony-1080p-1 should return the item', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getItemByCode('Sony-1080p-1').code).toEqual('Sony-1080p-1');
  }));

  it('should getItemByCode for invalid code should return null', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getItemByCode('invalid')).toEqual(null);
  }));

  it('should create an AvPackage', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.createAvPackage('Test', {
  		'projector': 'Sony-1080p-1'
  	})).not.toEqual(null);
  }));

  it('should create an AvPackage and total price should be more than 0', inject([AvPackagesService], (service: AvPackagesService) => {
  	const pack = service.createAvPackage('Test', {
  		'projector': 'Sony-1080p-1',
  		'receiver': 'Denon-7.1-1'
  	});
   	expect(pack.getTotalPrice()).toBeGreaterThan(0);
  }));

  it('should have 3 sample packages', inject([AvPackagesService], (service: AvPackagesService) => {
  	expect(service.getSamplePackages().length).toEqual(3);
  }));

});

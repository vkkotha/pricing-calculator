import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPackageListComponent } from './av-package-list.component';
import { AvPackageComponent } from '../av-package/av-package.component';

describe('AvPackagesComponent', () => {
  let component: AvPackageListComponent;
  let fixture: ComponentFixture<AvPackageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvPackageListComponent, AvPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvPackageListComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

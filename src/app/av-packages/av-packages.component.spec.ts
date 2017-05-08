import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPackagesComponent } from './av-packages.component';
import { AvPackageComponent } from './av-package/av-package.component';

describe('AvPackagesComponent', () => {
  let component: AvPackagesComponent;
  let fixture: ComponentFixture<AvPackagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvPackagesComponent, AvPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvPackagesComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

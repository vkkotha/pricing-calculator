import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPackageComponent } from './av-package.component';
import { AvPackage } from '../av-package';

describe('AvPackageComponent', () => {
  let component: AvPackageComponent;
  let fixture: ComponentFixture<AvPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvPackageComponent);
    component = fixture.componentInstance;
    component.avPackage = new AvPackage('Test');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

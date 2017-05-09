import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvPackageCustomizerComponent } from './av-package-customizer.component';

describe('AvPackageCustomizerComponent', () => {
  let component: AvPackageCustomizerComponent;
  let fixture: ComponentFixture<AvPackageCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvPackageCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvPackageCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

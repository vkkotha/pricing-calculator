import { Component, Input, OnInit } from '@angular/core';
import { AvPackage } from '../av-package.model';

@Component({
  selector: 'app-av-package',
  templateUrl: './av-package.component.html',
  styleUrls: ['./av-package.component.css']
})
export class AvPackageComponent implements OnInit {

  @Input() avPackage: AvPackage;

  constructor() { }

  ngOnInit() {
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvPackageListComponent } from './av-package-list/av-package-list.component';
import { AvPackageCustomizerComponent } from './av-package-customizer/av-package-customizer.component';

const AvPackagesRoutes: Routes = [
	{ path: '', component: AvPackageListComponent },
	{ path: 'av-packages', component: AvPackageListComponent },
	{ path: 'av-packages/customize/:selectedPackage', component: AvPackageCustomizerComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(AvPackagesRoutes)
	]
})
export class AvPackagesRoutingModule {}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudarchitectureComponent } from './cloudarchitecture.component';

const routes: Routes = [
    { path: '', component: CloudarchitectureComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CloudarchitectureRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BigdataComponent } from './bigdata.component';

const routes: Routes = [
    { path: '', component: BigdataComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BigdataRoutingModule { }

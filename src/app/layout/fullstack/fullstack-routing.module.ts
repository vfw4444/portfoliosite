import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullstackComponent } from './fullstack.component';

const routes: Routes = [
    { path: '', component: FullstackComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FullstackRoutingModule { }

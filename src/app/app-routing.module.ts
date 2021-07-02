import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarewellComponent } from './components/farewell/farewell.component';

const routes: Routes = [
  {path: '', component: FarewellComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

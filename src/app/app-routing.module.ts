import { ToolDeleteComponent } from './tools/tool-delete/tool-delete.component';
import { ToolCreateComponent } from './tools/tool-create/tool-create.component';
import { ToolReadComponent } from './tools/tool-read/tool-read.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list', component: ToolReadComponent },
  { path: 'create', component: ToolCreateComponent },
  { path: 'delete/:id', component: ToolDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

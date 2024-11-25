import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MoneyTransferScreenComponent } from './components/money-transfer-screen/money-transfer-screen.component';
import { TableDataScreenComponent } from './components/table-data-screen/table-data-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginScreenComponent },
  { path: 'money-transfer', component: MoneyTransferScreenComponent },
  { path: 'table-data', component: TableDataScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

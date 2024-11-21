import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './components/login-screen/login-screen.component';
import { MoneyTransferScreenComponent } from './components/money-transfer-screen/money-transfer-screen.component';
import { TableDataScreenComponent } from './components/table-data-screen/table-data-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    MoneyTransferScreenComponent,
    TableDataScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

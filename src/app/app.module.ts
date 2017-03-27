import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransferComponent } from './transfer/transfer.component';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/map';

@NgModule({
  declarations: [
    AppComponent,
    TransactionListComponent,
    TransferComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'transaction-list', component: TransactionListComponent},
      {path: 'transfer', component: TransferComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  public transactionList = [];

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/assets/transactions.json')
      .map((response: Response) => response.json())
      .subscribe(value => {
        this.transactionList = value;
      });
  }

  public addToList() {
    this.transactionList.push({accountNumber: '456', amount: -60});
  }
}

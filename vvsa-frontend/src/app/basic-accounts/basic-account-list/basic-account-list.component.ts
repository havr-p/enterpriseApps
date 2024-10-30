import {Component, OnInit} from '@angular/core';
import {ITransaction} from "../../api/model/transaction";
import {TransactionsService} from "../../api/transactions.service";

@Component({
  selector: 'app-basic-accounts',
  templateUrl: './basic-account-list.component.html',
  styleUrl: './basic-account-list.component.css'
})
export class BasicAccountListComponent implements OnInit{
  transactions: ITransaction[] = [];
  displayedColumns: string[] = ['transactionId',
    'fullName', 'transactionType', 'accountNumber', 'bankCode', 'issueDate', 'amount']
  constructor(private transactionsService: TransactionsService) {
  }

  ngOnInit(): void {
    this.transactionsService.getTransactions$().subscribe(  {
      next: data => this.transactions = data.data,
      error: err => console.log(err),
    })
  }

}

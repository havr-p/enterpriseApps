import {Component, OnInit} from '@angular/core';
import {ITransaction} from "../../api/model/transaction";
import {TransactionsService} from "../../api/transactions.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-accounts',
  templateUrl: './basic-account-list.component.html',
  styleUrl: './basic-account-list.component.css'
})
export class BasicAccountListComponent implements OnInit{
  transactions: ITransaction[] = [];
  displayedColumns: string[] = ['transactionId',
    'fullName', 'transactionType', 'accountNumber', 'bankCode', 'issueDate', 'amount']
  constructor(private transactionsService: TransactionsService, private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.router.getCurrentNavigation());
    this.transactionsService.getTransactions$().subscribe(  {
      next: data => this.transactions = data.data,
      error: err => console.log(err),
    })
  }

  onRowClick(row: ITransaction) {
      console.log(row);
      this.router.navigateByUrl('./detail');
  }
}

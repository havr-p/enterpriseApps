import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITransaction} from "./model/transaction";


@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient: HttpClient){}

  getTransactions$() {
    return this.httpClient.get<{ data: ITransaction[]}>(`/api/transactions`);
  }

  getTransactionDetail$(id: string) {
  //...
  }
}

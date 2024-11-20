import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TransactionsService} from "../../api/transactions.service";
import {ITransaction} from "../../api/model/transaction";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-accounts-detail',
  templateUrl: './basic-accounts-detail.component.html',
  styleUrl: './basic-accounts-detail.component.css'
})
export class BasicAccountsDetailComponent implements OnInit{
  transactionForm: FormGroup;
  service: TransactionsService;
  @Input() data: ITransaction | undefined

  constructor(private fb: FormBuilder, private transactionsService: TransactionsService, private router: Router) {
    this.transactionForm = this.fb.group({
      transactionId: ['', Validators.required],
      fullName: ['', Validators.required],
      transactionType: ['', Validators.required],
      accountNumber: ['', Validators.required],
      bankCode: ['', Validators.required],
      issueDate: ['', Validators.required],
      amount: ['', [Validators.required]]
    });
    this.service = transactionsService;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { transaction: ITransaction };
    if (state?.transaction) {
      this.patchForm(state.transaction);
    }
  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transaction: ITransaction = this.transactionForm.value;
      console.log('Form submitted:', transaction);
      //this.service.save
    }
  }

  onReset(): void {
    this.transactionForm.reset();
  }

  patchForm(transaction: ITransaction): void {
    this.transactionForm.patchValue(transaction);
  }
}

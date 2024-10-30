  export interface ITransaction {
    transactionId: number;
    fullName: string;
    transactionType: number;
    accountNumber: string;
    bankCode: string;
    issueDate: Date;
    amount: number;
  }

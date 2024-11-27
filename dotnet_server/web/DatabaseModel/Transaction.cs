using System;
using System.Collections.Generic;

namespace web.DatabaseModel;

public partial class Transaction
{
    public int Id { get; set; }

    public int TransactionTypeId { get; set; }

    public int UserId { get; set; }

    public string AccountNumber { get; set; } = null!;

    public string BankCode { get; set; } = null!;

    public DateTime IssueDate { get; set; }

    public decimal Amount { get; set; }

    public virtual TransactionType TransactionType { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}

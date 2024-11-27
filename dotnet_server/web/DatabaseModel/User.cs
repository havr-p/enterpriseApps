using System;
using System.Collections.Generic;

namespace web.DatabaseModel;

public partial class User
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public decimal Salary { get; set; }

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}

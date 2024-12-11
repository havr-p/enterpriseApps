namespace web.DatabaseModel;
public class TransactionViewModel
{
    public decimal TransactionId { set; get; }
    public string FullName { set; get; }
    public string TransactionType { set; get; }
    public string AccountNumber { set; get; }
    public string BankCode { set; get; }
    public DateTime IssueDate { set; get; }
    public decimal Amount { set; get; }

}
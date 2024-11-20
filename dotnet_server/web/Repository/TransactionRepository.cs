using web.Model;

namespace web.Repository;

public class TransactionRepository : ITransactionRepository
{
    private List<Transaction> Transactions = new List<Transaction>();

    public TransactionRepository()
    {
        Transactions = new List<Transaction>
            {

    new Transaction
            {
                TransactionId = 1, TransactionType = TransactionType.Incoming,
                AccountNumber = "100", Amount = 500, BankCode = "SLSP", IssueDate = DateTime.Today
            },
            new Transaction
            {
                TransactionId = 2, TransactionType = TransactionType.Incoming,
                AccountNumber = "100", Amount = 500, BankCode = "SLSP", IssueDate = DateTime.Today
            }
        
    };
        }

    public List<Transaction> GetAllTransactions()
    {
        return Transactions;
    }

    public Transaction GetTransaction(int id)
    {
        return Transactions.FirstOrDefault(tr =>  tr.TransactionId == id);
    }
}
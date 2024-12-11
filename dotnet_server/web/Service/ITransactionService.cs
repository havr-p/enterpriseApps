
using web.DatabaseModel;

namespace web.Service;

public interface ITransactionService
{
    public List<TransactionViewModel> GetAllTransactions();
    public TransactionViewModel GetTransaction(int id);
}
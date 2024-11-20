
using web.Model;

namespace web.Service;

public interface ITransactionService
{
    List<Transaction> GetAllTransactions();
    Transaction GetTransaction(int id);
}
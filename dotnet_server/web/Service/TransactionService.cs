using web.Model;
using web.Repository;

namespace web.Service;

public class TransactionService : ITransactionService
{
    private readonly ITransactionRepository _repository;

    public TransactionService(ITransactionRepository repository)
    {
        _repository = repository;
    }
    
    public List<Transaction> GetAllTransactions()
    {
        return _repository.GetAllTransactions();
    }
    
    public Transaction GetTransaction(int id)
    {
        return _repository.GetTransaction(id);
    }
}
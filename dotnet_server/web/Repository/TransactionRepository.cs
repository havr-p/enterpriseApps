using Microsoft.EntityFrameworkCore;
using web.DatabaseModel;
using web.Repository;
public class TransactionRepository: ITransactionRepository {
    protected Whiyes5oContext context;
    public TransactionRepository(Whiyes5oContext _context) {
        this.context = _context;
    }
    public List<Transaction> GetAllTransactions() {
        var result = this.context.Transactions
            .Include(p => p.User)
            .Include(p => p.TransactionType)
            .ToList();

        return result;
    }

    public Transaction GetTransactionById(int id) {
        var result = this.context.Transactions
            .Include(p => p.User)
            .Include(p => p.TransactionType)
            .FirstOrDefault(p => p.Id == id);
            
        return result;
    }
}
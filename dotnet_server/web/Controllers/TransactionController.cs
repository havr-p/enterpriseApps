using Microsoft.AspNetCore.Mvc;
using web.Model;
using web.Service;

namespace web.Controllers;

[ApiController]
[Route("api/transaction")]
public class TransactionController : ControllerBase
{
    

    private readonly ILogger<TransactionController> _logger;
    private readonly ITransactionService _service;

    public TransactionController(ITransactionService service, ILogger<TransactionController> logger)
    {
        _logger = logger;
        _service = service;
    }

    [HttpGet("{id}",Name = "GetTransaction")]
    public Transaction GetTransactionById(int id)
    {
        return _service.GetTransaction(id);
    }
    
    [HttpGet(Name = "GetAllTransactions")]
    public List<Transaction> GetAllTransactions()
    {
        return _service.GetAllTransactions();
    }
}

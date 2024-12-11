using Microsoft.AspNetCore.Mvc;
using web.DatabaseModel;
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
    public TransactionViewModel GetTransactionById(int id)
    {
        return _service.GetTransaction(id);
    }
    
    [HttpGet(Name = "GetAllTransactions")]
    public List<TransactionViewModel> GetAllTransactions()
    {
        return _service.GetAllTransactions();
    }
}

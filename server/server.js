const express = require('express');
const app = express();
const port = 5000;


const Transactions = [
  {
    "transactionId": 1,
    "fullName": "Andrej Palovic",
    "transactionType": 0,
    "accountNumber": "46164646416",
    "bankCode": "1100",
    "issueDate": "2019-05-02T00:00:00",
    "amount": 10
  },
  {
    "transactionId": 2,
    "fullName": "Andrej Palovic",
    "transactionType": 0,
    "accountNumber": "46164646416",
    "bankCode": "1100",
    "issueDate": "2019-05-05T00:00:00",
    "amount": 2.45
  },
  {
    "transactionId": 3,
    "fullName": "Andrej Palovic",
    "transactionType": 0,
    "accountNumber": "98798798798",
    "bankCode": "0200",
    "issueDate": "2019-04-22T00:00:00",
    "amount": 24.99
  },
  {
    "transactionId": 4,
    "fullName": "Andrej Palovic",
    "transactionType": 0,
    "accountNumber": "46164646416",
    "bankCode": "1100",
    "issueDate": "2019-05-12T00:00:00",
    "amount": 264.55
  },
  {
    "transactionId": 5,
    "fullName": "Andrej Palovic",
    "transactionType": 1,
    "bankCode": "1100",
    "issueDate": "2019-05-12T12:00:00",
    "amount": 100
  }

]

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.get('/api/transactions', (req, res) => res.send({ data: Transactions }));
app.get('/api/transactions/:id', (req, res) => {
  try {
    const transaction = Transactions.find(t => t.transactionId == req.params.id);

    if (transaction) {
      res.status(200).send({ data: transaction })
    } else {
      res.status(404).send({ error: 'No data found.' })
    }
  } catch (e) {
    res.status(404).send({ error: 'No data found.' })
  }
});

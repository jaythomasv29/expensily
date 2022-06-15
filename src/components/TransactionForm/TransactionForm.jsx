import { useState, useContext } from "react";
import { TransactionContext } from "../../context/transaction";

import "./TransactionForm.css";

const defaultTransaction = {
  description: '',
  amount: '',
  type: 'category'
}

function TransactionForm() {
  const { addTransaction } = useContext(TransactionContext)
  const [transaction, setTransaction] = useState(defaultTransaction)

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if(transaction.type === 'category') {
      alert('You must select a category for your transaction')
      return
    }
    addTransaction(transaction)
    setTransaction(defaultTransaction)
  }

  const handleInputChange = (event) => {
      const { name, value } = event.target
      setTransaction({
        ...transaction, 
        [name]: value
      })
  }
  
  
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label>Description</label>
          <input type="text" name="description" onChange={handleInputChange} value={transaction.description}  placeholder="Describe Transaction" required/>
        </div>
        <div className="form-control">
          <label>
            Total <br />
            
          </label>
          <input type="number" name="amount"  onChange={handleInputChange} value={transaction.amount} placeholder="Enter amount..." required/>
        </div>
        <div className="form-control"><label>Category</label>
        <select name="type" onChange={handleInputChange}  value={transaction.type} required>
          <option value="category">Select Category</option>
          <option value="income">Income (+) </option>
          <option value="expense">Expense (-) </option>
        </select>
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default TransactionForm;

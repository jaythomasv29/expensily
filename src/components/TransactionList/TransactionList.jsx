import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TransactionContext } from '../../context/transaction'
import TransactionCard from '../TransactionCard/TransactionCard';




import './TransactionList.css'

function TransactionList() {
  const { transactions } = useContext(TransactionContext)
  console.log('app', transactions)
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions && transactions.map(transaction => (
            <TransactionCard key={uuidv4()} transaction={{id: uuidv4(), ...transaction} } />
          ))
        }
       
      </ul>
    </>
  )
}

export default TransactionList
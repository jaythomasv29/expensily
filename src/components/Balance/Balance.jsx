import { useContext } from 'react'
import { TransactionContext } from '../../context/transaction'


import './Balance.css'

export default function Balance() {
  const { memoizedBalance } = useContext(TransactionContext)

  
 
  // console.log(amounts, balance);

  return (
    <>
    <h4>Your Net Balance</h4>
    <h1 >${(memoizedBalance).toFixed(2)}</h1>
    </>
  )
}

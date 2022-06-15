import { createContext, useMemo, useReducer } from "react";
import transactionReducer from './transactionReducer'
import { v4 as uuidv4 } from 'uuid';

// Initial State
const INITIAL_STATE = {
  income: 0,
  expenses: 0,
  transactions: [
    { id: uuidv4(), description: "Food", amount: 20, type: 'expense' },
    { id: uuidv4(), description: "Books", amount: 15, type: 'expense' },
    { id: uuidv4(), description: "Camera", amount: 150, type: 'expense' },
    { id: uuidv4(), description: "May salary XX-XX-XX-143", amount: 3000, type: 'income' },
  ]
}

// Create context
export const TransactionContext = createContext(INITIAL_STATE)

// Provider component
export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(transactionReducer, INITIAL_STATE)

  // Actions for reducer
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  

  const memoizedIncome = useMemo(() => state.transactions.filter(transaction => transaction.type === "income")
    .reduce((total, transaction) => (total + Number(transaction.amount)), 0).toFixed(2), [state.transactions])

  const memoizedExpenses = useMemo(() => state.transactions.filter(transaction => transaction.type === "expense")
    .reduce((total, transaction) => (total + Number(transaction.amount)), 0).toFixed(2), [state.transactions]);

    const memoizedBalance = useMemo(() => (memoizedIncome - memoizedExpenses),[state.transactions])

  const value = {
    transactions: state.transactions,
    memoizedIncome,
    memoizedExpenses,
    memoizedBalance,
    deleteTransaction,
    addTransaction,
  }
  return <TransactionContext.Provider value={value}>{children} </TransactionContext.Provider>
}


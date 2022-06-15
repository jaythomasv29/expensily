import { v4 as uuidv4 } from 'uuid';
export default function transactionReducer (state, action) {
  const { type, payload } = action

  switch (type) {
    case 'DELETE_TRANSACTION': 
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== payload)
      }
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, {...payload, id: uuidv4()}]
        }
    default: 
      return state
  }
}

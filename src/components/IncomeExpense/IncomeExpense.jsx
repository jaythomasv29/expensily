import React, { useContext } from "react";
import { TransactionContext } from "../../context/transaction";
import './IncomeExpense.css'

export default function IncomeExpense() {
  const { memoizedIncome, memoizedExpenses } = useContext(TransactionContext)


    
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">
          +${memoizedIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">
          -${memoizedExpenses}
        </p>
      </div>
    </div>
  );
}

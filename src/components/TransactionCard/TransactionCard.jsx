import { useContext } from "react";
import { TransactionContext } from "../../context/transaction";


export default function TransactionCard({ transaction }) {
  const { deleteTransaction } = useContext(TransactionContext)
  const sign = transaction.type === 'expense' ? '-' : '+'
  const { description, amount, id } = transaction;
  return (
    <li className={transaction.type === 'expense' ? "minus" : "plus"}>
      {description} <span>{sign}${Math.abs(amount)}</span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  );
}

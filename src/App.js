
import './App.css';
import Balance from './components/Balance/Balance';
import Header from './components/Header.js/Header';
import IncomeExpense from './components/IncomeExpense/IncomeExpense';
import TransactionForm from './components/TransactionForm/TransactionForm';
import TransactionList from './components/TransactionList/TransactionList';



function App() {

  return (
    <div>
    <Header />
    <div className="container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <TransactionForm />
    </div>
    </div>
  );
}

export default App;

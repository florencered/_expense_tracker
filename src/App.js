
import './App.css'; 
import Header from './Header';
import Balance from './Balance'; 
import IncomeExpenses from './IncomeExpenses'; 
import Transaction from './Transaction'; 
import AddTransaction from './AddTransaction'; 
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider> 
    <Header/>
     <div className='container'>
      <Balance/> 
      <IncomeExpenses/> 
      <Transaction/> 
      <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;

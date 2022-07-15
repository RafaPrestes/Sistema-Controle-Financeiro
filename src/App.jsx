import React, { useState, useEffect} from 'react'
import './styles/global.css'
import Header from './components/header/Header'
import Resume from './components/resume/Resume'
import Form from './components/form/Form'

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  //entrada
  const [income, setIncome] = useState(0);
  //saida
  const [expense, setExpense] = useState(0);
  //total
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList //const que ira pegar da transactionList
    .filter((item) => item.expense) //e filtrar os itens que tiver a saida como true
    .map((transaction) =>  Number(transaction.amount)); //dentro da saidas vai mapear os valores

    const amountIncome = transactionsList
    .filter((item) => !item.expense) //filtrar o que for diferente de saida, ou seja, entrada
    .map((transaction) => Number(transaction.amount));

    //soma das saidas
    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    //soma das entradas
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    //total
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionsList]); //dependencia

  //função que ira pegar em um array todos os transcationList e adicionar no parametro transaction
  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  return (
    <>
    <Header/>
    <Resume income={income} expense={expense} total={total}/>
    <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList}/>
    </>   
  )
}

export default App
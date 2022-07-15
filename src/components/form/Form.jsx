import React, {useState} from 'react'
import Grid from '../grid/Grid';
import './form.css'

const Form = ({handleAdd, transactionsList, setTransactionsList }) => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    //gerar os id
    const generateID = () => Math.round(Math.random() * 1000);

    const handleSave = () => {
        if (!desc || !amount) {
          alert("Informe a descrição e o valor!");
          return;
        } else if (amount < 1) {
          alert("O valor tem que ser positivo!");
          return;
        }
    
        //criando uma transaction passando os valores do state
        const transaction = {
          id: generateID(),
          desc: desc,
          amount: amount,
          expense: isExpense,
        };
        
        //passando a transaction pra função do App
        handleAdd(transaction);
    
        setDesc("");
        setAmount("");
      };

  return (
    <>
    <div className="form__container">
        <div className="inputContent">
            <label>Descrição</label>
            <input value={desc} onChange={(e) => setDesc(e.target.value)}/>

            <label>Valor</label>
            <input value={amount} type="number" onChange={(e) => setAmount(e.target.value)}/>
        </div>

        <div className="radioGroup">
            <input type="radio" id='rIncome' defaultChecked name='group1' onChange={() => setExpense(!isExpense)}/>
            <label htmlFor="rIncome">Entrada</label>
            <input type="radio" id='rExpenses' name='group1' onChange={() => setExpense(!isExpense)}/>
            <label htmlFor="rExpenses">Saída</label>
            
        </div>  
        <button onClick={handleSave}>Adicionar</button> 
    </div>
    <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

export default Form
import React from 'react'
import GridItem from '../gridItem/GridItem'
import './grid.css'

const Grid = ({itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
      };
  return (
    <table>
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Tipo</th>
                <th>Descrição</th>
            </tr>
        </thead>
        <tbody>
            {itens?.map((item, index) =>  (
                <GridItem key={index} item={item} onDelete={onDelete}/> 
            ))}
        </tbody>
    </table>
  )
}

export default Grid
import React from 'react'
import ResumeItem from '../resumeItem/ResumeItem'
import './resume.css'
import { FaRegArrowAltCircleUp,FaRegArrowAltCircleDown, FaDollarSign, } from "react-icons/fa"

const Resume = ({income, expense, total}) => {
  return (
    <div className="container__resume">
        <ResumeItem title="entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
        <ResumeItem title="saidas" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumeItem title="total" Icon={FaDollarSign} value={total}/>
    </div>
  )
}

export default Resume
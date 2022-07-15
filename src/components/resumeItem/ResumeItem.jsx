import React from 'react'
import './resumeItem.css'

const ResumeItem = ({ title, Icon, value}) => {
  return (
    <div className='container__resumeItem'>
    <header className='header__resumeItem'>
        <p>{title}</p>
        <Icon className='icon' />
    </header>
        <span>{value}</span>
    </div>
  )
}

export default ResumeItem
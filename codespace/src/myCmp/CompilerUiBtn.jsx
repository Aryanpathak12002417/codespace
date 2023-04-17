import React from 'react'
import { Link } from 'react-router-dom'
import './style/problem.css'

export default function CompilerUiBtn(props) {
    const info={ques:props.number,qname:props.name}
  return (
    <Link to={props.to} style={{textDecoration:'none',color:'black'}} state={info}>
        <li className='problem-items' style={{backgroundColor:props.clr}} >
                  <div className='problem-question-name'>{`${props.number}.`}{props.name}</div>
                  <div className="problem-question-difficulty">{props.lvl}</div>
                  <div className='problem-quesyion-submission'>{props.submission}</div>
        </li>
    </Link>
  )
}

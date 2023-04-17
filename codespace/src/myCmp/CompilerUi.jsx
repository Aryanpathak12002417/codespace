import React from 'react'
import { useState } from 'react'
import './style/compilerui.css'
import questionImage from '../Images/Screenshot (233).png'
import axios from 'axios'


export default function CompilerUi(props) {
  //States and function to change the value of the input
  const [codeWrite,codeWriteChange]=useState("/*Write Your mysql Code Here*/")
  const [testcase,changetestcase]=useState("");//Testcase
  const [complierMessage,setcomplierMessage]=useState("")//compliermessage
  const changeCode=(event)=>{
    codeWriteChange(event.target.value)
  }
  const runTest=async()=>{
    console.log('Api Call is made',codeWrite)
      axios.get('http://localhost:4000/api/user',{params:{query:codeWrite}}).then((response)=>{
          if(response.data[0].success){
            changetestcase("SUCCESS")
            setcomplierMessage(response.data[0].message)
          }
          else{
            changetestcase("WRONG ANSWER")
            setcomplierMessage(response.data[0].message)
          }
          return true;
      }).catch((err)=>{
        changetestcase("ERROR")
        setcomplierMessage(err.response.data)
        return false
      })
  }
  const runSubmit=(event)=>{
    if(runTest(event)){
      changetestcase("Your Solution is Accepted")
    }
    else{
      changetestcase("Please Click Run before submitting")
    }
  }
  return (
    <main className='compiler'>
        <div className='question' >
            <h3>Count Customer</h3>
            <div className='question-desc'>
            You are working as a software developer at a company that manages employee information in a MySQL database. Your team has been tasked with creating a report that displays all the data from the "employee" table. Write a MySQL query that fetches all the data from the "employee" table and returns it to be displayed in the report. Ensure that your query is optimized for efficiency and security, and keep in mind about potential security risks that should be considered when writing queries to fetch data from tables in a MySQL database.
            Below is the description of employee table.
            </div>
            <div className='question-image'>
              <img src={questionImage}></img>
            </div>
        </div>
        <div className='code-section'>
            <input className='code-section-write' value={codeWrite}  onInput={changeCode}/>
                
            <div className="code-test">
              <div className="code-test-btn">
                <button className='code-test-btn-run' onClick={runTest}>Run</button>
                <button className='code-test-btn-submit'onClick={runTest}>Submit</button>
              </div>
              <div className="code-test-testcase">
                <div className='code-test-output'>
                  <h3>{testcase}</h3>
                  <p>{complierMessage}</p>
                </div>
              </div>
            </div>
        </div>
    </main>
  )
}

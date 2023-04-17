import React from 'react'
import CompilerUiBtn from './CompilerUiBtn';
import './style/problem.css'

export default function Problem() {

        //Creating a mapping component to do this
        const color=['#8e9ce96b','#8e94e917']
        const problemList=[];
        let toogle=0;
        for(let i=0;i<100;i++){
          let ele=(
              <CompilerUiBtn to='/compiler' clr={color[toogle]} lvl="easy" name='Count Customer' submission='500000' number={i+1}></CompilerUiBtn>
          )
          if(!toogle){
            toogle=1;
          }
          else{
            toogle=0;
          }
          problemList.push(ele);
        }


  return (
    <main className='problem'>
        <section className='problem-questions'>
            <h2>SQL Problems</h2>
            <ul style={{listStyle:'none'}}>
                <li style={{backgroundColor:'#8e94e917',fontWeight:'500'}}>
                      <div className='problem-question-name' >Problem </div>
                      <div className="problem-question-difficulty">Level</div>
                      <div className='problem-quesyion-submission'>Submittion</div>
                </li>
                {problemList}
            </ul>
        </section>
    </main>

  )
}

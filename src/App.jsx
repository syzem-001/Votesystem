import { useState } from 'react'
import './App.css'
import { optionList } from './data'
import { VoteList } from './componnets/VoteList'
import { VoteResult } from './componnets/VoteResult'
import { VoteForm } from './componnets/VoteForm'
import {motion} from 'framer-motion'

function App() {
  const [options, setOptions ]= useState(optionList)
  const [selected, setSelected] = useState(null)
  const title = 'Hova menjünk osztálykirándulásra?'.split('')

  return (
    <>
      <div className='flex flex-col items-center justify-center bg-slate-900 text-slate-50 min-h-screen'>
        <h1 className='pb-3xl text-3xl'>
          {title.map((letter,index) => 
          <motion.span 
            key={index} initial={{opacity:0}} animate = {{opacity:1}} transition={{type:'spring', delay: index / 10}}>
              {letter}
          </motion.span>)}
        </h1>
        <div className='flex flex-wrap gap-4 justify-center'>

            <VoteList options = {options} setSelected = {setSelected}/>

            <div>
              <VoteResult options  = {options}/>
              {selected && <VoteForm options = {options} setOptions = {setOptions} selected = {selected} setSelected = {setSelected}/>}
            </div>

        </div>
      </div>  
    </>
  )
}

export default App

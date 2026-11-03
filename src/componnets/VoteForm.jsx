import React from 'react'
import { useState } from 'react';
import { hasVoted } from '../utils';

export const VoteForm = ({options, setOptions ,selected, setSelected}) => {
  console.log(selected);
  const [name , Setname] = useState('')
  const [msg , setMsg] = useState('')
  
  const HandelSubmit = (e) =>{
    e.preventDefault()
    console.log(name);
    if(hasVoted(options,name)){
      setMsg('Már szavaztál!!!')
      return
    }

    if(!name.trim()){
      setMsg('Nem írtál semmilyen nevet!!!')
      return
    }
    setOptions(prev => prev.map(obj => obj.text == selected ? ({...obj,votes:[...obj.votes,name]}) : obj))
    setSelected(null)
  }


  return (
    <div className='border border-slate-300 p-4 mt-4 bg-slate-700 rounded-md'>
      <h3>Te erre szavazól jelenleg: <span className='font-bold'>{selected}</span></h3>
      <form onSubmit = {HandelSubmit} className='flex flex-col gap-4'>
        <label htmlFor="name">Add meg a neved!</label>
        <input id='name' type="text" className='border border-slate-500 w-full rounded-md p-4'
          value={name}
          onChange={(e) => (Setname(e.target.value))}
        />
        <div className='flex justify-between'>

          <button type="submit" className='bg-slate-500 p-2 raounded-pointer hover:bg-slate-900'>Mentés</button>
          <button onClick={() => (setSelected(null))} className='bg-slate-700 p-2 raounded-pointer hover:bg-slate-900'>Mégsem</button>

        </div>
      </form>
      {msg && <div>{msg}</div>}
    </div>
  )
}


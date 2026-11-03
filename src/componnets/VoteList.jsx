import React from 'react'
import { getMaxVote } from '../utils'

export const VoteList = ({options,setSelected}) => {
    console.log(options)
    console.log(options.findIndex(({votes}) => getMaxVote(options) == votes.length));

  return (
    <div>
        {options.map(({id,text,imgUrl,votes}) => (
            <div key={id} className={getMaxVote(options) == votes.length && votes.length != 0? 'max-w-75 bg-slate-700 p-4 border-4 border-green-500 ' : 'max-w-75 bg-slate-700 p-4'}>
                <img className='w-full' src={imgUrl} alt={text} />
                <div className='text-2xl text-center'>{text}</div>
                <button onClick={() => setSelected(text)} className='bg-slate-500 p-2 raounded-pointer hover:bg-slate-900'>Szavazat</button>
            </div>
        ))}
    </div>
  )
}


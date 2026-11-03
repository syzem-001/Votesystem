import React from 'react'

export const VoteResult = ({options}) => {
  return (
    <div className='flex flex-col gap-4 bg-slate-700 w-75 rounded-md p-4'>
        <h3 className='text-center text-2xl'>Eredemény</h3>
        <div>
            {options.map(({id,text,votes}) => (
                <div key={id}>{text} szavazatok : <span className='font-bold'>{votes.length}</span></div>
            ))}
      </div>
    </div>
  )
}


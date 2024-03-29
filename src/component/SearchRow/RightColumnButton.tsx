import React, { ReactElement } from 'react'

interface ColumnBtnProps {
  text: string;
  count: string;
  icon: ReactElement;
  rounded: string;
}

function RightColumnButton({ text, count, icon, rounded }: ColumnBtnProps) {
  return (
    <button className={`border flex items-center gap-1 ${rounded} hover:bg-gray-800 border-slate-700 text-white px-2 sm:px-4 text-sm`}>
      {icon} <span className='leading-[11px]'>{text}</span> <span className='bg-gray-700 rounded-full text-xs w-[25px] flex justify-center items-center'>{count}</span>
    </button>
  )
}

export default RightColumnButton

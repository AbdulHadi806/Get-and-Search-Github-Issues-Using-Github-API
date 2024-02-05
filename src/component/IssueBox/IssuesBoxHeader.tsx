import { ClosedIcon, OpenIcon } from './Icons'
import { headerList } from './static'
import IssuesHeaderRightList from './IssuesHeaderRightList'
import { useState } from 'react';

function IssuesBoxHeader() {
  const [openDropDownIndex, setOpenDropDownIndex] = useState<number | null>(null);

  const toggleDropDown = (index: number | null): void => {
    setOpenDropDownIndex(index === openDropDownIndex ? null : index);
  };

  return (
    <div className='min-h-[50px] flex flex-col border-b border-slate-700 md:flex-row md:justify-between items-center px-3 py-4 rounded-t-md gap-4 bg-[#30363D]'>
      <div className='flex gap-3'>
        <button className='text-sm text-white items-center flex gap-1'><OpenIcon color={'#fff'} /> 1,120 Open</button>
        <button className='text-sm text-slate-500 items-center hover:text-white flex gap-1'><ClosedIcon /> 6,200 Closed</button>
      </div>
      <div className='flex gap-3 sm:gap-8'>
      {headerList.map((item, index) => {
          return (
            <IssuesHeaderRightList
              key={`headerList-${Math.random()}-${index}`}
              item={item}
              isOpen={openDropDownIndex === index}
              onToggle={() => toggleDropDown(index)}
            />
          );
        })}
      </div>
    </div>
  )
}

export default IssuesBoxHeader

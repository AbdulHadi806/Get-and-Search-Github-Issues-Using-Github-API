import React, { useState } from 'react'
import DropDownIcon from '../Helpers/DropDownIcon'
import RightColumnButton from './RightColumnButton'
import DropDownModel from '../Helpers/DropDownModel'
import { useGitHub } from '../../context/GitHubProvider';
import { dropDownDummyText } from './static';
import { LabelIcon, MileStoneIcon } from './icons';

function SearchBarRow() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { fetchIssues, currentPage, search, setSearch } = useGitHub();

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchIssues(currentPage, search);
    }
  };

  return (
    <div className='flex flex-col-reverse md:flex-row gap-3 items-center justify-between'>
      <div className='flex items-center w-full md:w-[50%] h-[30px]'>
        <div className='h-full relative'>
          <button onClick={toggleDropDown} className='text-white hover:bg-gray-800 bg-[#21262D] h-full px-2 rounded-l-md flex text-sm items-center gap-1'>
            Filters <DropDownIcon />
          </button>
          {isOpen && (
            <DropDownModel modelPostion={'left-0 right-0'} title="Filter Issues" onClose={toggleDropDown}>
              <ul>
                {dropDownDummyText.map((text, index) => {
                  return <li key={`searchBarDropDown-${Math.random()}-index`}
                    className={`${index !== dropDownDummyText.length - 1 ? 'border-b' : ''
                      } hover:bg-gray-800 border-slate-700`}><button className='w-full text-start h-full py-3 px-10'>{text}</button></li>
                })}
              </ul>
            </DropDownModel>
          )}
        </div>
        <div className='h-full w-full'>
          <input type="text" className='h-full w-full border-l-0 rounded-r-md border border-slate-700 bg-[#010409] text-sm px-4 text-white focus:outline-blue' placeholder='Issues' onKeyDown={handleKeyDown} onChange={(e) => { setSearch(e.target.value) }} value={search} />
        </div>
      </div>
      <div className='flex justify-between md:gap-4 h-[30px] w-full md:max-w-[380px]'>
        <div className='flex'>
          <RightColumnButton icon={<LabelIcon />} text={"Labels"} count={'32'} rounded="rounded-l-md" />
          <RightColumnButton icon={<MileStoneIcon />} text={"Milestones"} count={'4'} rounded="rounded-r-md" />
        </div>
        <button className='text-white bg-blue-600 rounded-md text-sm px-2 hover:bg-blue-700'>New Issue</button>
      </div>
    </div>
  )
}

export default SearchBarRow
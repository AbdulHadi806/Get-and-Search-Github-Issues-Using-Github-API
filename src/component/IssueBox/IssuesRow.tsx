import { useGitHub } from '../../context/GitHubProvider'
import { ClosedIcon, CommentIcon, OpenIcon } from './Icons'
import { formatDistanceToNow } from 'date-fns';

function IssuesRow() {
  const { issues } = useGitHub()
  const calculateTimeDifference = (created_at: Date): string => {
    const createdAtDate: Date = new Date(created_at);
    return formatDistanceToNow(createdAtDate, { addSuffix: true });
  }
  return (
    <div className='text-white'>
      <ul className='min-h-[159px]'>
        {
          issues.length > 0 ? issues.map(item => {
            return (
              <li key={`issues-${item.id}-${Math.random()}`} >
                <a href="#" className='hover:bg-gray-800 py-2 border-b border-slate-700 flex justify-between'>
                  <div className='flex gap-1 px-3 items-baseline'>
                    {item.state === "open" ? <div className='border rounded-full'><OpenIcon color='#FF7B72' /></div> : <div className='border rounded-full'><ClosedIcon /></div>}
                    <div>
                      <div className='flex items-start flex-wrap gap-2'>
                        <h2 className='font-semibold text-sm md:text-lg break-all'>{item.title}</h2>
                        <div className='flex gap-2 flex-wrap'>
                          {item.labels.map(label => {
                            return <button key={`${label.id}-${Math.random()}`} className={`bg-[#${label.color}] ${label.color === "000000"? "text-[#fff]" : "text-[#000]"} rounded-md px-1 text-sm`} style={{ backgroundColor: `#${label.color}` }}> {label.name}</button>
                          })}
                        </div>
                      </div>
                      <span className='text-xs text-slate-500'>#{item.number}</span>
                      <span className='text-xs text-slate-500'> Open {calculateTimeDifference(item.created_at)} ago by Eduh75</span>
                    </div>
                  </div>
                  <div className='pr-3'>
                    {item.comments > 0 && <button className='flex items-center text-slate-500'><CommentIcon /> {item.comments}</button>}
                  </div>
                </a>
              </li>
            )
          }) :
            <li className='py-2 flex justify-center h-[100vh] items-center'>No results matched your search.</li>
        }
      </ul>
    </div>
  )
}

export default IssuesRow

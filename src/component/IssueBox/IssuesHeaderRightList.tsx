import DropDownIcon from '../Helpers/DropDownIcon';
import DropDownModel from '../Helpers/DropDownModel';
import { useGitHub } from '../../context/GitHubProvider';

interface ColumnBtnProps {
  item: string;
  isOpen: boolean;
  onToggle: () => void;
}

function IssuesHeaderRightList({ item, isOpen, onToggle }: ColumnBtnProps) {
  const { issues } = useGitHub();

  const uniqueUsers = Array.from(new Set(issues.map(item => item.user.login)));
  
  return (
    <div className='h-full relative'>
      <button onClick={onToggle} className='flex items-center text-sm text-slate-500 hover:text-white'>
        <span>{item}</span> <span className='hidden md:block'><DropDownIcon /></span>
      </button>
      {isOpen && (
        <DropDownModel title={`Filter by ${item}`} modelPostion={'right-[0%]'} onClose={onToggle}>
          <div className='pt-3'>
            <div className='px-4 h-[30px]'>
              <input type="text" className='h-full w-full rounded-md border border-slate-700 outline-none focus:outline-none bg-[#010409] text-sm px-4 text-white focus:outline-blue' placeholder='Filter' />
            </div>
            <ul className='min-h-[120px] max-h-[250px] overflow-y-auto border-t mt-4 border-slate-700'>
              {uniqueUsers.map(userLogin => {
                const userIssue = issues.find(issue => issue.user.login === userLogin);
                if (!userIssue) return null;
                const user = userIssue.user;
                return (
                  <li key={`${user.id}-${Math.random()}`} className='border-b pl-6 pe-4 flex items-center gap-2 justify-start hover:bg-gray-800 border-slate-700 py-2'>
                    <button className='flex min-w-[150px] gap-4 items-center'>
                      <div className='w-[30px]'>
                        <img className='object-contain rounded-full' src={user.avatar_url} alt={user.login} />
                      </div>
                      <h3>{user.login}</h3>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </DropDownModel>
      )}
    </div>
  );
}

export default IssuesHeaderRightList;

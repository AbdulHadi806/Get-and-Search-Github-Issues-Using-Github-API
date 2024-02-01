import { useEffect, useState } from 'react';
import SearchBarRow from './component/SearchRow/SearchBarRow';
import IssuesBoxMain from './component/IssueBox/IssuesBoxMain';
import { useGitHub } from './context/GitHubProvider';

function App() {
  const { fetchIssues, search } = useGitHub();

  useEffect(() => {
    fetchIssues(1, search)
  }, [])

  return (
    <div className='bg-[#0D1117] h-[100%]'>
      <div className="sm:container mx-auto px-3 md:px-0 pt-4">
        <SearchBarRow />
        <IssuesBoxMain />
      </div>
    </div>
  );
}

export default App;

import IssuesBoxHeader from './IssuesBoxHeader'
import IssuesRow from './IssuesRow'
import { BarLoader } from 'react-spinners'
import { useGitHub } from '../../context/GitHubProvider';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';

function IssuesBoxMain() {
  const { loading, totalPages, currentPage, fetchIssues, search } = useGitHub();
  const [activePage, setActivePage] = useState<number>(currentPage - 1); 

  const handlePageChange = ({ selected }: { selected: number }) => {
    fetchIssues(selected + 1, search);
    setActivePage(selected); 
  };

  useEffect(() => {
    if (currentPage <= 1) {
      setActivePage(0);
      handlePageChange({selected: 0})
    }
  }, [currentPage]);

  return (
    <>
      <div className='rounded-md border border-slate-700 mt-6'>
        <IssuesBoxHeader />
        {loading ? <div className='h-[100vh] flex justify-center items-center'><BarLoader color="#fff" /></div> : <IssuesRow />}
      </div>
      <div className='py-8'>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={10}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="flex gap-2 text-white justify-center pagination"
          activeClassName="bg-blue-700 rounded-md"
          previousLinkClassName={`prev ${activePage === 0 ? 'opacity-50 cursor-not-allowed' : 'text-blue-700'}`}
          nextLinkClassName={`next ${activePage === totalPages - 1  ? 'opacity-50 cursor-not-allowed' : 'text-blue-700'}`}
          pageLinkClassName="page"
          pageClassName="w-[30px] flex justify-center"
          forcePage={activePage}
        />
      </div>
    </>
  )
}

export default IssuesBoxMain

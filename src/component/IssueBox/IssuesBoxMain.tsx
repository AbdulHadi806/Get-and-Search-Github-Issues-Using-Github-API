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
        {loading ? <div className='h-[58vh] flex justify-center items-center'><BarLoader color="#fff" /></div> : <IssuesRow />}
      </div>
      <div className='py-8'>
        <ReactPaginate
          pageCount={totalPages}
          pageRangeDisplayed={10}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName="flex gap-4 h-[30px] text-md text-white justify-center items-center pagination"
          activeClassName="bg-blue-600 hover:border-transparent rounded-md"
          previousLinkClassName={`prev ${activePage === 0 ? 'opacity-50 cursor-not-allowed' : 'text-blue-500 flex px-3 justify-center border border-transparent transition hover:border-white rounded-md'}`}
          nextLinkClassName={`next ${activePage === totalPages - 1  ? 'opacity-50 cursor-not-allowed' : 'text-blue-500 px-3 flex justify-center border border-transparent transition hover:border-white rounded-md'}`}
          pageLinkClassName="page border border-transparent w-full flex justify-center items-center hover:border"
          pageClassName="w-[30px] flex justify-center border border-transparent transition hover:border-white rounded-md"
          forcePage={activePage}
        />
      </div>
    </>
  )
}

export default IssuesBoxMain

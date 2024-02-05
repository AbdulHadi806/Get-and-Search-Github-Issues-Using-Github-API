import { createContext, useContext, useState } from 'react';
import { ErrorState, GitHubContextType, GitHubProviderProps, Issue } from '../interfaces/githubInterfaces';
const GITHUB_API_URL = process.env.REACT_APP_GITHUB_API;
const PERSONAL_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN

const GitHubContext = createContext<GitHubContextType | undefined>(undefined);

export const useGitHub = () => {
  const context = useContext(GitHubContext);
  if (!context) {
    throw new Error('useGitHub must be used within a GitHubProvider');
  }
  return context;
};

export const GitHubProvider = ({ children }: GitHubProviderProps) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<ErrorState>({
    status: false,
    message: null
  })
  const [prevSearch, setPrevSearch] = useState<string>('')
  const [search, setSearch] = useState<string>("facebook/react+is:issue+is:open");

  const perPage = 10;
  const fetchIssues = async (page: number, search: string) => {
    setLoading(true)
    const headers = {
      Authorization: `Bearer ${PERSONAL_ACCESS_TOKEN} `
    }
    try {
      if (prevSearch !== search) {
        setCurrentPage(1)
        setTotalPages(0)
      }
      if (search.length > 0 || totalPages === 0) {
        const response = await fetch(`${GITHUB_API_URL}/search/issues?q=${search}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const responseData = await response.json();
        const data: Issue[] = responseData.items;
        setTotalPages(Math.ceil(data.length / perPage));
      }
      const response = await fetch(`${GITHUB_API_URL}/search/issues?q=${search}&page=${page}&per_page=${perPage}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      const data: Issue[] = responseData.items;
      setError({
        status: false,
        message: null
      })
      setIssues(data);
      setCurrentPage(page)
      setPrevSearch(search)
      setLoading(false);
    } catch (error) {
      console.log('Error fetching data:', error);
      setError({
        status: true,
        message: error instanceof Error ? error.message : 'Unknown Error'
      })
      setLoading(false);
      setCurrentPage(1)
      setTotalPages(0)
    }
  };

  return (
    <GitHubContext.Provider value={{ error, issues, loading, fetchIssues, totalPages, currentPage, search, setSearch }}>
      {children}
    </GitHubContext.Provider>
  );
};

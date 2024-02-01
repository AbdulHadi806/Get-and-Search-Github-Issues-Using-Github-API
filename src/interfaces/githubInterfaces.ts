import { ReactNode } from "react";

interface User {
  login: string;
  avatar_url: string;
  id: number
}
  
interface IssueLabels {
  id: number;
  name: string
  color: string
}
  
export interface Issue {
  id: number;
  user: User;
  state: string;
  number: number;
  comments: number;
  title: string;
  html_url: string;
  created_at: Date;
  labels: IssueLabels[] | [];
}
  
export interface GitHubContextType {
  issues: Issue[];
  loading: boolean;
  totalPages: number;
  currentPage: number;
  search: string;
  setSearch: (search: string) => void;
  fetchIssues: (page: number, search: string) => void;
}

export interface GitHubProviderProps {
  children: ReactNode;
}
export interface Issue {
  id: number;
  subject: string;
  status: 'Open' | 'Resolved';
  priority: 'Low' | 'Medium' | 'High';
  type: 'Question' | 'Bug' | 'Feature' | 'Unspecified';
  team?: string;
  contact: string;
  firstResponse: string;
  createdAt: Date;
}

export interface IssueFormData {
  subject: string;
  priority: Issue['priority'];
  type: Issue['type'];
  team?: string;
  description: string;
}
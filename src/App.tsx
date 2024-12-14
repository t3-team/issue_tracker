import React, { useState } from 'react';
import { IssueList } from './components/IssueList';
import { NewIssueForm } from './components/NewIssueForm';
import { Issue, IssueFormData } from './types';
import { Plus, Filter, SortAsc } from 'lucide-react';

function App() {
  const [issues, setIssues] = useState<Issue[]>([
    {
      id: 1,
      subject: 'Welcome to Helpdesk',
      status: 'Open',
      priority: 'Medium',
      type: 'Unspecified',
      contact: 'John Doe',
      firstResponse: 'a day ago',
      createdAt: new Date(),
    },
  ]);
  const [showNewIssueForm, setShowNewIssueForm] = useState(false);

  const handleNewIssue = (data: IssueFormData) => {
    const newIssue: Issue = {
      id: issues.length + 1,
      subject: data.subject,
      status: 'Open',
      priority: data.priority,
      type: data.type,
      team: data.team,
      contact: 'Current User',
      firstResponse: 'Not yet',
      createdAt: new Date(),
    };
    setIssues([...issues, newIssue]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
            <button
              onClick={() => setShowNewIssueForm(true)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="w-4 h-4 mr-2" />
              New ticket
            </button>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <SortAsc className="w-4 h-4 mr-2" />
                Sort
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <IssueList issues={issues} />
        </div>

        {showNewIssueForm && (
          <NewIssueForm
            onSubmit={handleNewIssue}
            onClose={() => setShowNewIssueForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import { Issue } from '../types';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface IssueListProps {
  issues: Issue[];
}

export function IssueList({ issues }: IssueListProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">#</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Subject</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Status</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Priority</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Type</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Team</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Contact</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-500">{issue.id}</td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900">{issue.subject}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    issue.status === 'Resolved'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {issue.status === 'Resolved' ? (
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                  ) : (
                    <AlertCircle className="w-3 h-3 mr-1" />
                  )}
                  {issue.status}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">{issue.priority}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{issue.type}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{issue.team || '—'}</td>
              <td className="px-4 py-3 text-sm text-gray-500">{issue.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
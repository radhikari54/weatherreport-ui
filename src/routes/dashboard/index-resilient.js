import React from 'react';
import Dashboard from './Dashboard';
import Layout from '../../components/Layout';

// Dashboard controller
async function action({ fetch }) {
  //  console.log('Resilient dashboard invoked');

  const response = await fetch('/weather?resilient=true');
  const reports = await response.json();
  if (!reports) throw new Error('Failed to load weather reports.');
  return {
    chunks: ['dashboard'],
    title: 'Dashboard',
    component: (
      <Layout>
        <Dashboard reports={reports} />
      </Layout>
    ),
  };
}

export default action;

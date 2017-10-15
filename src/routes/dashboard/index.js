import React from 'react';
import Dashboard from './Dashboard'
import Layout from '../../components/Layout';

async function action({ fetch }) {
  const response = await fetch('http://localhost:8080/weather');
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

import { useState } from 'react';
import Layout      from './components/layout/Layout';
import Dashboard   from './components/dashboard/Dashboard';
import ProgramList from './components/programs/ProgramList';
import SubjectList from './components/subjects/SubjectList';
import NotFound    from './pages/NotFound';

const PAGES = {
  dashboard: (nav) => <Dashboard onNavigate={nav} />,
  programs:  ()    => <ProgramList />,
  subjects:  ()    => <SubjectList />,
};

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const navigate = (page) => {
    if (PAGES[page]) setActivePage(page);
  };

  const PageComponent = PAGES[activePage];

  return (
    <Layout activePage={activePage} setActivePage={setActivePage}>
      {PageComponent
        ? PageComponent(navigate)
        : <NotFound onGoHome={() => setActivePage('dashboard')} />}
    </Layout>
  );
}

export default App;

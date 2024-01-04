import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './components/Dashboard';
import { LoginPage } from './components/LoginPage';
import { AppStage } from './redux/appState/appStateSlice';
import { RootState } from './redux/store';

const App: React.FC = () => {
  const { stage } = useSelector((state: RootState) => state.appState);
  if (stage === AppStage.LOGIN) {
    return <LoginPage />;
  } else if (stage === AppStage.DASHBOARD) {
    return <Dashboard />;
  } else {
    return <h1>Coming Soon</h1>;
  }
};

export default App;

import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Dashboard: React.FC = () => {
  const { username } = useSelector((state: RootState) => state.user);
  return <h1>{username}</h1>;
};

export default Dashboard;

import EntryList from '../../components/entryList/EntryList';
import Guestbook from '../../components/guestbook/Guestbook';
import { EntryProvider } from '../../context/EntryContext';

const Home = () => {
  return (
    <EntryProvider>
      <Guestbook />
      <EntryList />
    </EntryProvider>
  );
};

export default Home;

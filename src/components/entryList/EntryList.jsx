import useEntry from '../../hooks/useEntry';
import Entry from '../entry/Entry';

function EntryList() {
  const { entry } = useEntry();

  return (
    <ul>
      {entry.map((entry) => (
        <li key={`${entry.name}`}>
          <Entry entry={entry} />
        </li>
      ))}
    </ul>
  );
}

export default EntryList;

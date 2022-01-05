import useEntry from '../../hooks/useEntry';
import Entry from '../entry/Entry';

function EntryList() {
  const { entries } = useEntry();

  return (
    <>
      <ul>
        {entries.map((entry) => (
          <li key={`${entry.name}`}>
            <Entry entry={entry} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default EntryList;

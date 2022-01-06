import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useEntry from '../../hooks/useEntry';
import useUser from '../../hooks/useUser';

function Guestbook() {
  const [guestEntry, setGuestEntry] = useState('');
  const { entry, setEntry } = useEntry();
  const { user, setUser } = useUser();
  const history = useHistory();

  function updateGuestName() {
    if (!guestEntry) {
      alert('Please write an entry!');
    } else {
      setEntry([...entry, { name, message: guestEntry }]);
      setGuestEntry('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  const displayMessage = user
    ? `Thanks for signing ${user}.`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="guestEntry">Guest Entry</label>
        <textarea
          id="guestEntry"
          value={guestEntry}
          placeholder="Your Entry!"
          onChange={(event) => setGuestEntry(event.target.value)}
        />

        <button type="submit">Sign</button>
        {user && (
          <button
            type="button"
            onClick={() => {
              setUser('');
              history.push('/login');
            }}
          >
            Not {user}?
          </button>
        )}
      </form>
    </>
  );
}

export default Guestbook;

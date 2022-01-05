import { useState } from 'react';
import useEntry from '../../hooks/useEntry';
import useUser from '../../hooks/useUser';

function Guestbook() {
  const [name, setName] = useState('');
  const [guestEntry, setGuestEntry] = useState('');
  const { entries, setEntries } = useEntry();
  const { user, setUser } = useUser();

  function updateGuestName() {
    if (!guestEntry) {
      alert('Please write an entry!');
    } else {
      setUser(name);
      setEntries([...entries, { name, message: guestEntry }]);
      setGuestEntry('');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    updateGuestName();
  };

  const guestNameInput = (
    <>
      <label htmlFor="guestName">Guest Name</label>
      <input
        id="guestName"
        type="text"
        placeholder="Guest Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
    </>
  );

  const displayMessage = user
    ? `Thanks for signing ${user}.`
    : 'Please Sign the Guestbook!';

  return (
    <>
      <h1>{displayMessage}</h1>
      <form onSubmit={handleSubmit}>
        {user ? null : guestNameInput}
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
              setName('');
            }}
          >
            Not {user} ❓
          </button>
        )}
      </form>
    </>
  );
}

export default Guestbook;

import useUser from '../../hooks/useUser';

const Header = () => {
  const { user } = useUser();

  return (
    <header>
      {user ? <p>Signing Guestbook as {user}</p> : <p>Please Sign In</p>}
    </header>
  );
};

export default Header;

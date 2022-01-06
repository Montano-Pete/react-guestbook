function Entry({ entry: { name, message } }) {
  return (
    <>
      <h2>{name}</h2>
      <p>{message}</p>
    </>
  );
}

export default Entry;

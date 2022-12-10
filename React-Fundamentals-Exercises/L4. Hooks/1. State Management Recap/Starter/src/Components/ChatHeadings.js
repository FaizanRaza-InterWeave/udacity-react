export const ChatHeadings = ({ users }) => {
  return (
    <>
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{users[1].username}</div>
    </>
  );
};

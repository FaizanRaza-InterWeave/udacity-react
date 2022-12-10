export const ChatHeadings = ({ chatUser }) => {
  return (
    <>
      <h2>Super Awesome Chat</h2>
      <div className="name sender">{chatUser}</div>
    </>
  );
};

export const ListUser = ({ username, gamesPlayed }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {username}
      <span class="badge bg-primary rounded-pill">{gamesPlayed}</span>
    </li>
  );
};

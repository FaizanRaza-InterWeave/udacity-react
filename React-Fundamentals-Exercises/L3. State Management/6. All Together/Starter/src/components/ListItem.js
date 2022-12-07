export const ListUser = ({ username, gamesPlayed, showGamesPlayed }) => {
  return (
    <li class="list-group-item d-flex justify-content-between align-items-center">
      {username}
      {showGamesPlayed ? (
        <span class="badge bg-primary rounded-pill">{gamesPlayed}</span>
      ) : null}
    </li>
  );
};

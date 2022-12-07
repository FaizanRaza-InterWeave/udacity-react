import { ListUser } from "./ListItem";

export const GamesPerUserTable = () => {
  return (
    <>
      <div className="row justify-content-center">
        <h2>Games Per User</h2>
      </div>
      <div className="row justify-content-center">
        <ul class="list-group col-6">
          <ListUser username="musky" gamesPlayed="1" />
          <ListUser username="ball" gamesPlayed="2" />
          <ListUser username="sweat" gamesPlayed="3" />
        </ul>
      </div>
    </>
  );
};

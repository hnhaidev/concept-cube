import Item from './Item';
import { dataTeams } from '../../data/teams';

const Teams = () => {
  return (
    <div className="teams">
      <div className="teams-wrapper">
        <div>
          <header>
            <h1>TEAMS</h1>
          </header>
          <div className="list-wrapper">
            <div className="list-team">
              {dataTeams.map((item, index) => {
                return <Item item={item} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

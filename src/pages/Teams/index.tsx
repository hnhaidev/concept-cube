import Item from './Item';
import { dataTeams } from '../../data/teams';
import { useEffect } from 'react';
import { gsap } from 'gsap';

const Teams = () => {
  useEffect(() => {
    const TL = gsap.timeline();
    TL.from('.teams header', {
      y: -400,
      autoAlpha: 0,
      duration: 0.5,
    }).from('.list-team .item', {
      x: -500,
      y: -400,
      stagger: 0.1,
      autoAlpha: 0,
    });
  }, []);
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

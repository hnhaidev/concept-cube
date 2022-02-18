import ReactFullpage from '@fullpage/react-fullpage';
import Introduce from '../../components/Introduce';
import Console from '../../components/Console';
import Service from '../../components/Service';
import History from '../../components/History';
import Connect from '../../components/Connect';
import {
  iconLogo,
  dataImgIntroduce,
  dataService,
  dataHistory,
  dataImgConsole,
} from '../../data/home';

import onLeave from './animations/onLeave';
import afterLoad from './animations/AfterLoad';

const fullpageOptions = {
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
};

const Home = () => {
  return (
    <ReactFullpage
      licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
      {...fullpageOptions}
      navigation={true}
      navigationPosition={'right'}
      onLeave={onLeave}
      afterLoad={afterLoad}
      scrollingSpeed={600}
      normalScrollElements={'.item-list, #menu,list-menu-sidebar'}
      render={() => {
        return (
          <div>
            <section className="section">
              <Introduce logo={iconLogo} data={dataImgIntroduce} />
            </section>
            <section className="section">
              <Console data={dataImgConsole} />
            </section>
            <section className="section">
              <Service data={dataService} />
            </section>
            <section className="section">
              <History data={dataHistory} />
            </section>
            <section className="section">
              <Connect />
            </section>
          </div>
        );
      }}
    />
  );
};

export default Home;

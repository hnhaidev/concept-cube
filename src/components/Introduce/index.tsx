import Background from './Background';
import Content from './Content';
import LinkConnect from './LinkConnect';
import Logo from './Logo';

const Introduce = ({ logo, data }: { logo: string; data: any }) => {
  return (
    <div className="introduce">
      <Background data={data} />
      <Logo logo={logo} />
      <LinkConnect />
      <Content />
    </div>
  );
};

export default Introduce;

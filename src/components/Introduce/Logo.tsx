const Logo = ({ logo }: { logo: string }) => {
  return (
    <div className="introduce-logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Logo;

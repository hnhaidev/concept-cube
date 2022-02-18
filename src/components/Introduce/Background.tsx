const Background = ({
  data,
}: {
  data: {
    id: string;
    path: string;
  }[];
}) => {
  return (
    <div className="introduce-bg">
      {data.map((val) => (
        <div className={`bg bg-img-${val.id}`} key={val.id}>
          <img src={val.path} alt="bg" />
        </div>
      ))}
    </div>
  );
};

export default Background;

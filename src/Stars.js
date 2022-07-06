const randomNum = Math.floor(Math.random() * 5);
const [evaluate, setEvaluate] = React.useState(isRandom ? randomNum : -1);

return (
  <StarWrap>
    {Array.from({ length: 5 }, (_, i) => {
      return (
        <Star
          isRandom={isRandom}
          key={i}
          onClick={() => {
            setEvaluate(i);
          }}
          className={i <= evaluate ? "active" : null}></Star>
      );
    })}
  </StarWrap>
);
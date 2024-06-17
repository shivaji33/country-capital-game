import { useEffect, useState } from 'react';

const Game = ({ DATA }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [correctValues, setCorrectValues] = useState([]);
  const [inCorrectValues, setInCorrectValues] = useState([]);

  const [data, setData] = useState([]);

  const shuffleArr = (arr) => {
    const result = arr.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  useEffect(() => {
    const result = Object.entries(DATA).flat();
    const suffledValues = shuffleArr(result);
    setData(suffledValues);
  }, []);

  const selectHandler = (e) => {
    const { target } = e;
    const value = target.getAttribute('data-value');
    const options = selectedValues.concat(value);
    setSelectedValues(options);
    
    if (options.length === 2) {
      const [first, second] = options;

      if (DATA[first] === second || DATA[second] === first) {
        setCorrectValues(options);

        setTimeout(() => {
          setData((prev) => prev.filter((item) => !options.includes(item)));
          setSelectedValues([]);
        }, 1000);
      } else {
        setInCorrectValues(options);

        setTimeout(() => {
          setInCorrectValues([]);
           setSelectedValues([]);
        }, 1000);
      }
    }
  };

  return (
    <div className="game-wrapper">
      {data.length ? data?.map((item, i) => {
        const isSelected = selectedValues.includes(item);
        const correctMatch = correctValues.includes(item);
        const invalidMatch = inCorrectValues.includes(item);
        const selectedClass = `${isSelected ? 'selected' : ''}`;
        const correctMatchClass = selectedValues.length === 2 && correctMatch ? 'correct-match': '';
         const invalidMatchClass = selectedValues.length === 2 && invalidMatch ? 'invalid-match' : '';
        return (
          <button
            className={`${selectedClass} ${correctMatchClass} ${invalidMatchClass}`}
            key={item}
            data-value={item}
            onClick={selectHandler}
          >
            {item}
          </button>
        );
      }) : <p>Congrats!</p>}
    </div>
  );
};

export default Game;

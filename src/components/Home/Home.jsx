import { useState } from 'react';
import ChooseColorBox from '../ChooseColorBox/ChooseColorBox';
import Grout from '../Grout/Grout';
import s from './Home.module.css';

const Home = ({ randomColors }) => {
  const [groutColors, setGroutColors] = useState(randomColors);
  const [selectedGroutColor, setSelectedGroutColor] = useState(groutColors[0]);
  const [isChooseColorBox, setIsChooseColorBox] = useState(false);
  return (
    <main className={s.container}>
      <h1 className={s.title}>Test task to choose color!</h1>
      <div className={s.box}>
        <Grout
          randomColors={randomColors}
          groutColors={groutColors}
          setIsChooseColorBox={setIsChooseColorBox}
          setGroutColors={setGroutColors}
          selectedGroutColor={selectedGroutColor}
          setSelectedGroutColor={setSelectedGroutColor}
        />
        {isChooseColorBox && (
          <ChooseColorBox
            setGroutColors={setGroutColors}
            setIsChooseColorBox={setIsChooseColorBox}
            selectedGroutColor={selectedGroutColor}
            setSelectedGroutColor={setSelectedGroutColor}
            groutColors={groutColors}
          />
        )}
      </div>
    </main>
  );
};

export default Home;

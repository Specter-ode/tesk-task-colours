import s from './Grout.module.css';
import AddIcon from '@/assets/icons/add.svg';

const Grout = ({ setIsChooseColorBox, groutColors, selectedGroutColor, setSelectedGroutColor }) => {
  const getItemClassName = color => {
    if (color === selectedGroutColor.rgb) {
      return `${s.item} ${s.selected}`;
    } else {
      return `${s.item}`;
    }
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Grout color</h2>
      <ul className={s.list}>
        {groutColors.map((el, index) => (
          <li key={el.number}>
            <button
              className={getItemClassName(el.rgb)}
              onClick={() => {
                setSelectedGroutColor(groutColors[index]);
              }}
              type="button"
              style={{ backgroundColor: el.rgb }}
            ></button>
          </li>
        ))}
      </ul>
      <div className={s.additionalBox}>
        <div className={s.selectedItem}>
          <div className={s.selectedColor} style={{ backgroundColor: selectedGroutColor.rgb }}></div>
          <p className={s.selectedName}>{selectedGroutColor.name}</p>
        </div>

        <button
          className={s.btn}
          type="button"
          onClick={() => {
            setIsChooseColorBox(true);
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default Grout;

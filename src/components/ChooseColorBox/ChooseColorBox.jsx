import s from './ChooseColorBox.module.css';
import CloseIcon from '@/assets/icons/close.svg';
import { useEffect, useState } from 'react';
import 'react-color-palette/lib/css/styles.css';
import PipetteIcon from '@/assets/icons/pipette.svg';
import InfoIcon from '@/assets/icons/info.svg';
import palette from '@/assets/data/palette.json';
import { ColorPicker, useColor } from 'react-color-palette';
import { getMatchingColors } from 'src/helpers/getMatchingColor';
import useDebounce from 'src/helpers/useDebounce';

const ChooseColorBox = ({ setIsChooseColorBox, setGroutColors, selectedGroutColor, setSelectedGroutColor }) => {
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [pickerColor, setPickerColor] = useColor('rgb', selectedGroutColor.rgbObj);
  const [matchingColors, setMatchingColors] = useState(getMatchingColors(selectedGroutColor, palette));
  const [colorToApply, setColorToApply] = useState(matchingColors[0]);

  const getItemClassName = color => {
    if (color === colorToApply.rgb) {
      return `${s.item} ${s.selected}`;
    } else {
      return `${s.item}`;
    }
  };

  const findMatchingColors = value => {
    setMatchingColors(getMatchingColors(value, palette));
  };

  const handleAddColor = () => {
    setGroutColors(prev => {
      const updatedGroutColors = [...prev].slice(0, prev.length - 1);
      updatedGroutColors.unshift(colorToApply);
      return updatedGroutColors;
    });
    setSelectedGroutColor(colorToApply);
  };

  const debouncedValue = useDebounce(pickerColor);


  useEffect(() => {
    setColorToApply(matchingColors[0]);
  }, [matchingColors]);

  useEffect(() => {
    if(debouncedValue) {
      findMatchingColors({ rgbObj: debouncedValue.rgb });
    }
  }, [debouncedValue]);

  return (
    <div className={s.container}>
      <button
        className={s.closeBtn}
        type="button"
        onClick={() => {
          setIsChooseColorBox(false);
        }}
      >
        <CloseIcon />
      </button>
      <div className={s.pickerContainer}>
        <div className={s.pickerIcon}>
          <PipetteIcon />
        </div>
        <ColorPicker width={264} height={137} color={pickerColor} onChange={setPickerColor} hideHEX hideHSV hideRGB />
      </div>
      <div className={s.titleBox}>
        <p className={s.titleText}>Matching Grout Colors</p>
        <div
          className={s.titleIcon}
          onMouseEnter={() => {
            setIsInfoTooltip(true);
          }}
          onMouseLeave={() => {
            setIsInfoTooltip(false);
          }}
        >
          <InfoIcon />
          {isInfoTooltip && (
            <div className={s.tooltip}>
              <p className={s.tooltipText}>Sample message you can see here!</p>
            </div>
          )}
        </div>
      </div>
      <ul className={s.list}>
        {matchingColors.map((el, index) => (
          <li key={el.number}>
            <button
              className={getItemClassName(el.rgb)}
              onClick={() => {
                setColorToApply(matchingColors[index]);
              }}
              type="button"
              style={{ backgroundColor: el.rgb }}
            ></button>
          </li>
        ))}
      </ul>
      <button className={s.applyBtn} type="button" onClick={handleAddColor}>
        Apply
      </button>
    </div>
  );
};

export default ChooseColorBox;

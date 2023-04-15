import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import 'react-horizontal-scrolling-menu/dist/styles.css';
import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev, isFirstItemVisible } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()}
      className="right-arrow"
      sx={{
        display: isFirstItemVisible ? 'none' : 'flex',
      }}
    >
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext, isLastItemVisible } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollNext()}
      className="left-arrow"
      sx={{
        display: isLastItemVisible ? 'none' : 'flex',
      }}
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
  console.log('🚀 ~ file: HorizontalScrollbar.jsx:44 ~ data:', data);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m={{ xs: 0, sm: '0 40px' }}
        >
          {bodyParts ? (
            <BodyPart
              item={item}
              setBodyPart={setBodyPart}
              bodyPart={bodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;

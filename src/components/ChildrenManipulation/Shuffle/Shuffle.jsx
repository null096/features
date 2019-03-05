import { Children } from 'react';
import { shuffle } from 'd3-array';

const Shuffle = ({ children }) => {
  const arrayOfChildren = Children.toArray(children);
  shuffle(arrayOfChildren);

  return arrayOfChildren;
};

export default Shuffle;
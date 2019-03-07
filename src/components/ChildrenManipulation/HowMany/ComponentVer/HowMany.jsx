import React, { Children } from 'react';

const HowMany = ({ children }) => {
  const count = Children.count(children);
  const typesCount = Children
    .toArray(children)
    .reduce((acc, { type }) => {
      acc[type] ? acc[type] += 1 : acc[type] = 1;
      return acc;
    }, {});
  const typesOutput = Object
    .keys(typesCount)
    .map(e => <div key={e}>{e} / {typesCount[e]}</div>);

  return (
    <>
      <div>Count: {count}</div>
      <div>Is only one child: {count === 1 ? 'True' : 'False'}</div>
      <div>Type/Count:</div>
      {typesOutput}
      <br />
      {children}
    </>
  );
}

export default HowMany;

import React from 'react';

import CharBlock from './CharBlock';
import './TextArr.css';

const TextArr = (props) => {
  if (props.format === 'plain') {
    let i = 0;
    return (
      <ul className="char-list">
        {props.value.map((element) => {
          return (
            <CharBlock
              key={i++}
              format={props.format}
              value={element.val}
              type={element.byteState}
            />
          );
        })}
      </ul>
    );
  }
  let i = 0;
  return (
    <ul className="code-list">
      {props.value.map((element) => {
        if (element.type === 0) {
          return (
            <CharBlock
              key={i++}
              format={props.format}
              type={element.type}
              data={element.data}
            />
          );
        }
        return (
          <CharBlock
            key={i++}
            format={props.format}
            type={element.type}
            dist={element.dist}
            len={element.len}
          />
        );
      })}
    </ul>
  );
};

export default TextArr;

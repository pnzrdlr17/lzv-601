import React from 'react';

import './CharBlock.css';

const UserItem = (props) => {
  if (props.format === 'plain') {
    return <li className={`char-item ${props.type}`}>{props.value}</li>;
  }
  if (props.type === 0) {
    return <li className={`code-item-circle`}>{props.data}</li>;
  }
  return (
    <li className={`code-item-block`}>
      {props.dist}-{props.len}
    </li>
  );
};

export default UserItem;

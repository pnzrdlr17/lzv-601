import React, { useRef } from 'react';
import { useTextVis } from '../../hooks/text-hook';
import TextArr from './TextArr';
import Button from '../FormElements/Button';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Visual.css';

const Visual = (props) => {
  const { inputArr, outputArr, compressor, isAnimRunning } = useTextVis(
    props.value,
    props.mode
  );
  const codeSpanRef = useRef();
  const btnHandler = (event) => {
    event.target.style.display = 'none';
    codeSpanRef.current.style.display = 'block';
    compressor();
  };

  return (
    <div className="vis-contain">
      <div className="text-contain">
        <span className="v-span1">Plain-text: </span>
        <TextArr value={inputArr} format="plain" />
      </div>
      <div className="code-contain">
        <span className="v-span2" ref={codeSpanRef}>
          Code-word:{' '}
        </span>
        <TextArr value={outputArr} format="code" />
      </div>
      <div className="btnHolder">
        <Button center onClick={btnHandler}>
          {!isAnimRunning && <FontAwesomeIcon icon={faPlay} />}
        </Button>
      </div>
    </div>
  );
};

export default Visual;

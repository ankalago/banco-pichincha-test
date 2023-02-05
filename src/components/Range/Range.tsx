import React from 'react';
import { WrapperRange } from './styles';

type Props = {
  name: string
  label: string
}

const Range: React.FC<Props> = ({ name, label }) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperRange>
        <span>0</span>
        <input id={name} name={name} type="range" step={1} min={0} max={100}/>
        <span>100</span>
      </WrapperRange>
    </>
  )
}

export default Range

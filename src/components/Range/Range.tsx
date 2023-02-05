import React, { useState } from 'react';
import { WrapperRange } from './styles';

type Props = {
  name: string
  label: string
}

const Range: React.FC<Props> = ({ name, label }) => {
  const [value, setValue] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target
    const valueRange = target.value
    const min = Number(target.min)
    const max = Number(target.max)
    const val = Number(target.value)
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    setValue(Number(valueRange))
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperRange>
        <span>0</span>
        <input id={name} name={name} type="range" step={1} min={0} max={100} onChange={handleInputChange} value={value} />
        <span>100</span>
      </WrapperRange>
    </>
  )
}

export default Range

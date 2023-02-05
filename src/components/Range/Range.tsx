import React, { useState } from 'react';
import { WrapperRange } from './styles';

type Props = {
  name: string
  label: string
  className?: string
  setValue: Function;
  value?: number;
}

const Range: React.FC<Props> = ({ name, label, className, setValue, value = "" }) => {
  const [valueRange, setValueRange] = useState(0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target
    const valueRange = Number(target.value)
    const min = Number(target.min)
    const max = Number(target.max)
    const val = Number(target.value)
    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
    setValueRange(valueRange)
    setValue(name, valueRange)
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperRange>
        <span>0</span>
        <input id={name} type="range" step={1} min={0} max={100} onChange={handleChange} className={className} value={value || valueRange} data-testid={name} />
        <span>100</span>
      </WrapperRange>
    </>
  )
}

export default Range

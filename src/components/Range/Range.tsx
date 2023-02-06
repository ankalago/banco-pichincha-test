import React, { useEffect, useState } from 'react';
import { WrapperRange } from './styles';

export type PropsRange = {
  name: string
  label: string
  className?: string
  setValue: Function;
  value?: number;
}

const Range: React.FC<PropsRange> = ({ name, label, className, setValue, value = "" }) => {
  const [valueRange, setValueRange] = useState(0)

  const backgroundRangeStart =(min: string | number, max: string | number, value: string | number) => {
    const minimum = Number(min)
    const maximum = Number(max)
    const val = Number(value) || 0
    return (val - minimum) * 100 / (maximum - minimum);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let target = e.target
    const valueRange = Number(target.value)
    target.style.backgroundSize = `${backgroundRangeStart(target.min, target.max, target.value)}% 100%`;
    setValueRange(valueRange)
    setValue(name, valueRange)
  }

  useEffect(() => {
    const target = document.getElementById(name)
    if (target) {
      target.style.backgroundSize = `${backgroundRangeStart(0, 100, value)}% 100%`;
    }
  }, [value])

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

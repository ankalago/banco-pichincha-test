import React, { useEffect, useState } from 'react';
import { WrapperInput } from './styles';

type Props = {
  name: string
  label: string
  placeholder?: string
  className?: string
  setValue?: Function;
  value?: number;
}

const Number: React.FC<Props> = ({ name, label, placeholder, className, setValue, value }) => {
  const [valueInput, setValueInput] = useState<number>(value || 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueRange = +e.target.value
    setValueInput(valueRange)
    setValue && setValue(name, valueRange)
  }

  useEffect(() => {
    value && setValueInput(value)
  }, [value])

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperInput>
        <input type="number" id={name} placeholder={placeholder} value={valueInput || 0} onChange={handleChange} className={className} data-testid={name} />
      </WrapperInput>
    </>
  )
}

export default Number

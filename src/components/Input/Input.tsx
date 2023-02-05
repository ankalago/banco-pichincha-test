import React, { useState } from 'react';
import { WrapperInput } from './styles';

type Props = {
  name: string
  label: string
  placeholder?: string
  className?: string
  setValue?: Function;
  value?: string;
}

const Input: React.FC<Props> = ({ name, label, placeholder, className, setValue, value }) => {
  const [valueInput, setValueInput] = useState(value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueRange = e.target.value
    setValueInput(valueRange)
    setValue && setValue(name, valueRange)
  }

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperInput>
        <input type="text" id={name} placeholder={placeholder} value={valueInput} onChange={handleChange} className={className} data-testid={name} />
      </WrapperInput>
    </>
  )
}

export default Input

import React, { useState } from 'react';
import { WrapperInput } from './styles';

type Props = {
  name: string
  label: string
  placeholder?: string
  className?: string
  setValue: Function;
}

const Input: React.FC<Props> = ({ name, label, placeholder, className, setValue }) => {
  const [valueInput, setValueInput] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueRange = e.target.value
    setValueInput(valueRange)
    setValue(name, valueRange)
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

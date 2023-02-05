import React from 'react';
import { WrapperInput } from './styles';

type Props = {
  name: string
  label: string
  placeholder?: string
}

const Input: React.FC<Props> = ({ name, label, placeholder }) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperInput>
        <input type="text" id={name} name={name} placeholder={placeholder}/>
      </WrapperInput>
    </>
  )
}

export default Input

import React from 'react';
import { WrapperInput } from './styles';

type Props = {
  name: string
  label: string
}

const Input: React.FC<Props> = ({ name, label }) => {

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <WrapperInput>
        <input type="text" id={name} name={name}/>
      </WrapperInput>
    </>
  )
}

export default Input

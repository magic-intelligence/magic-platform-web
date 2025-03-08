import React from 'react'
import { TextInput } from './inputs'
import { LabelInput } from './labels'

export const componentExample = () => {
  return (
    <div className="flex flex-col gap-2">
        <LabelInput
        value="Correo electronico" />
        <TextInput
        type="email"
        name="email"
        required={false}
        placeholder="example@magicintelligence.com" />
    </div>
  )
}

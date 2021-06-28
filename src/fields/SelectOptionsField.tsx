import React from 'react'
import {
  SelectOptionProps,
  RenderFunction,
  useSelectOption
} from '../hooks/useSelectOption'

export interface SelectOptionsFieldProps extends SelectOptionProps {
  render: RenderFunction
}

const SelectOptionsField: React.FC<SelectOptionsFieldProps> = ({
  render,
  ...props
}) => {
  const { options, isChecked, toggle } = useSelectOption(props)

  return (
    <React.Fragment>
      {options.map((option, keyOption) => (
        <React.Fragment key={`option${keyOption}`}>
          {render({
            option,
            isChecked: isChecked(keyOption),
            value: option,
            toggle: () => toggle(keyOption)
          })}
        </React.Fragment>
      ))}
    </React.Fragment>
  )
}

export default SelectOptionsField

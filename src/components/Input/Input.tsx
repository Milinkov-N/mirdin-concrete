import { ComponentPropsWithRef } from 'react'
import classNames from 'src/utils'

interface InputProps extends ComponentPropsWithRef<'input'> {
  wrapperClassName?: string
  inputClassName?: string
  label: string
}

export default function Input({
  wrapperClassName = '',
  inputClassName = '',
  name,
  placeholder,
  type,
  label,
  ...rest
}: InputProps) {
  const wrapperClasses = classNames('input-group', wrapperClassName)
  return (
    <div className={wrapperClasses}>
      <label htmlFor={name}>{label}</label>
      <input
        className={inputClassName}
        type={type}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export interface SelectProps extends ComponentPropsWithRef<'select'> {
  label: string
}

function Select({
  className = '',
  name,
  placeholder,
  label,
  required,
  children,
  ...rest
}: SelectProps) {
  const selectClasses = classNames('input-group', className)

  return (
    <div className={selectClasses}>
      <label htmlFor={name}>{label}</label>
      <div className='select-input'>
        <select
          name={name}
          placeholder={placeholder}
          required={required}
          {...rest}
        >
          {children}
        </select>
      </div>
    </div>
  )
}

export { Select }

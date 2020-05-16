import React from 'react'

import './input.css';

const Input = props => {

  let element = null
  const inputClasses = ['input']
  if (!props.valid && props.validation && props.touched) {
    inputClasses.push('invalid')
  }

  switch (props.type) {
    case 'textarea':
      element = (
        <textarea
          className={inputClasses.join(' ')}
          {...props.config}
          value={props.value}
          rows="4"
          onChange={props.onChange}
        />
      )
      break
    case 'select':
      element = (
        <select
          className={inputClasses.join(' ')}
          name={props.config.name}
          value={props.value}
          onChange={props.onChange}
        >
          {props.config.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      )
      break
    default:
      element = <input
        className={inputClasses.join(' ')}
        {...props.config}
        value={props.value}
        onChange={props.onChange} />
  }

  return (
    <div className="form-group">
      <label className="label">{props.label}</label>
      {element}
    </div>
  )
}

export default Input

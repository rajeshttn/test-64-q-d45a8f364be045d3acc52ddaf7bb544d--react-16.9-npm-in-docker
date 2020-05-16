import React from 'react';

import { addLead } from '../../apis'
import Input from '../Form/Input'
import './updateLeadForm.css';

class UpdateLeadForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fields: {
        communication: {
          label: 'Communication',
          type: 'textarea',
          config: {
            name: 'communication',
          },
          validation: {
            required: true,
          },
          value: this.props.data ? this.props.data.communication : '',
          valid: false,
        },
      },
    }
  }

  checkValidity = (value, validation) => {
    let isValid = true
    if (validation.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (validation.isNumeric) {
      const pattern = /^\d+$/
      isValid = pattern.test(value) && isValid
    }
    return isValid
  }

  onChange = (event, key) => {
    const field = { ...this.state.fields[key] }
    field.value = event.target.value
    field.valid = this.checkValidity(field.value, field.validation)
    const { fields } = this.state
    fields[key] = field
    this.setState({ fields })
  }

  onSave = () => {
    const data = {}
    Object.keys(this.state.fields).forEach(key => {
      data[key] = this.state.fields[key].value
    })
    this.props.onSave(data)
  }

  render() {
    const { onClose } = this.props
    const { fields } = this.state

    let isSaveEnabled = true
    Object.keys(fields).forEach(key => {
      isSaveEnabled = fields[key].valid && isSaveEnabled
    })
    return (
      <div className="update_lead">
        <form className="update_lead_form">
          {Object.keys(fields).map((key, index) => (
            <div key={index} className="field">
              <Input
                key={index}
                onChange={event => this.onChange(event, key)}
                {...fields[key]}
              />
              <br />
            </div>
          ))}
        </form>
        <div className="btn_wrapper">
          <button
            name="close_lead_btn"
            className="close_lead_btn"
            onClick={onClose}>
            Close
          </button>
          <button
            className="btn update_lead_btn"
            onClick={this.onSave}
            disabled={!isSaveEnabled}>
            Save
          </button>
        </div>
      </div>
    )
  }
}

export default UpdateLeadForm;

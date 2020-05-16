import React from 'react';

import Input from '../Form/Input'
import './addLeadForm.css';

class AddLeadForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fields: {
        first_name: {
          label: 'First Name*',
          config: {
            name: 'first_name',
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        last_name: {
          label: 'Last Name*',
          config: {
            name: 'last_name',
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        email: {
          label: 'Email Address*',
          config: {
            name: 'email',
            type: 'email',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        mobile: {
          label: 'Mobile*',
          config: {
            name: 'mobile',
            type: 'number',
          },
          value: '',
          validation: {
            required: true,
            isNumeric: true,
          },
          valid: false,
        },
        location_type: {
          label: 'Location Type*',
          type: 'select',
          config: {
            name: 'location_type',
            options: [
              { value: 'City', title: 'City' },
              { value: 'State', title: 'State' },
              { value: 'Country', title: 'Country' },
            ]
          },
          value: 'City',
          validation: {
            required: true,
          },
          valid: true,
        },
        location_string: {
          label: 'Location String*',
          config: {
            name: 'location_string',
            type: 'text',
          },
          value: '',
          validation: {
            required: true,
          },
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
    console.log("Dave called", this.state)
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
      <div className="add_lead">
        <form className="add_lead_form">
          {Object.keys(fields).map((key, index) => (
            <div className="field">
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
            className="close_lead_btn"
            name="close_lead_btn"
            onClick={onClose}
          >
            Close
        </button>
          <button
            className="btn add_lead_btn"
            onClick={this.onSave}
            disabled={!isSaveEnabled}
          >
            Save
        </button>
        </div>
      </div>
    )
  }
}

export default AddLeadForm;

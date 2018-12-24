import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { withOptions } from '@utils';

import RadioOption from '../RadioOption';

const style = require('./index.scss');

class RadioInput extends PureComponent {
  static propTypes = {
    className: PropTypes.any,
    disabled: PropTypes.bool,
    value: PropTypes.any,
    label: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };

  static defaultProps = {
    className: undefined,
    disabled: false,
    value: undefined,
    label: '',
    options: [],
    onChange: Function.prototype,
    onBlur: Function.prototype,
  };

  handleSelect = (nextValue, evt) => {
    evt.preventDefault();
    const { value, onChange } = this.props;
    if (nextValue !== value) {
      onChange(nextValue);
    }
  };

  handleBlur = evt => {
    const { disabled, onBlur } = this.props;
    if (!disabled) {
      onBlur(evt);
    }
  };

  render() {
    const { options, className, disabled, value, label } = this.props;

    return (
      <div
        role="radiogroup"
        aria-labelledby={label}
        className={cx(style.radioInput, className)}
      >
        {options.map((o, i) => (
          <RadioOption
            key={`${o.label}`}
            name={`group-option`}
            checked={o.value === value}
            disabled={disabled || o.disabled}
            onChange={evt => this.handleSelect(o.value, evt)}
            onBlur={this.handleBlur}
            label={o.label}
            value={o.value}
            tabIndex={i > 0 ? -1 : 0}
          />
        ))}
      </div>
    );
  }
}

export default withOptions(RadioInput);
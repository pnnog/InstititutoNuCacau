/* eslint-disable react/prop-types */
import { InputWrapper } from './styles';

export const ExtraInput = ({
  name,
  disabled,
  placeholder,
  handleChange,
  maxlength,
}) => {
  return (
    <InputWrapper id="other-input" className="inputs">
      <label>
        <input
          onChange={handleChange}
          disabled={disabled}
          type="text"
          name={name}
          placeholder={placeholder}
          maxLength={maxlength}
          required
        />
      </label>
    </InputWrapper>
  );
};

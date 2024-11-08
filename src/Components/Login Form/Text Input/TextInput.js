import { Component } from "react";

export class TextInput extends Component {
  static defaultProps = {
    type: "text",
  };

  render() {
    const { type, name, parentClass, labelText } = this.props;

    return (
      <>
        <label htmlFor={name} className={`${parentClass}-${name}-label`}>
          {labelText}
          <input
            type={type}
            name={name}
            className={`${parentClass}-${name}-input`}
            title={labelText}
            placeholder={labelText}
          />
        </label>
      </>
    );
  }
}

export default TextInput;

import { Component } from "react";

export class TextInput extends Component {
  static defaultProps = {
    type: "text",
  };

  render() {
    const { type, name, parentClass, labelText } = this.props;

    const mainClass = `${parentClass}-${name}`

    return (
      <>
        <label className={`${mainClass}-label`}>
          {labelText}
          <input
            type={type}
            name={name}
            className={`${mainClass}-input`}
            title={labelText}
            placeholder={labelText}
          />
        </label>
      </>
    );
  }
}

export default TextInput;

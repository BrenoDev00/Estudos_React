import React from "react";

class Button extends React.Component<{
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
}> {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        type={this.props.type}
        className="py-2 px-4 bg-blue-300 self-center rounded-[5px] font-semibold"
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;

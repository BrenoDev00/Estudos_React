import React from "react";

class Button extends React.Component<{
  text: string;
  type?: "submit" | "reset" | "button" | undefined;
}> {
  render() {
    return (
      <button
        type={this.props.type}
        className="py-2 px-4 bg-blue-300 self-center rounded-[5px] font-semibold"
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;

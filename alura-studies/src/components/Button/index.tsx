import React from "react";

class Button extends React.Component<{ text: string }> {
  render() {
    return (
      <button className="py-2 px-4 bg-blue-300 self-center rounded-[5px] font-semibold">
        {this.props.text}
      </button>
    );
  }
}

export default Button;

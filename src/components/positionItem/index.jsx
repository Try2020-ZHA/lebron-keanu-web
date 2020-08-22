import React from "react";
import "./index.css";

class PositionItem extends React.Component {
  state = {
    id: this.props.item.id,
    status: this.props.item.status
  };

  render() {
    const { item } = this.props;
    return (
      <div>
        <div
          onClick={() => this.props.handSendMessage(item)}
          id={item.status ? "item" : "itemWithSelect"}
          className={"shake"}
        >
          <span>{item.parkingSpace}</span>
        </div>
      </div>
    );
  }
}

export default PositionItem;

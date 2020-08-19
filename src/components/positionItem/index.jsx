import React from "react";
import "./index.css";

class PositionItem extends React.Component {
  render() {
      const {item} = this.props
    return (
      <div>      
        <div id="item">
          <span>{item.parkingSpace}</span>
        </div>
      </div>
    );
  }
}

export default PositionItem;

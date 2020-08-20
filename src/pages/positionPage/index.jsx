import React from "react";
import { getPositions } from "../../apis";
import { storePositionItem } from "../../actions";
import { connect } from "react-redux";
import { List } from "antd";
import PositionItem from "../../components/positionItem";
import './index.css'
class PositionPage extends React.Component {
  componentDidMount() {
    const { storePositionItem } = this.props;
    getPositions().then((res) => {
      console.log(res.data);
      res.data = [
        { parkingSpace: "A401" },
        { parkingSpace: "A402" },
        { parkingSpace: "A403" },
      ];
      if (res.status === 200) {
        storePositionItem(res.data);
      }
    });
  }
  render() {
    const { showItems } = this.props;
    return (
      <div>
          <div className='jump'>
              <span style={{animationDelay: '0s'}}>Lebron</span>
              <span style={{animationDelay: '0.5s'}}> & </span>
              <span style={{animationDelay: '1.0s'}}>Keanu</span>
              <span style={{animationDelay: '1.5s'}}>`s </span>
              <span style={{animationDelay: '2.0s'}}> Parking</span>
              <span style={{animationDelay: '2.5s'}}>-</span>
              <span style={{animationDelay: '3.0s'}}>Lot</span>
          </div>
        <div id='listBox'>
          <List
            dataSource={showItems}
            locale={{ emptyText: "Sorry,there are no position now!" }}
            renderItem={(item) => <PositionItem key={item.id} item={item} />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showItems: state.position.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    storePositionItem: (items) => {
      dispatch(storePositionItem(items));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PositionPage);

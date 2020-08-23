import React from "react";
import { connect } from "react-redux";
import { List, Button, Space} from "antd";
import Websocket from "react-websocket";
import { getPositions, bookingPosition } from "../../apis";
import { storePositionItem } from "../../actions";
import PositionItem from "../../components/positionItem";
import CreateOrder from '../../components/createOrder'
import "./index.css";

class PositionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show:false
    };
  }

  componentDidMount() {
    const { storePositionItem } = this.props;
    getPositions().then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        storePositionItem(res.data);
      }
    });
  }

  getRealtimeDate = () => {
    this.componentDidMount();
  };

  handSendMessage= (item)=>{
    console.log(item);
    this.show();
    bookingPosition(item.id).then((res) => {
      this.componentDidMount();
    });
    this.refWebSocket.sendMessage(`{
      "id": ${item.id},
      "parkingSpace": ${item.parkingSpace},
      "status": ${item.status}
    }`)
  };

  show=()=>{
    this.setState({
      show:!this.state.show
    })
      
  }
  

  render() {
    const { showItems} = this.props;
    return (
	<div>
		<div className="jump">
			<span style={{ animationDelay: "0s" }}>Lebron</span>
			<span style={{ animationDelay: "0.5s" }}> & </span>
			<span style={{ animationDelay: "1.0s" }}>Keanu</span>
			<span style={{ animationDelay: "1.5s" }}>`s </span>
			<span style={{ animationDelay: "1.0s" }}> Parking</span>
			<span style={{ animationDelay: "0.5s" }}>-</span>
			<span style={{ animationDelay: "0s" }}>Lot</span>
		</div>
		<div className="select">
			<Space size="large">
				<label>choosing booking time:</label>
				<Button>30 min later</Button>
				<Button>60 min later</Button>
				<Button>90 min later</Button>
			</Space>
		</div>
		<div id="listBox">
			<List
				dataSource={showItems}
				locale={{ emptyText: "Sorry,there are no position now!" }}
				renderItem={(item) => (
					<PositionItem
						key={item.id}
						item={item}
						handSendMessage={this.handSendMessage}
					/>
            )}
			/>
		</div>
		<Websocket
			url="ws://10.222.232.182:8888/websocket"
			onMessage={this.getRealtimeDate}
			ref={(websocketMsg) => {
              this.refWebSocket = websocketMsg;
            }}
		/>
		<div className="submit">
			<label>COST:$ 50</label>
		</div>
    <CreateOrder style={{display:this.state.show?'block':'none'}}></CreateOrder>
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

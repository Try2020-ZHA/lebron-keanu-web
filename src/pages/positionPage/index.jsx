import React from "react";
import { connect } from "react-redux";
import { List, Button, Space,DatePicker } from "antd";
import Websocket from "react-websocket";
import { getPositions, bookingPosition,getAllOrders } from "../../apis";
import { storePositionItem } from "../../actions";
import PositionItem from "../../components/positionItem";
import CreateOrder from '../../components/createOrder'
import moment from 'moment';
import "./index.css";

const {RangePicker }=DatePicker;

class PositionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      item:{},
      orders:[],
      status:[],
      startTime:'',
      endTime:''
    };
  }

  componentDidMount() {
    const { storePositionItem } = this.props;
    getPositions().then((res) => {
      if (res.status === 200) {
        storePositionItem(res.data);
      }
    });

    // getAllOrders().then(res =>{
    //   if (res.status === 200) {
    //     this.setState({
    //       orders:res.data
    //     })
    //   }
    // })
  }

  getRealtimeDate = () => {
    this.componentDidMount();
  };

  show=(item)=>{
    this.setState({
      visible:true,
      item
    })
  }

  handSendMessage= (item)=>{
    this.show(item);
    bookingPosition(item.id).then((res) => {
      this.componentDidMount();
    });
    this.refWebSocket.sendMessage(`{
      "id": ${item.id},
      "parkingSpace": ${item.parkingSpace},
      "status": ${item.status}
    }`)
    console.log('aaa');
  };

  cancel=(item)=>{
    this.setState({
      visible:false
    })
    console.log('hhh');
    bookingPosition(item.id).then((res) => {
      this.componentDidMount();
    });
    this.refWebSocket.sendMessage(`{
      "id": ${item.id},
      "parkingSpace": ${item.parkingSpace},
      "status": ${item.status}
    }`)
  }

  afterSubmit=()=>{
    this.setState({
      visible:false
    })
  }

  onChange=(value,dataString)=> {
    // for(let i=0;i<this.state.orders.length;i++){
    //   if(orders[i].endTime<value[0]||orders[i].startTime>value[1]){
    //     this.state.status.push(0);
    //   }else{
    //     this.state.status.push(1)
    //   }
    // }
    // console.log(value[0]<moment("2020-08-23T07:22:39.000+00:00")&&value[1]>moment("2020-08-23T07:22:39.000+00:00"))
    this.setState({
      startTime:dataString[0],
      endTime:dataString[1]
    })
  }

  render() {
    const { showItems} = this.props;
    const {visible}=this.state;
    return (
	<div id='container'>
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
        <label className='label'>choosing booking time:</label>			
				<RangePicker
					showTime={{ format: 'HH:mm' }}
					format="YYYY-MM-DD HH:mm"
          onChange={this.onChange}
          size='large'
				/>
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
		
    <CreateOrder visible={visible} cancel={this.cancel}
     item={this.state.item} 
     afterSubmit={this.afterSubmit} 
     start={this.state.startTime}
     end={this.state.endTime}
     />
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

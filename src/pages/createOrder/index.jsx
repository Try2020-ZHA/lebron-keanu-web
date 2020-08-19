import React from 'react';
import {Button} from 'antd';
import {addOrder} from '../../apis'

class CreateOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parkingLot:"f-parking",
            parkingPosition:20
        }
    }

    handleAddOrder=()=>{
        const {parkingLot,parkingPosition}=this.state;
        const data={
            parkingLot,
            parkingPosition
        }
        addOrder(data);
    }


    render(){
        return(
	<div>
		<Button onClick={this.handleAddOrder}>
			commit
		</Button>
	</div>
        )
    }
}

export default CreateOrder;
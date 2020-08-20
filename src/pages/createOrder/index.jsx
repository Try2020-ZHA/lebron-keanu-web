import React from 'react';
import {Button, Form, TimePicker} from 'antd';
import {addOrder} from '../../apis'

class CreateOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parkingLot:"g-parking",
            parkingPosition:30
        }
    }

    onSubmit=(values)=>{
        this.handleAddOrder(values)
    }

    handleAddOrder=(values)=>{
        const {parkingLot,parkingPosition}=this.state;
        const data={
            parkingLot,
            parkingPosition,
            startTime:values.startTime,
            endTime:values.endTime
        }
        addOrder(data).then(res=>{
            console.log(res);
        });
    }


    render(){
        return(
	<div>
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 14 }}
			layout="horizontal"
			onFinish={this.onSubmit}
		>
			<Form.Item label="StartTime" name='startTime'>
				<TimePicker />
			</Form.Item>
			<Form.Item label="EndTime" name='endTime'>
				<TimePicker />
			</Form.Item>
			<Form.Item label="Submit">
				<Button htmlType="submit">Button</Button>
			</Form.Item>
		</Form>
	</div>
        )
    }
}

export default CreateOrder;
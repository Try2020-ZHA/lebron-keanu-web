import React from 'react';
import {Button, Form, TimePicker,Modal} from 'antd';
import {addOrder, bookingPosition} from '../../apis'

class CreateOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parkingLot:"Lebron&Keanu-Parking-Lot",
            parkingPosition:59
        }
    }

    onSubmit=(values)=>{
        this.handleAddOrder(values)
        this.props.afterSubmit();
    }

    success=()=> {
      Modal.success({
        title: 'Your Order Submit Success!'
      });
    }

    error=()=> {
      Modal.error({
        title: 'Your Order Submit Fail!'
      });
    }

    handleAddOrder=(values)=>{
        const {parkingLot}=this.state;
        const data={
            parkingLot,
            parkingPosition:this.props.item.parkingSpace,
            startTime:values.startTime,
            endTime:values.endTime
        }
        addOrder(data).then(res=>{
            if(res.status===201){
              this.success();
            }else{
              this.error();
            }
        });
    }

    handleCancel= () => {
      this.props.cancel(this.props.item);
    };


    render(){
        return(
	<div>
		<Modal
			title="Please Submit Your Order Here"
			visible={this.props.visible}
			onCancel={this.handleCancel}
			footer={null}
		>
			<Form
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout="horizontal"
				onFinish={this.onSubmit}
			>
				<Form.Item label="Parking Lot">
					<span>Lebron & Keanu Parking-Lot</span>
				</Form.Item>
				<Form.Item label="Space">
					<span>{this.props.item.parkingSpace}</span>
				</Form.Item>
				<Form.Item label="StartTime" name='startTime'>
        <span>{this.props.start}</span>
				</Form.Item>
				<Form.Item label="EndTime" name='endTime'>
        <span>{this.props.end}</span>
				</Form.Item>
				<Form.Item label="Submit">
					<Button type="primary" htmlType="submit">Submit</Button>
				</Form.Item>
			</Form>
		</Modal>
		
	</div>
        )
    }
}

export default CreateOrder;
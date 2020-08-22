import React from 'react';
import {Button, Form, TimePicker,Modal} from 'antd';
import {addOrder} from '../../apis'

class CreateOrder extends React.Component{
    constructor(props){
        super(props);
        this.state={
            parkingLot:"e-parking",
            parkingPosition:59,
            visible:true
        }
    }
    
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

    onSubmit=(values)=>{
        this.handleAddOrder(values)
        this.setState({
          visible:true
        })
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
        const {parkingLot,parkingPosition}=this.state;
        const data={
            parkingLot,
            parkingPosition,
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
      this.setState({
        visible: false,
      });
    };


    render(){
      const {visible}=this.state;
        return(
	<div>
		<Modal
			title="Please Submit Your Order Here"
			visible={visible}
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
					<span>e-parking lot</span>
				</Form.Item>
				<Form.Item label="Space">
					<span>20</span>
				</Form.Item>
				<Form.Item label="StartTime" name='startTime'>
					<TimePicker />
				</Form.Item>
				<Form.Item label="EndTime" name='endTime'>
					<TimePicker />
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
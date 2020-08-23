import React from 'react';
import { message } from 'antd';
import './index.css';

class PositionItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: this.props.item.id,
			status: this.props.item.status,
		};
	}

	info = () => {
		message.info('This is a selected position!', 3);
	};

	render() {
		const { item } = this.props;
		return (
			<div>
				<div
					onClick={
						item.status ? () => this.props.handSendMessage(item) : this.info
					}
					id={item.status ? 'item' : 'itemWithSelect'}
					className="shake">
					<span style={{ color: 'black', fontSize: '18px', fontWeight: '600' }}>
						{item.parkingSpace}
					</span>
				</div>
			</div>
		);
	}
}

export default PositionItem;

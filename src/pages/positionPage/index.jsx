import React from 'react'
import {getPositions} from '../apis/index'
import { storePositionItem } from '../../actions'
import{connect} from 'react-redux'
import{List} from 'antd'
import PositionItem from '../../components/positionItem'

class PositionPage extends React.Component{

    componentDidMount(){
        const{storePositionItem} = this.props
        getPositions().then(res=>{
                if(res.status === 200){
                    dispatchEvent(storePositionItem(res.data))
                }
            }
        )
    }
    render(){
        const {showItems} = this.props
        return(
            <div>
                <List
					dataSource={showItems}
					locale={{ emptyText: 'Sorry,there are no position now!' }}
					renderItem={(item) => (
						<PositionItem key={item.id} item={item} />
					)}
				/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return(
        showItems : state.position.items,
    )
}

const mapDispatchProps = (dispatch) =>{
    return(
        storePositionItem:(items)=>{
            dispatch(storePositionItem(items)),
        }
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(PositionPage);
import request from '../utils/index'

const positionUrl = '/positions'
const orderUrl='/order'

export function getPositions(){
    return request({
        url:`${positionUrl}`,
        method:'get'
    })
}

export function addOrder(order){
    return request({
        url:`${orderUrl}`,
        method:'post',
        data:order
    })
}
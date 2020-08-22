import request from './../utils/index'

const positionUrl = '/positions'
export function getPositions(){
    return request({
        url:`${positionUrl}`,
        method:'get'
    })
}

export function bookingPosition(id){
    return request({
        url:`${positionUrl}/${id}`,
        method:'put'
    })
}
import request from './../utils/index'

const positionUrl = '/positions'

export function getPositions(){
    return request({
        url:`${positionUrl}`,
        method:'get'
    })
}
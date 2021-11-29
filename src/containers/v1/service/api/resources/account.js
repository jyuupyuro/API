import * as API_CONSTANT from '../constants'
const headers = {
    'Accept': '*/*',
    'Content-Type': 'application/json; charset=utf-8'
}
export const getAllACC = () => {
    return fetch("https://74161vnx8b.execute-api.ap-southeast-1.amazonaws.com/2021/accounts/accountAll", {
        method: 'POST',
        headers,
        body: JSON.stringify({
            
        })
    })
    .then(res => res.json())
}
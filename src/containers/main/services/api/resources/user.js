import * as API_CONSTANT from '../constants'


export const getInfoByUser = (uid) => (
    fetch(`${API_CONSTANT.path}/user/getInfo`, {
        method: 'POST',
        headers: API_CONSTANT,headers,
        body: JSON.stringify({
            uid
        })
    })
        .then(res => res.json())
)
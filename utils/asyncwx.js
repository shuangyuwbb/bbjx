export const login = () =>{
    return new Promise((resolve, reject)=>{
        wx.login({
            timeout: 10000,
            success: res => {
                resolve(res)
            },
            fail: err => {
                reject(err)
            }
        })
    })
}
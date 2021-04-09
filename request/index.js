let ajaxTimes = 0
// const baseUrl = 'http://localhost:8081/'
const baseUrl = 'https://binbin-dev.bcjgy.com/'
export const http = (params) =>{
    ajaxTimes ++
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    let header = {
        token: wx.getStorageSync('token')
    }
    return new Promise((resolve, reject)=>{
        wx.request({
            header,
            ...params,
            url: baseUrl + params.url,
            success: res =>{
                resolve(res.data)
            },
            fail: err =>{
                reject(err)
            },
            complete: () =>{
                ajaxTimes --
                if(ajaxTimes === 0){
                    wx.hideLoading()
                }
            }
        })
    })
}

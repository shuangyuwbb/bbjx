let ajaxTimes = 0

export const request = (params) =>{
    ajaxTimes ++
    wx.showLoading({
        title: '加载中',
        mask: true
    })
    const baseUrl = 'http://localhost:3000'
    return new Promise((resolve, reject)=>{
        wx.request({
            ...params,
            url: baseUrl + params.url,
            success: res =>{
                resolve(res)
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
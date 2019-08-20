import { config} from '../config.js'
class HTTP{
  constructor(){
    this.baseUrl = config.url
  }
  request(params) {
    let that = this
    if (!params.method){
      params.method = "GET"
    }
    wx.request({
      url: this.baseUrl + params.url,
      data: params.data,
      method: params.method,
      success: res => {
        // console.log(res)
        if (res.statusCode==200){
          params.success && params.success(res.data)
        } else {
          params.success && params.success("未找到数据")
        }
      },
      error: error => {
        params.fail && params.fail(err)
      }
    })
  }
}
export { HTTP }
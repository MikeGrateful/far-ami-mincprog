// pages/home.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    button:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this 
    var data = {};
  	data.token = wx.getStorageSync('token');
    wx.request({
        url: App.api_java_root + "/home/get-grid",
        header: { 'content-type': 'application/json'},
        data: data,
        success(res) {
          console.log("信息",res.data.data);
          _this.setData({ button:res.data.data })
		    },
		    fail(res) {
          console.log("错误信息",res);
          App.showError(res.errMsg, function() {
            
          });
        },
        complete(res) { 
        },
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  onClick(e){

    let url = e.currentTarget.dataset.url || '/pages/index/index';
    //wx.navigateTo({ url})

    wx.redirectTo({
        url: url
      })

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
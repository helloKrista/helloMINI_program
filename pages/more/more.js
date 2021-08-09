var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "user":{},
    "menu":[
      {"imgSrc":"../../images/eye.png" , "txt":"我的关注"},
      {"imgSrc":"../../images/star.png" , "txt":"我的收藏"},
      {"imgSrc":"../../images/draft.png" , "txt":"我的草稿"},
      {"imgSrc":"../../images/recent.png" , "txt":"最近浏览"},
      {"imgSrc":"../../images/book.png" , "txt":"我的书架"},
      {"imgSrc":"../../images/live.png" , "txt":"我的Live"},
      {"imgSrc":"../../images/zhi.png" , "txt":"我的值乎"},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo(function(userInfo){
      that.setData({
        user:userInfo
      })
    })
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
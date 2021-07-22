// custom-tab-bar/index.js
Page({
  data: {
    isShow_index:true,
    isShow_playing:false,
    isShow_me:false,
    selected: 0, //首页
    color: "#8D8D8D",
    selectedColor: "#C62F2F",
    list:[{
      "text":"首页",
      "pagePath":"pages/index/index",
      "iconPath":"/utils/icon/home.png",
      "selectedIconPath":"/utils/icon/homeActive.png"
    },{
      "text":"播放",
      "pagePath":"pages/index/play/index",
      "iconPath":"/utils/icon/music.png",
      "selectedIconPath":"/utils/icon/musicActive.png"
    },{
      "text":"我的",
      "pagePath":"pages/index/my/index",
      "iconPath":"/utils/icon/my.png",
      "selectedIconPath":"/utils/icon/myActive.png"
    }],
    
  },
  method:{
    switchTab_index(){
      wx.switchTab({
        url: '/page/index/index',
      })
      this.setData({
        isShow_index:true,
        isShow_me:false,
        isShow_playing:false
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
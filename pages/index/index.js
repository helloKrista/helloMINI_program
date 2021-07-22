// index.js
// 获取应用实例
const app = getApp()
var utils = require('../../utils/util')

Page({
  data: {
    feed:[],
    list:[{
      // "text":"首页",
      "pagePath":"pages/index/index",
      "iconPath":"/utils/icon/home.png",
      "selectedIconPath":"/utils/icon/homeActive.png"
    },{
      //"text":"播放",
      "pagePath":"pages/index/play/index",
      "iconPath":"/utils/icon/music.png",
      "selectedIconPath":"/utils/icon/musicActive.png"
    },{
      //"text":"我的",
      "pagePath":"pages/index/my/index",
      "iconPath":"/utils/icon/my.png",
      "selectedIconPath":"/utils/icon/myActive.png"
    }],
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  getData(){
    console.log('getData')
    var feed = utils.getData2();
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    })
  },
  onLoad() {
    console.log('onLoad')
    this.getData();
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

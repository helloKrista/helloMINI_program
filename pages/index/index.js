// index.js
// 获取应用实例
const app = getApp()
var utils = require('../../utils/util')

Page({
  data: {
    feed:[],
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  bindItemTap(){
    wx.navigateTo({
      url: '../anwser/answer',
    })
  },
  bindQueTap(){
    wx.navigateTo({
      url: '../question/question',
    })
  },
  tabchange(){
    wx.navigateTo({
      url: 'url',
    })
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
  nextLoad(){
    wx.showToast({
      title: '加载中',
      icon:'loading',
      duration:4000
    })
    var next = utils.getNext();
    console.log("continueload");
    var next_data = next.data;
    this.setData({
      feed:this.data.feed.concat(next_data),
      feed_length:this.data.feed.length+next_data.length
    });
    setTimeout(function(){
      wx.showToast({
        title: '加载成功',
        icon:'success',
        duration:2000
      })
    },3000)
  },
  upper(){
    wx.showNavigationBarLoading();
    this.refresh();
    console.log("upper");
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      wx.stopPullDownRefresh();
    },1000)
  },
  lower(){
    wx.showNavigationBarLoading();
    this.refresh();
    console.log("lower");
    var that = this;
    setTimeout(function(){
      wx.hideNavigationBarLoading();
      that.nextLoad();
    },2000)
  },
  refresh(){
    wx.showToast({
      title: '刷新中',
      icon:'loading',
      duration:3000
    });
    var feed = utils.getData2();
    console.log("loaddata");
    var feed_data = feed.data;
    this.setData({
      feed:feed_data,
      feed_length:feed_data.length
    });
    setTimeout(function(){
      wx.showToast({
        title:'刷新成功',
        icon:'success',
        duration:2000
      })
    },3000)
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

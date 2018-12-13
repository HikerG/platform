//index.js
//获取应用实例
var app = getApp()
var fileData = require('../../utils/data.js')

Page({
  
  // 页面初始数据
  data: {
      colors:['red','orange','yellow'],
      // banner 初始化
      banner_url: fileData.getBannerData(),
      indicatorDots: true,
      vertical: false,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      //btn初始化
      //btn_url:fileData.getBtnData(),
      // nav 初始化
      navTopItems: fileData.getIndexNavData(),
      navSectionItems: fileData.getIndexNavSectionData(),
      curNavId: 1,
		  curIndex: 0
  },
   
  onLoad:function(){
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  
  //按钮点击事件
  clickbtn1:function(e){
    console.log("点击事件成功")
    wx.navigateTo({
      title:"按钮1对应链接",
      url: '../btn1/btn1',
    })
  },
  clickbtn2: function (e) {
    console.log("点击事件成功")
    wx.navigateTo({
      title: "按钮2对应链接",
      url: '../btn2/btn2',
    })
  },
  clickbtn3: function (e) {
    console.log("点击事件成功")
    wx.navigateTo({
      title: "按钮3对应链接",
      url: '../btn3/btn3',
    })
  },
  clickbtn4: function (e) {
    console.log("点击事件成功")
    wx.navigateTo({
      title: "按钮4对应链接",
      url: '../btn4/btn4',
    })
  },
  clickbtn5: function (e) {
    console.log("点击事件成功")
    wx.navigateTo({
      title: "按钮4对应链接",
      url: '../btn5/btn5',
    })
  },
  
  //标签切换
  switchTab: function(e) {
      let id = e.currentTarget.dataset.id,
      index = parseInt(e.currentTarget.dataset.index)
      this.curIndex = parseInt(e.currentTarget.dataset.index)
      console.log(e)
      var that = this
      this.setData({
        curNavId: id,
        curIndex: index,
      })
      
  },

  // 跳转至详情页
  navigateDetail: function(e){
    wx.navigateTo({
      url:'../detail/detail?type=' + e.currentTarget.dataset.type
    })
  }

})

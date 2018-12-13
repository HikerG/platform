/*轮播数据*/
function getBannerData(){
  var arr = [
    '../../images/banner/01.png',
    '../../images/banner/02.png',
    '../../images/banner/03.png',
    '../../images/banner/04.png'
    ]
    return arr
}
/*按钮数据*/
function getBtnData(){
  var arr=[
    {
      id:1,
      icon:"../../images/btn/01.png",
      text:"招聘公告"
    },
    {
      id:2,
      icon:"../../images/btn/02.png",
      text: "招聘会"
    },
    {
      id:3,
      icon:"../../images/btn/03.png",
      text: "宣讲会"
    },
    {
      id:4,
      icon:"../../images/btn/04.png",
      text: "讲座预约"
    }
  ]
  return arr
}
/*选项卡数据*/ 
function getIndexNavData(){
    var arr = [
            {
                id:1,
                title:"通知公告"
            },
            {
                id:2,
                title:"新闻快递"
            },
            {
                id:3,
                title:"校内公示"
            },
        ]
    return arr
}

/*选项卡 对应 标签 数据项*/ 
function getIndexNavSectionData(){
    var arr = [
                [
                  {                
                    subject:"文章",
                    data:'2018-12-11',
                    message:'文章提要'
                  },
                  {
                    subject:"文章",
                    data: '2018-12-11',
                    message:'文章提要'
                  },
                  {
                    subject: "文章",
                    data: '2018-12-11',
                    message: '文章提要'
                  },
                  {
                    subject: "文章",
                    data: '2018-12-11',
                    message: '文章提要'
                  },
                  {
                    subject: "文章",
                    data: '2018-12-11',
                    message: '文章提要'
                  }
                ],
                [
                  {
                    subject:"文章",
                    data: '2018-12-11',
                    message:'文章提要'
                    },
                  {
                    subject: "文章",
                    data: '2018-12-11',
                    message: '文章提要'
                  }
                ],
                [
                  {
                    subject:"文章",
                    data: '2018-12-11',
                    message:'文章提要'
                  }
                ]
            ]
    return arr
}

/*
 * 对外暴露接口
 */ 
module.exports = {
  getBannerData : getBannerData,
  getIndexNavData : getIndexNavData,
  getIndexNavSectionData : getIndexNavSectionData,
}
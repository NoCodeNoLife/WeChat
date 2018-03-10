let src;
Page({
  data: {
    src: "http://pic.ibaotu.com/00/18/90/32E888piCgUB.mp4",
    list: [
      {
        "index": 1,
        "text": "angular-简介",
        "link": "http://pic.ibaotu.com/00/15/50/34H888piC97g.mp4"
      },
      {
        "index": 2,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/16/92/75w888piCCA8.mp4"
      },
      {
        "index": 3,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/18/05/07u888piCmiT.mp4"
      },
      {
        "index": 4,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/18/04/882888piCJe9.mp4"
      },
      {
        "index": 5,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/18/04/63b888piC42C.mp4"
      },
      {
        "index": 6,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/13/88/45M888piCCZh.mp4"
      },
      {
        "index": 7,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/17/50/97F888piCVXC.mp4"
      },
      {
        "index": 8,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/20/21/24p888piCKyI.mp4"
      },
      {
        "index": 9,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/18/66/27Z888piCeCi.mp4"
      },
      {
        "index": 10,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/16/30/795888piCDa6.mp4"
      },
      {
        "index": 11,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/31/01/91Y888piCwCc.mp4"
      },
      {
        "index": 12,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/16/38/47Q888piCdmp.mp4"
      },
      {
        "index": 13,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/17/55/16j888piChq5.mp4"
      },
      {
        "index": 14,
        "text": "angular-双向数据绑定",
        "link": "http://pic.ibaotu.com/00/19/74/84r888piC3AQ.mp4"
      }
    ]
  },

  vClick: function (e) {
    let link = e.currentTarget.id;
    let id = e.currentTarget.dataset.id;
    this.setData({
      id: id,
      src: link
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: 'JavaScript秘密花园',
      path: '/pages/index/index',
      success: function (res) {
        console.log('scuuess')
      },
      fail: function (res) {
        console.log('fail');
      }
    }
  },
})
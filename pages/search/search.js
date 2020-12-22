Page({

  data: {
    optionsListData: [],

    selectOptionsListData: {
      picture: '',
      thick: '',
      num: 0,
    },
    scrollPosition: {
      everyOptionCell:65,
      top:47,
      scrollTop:0,
      scrollY:true,
      scrollViewHeight:1000,
      scrollViewWidth:375,
      windowViewHeight:1000,
    },
    movableViewPosition: {
      x: 0,
      y: 0,
      className: "none",
      data: []
    },
    selectItemInfo:{
      picture: '',
      thick: '',
      num: 0,
      selectIndex: -1,
      selectPosition:0,
    },
    mask: '',
    filtrate: {},
    filtrateClass: 'none',
    filtrateIndex: -1,
    texture: {
      data: [
        {id: 0, value: '冷轧板'},
        {id: 1, value: '热轧板'},
        {id: 2, value: '材质分类'},
        {id: 3, value: '不锈钢'},
        {id: 4, value: '涟钢'}
      ]
    },
    thick: {
      data: [
        {id: 0, value: '2mm'},
        {id: 1, value: '3mm'},
        {id: 2, value: '4mm'},
        {id: 3, value: '5mm'},
        {id: 4, value: '6mm'}
      ]
    },
    gas: {
      data: [
        {id: 0, value: '空气'},
        {id: 1, value: '氧气'},
        {id: 2, value: '氢气'},
        {id: 3, value: '气体名称'}
      ]
    },
    sort: {
      style:{
        'flex-direction': 'column'
      },
      data: [
        {id: 0, value: '默认排序'},
        {id: 1, value: '按数量排序(从大到小)'},
        {id: 2, value: '按数量排序(从小到大)'},
      ]
    }
  },

  bindCloseMask(){
    console.log('小时');
    this.setData({
      mask:'',
      filtrateClass: 'none',
      filtrateIndex: -1
    })
  },

  bindFiltrate(e){
    let {index} = e.currentTarget.dataset
    if(index === this.data.filtrateIndex){
      this.setData({
        mask:'',
        filtrateClass: 'none',
        filtrateIndex: -1
      })
      return 
    }
    this.setData({
      mask: 'mask',
      filtrateClass: '',
      filtrateIndex: index
    })

    switch (index){
      case '0':
        this.setData({filtrate: this.data.texture})
        break;
      case '1':
        this.setData({filtrate: this.data.thick})
        break;
      case '2':
        this.setData({filtrate: this.data.gas})
        break;
      case '3':
        this.setData({
          filtrate: this.data.sort,
          filtrateClass: 'column'
        })
        break;
    }

    // if()
    console.log(e.currentTarget.dataset.index);
  },

  bindscroll(event) {
    let scrollTop = event.detail.scrollTop;
    this.setData({
      'scrollPosition.scrollTop': scrollTop
    })
  },

  getOptionInfo(code) {
    for (let i = 0, j = this.data.optionsListData.length; i < j; i++) {
      let optionData = this.data.optionsListData[i];
      if (optionData.num == code) {
        optionData.selectIndex = i;
        return optionData;
      }
    }
    return {};
  },

  getPositionDomByXY(potions) {
    let y = potions.y - this.data.scrollPosition.top + this.data.scrollPosition.scrollTop;
    let optionsListData = this.data.optionsListData;
    let everyOptionCell = this.data.scrollPosition.everyOptionCell;
    for (let i = 0, j = optionsListData.length; i < j; i++) {
      if (y >= i * everyOptionCell && y < (i + 1) * everyOptionCell) {
        return optionsListData[i];
      }
    }
    return optionsListData[0];
  },

  draggleTouch(event) {
    let touchType = event.type;
    switch (touchType) {
      case "touchstart":
        this.scrollTouchStart(event);
        break;
      case "touchmove":
        this.scrollTouchMove(event);
        break;
      case "touchend":
        this.scrollTouchEnd(event);
        break;
    }
  },

  scrollTouchStart(event) {
    // console.log(event);
    let firstTouchPosition = {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY,
    }
    console.log("firstTouchPosition:", firstTouchPosition);
    let domData = this.getPositionDomByXY(firstTouchPosition);

    //movable-area滑块位置处理
    let movableX = 0;
    let movableY = firstTouchPosition.y - this.data.scrollPosition.top - this.data.scrollPosition.everyOptionCell / 2;

    this.setData({
      movableViewPosition: {
        x: movableX,
        y: movableY,
        data: domData
      }
    })

    let num = domData.num;
    let secInfo = this.getOptionInfo(num);
    secInfo.selectPosition = event.changedTouches[0].clientY;
    secInfo.selectClass = "dragSelected";

    this.data.optionsListData[secInfo.selectIndex].selectClass = "dragSelected";

    let optionsListData = this.data.optionsListData;

    this.setData({
      'scrollPosition.scrollY': false,
      selectItemInfo: secInfo,
      optionsListData: optionsListData,
      'scrollPosition.selectIndex': secInfo.selectIndex
    })
  },

  scrollTouchMove(event) {
    let selectItemInfo = this.data.selectItemInfo;
    let selectPosition = selectItemInfo.selectPosition;
    let moveDistance = event.changedTouches[0].clientY;
    let everyOptionCell = this.data.scrollPosition.everyOptionCell; 
    let optionsListData = this.data.optionsListData;
    let selectIndex = selectItemInfo.selectIndex;

    console.log("event.changedTouches:", event.changedTouches);
    //movable-area滑块位置处理
    let movableX = 0;
    let movableY = event.changedTouches[0].pageY - this.data.scrollPosition.top - this.data.scrollPosition.everyOptionCell / 2;


    this.setData({
      movableViewPosition: {
        x: movableX,
        y: movableY,
        className: "",
        data: this.data.movableViewPosition.data
      }
    })

    if (moveDistance - selectPosition > 0 && selectIndex < optionsListData.length - 1) {
      if (optionsListData[selectIndex].num == selectItemInfo.num) {
        optionsListData.splice(selectIndex, 1);
        optionsListData.splice(++selectIndex, 0, selectItemInfo);
        selectPosition += everyOptionCell;
      }
    }

    if (moveDistance - selectPosition < 0 && selectIndex > 0) {
      if (optionsListData[selectIndex].num == selectItemInfo.num) {
        optionsListData.splice(selectIndex, 1);
        optionsListData.splice(--selectIndex, 0, selectItemInfo);
        selectPosition -= everyOptionCell;
      }
    }

    this.setData({
      'selectItemInfo.selectPosition': selectPosition,
      'selectItemInfo.selectIndex': selectIndex,
      optionsListData: optionsListData,
    });
  },

  scrollTouchEnd(event) {
    console.log('触摸结束');
    let optionsListData = this.optionsDataTranlate(this.data.optionsListData, "");

    this.setData({
      optionsListData: optionsListData,
      'scrollPosition.scrollY': true,
      'movableViewPosition.className':"none"
    })
  },

  optionsDataTranlate(optionsList, selectClass) {
    for (let i = 0, j = optionsList.length; i < j; i++) {
      optionsList[i].selectClass = selectClass;
    }
    return optionsList;
  },

  onLoad(){
    var systemInfo= wx.getSystemInfoSync();
    let optionsList = [
      { picture: "../../images/1.png", thick: "45*43 mm", num: 0 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 1 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 2 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 3 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 4 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 5 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 6 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 7 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 8 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 9 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 10 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 11 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 12 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 13 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 14 },
      { picture: "../../images/1.png", thick: "45*43 mm", num: 15 }
    ]
    let optionsListData = this.optionsDataTranlate(optionsList,"");
    var scrollViewHeight = systemInfo.windowHeight-47;
    var scrollViewWidth = systemInfo.windowWidth;
    this.setData({
      optionsListData,
      'scrollPosition.scrollViewWidth':scrollViewWidth,
      'scrollPosition.scrollViewHeight':scrollViewHeight,
      'scrollPosition.windowViewHeight':systemInfo.windowHeight,
    })
  }

})

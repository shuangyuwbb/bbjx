import {http} from './../../request/index'
import {checkIsLogin} from './../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        cartList: [],
        isLogin: false,
        allChecked: false,
        totalPrice: 0
    },

    onShow() {
        this.isLogin()
        this.loadGoodsList()
        this.loadCartList()
    },

    isLogin() {
        this.setData({
            isLogin: checkIsLogin()
        })
    },

    loadCartList() {
        let params = {
            url: 'cart/list',
            data: {
                openid: wx.getStorageSync('openid')
            }
        }
        http(params).then(res => {
            res.data.forEach(item => {
                item.checked = false
            })
            this.setData({
                cartList: res.data
            })
            console.log(this.data.cartList)
        })
    },

    loadGoodsList() {
        let params = {
            url: 'cart/shopList'
        }
        http(params).then(res => {
            console.log(res)
            this.setData({
                list: res.data
            })
        })
    },

    toGoodsDetail(e) {
        wx.navigateTo({
            url: '/pages/detail/detail?id=' + e.detail,
        })
    },

    sub(e) {
        let {count, id} = e.detail
        if (count <= 1) return
        this.data.cartList.forEach(item => {
            if (item.id === id) {
                item.count--
            }
        })
        console.log(this.data.cartList)
        this.setData({
            cartList: this.data.cartList
        })
        this.calculatePrice()
    },

    add(e) {
        let {id} = e.detail
        this.data.cartList.forEach(item => {
            if (item.id === id) {
                if (item.stock <= item.count) return
                item.count++
            }
        })
        this.setData({
            cartList: this.data.cartList
        })
        this.calculatePrice()
    },

    changeRadio(e) {
        this.data.cartList.forEach(item => {
            if (item.id === e.detail) item.checked = !item.checked
        })
        this.setData({
            cartList: this.data.cartList
        })
        this.ckeckAllckecked()
        this.calculatePrice()
    },

    ckeckAllckecked() {
        for (let i = 0, j = this.data.cartList.length; i < j; i++) {
            if (!this.data.cartList[i].checked) {
                this.setData({allChecked: false})
                return
            }
        }
        this.setData({allChecked: true})
        this.calculatePrice()
    },

    bindAllChecked() {
        this.data.cartList.forEach(item => {
            item.checked = true
        })
        this.setData({
            cartList: this.data.cartList,
            allChecked: true
        })
        this.calculatePrice()
    },

    calculatePrice(){
        let totalPrice = 0
        this.data.cartList.forEach(item =>{
            if(item.checked) {
                totalPrice += item.count * item.price
            }
        })
        this.setData({totalPrice})
    }
})

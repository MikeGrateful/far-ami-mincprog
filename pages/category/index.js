const App = getApp();
const pageIndex = 'category/list::';

Page({
    data: {

        cateGoryLists: [],
        oneClassCss: [],
        //左边的分类
        leftCateGoryLists:[],
        //左边分类样式
        leftCategoryCss:[],
        scrollHeight: null,
        showView: false, // 列表显示方式
        sortType: 'all', // 排序类型
        sortPrice: false, // 价格从低到高
        option: {}, // 当前页面参数
        list: {}, // 商品列表数据
        no_more: false, // 没有更多数据
        isLoading: true, // 是否正在加载中
        page: 1, // 当前页码
    },



    /**
   * 获取分类列表
   */
    getCategoryList() {
        let _this = this;
        App._get(App.apis.categoryList, {}, result => {
            let data = result.data;
            console.log(data);
            // //根据返回的数量设置顶部分类样式
            data.list.length > 0 && _this.setTopCategoryCss(data.list);
            _this.setData({
                cateGoryLists: data.list,
                templet: data.templet,
                categoryNotcont: !data.list.length
            });
            //更新
            this.setTopSelectCategory(0);
        });
    },

    


    //大分类选中时，更新子类数据
    setTopSelectCategory(idx){ 

        let _this = this;
        let datas = _this.data.cateGoryLists[idx].child;
        //先更新左边分类的样式
        _this.setLeftCategoryCss(datas);
        //更新左边子类列表数据
        _this.setData({
            leftCateGoryLists:datas
        });
        
    },
    //设置小分类为选中状态
    setLeftSelectCategory(e){

     
    },


    /**
     * 设置顶部分类样式
     * @param {*} lists 
     */
    setTopCategoryCss(lists) {
        let data = [];
        lists.forEach(e => {
            data.push("top-category-item");
        });
        this.setData({
            oneClassCss: data
        })

    },


       /**
     * 设置左边分类样式
     * @param {*} lists 
     */
    setLeftCategoryCss(lists) {
        let data = [];
        lists.forEach(e => {
            data.push("left-category-item");
        });
        this.setData({
            leftCategoryCss: data
        })
    },


    /**
       * 单击大分类
       * @param {} e 
       */
    onSelectOneClass(e) {
        // console.log(e.currentTarget.dataset.onclickId);
        let idx = e.currentTarget.dataset.onclickId;

        let dataId = e.currentTarget.dataset.dataId;
      

        // this.data.oneClassCss[idx] = "top-category-item-active";

        for (let eleIdx in this.data.oneClassCss) {
            if (eleIdx == idx) {
                this.data.oneClassCss[eleIdx] = "top-category-item-active";
            } else {
                this.data.oneClassCss[eleIdx] = "top-category-item";
            }
        }

        let me = this;
        this.setData({
            oneClassCss: me.data.oneClassCss
        })

        this.setTopSelectCategory(idx);

        //获取商品数据
        this.setData({
            option:{
                category_id:dataId
            }
        })

        me.getGoodsList();
    },


    onSelectLeftGategory(e){
        let _this = this;
        let idx = e.currentTarget.dataset.onclickId;
        // this.data.oneClassCss[idx] = "top-category-item-active";
        let dataId = e.currentTarget.dataset.dataId;

        for (let eleIdx in this.data.leftCategoryCss) {
            if (eleIdx == idx) {
                _this.data.leftCategoryCss[eleIdx] = "left-category-item-active";
            } else {
                _this.data.leftCategoryCss[eleIdx] = "left-category-item";
            }
        }

        
        _this.setData({
            leftCategoryCss: _this.data.leftCategoryCss
        });

         //获取商品数据
         _this.setData({
            option:{
                category_id:dataId
            }
        })

        _this.getGoodsList();

    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(option) {
        let _this = this;

        // 设置商品列表高度
        _this.setListHeight();
        // 记录option
        _this.setData({
            option
        });
        // 设置列表显示方式
        _this.setShowView();
        // 获取商品列表
        _this.getGoodsList();
        _this.getCategoryList();

    },

    /**
     * 设置默认列表显示方式
     */
    setShowView() {
        let _this = this;
        _this.setData({
            showView: wx.getStorageSync(pageIndex + 'showView') || false
        });
    },

    /**
     * 获取商品列表
     * @param {bool} isPage 是否分页
     * @param {number} page 指定的页码
     */
    getGoodsList(isPage, page) {
        let _this = this;
        App._get('goods/lists', {
            page: page || 1,
            sortType: this.data.sortType,
            sortPrice: this.data.sortPrice ? 1 : 0,
            category_id: this.data.option.category_id || 0,
            search: this.data.option.search || '',
        }, result => {
            let resList = result.data.list,
                dataList = _this.data.list;
            if (isPage == true) {
                _this.setData({
                    'list.data': dataList.data.concat(resList.data),
                    isLoading: false,
                });
            } else {
                _this.setData({
                    list: resList,
                    isLoading: false,
                });
            }
        });
    },

    /**
     * 设置商品列表高度
     */
    setListHeight() {
        let _this = this;
        wx.getSystemInfo({
            success: res => {
                _this.setData({
                    scrollHeight: res.windowHeight - 90,
                });
            }
        });
    },

    /**
     * 切换排序方式
     */
    switchSortType(e) {
        let _this = this,
            newSortType = e.currentTarget.dataset.type,
            newSortPrice = newSortType === 'price' ? !this.data.sortPrice : true;

        this.setData({
            list: {},
            isLoading: true,
            page: 1,
            sortType: newSortType,
            sortPrice: newSortPrice
        }, () => {
            // 获取商品列表
            _this.getGoodsList();
        });
    },

    /**
     * 切换列表显示方式
     */
    onChangeShowState() {
        let _this = this,
            showView = !_this.data.showView;
        wx.setStorageSync(pageIndex + 'showView', showView);
        _this.setData({
            showView
        });
    },

    /**
     * 下拉到底加载数据
     */
    bindDownLoad() {

        console.log("sss")

        // 已经是最后一页
        if (this.data.page >= this.data.list.last_page) {
            this.setData({
                no_more: true
            });
            return false;
        }
        // 加载下一页列表
        this.getGoodsList(true, ++this.data.page);
    },

    /**
     * 设置分享内容
     */
    onShareAppMessage() {
        // 构建分享参数
        return {
            title: "全部分类",
            path: "/pages/category/index?" + App.getShareUrlParams()
        };
    },

    /**
     * 商品搜索
     */
    triggerSearch() {
        let pages = getCurrentPages();
        // 判断来源页面
        if (pages.length > 1 &&
            pages[pages.length - 2].route === 'pages/search/index') {
            wx.navigateBack();
            return;
        }
        // 跳转到商品搜索
        wx.navigateTo({
            url: '../search/index',
        })
    },

});
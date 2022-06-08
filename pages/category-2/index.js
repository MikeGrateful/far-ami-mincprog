
const App = getApp();
Page({

    data:{

        lists:["哈哈","呵呵","嗯嗯"],
        oneClassCss:[],
        activeCss:".scroll-item"
    },
    onLoad: function (options) {
    
        let data=[];
        data.push("scroll-item");
        data.push("scroll-item");
        data.push("scroll-item");
        this.setData({
            oneClassCss:data
        })
    
    },

    /**
     * 单击大分类
     * @param {} e 
     */
    onSelectOneClass(e) {
        console.log(e.currentTarget.dataset.onclickId);
        let idx = e.currentTarget.dataset.onclickId;
        this.data.oneClassCss[idx] = "scroll-item-active";

        for(let eleIdx in this.data.oneClassCss){
            if( eleIdx==idx ){
                this.data.oneClassCss[eleIdx] = "scroll-item-active";
            }else{
                this.data.oneClassCss[eleIdx] = "scroll-item";
            }
        }

        let me = this;
        this.setData({
            oneClassCss:me.data.oneClassCss
        })


        // this.setData({
        //     activeCss:".scroll-item-active"
        // });

       
    }

})
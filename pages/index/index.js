let toaxml = require("towxml");
let md = new toaxml();

Page({
  data: {
    markdown: "",
    test: "test"
  },
  onLoad(query) {
    // 页面加载
    console.info(`Page onLoad with query: ${JSON.stringify(query)}`);

    let mdData = new Promise(resolve => {
      my.request({
        url:
          "https://gitee.com/docker_practice/miniprogram_ant/raw/master/SUMMARY.md",
        dataType: "text",
        success: res => {
          resolve(res.data);
        }
      });
    });

    mdData.then(res => {
      let markdown = md.toJson(res, "markdown");
      this.setData({
        markdown
      });
    });
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: "My App",
      desc: "My App description",
      path: "pages/index/index"
    };
  }
});

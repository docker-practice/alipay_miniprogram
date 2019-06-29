let toaxml = require("towxml");
let md = new toaxml();

Page({
  data: {
    key: "",
    markdown: {}
  },
  async onLoad(query) {
    let key = query.key || undefined;

    this.setData({
      key
    });

    my.showLoading({});

    let mdData = await new Promise(resolve => {
      my.request({
        url:
          "https://gitee.com/docker_practice/docker_practice/raw/master/" + key,
        dataType: "text",
        success: res => {
          resolve(res.data);
        }
      });
    });

    let markdown = md.toJson(mdData, "markdown");

    this.setData({
      markdown
    });

    my.hideLoading({});
  }
});

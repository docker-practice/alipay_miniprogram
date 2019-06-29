Page({
  data: {
    key: "",
    markdown: "",
    light: true
  },
  async onLoad(query) {
    let key = query.key || undefined;

    this.setData({
      key
    });

    my.showLoading({});

    let markdown = await new Promise(resolve => {
      my.request({
        url:
          "https://gitee.com/docker_practice/docker_practice/raw/master/" + key,
        dataType: "text",
        success: res => {
          resolve(res.data);
        }
      });
    });

    this.setData({
      markdown
    });

    my.hideLoading({});
  },
  changeTheme() {
    this.setData({
      light: !this.data.light
    });
  },
  onTitleClick() {
    // 标题被点击
    this.changeTheme();
  }
});

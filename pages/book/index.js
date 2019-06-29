let yuebaoImg = "https://gitee.com/khs1994/alipay/raw/master/alipay_yuebao.png";
let busImg = "https://gitee.com/khs1994/alipay/raw/master/alipay_bus.png";

Page({
  data: {},
  async onLoad(query) {
    let type = query.type || undefined;

    let current = type === "bus" ? 1 : 0;

    new Promise((resolve, reject) => {
      my.confirm({
        title: "领取红包",
        content:
          "点击立即领取，[截屏] 保存图片，在支付宝 [扫一扫] 右上角选择图片打开",
        confirmButtonText: "立即领取",
        cancelButtonText: "残忍拒绝",
        success: res => {
          res.confirm === true ? resolve() : reject();
        }
      });
    }).then(
      () => {
        my.previewImage({
          current,
          urls: [yuebaoImg, busImg]
        });
      },
      () => {
        my.navigateBack({
          delta: 1
        });
      }
    );

    // my.setClipboard({
    //   text: '',
    //   success: (res)=>{
    //
    //   }
    // })
  }
});

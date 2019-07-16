// data.js
// 此文件完成分数显示与增加
// 1：创建分数构造函数
// 2：为分数构造函数添加方法draw
// 3：将data.js添加index.html文件中
// 4：在main.js创建分数对象并且调用相应方法


// 1：创建分数构造函数
var dataObj = function(){
    //1.1: 创建变量保存游戏分数
    this.score = 0;
    //1.2：创建变量保存分数是否双倍
    this.double = 1;
}
// 2：为分数构造函数添加方法draw
dataObj.prototype.draw = function(){
    //2.1：获取画布宽度和高度
    var h = canHeight;
    var w = canWidth;
    //2.2：保存画笔 1 状态
    ctx1.save();
    //2.3：设置画笔填充样式
    ctx1.fillStyle = "#fff";
    //2.4：设置字体 35px
    ctx1.font = "35px SimHei";
    //2.5：文本居中
    ctx1.textAlign = "center";
    //2.6：绘制分数
    ctx1.fillText("SCORE:"+this.score, w * 0.5, h * 0.5 - 80);
    //2.7：恢复画笔 1 状态
    ctx1.restore();
}
// 3：将data.js添加index.html文件中
// 4：在main.js创建分数对象并且调用相应方法
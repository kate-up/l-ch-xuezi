// mom.js 大鱼文件
// 1: 创建大鱼构造方法 momObj
// 2：为大鱼构造方法添加方法init
// 3：为大鱼构造方法添加方法 draw
// 4：将mom.js添加index.html
// 5：在main.js创建大鱼对象并且调用相关方法



// 1: 创建大鱼构造方法 momObj
var momObj = function(){
    //1.1：创建变量保存大鱼眼睛图片
    this.bigEye = [];
    //1.2：创建变量保存大鱼身体
    this.bigBody = [];
    //1.3：创建变量保存大鱼尾巴
    this.bigTail = [];
    //1.4：创建变量保存大鱼位置
    this.x;
    this.y;
    //1.5：创建变量保存大鱼游动角度
};
// 2：为大鱼构造方法添加方法init
momObj.prototype.init = function(){
    //2.1: 创建循环遍历大鱼眼睛数组
    //     创建图片对象并下载图片
    for(var i=0; i<2; i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "src/bigEye"+i+".png"
    }
    
    //2.2：创建循环对象遍历大鱼身体数组
    //     创建图片对象并下载图片
    for(var i=0; i<8; i++){
        this.bigBody[i] = new Image();
        this.bigBody[i].src = "src/bigSwim" + i + ".png";
    }
    
    //2.3：创建循环遍历大鱼尾巴数组
    //     创建图片对象并下载图片
    for(var i=0; i<8; i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "src/bigTail" + i + ".png";
    }
    console.log(this.bigBody);
    console.log(this.bigEye);
    console.log(this.bigTail);
}
// 3：为大鱼构造方法添加方法 draw
momObj.prototype.draw = function(){
    //console.log(333333333);
}
// 4：将mom.js添加index.html
// 5：在main.js创建大鱼对象并且调用相关方法

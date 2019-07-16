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
    // 让大鱼出现显示在画布中心位置
    this.x = canWidth/2;
    this.y = canHeight/2;
    // 让大鱼游动的角度 0 度
    this.angle = 0
}

// 3：为大鱼构造方法添加方法 draw
momObj.prototype.draw = function(){
    // 3.0: 将鼠标位置赋值给大鱼
    this.x = mx;
    this.y = my;
    // 3.1：保存画笔 1 状态
    ctx1.save();
    // 3.2：修改旋转轴心位置在大鱼 x  y 
    ctx1.translate(this.x, this.y);
    // 3.3：修改旋转角度大鱼角度
    ctx1.rotate(this.angle);
    // 3.4: 绘制大鱼身体（1）有序
    ctx1.drawImage(this.bigBody[0], 0 ,0 );
    // 3.5：绘制大鱼尾巴（2）
    ctx1.drawImage(this.bigTail[0], 0+37, 0+5 );
    // 3.6：绘制大鱼眼睛（3）
    ctx1.drawImage(this.bigEye[0], 0+19 ,0+21 );
    // 3.7：恢复画笔 1 状态
    ctx1.restore();
}
// 4：将mom.js添加index.html
// 5：在main.js创建大鱼对象并且调用相关方法

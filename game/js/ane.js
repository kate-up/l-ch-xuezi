//海葵 
//1: 创建海葵构造函数 aneObj
var aneObj = function(){
    console.log(1);
    this.x = [];     //保存海葵x坐标
    this.len = [];   //保存海葵高度
}
//2：为构造函数原型添加属性 num=50
aneObj.prototype.num = 50;
//3：为构造函数原型添加方法 init
aneObj.prototype.init = function(){
    console.log(2);
    for(var i=0; i<this.num; i++){
        this.x[i] = i * 16 + Math.random()*20;     //海葵的水平间距 随机 
        this.len[i] = 200 + Math.random()*50;     //海葵的高度 岁间 200px的高度差
    }
}
//1: 调错
//2：圆角 宽度 颜色
//4: 为构造函数原型prototype添加方法 draw
aneObj.prototype.draw = function(){
    //console.log(3);
    //4.1：保存状态
    ctx2.save();
    //设置边线样式 紫色
    ctx2.strokeStyle = "#3b154e";
    //设置边线宽度 20排序；
    ctx2.lineWidth = 20;
    //设置边线顶端样式  圆角
    ctx2.lineCap = "round";
    //设置透明度 0.5；
    ctx2.globalAlpha = 0.5;
    for(var i=0; i<this.num; i++){
        //开始一条新路径
        ctx2.beginPath();
        //将画笔移动到画布底端
        ctx2.moveTo(this.x[i],canHeight);
        //向上画一条直线
        ctx2.lineTo(this.x[i],canHeight - this.len[i]);
        //描边
        ctx2.stroke();
    }
    //4.7：恢复状态
    ctx2.restore();
}
//5: 将ane.js文件添加到index.html
//6: 在main.js创建对象并且调用相关方法
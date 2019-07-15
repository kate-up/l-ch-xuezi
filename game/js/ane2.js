// ane2.js
// 此文件：海葵第二个版本（动态曲线）
// 1：创建海葵构造函数aneObj
// 2：为构造函数添加属性num=50
// 3：为构造函数添加函数init
// 4：为构造函数添加函数draw
// 5: 将ane2.js添加index.html  并且将原来ane.js注释


// 1：创建海葵构造函数aneObj
var aneObj = function(){
    //1.1：创建一组起点坐标x  
    this.rootx = [];
    //     起点坐标y可以通过计算得出   
    //     控制点坐标可以通过计算得出
    //1.2：创建一组终点坐标 x，y
    this.headx = [];
    this.heady = [];
    //1.3：创建一组摆动幅度
    this.amp = [];
    //1.4: 创建非常小小数
    this.alpha = 0;
}
// 2：为构造函数添加属性num=50
aneObj.prototype.num = 50;
// 3：为构造函数添加函数init
aneObj.prototype.init = function(){
    //3.1: 创建循环，遍历所有海葵
    for(var i=0; i<this.num; i++){
        //3.2：初始化起点坐标x
        this.rootx[i] = i * 16 + Math.random() * 20;
        //3.3：初始化终点坐标x，y
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 250 + Math.random() * 50;
        //3.4：初始化摆动幅度 26； 
        this.amp[i] = 20 + Math.random() * 70;
    }
    //验证初始化的数据是对的
    // console.log(this.rootx);
    // console.log(this.headx);
    // console.log(this.heady);
    // console.log(this.amp);
}
// 4：为构造函数添加函数draw
aneObj.prototype.draw = function(){
    //4.1：保存画笔2状态
    ctx2.save();
    //4.3：设置路径线宽，圆角，透明度，颜色
    ctx2.strokeStyle = "#3b154e";    //紫色
    ctx2.lineWidth = 20;             //线宽
    ctx2.lineCap = "round";          //圆角
    ctx2.globalAlpha = 0.5;          //透明度
    //4.4：累加非常小数alpha
    this.alpha += 0.0008 * 20;
    //4.5：通过alpha返回 -1~1
    var p = Math.sin(this.alpha);
    //4.6 创建循环遍历每个海葵
    for(var i=0; i<this.num; i++){
        //4.7: 开始新路径  /  重新计算终点x
        ctx2.beginPath();
        this.headx[i] = this.rootx[i] + this.amp[i] * p;
        //4.8：将画笔2移动起点坐标
        //      moveTo (起点坐标x，起点坐标y)
        ctx2.moveTo(this.rootx[i], canHeight);
        //4.9：创建贝塞尔曲线
        //   quadraticCurveTo(控制点x，控制点y，终点x，终点y)
        ctx2.quadraticCurveTo(
            this.rootx[i], canHeight - 150, 
            this.headx[i], this.heady[i]
        );
        //4.10：描边
        ctx2.stroke();
    }
    //4.11：恢复画笔2状态
    ctx2.restore();
}
// 5: 将ane2.js添加index.html  并且将原来ane.js注释

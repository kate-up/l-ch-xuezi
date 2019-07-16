//第二步：

// 作用： 创建游戏所有全局变量
//        创建所有游戏中角色对象
//        绘制游戏角色

//1：声明所以全局变量
//2：创建函数game   第一个执行函数
//3：创建函数init    初始化

//1：声明所以全局变量
var can1 ;      //画布1
var can2 ;      //画布2
var ctx1 ;      //画笔1
var ctx2 ;      //画笔2
var canWidth ;    //画布宽度和高度
var canHeight ;
var bgPic ;       //背景图片

//1.1: 创建全局变量保存海葵
var ane;
//1.2:创建全局变量保存食物
var fruit;
//1.3：创建全局变量保存大鱼
var mom;
//1.4: 创建全局变量保存分数
var data;

//2：创建函数game   第一个执行函数
function game(){
    init();
    gameloop();
}

//入口函数
//3：创建函数init    初始化
function init(){
    //3.1: 初始化二个画布二支画笔
    can1 = document.getElementById("canvas1");
    can2 = document.getElementById("canvas2");
    ctx1 = can1.getContext("2d");
    ctx2 = can2.getContext("2d");
    //3.2: 初始化宽高
    canWidth = can1.width;
    canHeight = can1.height;
    console.log( canWidth+":"+canHeight );
    console.log(ctx1);
    console.log(ctx2);
    //3.3：初始化图片
    bgPic = new Image();
    bgPic.src = "src/background.jpg";
    //3.4：创建海葵对象并且调用初始化方法
    ane = new aneObj();
    ane.init();
    //3.5: 创建食物对象并且调用初始化方法
    fruit = new fruitObj();
    fruit.init();
    //3.6: 创建大鱼对象并且调用初始化方法
    mom = new momObj();
    mom.init();
    //3.7: 创建鼠标移动监听绑定画布 1 上
    can1.addEventListener("mousemove", canHandler);
    //3.8: 创建分数对象
    data = new dataObj();
}

//4：创建函数gameloop  循环绘制元素
function gameloop(){
    //4.1: 创建定时器调用gameloop
    requestAnimationFrame(gameloop);
    // 4.3: 清除画布 1 操作
    ctx1.clearRect(0, 0, canWidth, canHeight);
    //4.3.1: 完成检测碰撞
    momFruitsCollsion();
    //4.4: 调用监听食物数量函数
    fruitMonitor();
    //4.5：调用绘制背景函数
    drawBackground();
    //4.6: 调用绘制海葵函数
    ane.draw();
    //4.7: 调用绘制食物函数
    fruit.draw();
    //4.8: 调用绘制大鱼
    mom.draw();
    //4.9
    data.draw();
}

//5：页面加载调用game
document.body.onload = game;    //函数的绑定 没有括号   右括号就是立即调用

//6：将文件main.js添加到index.html
// 6.1: 创建二个全局变量保存鼠标位置
var mx = 0;
var my = 0;

//7：鼠标移动画布事件处理函数
function canHandler( e ){
    // 7.1: 获取鼠标 x 位置
    var x = e.offsetX;
    // 7.2：获取鼠标 y 位置
    var y = e.offsetY;
    //console.log(x+":"+y);
    // 7.3：将鼠标 x 与 y 位置赋值   全局变量 mx  my
    mx = x;
    my = y;
}

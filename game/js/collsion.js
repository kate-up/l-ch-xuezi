// collsion.js
// 此文件完成所有游戏中碰撞检测功能
// 1：大鱼碰撞食物
function momFruitsCollsion(){
    // 1.1：创建循环遍历所有事物
    for(var i=0; i<fruit.num; i++){
        // 1.2：判断当前食物是否显示状态
        if(fruit.alive[i]){
            // 1.3：计算大鱼与食物距离
            var len = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y );
            // 1.4：如果大鱼与食物距离小于900  实际意思大鱼与食物距离30像素
            if(len< 900){
                // 1.5: 食物消失 
                fruit.alive[i] = false;
            }
        }
    }
}
// 2: 大鱼碰撞小鱼
// 3：将collsion.js加载index.html
// 4：并且在main.js gameloop
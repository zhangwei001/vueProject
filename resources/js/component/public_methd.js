//常用数组方法
/**
 * 统计 字符串 数组重重复的字符串个数
 */

var arr =["apple","pear","orgian","apple","desk","pear","hello","origian"];

var getWordsCnt =function(stringArray){
         var retObj={};
    stringArray.forEach(function(item,index){
        retObj[item] = (retObj[item] +1) || 1;
    })

    return retObj;
}
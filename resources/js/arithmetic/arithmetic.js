   //二分法检索
    function binSearch(attr,data){
    	var top = attr.length-1;
    	var bottom = 0;
    	
    	while(bottom<=top){
    		var middle = Math.floor((top+bottom)/2);
    		console.log("middle:",middle);
    		if(attr[middle]<data){
    			bottom =middle+1;
    		}else if(attr[middle]>data){
    			top=middle-1;
    		}else{
    		  return middle
    		}
    	}
    	return -1
    }
    

    //查找数组中的偶数
    
    function even(num){
    	if(typeof num != "number"){return false};
    	return !(num & 1)
    }
    
    function filter(array,callback){
    	var outArray=[];
    	for(var j=0;j<array.length;j++){
    		if(callback(array[j])){
    			outArray.push(array[j]);
    		}
    	}
    	return outArray;
    }
    
    console.log("过滤得到的偶数数组：",filter([1,2,3,4,5,6,7,8,9],even));
    
    
    //快速排序
	var quickSort = function(arr) {
	　　if (arr.length <= 1) { return arr; }
	　　var pivotIndex = Math.floor(arr.length / 2);
	　　var pivot = arr.splice(pivotIndex, 1)[0];
	　　var left = [];
	　　var right = [];
	　　for (var i = 0; i < arr.length; i++){
	　　　　if (arr[i] < pivot) {
	　　　　　　left.push(arr[i]);
	　　　　} else {
	　　　　　　right.push(arr[i]);
	　　　　}
	　　}
	　　return quickSort(left).concat([pivot], quickSort(right));
	};
	
	   //插入排序
	function inserSort(array){
	  	array = array || [];
	  	for(var j=1;j<=array.length-1;j++){
	  		if(array[j]<array[j-1]){
	  			var temp = array[j];
	  			var i =j;
	  			//有序序列array[i-1]中，将比 temp大的向后移动一位
	  			while(i>0 && array[i-1]>temp){
	  				array[i]=array[i-1];
	  				i--;
	  			}
	  			//第i个位置填入temp 完成一次外循环
	  			array[i]=temp;
	  		}
	  		
	  	}
	  	return array;
	}

   //删除重复的数据
    function unique(data){
	    data = data || [];
	    var a = {};
	    for (var i=0; i<data.length; i++) {
	        var v = data[i];
	        if (typeof(a[v]) == 'undefined'){
	            a[v] = 1;
	        }
	    };
	    data.length=0; 
	    for (var i in a){
	        data[data.length] = i;
	    }
	    return data;
   };
   
   
    //**  设计模式                 **//
    Function.prototype.method = function(name,fun){
    	this.prototype[name]=fun;
    }
    binSearch.method("getPosition",function(){
    	
    })
    //**  设计模式                 **//
    
    　 function getBeerById(id,callback){
	    　　 asyncRequest('GET','beer.url?id='+ id,function(resp){
	       　　callback(resp.responseText)
	    　　});
 　 　}
　
　　 function getBeerByIdBridge(e){
	   　  getBeerById(this.id,function(beer){
	       　　	console.log('Requested Beer: '+ beer);
	   　 　});
　　}　

   addEvent(element,'click',getBeerByIdBridge);
   
   
   
   //*  设计模式 *//
   
var  Calculator={
	 　　add:function(x,y){
	 	
	    　　  return Number(x+y);
	   　　},
	   　　substract:function(x,y){
	    　　  return x-y;
	    　　},
	   　　multiply:function(x,y){
	     　　  return x*y;
	   　　},
	    　　divide:function(x,y){
	    　　  return x/y;
	   　　}
 　　}
　

   Calculator.calFun = function(command){
   	return Calculator[command.type](command.opt1 ,command.opt2);
   }
   
 Calculator.calFun({type:"add",opt1:1,opt2:2});

 
	
   
   
   
   
   
   
   
   
   
   
   
   
   
   



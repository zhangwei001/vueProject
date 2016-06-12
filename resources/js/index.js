$(function(){
	//店铺信息
	
	
	var shopDetailInfo = new Vue({
		 el: "#shopDetails",
		 data:{info:""},
		 ready: function() {
	      // GET request

	      this.$http({url: 'http://saas.mljiadev.cn/saas.shop/h5/shop/get/information?shop_id=2', method: 'GET'}).then(function (response) {
	          // success callback
	          var content = response.data.content
	          console.log(JSON.parse(atob(content)));
	           this.$set('info', JSON.parse(atob(content)))
	         
	      }, function (response) {
	          // error callback
	      });
	      
	
	    },
	   
	});
	

	   //摘自alloyTeam团队的曾探·著
	var imitate = (function() {
	    var imitate = {
	        clientList: [],
	        listen: function(key, fn) {
	            if (!this.clientList[key]) {
	                this.clientList[key] = [];
	            }
	            this.clientList[key].push(fn);
	        },
	        trigger: function() {
	            var key = [].shift.call(arguments);
	            var fns = this.clientList[key];
	
	            // 如果没有对应的绑定消息
	            if (!fns || fns.length === 0) {
	                return false;
	            }
	
	            for (var i = 0, fn; fn = fns[i++];) {
	                // arguments 是 trigger带上的参数
	                fn.apply(this, arguments);
	            }
	        }
	    }
	    return function() {
	       return Object.create(imitate);
	    }
	})();
	var eventModel = imitate();  //得到上面的对象
	eventModel.listen("jimmy",function(){console.log("jimmy");});  //jimmy
	eventModel.trigger("jimmy");


	var Book = function(title,time,type){
		if(this instanceof Book){
			this.title = title;
			this.time= time;
			this.type = type
		}else{
			return new  Book(title,time,type);
		}


	}
    var book =Book("javascript","2014","js");
    console.log("book",book);

	//
	 function inheritObject(o){
		 function f(){}
		 f.prototype = o;
		 return new f();
	 }

	var book ={
		name:"js book",
		alikeBook:["css book","html book"]
	}

	function creatBook(obj){
		var o = new inheritObject(obj);
		o.getName = function(){
			console.log(names);
		};
		return o;
	}
    
    var extend = function(target , sources){
		for(var property in sources){
			target[property] = sources[property]
		}
		return target;
	}

	//factory Method secrity
	var Demo = function(){
		if(! (this instanceof Demo) ){
			return new Demo();
		}
	}


	var caifen = function(str){
		if(this){
			str = this;
		}

		var retStr=[];
		for(var i = 0;i<str.length;i++){
			retStr[i]=str.charAt(i);
		}
		return retStr.join(" ").toString();

	}

	//console.log("caifen:",caifen("uiuoojijojo") );

	String.prototype.caifen = caifen;

	console.log("prototype:","jiojojojojio".caifen());






    
    
});


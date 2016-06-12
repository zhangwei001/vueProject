(function(){
	
	var globalUtils={

	 	_getHttpResponse:function(url,param){
        	var getData;
			jQuery.ajax({
				url:url,
				data:param,
				type:"get",
				dataType:"json",
				success:function(data){
					if(data && data.content){
						getData= atob()
					}
				},
				error: function(){

				}
			});
			return getData;
		},
	     _postHttpResponse:function(url,param){
				var postData;
				jQuery.ajax({
					url:url,
					data:param,
					dataType:"json",
					type:"post",
					success:function(data){
						if(data && data.content){
							
						}
					}
				});
				return postData;
	        }
        
	}
	
})();

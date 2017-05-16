(function (window) {
	'use strict';

   var todos = [
     { text:'看书', completed:true},
	 { text:'学习', completed:true},
	 { text:'玩游戏', completed:false},
   
   
   
   ]
	new Vue({
	   el:'#app',
	   data:{
		 title:'事件时钟', 
		 todos:todos ,
		 text:'',
		   },
		  methods:{
			f: function(){
	
				window.alert(this.text)
				} , 
				
		    add: function(){
				if(this.text.trim().lenth === 0){
				retun
			    }
			     this.todos.push({
				   text: this.text,
				   completed:false,
				
				   })
			        this.text='' 
		
				   },
			   destroy:function(text){
				   var index = this.todos.indexOf(text);
				    this.todos.splice(index, 1);
				   
				   
				 }
		  
			
		},
		
		 
		 
		  
		  
		
		
	})

})(window);

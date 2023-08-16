var peter = {
    name : 'Peter Parker',
    sayName : function(){    
          console.log(this.name);
      }
  }
  
  var bruce = {
    name : 'Bruce Wayne',
  }
  peter.sayName.call(bruce);
  
  // peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.
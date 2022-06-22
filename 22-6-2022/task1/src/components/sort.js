const arr = [
    { id:'2',coffee: "Americano", size: "Medium" },
    { id:'3',coffee: "Espresso", size: "Single" },
    { id:'6',coffee: "blackcofee", size: "big" },
    { id:'1',coffee: "frappuccino ", size: "big" },
  ];


  function Sort(){

   return (


      
<div>
     <h1>Sort</h1>
      
     {arr.sort((a,b)=>{
        
        if(a.id > b.id) return 1;
        else if(a.id < b.id) return -1;
        else return 0;

    
    }).map((item, i) => 
    <div key={i}> {item.id}</div>
)

     
 
 } </div>  )}
   export default Sort;
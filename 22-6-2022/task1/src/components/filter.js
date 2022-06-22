 const arr = [
        { id:'2',coffee: "Americano", size: "Medium" },
        { id:'3',coffee: "Espresso", size: "Single" },
        { id:'6',coffee: "blackcoffee", size: "big" },
        { id:'1',coffee: "frappuccino ", size: "big" },
        { id:'12',coffee: "Milkshake ", size: "Single" },
        { id:'8',coffee: "frappuccino ", size: "big" },
        { id:'9',coffee: "frappuccino ", size: "Medium" },
      ];

    
  function Filter(){

    return(

  
<div>
     <h1>Filter</h1>

  {

  arr.filter(item => item.id < 5 && item.size === "big" ).map(item => (
    <li>
      {item.coffee}
    </li>
  ))
  
  
  }
</div>
        
  )}
  export default Filter;
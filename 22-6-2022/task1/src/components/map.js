const arr = [
    { id:'2',coffee: "Americano", size: "Medium" },
    { id:'3',coffee: "Espresso", size: "Single" },
    { id:'6',coffee: "blackcofee", size: "big" },
    { id:'1',coffee: "frappuccino ", size: "big" },
    { id:'12',coffee: "Milkshake ", size: "Single" },
    { id:'8',coffee: "frappuccino ", size: "big" },
    { id:'9',coffee: "frappuccino ", size: "Medium" },
  ];


  function Map(){
  
    return (

      <div> <h1> Map </h1>{


        arr.map((item) => (
            <p>Coffee type {item.coffee} in a {item.size} size.</p>
          ))
       
        }</div> );
    }

  
  export default Map;
function Sorting(){
    const array1 = [1,5,3,8,2];
    const array2 = array1.sort();
    return(
        <div>
            {array2.map((value)=>
            
                <li>{value+1}</li>
            
            
            )}
              
        </div>
    )
    }
    export default Sorting;
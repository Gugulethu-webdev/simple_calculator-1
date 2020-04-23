function add(...a){
    var total=0;
    for(var i=0;i<a.length;i++)
    total +=a[i]
    return total;
}
    
        
function multiply(...a){
    var total=1;
    for(var i=0;i<a.length;i++)
    total *=a[i]
    return total;
}
    module.exports = { add, multiply }          
                
            
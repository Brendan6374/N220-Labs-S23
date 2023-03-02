const addRemove=(id)=>{

    const clickedItem=document.getElementById("clickedItem");
    
    for(let i=1;i<=6;i++){
    
    
    
    const element=document.getElementById(i)
    
    if(i==id){
    
    element.classList.add('click')
    
    clickedItem.textContent=element.textContent
    
    }
    
    else{
    
    element.classList.remove('click')
    
    }
    
    }
    
    }
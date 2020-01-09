const fenleiReducer = (prevState=[],action)=>{
    //接受老状态 深复制 返回新状态
    let {type,payload} = action
    switch(type){
        case "GET_FenleiData":
            return [...prevState,...payload]
        default:
            return prevState 
    }



    return prevState
}


export default fenleiReducer
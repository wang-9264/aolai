const liebiaoReducer = (prevState=[],action)=>{
    let {type,payload} = action
    switch(type){
        case "SEND_ListData":
            return {...payload}
    }

    return prevState
}

export default liebiaoReducer
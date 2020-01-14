export let sendList = (data)=>{
    // console.log(data,8888)
    return{
        type:"SEND_ListData",
        payload:data
    }
}
import Axios from 'axios'
export let getList = ()=>{
    return Axios.post('https://cms.aolaigo.com/Handler/app_ActivityHandler.ashx','{"os":"wap","opt":8,"cmd":32}').then(res=>{
        // console.log(res.data.data)
        return {
            type:"GET_FenleiData",
            payload:res.data.data
        }
    })
}
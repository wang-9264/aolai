function Ajax(opts){
    return new AjaxCon(opts);
}

class AjaxCon {
    constructor(opts){
        this.opts = Object.assign({   //默认参数
            type: 'GET',
            data: ''
        },opts);  // 配置参数
        this.formatData();
        this.request();
    }
    formatData(){
        if(typeof this.opts.data == 'object'){
            let tmp = [];
            for(var attr in this.opts.data){
                tmp.push(attr + '=' + this.opts.data[attr]);
            }
            this.opts.data = tmp.join('&');
        }
    }
    request(){
        let xhr = new XMLHttpRequest();
        xhr.onload = ()=>{
            if (xhr.status == 200) {
                this.opts.success(xhr.responseText);
            }
            else{
                this.opts.error(xhr.statusText);
            }
        };
        if (this.opts.type == 'GET') {
            xhr.open('GET', `${this.opts.url}?${this.opts.data}`, true);
            xhr.send(null);
        }
        else if (this.opts.type == 'POST') {
            xhr.open('POST', `${this.opts.url}`, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(this.opts.data);
        }
    }
}

export default Ajax
function preparapedido(){
    return new Promise((resolve,reject)=>{
        tempao = false
        setTimeout(() => {
            if (tempao){
            resolve("hanburge pronto")}
            else{
                reject(new Error("sarsixa pronto"));
            }
        },2000);
    })
}

preparapedido().then((resultado)=>{
console.log(resultado)

}).catch((erro)=> {
    console.error(erro.message)
})
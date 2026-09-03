function buscarproduto(id){
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (id === 1){
                resolve({id: 1, nome: "Notebook", preco: 3500})
            }else{
                reject(new Error("produto nao encontrado"))
            }
        },1500);
    });
};

async function executa() {
 try {
    const produto = await buscarproduto(2);
    console.log("produto encontrado");
    console.log(produto);
 }   
 catch(error){
    console.log("ocorreu um erro")
    console.log(error.message)
 }
}
executa()
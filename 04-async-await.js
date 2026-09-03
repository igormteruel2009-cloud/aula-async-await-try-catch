function preparapedido(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("pizza pronta")
        },2000);
    })
}

async function fazerpedido(){
    console.log("pedido realizado");

    const pedido = await preparapedido();

    console.log(pedido);
    console.log("pedido entregue");
}
fazerpedido();
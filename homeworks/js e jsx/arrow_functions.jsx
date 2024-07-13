/*
Exercício
trazer as funções do javascript para o contexto do jsx


let saudacao = (nome) => {
    return `ola, ${nome}`
}

saudacao = (nome) => `ola, ${nome}`

let quadrado = (n) => {
    return n*n
}

quadrado = (n) => n*n

const numeros = [1,2,3]
const somarTres = numeros.map((numero) => numero + 3)
*/


let saudacao = (nome) => <p>{`ola ${nome}`}</p>

let quadrado = (n) => {
    let resultado = n * n
    return (<div>
        <p>{`o quadrado do seu numero ${n} é:`}</p>
        <p>{resultado}</p>
    </div>)
}

const numeros = [1,2,3]
const somarTres = numeros.map((numero) => numero + 3)

const renderizar = () => {
    <div>  
        {somarTres.map((numero) => {return <p>{numero}</p>})}
    </div>
}
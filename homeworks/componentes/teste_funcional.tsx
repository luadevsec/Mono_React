import React from 'react';

// o intuito desse codigo n é usar, é quebrar o react e a logica dele por tras da sintaxe pra entender
// de fato como e pq as coisas funcionam
// TO-NOT-DO: NÃO USAR ESSE CÓDIGO OU SINTAXE EM PRODUÇÃO

const TesteFuncional = ({name, idade}: {name: string, idade: number}) => {
    return (
        <div>
            <h1>Teste Funcional</h1>
            <p>Nome: {name}</p>
            <p>Idade: {idade}</p>
        </div>
    );
};

const LuaCard = TesteFuncional({name :'Lua', idade: 22});
const JessCard = TesteFuncional({name :'Jess', idade: 23});
const GabiCard = TesteFuncional({name :'Gabi', idade: 24});

const deamon = ({name, idade} : {name : string, idade : number}) => {
  return (
    <div>
      {LuaCard}
      {JessCard}
      {GabiCard}
      {TesteFuncional({name: 'Lucas', idade: 28})}
        <TesteFuncional name = 'john' idade = {34} />
        <TesteFuncional name = {name} idade = {idade} />
    </div>
  );
}

export default deamon;
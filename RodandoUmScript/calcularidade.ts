interface ICalcularIdade{
    nome: string,
    anoNascimento: number,
    profissao?: string
}

function calcularIdade({nome,anoNascimento,profissao}: ICalcularIdade): string{
    const idade: number = 2022 - anoNascimento 

    if(profissao){
        return `Seu nome é ${nome}. Voce tem ${idade} anos e sua profissao é ${profissao}`
    }

    return `Seu nome é ${nome}. Voce tem ${idade} anos` 
}

const nome = 'Gustavo'
const anoNascimento = 1999
const profissao = 'Desenvolvedor'

console.log(calcularIdade({nome,anoNascimento}))
console.log(calcularIdade({nome,anoNascimento,profissao}))

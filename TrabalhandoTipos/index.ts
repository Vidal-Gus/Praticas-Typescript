interface ICalcularIdade {
    nome: string,
    anoNascimento: number,
    profissao?: string
}

const nome = 'Gustavo'
const anoNascimento = 1999
const profissao = 'Dev';


function calcularIdade({nome, anoNascimento, profissao}: ICalcularIdade): string{
    const idade: number = 2022 - anoNascimento
    if(profissao){
    return `Seu nome é ${nome}. Voce tem ${idade} anos e profissao é ${profissao}`
    }

    return `Seu nome é ${nome}. Você tem ${idade}!`
}

console.log(calcularIdade({nome: 'Gustavo', anoNascimento: 1999}))
console.log(calcularIdade({nome,anoNascimento, profissao}))


function qualquer(): number{
    return 2
}


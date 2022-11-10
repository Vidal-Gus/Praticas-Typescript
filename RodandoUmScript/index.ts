/* 
Vamos criar o DioBank
Criar uma conta
Depositar na conta
Sacar da conta
Encerrar a conta
*/
interface IConta{
 nomeTitular: string
 saldo?: number
}


class Conta{
    private nomeTitular: string
    private saldo: number
    private ativa: boolean = true

    constructor(
        {nomeTitular, saldo = 0}: IConta
    ){
        this.nomeTitular = nomeTitular
        this.saldo = saldo
        console.log(`Bem-Vindo ${this.nomeTitular} ao DIO Bank`)
    }

    get _saldo(){
        if(!this.ativa){
            return `Essa conta está desativada! Ative para efetuar operação!`
        }
        return this.saldo
    }

    depositar(valor: number){
        if(!this.ativa){
            return `Essa conta está desativada! Ative para efetuar operação!`
        }
        this.saldo += valor
        this._saldo
        console.log('Deposito efeito com sucerro!')
    }

    sacar(valor: number){
        if(!this.ativa){
            return `Essa conta está desativada! Ative para efetuar operação!`
        }
            if(this.saldo >= valor)
            this.saldo -= valor
            else{
                return `Algo deu errado! Verifique seu saldo.`
            }

        return 'Saque efetuado com sucesso!!'
    }
    
    cancelarConta = () => {
       if(this.saldo === 0){ 
        this.ativa = false
        return `Conta de ${this.nomeTitular} encerrada`
    }
    return `Impossivel desativar! Conta com pendência!`
    }

    transferir(valor: number, tConta: Conta){
        if(!this.ativa){
            return `Essa conta está desativada! Ative para efetuar operação!`
        }
        if(tConta.ativa === false){
            return `A conta para a qual você deseja transferir está desativada!`
        }

        if(valor > this.saldo){
            return `Valor de transferência excede o da conta!`
        } else{
            this.saldo -= valor
            tConta.saldo += valor
            return `Transferencia para ${tConta.nomeTitular} feita com sucesso!`
        }

    }
}

const contaA: Conta = new Conta({nomeTitular: 'Gustavo'})
const contaB: Conta = new Conta({nomeTitular: 'Pedro', saldo: 10})

contaA.depositar(200)
console.log(contaA.transferir(100,contaB))

console.log(contaA)
console.log(contaB)

console.log(contaB.cancelarConta());


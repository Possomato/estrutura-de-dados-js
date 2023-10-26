/* 
pilha: estrutura de dados lineares, segue o princípio LiFo (Last in First Out), o último item a entretar será o primeiro a sair

final da pilha: cauda
início da pilha: base

principais operações:
  - push: inserir novo elemento
  - pop: remover elemento
  - top/peed: retorna elemento
*/

class Pilha{
  constructor(){
    this.itens = []
  }

  push(item){
    this.itens.push(item)
  }

  pop(){
    this.itens.pop()
  }

  top(){
    return this.itens[this.itens.length -1]
  }
}

const pilha = new Pilha()

pilha.push(1)
pilha.push('dois')
pilha.push(3)
pilha.push('quatro')

console.table(pilha.itens)

pilha.pop()

console.table(pilha.itens)

console.log(pilha.top())
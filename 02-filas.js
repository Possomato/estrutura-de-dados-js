/* 
fila: estrutura de dados lineares, utilizada quando é necessário evitar o uso indevido dos elementos, segue o princípio FiFo (First in First Out), o primeiro item a entretar será o primeiro a sair

final da pilha: base
início da pilha: base

principais operações:
  - enqueue: insere um novo elemento
  - dequeue: remove o primeiro elemento
  - front: retorna o primeiro elemenia
  - rear: retorna o último elemento
  - isEmpty: verifica se a fila está vazia
  - isFull: verifica se a fila está cheia
*/

class Fila{
  constructor(){
    this.itens = []
  }

  enqueue(item){
    this.itens.push(item)
  }

  dequeue(){
    if(this.isFull()){
      this.itens.shift()
    } else{
      console.log('lista vazia')
    }
  }

  front(){
    return this.itens[0]
  }

  rear(){
    const lastIndex = this.itens.length -1
    return this.itens[lastIndex]
  }

  isFull(){
    if(this.itens[0]){
      return true
    } else{
      return false
    }
  }

  isEmpty(){
    if(this.itens[0]){
      return false
    } else{
      return true
    }
  }
}

const fila = new Fila()

fila.enqueue('primeiro')
fila.enqueue('segundo')
fila.enqueue('terceiro')

console.table(fila)
console.log(fila.isFull())

fila.dequeue()

console.log(fila.front())
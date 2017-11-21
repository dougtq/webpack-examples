import Pessoa from './Pessoa'
import './app.css'
let common = require('./common')

console.log('Webpack funcionando')
common.info('Texto da função com commonjs!!')

let Person = new Pessoa('Douglas Alves')
Person.printNome()

let obj = {
  nome: 'Caneta Bic',
  preco: 3.5,
  desconto: 0.1
}

let clone = objeto => {
  return { ...objeto }
}

let produto = clone(obj)
produto.nome = 'Avião'

console.log(obj, produto)

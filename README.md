# 📱 Calculadora Flex

Uma aplicação mobile desenvolvida com **React Native** utilizando **Expo**, que ajuda o usuário a decidir entre abastecer com **etanol** ou **gasolina**, com base nos preços informados.

## Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Native Paper](https://callstack.github.io/react-native-paper/)

## Funcionalidades

- Inserção do preço do **etanol** e da **gasolina**
- Cálculo automático da melhor opção de combustível com base na **regra dos 70%**
- Exibição do resultado de forma clara e direta ao usuário

## Estrutura do Projeto

- `App.js`: Componente principal que gerencia o estado e lógica do app.
- `components/`
  - `Container.js`: Estrutura base de layout.
  - `Header.js`: Cabeçalho personalizado usando React Native Paper.
  - `Body.js`: Componente que envolve o conteúdo principal.
  - `Input.js`: Campos de entrada personalizados.

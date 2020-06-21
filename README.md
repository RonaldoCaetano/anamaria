# AnaMaria

O nome é inspirado na gíria utilizada por muitos caminhoneiros, que segnifica AM (Amplitude modulada)
*Desenvolvido para o HackaThon CCR

## Como utilizar

Para realizar os testes no app, primeiramente devemos dar um `npm install` dentro das pastas: **mobile-device** e **backend**.

Após isso, devemos, dentro da pasta backend, rodar o comando `npm run dev` para estar o servidor local que contem as apis

Com o backend rodando, vamos na pasta `device-mobile` e rodamos o comando `npm start` para iniciar a compilação dos arquivos mobile

Um último passo para que todas as apis funcionem corretamente, você precisa trocar o **ip** que estã inserido dentro do arquivo `api.ts`, no caso apenas substituir pelo seu.

*Obs: Mantenha a porta 3333, dentro do arquivo `api.ts`, pois o backend está rodando nessa porta.*

## Workspace setup

- Node: 13.8.0
- npm: 6.13.6

## Observações

As funcionalidades do mapa não irão funcionaar, por que precisamos remover a api do google por segurança. Caso queira testar, é necessário a inserção da mesma onde temos a frase **"YOUR_API_KEY"**

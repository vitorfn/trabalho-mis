# ClimaBR

Uma aplicação simples para consulta à previsão do tempo de cidades brasileiras.

# Como usar?

Clone este repositório.

Entre na pasta do projeto e execute o comando abaixo para instalar as dependências:

`npm install`

Acesse o site https://openweathermap.org/api, faça seu cadastro e crie uma chave de API.

Crie um arquivo chamado `api-config.ts` no diretório `src/environment` do projeto, contendo o conteúdo abaixo (não se esqueça de alterar a propriedade `api_key` para a sua chave de API):

```ts
export const OPEN_WEATHER_CONFIG = {
  api_key: '<your-api-key>',
  api_url: 'https://api.openweathermap.org/data/2.5/onecall',
  api_icon_url: 'http://openweathermap.org/img/wn',
};
```

Para abrir a aplicação, execute o comando:

`ionic serve`

Após isso, entre em: http://localhost:8100/home

![image](https://user-images.githubusercontent.com/42324938/143871843-2d284c3d-730e-4d97-a647-5cf545498f2b.png)

Para procurar uma cidade, digite o nome no campo de busca e clique no nome da cidade

![image](https://user-images.githubusercontent.com/42324938/143871959-af177e06-e083-4571-8a7e-6f411f7f7133.png)

Ao abrir a home novamente, o histórico de cidades aparecerá

![image](https://user-images.githubusercontent.com/42324938/143872156-52de02ad-9a45-4df5-b5e7-1b4153b705fb.png)

Enjoy!

# Sobre
- Código base desenvolvido pelo Prof. Paulo Afonso
- Funcionalidade de histórico inserida por Vítor Ferreira, para a disciplina de Modelagem e Implementação de Software

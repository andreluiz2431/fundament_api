# Fundamentus API

API para buscar indicadores fundamentalistas de ações e FIIs diretamente do site Fundamentus.

## Endpoints

### `GET /all/:ticker`
Retorna todos os dados principais do papel informado (ação ou FII).

**Exemplo de resposta:**
```json
{
  "ticker": "MXRF11",
  "dy": "12,0%",
  "pvp": "0,99",
  "nome": "MAXI RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII - RESPONSABILIDADE LIMITADA",
  "cotacao": "9,36"
}
```

### `GET /dy/:ticker`
Retorna apenas o Dividend Yield do papel.

**Exemplo de resposta:**
```json
{ "dy": "12,0%" }
```

### `GET /pvp/:ticker`
Retorna apenas o P/VP do papel.

**Exemplo de resposta:**
```json
{ "pvp": "0,99" }
```

### `GET /nome/:ticker`
Retorna apenas o nome do papel.

**Exemplo de resposta:**
```json
{ "nome": "MAXI RENDA FUNDO DE INVESTIMENTO IMOBILIÁRIO - FII - RESPONSABILIDADE LIMITADA" }
```

### `GET /cotacao/:ticker`
Retorna apenas a cotação do papel.

**Exemplo de resposta:**
```json
{ "cotacao": "9,36" }
```

### `GET /help`
Retorna uma descrição de todas as rotas disponíveis e um exemplo de uso.

**Exemplo de resposta:**
```json
{
  "rotas": {
    "/all/:ticker": "Retorna todos os dados principais do papel",
    "/dy/:ticker": "Retorna apenas o Dividend Yield",
    "/pvp/:ticker": "Retorna apenas o P/VP",
    "/nome/:ticker": "Retorna apenas o nome do papel",
    "/cotacao/:ticker": "Retorna apenas a cotação do papel",
    "/help": "Exibe esta mensagem de ajuda"
  },
  "exemplo": "/all/MXRF11"
}
```

## Como rodar localmente

1. Instale as dependências:
   ```bash
   npm install express axios cheerio iconv-lite
   ```
2. Inicie o servidor:
   ```bash
   node backend/server.js
   ```
3. Acesse: [http://localhost:3000/all/MXRF11](http://localhost:3000/all/MXRF11)

## Deploy no Railway

- Certifique-se de que o arquivo `Procfile` existe com o conteúdo:
  ```
  web: node backend/server.js
  ```
- O Railway usará a variável de ambiente `PORT` automaticamente.

## Observações
- O parser foi ajustado usando exemplos reais de HTML do Fundamentus para FIIs e ações.
- O endpoint pode ser expandido para retornar mais indicadores facilmente. 
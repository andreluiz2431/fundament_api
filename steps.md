# Checklist de Melhorias e Funcionalidades – Fundamentus API

## 1. Melhorias Gerais
- [ ] Adicionar testes automatizados para os endpoints
- [ ] Implementar tratamento de erros mais detalhado (ex: ticker inexistente, problemas de conexão)
- [ ] Adicionar logs para requisições e respostas
- [ ] Melhorar a documentação dos endpoints (exemplos de erro, parâmetros opcionais)
- [ ] Adicionar suporte a CORS configurável
- [ ] Refatorar o parser para facilitar manutenção e expansão
- [ ] Adicionar variáveis de ambiente para configurações sensíveis

## 2. Segurança
- [ ] Implementar autenticação JWT para proteger endpoints sensíveis
- [ ] Implementar autenticação via API Key para acesso à API
- [ ] Adicionar controle de permissões para diferentes tipos de usuários
- [ ] Implementar limitação de requisições (rate limiting)
- [ ] Validar e sanitizar entradas do usuário para evitar ataques de injeção
- [ ] Adicionar HTTPS no deploy (quando aplicável)

## 3. Organização do Projeto
- [ ] Separar arquivos de rotas, controladores e serviços
- [ ] Criar uma pasta `middlewares` para middlewares de autenticação, logs, etc.
- [ ] Criar uma pasta `utils` para funções utilitárias
- [ ] Adotar uma estrutura `config/` para arquivos de configuração
- [ ] Centralizar variáveis de ambiente em um arquivo `.env`
- [ ] Documentar a estrutura de pastas no README
- [ ] Adicionar scripts npm para facilitar tarefas comuns (start, test, lint)

## 4. Novos Endpoints/Funções
- [ ] Endpoint para retornar múltiplos tickers de uma vez
- [ ] Endpoint para buscar histórico de cotações
- [ ] Endpoint para indicadores adicionais (ex: P/L, ROE, liquidez)
- [ ] Endpoint para listar todos os FIIs ou ações disponíveis
- [ ] Endpoint para buscar dados por setor/segmento

## 5. Performance e Infraestrutura
- [ ] Implementar cache para evitar múltiplas requisições ao Fundamentus para o mesmo ticker
- [ ] Adicionar monitoramento de uptime e performance
- [ ] Preparar Dockerfile para facilitar deploy (No memento estou usando o Railway)
- [ ] Adicionar integração contínua (CI) para rodar testes e lint

## 6. Sugestões Futuras
- [ ] Suporte a outros sites de dados fundamentalistas além do Fundamentus

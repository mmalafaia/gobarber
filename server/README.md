# Recuperação de senha

**RF - Requisitos funcionais**

- O usuário deve poder recuperar sua senha informando o seu email;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF - Requisitos Não Funcionais**
<!-- Que bibilotaca usar, coisas não ligadas ao negócio -->
- Utilizar Mailtrap para testar envio de emails em abiente de dev;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN - Regras de Negócio**

- O link enviado por email parqa resertar senha, deve expirar em 2h;
- O usuári precisa confirmar a senha quando resetar;



# Atualização do Perfil

**RF - Requisitos funcionais**

- O usuário deve pode atualizar seu nome, email e senha;

**RNF - Requisitos Não Funcionais**

**RN - Regras de Negócio**

- O usuário não pode alterar seu email para um email já utilizado por outro usuário;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador

**RF - Requisitos funcionais**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF - Requisitos Não Funcionais**

- Os agendamentos do prestador no dia devem ser armazenadas em cache
- As notificações do prestador devem ser armazenadas em MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN - Regras de Negócio**

- A nofificação deve ter um status de lida e não lida para que o prestador possa controlar;

# Agendamento de Serviços

**RF - Requisitos funcionais**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horário disponíveis em um dia específico de um prestador;
- O usuário deve poder realzar um novo agendamento com um prestador

**RNF - Requisitos Não Funcionais**

- A listagem de prestadores deve ser armazenada em cache;


**RN - Regras de Negócio**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 18h)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços consigo mesmo mesmo;

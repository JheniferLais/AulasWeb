"use strict";
/*
Todo backend precisa de um servidor para disponibilizar seus serviços.
Todo backend é um conjunto de serviços funcionais que rodam dentro de um servidor web.

Protocolo é um conjunto de regras e ferramentas.
Para interet funcionar existem 2 protocolos crucias,
Sao eles:
TCP/IP (transporta os dados de um ponto a outro) e,
HTTP (que consegue facilitar a comunicacao entre computadores com o objetivo de transportar dados na web).

Imagine dois computadores ligado diretamente por um unico cabo de rede azul e o computador A tenha o endereço IP
dado por 192.168.0.1 e o computador B seja 192.168.0.2

Imagine ainda que voce transforme a maquina A(poderia ser a B) em um servidor http. O que isso significa?
Significa:
1. Que a maquina A vai propagar na rede que ela tem uma porta de conexão aberta.
Geralmente para o backend é a porta 3000
2. As outra maquinas da rede nesse caso a B poderao REQUISITAR que o servidor(maquina A)
faça coisas. essas coisas chamamos de serviços, que por sua vez sao ROTAS do backend.
3. Que a comunicacao entre o cliente(neste caso B) e o servidor(Neste caso A) usa um principio muito simples B. requisitos para A, fazer algo
A faz algo e devolve a resposta para B.
4.Quem  faz é o servidor(A), quem pede é o cliente(B) e quem recebe a resposta(se houver) é o cliente(B)
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('OI SERVIDOR DA JHEJHE!!!!!!!!!!!!!, SAUDADES DA MINHA MUIE!!!');
});
server.listen(3000, () => {
    console.log("servidor rodando na porta 3000.");
});

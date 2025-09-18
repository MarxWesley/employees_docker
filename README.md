# 🚀 Projeto Fullstack com Docker Compose

Este projeto é uma aplicação **fullstack** com:

- ✅ Frontend em **React**
- ✅ Backend em **NestJS**
- ✅ Gerenciado com **Docker Compose**

---

## 📁 Estrutura de Pastas

```
├── api/ # Backend NestJS (API)
├── front/ # Frontend React
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## ▶️ Subir os containers (dev)

```bash
docker-compose up --build
```
## ⛔ Derrubar os containers
```
docker-compose down
```

## ⛔ Parar e remover containers
```
docker-compose down -v
```

## 🌐 Acesso aos serviços

| Serviço  | URL                                            | Porta |
| -------- | ---------------------------------------------- | ----- |
| Frontend | [http://localhost:3000](http://localhost:3000) | 3000  |
| Backend  | [http://localhost:3001](http://localhost:3001) | 3001  |

## 🛠 Tecnologias Utilizadas

- React (Frontend)
- NestJS (Backend)
- Docker / Docker Compose

## 📌 Dicas

Modificações nos arquivos são refletidas automaticamente se você estiver usando volumes.

Se der erro de porta ocupada, altere as portas no docker-compose.yml.
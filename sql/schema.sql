-- Criação do banco de dados e tabelas.

DROP DATABASE IF EXISTS sistema_bancario;

CREATE DATABASE sistema_bancario;

CREATE TABLE usuarios(
    id serial primary key,
    nome text not null,
    data_nascimento text not null,
    email text unique not null,
    cpf text unique not null,
    telefone text not null,
    senha text not null
);

CREATE TABLE contas(
    id serial primary key,
    saldo numeric default 0,
    usuario_id integer references usuarios(id)
);

CREATE TABLE depositos(
    id serial primary key,
    numero_conta integer references usuarios(id),
    valor numeric not null,
    data_deposito text
);

CREATE TABLE saques(
    id serial primary key,
    numero_conta integer references usuarios(id),
    valor numeric not null,
    data_deposito text
);

CREATE TABLE transferencias(
    id serial primary key,
    numero_conta_origem integer references usuarios(id),
    numero_conta_destino integer references usuarios(id),
    valor numeric not null,
    data_deposito text
);
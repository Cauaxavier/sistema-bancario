-- Criação do banco de dados e tabelas.

DROP DATABASE IF EXISTS sistema_bancario.

CREATE DATABASE sistema_bancario;

CREATE TABLE contas(
    id serial primary key,
    saldo numeric default 0,
    usuario_id integer references usuarios(id)
);

CREATE TABLE usuarios(
    id serial primary key,
    data_nascimento text not null,
    email text unique not null,
    telefone text not null,
    senha text not null
);

CREATE TABLE depositos(
    id serial primary key,
    numero_conta integer references usuario(id),
    valor numeric not null,
    data_deposito text
);

CREATE TABLE saques(
    id serial primary key,
    numero_conta integer references usuario(id),
    valor numeric not null,
    senha text not null
);

CREATE TABLE transferencias(
    id serial primary key,
    numero_conta_origem integer references usuario(id),
    numero_conta_destino integer references usuario(id),
    valor numeric not null,
    senha text not null
);

CREATE TABLE Clientes (
id INT PRIMARY KEY NOT NULL,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100),
cpf VARCHAR(100) NOT NULL
)

SELECT * FROM Clientes; 
SELECT * FROM Colaboradores; 
SELECT * FROM Gerenciamento; 

DROP TABLE Clientes;

CREATE TABLE Colaboradores (
id INT PRIMARY KEY NOT NULL,
nome VARCHAR(100) NOT NULL,
email VARCHAR(100),
cpf VARCHAR(100) NOT NULL
)

CREATE TABLE Gerenciamento(
id INT PRIMARY KEY NOT NULL, 
prazo DATE, 
nome_projeto VARCHAR(100) NOT NULL,
id_clientes INT,
id_colaboradores INT,
FOREIGN KEY (id_clientes) REFERENCES clientes(id),
FOREIGN KEY (id_colaboradores) REFERENCES colaboradores(id) 
)
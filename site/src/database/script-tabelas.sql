create database Corinthians;
use Corinthians;
describe usuario;
describe elenco;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
) auto_increment=100;


create table elenco(
id int primary key auto_increment,
nome varchar(70),
dataNascimento date,
posicao varchar(40))
auto_increment=100;

describe idolos;

create table idolos(
id int primary key auto_increment,
nome varchar(70),
apelido varchar(45),
dataNascimento date,
posicao varchar(45));

INSERT INTO idolos VALUES
(NULL, 'Eduardo Roberto Stinghen', 'Ado', '1946-07-04', 'GOLEIRO'),
(NULL, 'Alessandro Mori Nunes', 'Guerreiro', '1979-01-10', 'LATERAL-DIREITO'),
(NULL, 'Édson Ataliba Cândido', 'Tatá', '1956-07-09', 'ATACANTE'),
(NULL, 'Oswaldo Silva', 'Cabecinha de Ouro', '1926-01-14', 'ATACANTE'),
(NULL, 'João Roberto Basílio', 'Pé de Anjo', '1949-02-04', 'MEIA'),
(NULL, 'Antonio José da Silva Filho', 'Biro-Biro', '1959-05-18', 'VOLANTE'),
(NULL, 'Luiz Morais', 'Cabeção', '1930-08-23', 'GOLEIRO'),
(NULL, 'Rodolpho Carbone', 'Carbone', '1927-11-01', 'MEIA'),
(NULL, 'Walter Casagrande Junior', 'Casão', '1963-04-15', 'ATACANTE'),
(NULL, 'Anderson Sebastião Cardoso', 'Chicão', '1981-06-03', 'ZAGUEIRO'),
(NULL, 'Claudio Christovan de Pinho', 'Gerente', '1922-07-17', 'ATACANTE'),
(NULL, 'Danilo Gabriel de Andrade', 'Zidanilo', '1979-06-11', 'MEIA'),
(NULL, 'Alexandre De Maria', 'De Maria', '1904-06-19', 'ATACANTE'),
(NULL, 'Armando Del Debbio', 'Del Debbio', '1904-11-02', 'ZAGUEIRO'),
(NULL, 'Nelson de Jesus Silva', 'Dida', '1973-10-07', 'GOLEIRO'),
(NULL, 'Claudinei Alexandre Pires', 'Dinei', '1970-09-10', 'ATACANTE'),
(NULL, 'Dino Sani', 'Dino Sani', '1932-05-13', 'VOLANTE'),
(NULL, 'Geraldo de Freitas Nascimento', 'Ditão', '1938-03-10', 'ZAGUEIRO'),
(NULL, 'Domingos Antonio da Guia', 'Divino Mestre', '1912-11-19', 'ZAGUEIRO'),
(NULL, 'Edílson da Silva Ferreira', 'Capetinha', '1971-09-17', 'ATACANTE'),
(NULL, 'Marcio Passos de Albuquerque', 'Emerson Sheik', '1978-09-06', 'ATACANTE'),
(NULL, 'Ezequiel Ataliba', 'Ezequiel', '1962-05-19', 'VOLANTE'),
(NULL, 'Flávio Almeida da Fonseca', 'Minuano', '1944-06-09', 'ATACANTE'),
(NULL, 'Carlos Alberto Gamarra Pavón', 'Gamarra', '1971-02-17', 'ZAGUEIRO'),
(NULL, 'Geraldo da Silva', 'Geraldão', '1949-07-25', 'ATACANTE'),
(NULL, 'Gilmar dos Santos Neves', 'AGilmar', '1930-08-22', 'GOLEIRO'),
(NULL, 'Idário Sanches Peinado', 'Sangue Azu,Sangre', '1927-05-07', 'LATERAL-DIREITO'),
(NULL, 'Liédson Milito Ferreira Silva de Muniz Chagas', 'Levezinho / Liedshow', '1977-12-17', 'ATACANTE'),
(NULL, 'Luiz Carlos Bombonato Goulart', 'Luizão', '1975-11-14', 'ATACANTE'),
(NULL, 'Luiz Trochillo', 'Pequeno Polegar', '1930-03-07', 'MEIA'),
(NULL, 'Marcelo Pereira Surcin', 'Marcelinho Carioca, Pé de anjo', '1971-12-31', 'MEIA-ATACANTE'),
(NULL, 'Marcelo Kiremitdjian', 'Marcelo Djian', '1966-11-06', 'ZAGUEIRO'),
(NULL, 'Manuel Nunes', 'Neco', '1895-03-07', 'ATACANTE'),
(NULL, 'José Ferreira Neto', 'Xodó da Fiel', '1966-09-09', 'MEIA-ATACANTE'),
(NULL, 'Oswaldo Brandão', 'Oswaldo', '1916-09-18', 'TÉCNICO'),
(NULL, 'Wanderley Eustáquio de Oliveira', 'Palhinha', '1950-06-11', 'ATACANTE'),
(NULL, 'José Paulo Bezzera Maciel Junior', 'Paulinho', '1988-07-25', 'VOLANTE'),
(NULL, 'Ralf de Souza Teles', 'Ralf', '1984-06-09', 'VOLANTE'),
(NULL, 'Freddy Eusebio Gustavo Valencia', 'Rincón', '1966-04-13', 'VOLANTE'),
(NULL, 'Roberto Rivelino', 'Reizinho do Parque', '1946-01-01', 'MEIA-ATACANTE'),
(NULL, 'Roberto Belangero', 'Professor', '1928-06-28', 'VOLANTE'),
(NULL, 'Ronaldo Luís Nazário de Lima', 'Fenômeno', '1976-09-22', 'ATACANTE'),
(NULL, 'Ronaldo Soares Giovanelli', 'Ronaldo', '1967-11-20', 'GOLEIRO'),
(NULL, 'José Carlos dos Santos', 'Ruço', '1949-06-03', 'VOLANTE'),
(NULL, 'Rui Rei de Araújo', 'Rui Rei', '1953-01-17', 'ATACANTE'),
(NULL, 'Sócrates Brasileiro Sampaio de Souza Vieira de Oliveira', 'Doutor', '1954-02-19', 'MEIA-ATACANTE'),
(NULL, 'Uriel Fernandes', 'Rei das Viradas', '1913-11-12', 'ATACANTE'),
(NULL, 'Carlos Alberto Martinez', 'Carlitos', '1984-02-05', 'ATACANTE'),
(NULL, 'Adenor Leonardo Bachi', 'Tite', '1961-05-25', 'TÉCNICO'),
(NULL, 'José Benedito Tobias', 'Gatão', '1949-05-13', 'GOLEIRO'),
(NULL, 'Tuffy Nejm', 'Satanás', '1899-07-17', 'GOLEIRO'),
(NULL, 'Pedro Francisco Garcia', 'Tupãzinho', '1968-07-07', 'ATACANTE'),
(NULL, 'Marcos André Batista dos Santos', 'Vampeta', '1974-03-13', 'VOLANTE'),
(NULL, 'Paulo Sérgio Rosa', 'Viola', '1969-01-01', 'ATACANTE'),
(NULL, 'Wílson Carlos Mano', 'Coringa', '1964-05-23', 'VOLANTE'),
(NULL, 'Wladimir Rodrigues dos Santos', 'Wladimir', '1954-08-29', 'LATERAL-ESQUERDO'),
(NULL, 'Zenon de Souza Farias', 'Zenon', '1954-03-31', 'MEIA'),
(NULL, 'José Elias Moedin Junior', 'Zé da Fiel', '1976-09-25', 'VOLANTE'),
(NULL, 'José Maria Rodrigues Alves', 'Super Zé', '1949-05-18', 'LATERAL-DIREITO');


INSERT INTO elenco VALUES
(NULL, 'Carlos Miguel dos Santos Pereira', '1998-10-09', 'goleiro'),
(NULL, 'Cássio Ramos', '1987-06-06', 'goleiro'),
(NULL, 'Matheus Planelles Donelli', '2002-05-17', 'goleiro'),
(NULL, 'Fábio Santos Romeu', '1985-09-16', 'lateral-esquerdo'),
(NULL, 'Matheus Lima Beltrão Oliveira', '1999-05-04', 'lateral-esquerdo'),
(NULL, 'Fagner Conserva Lemos', '1989-06-11', 'lateral-direito'),
(NULL, 'Rafael António Figueiredo Ramos', '1995-01-09', 'lateral-direito'),
(NULL, 'Bruno Méndez Cittadini', '1999-09-10', 'zagueiro'),
(NULL, 'João Victor Andrade Caetano', '1999-06-24', 'zagueiro'),
(NULL, 'Carlos Gilberto Nascimento Silva', '1987-06-12', 'zagueiro'),
(NULL, 'Lucas Veríssimo da Silva', '1995-07-07', 'zagueiro'),
(NULL, 'Víctor Danilo Cantillo Jiménez', '1993-10-15', 'volante'),
(NULL, 'Fausto Mariano Vera', '2000-03-25', 'volante'),
(NULL, 'Gabriel Silva Moscardo de Salles', '2005-09-28', 'volante'),
(NULL, 'Maycon de Andrade Barberan', '1997-07-15', 'volante'),
(NULL, 'José Paulo Bezzera Maciel Junior', '1988-07-25', 'volante'),
(NULL, 'Roni Medeiros de Moura', '1999-04-15', 'volante'),
(NULL, 'Guilherme Sucigan Mafra Cunha', '2004-04-20', 'meia'),
(NULL, 'Giuliano Victor de Paula', '1990-05-31', 'meia'),
(NULL, 'Matheus de Araújo Andrade', '2002-05-22', 'meia'),
(NULL, 'Matías Nicolás Rojas Romero', '1995-11-03', 'meia'),
(NULL, 'Renato Soares de Oliveira Augusto', '1988-02-08', 'meia'),
(NULL, 'Felipe Augusto da Silva', '2004-02-18', 'atacante'),
(NULL, 'Giovane Santana do Nascimento', '2003-11-24', 'atacante'),
(NULL, 'Gustavo Henric da Silva', '1997-09-07', 'atacante'),
(NULL, 'Pedro Henrique Silva dos Santos', '2006-02-05', 'atacante'),
(NULL, 'Ángel Rodrigo Romero Villamayor', '1992-07-04', 'atacante'),
(NULL, 'Ruan de Oliveira Ferreira', '2000-03-23', 'atacante'),
(NULL, 'Wesley Gassova Ribeiro Teixeira', '2005-03-05', 'atacante'),
(NULL, 'Yuri Alberto Monteiro da Silva', '2001-03-18', 'atacante');












// Crie uma fun��o que receba dois argumentos e retorne a soma dos mesmos.

function soma(x,y) { 
   return resultado = x+y;
}
// Declare uma vari�vel que receba a invoca��o da fun��o criada acima, passando dois n�meros quaisquer por argumento,
// e somando `5` ao resultado retornado da fun��o.

Var R  = soma(5,5) + 5;

// Qual o valor atualizado dessa vari�vel?
15

// Declare uma nova vari�vel, sem valor.
var v;

/*
Crie uma fun��o que adicione um valor � vari�vel criada acima, e retorne a string:
    O valor da vari�vel agora � VALOR.
Onde VALOR � o novo valor da vari�vel.
*/
function addvalor(x){
   return 'o valor da variavel �: ' + x;
}
// Invoque a fun��o criada acima.
addvalor(10);

// Qual o retorno da fun��o? (Use coment�rios de bloco).
/* "o valor da variavel �: 10"*/

/*Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos;
2. Se qualquer um dos tr�s argumentos n�o estiverem preenchidos, a fun��o deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da fun��o deve ser a multiplica��o dos 3 argumentos, somando `2` ao resultado da multiplica��o.
*/
function aula(a, b, c) {
  if (a === undefined) || (b === undefined) || (c === undefined) {
      return 'Preencha todos valores corretamente';
      } else {
              return (a*b*c) + 2;
             }

}
// Invoque a fun��o criada acima, passando s� dois n�meros como argumento.
aula(1,2)
'preencha todos valores corretamente'

// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado).
//'preencha todos valores corretamente'

// Agora invoque novamente a fun��o criada acima, mas passando todos os tr�s argumentos necess�rios.
aula(2*2*2)
// Qual o resultado da invoca��o acima? (Use coment�rios para mostrar o valor retornado).
10
/*
Crie uma fun��o com as seguintes caracter�sticas:
1. A fun��o deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
if (a !== undefined) {return a;}
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
if (a !== undefined && b !== undefined && c === undefined) { return a + b}

4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado,
 dividido pelo terceiro.
if (a !== undefined && b !== undefined && c !== undefined) { return (a + b)/c}

5. Se nenhum argumento for passado, retorne o valor booleano `false`.
if (a === undefined && b === undefined && c === undefined) { return 'false'}

6. E ainda, se nenhuma das condi��es acima forem atendidas, retorne `null`.
*/
?

function aula2(a,b,c)
{
   if ((a !== undefined) && (b === undefined)){
      return a;
   }
   else if ((a !== undefined) && (b !== undefined) && (c === undefined)) { 
      return (a + b);
   }
   else if ((a !== undefined) && (b !== undefined) && (c !== undefined)) { 
      return (a + b)/c;
   }
   else if ((a === undefined) && (b === undefined) && (c === undefined)) { 
      return 'false';
   }
   else{
	 return 'null';
   }
}

// Invoque a fun��o acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com tr�s.) 
//Coloque um coment�rio de linha ao lado da fun��o com o resultado de cada invoca��o.
aula2(10) //10
aula2(5,5) //10
aula2(5,5,5) //2
aula2() //'false'
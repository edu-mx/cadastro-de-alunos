function alunos(nome, nasc, genero){
this.nome=nome;
this.nasc=nasc;
this.genero=genero;
}
function salvar(){
event.preventDefault();
let nome_input=document.querySelector('#nome').value;
let nacimento_input=document.querySelector('#nasc').value;
let g=document.getElementById('genero');
  let genero=g.options[g.selectedIndex].text;
adicionar(nome_input, nacimento_input, genero);
mostrar();
document.getElementById('status').innerHTML='Status: '+nome_input+' adicionado com sucesso à lista.';
}
var lista_alunos=new Array;
var contador=0;
function adicionar(nm, nc, gn){
lista_alunos.unshift(new alunos(nm, nc, gn));
}
function mostrar(){
let newOption;
const select = document.querySelector('#show'); 
newOption = new Option('Aluno: '+lista_alunos[contador].nome+'. Ano de nacimento: '+lista_alunos[contador].nasc+'. Gênero: '+lista_alunos[contador].genero+'.', '');
select.add(newOption,undefined);
contador=contador++;
}
function baixar(){
let arquivo=new Array;
for(let i=0; i<lista_alunos.length; i++){
arquivo.unshift('Aluno: '+lista_alunos[i].nome+'. Ano de nacimento: '+lista_alunos[i].nasc+'. Gênero: '+lista_alunos[i].genero+'.\n');
}
let nome_arquivo=prompt('Como deseja nomear o arquivo?', 'Lista de alunos');
var blob = new Blob([arquivo], { type: "text/plain;charset=utf-8" });
saveAs(blob, nome_arquivo+".txt");
}
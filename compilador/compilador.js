"use strict";
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log('Canal');
function soma(a, b) {
    return a + b;
}
function saudar(isManha) {
    let saudacao;
    if (isManha) {
        saudacao = 'Bom Dia!';
    }
    return saudacao;
}
// "noEmitOnError": true = não gera arquivo js apartir do arquivo ts
// sourceMap - poder ver o codigo original mesmo depois de mimificar
// noImplicityAny - não precisar colocar o type any.
// StrictNullChecks - não aceita valores nullos em variaveis, como retorno sendo nullo
// NOUNUSEDPARAMETERS - parametros que nao são usados
// NOUNUSEDLOCALS - não permite variaveis locais nao sendo usadas
// LINKS ÚTEIS
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
//# sourceMappingURL=compilador.js.map
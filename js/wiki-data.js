/*
    DADOS DA WIKI — Nebulosa SMP
    ------------------------------------------------------------
    Pra adicionar uma nova história, copie um dos objetos abaixo,
    cole no final do array e preencha os campos.

    Campos:
      id        -> identificador único (ex: "mundo-01"). Não repetir.
      categoria -> uma das 4: "mundo", "personagens", "civilizacoes", "eventos"
      titulo    -> título da história
      autor     -> quem escreveu (nick do player)
      resumo    -> 1-2 frases, aparece no card antes de abrir
      texto     -> o conteúdo completo da história
      imagem    -> (opcional) caminho pra uma imagem, ex: "img/wiki/evento1.png".
                   Se não tiver imagem, deixe como null.

    No futuro, quando migrarmos pra um backend (Supabase), esse array vai
    ser substituído por uma busca no banco de dados — mas a forma de
    RENDERIZAR os cards na tela (wiki.js) não muda nada.
*/

const WIKI_DATA = [
    {
        id: 'mundo-01',
        categoria: 'mundo',
        titulo: 'A origem da Nebulosa',
        autor: 'Jontoin',
        resumo: 'Como o mundo da Nebulosa surgiu e por que ele recebeu esse nome.',
        texto: 'Escreva aqui a história completa da origem do mundo...',
        imagem: null,
    },
    {
        id: 'personagens-01',
        categoria: 'personagens',
        titulo: 'Exemplo: o primeiro aventureiro',
        autor: 'Panda_mattos',
        resumo: 'Um exemplo de história de personagem — substitua pelo conteúdo real.',
        texto: 'Escreva aqui a história completa do personagem...',
        imagem: null,
    },
];

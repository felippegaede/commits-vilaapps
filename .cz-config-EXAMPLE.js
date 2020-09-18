module.exports = {
  types: [
    { value: 'NOVO', name: 'NOVO:     Adição de novas funcionalidades.' },
    { value: 'CORRECAO', name: 'CORREÇÃO:      Correção de bugs.' },
    { value: 'DOCS', name: 'DOCS:     Alteração na documentação, como uma atualização no README.' },
    { value: 'ESTILO', name: 'ESTILO:   Alteração nas folhas de estilo. Ex.: Espaços em branco, formatação etc.' },
    { value: 'REFATORACAO', name: 'REFATORACÃO: Alteração no código que não corrige erros e não adiciona novas funcionalidades. ' },
    { value: 'TESTE', name: 'TESTE:     Alteração que adiciona ou corrige testes. '},
    { value: 'BIBLIOTECA', name: 'BIBLIOTECA:    Instalação de nova biblioteca.', },
    { value: 'WIP', name: 'WIP:      Work in progress, quando uma feature não foi concluída, mas precisa ser commitada.' },
  ],  

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: ' #time ',

  messages: {
    type: "\nSelecione o tipo de alteração:",
    customScope: '\nDefina o escopo da alteração (opcional):',
    subject: '\nFaça uma descrição das alterações realizadas:',
    footer: '\nInforme à qual tarefa essa alteração pertence. Ex.: #PBX1:',
    confirmCommit: '\nTem certeza que deseja prosseguir com o commit acima?',
    ticketNumber: '\nInforme o tempo dedicado na tarefa. Ex.: 1w 4h 2m:'
  },

  allowCustomScopes: true,
  allowBreakingChanges: false,
  // skip any questions you want
  skipQuestions: ['body', 'scope'],  
  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix : ''
  // askForBreakingChangeFirst : true, // default is false
};
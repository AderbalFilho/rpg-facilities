export const DEFAULT_LASERS_FEELINGS_FIELDS = [
  {
    type: 'text',
    label: 'Nome do personagem',
    id: 'characterName',
    placeholder: 'Ex.: Faísca da Silva',
  },
  {
    type: 'text',
    label: 'Nome do jogador',
    id: 'playerName',
    placeholder: 'Escreva seu nome ou o nome do jogador',
  },
  {
    type: 'text',
    label: 'Estilo',
    id: 'style',
    placeholder: 'Ex.: Alienígena',
  },
  {
    type: 'text',
    label: 'Papel',
    id: 'concept',
    placeholder: 'Ex.: Cientista',
  },
  {
    type: 'number',
    label: 'Número',
    id: 'number',
    placeholder: 'Escolha seu número de 2 a 5',
    min: 2,
    max: 5,
  },
  {
    type: 'textarea',
    label: 'Objetivo do personagem',
    id: 'characterObjective',
    placeholder: 'Ex.: Tornar-se capitão',
  },
];

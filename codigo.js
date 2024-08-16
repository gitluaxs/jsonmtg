function exibirosdados(){
    const cartas = [
      
  {
  "id": 1,
  "nome": "Sílfide Argothiana",
  "tipo": "criatura",
  "subtipo": "fada",
  "cor": "verde",
  "custo_mana": "1",
  "poder e resistencia": "2/2",
  "habilidades": "Sílfide Argothiana não pode ser bloqueado por criaturas artefato. coloque dois marcadores +1/+1 em Argothian Sprite",
  },
  {
    "id": 1,
    "nome": "Veterana de Cercos",
    "tipo": "criatura",
    "subtipo": "soldado humano",
    "cor": "branca",
    "custo_mana": "2",
    "poder e resistencia": "2/2",
    "habilidades": "no início do combate no seu turno, coloque um marcador +1/+1 na criatura alvo que você controla.Toda vez que outro soldado que não seja uma ficha que você controla morrer, crie uma ficha de criatura artefato soldado incolor 1/1.",
  },
  {
    "id": 1,
    "nome": "Patrulha do Perímetro",
    "tipo": "criatura",
    "subtipo": "soldado humano",
    "cor": "verde",
    "custo_mana": "2",
    "poder e resistencia": "3/3",
    "habilidades": "sempre que um artefato entra no campo de batalha sob seu controle, Patrulha do Perímetro recebe +1/+0 até o final do turno.",
  },
  {
    "id": 1,
    "nome": "Caçador de Aço de Sarinth",
    "tipo": "criatura",
    "subtipo": "batedor artífice humano",
    "cor": "verde",
    "custo_mana": "1",
    "poder e resistencia": "1/2",
    "habilidades": "sempre que um artefato entrar no campo de batalha sob seu controle, olhe o card do topo de seu grimório. Se for um card de terreno, você pode revelá-lo e colocá-lo em sua mão. Se não colocar o card em sua mão, você pode colocá-lo em seu cemitério.",
  },
  {
  "id": 1,
  "nome": "Arquiteta de Tópteros",
  "tipo": "criatura",
  "subtipo": "artífice humano",
  "cor": "branco",
  "custo_mana": "3",
  "poder e resistencia": "2/3",
  "habilidades": "s,empre que um artefato entra no campo de batalha sob seu controle, a criatura alvo ganha voar até o final do turno.",
  },
  {
    "id": 1,
    "nome": "Vanguarda da Falange",
    "tipo": "criatura",
    "subtipo": "soldado humano",
    "cor": "branco",
    "custo_mana": "1",
    "poder e resistencia": "2/2",
    "habilidades": "vigilância. sempre que um artefato entra no campo de batalha sob seu controle, Vanguarda da Falange recebe +1/+0 até o turno.",
  },
  {
    "id": 1,
    "nome": "Cavalaria de Aeronautas",
    "tipo": "criatura",
    "subtipo": "soldado humano",
    "cor": "branco",
    "custo_mana": "4",
    "poder e resistencia": "3/4",
    "habilidades": "vôo. quando a Cavalaria de Aeronautas entrar no campo de batalha, coloque um marcador +1/+1 em outro soldado alvo que você controla.",
  },
  {
    "id": 1,
    "nome": "Paraquedista de Emboscada",
    "tipo": "criatura",
    "subtipo": "soldado humano",
    "cor": "branco",
    "custo_mana": "1",
    "poder e resistencia": "1/2",
    "habilidades": "lampejo. vôo. (5): as criaturas que você controla recebem +1/+1 até o final do turno.",
  },
  {
  "id": 1,
  "nome": "Elite do Senhor da Guerra",
  "tipo": "criatura",
  "subtipo": "soldado humano",
  "cor": "branco",
  "custo_mana": "2",
  "poder e resistencia": "4/4",
  "habilidades": "como custo adicional para conjurar esta mágica, vire dois artefatos, criaturas e/ou terrenos desvirados que você controla.",
  },
  {
    "id": 1,
    "nome": "Simulacro de Símio",
    "tipo": "criatura artefato",
    "subtipo": "ape",
    "cor": "verde",
    "custo_mana": "3",
    "poder e resistencia": "2/1",
    "habilidades": "quando Simulacro de Símio entrar no campo de batalha, coloque dois marcadores +1/+1 na criatura alvo que você controla. desenterrar (2🌳🌳) (2🌳🌳: devolva este card de seu cemitério para o campo de batalha. ele ganha ímpeto. exile-o no início da próxima etapa final ou se ele fosse deixar o campo de batalha. desenterrar apenas como um socery.",
  },
  {
    "id": 1,
    "nome": "Golias de Ferrugem",
    "tipo": "criatura artefato",
    "subtipo": "construtor",
    "cor": "verde",
    "custo_mana": "10",
    "poder e resistencia": "3/5",
    "habilidades": "protótipo (você pode lançar este feitiço com diferentes custos de mana, cor e tamanho. Ele mantém suas habilidades e tipos.)",
  },
  {
  "id": 1,
  "nome": "Cão de Salvamento",
  "tipo": "criatura",
  "subtipo": "cão soldado",
  "cor": "branco",
  "custo_mana": "3",
  "poder e resistencia": "3/3",
  "habilidades": "flash. quando Cão de Salvamento entrar no campo de batalha, coloque um marcador +1/+1 em cada outro soldado que você controla. previne todo o dano que seria causado a outros soldados atacantes que você controla.",
  },
  {
    "id": 1,
    "nome": "Berço Cortador de Rastros",
    "tipo": "criatura artefato",
    "subtipo": "golem",
    "cor": "verde",
    "custo_mana": "6",
    "poder e resistencia": "1/3",
    "habilidades": "protótipo (você pode lançar este feitiço com diferentes custos de mana, cor e tamanho. Ele mantém suas habilidades e tipos.)",
  },
  {
    "id": 1,
    "nome": "Autômato Convocador de Bosques",
    "tipo": "criatura artefato",
    "subtipo": "construtor",
    "cor": "verde",
    "custo_mana": "10",
    "poder e resistencia": "3/3",
    "habilidades": "protótipo (você pode lançar este feitiço com diferentes custos de mana, cor e tamanho. Ele mantém suas habilidades e tipos.) quando Woodcaller Automaton entrar no campo de batalha, se você conjurar isso, desvire o terreno alvo que você controla. ele se torna uma criatura do povo das árvores com aceleração, poder e resistência básicos iguais ao poder e resistência do Woodcaller Automaton. ainda é uma terra.",
  },
  {
    "id": 1,
    "nome": "Vanguardeiro Yotiano",
    "tipo": "criatura artefato",
    "subtipo": "soldado",
    "cor": "branco",
    "custo_mana": "1",
    "poder e resistencia": "1/1",
    "habilidades": "sempre que o Vanguardeiro Yotiano ataca, outra criatura alvo que você controla recebe +1/+1 até o final do turno. desenterrar (🔆): devolva este card de seu cemitério para o campo de batalha. ele ganha ímpeto. exile-o no início da próxima etapa final ou se ele fosse deixar o campo de batalha. desenterrar apenas como um socery.",
  },
  {
  "id": 1,
  "nome": "Coorte de Sucata",
  "tipo": "criatura artefato",
  "subtipo": "soldado",
  "cor": "branca",
  "custo_mana": "4",
  "poder e resistencia": "3/1",
  "habilidades": "quando Coorte de Sucata entrar no campo de batalha, crie uma ficha de criatura artefato incolor 1/1 do tipo soldado. desenterrar (2🔆🔆) (2🔆🔆: devolva este card de seu cemitério para o campo de batalha. ele ganha ímpeto. exile-o no início da próxima etapa se ele fosse deixar o campo de batalha. desenterrar apenas como um feitiço.",
        },
        {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
         "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
          
      },
      {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {"nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Floresta",
          "linha_de_tipo": "Ilha Basica - Floresta",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287"
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      { 
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      {
          "nome": "Planíces",
          "linha_de_tipo": "Terreno Basico - Planíce",
          "numero_da_colecao": "277/287",
      },
      {
           "nome": "Planíces",
           "linha_de_tipo": "Terreno Basico - Planíce",
           "numero_da_colecao": "277/287",
      },
      {
        "nome": "Abater em Voo",
        "tipo": "Feitiçaria",
        "raridade": "Comum",
        "custoMana": "3",
        "texto": "Exile o artefato, o encantamento ou a criatura com voar alvo.",
        "expansao": "The Brothers' War",
        "numeroCarta": "190",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Lius Lasahido",
        "preco": "0.01",
      },
      {
        "nome": "Confronto Épico",
        "tipo": "Feitiçaria",
        "raridade": "Comum",
        "custoMana": "1",
        "texto": "A criatura alvo que você controla recebe +1/+2 até o final do turno. Ela luta com a criatura alvo que você não controla. (Cada uma causa dano igual ao seu poder à outra.)",
        "numeroCarta": "176",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Lucas Graciano",
        "preco": "0.01",
      },
      {
        "nome": "Arrastão",
        "tipo": "Feitiçaria",
        "raridade": "Incomum",
        "custoMana": "0",
        "texto": "• A criatura alvo que você controla luta com a criatura alvo que você não controla. (Cada uma causa dano igual ao seu poder à outra.)",
        "expansao": "The Brothers' War",
        "numeroCarta": "174",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Artur Nakhodkin",
        "preco": "0.41",
      },
      {
        "nome": "Depor as Armas",
        "tipo": "Feitiçaria",
        "raridade": "Incomum",
        "custoMana": "0",
        "texto": "Exile a criatura alvo com valor de mana igual ou inferior ao número de Planícies que você controla. Seu controlador ganha 3 pontos de vida.",
        "expansao": "The Brothers' War",
        "numeroCarta": "11",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Liiga Smilshkalne",
        "preco": "0.04",
      },
      {
        "nome": "Engenhocagem de Tawnos",
        "tipo": "Instantâneo",
        "raridade": "Comum",
        "custoMana": "3G",
        "texto": "Coloque três marcadores +1/+1 em uma criatura alvo. Desvire-a.",
        "expansao": "The Brothers' War",
        "numeroCarta": "197",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Chris Seaman",
        "preco": "0.25",
      },
      {
        "nome": "Estática Mental",
        "tipo": "Encantamento",
        "raridade": "Incomum",
        "custoMana": "3W",
        "texto": "Quando Estática Mental entra no campo de batalha, exile uma permanente alvo que não seja terreno até que Static Net deixe o campo de batalha. Você ganha 2 pontos de vida e adiciona {C}.",
        "expansao": "The Brothers' War",
        "numeroCarta": "33",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Randy Vargas",
        "preco": "0.50",
      },
      {
        "nome": "Lâmina de Energia do Veterano",
        "tipo": "Artefato - Equipamento",
        "raridade": "Comum",
        "custoMana": "2",
        "texto": "A criatura equipada recebe +2/+0.\nEquipar Soldado {W}.\nEquipar {3}.",
        "expansao": "The Brothers' War",
        "numeroCarta": "241",
        "idioma": "Inglês",
        "colecao": "The Brothers' War",
        "dataLancamento": "2022-11-18",
        "ilustrador": "Billy Christian",
        "preco": "0.20",
      }
    ];
  
  console.clear();
  console.log("// exibe todos os carros dentro da estrutura JSON");
  console.log(cartas);
  console.log("// exibe o dados do primeiro cartas");
  console.log(cartas[0]);
  console.log("// exibe o dados do segundo cartas");
  console.log(cartas[1]);
  console.log("// exibe como iniciar o jogo");
  console.log(cartas[1].habilidades);
}
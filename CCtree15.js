   var config = {
            container: "#CCtree",
            rootOrientation: "WEST",
		      levelSeparation: 10,
		      siblingSeparation: 10,
		      scrollbar: "fancy",
            callback: {
                onToggleCollapseFinished: function(node) {showDC(node.nodeHTMLid,node.text.name);}
            },
            node: {
                collapsable: true,
                HTMLclass: "CCnode"
            },
            connectors: {
                type: "curve",
                style: {
                    "stroke-width": 2,
                    "stroke-linecap": "round",
                    "stroke": "#ccc"
                    }
            }
        },
node15 = {
        childrenDropLevel: 1,
        text:{name: "AUTORITÉS INDÉPENDANTES"},
        HTMLid:"15",
    },
node15a1 = {
        parent: node15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "COMPÉTENCE DU LÉGISLATEUR (voir également Titre 3 Normes législatives et réglementaires)"},
        HTMLid:"15a1",
    },
node15a1a1 = {
        parent: node15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'une autorité indépendante"},
        HTMLid:"15a1a1",
    },
node15a1a1a1 = {
        parent: node15a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité de la communication"},
        HTMLid:"15a1a1a1",
        HTMLclass:"leave"
    },
node15a1a1a2 = {
        parent: node15a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a1a1a2",
        HTMLclass:"leave"
    },
node15a1a1a3 = {
        parent: node15a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes de la Nouvelle-Calédonie"},
        HTMLid:"15a1a1a3",
        HTMLclass:"leave"
    },
node15a1a2 = {
        parent: node15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Substitution d'une autorité indépendante à une autre autorité indépendante"},
        HTMLid:"15a1a2",
        HTMLclass:"leave"
    },
node15a1a3 = {
        parent: node15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suppression d'une instance indépendante"},
        HTMLid:"15a1a3",
        HTMLclass:"leave"
    },
node15a1a4 = {
        parent: node15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du principe de la séparation des pouvoirs et de l'indépendance de l'autorité judiciaire"},
        HTMLid:"15a1a4",
    },
node15a1a4a1 = {
        parent: node15a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Médiateur de la République"},
        HTMLid:"15a1a4a1",
        HTMLclass:"leave"
    },
node15a1a4a2 = {
        parent: node15a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a1a4a2",
        HTMLclass:"leave"
    },
node15a1a4a3 = {
        parent: node15a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a1a4a3",
        HTMLclass:"leave"
    },
node15a1a4a4 = {
        parent: node15a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de régularisation des télécommunications"},
        HTMLid:"15a1a4a4",
        HTMLclass:"leave"
    },
node15a2 = {
        parent: node15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "GARANTIES D'INDÉPENDANCE"},
        HTMLid:"15a2",
    },
node15a2a1 = {
        parent: node15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres"},
        HTMLid:"15a2a1",
    },
node15a2a1a1 = {
        parent: node15a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président : nomination, durée du mandat"},
        HTMLid:"15a2a1a1",
        HTMLclass:"leave"
    },
node15a2a1a1a1 = {
        parent: node15a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a2a1a1a1",
        HTMLclass:"leave"
    },
node15a2a1a2 = {
        parent: node15a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres : composition, nomination, durée du mandat"},
        HTMLid:"15a2a1a2",
    },
node15a2a1a2a1 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission Nationale de la communication et des libertés"},
        HTMLid:"15a2a1a2a1",
        HTMLclass:"leave"
    },
node15a2a1a2a2 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a2a1a2a2",
        HTMLclass:"leave"
    },
node15a2a1a2a3 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité de la communication audiovisuelle"},
        HTMLid:"15a2a1a2a3",
        HTMLclass:"leave"
    },
node15a2a1a2a4 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission prévue par l'article 25 de la Constitution"},
        HTMLid:"15a2a1a2a4",
    },
node15a2a1a2a5 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la transparence de la vie publique"},
        HTMLid:"15a2a1a2a5",
        HTMLclass:"leave"
    },
node15a2a1a2a6 = {
        parent: node15a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes de la Nouvelle-Calédonie"},
        HTMLid:"15a2a1a2a6",
        HTMLclass:"leave"
    },
node15a2a1a3 = {
        parent: node15a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligations d'impartialité"},
        HTMLid:"15a2a1a3",
    },
node15a2a1a3a1 = {
        parent: node15a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"15a2a1a3a1",
        HTMLclass:"leave"
    },
node15a2a1a3a2 = {
        parent: node15a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la concurrence"},
        HTMLid:"15a2a1a3a2",
        HTMLclass:"leave"
    },
node15a2a1a3a3 = {
        parent: node15a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a2a1a3a3",
        HTMLclass:"leave"
    },
node15a2a1a4 = {
        parent: node15a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"15a2a1a4",
    },
node15a2a1a4a1 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale de la communication et des libertés"},
        HTMLid:"15a2a1a4a1",
        HTMLclass:"leave"
    },
node15a2a1a4a2 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a2a1a4a2",
        HTMLclass:"leave"
    },
node15a2a1a4a3 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission prévue par l'article 25 de la Constitution"},
        HTMLid:"15a2a1a4a3",
    },
node15a2a1a4a4 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la transparence de la vie publique"},
        HTMLid:"15a2a1a4a4",
        HTMLclass:"leave"
    },
node15a2a1a4a5 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes de la Nouvelle-Calédonie"},
        HTMLid:"15a2a1a4a5",
        HTMLclass:"leave"
    },
node15a2a1a4a6 = {
        parent: node15a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes dans les collectivités d'outre-mer dotées de l'indépendance"},
        HTMLid:"15a2a1a4a6",
        HTMLclass:"leave"
    },
node15a2a1a5 = {
        parent: node15a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité du Président"},
        HTMLid:"15a2a1a5",
        HTMLclass:"leave"
    },
node15a2a2 = {
        parent: node15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Services d'instruction et de poursuite"},
        HTMLid:"15a2a2",
    },
node15a2a2a1 = {
        parent: node15a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la concurrence"},
        HTMLid:"15a2a2a1",
        HTMLclass:"leave"
    },
node15a2a2a2 = {
        parent: node15a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de régulation des postes et des communications électroniques"},
        HTMLid:"15a2a2a2",
        HTMLclass:"leave"
    },
node15a2a3 = {
        parent: node15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles budgétaires et comptables"},
        HTMLid:"15a2a3",
    },
node15a2a3a1 = {
        parent: node15a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recette"},
        HTMLid:"15a2a3a1",
    },
node15a2a3a1a1 = {
        parent: node15a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a2a3a1a1",
        HTMLclass:"leave"
    },
node15a2a3a1a2 = {
        parent: node15a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a2a3a1a2",
        HTMLclass:"leave"
    },
node15a2a3a2 = {
        parent: node15a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses"},
        HTMLid:"15a2a3a2",
    },
node15a2a3a2a1 = {
        parent: node15a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission prévue à l'article 25 de la Constitution"},
        HTMLid:"15a2a3a2a1",
    },
node15a2a3a2a2 = {
        parent: node15a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'accomplissement des missions"},
        HTMLid:"15a2a3a2a2",
    },
node15a2a3a2a3 = {
        parent: node15a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la transparence de la vie publique"},
        HTMLid:"15a2a3a2a3",
        HTMLclass:"leave"
    },
node15a2a3a3 = {
        parent: node15a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Confidentialité"},
        HTMLid:"15a2a3a3",
    },
node15a2a3a3a1 = {
        parent: node15a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission prévue à l'article 25 de la Constitution"},
        HTMLid:"15a2a3a3a1",
    },
node15a2a3a3a2 = {
        parent: node15a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret des délibérations du Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a2a3a3a2",
        HTMLclass:"leave"
    },
node15a2a3a4 = {
        parent: node15a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres conditions"},
        HTMLid:"15a2a3a4",
    },
node15a2a3a5 = {
        parent: node15a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes de la Nouvelle-Calédonie"},
        HTMLid:"15a2a3a5",
        HTMLclass:"leave"
    },
node15a3 = {
        parent: node15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "MISSIONS ET POUVOIRS"},
        HTMLid:"15a3",
    },
node15a3a1 = {
        parent: node15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs de contrôle et pouvoirs d'enquête"},
        HTMLid:"15a3a1",
    },
node15a3a1a1 = {
        parent: node15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la concurrence"},
        HTMLid:"15a3a1a1",
        HTMLclass:"leave"
    },
node15a3a1a2 = {
        parent: node15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a1a2",
        HTMLclass:"leave"
    },
node15a3a1a3 = {
        parent: node15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a3a1a3",
    },
node15a3a1a3a1 = {
        parent: node15a3a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Le pouvoir d'enquêtes administratives se distingue d'une perquisition ou une saisie (contrôle de l'autorité judiciaire)"},
        HTMLid:"15a3a1a3a1",
        HTMLclass:"leave"
    },
node15a3a1a4 = {
        parent: node15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale des comptes de campagne et des financements politiques"},
        HTMLid:"15a3a1a4",
        HTMLclass:"leave"
    },
node15a3a1a5 = {
        parent: node15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la transparence de la vie publique"},
        HTMLid:"15a3a1a5",
        HTMLclass:"leave"
    },
node15a3a2 = {
        parent: node15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir réglementaire"},
        HTMLid:"15a3a2",
    },
node15a3a2a1 = {
        parent: node15a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"15a3a2a1",
        HTMLclass:"leave"
    },
node15a3a2a2 = {
        parent: node15a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"15a3a2a2",
    },
node15a3a2a2a1 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale de la communication et des libertés"},
        HTMLid:"15a3a2a2a1",
        HTMLclass:"leave"
    },
node15a3a2a2a2 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a2a2a2",
        HTMLclass:"leave"
    },
node15a3a2a2a3 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale de l'informatique et des libertés"},
        HTMLid:"15a3a2a2a3",
        HTMLclass:"leave"
    },
node15a3a2a2a4 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de régulation des télécommunications"},
        HTMLid:"15a3a2a2a4",
        HTMLclass:"leave"
    },
node15a3a2a2a5 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil des bourses de valeurs"},
        HTMLid:"15a3a2a2a5",
        HTMLclass:"leave"
    },
node15a3a2a2a6 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Banque de France"},
        HTMLid:"15a3a2a2a6",
        HTMLclass:"leave"
    },
node15a3a2a2a7 = {
        parent: node15a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la concurrence"},
        HTMLid:"15a3a2a2a7",
        HTMLclass:"leave"
    },
node15a3a3 = {
        parent: node15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de sanction"},
        HTMLid:"15a3a3",
    },
node15a3a3a1 = {
        parent: node15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des fonctions de poursuite et de jugement"},
        HTMLid:"15a3a3a1",
        HTMLclass:"leave"
    },
node15a3a3a2 = {
        parent: node15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue du pouvoir de sanction"},
        HTMLid:"15a3a3a2",
    },
node15a3a3a2a1 = {
        parent: node15a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir exercé dans la limite nécessaire à l'accomplissement de la mission"},
        HTMLid:"15a3a3a2a1",
    },
node15a3a3a2a1a1 = {
        parent: node15a3a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a2a1a1",
        HTMLclass:"leave"
    },
node15a3a3a2a1a2 = {
        parent: node15a3a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission de la protection des droits de la Haute autorité pour la diffusion des oeuvres et la protection des droits sur internet (HADOPI)"},
        HTMLid:"15a3a3a2a1a2",
        HTMLclass:"leave"
    },
node15a3a3a2a2 = {
        parent: node15a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exclusion des sanctions privatives de liberté"},
        HTMLid:"15a3a3a2a2",
    },
node15a3a3a2a2a1 = {
        parent: node15a3a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a3a3a2a2a1",
        HTMLclass:"leave"
    },
node15a3a3a3 = {
        parent: node15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des exigences constitutionnelles en matière pénale"},
        HTMLid:"15a3a3a3",
    },
node15a3a3a3a1 = {
        parent: node15a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de légalité des sanctions administratives"},
        HTMLid:"15a3a3a3a1",
        HTMLclass:"leave"
    },
node15a3a3a3a2 = {
        parent: node15a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité et proportionnalité des sanctions"},
        HTMLid:"15a3a3a3a2",
    },
node15a3a3a3a2a1 = {
        parent: node15a3a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a3a2a1",
        HTMLclass:"leave"
    },
node15a3a3a3a3 = {
        parent: node15a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règle de non cumul des sanctions"},
        HTMLid:"15a3a3a3a3",
    },
node15a3a3a3a3a1 = {
        parent: node15a3a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non cumul des sanctions pécuniaires et pénales / Non cumul des sanctions administratives"},
        HTMLid:"15a3a3a3a3a1",
    },
node15a3a3a3a3a1a1 = {
        parent: node15a3a3a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a3a3a1a1",
        HTMLclass:"leave"
    },
node15a3a3a3a3a2 = {
        parent: node15a3a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non cumul des sanctions administratives de nature pécuniaire avec une sanction pénale"},
        HTMLid:"15a3a3a3a3a2",
    },
node15a3a3a3a3a2a1 = {
        parent: node15a3a3a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de régulation des télécommunications"},
        HTMLid:"15a3a3a3a3a2a1",
        HTMLclass:"leave"
    },
node15a3a3a3a3a2a2 = {
        parent: node15a3a3a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a3a3a3a3a2a2",
        HTMLclass:"leave"
    },
node15a3a3a4 = {
        parent: node15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties procédurales"},
        HTMLid:"15a3a3a4",
    },
node15a3a3a4a1 = {
        parent: node15a3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en demeure"},
        HTMLid:"15a3a3a4a1",
    },
node15a3a3a4a1a1 = {
        parent: node15a3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a4a1a1",
        HTMLclass:"leave"
    },
node15a3a3a4a2 = {
        parent: node15a3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des droits de la défense"},
        HTMLid:"15a3a3a4a2",
    },
node15a3a3a4a2a1 = {
        parent: node15a3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a4a2a1",
        HTMLclass:"leave"
    },
node15a3a3a4a2a2 = {
        parent: node15a3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des opérations de bourse"},
        HTMLid:"15a3a3a4a2a2",
        HTMLclass:"leave"
    },
node15a3a3a4a3 = {
        parent: node15a3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation des sanctions"},
        HTMLid:"15a3a3a4a3",
        HTMLclass:"leave"
    },
node15a3a3a5 = {
        parent: node15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au recours contre les sanctions (recours de plein contentieux)"},
        HTMLid:"15a3a3a5",
    },
node15a3a3a5a1 = {
        parent: node15a3a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil de la concurrence"},
        HTMLid:"15a3a3a5a1",
        HTMLclass:"leave"
    },
node15a3a3a5a2 = {
        parent: node15a3a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a3a5a2",
        HTMLclass:"leave"
    },
node15a3a4 = {
        parent: node15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir d'autorisation"},
        HTMLid:"15a3a4",
    },
node15a3a4a1 = {
        parent: node15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission pour la transparence et le pluralisme de la presse."},
        HTMLid:"15a3a4a1",
        HTMLclass:"leave"
    },
node15a3a4a2 = {
        parent: node15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité de communication audiovisuelle"},
        HTMLid:"15a3a4a2",
        HTMLclass:"leave"
    },
node15a3a4a3 = {
        parent: node15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a4a3",
        HTMLclass:"leave"
    },
node15a3a5 = {
        parent: node15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nominations"},
        HTMLid:"15a3a5",
    },
node15a3a5a1 = {
        parent: node15a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de nomination"},
        HTMLid:"15a3a5a1",
    },
node15a3a5a1a1 = {
        parent: node15a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a5a1a1",
        HTMLclass:"leave"
    },
node15a3a5a2 = {
        parent: node15a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis conforme"},
        HTMLid:"15a3a5a2",
    },
node15a3a5a2a1 = {
        parent: node15a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a3a5a2a1",
    },
node15a4 = {
        parent: node15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DÉCISIONS"},
        HTMLid:"15a4",
    },
node15a4a1 = {
        parent: node15a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère exécutoire des décisions"},
        HTMLid:"15a4a1",
        HTMLclass:"leave"
    },
node15a4a2 = {
        parent: node15a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des décisions"},
        HTMLid:"15a4a2",
    },
node15a4a2a1 = {
        parent: node15a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale des comptes de campagne"},
        HTMLid:"15a4a2a1",
        HTMLclass:"leave"
    },
node15a4a2a2 = {
        parent: node15a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la diffusion des oeuvres et la protection des droits sur internet (HADOPI)"},
        HTMLid:"15a4a2a2",
        HTMLclass:"leave"
    },
node15a4a2a3 = {
        parent: node15a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité pour la transparence de la vie publique"},
        HTMLid:"15a4a2a3",
        HTMLclass:"leave"
    },
node15a5 = {
        parent: node15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "RÈGLES CONTENTIEUSES"},
        HTMLid:"15a5",
    },
node15a5a1 = {
        parent: node15a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Unification des règles contentieuses"},
        HTMLid:"15a5a1",
    },
node15a5a1a1 = {
        parent: node15a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de régulation des télécommunications"},
        HTMLid:"15a5a1a1",
        HTMLclass:"leave"
    },
node15a5a1a2 = {
        parent: node15a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil de la Concurrence"},
        HTMLid:"15a5a1a2",
        HTMLclass:"leave"
    },
node15a5a2 = {
        parent: node15a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soumission au contrôle juridictionnel"},
        HTMLid:"15a5a2",
    },
node15a5a2a1 = {
        parent: node15a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Excès de pouvoir"},
        HTMLid:"15a5a2a1",
        HTMLclass:"leave"
    },
node15a5a2a2 = {
        parent: node15a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité"},
        HTMLid:"15a5a2a2",
        HTMLclass:"leave"
    },
node15a5a3 = {
        parent: node15a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours contre les sanctions (cf. 1.4.4.4)"},
        HTMLid:"15a5a3",
    },
node15a5a4 = {
        parent: node15a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de légalité"},
        HTMLid:"15a5a4",
    },
node15a5a4a1 = {
        parent: node15a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de l'audiovisuel"},
        HTMLid:"15a5a4a1",
        HTMLclass:"leave"
    },
node15a5a4a2 = {
        parent: node15a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale de la communication et des libertés"},
        HTMLid:"15a5a4a2",
        HTMLclass:"leave"
    },
tree_config15 = [config,node15,node15a1,node15a1a1,node15a1a1a1,node15a1a1a2,node15a1a1a3,node15a1a2,node15a1a3,node15a1a4,node15a1a4a1,node15a1a4a2,node15a1a4a3,node15a1a4a4,node15a2,node15a2a1,node15a2a1a1,node15a2a1a1a1,node15a2a1a2,node15a2a1a2a1,node15a2a1a2a2,node15a2a1a2a3,node15a2a1a2a4,node15a2a1a2a5,node15a2a1a2a6,node15a2a1a3,node15a2a1a3a1,node15a2a1a3a2,node15a2a1a3a3,node15a2a1a4,node15a2a1a4a1,node15a2a1a4a2,node15a2a1a4a3,node15a2a1a4a4,node15a2a1a4a5,node15a2a1a4a6,node15a2a1a5,node15a2a2,node15a2a2a1,node15a2a2a2,node15a2a3,node15a2a3a1,node15a2a3a1a1,node15a2a3a1a2,node15a2a3a2,node15a2a3a2a1,node15a2a3a2a2,node15a2a3a2a3,node15a2a3a3,node15a2a3a3a1,node15a2a3a3a2,node15a2a3a4,node15a2a3a5,node15a3,node15a3a1,node15a3a1a1,node15a3a1a2,node15a3a1a3,node15a3a1a3a1,node15a3a1a4,node15a3a1a5,node15a3a2,node15a3a2a1,node15a3a2a2,node15a3a2a2a1,node15a3a2a2a2,node15a3a2a2a3,node15a3a2a2a4,node15a3a2a2a5,node15a3a2a2a6,node15a3a2a2a7,node15a3a3,node15a3a3a1,node15a3a3a2,node15a3a3a2a1,node15a3a3a2a1a1,node15a3a3a2a1a2,node15a3a3a2a2,node15a3a3a2a2a1,node15a3a3a3,node15a3a3a3a1,node15a3a3a3a2,node15a3a3a3a2a1,node15a3a3a3a3,node15a3a3a3a3a1,node15a3a3a3a3a1a1,node15a3a3a3a3a2,node15a3a3a3a3a2a1,node15a3a3a3a3a2a2,node15a3a3a4,node15a3a3a4a1,node15a3a3a4a1a1,node15a3a3a4a2,node15a3a3a4a2a1,node15a3a3a4a2a2,node15a3a3a4a3,node15a3a3a5,node15a3a3a5a1,node15a3a3a5a2,node15a3a4,node15a3a4a1,node15a3a4a2,node15a3a4a3,node15a3a5,node15a3a5a1,node15a3a5a1a1,node15a3a5a2,node15a3a5a2a1,node15a4,node15a4a1,node15a4a2,node15a4a2a1,node15a4a2a2,node15a4a2a3,node15a5,node15a5a1,node15a5a1a1,node15a5a1a2,node15a5a2,node15a5a2a1,node15a5a2a2,node15a5a3,node15a5a4,node15a5a4a1,node15a5a4a2];

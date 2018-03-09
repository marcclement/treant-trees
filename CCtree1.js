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
node1 = {
        childrenDropLevel: 1,
        text:{name: "NORMES CONSTITUTIONNELLES"},
        HTMLid:"1",
    },
node1a1 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "GÉNÉRALITÉS"},
        HTMLid:"1a1",
    },
node1a1a1 = {
        parent: node1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir constituant et normes constitutionnelles"},
        HTMLid:"1a1a1",
    },
node1a1a1a1 = {
        parent: node1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "L'utilisation du pouvoir de révision"},
        HTMLid:"1a1a1a1",
    },
node1a1a1a1a1 = {
        parent: node1a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue du pouvoir de révision"},
        HTMLid:"1a1a1a1a1",
        HTMLclass:"leave"
    },
node1a1a1a1a2 = {
        parent: node1a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du Conseil constitutionnel"},
        HTMLid:"1a1a1a1a2",
        HTMLclass:"leave"
    },
node1a1a1a2 = {
        parent: node1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité d'une révision constitutionnelle"},
        HTMLid:"1a1a1a2",
    },
node1a1a1a2a1 = {
        parent: node1a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrariété d'un traité avec la Constitution"},
        HTMLid:"1a1a1a2a1",
    },
node1a1a1a2a1a1 = {
        parent: node1a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas retenus"},
        HTMLid:"1a1a1a2a1a1",
    },
node1a1a1a2a1a2 = {
        parent: node1a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas non retenus"},
        HTMLid:"1a1a1a2a1a2",
    },
node1a1a1a3 = {
        parent: node1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constat de la révision par le Conseil constitutionnel"},
        HTMLid:"1a1a1a3",
        HTMLclass:"leave"
    },
node1a1a2 = {
        parent: node1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de hiérarchie entre les normes constitutionnelles"},
        HTMLid:"1a1a2",
        HTMLclass:"leave"
    },
node1a1a3 = {
        parent: node1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Primauté de la Constitution sur des dispositions législatives antérieures"},
        HTMLid:"1a1a3",
        HTMLclass:"leave"
    },
node1a2 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DÉCLARATION DES DROITS DE L'HOMME ET DU CITOYEN DU 26 AOÛT 1789"},
        HTMLid:"1a2",
    },
node1a2a1 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Admission de la valeur constitutionnelle de la Déclaration de 1789"},
        HTMLid:"1a2a1",
        HTMLclass:"leave"
    },
node1a2a2 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1er"},
        HTMLid:"1a2a2",
    },
node1a2a2a1 = {
        parent: node1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité"},
        HTMLid:"1a2a2a1",
        HTMLclass:"leave"
    },
node1a2a3 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 2"},
        HTMLid:"1a2a3",
    },
node1a2a3a1 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de liberté"},
        HTMLid:"1a2a3a1",
        HTMLclass:"leave"
    },
node1a2a3a2 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au respect de la vie privée"},
        HTMLid:"1a2a3a2",
        HTMLclass:"leave"
    },
node1a2a3a3 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la sûreté"},
        HTMLid:"1a2a3a3",
        HTMLclass:"leave"
    },
node1a2a3a4 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au secret des correspondances"},
        HTMLid:"1a2a3a4",
        HTMLclass:"leave"
    },
node1a2a3a5 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté individuelle"},
        HTMLid:"1a2a3a5",
    },
node1a2a3a6 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle"},
        HTMLid:"1a2a3a6",
    },
node1a2a3a7 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de mariage"},
        HTMLid:"1a2a3a7",
    },
node1a2a3a8 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'aller et venir"},
        HTMLid:"1a2a3a8",
        HTMLclass:"leave"
    },
node1a2a3a9 = {
        parent: node1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de propriété"},
        HTMLid:"1a2a3a9",
        HTMLclass:"leave"
    },
node1a2a4 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 3"},
        HTMLid:"1a2a4",
    },
node1a2a4a1 = {
        parent: node1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de souveraineté"},
        HTMLid:"1a2a4a1",
        HTMLclass:"leave"
    },
node1a2a5 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 4"},
        HTMLid:"1a2a5",
    },
node1a2a5a1 = {
        parent: node1a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'entreprendre"},
        HTMLid:"1a2a5a1",
        HTMLclass:"leave"
    },
node1a2a5a2 = {
        parent: node1a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté contractuelle et droit au maintien de l'économie des conventions légalement conclues"},
        HTMLid:"1a2a5a2",
        HTMLclass:"leave"
    },
node1a2a5a3 = {
        parent: node1a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de responsabilité / réparation"},
        HTMLid:"1a2a5a3",
        HTMLclass:"leave"
    },
node1a2a6 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 5 - Principe selon lequel la liberté est la règle"},
        HTMLid:"1a2a6",
        HTMLclass:"leave"
    },
node1a2a7 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 6"},
        HTMLid:"1a2a7",
    },
node1a2a7a1 = {
        parent: node1a2a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi, expression de la volonté générale"},
        HTMLid:"1a2a7a1",
    },
node1a2a7a1a1 = {
        parent: node1a2a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normativité de la loi"},
        HTMLid:"1a2a7a1a1",
        HTMLclass:"leave"
    },
node1a2a7a1a2 = {
        parent: node1a2a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Clarté et sincérité des débats parlementaires"},
        HTMLid:"1a2a7a1a2",
        HTMLclass:"leave"
    },
node1a2a7a2 = {
        parent: node1a2a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant la loi"},
        HTMLid:"1a2a7a2",
        HTMLclass:"leave"
    },
node1a2a7a3 = {
        parent: node1a2a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité en matière d'accès à l'emploi public"},
        HTMLid:"1a2a7a3",
        HTMLclass:"leave"
    },
node1a2a8 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 7 - Interdiction des accusations, arrestations et détentions arbitraires"},
        HTMLid:"1a2a8",
        HTMLclass:"leave"
    },
node1a2a9 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 8"},
        HTMLid:"1a2a9",
    },
node1a2a9a1 = {
        parent: node1a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Légalité des délits et des peines"},
        HTMLid:"1a2a9a1",
        HTMLclass:"leave"
    },
node1a2a9a2 = {
        parent: node1a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité des peines"},
        HTMLid:"1a2a9a2",
        HTMLclass:"leave"
    },
node1a2a9a3 = {
        parent: node1a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Individualisation des peines et des sanctions ayant le caractère d'une punition"},
        HTMLid:"1a2a9a3",
        HTMLclass:"leave"
    },
node1a2a9a4 = {
        parent: node1a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-rétroactivité des peines et des sanctions ayant le caractère d'une punition"},
        HTMLid:"1a2a9a4",
        HTMLclass:"leave"
    },
node1a2a9a5 = {
        parent: node1a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proportionnalité des peines et des sanctions"},
        HTMLid:"1a2a9a5",
        HTMLclass:"leave"
    },
node1a2a10 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 9 - Présomption d'innocence et rigueur non nécessaire"},
        HTMLid:"1a2a10",
    },
node1a2a10a1 = {
        parent: node1a2a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présomption d'innocence"},
        HTMLid:"1a2a10a1",
        HTMLclass:"leave"
    },
node1a2a10a2 = {
        parent: node1a2a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rigueur non nécessaire"},
        HTMLid:"1a2a10a2",
        HTMLclass:"leave"
    },
node1a2a11 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 10 - Liberté d'opinion"},
        HTMLid:"1a2a11",
        HTMLclass:"leave"
    },
node1a2a12 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 10 - Liberté de conscience"},
        HTMLid:"1a2a12",
        HTMLclass:"leave"
    },
node1a2a13 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 11 - Libre communication des pensées et des opinions"},
        HTMLid:"1a2a13",
        HTMLclass:"leave"
    },
node1a2a14 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 12 - Nécessité de la force publique"},
        HTMLid:"1a2a14",
        HTMLclass:"leave"
    },
node1a2a15 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 13 - Charges publiques"},
        HTMLid:"1a2a15",
    },
node1a2a15a1 = {
        parent: node1a2a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant les charges publiques"},
        HTMLid:"1a2a15a1",
        HTMLclass:"leave"
    },
node1a2a15a2 = {
        parent: node1a2a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de répartition de l'impôt selon la faculté contributive"},
        HTMLid:"1a2a15a2",
        HTMLclass:"leave"
    },
node1a2a15a3 = {
        parent: node1a2a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de lutte contre la fraude fiscale"},
        HTMLid:"1a2a15a3",
        HTMLclass:"leave"
    },
node1a2a16 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 14"},
        HTMLid:"1a2a16",
    },
node1a2a16a1 = {
        parent: node1a2a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consentement à l'impôt"},
        HTMLid:"1a2a16a1",
        HTMLclass:"leave"
    },
node1a2a16a2 = {
        parent: node1a2a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution publique et rôle du Parlement"},
        HTMLid:"1a2a16a2",
        HTMLclass:"leave"
    },
node1a2a16a3 = {
        parent: node1a2a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution publique et rôle de l'organe délibérant"},
        HTMLid:"1a2a16a3",
        HTMLclass:"leave"
    },
node1a2a16a4 = {
        parent: node1a2a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité de l'impôt"},
        HTMLid:"1a2a16a4",
        HTMLclass:"leave"
    },
node1a2a17 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 15"},
        HTMLid:"1a2a17",
    },
node1a2a17a1 = {
        parent: node1a2a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle et responsabilité des agents publics"},
        HTMLid:"1a2a17a1",
        HTMLclass:"leave"
    },
node1a2a17a2 = {
        parent: node1a2a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'accès aux documents d'archives publiques"},
        HTMLid:"1a2a17a2",
        HTMLclass:"leave"
    },
node1a2a18 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 16"},
        HTMLid:"1a2a18",
    },
node1a2a18a1 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garantie des droits"},
        HTMLid:"1a2a18a1",
        HTMLclass:"leave"
    },
node1a2a18a2 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"1a2a18a2",
    },
node1a2a18a2a1 = {
        parent: node1a2a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Valeur constitutionnelle du principe."},
        HTMLid:"1a2a18a2a1",
        HTMLclass:"leave"
    },
node1a2a18a2a2 = {
        parent: node1a2a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"1a2a18a2a2",
        HTMLclass:"leave"
    },
node1a2a18a2a3 = {
        parent: node1a2a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Force exécutoire des décisions de justice comme corollaire du principe de la séparation des pouvoirs"},
        HTMLid:"1a2a18a2a3",
        HTMLclass:"leave"
    },
node1a2a18a2a4 = {
        parent: node1a2a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'autonomie financière des pouvoirs publics découlant du principe de la séparation des pouvoirs"},
        HTMLid:"1a2a18a2a4",
        HTMLclass:"leave"
    },
node1a2a18a2a5 = {
        parent: node1a2a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'autonomie des assemblées parlementaires"},
        HTMLid:"1a2a18a2a5",
        HTMLclass:"leave"
    },
node1a2a18a3 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à un recours effectif"},
        HTMLid:"1a2a18a3",
        HTMLclass:"leave"
    },
node1a2a18a4 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de la défense"},
        HTMLid:"1a2a18a4",
        HTMLclass:"leave"
    },
node1a2a18a5 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à un procès équitable"},
        HTMLid:"1a2a18a5",
        HTMLclass:"leave"
    },
node1a2a18a6 = {
        parent: node1a2a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impartialité et indépendance des juridictions"},
        HTMLid:"1a2a18a6",
        HTMLclass:"leave"
    },
node1a2a19 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 17"},
        HTMLid:"1a2a19",
        HTMLclass:"leave"
    },
node1a2a20 = {
        parent: node1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Combinaison de plusieurs dispositions de la Déclaration de 1789"},
        HTMLid:"1a2a20",
    },
node1a2a20a1 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté individuelle (articles 1er, 2 et 4)"},
        HTMLid:"1a2a20a1",
        HTMLclass:"leave"
    },
node1a2a20a2 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au secret des correspondances (articles 2 et 4)"},
        HTMLid:"1a2a20a2",
        HTMLclass:"leave"
    },
node1a2a20a3 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'aller et de venir (articles 2 et 4)"},
        HTMLid:"1a2a20a3",
        HTMLclass:"leave"
    },
node1a2a20a4 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté du mariage (articles 2 et 4)"},
        HTMLid:"1a2a20a4",
        HTMLclass:"leave"
    },
node1a2a20a5 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle (articles 2 et 4)"},
        HTMLid:"1a2a20a5",
        HTMLclass:"leave"
    },
node1a2a20a6 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif d'intelligibilité et d'accessibilité de la loi (articles 4, 5, 6 et 16)"},
        HTMLid:"1a2a20a6",
        HTMLclass:"leave"
    },
node1a2a20a7 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de non-complexité excessive des règles applicables aux citoyens (articles 4, 5, 6 et 16)"},
        HTMLid:"1a2a20a7",
        HTMLclass:"leave"
    },
node1a2a20a8 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du respect des droits ou intérêts légitimes des personnes (articles 2, 4, 9 et 16)"},
        HTMLid:"1a2a20a8",
        HTMLclass:"leave"
    },
node1a2a20a9 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité de la rigueur entravant la liberté de la personne (articles 4 et 9)"},
        HTMLid:"1a2a20a9",
        HTMLclass:"leave"
    },
node1a2a20a10 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préservation des contrats et conventions légalement conclus (articles 4 et 16)"},
        HTMLid:"1a2a20a10",
        HTMLclass:"leave"
    },
node1a2a20a11 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de la publicité des débats en matière pénale (articles 6, 8, 9 et 16)"},
        HTMLid:"1a2a20a11",
        HTMLclass:"leave"
    },
node1a2a20a12 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de personnalité des peines et de responsabilité personnelle (articles 8 et 9)"},
        HTMLid:"1a2a20a12",
        HTMLclass:"leave"
    },
node1a2a20a13 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Définition d'une incrimination en matière criminelle et délictuelle (articles 8 et 9)"},
        HTMLid:"1a2a20a13",
        HTMLclass:"leave"
    },
node1a2a20a14 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité du budget de l'État (articles 14 et 15)"},
        HTMLid:"1a2a20a14",
        HTMLclass:"leave"
    },
node1a2a20a15 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de bon usage des deniers publics (articles 14 et 15)"},
        HTMLid:"1a2a20a15",
        HTMLclass:"leave"
    },
node1a2a20a16 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de bonne administration de la justice (articles 14 et 15)"},
        HTMLid:"1a2a20a16",
        HTMLclass:"leave"
    },
node1a2a20a17 = {
        parent: node1a2a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties du droit de propriété (articles 2 et 17)"},
        HTMLid:"1a2a20a17",
        HTMLclass:"leave"
    },
node1a3 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES AFFIRMÉS PAR LE PRÉAMBULE DE LA CONSTITUTION DE 1946"},
        HTMLid:"1a3",
    },
node1a3a1 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Admission de la valeur constitutionnelle du Préambule de la Constitution du 27 octobre 1946"},
        HTMLid:"1a3a1",
        HTMLclass:"leave"
    },
node1a3a2 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 1er - Principes fondamentaux reconnus par les lois de la République"},
        HTMLid:"1a3a2",
    },
node1a3a3 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 1er - Principe de sauvegarde de la dignité de la personne humaine"},
        HTMLid:"1a3a3",
        HTMLclass:"leave"
    },
node1a3a4 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 3 - Égalité entre la femme et l'homme"},
        HTMLid:"1a3a4",
        HTMLclass:"leave"
    },
node1a3a5 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 4 - Droit d'asile"},
        HTMLid:"1a3a5",
        HTMLclass:"leave"
    },
node1a3a6 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 5 - Droit à l'emploi"},
        HTMLid:"1a3a6",
    },
node1a3a6a1 = {
        parent: node1a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'obtenir un emploi"},
        HTMLid:"1a3a6a1",
        HTMLclass:"leave"
    },
node1a3a6a2 = {
        parent: node1a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prohibition de toute discrimination négative dans le travail"},
        HTMLid:"1a3a6a2",
    },
node1a3a7 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 6 - Liberté syndicale"},
        HTMLid:"1a3a7",
        HTMLclass:"leave"
    },
node1a3a8 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 7 - Droit de grève"},
        HTMLid:"1a3a8",
        HTMLclass:"leave"
    },
node1a3a9 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 8 - Principe de participation des travailleurs"},
        HTMLid:"1a3a9",
        HTMLclass:"leave"
    },
node1a3a10 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 9 - Nationalisations et privatisations"},
        HTMLid:"1a3a10",
        HTMLclass:"leave"
    },
node1a3a11 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 10 - Conditions nécessaires au développement de l'individu et de la famille"},
        HTMLid:"1a3a11",
        HTMLclass:"leave"
    },
node1a3a11a1 = {
        parent: node1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de mener une vie familiale normale"},
        HTMLid:"1a3a11a1",
        HTMLclass:"leave"
    },
node1a3a11a2 = {
        parent: node1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection de l'individu et de la famille en matière de pacte civil de solidarité, de filiation et de divorce"},
        HTMLid:"1a3a11a2",
        HTMLclass:"leave"
    },
node1a3a12 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 11"},
        HTMLid:"1a3a12",
    },
node1a3a12a1 = {
        parent: node1a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à des moyens convenables d'existence, protection de la santé et de la sécurité matérielle"},
        HTMLid:"1a3a12a1",
        HTMLclass:"leave"
    },
node1a3a12a1a1 = {
        parent: node1a3a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la protection sociale"},
        HTMLid:"1a3a12a1a1",
        HTMLclass:"leave"
    },
node1a3a12a1a2 = {
        parent: node1a3a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Politique de solidarité nationale en faveur des travailleurs retraités"},
        HTMLid:"1a3a12a1a2",
        HTMLclass:"leave"
    },
node1a3a12a1a3 = {
        parent: node1a3a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la protection de la santé"},
        HTMLid:"1a3a12a1a3",
        HTMLclass:"leave"
    },
node1a3a12a2 = {
        parent: node1a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au repos"},
        HTMLid:"1a3a12a2",
        HTMLclass:"leave"
    },
node1a3a13 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Combinaison des alinéas 10 et 11 du Préambule de la Constitution de 1946"},
        HTMLid:"1a3a13",
    },
node1a3a13a1 = {
        parent: node1a3a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Politique de solidarité nationale en faveur de la famille"},
        HTMLid:"1a3a13a1",
        HTMLclass:"leave"
    },
node1a3a13a2 = {
        parent: node1a3a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection sociale"},
        HTMLid:"1a3a13a2",
        HTMLclass:"leave"
    },
node1a3a13a3 = {
        parent: node1a3a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Possibilité pour toute personne de disposer d'un logement décent"},
        HTMLid:"1a3a13a3",
        HTMLclass:"leave"
    },
node1a3a14 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 12 - Principes de solidarité nationale et d'égalité devant les charges qui résultent des calamités nationales"},
        HTMLid:"1a3a14",
    },
node1a3a14a1 = {
        parent: node1a3a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de solidarité nationale"},
        HTMLid:"1a3a14a1",
        HTMLclass:"leave"
    },
node1a3a14a2 = {
        parent: node1a3a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité de tous les citoyens devant les charges qui résultent des calamités nationales"},
        HTMLid:"1a3a14a2",
        HTMLclass:"leave"
    },
node1a3a15 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 13 - Enseignement, formation professionnelle et culture"},
        HTMLid:"1a3a15",
    },
node1a3a15a1 = {
        parent: node1a3a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public constitutionnel d'enseignement"},
        HTMLid:"1a3a15a1",
        HTMLclass:"leave"
    },
node1a3a15a2 = {
        parent: node1a3a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égal accès à l'instruction"},
        HTMLid:"1a3a15a2",
        HTMLclass:"leave"
    },
node1a3a15a3 = {
        parent: node1a3a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égal accès à la formation professionnelle"},
        HTMLid:"1a3a15a3",
        HTMLclass:"leave"
    },
node1a3a15a4 = {
        parent: node1a3a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égal accès à la culture"},
        HTMLid:"1a3a15a4",
    },
node1a3a16 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 14 - Respect des règles du droit international public"},
        HTMLid:"1a3a16",
        HTMLclass:"leave"
    },
node1a3a17 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 14 - Rejet des guerres de conquête et de l'emploi de la force contre la liberté des peuples"},
        HTMLid:"1a3a17",
        HTMLclass:"leave"
    },
node1a3a18 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéa 15 - Principe de réciprocité"},
        HTMLid:"1a3a18",
        HTMLclass:"leave"
    },
node1a3a19 = {
        parent: node1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Alinéas 16 à 18 - Outre-mer et décolonisation"},
        HTMLid:"1a3a19",
    },
node1a4 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES FONDAMENTAUX RECONNUS PAR LES LOIS DE LA RÉPUBLIQUE"},
        HTMLid:"1a4",
    },
node1a4a1 = {
        parent: node1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de leur valeur constitutionnelle"},
        HTMLid:"1a4a1",
        HTMLclass:"leave"
    },
node1a4a2 = {
        parent: node1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions mises à leur reconnaissance"},
        HTMLid:"1a4a2",
        HTMLclass:"leave"
    },
node1a4a3 = {
        parent: node1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes retenus"},
        HTMLid:"1a4a3",
    },
node1a4a3a1 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté individuelle"},
        HTMLid:"1a4a3a1",
        HTMLclass:"leave"
    },
node1a4a3a2 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de conscience"},
        HTMLid:"1a4a3a2",
        HTMLclass:"leave"
    },
node1a4a3a3 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance de la juridiction administrative"},
        HTMLid:"1a4a3a3",
        HTMLclass:"leave"
    },
node1a4a3a4 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la juridiction administrative"},
        HTMLid:"1a4a3a4",
        HTMLclass:"leave"
    },
node1a4a3a5 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garantie de l'indépendance des professeurs d'université"},
        HTMLid:"1a4a3a5",
        HTMLclass:"leave"
    },
node1a4a3a6 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection de la propriété immobilière par l'autorité judiciaire"},
        HTMLid:"1a4a3a6",
        HTMLclass:"leave"
    },
node1a4a3a7 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des droits de la défense"},
        HTMLid:"1a4a3a7",
        HTMLclass:"leave"
    },
node1a4a3a8 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'association"},
        HTMLid:"1a4a3a8",
        HTMLclass:"leave"
    },
node1a4a3a9 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de l'enseignement"},
        HTMLid:"1a4a3a9",
        HTMLclass:"leave"
    },
node1a4a3a10 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Atténuation de la responsabilité des mineurs et traitement pénal adapté"},
        HTMLid:"1a4a3a10",
        HTMLclass:"leave"
    },
node1a4a3a11 = {
        parent: node1a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions particulières applicables dans les départements du Bas-Rhin, du Haut-Rhin et de la Moselle"},
        HTMLid:"1a4a3a11",
        HTMLclass:"leave"
    },
node1a4a4 = {
        parent: node1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes non retenus"},
        HTMLid:"1a4a4",
    },
node1a4a4a1 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétroactivité de la loi en matière contractuelle"},
        HTMLid:"1a4a4a1",
        HTMLclass:"leave"
    },
node1a4a4a2 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle exclusif de l'État dans le recouvrement de l'impôt"},
        HTMLid:"1a4a4a2",
        HTMLclass:"leave"
    },
node1a4a4a3 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de l'enfant à établir le lien de filiation en cas de procréation médicalement assistée avec tiers donneur"},
        HTMLid:"1a4a4a3",
        HTMLclass:"leave"
    },
node1a4a4a4 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution de la carte du combattant à des Français ayant appartenu à des unités étrangères"},
        HTMLid:"1a4a4a4",
        HTMLclass:"leave"
    },
node1a4a4a5 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe dit « de faveur »"},
        HTMLid:"1a4a4a5",
        HTMLclass:"leave"
    },
node1a4a4a6 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe dit d' universalité des allocations familiales "},
        HTMLid:"1a4a4a6",
        HTMLclass:"leave"
    },
node1a4a4a7 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non imposition de sommes versées à titre d'indemnité"},
        HTMLid:"1a4a4a7",
        HTMLclass:"leave"
    },
node1a4a4a8 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affectation exclusive du produit de la  contribution sociale généralisée  au financement de la sécurité sociale"},
        HTMLid:"1a4a4a8",
        HTMLclass:"leave"
    },
node1a4a4a9 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation de décisions non répressives"},
        HTMLid:"1a4a4a9",
        HTMLclass:"leave"
    },
node1a4a4a10 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présence du ministère public lors de l'audience publique"},
        HTMLid:"1a4a4a10",
        HTMLclass:"leave"
    },
node1a4a4a11 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Clause dite de  compétence générale  des collectivités territoriales"},
        HTMLid:"1a4a4a11",
        HTMLclass:"leave"
    },
node1a4a4a12 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de prescription des poursuites en matière disciplinaire"},
        HTMLid:"1a4a4a12",
        HTMLclass:"leave"
    },
node1a4a4a13 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe selon lequel le mariage est l'union d'un homme et d'une femme"},
        HTMLid:"1a4a4a13",
        HTMLclass:"leave"
    },
node1a4a4a14 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de  filiation bilinéaire fondée sur l'altérité sexuelle "},
        HTMLid:"1a4a4a14",
        HTMLclass:"leave"
    },
node1a4a4a15 = {
        parent: node1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"1a4a4a15",
        HTMLclass:"leave"
    },
node1a5 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CONSTITUTION DU 4 OCTOBRE 1958"},
        HTMLid:"1a5",
    },
node1a5a1 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préambule et article 1er"},
        HTMLid:"1a5a1",
    },
node1a5a1a1 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Deuxième alinéa du Préambule de la Constitution de 1958 : principes relatifs aux populations d'outre-mer"},
        HTMLid:"1a5a1a1",
    },
node1a5a1a1a1 = {
        parent: node1a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de la libre détermination des peuples"},
        HTMLid:"1a5a1a1a1",
    },
node1a5a1a1a2 = {
        parent: node1a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation des populations d'outre-mer intéressées"},
        HTMLid:"1a5a1a1a2",
    },
node1a5a1a1a2a1 = {
        parent: node1a5a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de clarté et de loyauté de la consultation"},
        HTMLid:"1a5a1a1a2a1",
        HTMLclass:"leave"
    },
node1a5a1a1a2a2 = {
        parent: node1a5a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de conformité à la Constitution des orientations statutaires faisant l'objet de la consultation des populations intéressées"},
        HTMLid:"1a5a1a1a2a2",
        HTMLclass:"leave"
    },
node1a5a1a1a2a3 = {
        parent: node1a5a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation sur l'évolution statutaire de la collectivité territoriale concernée"},
        HTMLid:"1a5a1a1a2a3",
        HTMLclass:"leave"
    },
node1a5a1a2 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'indivisibilité de la République (article 1er - ancien article 2)"},
        HTMLid:"1a5a1a2",
        HTMLclass:"leave"
    },
node1a5a1a3 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation décentralisée de la République (article 1er)"},
        HTMLid:"1a5a1a3",
        HTMLclass:"leave"
    },
node1a5a1a4 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'unicité du peuple français (article 1er)"},
        HTMLid:"1a5a1a4",
        HTMLclass:"leave"
    },
node1a5a1a5 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de laïcité (article 1er)"},
        HTMLid:"1a5a1a5",
        HTMLclass:"leave"
    },
node1a5a1a6 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant la loi (article 1er) : Voir Titre 5 Égalité"},
        HTMLid:"1a5a1a6",
        HTMLclass:"leave"
    },
node1a5a1a7 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Discriminations interdites (article 1er)"},
        HTMLid:"1a5a1a7",
        HTMLclass:"leave"
    },
node1a5a1a8 = {
        parent: node1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe selon lequel la loi doit favoriser la parité (en matière politique, professionnelle et sociale) (article 1er alinéa 2 - ancien article 3 alinéa 5)"},
        HTMLid:"1a5a1a8",
    },
node1a5a1a8a1 = {
        parent: node1a5a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parité en matière politique"},
        HTMLid:"1a5a1a8a1",
        HTMLclass:"leave"
    },
node1a5a1a8a2 = {
        parent: node1a5a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parité en matière professionnelle ou sociale"},
        HTMLid:"1a5a1a8a2",
        HTMLclass:"leave"
    },
node1a5a2 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre Ier - De la souveraineté"},
        HTMLid:"1a5a2",
    },
node1a5a2a1 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Langue française (article 2)"},
        HTMLid:"1a5a2a1",
    },
node1a5a2a1a1 = {
        parent: node1a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de sa valeur constitutionnelle"},
        HTMLid:"1a5a2a1a1",
        HTMLclass:"leave"
    },
node1a5a2a1a2 = {
        parent: node1a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"1a5a2a1a2",
        HTMLclass:"leave"
    },
node1a5a2a2 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Symboles de la République (article 2)"},
        HTMLid:"1a5a2a2",
        HTMLclass:"leave"
    },
node1a5a2a3 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de souveraineté nationale (article 3)"},
        HTMLid:"1a5a2a3",
    },
node1a5a2a3a1 = {
        parent: node1a5a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de sa valeur constitutionnelle"},
        HTMLid:"1a5a2a3a1",
        HTMLclass:"leave"
    },
node1a5a2a3a2 = {
        parent: node1a5a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"1a5a2a3a2",
    },
node1a5a2a4 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité du suffrage (article 3)"},
        HTMLid:"1a5a2a4",
        HTMLclass:"leave"
    },
node1a5a2a5 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'universalité du suffrage (article 3)"},
        HTMLid:"1a5a2a5",
        HTMLclass:"leave"
    },
node1a5a2a6 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de secret du suffrage (article 3)"},
        HTMLid:"1a5a2a6",
    },
node1a5a2a7 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité électorale (article 3)"},
        HTMLid:"1a5a2a7",
    },
node1a5a2a8 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe selon lequel la loi doit favoriser la parité (élections politiques) (article 1er alinéa 2 - ancien article 3 alinéa 5)"},
        HTMLid:"1a5a2a8",
    },
node1a5a2a9 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté des partis et groupements politiques (article 4)"},
        HTMLid:"1a5a2a9",
    },
node1a5a2a9a1 = {
        parent: node1a5a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de liberté"},
        HTMLid:"1a5a2a9a1",
        HTMLclass:"leave"
    },
node1a5a2a9a2 = {
        parent: node1a5a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limite : respect des principes de souveraineté nationale et de démocratie (article 4)"},
        HTMLid:"1a5a2a9a2",
    },
node1a5a2a10 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concours des partis et groupements politiques à l'expression du suffrage (article 4)"},
        HTMLid:"1a5a2a10",
        HTMLclass:"leave"
    },
node1a5a2a11 = {
        parent: node1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pluralisme et représentation équitable des partis (article 4)"},
        HTMLid:"1a5a2a11",
        HTMLclass:"leave"
    },
node1a5a3 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre II - Le Président de la République"},
        HTMLid:"1a5a3",
    },
node1a5a3a1 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 5 - Missions du Président de la République"},
        HTMLid:"1a5a3a1",
        HTMLclass:"leave"
    },
node1a5a3a2 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 5 - Principe de la continuité de la vie nationale"},
        HTMLid:"1a5a3a2",
        HTMLclass:"leave"
    },
node1a5a3a3 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 5 - Principe de l'indépendance nationale"},
        HTMLid:"1a5a3a3",
        HTMLclass:"leave"
    },
node1a5a3a4 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 5 et 16 : Fonctionnement régulier des pouvoirs publics"},
        HTMLid:"1a5a3a4",
        HTMLclass:"leave"
    },
node1a5a3a5 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 6 - Durée du mandat et mode d'élection"},
        HTMLid:"1a5a3a5",
    },
node1a5a3a6 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 7 - Modalités de l'élection présidentielle, vacance, empêchement, intérim"},
        HTMLid:"1a5a3a6",
    },
node1a5a3a7 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 8 - Nomination et cessation de fonctions des membres du Gouvernement"},
        HTMLid:"1a5a3a7",
    },
node1a5a3a8 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 9 - Présidence du Conseil des ministres"},
        HTMLid:"1a5a3a8",
    },
node1a5a3a9 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 10 - Promulgation des lois et demande d'une nouvelle délibération."},
        HTMLid:"1a5a3a9",
    },
node1a5a3a10 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 11 - Référendum"},
        HTMLid:"1a5a3a10",
        HTMLclass:"leave"
    },
node1a5a3a11 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 12 - Pouvoir de dissolution de l'Assemblée nationale"},
        HTMLid:"1a5a3a11",
    },
node1a5a3a12 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 12 - Conséquences de la dissolution"},
        HTMLid:"1a5a3a12",
    },
node1a5a3a13 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 13 - Signature des décrets et ordonnances délibérés en Conseil des ministres"},
        HTMLid:"1a5a3a13",
    },
node1a5a3a14 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 13 - Pouvoir de nomination"},
        HTMLid:"1a5a3a14",
        HTMLclass:"leave"
    },
node1a5a3a15 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 14 - Accréditation des ambassadeurs"},
        HTMLid:"1a5a3a15",
    },
node1a5a3a16 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 15 - Responsabilités en matière de défense"},
        HTMLid:"1a5a3a16",
        HTMLclass:"leave"
    },
node1a5a3a17 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 16 - Pouvoirs exceptionnels"},
        HTMLid:"1a5a3a17",
    },
node1a5a3a17a1 = {
        parent: node1a5a3a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctionnement régulier des pouvoirs publics"},
        HTMLid:"1a5a3a17a1",
    },
node1a5a3a17a2 = {
        parent: node1a5a3a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de réviser la Constitution en période d'application de l'article 16"},
        HTMLid:"1a5a3a17a2",
        HTMLclass:"leave"
    },
node1a5a3a17a3 = {
        parent: node1a5a3a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultations"},
        HTMLid:"1a5a3a17a3",
    },
node1a5a3a18 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 17 - Droit de grâce"},
        HTMLid:"1a5a3a18",
    },
node1a5a3a19 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 18 - Communication avec le Parlement"},
        HTMLid:"1a5a3a19",
        HTMLclass:"leave"
    },
node1a5a3a20 = {
        parent: node1a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes soumis à contreseing (article 19)"},
        HTMLid:"1a5a3a20",
    },
node1a5a4 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre III - Le Gouvernement (articles 20 à 23)"},
        HTMLid:"1a5a4",
        HTMLclass:"leave"
    },
node1a5a5 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre IV - Le Parlement"},
        HTMLid:"1a5a5",
    },
node1a5a5a1 = {
        parent: node1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions du Parlement (art. 24, al. 1)"},
        HTMLid:"1a5a5a1",
        HTMLclass:"leave"
    },
node1a5a5a2 = {
        parent: node1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assemblée nationale (art. 24, al. 3)"},
        HTMLid:"1a5a5a2",
        HTMLclass:"leave"
    },
node1a5a5a3 = {
        parent: node1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sénat (article 24, alinéa 4)"},
        HTMLid:"1a5a5a3",
    },
node1a5a5a4 = {
        parent: node1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de nullité du mandat impératif (article 27, al. 1)"},
        HTMLid:"1a5a5a4",
        HTMLclass:"leave"
    },
node1a5a5a5 = {
        parent: node1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du vote personnel (article 27, al. 2 et 3)"},
        HTMLid:"1a5a5a5",
    },
node1a5a6 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre V - Des rapports entre le Gouvernement et le Parlement"},
        HTMLid:"1a5a6",
    },
node1a5a6a1 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur (article 34)"},
        HTMLid:"1a5a6a1",
    },
node1a5a6a1a1 = {
        parent: node1a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine de la loi"},
        HTMLid:"1a5a6a1a1",
        HTMLclass:"leave"
    },
node1a5a6a1a2 = {
        parent: node1a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine de la loi de finances et de la loi de financement de la sécurité sociale"},
        HTMLid:"1a5a6a1a2",
    },
node1a5a6a1a3 = {
        parent: node1a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de programmation"},
        HTMLid:"1a5a6a1a3",
        HTMLclass:"leave"
    },
node1a5a6a1a4 = {
        parent: node1a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté de la loi (article 34)"},
        HTMLid:"1a5a6a1a4",
        HTMLclass:"leave"
    },
node1a5a6a2 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de résolution des assemblées (article 34-1)"},
        HTMLid:"1a5a6a2",
    },
node1a5a6a3 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration de guerre et intervention des forces armées (article 35)"},
        HTMLid:"1a5a6a3",
        HTMLclass:"leave"
    },
node1a5a6a4 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "État de siège (article 36)"},
        HTMLid:"1a5a6a4",
        HTMLclass:"leave"
    },
node1a5a6a5 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine du règlement (article 37 alinéa 1)"},
        HTMLid:"1a5a6a5",
        HTMLclass:"leave"
    },
node1a5a6a6 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure de délégalisation (article 37 alinéa 2)"},
        HTMLid:"1a5a6a6",
    },
node1a5a6a7 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions à caractère expérimental (article 37-1)"},
        HTMLid:"1a5a6a7",
        HTMLclass:"leave"
    },
node1a5a6a8 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances (article 38)"},
        HTMLid:"1a5a6a8",
        HTMLclass:"leave"
    },
node1a5a6a9 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Initiative, présentation et dépôt des projets et propositions de lois (article 39)"},
        HTMLid:"1a5a6a9",
        HTMLclass:"leave"
    },
node1a5a6a10 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité financière (article 40)"},
        HTMLid:"1a5a6a10",
        HTMLclass:"leave"
    },
node1a5a6a11 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité législative (article 41)"},
        HTMLid:"1a5a6a11",
        HTMLclass:"leave"
    },
node1a5a6a12 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de valeur constitutionnelle relatives à la procédure législative (articles 42 à 45)"},
        HTMLid:"1a5a6a12",
        HTMLclass:"leave"
    },
node1a5a6a12a1 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du détournement de procédure"},
        HTMLid:"1a5a6a12a1",
        HTMLclass:"leave"
    },
node1a5a6a12a2 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Usage non manifestement excessif des procédures mises à la disposition des parlementaires et du Gouvernement"},
        HTMLid:"1a5a6a12a2",
        HTMLclass:"leave"
    },
node1a5a6a12a3 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation du Conseil d'État sur les projets et propositions de loi"},
        HTMLid:"1a5a6a12a3",
    },
node1a5a6a12a4 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de sincérité des débats"},
        HTMLid:"1a5a6a12a4",
        HTMLclass:"leave"
    },
node1a5a6a12a5 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du droit d'amendement"},
        HTMLid:"1a5a6a12a5",
        HTMLclass:"leave"
    },
node1a5a6a12a6 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Travaux de la commission mixte paritaire"},
        HTMLid:"1a5a6a12a6",
        HTMLclass:"leave"
    },
node1a5a6a12a7 = {
        parent: node1a5a6a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lecture définitive"},
        HTMLid:"1a5a6a12a7",
        HTMLclass:"leave"
    },
node1a5a6a13 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime juridique des lois organiques (article 46)"},
        HTMLid:"1a5a6a13",
    },
node1a5a6a14 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote des lois de finances (article 47)"},
        HTMLid:"1a5a6a14",
    },
node1a5a6a15 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote des lois de financement de la sécurité sociale (article 47-1)"},
        HTMLid:"1a5a6a15",
    },
node1a5a6a16 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle de la Cour des comptes (article 47-2 alinéa 1)"},
        HTMLid:"1a5a6a16",
        HTMLclass:"leave"
    },
node1a5a6a17 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de régularité et de sincérité des comptes des administrations publiques (article 47-2 alinéa 2)"},
        HTMLid:"1a5a6a17",
    },
node1a5a6a18 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre du jour et contrôle de l'action du Gouvernement (article 48)"},
        HTMLid:"1a5a6a18",
        HTMLclass:"leave"
    },
node1a5a6a19 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en jeu de la responsabilité du Gouvernement (article 49)"},
        HTMLid:"1a5a6a19",
        HTMLclass:"leave"
    },
node1a5a6a20 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Approbation par le Sénat d'une déclaration de politique générale (article 49)"},
        HTMLid:"1a5a6a20",
        HTMLclass:"leave"
    },
node1a5a6a21 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motion de censure (article 50)"},
        HTMLid:"1a5a6a21",
    },
node1a5a6a22 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration Gouvernementale sans mise en jeu de la responsabilité (article 50-1)"},
        HTMLid:"1a5a6a22",
    },
node1a5a6a23 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prorogation de la session parlementaire (article 51)"},
        HTMLid:"1a5a6a23",
    },
node1a5a6a24 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits des groupes parlementaires (article 51-1)"},
        HTMLid:"1a5a6a24",
        HTMLclass:"leave"
    },
node1a5a6a25 = {
        parent: node1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commissions d'enquêtes (article 51-2)"},
        HTMLid:"1a5a6a25",
        HTMLclass:"leave"
    },
node1a5a7 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre VI - Des traités et accords internationaux"},
        HTMLid:"1a5a7",
    },
node1a5a7a1 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Négociation et ratification des traités - fonctions du Président de la République (article 52)"},
        HTMLid:"1a5a7a1",
    },
node1a5a7a2 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 53 de la Constitution"},
        HTMLid:"1a5a7a2",
    },
node1a5a7a2a1 = {
        parent: node1a5a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification et approbation des traités et accords internationaux (article 53 alinéas 1 et 2)"},
        HTMLid:"1a5a7a2a1",
    },
node1a5a7a2a2 = {
        parent: node1a5a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de libre détermination des peuples d'outre-mer et de libre manifestation de leur volonté (article 53 alinéa 3)"},
        HTMLid:"1a5a7a2a2",
        HTMLclass:"leave"
    },
node1a5a7a3 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'asile (article 53-1)"},
        HTMLid:"1a5a7a3",
    },
node1a5a7a4 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour pénale internationale (article 53-2)"},
        HTMLid:"1a5a7a4",
    },
node1a5a7a5 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la constitutionnalité des traités et accords internationaux (article 54)"},
        HTMLid:"1a5a7a5",
    },
node1a5a7a6 = {
        parent: node1a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités des traités et accords internationaux (article 55 de la Constitution)"},
        HTMLid:"1a5a7a6",
    },
node1a5a8 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre VII - Le Conseil Constitutionnel"},
        HTMLid:"1a5a8",
    },
node1a5a8a1 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'indépendance du Conseil constitutionnel"},
        HTMLid:"1a5a8a1",
        HTMLclass:"leave"
    },
node1a5a8a2 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition du Conseil constitutionnel et nomination des membres (article 56)"},
        HTMLid:"1a5a8a2",
    },
node1a5a8a3 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités avec les fonctions de membre du Conseil constitutionnel (article 57)"},
        HTMLid:"1a5a8a3",
    },
node1a5a8a4 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétences du Conseil constitutionnel en matière d'élection présidentielle (article 58)"},
        HTMLid:"1a5a8a4",
    },
node1a5a8a5 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétences du Conseil constitutionnel en matière d'élections législatives et sénatoriales (article 59)"},
        HTMLid:"1a5a8a5",
    },
node1a5a8a6 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétences du Conseil constitutionnel en matière de référendums nationaux (article 60)"},
        HTMLid:"1a5a8a6",
    },
node1a5a8a7 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle a priori de la constitutionnalité des lois, des référendums de l'article 11 alinéa 3 et des règlements d'assemblée (article 61)"},
        HTMLid:"1a5a8a7",
    },
node1a5a8a7a1 = {
        parent: node1a5a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle obligatoire de constitutionnalité (article 61 alinéa 1er)"},
        HTMLid:"1a5a8a7a1",
    },
node1a5a8a7a1a1 = {
        parent: node1a5a8a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des lois organiques"},
        HTMLid:"1a5a8a7a1a1",
    },
node1a5a8a7a1a2 = {
        parent: node1a5a8a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des propositions de loi référendaire"},
        HTMLid:"1a5a8a7a1a2",
        HTMLclass:"leave"
    },
node1a5a8a7a1a3 = {
        parent: node1a5a8a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des règlements d'assemblée"},
        HTMLid:"1a5a8a7a1a3",
    },
node1a5a8a7a1a3a1 = {
        parent: node1a5a8a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Les règlements des assemblées n'ont pas en eux-mêmes valeur constitutionnelle"},
        HTMLid:"1a5a8a7a1a3a1",
    },
node1a5a8a7a1a3a2 = {
        parent: node1a5a8a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence pour le contrôle de constitutionnalité des règlements des assemblées"},
        HTMLid:"1a5a8a7a1a3a2",
        HTMLclass:"leave"
    },
node1a5a8a7a1a3a3 = {
        parent: node1a5a8a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etendue et limites de la compétence du Conseil constitutionnel"},
        HTMLid:"1a5a8a7a1a3a3",
        HTMLclass:"leave"
    },
node1a5a8a7a2 = {
        parent: node1a5a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle facultatif de constitutionnalité des lois (article 61 alinéa 2)"},
        HTMLid:"1a5a8a7a2",
    },
node1a5a8a8 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle a posteriori de la constitutionnalité des lois - Question prioritaire de constitutionnalité (article 61-1)"},
        HTMLid:"1a5a8a8",
        HTMLclass:"leave"
    },
node1a5a8a9 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets et autorité de chose jugée des décisions du Conseil constitutionnel (article 62)"},
        HTMLid:"1a5a8a9",
        HTMLclass:"leave"
    },
node1a5a8a10 = {
        parent: node1a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'organisation et au fonctionnement du Conseil constitutionnel (article 63)"},
        HTMLid:"1a5a8a10",
    },
node1a5a9 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre VIII - De l'autorité judiciaire"},
        HTMLid:"1a5a9",
    },
node1a5a9a1 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance de l'autorité judiciaire (article 64)"},
        HTMLid:"1a5a9a1",
        HTMLclass:"leave"
    },
node1a5a9a2 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inamovibilité des magistrats du siège (article 64)"},
        HTMLid:"1a5a9a2",
        HTMLclass:"leave"
    },
node1a5a9a3 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil Supérieur de la Magistrature (article 65)"},
        HTMLid:"1a5a9a3",
        HTMLclass:"leave"
    },
node1a5a9a4 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de la détention arbitraire (article 66)"},
        HTMLid:"1a5a9a4",
        HTMLclass:"leave"
    },
node1a5a9a5 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité judiciaire gardienne de la liberté individuelle (article 66)"},
        HTMLid:"1a5a9a5",
        HTMLclass:"leave"
    },
node1a5a9a6 = {
        parent: node1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de la peine de mort (article 66-1)"},
        HTMLid:"1a5a9a6",
    },
node1a5a10 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre IX - De la Haute Cour"},
        HTMLid:"1a5a10",
        HTMLclass:"leave"
    },
node1a5a11 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre X - De la responsabilité des membres du Gouvernement"},
        HTMLid:"1a5a11",
    },
node1a5a12 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XI - Le Conseil économique social et environnemental"},
        HTMLid:"1a5a12",
        HTMLclass:"leave"
    },
node1a5a13 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XI bis - Le Défenseur des droits"},
        HTMLid:"1a5a13",
        HTMLclass:"leave"
    },
node1a5a14 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XII - Des collectivités territoriales"},
        HTMLid:"1a5a14",
    },
node1a5a14a1 = {
        parent: node1a5a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de libre administration des collectivités territoriales (article 72 de la Constitution)"},
        HTMLid:"1a5a14a1",
        HTMLclass:"leave"
    },
node1a5a14a2 = {
        parent: node1a5a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres principes et règles applicables aux collectivités locales (articles 72 à 74-1 de la Constitution)"},
        HTMLid:"1a5a14a2",
        HTMLclass:"leave"
    },
node1a5a14a3 = {
        parent: node1a5a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application du statut civil de droit local (article 75)"},
        HTMLid:"1a5a14a3",
        HTMLclass:"leave"
    },
node1a5a14a4 = {
        parent: node1a5a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Les langues régionales, élément du patrimoine de la France (article 75-1)"},
        HTMLid:"1a5a14a4",
        HTMLclass:"leave"
    },
node1a5a15 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XIII - Dispositions transitoires relatives à la Nouvelle-Calédonie"},
        HTMLid:"1a5a15",
        HTMLclass:"leave"
    },
node1a5a16 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XV - Des Communautés européennes et de l'Union européenne"},
        HTMLid:"1a5a16",
    },
node1a5a16a1 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de participation de la République aux Communautés européennes et à l'Union européenne (article 88-1)"},
        HTMLid:"1a5a16a1",
    },
node1a5a16a1a1 = {
        parent: node1a5a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de la spécificité de l'ordre juridique communautaire ou de l'Union européenne"},
        HTMLid:"1a5a16a1a1",
        HTMLclass:"leave"
    },
node1a5a16a1a2 = {
        parent: node1a5a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence constitutionnelle de transposition des directives communautaires"},
        HTMLid:"1a5a16a1a2",
        HTMLclass:"leave"
    },
node1a5a16a2 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de vote et d'éligibilité des citoyens de l'Union aux élections municipales"},
        HTMLid:"1a5a16a2",
        HTMLclass:"leave"
    },
node1a5a16a3 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandat d'arrêt européen (article 88-2)"},
        HTMLid:"1a5a16a3",
    },
node1a5a16a4 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Information du Parlement (article 88-4)"},
        HTMLid:"1a5a16a4",
    },
node1a5a16a5 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum relatif à l'adhésion d'un État à l'Union européenne (article 88-5)"},
        HTMLid:"1a5a16a5",
    },
node1a5a16a6 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du Parlement sur le respect du principe de subsidiarité (article 88-6)"},
        HTMLid:"1a5a16a6",
        HTMLclass:"leave"
    },
node1a5a16a7 = {
        parent: node1a5a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du Parlement sur la procédure de révision simplifiée des traités de l'Union européenne (article 88-7)"},
        HTMLid:"1a5a16a7",
    },
node1a5a17 = {
        parent: node1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titre XVI - De la Révision (article 89)"},
        HTMLid:"1a5a17",
    },
node1a6 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CHARTE DE L'ENVIRONNEMENT"},
        HTMLid:"1a6",
    },
node1a6a1 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Valeur constitutionnelle des droits et devoirs contenus dans la Charte"},
        HTMLid:"1a6a1",
        HTMLclass:"leave"
    },
node1a6a2 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préambule"},
        HTMLid:"1a6a2",
        HTMLclass:"leave"
    },
node1a6a3 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1er - Droit de vivre dans un environnement équilibré et respectueux de la santé"},
        HTMLid:"1a6a3",
        HTMLclass:"leave"
    },
node1a6a4 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 2 - Devoir de prendre part à la préservation et à l'amélioration de l'environnement"},
        HTMLid:"1a6a4",
        HTMLclass:"leave"
    },
node1a6a5 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 3 - Devoir de prévenir les atteintes à l'environnement ou d'en limiter les conséquences"},
        HTMLid:"1a6a5",
        HTMLclass:"leave"
    },
node1a6a6 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 4 - Contribution à la réparation des dommages"},
        HTMLid:"1a6a6",
        HTMLclass:"leave"
    },
node1a6a7 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 5 - Principe de précaution"},
        HTMLid:"1a6a7",
        HTMLclass:"leave"
    },
node1a6a8 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 6 - Exigence de promotion du développement durable"},
        HTMLid:"1a6a8",
        HTMLclass:"leave"
    },
node1a6a9 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 7 - Droit d'accès aux informations et droit de participation"},
        HTMLid:"1a6a9",
    },
node1a6a9a1 = {
        parent: node1a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'accéder aux informations relatives à l'environnement"},
        HTMLid:"1a6a9a1",
        HTMLclass:"leave"
    },
node1a6a9a2 = {
        parent: node1a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de participation à l'élaboration des décisions publiques ayant une incidence sur l'environnement"},
        HTMLid:"1a6a9a2",
        HTMLclass:"leave"
    },
node1a6a10 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 8 - Éducation et formation à l'environnement"},
        HTMLid:"1a6a10",
    },
node1a6a11 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 9 - Recherche et innovation"},
        HTMLid:"1a6a11",
    },
node1a6a12 = {
        parent: node1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 10 - Action européenne et internationale de la France"},
        HTMLid:"1a6a12",
    },
node1a7 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "OBJECTIFS DE VALEUR CONSTITUTIONNELLE"},
        HTMLid:"1a7",
    },
node1a7a1 = {
        parent: node1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retenus"},
        HTMLid:"1a7a1",
    },
node1a7a1a1 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sauvegarde de l'ordre public"},
        HTMLid:"1a7a1a1",
        HTMLclass:"leave"
    },
node1a7a1a2 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recherche des auteurs d'infractions"},
        HTMLid:"1a7a1a2",
        HTMLclass:"leave"
    },
node1a7a1a3 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pluralisme"},
        HTMLid:"1a7a1a3",
        HTMLclass:"leave"
    },
node1a7a1a4 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Possibilité pour toute personne de disposer d'un logement décent"},
        HTMLid:"1a7a1a4",
        HTMLclass:"leave"
    },
node1a7a1a5 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lutte contre la fraude et l'évasion fiscales"},
        HTMLid:"1a7a1a5",
        HTMLclass:"leave"
    },
node1a7a1a6 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accessibilité et intelligibilité de la loi"},
        HTMLid:"1a7a1a6",
        HTMLclass:"leave"
    },
node1a7a1a7 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Équilibre financier de la sécurité sociale"},
        HTMLid:"1a7a1a7",
        HTMLclass:"leave"
    },
node1a7a1a8 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égal accès des femmes et des hommes aux mandats électoraux et fonctions électives"},
        HTMLid:"1a7a1a8",
        HTMLclass:"leave"
    },
node1a7a1a9 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bon usage des deniers publics"},
        HTMLid:"1a7a1a9",
        HTMLclass:"leave"
    },
node1a7a1a10 = {
        parent: node1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bonne administration de la justice"},
        HTMLid:"1a7a1a10",
        HTMLclass:"leave"
    },
node1a7a2 = {
        parent: node1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non retenus"},
        HTMLid:"1a7a2",
    },
node1a7a2a1 = {
        parent: node1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Monopole de la Banque de France de l'émission des billets"},
        HTMLid:"1a7a2a1",
        HTMLclass:"leave"
    },
node1a7a2a2 = {
        parent: node1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection du patrimoine génétique de l'humanité"},
        HTMLid:"1a7a2a2",
        HTMLclass:"leave"
    },
node1a7a2a3 = {
        parent: node1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de précaution"},
        HTMLid:"1a7a2a3",
        HTMLclass:"leave"
    },
node1a8 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "AUTRES PRINCIPES CONSTITUTIONNELS RÉSULTANT DE LA COMBINAISON DE PLUSIEURS DISPOSITIONS"},
        HTMLid:"1a8",
        HTMLclass:"leave"
    },
node1a8a1 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de précision de la loi pénale (article 8 de la Déclaration de 1789 et article 34 de la Constitution de 1958)"},
        HTMLid:"1a8a1",
        HTMLclass:"leave"
    },
node1a8a2 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de l'intervention d'une autorité de jugement pour prononcer une sanction pénale"},
        HTMLid:"1a8a2",
        HTMLclass:"leave"
    },
node1a8a3 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe selon lequel ne sauraient être confiées à des personnes de nationalité étrangère, ou représentant un organisme international, des fonctions inséparables de l'exercice de la souveraineté nationale (article 3 de la Déclaration de 1789 et 3 de la Constitution de 1958)"},
        HTMLid:"1a8a3",
        HTMLclass:"leave"
    },
node1a8a4 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité entre les groupes parlementaires (article 6 de la Déclaration de 1789 et 3 de la Constitution de 1958)"},
        HTMLid:"1a8a4",
        HTMLclass:"leave"
    },
node1a8a5 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de sincérité des débats parlementaires"},
        HTMLid:"1a8a5",
        HTMLclass:"leave"
    },
node1a8a6 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Missions de souveraineté dont l'exercice n'appartient qu'à l'État"},
        HTMLid:"1a8a6",
        HTMLclass:"leave"
    },
node1a8a7 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes constitutionnels s'attachant à l'accomplissement de missions de service public"},
        HTMLid:"1a8a7",
        HTMLclass:"leave"
    },
node1a8a8 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de l'application uniforme des « règles de souveraineté » et relatives aux droits et libertés sur l'ensemble du territoire de la République"},
        HTMLid:"1a8a8",
        HTMLclass:"leave"
    },
node1a8a9 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de la continuité des services publics"},
        HTMLid:"1a8a9",
        HTMLclass:"leave"
    },
node1a8a10 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de protection du domaine public"},
        HTMLid:"1a8a10",
        HTMLclass:"leave"
    },
node1a8a11 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de protection du patrimoine des personnes publiques"},
        HTMLid:"1a8a11",
        HTMLclass:"leave"
    },
node1a8a12 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de représentation pour la désignation de l'assemblée d'un territoire d'outre-mer"},
        HTMLid:"1a8a12",
        HTMLclass:"leave"
    },
node1a8a13 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de représentation pour l'élection de l'Assemblée nationale"},
        HTMLid:"1a8a13",
        HTMLclass:"leave"
    },
node1a8a14 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de représentation pour l'élection des sénateurs"},
        HTMLid:"1a8a14",
        HTMLclass:"leave"
    },
node1a8a15 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de représentation pour l'élection des conseillers municipaux"},
        HTMLid:"1a8a15",
        HTMLclass:"leave"
    },
node1a8a16 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de normativité de la loi"},
        HTMLid:"1a8a16",
        HTMLclass:"leave"
    },
node1a8a17 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de libre détermination des peuples d'outre-mer"},
        HTMLid:"1a8a17",
    },
node1a8a18 = {
        parent: node1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de loyauté des consultations"},
        HTMLid:"1a8a18",
    },
node1a9 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "NORMES DE RÉFÉRENCE NON RETENUES ET ÉLÉMENTS NON PRIS EN CONSIDÉRATION"},
        HTMLid:"1a9",
    },
node1a9a1 = {
        parent: node1a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence non retenues pour le contrôle de constitutionnalité des lois"},
        HTMLid:"1a9a1",
    },
node1a9a1a1 = {
        parent: node1a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traités et accords internationaux"},
        HTMLid:"1a9a1a1",
    },
node1a9a1a1a1 = {
        parent: node1a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation du principe"},
        HTMLid:"1a9a1a1a1",
        HTMLclass:"leave"
    },
node1a9a1a1a2 = {
        parent: node1a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"1a9a1a1a2",
        HTMLclass:"leave"
    },
node1a9a1a2 = {
        parent: node1a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlement d'une assemblée"},
        HTMLid:"1a9a1a2",
        HTMLclass:"leave"
    },
node1a9a1a3 = {
        parent: node1a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Disposition à laquelle la Constitution renvoie mais non encore entrée en vigueur"},
        HTMLid:"1a9a1a3",
        HTMLclass:"leave"
    },
node1a9a2 = {
        parent: node1a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes non retenus pour le contrôle de conformité à la Constitution"},
        HTMLid:"1a9a2",
    },
node1a9a2a1 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe dit de « confiance légitime »"},
        HTMLid:"1a9a2a1",
        HTMLclass:"leave"
    },
node1a9a2a2 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'autonomie des branches de la sécurité sociale"},
        HTMLid:"1a9a2a2",
        HTMLclass:"leave"
    },
node1a9a2a3 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe dit « de continuité territoriale »"},
        HTMLid:"1a9a2a3",
        HTMLclass:"leave"
    },
node1a9a2a4 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du double degré de juridiction"},
        HTMLid:"1a9a2a4",
        HTMLclass:"leave"
    },
node1a9a2a5 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'autonomie fiscale des collectivités territoriales"},
        HTMLid:"1a9a2a5",
        HTMLclass:"leave"
    },
node1a9a2a6 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe selon lequel des corps de fonctionnaires de l'État ne peuvent être constitués et maintenus qu'en vue de pourvoir à l'exécution de missions de service public"},
        HTMLid:"1a9a2a6",
        HTMLclass:"leave"
    },
node1a9a2a7 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes applicables aux personnes publiques"},
        HTMLid:"1a9a2a7",
        HTMLclass:"leave"
    },
node1a9a2a7a1 = {
        parent: node1a9a2a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de l'interdiction du recours à l'arbitrage par les personnes publiques"},
        HTMLid:"1a9a2a7a1",
        HTMLclass:"leave"
    },
node1a9a2a8 = {
        parent: node1a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de publicité des séances et des votes des délibérations des assemblées locales"},
        HTMLid:"1a9a2a8",
        HTMLclass:"leave"
    },
node1a9a3 = {
        parent: node1a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Eléments non pris en considération"},
        HTMLid:"1a9a3",
    },
node1a9a3a1 = {
        parent: node1a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Insertion d'une loi dans le droit existant"},
        HTMLid:"1a9a3a1",
        HTMLclass:"leave"
    },
node1a9a3a2 = {
        parent: node1a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions ultérieures d'application"},
        HTMLid:"1a9a3a2",
        HTMLclass:"leave"
    },
node1a9a3a3 = {
        parent: node1a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Implications sur le plan international"},
        HTMLid:"1a9a3a3",
        HTMLclass:"leave"
    },
node1a10 = {
        parent: node1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "QUESTIONS RÉSERVÉES"},
        HTMLid:"1a10",
    },
node1a10a1 = {
        parent: node1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du libre choix du médecin"},
        HTMLid:"1a10a1",
        HTMLclass:"leave"
    },
tree_config1 = [config,node1,node1a1,node1a1a1,node1a1a1a1,node1a1a1a1a1,node1a1a1a1a2,node1a1a1a2,node1a1a1a2a1,node1a1a1a2a1a1,node1a1a1a2a1a2,node1a1a1a3,node1a1a2,node1a1a3,node1a2,node1a2a1,node1a2a2,node1a2a2a1,node1a2a3,node1a2a3a1,node1a2a3a2,node1a2a3a3,node1a2a3a4,node1a2a3a5,node1a2a3a6,node1a2a3a7,node1a2a3a8,node1a2a3a9,node1a2a4,node1a2a4a1,node1a2a5,node1a2a5a1,node1a2a5a2,node1a2a5a3,node1a2a6,node1a2a7,node1a2a7a1,node1a2a7a1a1,node1a2a7a1a2,node1a2a7a2,node1a2a7a3,node1a2a8,node1a2a9,node1a2a9a1,node1a2a9a2,node1a2a9a3,node1a2a9a4,node1a2a9a5,node1a2a10,node1a2a10a1,node1a2a10a2,node1a2a11,node1a2a12,node1a2a13,node1a2a14,node1a2a15,node1a2a15a1,node1a2a15a2,node1a2a15a3,node1a2a16,node1a2a16a1,node1a2a16a2,node1a2a16a3,node1a2a16a4,node1a2a17,node1a2a17a1,node1a2a17a2,node1a2a18,node1a2a18a1,node1a2a18a2,node1a2a18a2a1,node1a2a18a2a2,node1a2a18a2a3,node1a2a18a2a4,node1a2a18a2a5,node1a2a18a3,node1a2a18a4,node1a2a18a5,node1a2a18a6,node1a2a19,node1a2a20,node1a2a20a1,node1a2a20a2,node1a2a20a3,node1a2a20a4,node1a2a20a5,node1a2a20a6,node1a2a20a7,node1a2a20a8,node1a2a20a9,node1a2a20a10,node1a2a20a11,node1a2a20a12,node1a2a20a13,node1a2a20a14,node1a2a20a15,node1a2a20a16,node1a2a20a17,node1a3,node1a3a1,node1a3a2,node1a3a3,node1a3a4,node1a3a5,node1a3a6,node1a3a6a1,node1a3a6a2,node1a3a7,node1a3a8,node1a3a9,node1a3a10,node1a3a11,node1a3a11a1,node1a3a11a2,node1a3a12,node1a3a12a1,node1a3a12a1a1,node1a3a12a1a2,node1a3a12a1a3,node1a3a12a2,node1a3a13,node1a3a13a1,node1a3a13a2,node1a3a13a3,node1a3a14,node1a3a14a1,node1a3a14a2,node1a3a15,node1a3a15a1,node1a3a15a2,node1a3a15a3,node1a3a15a4,node1a3a16,node1a3a17,node1a3a18,node1a3a19,node1a4,node1a4a1,node1a4a2,node1a4a3,node1a4a3a1,node1a4a3a2,node1a4a3a3,node1a4a3a4,node1a4a3a5,node1a4a3a6,node1a4a3a7,node1a4a3a8,node1a4a3a9,node1a4a3a10,node1a4a3a11,node1a4a4,node1a4a4a1,node1a4a4a2,node1a4a4a3,node1a4a4a4,node1a4a4a5,node1a4a4a6,node1a4a4a7,node1a4a4a8,node1a4a4a9,node1a4a4a10,node1a4a4a11,node1a4a4a12,node1a4a4a13,node1a4a4a14,node1a4a4a15,node1a5,node1a5a1,node1a5a1a1,node1a5a1a1a1,node1a5a1a1a2,node1a5a1a1a2a1,node1a5a1a1a2a2,node1a5a1a1a2a3,node1a5a1a2,node1a5a1a3,node1a5a1a4,node1a5a1a5,node1a5a1a6,node1a5a1a7,node1a5a1a8,node1a5a1a8a1,node1a5a1a8a2,node1a5a2,node1a5a2a1,node1a5a2a1a1,node1a5a2a1a2,node1a5a2a2,node1a5a2a3,node1a5a2a3a1,node1a5a2a3a2,node1a5a2a4,node1a5a2a5,node1a5a2a6,node1a5a2a7,node1a5a2a8,node1a5a2a9,node1a5a2a9a1,node1a5a2a9a2,node1a5a2a10,node1a5a2a11,node1a5a3,node1a5a3a1,node1a5a3a2,node1a5a3a3,node1a5a3a4,node1a5a3a5,node1a5a3a6,node1a5a3a7,node1a5a3a8,node1a5a3a9,node1a5a3a10,node1a5a3a11,node1a5a3a12,node1a5a3a13,node1a5a3a14,node1a5a3a15,node1a5a3a16,node1a5a3a17,node1a5a3a17a1,node1a5a3a17a2,node1a5a3a17a3,node1a5a3a18,node1a5a3a19,node1a5a3a20,node1a5a4,node1a5a5,node1a5a5a1,node1a5a5a2,node1a5a5a3,node1a5a5a4,node1a5a5a5,node1a5a6,node1a5a6a1,node1a5a6a1a1,node1a5a6a1a2,node1a5a6a1a3,node1a5a6a1a4,node1a5a6a2,node1a5a6a3,node1a5a6a4,node1a5a6a5,node1a5a6a6,node1a5a6a7,node1a5a6a8,node1a5a6a9,node1a5a6a10,node1a5a6a11,node1a5a6a12,node1a5a6a12a1,node1a5a6a12a2,node1a5a6a12a3,node1a5a6a12a4,node1a5a6a12a5,node1a5a6a12a6,node1a5a6a12a7,node1a5a6a13,node1a5a6a14,node1a5a6a15,node1a5a6a16,node1a5a6a17,node1a5a6a18,node1a5a6a19,node1a5a6a20,node1a5a6a21,node1a5a6a22,node1a5a6a23,node1a5a6a24,node1a5a6a25,node1a5a7,node1a5a7a1,node1a5a7a2,node1a5a7a2a1,node1a5a7a2a2,node1a5a7a3,node1a5a7a4,node1a5a7a5,node1a5a7a6,node1a5a8,node1a5a8a1,node1a5a8a2,node1a5a8a3,node1a5a8a4,node1a5a8a5,node1a5a8a6,node1a5a8a7,node1a5a8a7a1,node1a5a8a7a1a1,node1a5a8a7a1a2,node1a5a8a7a1a3,node1a5a8a7a1a3a1,node1a5a8a7a1a3a2,node1a5a8a7a1a3a3,node1a5a8a7a2,node1a5a8a8,node1a5a8a9,node1a5a8a10,node1a5a9,node1a5a9a1,node1a5a9a2,node1a5a9a3,node1a5a9a4,node1a5a9a5,node1a5a9a6,node1a5a10,node1a5a11,node1a5a12,node1a5a13,node1a5a14,node1a5a14a1,node1a5a14a2,node1a5a14a3,node1a5a14a4,node1a5a15,node1a5a16,node1a5a16a1,node1a5a16a1a1,node1a5a16a1a2,node1a5a16a2,node1a5a16a3,node1a5a16a4,node1a5a16a5,node1a5a16a6,node1a5a16a7,node1a5a17,node1a6,node1a6a1,node1a6a2,node1a6a3,node1a6a4,node1a6a5,node1a6a6,node1a6a7,node1a6a8,node1a6a9,node1a6a9a1,node1a6a9a2,node1a6a10,node1a6a11,node1a6a12,node1a7,node1a7a1,node1a7a1a1,node1a7a1a2,node1a7a1a3,node1a7a1a4,node1a7a1a5,node1a7a1a6,node1a7a1a7,node1a7a1a8,node1a7a1a9,node1a7a1a10,node1a7a2,node1a7a2a1,node1a7a2a2,node1a7a2a3,node1a8,node1a8a1,node1a8a2,node1a8a3,node1a8a4,node1a8a5,node1a8a6,node1a8a7,node1a8a8,node1a8a9,node1a8a10,node1a8a11,node1a8a12,node1a8a13,node1a8a14,node1a8a15,node1a8a16,node1a8a17,node1a8a18,node1a9,node1a9a1,node1a9a1a1,node1a9a1a1a1,node1a9a1a1a2,node1a9a1a2,node1a9a1a3,node1a9a2,node1a9a2a1,node1a9a2a2,node1a9a2a3,node1a9a2a4,node1a9a2a5,node1a9a2a6,node1a9a2a7,node1a9a2a7a1,node1a9a2a8,node1a9a3,node1a9a3a1,node1a9a3a2,node1a9a3a3,node1a10,node1a10a1];

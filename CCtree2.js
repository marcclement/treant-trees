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
node2 = {
        childrenDropLevel: 1,
        text:{name: "NORMES ORGANIQUES"},
        HTMLid:"2",
    },
node2a1 = {
        parent: node2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PROCÉDURE D'ÉLABORATION DES LOIS ORGANIQUES"},
        HTMLid:"2a1",
    },
node2a1a1 = {
        parent: node2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure consultative"},
        HTMLid:"2a1a1",
    },
node2a1a1a1 = {
        parent: node2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation des collectivités d'outre-mer"},
        HTMLid:"2a1a1a1",
        HTMLclass:"leave"
    },
node2a1a1a2 = {
        parent: node2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation des populations d'outre-mer"},
        HTMLid:"2a1a1a2",
        HTMLclass:"leave"
    },
node2a1a2 = {
        parent: node2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure parlementaire"},
        HTMLid:"2a1a2",
    },
node2a1a2a1 = {
        parent: node2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Projets de loi ayant pour principal objet l'organisation des collectivités territoriales"},
        HTMLid:"2a1a2a1",
        HTMLclass:"leave"
    },
node2a1a2a2 = {
        parent: node2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative au Sénat"},
        HTMLid:"2a1a2a2",
        HTMLclass:"leave"
    },
node2a1a3 = {
        parent: node2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction des ordonnances organiques (article 38)"},
        HTMLid:"2a1a3",
        HTMLclass:"leave"
    },
node2a2 = {
        parent: node2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CHAMP D'APPLICATION DES LOIS ORGANIQUES"},
        HTMLid:"2a2",
    },
node2a2a1 = {
        parent: node2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de recours à la loi organique"},
        HTMLid:"2a2a1",
        HTMLclass:"leave"
    },
node2a2a2 = {
        parent: node2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes organiques et autres normes"},
        HTMLid:"2a2a2",
    },
node2a2a2a1 = {
        parent: node2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition lois organiques / Constitution"},
        HTMLid:"2a2a2a1",
        HTMLclass:"leave"
    },
node2a2a2a2 = {
        parent: node2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition lois organiques / lois ordinaires"},
        HTMLid:"2a2a2a2",
    },
node2a2a2a2a1 = {
        parent: node2a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions relevant du domaine de la loi organique"},
        HTMLid:"2a2a2a2a1",
        HTMLclass:"leave"
    },
node2a2a2a2a2 = {
        parent: node2a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions indissociables de dispositions organiques"},
        HTMLid:"2a2a2a2a2",
        HTMLclass:"leave"
    },
node2a2a2a2a3 = {
        parent: node2a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions de loi ordinaire rendues applicables par une loi organique - Cristallisation"},
        HTMLid:"2a2a2a2a3",
        HTMLclass:"leave"
    },
node2a2a2a2a4 = {
        parent: node2a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions du domaine de la loi ordinaire incluses dans une loi organique - Déclassement"},
        HTMLid:"2a2a2a2a4",
        HTMLclass:"leave"
    },
node2a2a2a2a5 = {
        parent: node2a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Empiètement de la loi ordinaire sur le domaine organique - Incompétence"},
        HTMLid:"2a2a2a2a5",
        HTMLclass:"leave"
    },
node2a2a2a3 = {
        parent: node2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition lois organiques / normes réglementaires"},
        HTMLid:"2a2a2a3",
        HTMLclass:"leave"
    },
node2a3 = {
        parent: node2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "FONDEMENTS CONSTITUTIONNELS DES LOIS ORGANIQUES"},
        HTMLid:"2a3",
    },
node2a3a1 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 6 et 7 - Élection du Président de la République"},
        HTMLid:"2a3a1",
        HTMLclass:"leave"
    },
node2a3a2 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 11 - Référendum d'initiative partagée"},
        HTMLid:"2a3a2",
        HTMLclass:"leave"
    },
node2a3a3 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 13 - Nomination à des emplois ou fonctions"},
        HTMLid:"2a3a3",
        HTMLclass:"leave"
    },
node2a3a4 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 23 - Incompatibilités des ministres"},
        HTMLid:"2a3a4",
        HTMLclass:"leave"
    },
node2a3a5 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 25 - Mandat parlementaire"},
        HTMLid:"2a3a5",
        HTMLclass:"leave"
    },
node2a3a6 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 27 - Droit de vote des parlementaires"},
        HTMLid:"2a3a6",
        HTMLclass:"leave"
    },
node2a3a7 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 34 - Domaine de la loi"},
        HTMLid:"2a3a7",
        HTMLclass:"leave"
    },
node2a3a8 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 34-1 - Résolutions du Parlement"},
        HTMLid:"2a3a8",
    },
node2a3a9 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 39 - Présentation des projets de loi"},
        HTMLid:"2a3a9",
        HTMLclass:"leave"
    },
node2a3a10 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 44 - Exercice du droit d'amendement"},
        HTMLid:"2a3a10",
    },
node2a3a11 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 47 - Lois de finances"},
        HTMLid:"2a3a11",
        HTMLclass:"leave"
    },
node2a3a12 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 47-1 - Lois de financement de la sécurité sociale"},
        HTMLid:"2a3a12",
        HTMLclass:"leave"
    },
node2a3a13 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 47-2 - Rôle de la Cour des comptes"},
        HTMLid:"2a3a13",
        HTMLclass:"leave"
    },
node2a3a14 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 57 - Membres du Conseil constitutionnel"},
        HTMLid:"2a3a14",
        HTMLclass:"leave"
    },
node2a3a15 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 61-1 - Question de constitutionnalité"},
        HTMLid:"2a3a15",
        HTMLclass:"leave"
    },
node2a3a16 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 63 - Organisation et fonctionnement du Conseil constitutionnel"},
        HTMLid:"2a3a16",
        HTMLclass:"leave"
    },
node2a3a17 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 64 - Statut des magistrats"},
        HTMLid:"2a3a17",
        HTMLclass:"leave"
    },
node2a3a18 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 65 - Conseil supérieur de la magistrature"},
        HTMLid:"2a3a18",
        HTMLclass:"leave"
    },
node2a3a19 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 68 - Haute Cour"},
        HTMLid:"2a3a19",
        HTMLclass:"leave"
    },
node2a3a20 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 68-2 - Cour de justice de la République"},
        HTMLid:"2a3a20",
        HTMLclass:"leave"
    },
node2a3a21 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 69 et 71 - Conseil économique et social (et environnemental depuis 2008)"},
        HTMLid:"2a3a21",
        HTMLclass:"leave"
    },
node2a3a22 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 71-1 - Défenseur des droits"},
        HTMLid:"2a3a22",
        HTMLclass:"leave"
    },
node2a3a23 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72 - Expérimentation locale"},
        HTMLid:"2a3a23",
        HTMLclass:"leave"
    },
node2a3a24 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72-1 - Référendum local"},
        HTMLid:"2a3a24",
        HTMLclass:"leave"
    },
node2a3a25 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72-2 - Ressources des collectivités territoriales"},
        HTMLid:"2a3a25",
        HTMLclass:"leave"
    },
node2a3a26 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72-4 - Changement de régime d'une collectivité d'outre-mer"},
        HTMLid:"2a3a26",
        HTMLclass:"leave"
    },
node2a3a27 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 73 - Habilitation pour adapter la loi outre-mer"},
        HTMLid:"2a3a27",
        HTMLclass:"leave"
    },
node2a3a28 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 74 - Territoires et collectivités d'outre-mer"},
        HTMLid:"2a3a28",
        HTMLclass:"leave"
    },
node2a3a29 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 77 - Nouvelle-Calédonie"},
        HTMLid:"2a3a29",
        HTMLclass:"leave"
    },
node2a3a30 = {
        parent: node2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 88-3 - Citoyenneté européenne"},
        HTMLid:"2a3a30",
        HTMLclass:"leave"
    },
tree_config2 = [config,node2,node2a1,node2a1a1,node2a1a1a1,node2a1a1a2,node2a1a2,node2a1a2a1,node2a1a2a2,node2a1a3,node2a2,node2a2a1,node2a2a2,node2a2a2a1,node2a2a2a2,node2a2a2a2a1,node2a2a2a2a2,node2a2a2a2a3,node2a2a2a2a4,node2a2a2a2a5,node2a2a2a3,node2a3,node2a3a1,node2a3a2,node2a3a3,node2a3a4,node2a3a5,node2a3a6,node2a3a7,node2a3a8,node2a3a9,node2a3a10,node2a3a11,node2a3a12,node2a3a13,node2a3a14,node2a3a15,node2a3a16,node2a3a17,node2a3a18,node2a3a19,node2a3a20,node2a3a21,node2a3a22,node2a3a23,node2a3a24,node2a3a25,node2a3a26,node2a3a27,node2a3a28,node2a3a29,node2a3a30];

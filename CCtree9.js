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
node9 = {
        childrenDropLevel: 1,
        text:{name: "PRÉSIDENT DE LA RÉPUBLIQUE ET GOUVERNEMENT"},
        HTMLid:"9",
    },
node9a1 = {
        parent: node9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRÉSIDENT DE LA RÉPUBLIQUE"},
        HTMLid:"9a1",
    },
node9a1a1 = {
        parent: node9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élections présidentielles (voir Titre 8 Élections et référendums nationaux)"},
        HTMLid:"9a1a1",
    },
node9a1a2 = {
        parent: node9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du mandat et cessation des fonctions"},
        HTMLid:"9a1a2",
    },
node9a1a2a1 = {
        parent: node9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du mandat"},
        HTMLid:"9a1a2a1",
    },
node9a1a2a1a1 = {
        parent: node9a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Changement de président"},
        HTMLid:"9a1a2a1a1",
        HTMLclass:"leave"
    },
node9a1a2a1a2 = {
        parent: node9a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réélection du président sortant"},
        HTMLid:"9a1a2a1a2",
        HTMLclass:"leave"
    },
node9a1a2a2 = {
        parent: node9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cessation des fonctions"},
        HTMLid:"9a1a2a2",
    },
node9a1a2a2a1 = {
        parent: node9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démission - Rôle du Conseil constitutionnel"},
        HTMLid:"9a1a2a2a1",
        HTMLclass:"leave"
    },
node9a1a2a2a2 = {
        parent: node9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décès - Rôle du Conseil constitutionnel"},
        HTMLid:"9a1a2a2a2",
        HTMLclass:"leave"
    },
node9a1a3 = {
        parent: node9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attributions et compétences"},
        HTMLid:"9a1a3",
    },
node9a1a3a1 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des membres du Gouvernement"},
        HTMLid:"9a1a3a1",
        HTMLclass:"leave"
    },
node9a1a3a2 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de nomination aux emplois civils et militaires"},
        HTMLid:"9a1a3a2",
    },
node9a1a3a2a1 = {
        parent: node9a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du pouvoir de nomination"},
        HTMLid:"9a1a3a2a1",
        HTMLclass:"leave"
    },
node9a1a3a2a1a1 = {
        parent: node9a1a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégation du pouvoir de nomination"},
        HTMLid:"9a1a3a2a1a1",
        HTMLclass:"leave"
    },
node9a1a3a2a1a2 = {
        parent: node9a1a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Extension de la liste des emplois civils et militaires"},
        HTMLid:"9a1a3a2a1a2",
        HTMLclass:"leave"
    },
node9a1a3a2a1a3 = {
        parent: node9a1a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination de magistrats (voir également Titre 12 Juridictions et autorité judiciaire)"},
        HTMLid:"9a1a3a2a1a3",
        HTMLclass:"leave"
    },
node9a1a3a2a2 = {
        parent: node9a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Encadrement du pouvoir de nomination"},
        HTMLid:"9a1a3a2a2",
        HTMLclass:"leave"
    },
node9a1a3a2a2a1 = {
        parent: node9a1a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis des commissions parlementaires (voir Titre 10 Parlement)"},
        HTMLid:"9a1a3a2a2a1",
    },
node9a1a3a2a2a2 = {
        parent: node9a1a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres dispositions d'encadrement"},
        HTMLid:"9a1a3a2a2a2",
        HTMLclass:"leave"
    },
node9a1a3a3 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nouvelle délibération en application de l'article 10 de la Constitution"},
        HTMLid:"9a1a3a3",
        HTMLclass:"leave"
    },
node9a1a3a4 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Promulgation des lois"},
        HTMLid:"9a1a3a4",
        HTMLclass:"leave"
    },
node9a1a3a5 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Continuité de l'action gouvernementale"},
        HTMLid:"9a1a3a5",
        HTMLclass:"leave"
    },
node9a1a3a6 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance nationale, intégrité du territoire et respect des traités"},
        HTMLid:"9a1a3a6",
        HTMLclass:"leave"
    },
node9a1a3a7 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de message devant le Parlement"},
        HTMLid:"9a1a3a7",
        HTMLclass:"leave"
    },
node9a1a3a8 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convocation du Parlement en session extraordinaire"},
        HTMLid:"9a1a3a8",
        HTMLclass:"leave"
    },
node9a1a3a9 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décrets en Conseil des ministres"},
        HTMLid:"9a1a3a9",
        HTMLclass:"leave"
    },
node9a1a3a10 = {
        parent: node9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences entre le Premier ministre et le Président de la République"},
        HTMLid:"9a1a3a10",
        HTMLclass:"leave"
    },
node9a1a4 = {
        parent: node9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Immunités et privilèges de juridictions"},
        HTMLid:"9a1a4",
        HTMLclass:"leave"
    },
node9a1a5 = {
        parent: node9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Archives"},
        HTMLid:"9a1a5",
        HTMLclass:"leave"
    },
node9a2 = {
        parent: node9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "GOUVERNEMENT"},
        HTMLid:"9a2",
    },
node9a2a1 = {
        parent: node9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut du Gouvernement"},
        HTMLid:"9a2a1",
    },
node9a2a1a1 = {
        parent: node9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination"},
        HTMLid:"9a2a1a1",
    },
node9a2a1a1a1 = {
        parent: node9a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination du Premier ministre"},
        HTMLid:"9a2a1a1a1",
    },
node9a2a1a1a2 = {
        parent: node9a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des autres membres du Gouvernement"},
        HTMLid:"9a2a1a1a2",
        HTMLclass:"leave"
    },
node9a2a1a1a3 = {
        parent: node9a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation de la démission du Gouvernement"},
        HTMLid:"9a2a1a1a3",
        HTMLclass:"leave"
    },
node9a2a1a2 = {
        parent: node9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"9a2a1a2",
        HTMLclass:"leave"
    },
node9a2a1a3 = {
        parent: node9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Archives"},
        HTMLid:"9a2a1a3",
        HTMLclass:"leave"
    },
node9a2a2 = {
        parent: node9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs propres du Gouvernement"},
        HTMLid:"9a2a2",
    },
node9a2a2a1 = {
        parent: node9a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de plan et pouvoirs propres du Gouvernement"},
        HTMLid:"9a2a2a1",
        HTMLclass:"leave"
    },
node9a2a2a2 = {
        parent: node9a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination et conduite de la politique de la Nation (article 20)"},
        HTMLid:"9a2a2a2",
        HTMLclass:"leave"
    },
node9a2a2a3 = {
        parent: node9a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Direction de l'action du Gouvernement (article 21)"},
        HTMLid:"9a2a2a3",
        HTMLclass:"leave"
    },
node9a2a2a4 = {
        parent: node9a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de méconnaissance des pouvoirs propres du Gouvernement"},
        HTMLid:"9a2a2a4",
        HTMLclass:"leave"
    },
node9a2a2a5 = {
        parent: node9a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance des pouvoirs propres du Gouvernement"},
        HTMLid:"9a2a2a5",
        HTMLclass:"leave"
    },
node9a2a3 = {
        parent: node9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Premier ministre"},
        HTMLid:"9a2a3",
    },
node9a2a3a1 = {
        parent: node9a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Initiative législative"},
        HTMLid:"9a2a3a1",
    },
node9a2a3a1a1 = {
        parent: node9a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Projet de loi"},
        HTMLid:"9a2a3a1a1",
        HTMLclass:"leave"
    },
node9a2a3a1a1a1 = {
        parent: node9a2a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "- Adoption par le Conseil des ministres d'un projet de loi en l'absence du Premier ministre"},
        HTMLid:"9a2a3a1a1a1",
        HTMLclass:"leave"
    },
node9a2a3a1a1a2 = {
        parent: node9a2a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "- Exposé des motifs"},
        HTMLid:"9a2a3a1a1a2",
        HTMLclass:"leave"
    },
node9a2a3a1a2 = {
        parent: node9a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettre rectificative"},
        HTMLid:"9a2a3a1a2",
        HTMLclass:"leave"
    },
node9a2a3a1a3 = {
        parent: node9a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injonctions faites au Premier ministre"},
        HTMLid:"9a2a3a1a3",
        HTMLclass:"leave"
    },
node9a2a3a2 = {
        parent: node9a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Continuité de l'action gouvernementale"},
        HTMLid:"9a2a3a2",
    },
node9a2a3a2a1 = {
        parent: node9a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intérim du Premier ministre - Règles générales"},
        HTMLid:"9a2a3a2a1",
        HTMLclass:"leave"
    },
node9a2a3a2a2 = {
        parent: node9a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de mise en oeuvre de l'article 49, alinéa 3, de la Constitution"},
        HTMLid:"9a2a3a2a2",
        HTMLclass:"leave"
    },
node9a2a3a3 = {
        parent: node9a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir réglementaire"},
        HTMLid:"9a2a3a3",
        HTMLclass:"leave"
    },
node9a2a3a4 = {
        parent: node9a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences entre le Premier ministre et le Président de la République (voir ci-dessus)"},
        HTMLid:"9a2a3a4",
    },
node9a2a3a5 = {
        parent: node9a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police administrative"},
        HTMLid:"9a2a3a5",
    },
node9a2a3a5a1 = {
        parent: node9a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police générale"},
        HTMLid:"9a2a3a5a1",
        HTMLclass:"leave"
    },
node9a2a3a5a2 = {
        parent: node9a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police spéciale"},
        HTMLid:"9a2a3a5a2",
        HTMLclass:"leave"
    },
node9a2a4 = {
        parent: node9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Gouvernement"},
        HTMLid:"9a2a4",
    },
node9a2a4a1 = {
        parent: node9a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétences"},
        HTMLid:"9a2a4a1",
        HTMLclass:"leave"
    },
node9a2a4a2 = {
        parent: node9a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité pénale"},
        HTMLid:"9a2a4a2",
        HTMLclass:"leave"
    },
tree_config9 = [config,node9,node9a1,node9a1a1,node9a1a2,node9a1a2a1,node9a1a2a1a1,node9a1a2a1a2,node9a1a2a2,node9a1a2a2a1,node9a1a2a2a2,node9a1a3,node9a1a3a1,node9a1a3a2,node9a1a3a2a1,node9a1a3a2a1a1,node9a1a3a2a1a2,node9a1a3a2a1a3,node9a1a3a2a2,node9a1a3a2a2a1,node9a1a3a2a2a2,node9a1a3a3,node9a1a3a4,node9a1a3a5,node9a1a3a6,node9a1a3a7,node9a1a3a8,node9a1a3a9,node9a1a3a10,node9a1a4,node9a1a5,node9a2,node9a2a1,node9a2a1a1,node9a2a1a1a1,node9a2a1a1a2,node9a2a1a1a3,node9a2a1a2,node9a2a1a3,node9a2a2,node9a2a2a1,node9a2a2a2,node9a2a2a3,node9a2a2a4,node9a2a2a5,node9a2a3,node9a2a3a1,node9a2a3a1a1,node9a2a3a1a1a1,node9a2a3a1a1a2,node9a2a3a1a2,node9a2a3a1a3,node9a2a3a2,node9a2a3a2a1,node9a2a3a2a2,node9a2a3a3,node9a2a3a4,node9a2a3a5,node9a2a3a5a1,node9a2a3a5a2,node9a2a4,node9a2a4a1,node9a2a4a2];

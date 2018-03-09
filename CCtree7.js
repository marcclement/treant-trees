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
node7 = {
        childrenDropLevel: 1,
        text:{name: "DROIT INTERNATIONAL ET DROIT DE L'UNION EUROPÉENNE"},
        HTMLid:"7",
    },
node7a1 = {
        parent: node7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES GÉNÉRAUX DU DROIT INTERNATIONAL"},
        HTMLid:"7a1",
    },
node7a1a1 = {
        parent: node7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit public international"},
        HTMLid:"7a1a1",
    },
node7a1a1a1 = {
        parent: node7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pacta sunt servanda"},
        HTMLid:"7a1a1a1",
        HTMLclass:"leave"
    },
node7a1a1a2 = {
        parent: node7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des peuples à disposer d'eux-mêmes"},
        HTMLid:"7a1a1a2",
        HTMLclass:"leave"
    },
node7a1a1a3 = {
        parent: node7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application d'une loi sur les nationalisations"},
        HTMLid:"7a1a1a3",
        HTMLclass:"leave"
    },
node7a1a2 = {
        parent: node7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit international privé"},
        HTMLid:"7a1a2",
    },
node7a1a2a1 = {
        parent: node7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de la loi dans l'espace"},
        HTMLid:"7a1a2a1",
        HTMLclass:"leave"
    },
node7a1a2a2 = {
        parent: node7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut personnel"},
        HTMLid:"7a1a2a2",
        HTMLclass:"leave"
    },
node7a2 = {
        parent: node7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "RATIFICATION OU APPROBATION DES TRAITÉS ET ACCORDS INTERNATIONAUX"},
        HTMLid:"7a2",
    },
node7a2a1 = {
        parent: node7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Négociation"},
        HTMLid:"7a2a1",
        HTMLclass:"leave"
    },
node7a2a2 = {
        parent: node7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendums sur les lois de ratification"},
        HTMLid:"7a2a2",
    },
node7a2a2a1 = {
        parent: node7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de ratification adoptée par référendum"},
        HTMLid:"7a2a2a1",
        HTMLclass:"leave"
    },
node7a2a3 = {
        parent: node7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la régularité de la procédure de ratification d'un traité"},
        HTMLid:"7a2a3",
    },
node7a2a3a1 = {
        parent: node7a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention du Parlement"},
        HTMLid:"7a2a3a1",
        HTMLclass:"leave"
    },
node7a2a3a2 = {
        parent: node7a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas des accords techniques - Compte spécial intitulé  consolidation des dettes commerciales des pays étrangers "},
        HTMLid:"7a2a3a2",
        HTMLclass:"leave"
    },
node7a2a3a3 = {
        parent: node7a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures créées par le statut d'organisations internationales"},
        HTMLid:"7a2a3a3",
        HTMLclass:"leave"
    },
node7a2a4 = {
        parent: node7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractéristiques du contrôle de constitutionnalité a priori"},
        HTMLid:"7a2a4",
    },
node7a2a4a1 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondements du contrôle"},
        HTMLid:"7a2a4a1",
    },
node7a2a4a1a1 = {
        parent: node7a2a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle direct (article 54 C)"},
        HTMLid:"7a2a4a1a1",
        HTMLclass:"leave"
    },
node7a2a4a1a2 = {
        parent: node7a2a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle indirect (article 61 alinéa 2)"},
        HTMLid:"7a2a4a1a2",
        HTMLclass:"leave"
    },
node7a2a4a2 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine"},
        HTMLid:"7a2a4a2",
    },
node7a2a4a2a1 = {
        parent: node7a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la saisine"},
        HTMLid:"7a2a4a2a1",
        HTMLclass:"leave"
    },
node7a2a4a2a2 = {
        parent: node7a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de recevabilité de la saisine"},
        HTMLid:"7a2a4a2a2",
        HTMLclass:"leave"
    },
node7a2a4a2a3 = {
        parent: node7a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Moyens inopérants"},
        HTMLid:"7a2a4a2a3",
        HTMLclass:"leave"
    },
node7a2a4a3 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes pouvant être soumis au contrôle de constitutionnalité"},
        HTMLid:"7a2a4a3",
    },
node7a2a4a3a1 = {
        parent: node7a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traités et accords internationaux"},
        HTMLid:"7a2a4a3a1",
        HTMLclass:"leave"
    },
node7a2a4a3a2 = {
        parent: node7a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convention d'application de l'accord de Schengen"},
        HTMLid:"7a2a4a3a2",
        HTMLclass:"leave"
    },
node7a2a4a4 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes exclus du contrôle"},
        HTMLid:"7a2a4a4",
    },
node7a2a4a4a1 = {
        parent: node7a2a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traités en vigueur (voir ci-dessus Principes généraux du droit international - Pacta sunt servanda)"},
        HTMLid:"7a2a4a4a1",
    },
node7a2a4a4a2 = {
        parent: node7a2a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes qui ne sont pas des traités ou accords au sens des articles 52 et 53 de la Constitution"},
        HTMLid:"7a2a4a4a2",
    },
node7a2a4a4a2a1 = {
        parent: node7a2a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes d'application d'un traité n'ayant pas valeur de traité ou accord international"},
        HTMLid:"7a2a4a4a2a1",
        HTMLclass:"leave"
    },
node7a2a4a4a2a2 = {
        parent: node7a2a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes de portée interne"},
        HTMLid:"7a2a4a4a2a2",
        HTMLclass:"leave"
    },
node7a2a4a5 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence du contrôle"},
        HTMLid:"7a2a4a5",
    },
node7a2a4a5a1 = {
        parent: node7a2a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence non prises en compte"},
        HTMLid:"7a2a4a5a1",
    },
node7a2a4a5a1a1 = {
        parent: node7a2a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exclusion des engagements internationaux"},
        HTMLid:"7a2a4a5a1a1",
        HTMLclass:"leave"
    },
node7a2a4a5a1a2 = {
        parent: node7a2a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions constitutionnelles renvoyant à un traité non entré en vigueur"},
        HTMLid:"7a2a4a5a1a2",
        HTMLclass:"leave"
    },
node7a2a4a5a2 = {
        parent: node7a2a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence prises en compte"},
        HTMLid:"7a2a4a5a2",
    },
node7a2a4a5a2a1 = {
        parent: node7a2a4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"7a2a4a5a2a1",
        HTMLclass:"leave"
    },
node7a2a4a5a2a2 = {
        parent: node7a2a4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Distinction transfert/limitation de souveraineté (jurisprudence abandonnée, voir ci-dessus Normes de référence prises en compte pour le contrôle)"},
        HTMLid:"7a2a4a5a2a2",
        HTMLclass:"leave"
    },
node7a2a4a5a2a3 = {
        parent: node7a2a4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Condition de réciprocité"},
        HTMLid:"7a2a4a5a2a3",
        HTMLclass:"leave"
    },
node7a2a4a6 = {
        parent: node7a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sens et portée de la décision"},
        HTMLid:"7a2a4a6",
    },
node7a2a4a6a1 = {
        parent: node7a2a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité des décisions antérieures du Conseil constitutionnel"},
        HTMLid:"7a2a4a6a1",
    },
node7a2a4a6a1a1 = {
        parent: node7a2a4a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hypothèse ou l'autorité de la chose jugée est opposée"},
        HTMLid:"7a2a4a6a1a1",
        HTMLclass:"leave"
    },
node7a2a4a6a1a2 = {
        parent: node7a2a4a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation par référence à une décision antérieure"},
        HTMLid:"7a2a4a6a1a2",
        HTMLclass:"leave"
    },
node7a2a4a6a2 = {
        parent: node7a2a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserves d'interprétation"},
        HTMLid:"7a2a4a6a2",
    },
node7a2a4a6a3 = {
        parent: node7a2a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des stipluations d'un accord qui relèvent de la compétence exclusive de l'Union européenne ou d'une compétence partagée"},
        HTMLid:"7a2a4a6a3",
        HTMLclass:"leave"
    },
node7a2a5 = {
        parent: node7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de la conformité à la Constitution"},
        HTMLid:"7a2a5",
    },
node7a2a5a1 = {
        parent: node7a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité d'une révision de la Constitution"},
        HTMLid:"7a2a5a1",
    },
node7a2a5a1a1 = {
        parent: node7a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrariété à la Constitution où à des droits et libertés constitutionnellement garantis"},
        HTMLid:"7a2a5a1a1",
    },
node7a2a5a1a1a1 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indivisibilité de la République et unité du peuple français"},
        HTMLid:"7a2a5a1a1a1",
        HTMLclass:"leave"
    },
node7a2a5a1a1a2 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Langue de la République"},
        HTMLid:"7a2a5a1a1a2",
        HTMLclass:"leave"
    },
node7a2a5a1a1a3 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de communication et d'expression"},
        HTMLid:"7a2a5a1a1a3",
        HTMLclass:"leave"
    },
node7a2a5a1a1a4 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution de prérogatives communautaires au Parlement national"},
        HTMLid:"7a2a5a1a1a4",
        HTMLclass:"leave"
    },
node7a2a5a1a1a5 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité pénale du chef de l'État et des ministres"},
        HTMLid:"7a2a5a1a1a5",
        HTMLclass:"leave"
    },
node7a2a5a1a1a6 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 16 de la Déclaration de 1789"},
        HTMLid:"7a2a5a1a1a6",
        HTMLclass:"leave"
    },
node7a2a5a1a1a7 = {
        parent: node7a2a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prérogatives du Gouvernement et du Parlement dans l'élaboration et l'adoption des lois de finances"},
        HTMLid:"7a2a5a1a1a7",
        HTMLclass:"leave"
    },
node7a2a5a1a2 = {
        parent: node7a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transferts de compétence portant atteinte aux conditions d'exercice de la souveraineté nationale"},
        HTMLid:"7a2a5a1a2",
    },
node7a2a5a1a2a1 = {
        parent: node7a2a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"7a2a5a1a2a1",
        HTMLclass:"leave"
    },
node7a2a5a1a2a2 = {
        parent: node7a2a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidence du principe de subsidiarité"},
        HTMLid:"7a2a5a1a2a2",
        HTMLclass:"leave"
    },
node7a2a5a1a2a3 = {
        parent: node7a2a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Souveraineté nationale en matière monétaire"},
        HTMLid:"7a2a5a1a2a3",
        HTMLclass:"leave"
    },
node7a2a5a1a2a4 = {
        parent: node7a2a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure législative ordinaire"},
        HTMLid:"7a2a5a1a2a4",
        HTMLclass:"leave"
    },
node7a2a5a1a2a5 = {
        parent: node7a2a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Privation de tout pouvoir d'initiative de la France"},
        HTMLid:"7a2a5a1a2a5",
        HTMLclass:"leave"
    },
node7a2a5a1a3 = {
        parent: node7a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modification des modalités d'exercice des compétences transférées, dans des conditions portant atteinte aux conditions d'exercice de la souveraineté nationale"},
        HTMLid:"7a2a5a1a3",
    },
node7a2a5a1a3a1 = {
        parent: node7a2a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Passage de la règle de l'unanimité à celle de la majorité qualifiée (généralités)"},
        HTMLid:"7a2a5a1a3a1",
        HTMLclass:"leave"
    },
node7a2a5a1a3a2 = {
        parent: node7a2a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Passage de la règle de l'unanimité à celle de la majorité qualifiée (entrée et séjour des étrangers)"},
        HTMLid:"7a2a5a1a3a2",
        HTMLclass:"leave"
    },
node7a2a5a1a3a3 = {
        parent: node7a2a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Passage à la majorité qualifiée en vertu d'une décision européenne ultérieure (clauses passerelles)"},
        HTMLid:"7a2a5a1a3a3",
        HTMLclass:"leave"
    },
node7a2a5a1a3a4 = {
        parent: node7a2a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure de révision simplifiée (clauses passerelles)"},
        HTMLid:"7a2a5a1a3a4",
        HTMLclass:"leave"
    },
node7a2a5a1a3a5 = {
        parent: node7a2a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution d'un pouvoir de décision au Parlement européen"},
        HTMLid:"7a2a5a1a3a5",
        HTMLclass:"leave"
    },
node7a2a5a1a4 = {
        parent: node7a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres atteintes aux conditions d'exercice de la souveraineté nationale"},
        HTMLid:"7a2a5a1a4",
    },
node7a2a5a1a4a1 = {
        parent: node7a2a5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Souveraineté du peuple"},
        HTMLid:"7a2a5a1a4a1",
        HTMLclass:"leave"
    },
node7a2a5a1a4a2 = {
        parent: node7a2a5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de vote et d'éligibilité des ressortissants communautaires aux élections municipales (avant 88-3)"},
        HTMLid:"7a2a5a1a4a2",
        HTMLclass:"leave"
    },
node7a2a5a1a4a3 = {
        parent: node7a2a5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Emplois et fonctions intéressant la souveraineté de la Nation réservées aux nationaux"},
        HTMLid:"7a2a5a1a4a3",
        HTMLclass:"leave"
    },
node7a2a5a1a4a4 = {
        parent: node7a2a5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'un parquet européen"},
        HTMLid:"7a2a5a1a4a4",
        HTMLclass:"leave"
    },
node7a2a5a1a4a5 = {
        parent: node7a2a5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrévocabilité des traités et accords"},
        HTMLid:"7a2a5a1a4a5",
        HTMLclass:"leave"
    },
node7a2a5a2 = {
        parent: node7a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de nécessité de réviser la Constitution"},
        HTMLid:"7a2a5a2",
    },
node7a2a5a2a1 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garantie des droits et libertés du citoyen"},
        HTMLid:"7a2a5a2a1",
        HTMLclass:"leave"
    },
node7a2a5a2a2 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Charte des droits fondamentaux de l'Union européenne"},
        HTMLid:"7a2a5a2a2",
        HTMLclass:"leave"
    },
node7a2a5a2a3 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Primauté du droit communautaire"},
        HTMLid:"7a2a5a2a3",
        HTMLclass:"leave"
    },
node7a2a5a2a4 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection du Parlement européen au suffrage universel direct"},
        HTMLid:"7a2a5a2a4",
        HTMLclass:"leave"
    },
node7a2a5a2a5 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de vote et d'éligibilité des citoyens de l'Union européenne aux élections municipales"},
        HTMLid:"7a2a5a2a5",
        HTMLclass:"leave"
    },
node7a2a5a2a6 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence territoriale de l'État"},
        HTMLid:"7a2a5a2a6",
        HTMLclass:"leave"
    },
node7a2a5a2a7 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée et séjour des étrangers"},
        HTMLid:"7a2a5a2a7",
        HTMLclass:"leave"
    },
node7a2a5a2a8 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de clause de dénonciation"},
        HTMLid:"7a2a5a2a8",
        HTMLclass:"leave"
    },
node7a2a5a2a9 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctionnement interne des Communautés européennes"},
        HTMLid:"7a2a5a2a9",
        HTMLclass:"leave"
    },
node7a2a5a2a10 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources propres des Communautés européennes"},
        HTMLid:"7a2a5a2a10",
        HTMLclass:"leave"
    },
node7a2a5a2a11 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abolition de la peine de mort"},
        HTMLid:"7a2a5a2a11",
        HTMLclass:"leave"
    },
node7a2a5a2a12 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes du droit pénal"},
        HTMLid:"7a2a5a2a12",
        HTMLclass:"leave"
    },
node7a2a5a2a13 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entraide judiciaire internationale"},
        HTMLid:"7a2a5a2a13",
        HTMLclass:"leave"
    },
node7a2a5a2a14 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des brevets"},
        HTMLid:"7a2a5a2a14",
        HTMLclass:"leave"
    },
node7a2a5a2a15 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Equilibre des finances publiques"},
        HTMLid:"7a2a5a2a15",
        HTMLclass:"leave"
    },
node7a2a5a2a16 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la Cour de justice de l'Union européenne"},
        HTMLid:"7a2a5a2a16",
        HTMLclass:"leave"
    },
node7a2a5a2a17 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mécanisme de règlement des différends relatifs aux investissements entre investisseurs et Etats"},
        HTMLid:"7a2a5a2a17",
        HTMLclass:"leave"
    },
node7a2a5a2a18 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Édiction de normes prévue par un accord international"},
        HTMLid:"7a2a5a2a18",
        HTMLclass:"leave"
    },
node7a2a5a2a19 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application provisoire d'un accord international"},
        HTMLid:"7a2a5a2a19",
        HTMLclass:"leave"
    },
node7a2a5a2a20 = {
        parent: node7a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrévocabilité des traités et accords"},
        HTMLid:"7a2a5a2a20",
        HTMLclass:"leave"
    },
node7a3 = {
        parent: node7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "TRAITÉS ET ACCORDS INTERNATIONAUX EN VIGUEUR"},
        HTMLid:"7a3",
    },
node7a3a1 = {
        parent: node7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application des traités"},
        HTMLid:"7a3a1",
    },
node7a3a1a1 = {
        parent: node7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe général"},
        HTMLid:"7a3a1a1",
        HTMLclass:"leave"
    },
node7a3a1a2 = {
        parent: node7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application territorial de la convention d'application de l'accord de Schengen"},
        HTMLid:"7a3a1a2",
        HTMLclass:"leave"
    },
node7a3a2 = {
        parent: node7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Primauté des traités et accords (article 55)"},
        HTMLid:"7a3a2",
    },
node7a3a2a1 = {
        parent: node7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de primauté"},
        HTMLid:"7a3a2a1",
        HTMLclass:"leave"
    },
node7a3a2a2 = {
        parent: node7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Force obligatoire des traités et accords internationaux en vigueur"},
        HTMLid:"7a3a2a2",
        HTMLclass:"leave"
    },
node7a3a2a3 = {
        parent: node7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impossibilité, pour le législateur, de déroger aux traités ou accords internationaux"},
        HTMLid:"7a3a2a3",
        HTMLclass:"leave"
    },
node7a3a2a4 = {
        parent: node7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation faite au pouvoir réglementaire et aux autorités administratives et juridictionnelles de respecter les traités et accords internationaux"},
        HTMLid:"7a3a2a4",
        HTMLclass:"leave"
    },
node7a3a3 = {
        parent: node7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du Conseil constitutionnel"},
        HTMLid:"7a3a3",
    },
node7a3a3a1 = {
        parent: node7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence de principe du Conseil constitutionnel pour contrôler la conventionalité des lois"},
        HTMLid:"7a3a3a1",
        HTMLclass:"leave"
    },
node7a3a3a2 = {
        parent: node7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de contrôle de constitutionnalité a posteriori"},
        HTMLid:"7a3a3a2",
    },
node7a3a3a2a1 = {
        parent: node7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus de transposer aux traités la jurisprudence État d'urgence en Nouvelle-Calédonie"},
        HTMLid:"7a3a3a2a1",
        HTMLclass:"leave"
    },
node7a3a3a2a2 = {
        parent: node7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité des traités en vigueur à déroger à la Constitution"},
        HTMLid:"7a3a3a2a2",
        HTMLclass:"leave"
    },
node7a3a3a3 = {
        parent: node7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanction des violations directes de l'article 55 de la Constitution"},
        HTMLid:"7a3a3a3",
        HTMLclass:"leave"
    },
node7a3a3a4 = {
        parent: node7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du Conseil constitutionnel en tant que juge électoral"},
        HTMLid:"7a3a3a4",
        HTMLclass:"leave"
    },
node7a3a4 = {
        parent: node7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidence de l'exigence de réciprocité"},
        HTMLid:"7a3a4",
        HTMLclass:"leave"
    },
node7a4 = {
        parent: node7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "QUESTIONS PROPRES AU DROIT COMMUNAUTAIRE OU DE L'UNION EUROPÉENNE"},
        HTMLid:"7a4",
    },
node7a4a1 = {
        parent: node7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Institutions communautaires"},
        HTMLid:"7a4a1",
    },
node7a4a1a1 = {
        parent: node7a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature du Parlement européen"},
        HTMLid:"7a4a1a1",
        HTMLclass:"leave"
    },
node7a4a1a2 = {
        parent: node7a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature de l'Union (et des Communautés) européenne(s)"},
        HTMLid:"7a4a1a2",
        HTMLclass:"leave"
    },
node7a4a2 = {
        parent: node7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Spécificité des fondements constitutionnels"},
        HTMLid:"7a4a2",
    },
node7a4a2a1 = {
        parent: node7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Participation de la France aux Communautés européennes et à l'Union européenne (article 88-1)"},
        HTMLid:"7a4a2a1",
        HTMLclass:"leave"
    },
node7a4a2a2 = {
        parent: node7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandat d'arrêt européen (88-2)"},
        HTMLid:"7a4a2a2",
        HTMLclass:"leave"
    },
node7a4a2a3 = {
        parent: node7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Information du Parlement (article 88-4)"},
        HTMLid:"7a4a2a3",
        HTMLclass:"leave"
    },
node7a4a2a4 = {
        parent: node7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum relatif à l'adhésion d'un État à l'Union européenne (article 88-5)"},
        HTMLid:"7a4a2a4",
    },
node7a4a3 = {
        parent: node7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hiérarchie des normes"},
        HTMLid:"7a4a3",
    },
node7a4a3a1 = {
        parent: node7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Primauté de la Constitution"},
        HTMLid:"7a4a3a1",
        HTMLclass:"leave"
    },
node7a4a3a2 = {
        parent: node7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité du droit communautaire"},
        HTMLid:"7a4a3a2",
        HTMLclass:"leave"
    },
node7a4a3a3 = {
        parent: node7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi exprès à une disposition du traité sur l'Union européenne"},
        HTMLid:"7a4a3a3",
        HTMLclass:"leave"
    },
node7a4a3a3a1 = {
        parent: node7a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conformité aux dispositions de l'article 8B du traité instituant la Communauté européenne"},
        HTMLid:"7a4a3a3a1",
        HTMLclass:"leave"
    },
node7a4a3a3a2 = {
        parent: node7a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conformité à la directive n° 94/80CE du 19 décembre 1994"},
        HTMLid:"7a4a3a3a2",
        HTMLclass:"leave"
    },
node7a4a4 = {
        parent: node7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de transposition des directives communautaires ou de l'Union européenne"},
        HTMLid:"7a4a4",
    },
node7a4a4a1 = {
        parent: node7a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de loi de transposition"},
        HTMLid:"7a4a4a1",
        HTMLclass:"leave"
    },
node7a4a4a2 = {
        parent: node7a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de contrôle de la constitutionnalité de la loi de transposition"},
        HTMLid:"7a4a4a2",
    },
node7a4a4a2a1 = {
        parent: node7a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"7a4a4a2a1",
        HTMLclass:"leave"
    },
node7a4a4a2a2 = {
        parent: node7a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Clause de sauvegarde"},
        HTMLid:"7a4a4a2a2",
        HTMLclass:"leave"
    },
node7a4a4a2a3 = {
        parent: node7a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"7a4a4a2a3",
        HTMLclass:"leave"
    },
node7a4a4a3 = {
        parent: node7a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'exigence de bonne transposition"},
        HTMLid:"7a4a4a3",
    },
node7a4a4a3a1 = {
        parent: node7a4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions du contrôle"},
        HTMLid:"7a4a4a3a1",
        HTMLclass:"leave"
    },
node7a4a4a3a2 = {
        parent: node7a4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"7a4a4a3a2",
    },
node7a4a4a3a2a1 = {
        parent: node7a4a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilité manifeste"},
        HTMLid:"7a4a4a3a2a1",
        HTMLclass:"leave"
    },
node7a4a4a3a2a2 = {
        parent: node7a4a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'incompatibilité manifeste"},
        HTMLid:"7a4a4a3a2a2",
        HTMLclass:"leave"
    },
node7a4a4a3a2a3 = {
        parent: node7a4a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve d'interprétation"},
        HTMLid:"7a4a4a3a2a3",
        HTMLclass:"leave"
    },
node7a4a5 = {
        parent: node7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prise en compte du droit communautaire pour l'interprétation de la loi"},
        HTMLid:"7a4a5",
        HTMLclass:"leave"
    },
tree_config7 = [config,node7,node7a1,node7a1a1,node7a1a1a1,node7a1a1a2,node7a1a1a3,node7a1a2,node7a1a2a1,node7a1a2a2,node7a2,node7a2a1,node7a2a2,node7a2a2a1,node7a2a3,node7a2a3a1,node7a2a3a2,node7a2a3a3,node7a2a4,node7a2a4a1,node7a2a4a1a1,node7a2a4a1a2,node7a2a4a2,node7a2a4a2a1,node7a2a4a2a2,node7a2a4a2a3,node7a2a4a3,node7a2a4a3a1,node7a2a4a3a2,node7a2a4a4,node7a2a4a4a1,node7a2a4a4a2,node7a2a4a4a2a1,node7a2a4a4a2a2,node7a2a4a5,node7a2a4a5a1,node7a2a4a5a1a1,node7a2a4a5a1a2,node7a2a4a5a2,node7a2a4a5a2a1,node7a2a4a5a2a2,node7a2a4a5a2a3,node7a2a4a6,node7a2a4a6a1,node7a2a4a6a1a1,node7a2a4a6a1a2,node7a2a4a6a2,node7a2a4a6a3,node7a2a5,node7a2a5a1,node7a2a5a1a1,node7a2a5a1a1a1,node7a2a5a1a1a2,node7a2a5a1a1a3,node7a2a5a1a1a4,node7a2a5a1a1a5,node7a2a5a1a1a6,node7a2a5a1a1a7,node7a2a5a1a2,node7a2a5a1a2a1,node7a2a5a1a2a2,node7a2a5a1a2a3,node7a2a5a1a2a4,node7a2a5a1a2a5,node7a2a5a1a3,node7a2a5a1a3a1,node7a2a5a1a3a2,node7a2a5a1a3a3,node7a2a5a1a3a4,node7a2a5a1a3a5,node7a2a5a1a4,node7a2a5a1a4a1,node7a2a5a1a4a2,node7a2a5a1a4a3,node7a2a5a1a4a4,node7a2a5a1a4a5,node7a2a5a2,node7a2a5a2a1,node7a2a5a2a2,node7a2a5a2a3,node7a2a5a2a4,node7a2a5a2a5,node7a2a5a2a6,node7a2a5a2a7,node7a2a5a2a8,node7a2a5a2a9,node7a2a5a2a10,node7a2a5a2a11,node7a2a5a2a12,node7a2a5a2a13,node7a2a5a2a14,node7a2a5a2a15,node7a2a5a2a16,node7a2a5a2a17,node7a2a5a2a18,node7a2a5a2a19,node7a2a5a2a20,node7a3,node7a3a1,node7a3a1a1,node7a3a1a2,node7a3a2,node7a3a2a1,node7a3a2a2,node7a3a2a3,node7a3a2a4,node7a3a3,node7a3a3a1,node7a3a3a2,node7a3a3a2a1,node7a3a3a2a2,node7a3a3a3,node7a3a3a4,node7a3a4,node7a4,node7a4a1,node7a4a1a1,node7a4a1a2,node7a4a2,node7a4a2a1,node7a4a2a2,node7a4a2a3,node7a4a2a4,node7a4a3,node7a4a3a1,node7a4a3a2,node7a4a3a3,node7a4a3a3a1,node7a4a3a3a2,node7a4a4,node7a4a4a1,node7a4a4a2,node7a4a4a2a1,node7a4a4a2a2,node7a4a4a2a3,node7a4a4a3,node7a4a4a3a1,node7a4a4a3a2,node7a4a4a3a2a1,node7a4a4a3a2a2,node7a4a4a3a2a3,node7a4a5];

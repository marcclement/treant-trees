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
node6 = {
        childrenDropLevel: 1,
        text:{name: "FINANCES PUBLIQUES"},
        HTMLid:"6",
    },
node6a1 = {
        parent: node6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES BUDGÉTAIRES ET FISCAUX"},
        HTMLid:"6a1",
    },
node6a1a1 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité devant les charges publiques (voir Titre 5 Égalité - Égalité devant les charges publiques)"},
        HTMLid:"6a1a1",
    },
node6a1a2 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'annualité"},
        HTMLid:"6a1a2",
    },
node6a1a2a1 = {
        parent: node6a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"6a1a2a1",
        HTMLclass:"leave"
    },
node6a1a2a2 = {
        parent: node6a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exceptions"},
        HTMLid:"6a1a2a2",
        HTMLclass:"leave"
    },
node6a1a2a2a1 = {
        parent: node6a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Reports de crédits"},
        HTMLid:"6a1a2a2a1",
        HTMLclass:"leave"
    },
node6a1a2a2a2 = {
        parent: node6a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décrets d'avance"},
        HTMLid:"6a1a2a2a2",
        HTMLclass:"leave"
    },
node6a1a2a2a3 = {
        parent: node6a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulations et virements de crédits"},
        HTMLid:"6a1a2a2a3",
        HTMLclass:"leave"
    },
node6a1a3 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'unité"},
        HTMLid:"6a1a3",
    },
node6a1a3a1 = {
        parent: node6a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"6a1a3a1",
        HTMLclass:"leave"
    },
node6a1a3a2 = {
        parent: node6a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Débudgétisation"},
        HTMLid:"6a1a3a2",
        HTMLclass:"leave"
    },
node6a1a4 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'universalité"},
        HTMLid:"6a1a4",
    },
node6a1a4a1 = {
        parent: node6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"6a1a4a1",
        HTMLclass:"leave"
    },
node6a1a4a1a1 = {
        parent: node6a1a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de non-contraction"},
        HTMLid:"6a1a4a1a1",
        HTMLclass:"leave"
    },
node6a1a4a1a2 = {
        parent: node6a1a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de non-affectation"},
        HTMLid:"6a1a4a1a2",
        HTMLclass:"leave"
    },
node6a1a4a2 = {
        parent: node6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exceptions"},
        HTMLid:"6a1a4a2",
    },
node6a1a4a2a1 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affectation à des organismes tiers"},
        HTMLid:"6a1a4a2a1",
        HTMLclass:"leave"
    },
node6a1a4a2a2 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvements sur recettes au profit des collectivités territoriales et de l'Union européenne"},
        HTMLid:"6a1a4a2a2",
        HTMLclass:"leave"
    },
node6a1a4a2a3 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonds de concours"},
        HTMLid:"6a1a4a2a3",
        HTMLclass:"leave"
    },
node6a1a4a2a4 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Comptes spéciaux du trésor"},
        HTMLid:"6a1a4a2a4",
    },
node6a1a4a2a4a1 = {
        parent: node6a1a4a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a1a4a2a4a1",
        HTMLclass:"leave"
    },
node6a1a4a2a4a2 = {
        parent: node6a1a4a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances de 2001"},
        HTMLid:"6a1a4a2a4a2",
        HTMLclass:"leave"
    },
node6a1a4a2a5 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Budgets annexes"},
        HTMLid:"6a1a4a2a5",
        HTMLclass:"leave"
    },
node6a1a4a2a6 = {
        parent: node6a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"6a1a4a2a6",
        HTMLclass:"leave"
    },
node6a1a5 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de spécialité"},
        HTMLid:"6a1a5",
    },
node6a1a5a1 = {
        parent: node6a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances"},
        HTMLid:"6a1a5a1",
    },
node6a1a5a1a1 = {
        parent: node6a1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a1a5a1a1",
        HTMLclass:"leave"
    },
node6a1a5a1a2 = {
        parent: node6a1a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances de 2001"},
        HTMLid:"6a1a5a1a2",
        HTMLclass:"leave"
    },
node6a1a6 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'équilibre"},
        HTMLid:"6a1a6",
    },
node6a1a6a1 = {
        parent: node6a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"6a1a6a1",
        HTMLclass:"leave"
    },
node6a1a6a2 = {
        parent: node6a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité d'une loi de finances rectificative"},
        HTMLid:"6a1a6a2",
        HTMLclass:"leave"
    },
node6a1a6a3 = {
        parent: node6a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale"},
        HTMLid:"6a1a6a3",
        HTMLclass:"leave"
    },
node6a1a7 = {
        parent: node6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité"},
        HTMLid:"6a1a7",
    },
node6a1a7a1 = {
        parent: node6a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances"},
        HTMLid:"6a1a7a1",
    },
node6a1a7a1a1 = {
        parent: node6a1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a1a7a1a1",
        HTMLclass:"leave"
    },
node6a1a7a1a2 = {
        parent: node6a1a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances de 2001"},
        HTMLid:"6a1a7a1a2",
        HTMLclass:"leave"
    },
node6a1a7a2 = {
        parent: node6a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Comptes des administrations publiques (sincérité et régularité)"},
        HTMLid:"6a1a7a2",
        HTMLclass:"leave"
    },
node6a1a7a3 = {
        parent: node6a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale"},
        HTMLid:"6a1a7a3",
        HTMLclass:"leave"
    },
node6a1a7a4 = {
        parent: node6a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de programmation des finances publiques"},
        HTMLid:"6a1a7a4",
    },
node6a2 = {
        parent: node6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PROCÉDURE D'EXAMEN"},
        HTMLid:"6a2",
    },
node6a2a1 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Priorité d'examen"},
        HTMLid:"6a2a1",
    },
node6a2a1a1 = {
        parent: node6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen par l'Assemblée nationale (article 39)"},
        HTMLid:"6a2a1a1",
    },
node6a2a1a1a1 = {
        parent: node6a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances initiale et rectificative"},
        HTMLid:"6a2a1a1a1",
        HTMLclass:"leave"
    },
node6a2a2 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais d'examen"},
        HTMLid:"6a2a2",
    },
node6a2a2a1 = {
        parent: node6a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances initiale et rectificative"},
        HTMLid:"6a2a2a1",
        HTMLclass:"leave"
    },
node6a2a2a2 = {
        parent: node6a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de règlement"},
        HTMLid:"6a2a2a2",
        HTMLclass:"leave"
    },
node6a2a3 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haut Conseil des finances publiques"},
        HTMLid:"6a2a3",
    },
node6a2a3a1 = {
        parent: node6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition et fonctionnement du Haut Conseil"},
        HTMLid:"6a2a3a1",
        HTMLclass:"leave"
    },
node6a2a3a2 = {
        parent: node6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation du Haut Conseil"},
        HTMLid:"6a2a3a2",
        HTMLclass:"leave"
    },
node6a2a4 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Documents joints aux projets de loi"},
        HTMLid:"6a2a4",
        HTMLclass:"leave"
    },
node6a2a4a1 = {
        parent: node6a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances initiale et rectificative"},
        HTMLid:"6a2a4a1",
    },
node6a2a4a1a1 = {
        parent: node6a2a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a2a4a1a1",
        HTMLclass:"leave"
    },
node6a2a4a1a2 = {
        parent: node6a2a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances"},
        HTMLid:"6a2a4a1a2",
        HTMLclass:"leave"
    },
node6a2a4a2 = {
        parent: node6a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de règlement"},
        HTMLid:"6a2a4a2",
    },
node6a2a4a2a1 = {
        parent: node6a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a2a4a2a1",
        HTMLclass:"leave"
    },
node6a2a4a2a2 = {
        parent: node6a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances"},
        HTMLid:"6a2a4a2a2",
        HTMLclass:"leave"
    },
node6a2a4a3 = {
        parent: node6a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale"},
        HTMLid:"6a2a4a3",
        HTMLclass:"leave"
    },
node6a2a5 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Structure de la loi"},
        HTMLid:"6a2a5",
    },
node6a2a5a1 = {
        parent: node6a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition entre première et seconde partie de la loi de finances"},
        HTMLid:"6a2a5a1",
        HTMLclass:"leave"
    },
node6a2a5a2 = {
        parent: node6a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote de la première partie du projet de loi de finances avant la seconde"},
        HTMLid:"6a2a5a2",
        HTMLclass:"leave"
    },
node6a2a5a3 = {
        parent: node6a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'une mission au sein du budget de l'État"},
        HTMLid:"6a2a5a3",
    },
node6a2a5a3a1 = {
        parent: node6a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périmètre des missions"},
        HTMLid:"6a2a5a3a1",
        HTMLclass:"leave"
    },
node6a2a5a3a2 = {
        parent: node6a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Structures des missions"},
        HTMLid:"6a2a5a3a2",
        HTMLclass:"leave"
    },
node6a2a6 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement parlementaire (article 40)"},
        HTMLid:"6a2a6",
        HTMLclass:"leave"
    },
node6a2a6a1 = {
        parent: node6a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure d'examen de la recevabilité financière des amendements"},
        HTMLid:"6a2a6a1",
        HTMLclass:"leave"
    },
node6a2a6a2 = {
        parent: node6a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction d'augmenter une charge publique"},
        HTMLid:"6a2a6a2",
    },
node6a2a6a2a1 = {
        parent: node6a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation de l'incidence financière"},
        HTMLid:"6a2a6a2a1",
        HTMLclass:"leave"
    },
node6a2a6a2a2 = {
        parent: node6a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de toute compensation"},
        HTMLid:"6a2a6a2a2",
        HTMLclass:"leave"
    },
node6a2a6a3 = {
        parent: node6a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de diminuer les recettes publiques"},
        HTMLid:"6a2a6a3",
    },
node6a2a6a3a1 = {
        parent: node6a2a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compensation"},
        HTMLid:"6a2a6a3a1",
        HTMLclass:"leave"
    },
node6a2a7 = {
        parent: node6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement du Gouvernement (article 44)"},
        HTMLid:"6a2a7",
        HTMLclass:"leave"
    },
node6a3 = {
        parent: node6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PÉRIMÈTRE DE LA LOI (voir également Titre 3 Normes législatives et réglementaires - Conditions de recours à la loi)"},
        HTMLid:"6a3",
    },
node6a3a1 = {
        parent: node6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périmètre des lois organiques relatives aux lois de finances et de financement de la sécurité sociale"},
        HTMLid:"6a3a1",
        HTMLclass:"leave"
    },
node6a3a2 = {
        parent: node6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périmètre des lois"},
        HTMLid:"6a3a2",
        HTMLclass:"leave"
    },
node6a3a2a1 = {
        parent: node6a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine exclusif"},
        HTMLid:"6a3a2a1",
    },
node6a3a2a1a1 = {
        parent: node6a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances"},
        HTMLid:"6a3a2a1a1",
        HTMLclass:"leave"
    },
node6a3a2a2 = {
        parent: node6a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine facultatif"},
        HTMLid:"6a3a2a2",
        HTMLclass:"leave"
    },
node6a3a2a2a1 = {
        parent: node6a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances"},
        HTMLid:"6a3a2a2a1",
        HTMLclass:"leave"
    },
node6a3a2a3 = {
        parent: node6a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine interdit (cavaliers)"},
        HTMLid:"6a3a2a3",
    },
node6a3a2a3a1 = {
        parent: node6a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances"},
        HTMLid:"6a3a2a3a1",
    },
node6a3a2a3a1a1 = {
        parent: node6a3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'ordonnance de 1959"},
        HTMLid:"6a3a2a3a1a1",
        HTMLclass:"leave"
    },
node6a3a2a3a1a2 = {
        parent: node6a3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de finances"},
        HTMLid:"6a3a2a3a1a2",
        HTMLclass:"leave"
    },
node6a3a2a3a2 = {
        parent: node6a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale"},
        HTMLid:"6a3a2a3a2",
    },
node6a3a2a3a2a1 = {
        parent: node6a3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de financement adoptée en 1996"},
        HTMLid:"6a3a2a3a2a1",
        HTMLclass:"leave"
    },
node6a3a2a3a2a2 = {
        parent: node6a3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la loi organique relative aux lois de financement modifiée en 2005"},
        HTMLid:"6a3a2a3a2a2",
        HTMLclass:"leave"
    },
node6a4 = {
        parent: node6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "FINANCES LOCALES (voir Titre 14 Organisation décentralisée de la République)"},
        HTMLid:"6a4",
    },
node6a5 = {
        parent: node6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CONTRIBUTIONS PUBLIQUES"},
        HTMLid:"6a5",
    },
node6a5a1 = {
        parent: node6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affectation"},
        HTMLid:"6a5a1",
        HTMLclass:"leave"
    },
node6a5a2 = {
        parent: node6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvements et cotisations communautaires"},
        HTMLid:"6a5a2",
        HTMLclass:"leave"
    },
node6a5a3 = {
        parent: node6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assiette, taux et modalités de recouvrement des impositions de toutes natures, ressources non obligatoires et taxes parafiscales (voir Titre 3 Normes législatives et réglementaires - Répartition des compétences par matières - Assiette, taux... des impositions de toutes natures)"},
        HTMLid:"6a5a3",
        HTMLclass:"leave"
    },
node6a5a4 = {
        parent: node6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures contentieuses en matière fiscale (voir Titre 3 Normes législatives et réglementaires - Répartition des compétences par matières - Garanties juridictionnelles et Titre 5 Égalité - Égalité devant la justice)"},
        HTMLid:"6a5a4",
        HTMLclass:"leave"
    },
tree_config6 = [config,node6,node6a1,node6a1a1,node6a1a2,node6a1a2a1,node6a1a2a2,node6a1a2a2a1,node6a1a2a2a2,node6a1a2a2a3,node6a1a3,node6a1a3a1,node6a1a3a2,node6a1a4,node6a1a4a1,node6a1a4a1a1,node6a1a4a1a2,node6a1a4a2,node6a1a4a2a1,node6a1a4a2a2,node6a1a4a2a3,node6a1a4a2a4,node6a1a4a2a4a1,node6a1a4a2a4a2,node6a1a4a2a5,node6a1a4a2a6,node6a1a5,node6a1a5a1,node6a1a5a1a1,node6a1a5a1a2,node6a1a6,node6a1a6a1,node6a1a6a2,node6a1a6a3,node6a1a7,node6a1a7a1,node6a1a7a1a1,node6a1a7a1a2,node6a1a7a2,node6a1a7a3,node6a1a7a4,node6a2,node6a2a1,node6a2a1a1,node6a2a1a1a1,node6a2a2,node6a2a2a1,node6a2a2a2,node6a2a3,node6a2a3a1,node6a2a3a2,node6a2a4,node6a2a4a1,node6a2a4a1a1,node6a2a4a1a2,node6a2a4a2,node6a2a4a2a1,node6a2a4a2a2,node6a2a4a3,node6a2a5,node6a2a5a1,node6a2a5a2,node6a2a5a3,node6a2a5a3a1,node6a2a5a3a2,node6a2a6,node6a2a6a1,node6a2a6a2,node6a2a6a2a1,node6a2a6a2a2,node6a2a6a3,node6a2a6a3a1,node6a2a7,node6a3,node6a3a1,node6a3a2,node6a3a2a1,node6a3a2a1a1,node6a3a2a2,node6a3a2a2a1,node6a3a2a3,node6a3a2a3a1,node6a3a2a3a1a1,node6a3a2a3a1a2,node6a3a2a3a2,node6a3a2a3a2a1,node6a3a2a3a2a2,node6a4,node6a5,node6a5a1,node6a5a2,node6a5a3,node6a5a4];

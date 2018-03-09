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
node10 = {
        childrenDropLevel: 1,
        text:{name: "PARLEMENT"},
        HTMLid:"10",
    },
node10a1 = {
        parent: node10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "MANDAT PARLEMENTAIRE"},
        HTMLid:"10a1",
    },
node10a1a1 = {
        parent: node10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractères du mandat parlementaire"},
        HTMLid:"10a1a1",
    },
node10a1a1a1 = {
        parent: node10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère représentatif"},
        HTMLid:"10a1a1a1",
        HTMLclass:"leave"
    },
node10a1a1a2 = {
        parent: node10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nullité du mandat impératif"},
        HTMLid:"10a1a1a2",
        HTMLclass:"leave"
    },
node10a1a2 = {
        parent: node10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"10a1a2",
        HTMLclass:"leave"
    },
node10a1a2a1 = {
        parent: node10a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence"},
        HTMLid:"10a1a2a1",
        HTMLclass:"leave"
    },
node10a1a2a2 = {
        parent: node10a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure"},
        HTMLid:"10a1a2a2",
        HTMLclass:"leave"
    },
node10a1a2a3 = {
        parent: node10a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cumul avec l'exercice d'une fonction publique"},
        HTMLid:"10a1a2a3",
        HTMLclass:"leave"
    },
node10a1a2a3a1 = {
        parent: node10a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions publiques non électives"},
        HTMLid:"10a1a2a3a1",
        HTMLclass:"leave"
    },
node10a1a2a3a1a1 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Conseil constitutionnel"},
        HTMLid:"10a1a2a3a1a1",
        HTMLclass:"leave"
    },
node10a1a2a3a1a2 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Conseil économique, social et environnemental (L.O. 139)"},
        HTMLid:"10a1a2a3a1a2",
        HTMLclass:"leave"
    },
node10a1a2a3a1a3 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres d'une autorité administrative indépendante ou d'une autorité publique indépendante"},
        HTMLid:"10a1a2a3a1a3",
        HTMLclass:"leave"
    },
node10a1a2a3a1a4 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions conférées par un État étranger ou une organisation internationale (L.O. 143)"},
        HTMLid:"10a1a2a3a1a4",
        HTMLclass:"leave"
    },
node10a1a2a3a1a5 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics nationaux et entreprises nationales"},
        HTMLid:"10a1a2a3a1a5",
        HTMLclass:"leave"
    },
node10a1a2a3a1a6 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics locaux et sociétés publiques locales"},
        HTMLid:"10a1a2a3a1a6",
        HTMLclass:"leave"
    },
node10a1a2a3a1a7 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exceptions à l'incompatibilité posées par l'article L.O. 142"},
        HTMLid:"10a1a2a3a1a7",
        HTMLclass:"leave"
    },
node10a1a2a3a1a8 = {
        parent: node10a1a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres incompatibilités avec une fonction publique non élective"},
        HTMLid:"10a1a2a3a1a8",
        HTMLclass:"leave"
    },
node10a1a2a3a2 = {
        parent: node10a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions publiques électives"},
        HTMLid:"10a1a2a3a2",
        HTMLclass:"leave"
    },
node10a1a2a3a2a1 = {
        parent: node10a1a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tribunaux de commerce"},
        HTMLid:"10a1a2a3a2a1",
        HTMLclass:"leave"
    },
node10a1a2a4 = {
        parent: node10a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cumul avec l'exercice d'activités privées"},
        HTMLid:"10a1a2a4",
    },
node10a1a2a4a1 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés percevant des avantages d'une personne publique (L.O. 146, 1°)"},
        HTMLid:"10a1a2a4a1",
        HTMLclass:"leave"
    },
node10a1a2a4a2 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés financières (L.O. 146, 2°)"},
        HTMLid:"10a1a2a4a2",
        HTMLclass:"leave"
    },
node10a1a2a4a3 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés travaillant pour le compte ou sous le contrôle d'une personne publique ou sociétés prévues à l'article L.O. 146, 3°"},
        HTMLid:"10a1a2a4a3",
        HTMLclass:"leave"
    },
node10a1a2a4a4 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés immobilières (L.O. 146, 4°)"},
        HTMLid:"10a1a2a4a4",
        HTMLclass:"leave"
    },
node10a1a2a4a5 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés mères (L.O. 146 5°)"},
        HTMLid:"10a1a2a4a5",
        HTMLclass:"leave"
    },
node10a1a2a4a6 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Direction de fait (L.O. 146, dernier alinéa)"},
        HTMLid:"10a1a2a4a6",
        HTMLclass:"leave"
    },
node10a1a2a4a7 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Activités professionnelles, en particulier de conseil (L.O. 146-1 et L.O. 149)"},
        HTMLid:"10a1a2a4a7",
        HTMLclass:"leave"
    },
node10a1a2a4a8 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas particulier des administrateurs (L.O. 147)"},
        HTMLid:"10a1a2a4a8",
        HTMLclass:"leave"
    },
node10a1a2a4a9 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas particulier des élus désignés ès qualités (L.O. 148)"},
        HTMLid:"10a1a2a4a9",
        HTMLclass:"leave"
    },
node10a1a2a4a10 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions de liquidateur d'une société relevant de l'article L.O.146"},
        HTMLid:"10a1a2a4a10",
        HTMLclass:"leave"
    },
node10a1a2a4a11 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions de président du conseil d'administration d'une société relevant de l'article L.O.146"},
        HTMLid:"10a1a2a4a11",
        HTMLclass:"leave"
    },
node10a1a2a4a12 = {
        parent: node10a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés de conseil"},
        HTMLid:"10a1a2a4a12",
        HTMLclass:"leave"
    },
node10a1a3 = {
        parent: node10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du mandat parlementaire"},
        HTMLid:"10a1a3",
    },
node10a1a3a1 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indemnité"},
        HTMLid:"10a1a3a1",
        HTMLclass:"leave"
    },
node10a1a3a2 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Immunité"},
        HTMLid:"10a1a3a2",
    },
node10a1a3a2a1 = {
        parent: node10a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application aux parlementaires du statut de la Cour pénale internationale"},
        HTMLid:"10a1a3a2a1",
        HTMLclass:"leave"
    },
node10a1a3a2a2 = {
        parent: node10a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Levée de l'immunité"},
        HTMLid:"10a1a3a2a2",
        HTMLclass:"leave"
    },
node10a1a3a2a3 = {
        parent: node10a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irresponsabilité"},
        HTMLid:"10a1a3a2a3",
        HTMLclass:"leave"
    },
node10a1a3a2a4 = {
        parent: node10a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inviolabilité"},
        HTMLid:"10a1a3a2a4",
        HTMLclass:"leave"
    },
node10a1a3a3 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Discipline et déontologie des membres du Parlement"},
        HTMLid:"10a1a3a3",
        HTMLclass:"leave"
    },
node10a1a3a4 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remplacement"},
        HTMLid:"10a1a3a4",
        HTMLclass:"leave"
    },
node10a1a3a5 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du mandat parlementaire"},
        HTMLid:"10a1a3a5",
        HTMLclass:"leave"
    },
node10a1a3a6 = {
        parent: node10a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fin du mandat parlementaire"},
        HTMLid:"10a1a3a6",
    },
node10a1a3a6a1 = {
        parent: node10a1a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démission d'office"},
        HTMLid:"10a1a3a6a1",
        HTMLclass:"leave"
    },
node10a1a3a6a2 = {
        parent: node10a1a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déchéance de plein droit"},
        HTMLid:"10a1a3a6a2",
        HTMLclass:"leave"
    },
node10a2 = {
        parent: node10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ORGANISATION DES ASSEMBLÉES PARLEMENTAIRES ET DE LEURS TRAVAUX"},
        HTMLid:"10a2",
    },
node10a2a1 = {
        parent: node10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'autonomie des assemblées parlementaires"},
        HTMLid:"10a2a1",
        HTMLclass:"leave"
    },
node10a2a2 = {
        parent: node10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition et organisation du Parlement"},
        HTMLid:"10a2a2",
    },
node10a2a2a1 = {
        parent: node10a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition"},
        HTMLid:"10a2a2a1",
    },
node10a2a2a1a1 = {
        parent: node10a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition de l'Assemblée nationale"},
        HTMLid:"10a2a2a1a1",
        HTMLclass:"leave"
    },
node10a2a2a1a1a1 = {
        parent: node10a2a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidence sur la composition du Sénat et du Congrès"},
        HTMLid:"10a2a2a1a1a1",
        HTMLclass:"leave"
    },
node10a2a2a1a1a2 = {
        parent: node10a2a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fixation du nombre de députés"},
        HTMLid:"10a2a2a1a1a2",
        HTMLclass:"leave"
    },
node10a2a2a1a1a2a1 = {
        parent: node10a2a2a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Départements de la France métropolitaine"},
        HTMLid:"10a2a2a1a1a2a1",
        HTMLclass:"leave"
    },
node10a2a2a1a1a2a2 = {
        parent: node10a2a2a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités d'outre-mer"},
        HTMLid:"10a2a2a1a1a2a2",
        HTMLclass:"leave"
    },
node10a2a2a1a1a2a3 = {
        parent: node10a2a2a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation des Français établis hors de France"},
        HTMLid:"10a2a2a1a1a2a3",
        HTMLclass:"leave"
    },
node10a2a2a1a2 = {
        parent: node10a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition du Sénat"},
        HTMLid:"10a2a2a1a2",
    },
node10a2a2a1a2a1 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fixation du nombre de sénateurs"},
        HTMLid:"10a2a2a1a2a1",
        HTMLclass:"leave"
    },
node10a2a2a1a2a2 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des sièges"},
        HTMLid:"10a2a2a1a2a2",
        HTMLclass:"leave"
    },
node10a2a2a1a2a3 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Territoires et collectivités d'outre-mer"},
        HTMLid:"10a2a2a1a2a3",
        HTMLclass:"leave"
    },
node10a2a2a1a2a4 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivité territoriale de Corse"},
        HTMLid:"10a2a2a1a2a4",
        HTMLclass:"leave"
    },
node10a2a2a1a2a5 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation des Français établis hors de France"},
        HTMLid:"10a2a2a1a2a5",
        HTMLclass:"leave"
    },
node10a2a2a1a2a6 = {
        parent: node10a2a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collège électoral sénatorial"},
        HTMLid:"10a2a2a1a2a6",
        HTMLclass:"leave"
    },
node10a2a2a1a3 = {
        parent: node10a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition du Congrès"},
        HTMLid:"10a2a2a1a3",
    },
node10a2a2a2 = {
        parent: node10a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organe directeur"},
        HTMLid:"10a2a2a2",
    },
node10a2a2a2a1 = {
        parent: node10a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président"},
        HTMLid:"10a2a2a2a1",
        HTMLclass:"leave"
    },
node10a2a2a2a2 = {
        parent: node10a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bureau des assemblées parlementaires"},
        HTMLid:"10a2a2a2a2",
        HTMLclass:"leave"
    },
node10a2a2a2a3 = {
        parent: node10a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conférence des présidents"},
        HTMLid:"10a2a2a2a3",
        HTMLclass:"leave"
    },
node10a2a2a3 = {
        parent: node10a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organes fonctionnels"},
        HTMLid:"10a2a2a3",
    },
node10a2a2a3a1 = {
        parent: node10a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commissions et organes assimilés"},
        HTMLid:"10a2a2a3a1",
        HTMLclass:"leave"
    },
node10a2a2a3a1a1 = {
        parent: node10a2a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commissions permanentes"},
        HTMLid:"10a2a2a3a1a1",
        HTMLclass:"leave"
    },
node10a2a2a3a1a2 = {
        parent: node10a2a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commissions non permanentes et délégations"},
        HTMLid:"10a2a2a3a1a2",
    },
node10a2a2a3a1a2a1 = {
        parent: node10a2a2a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"10a2a2a3a1a2a1",
        HTMLclass:"leave"
    },
node10a2a2a3a1a2a2 = {
        parent: node10a2a2a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission d'enquête"},
        HTMLid:"10a2a2a3a1a2a2",
        HTMLclass:"leave"
    },
node10a2a2a3a1a2a3 = {
        parent: node10a2a2a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission spéciale chargée d'apurer les comptes"},
        HTMLid:"10a2a2a3a1a2a3",
        HTMLclass:"leave"
    },
node10a2a2a3a1a3 = {
        parent: node10a2a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission chargée de recueillir toute information nécesssaire à l'accomplissement de sa mission par la Haute Cour"},
        HTMLid:"10a2a2a3a1a3",
    },
node10a2a2a3a2 = {
        parent: node10a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Groupes politiques"},
        HTMLid:"10a2a2a3a2",
        HTMLclass:"leave"
    },
node10a2a2a3a2a1 = {
        parent: node10a2a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution"},
        HTMLid:"10a2a2a3a2a1",
    },
node10a2a2a3a2a1a1 = {
        parent: node10a2a2a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présidence"},
        HTMLid:"10a2a2a3a2a1a1",
        HTMLclass:"leave"
    },
node10a2a2a3a2a1a2 = {
        parent: node10a2a2a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effectif minimum"},
        HTMLid:"10a2a2a3a2a1a2",
        HTMLclass:"leave"
    },
node10a2a2a3a2a1a3 = {
        parent: node10a2a2a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration"},
        HTMLid:"10a2a2a3a2a1a3",
        HTMLclass:"leave"
    },
node10a2a2a3a2a2 = {
        parent: node10a2a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence"},
        HTMLid:"10a2a2a3a2a2",
    },
node10a2a2a3a2a2a1 = {
        parent: node10a2a2a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"10a2a2a3a2a2a1",
        HTMLclass:"leave"
    },
node10a2a2a3a2a2a2 = {
        parent: node10a2a2a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Groupes minoritaires"},
        HTMLid:"10a2a2a3a2a2a2",
    },
node10a2a2a3a2a2a3 = {
        parent: node10a2a2a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Groupes d'opposition"},
        HTMLid:"10a2a2a3a2a2a3",
    },
node10a2a3 = {
        parent: node10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation des travaux"},
        HTMLid:"10a2a3",
    },
node10a2a3a1 = {
        parent: node10a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sessions"},
        HTMLid:"10a2a3a1",
    },
node10a2a3a1a1 = {
        parent: node10a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Semaines de séance"},
        HTMLid:"10a2a3a1a1",
        HTMLclass:"leave"
    },
node10a2a3a1a2 = {
        parent: node10a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jours supplémentaires de séance"},
        HTMLid:"10a2a3a1a2",
        HTMLclass:"leave"
    },
node10a2a3a1a2a1 = {
        parent: node10a2a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tenue de jours supplémentaires de séance à l'initiative du Gouvernement"},
        HTMLid:"10a2a3a1a2a1",
        HTMLclass:"leave"
    },
node10a2a3a1a2a2 = {
        parent: node10a2a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tenue de jours supplémentaires de séance à l'initiative du Sénat"},
        HTMLid:"10a2a3a1a2a2",
        HTMLclass:"leave"
    },
node10a2a3a1a3 = {
        parent: node10a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séances"},
        HTMLid:"10a2a3a1a3",
    },
node10a2a3a1a3a1 = {
        parent: node10a2a3a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des jours et horaires de séance"},
        HTMLid:"10a2a3a1a3a1",
        HTMLclass:"leave"
    },
node10a2a3a1a3a2 = {
        parent: node10a2a3a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée d'un jour de séance"},
        HTMLid:"10a2a3a1a3a2",
        HTMLclass:"leave"
    },
node10a2a3a1a3a3 = {
        parent: node10a2a3a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publicité des séances et comités secrets"},
        HTMLid:"10a2a3a1a3a3",
        HTMLclass:"leave"
    },
node10a2a3a1a4 = {
        parent: node10a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sessions extraordinaires"},
        HTMLid:"10a2a3a1a4",
        HTMLclass:"leave"
    },
node10a2a3a1a5 = {
        parent: node10a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intersessions"},
        HTMLid:"10a2a3a1a5",
    },
node10a2a3a1a5a1 = {
        parent: node10a2a3a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inconstitutionnalité de la tenue des séances"},
        HTMLid:"10a2a3a1a5a1",
        HTMLclass:"leave"
    },
node10a2a3a1a5a2 = {
        parent: node10a2a3a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réunion des commissions permanentes"},
        HTMLid:"10a2a3a1a5a2",
        HTMLclass:"leave"
    },
node10a2a3a1a5a3 = {
        parent: node10a2a3a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi des projets et propositions de loi dans l'intervalle des sessions"},
        HTMLid:"10a2a3a1a5a3",
        HTMLclass:"leave"
    },
node10a2a3a2 = {
        parent: node10a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre du jour"},
        HTMLid:"10a2a3a2",
        HTMLclass:"leave"
    },
node10a2a3a2a1 = {
        parent: node10a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure de fixation (Vote de l'assemblée sur les propositions de la Conférence des présidents)"},
        HTMLid:"10a2a3a2a1",
        HTMLclass:"leave"
    },
node10a2a3a2a2 = {
        parent: node10a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre du jour réservé"},
        HTMLid:"10a2a3a2a2",
        HTMLclass:"leave"
    },
node10a2a3a2a3 = {
        parent: node10a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre du jour prioritaire"},
        HTMLid:"10a2a3a2a3",
        HTMLclass:"leave"
    },
node10a2a3a2a4 = {
        parent: node10a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre du jour complémentaire"},
        HTMLid:"10a2a3a2a4",
        HTMLclass:"leave"
    },
node10a2a3a2a5 = {
        parent: node10a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Travaux des commissions"},
        HTMLid:"10a2a3a2a5",
        HTMLclass:"leave"
    },
node10a2a3a3 = {
        parent: node10a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute Cour"},
        HTMLid:"10a2a3a3",
    },
node10a2a3a3a1 = {
        parent: node10a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission de la Haute Cour"},
        HTMLid:"10a2a3a3a1",
        HTMLclass:"leave"
    },
node10a2a3a3a2 = {
        parent: node10a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Débats devant la Haute Cour"},
        HTMLid:"10a2a3a3a2",
        HTMLclass:"leave"
    },
node10a2a3a3a3 = {
        parent: node10a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution tendant à la réunion de la Haute Cour"},
        HTMLid:"10a2a3a3a3",
        HTMLclass:"leave"
    },
node10a2a4 = {
        parent: node10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine du réglement des assemblées"},
        HTMLid:"10a2a4",
        HTMLclass:"leave"
    },
node10a3 = {
        parent: node10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "FONCTION LEGISLATIVE"},
        HTMLid:"10a3",
        HTMLclass:"leave"
    },
node10a3a1 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Initiative"},
        HTMLid:"10a3a1",
        HTMLclass:"leave"
    },
node10a3a1a1 = {
        parent: node10a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Projets de loi"},
        HTMLid:"10a3a1a1",
        HTMLclass:"leave"
    },
node10a3a1a1a1 = {
        parent: node10a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de dépôt"},
        HTMLid:"10a3a1a1a1",
    },
node10a3a1a1a1a1 = {
        parent: node10a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation préalable du Conseil d'État"},
        HTMLid:"10a3a1a1a1a1",
        HTMLclass:"leave"
    },
node10a3a1a1a1a2 = {
        parent: node10a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation des assemblées des collectivités d'outre-mer"},
        HTMLid:"10a3a1a1a1a2",
        HTMLclass:"leave"
    },
node10a3a1a1a1a2a1 = {
        parent: node10a3a1a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence"},
        HTMLid:"10a3a1a1a1a2a1",
        HTMLclass:"leave"
    },
node10a3a1a1a1a3 = {
        parent: node10a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres consultations"},
        HTMLid:"10a3a1a1a1a3",
        HTMLclass:"leave"
    },
node10a3a1a1a1a4 = {
        parent: node10a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Priorité du Sénat"},
        HTMLid:"10a3a1a1a1a4",
    },
node10a3a1a1a1a4a1 = {
        parent: node10a3a1a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation des collectivités territoriales"},
        HTMLid:"10a3a1a1a1a4a1",
        HTMLclass:"leave"
    },
node10a3a1a1a1a4a2 = {
        parent: node10a3a1a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Instances représentatives des Français établis hors de France"},
        HTMLid:"10a3a1a1a1a4a2",
        HTMLclass:"leave"
    },
node10a3a1a1a2 = {
        parent: node10a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'inscription : exposé des motifs, études d'impact"},
        HTMLid:"10a3a1a1a2",
        HTMLclass:"leave"
    },
node10a3a1a1a3 = {
        parent: node10a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle exercé par la Conférence des présidents (art. 39 alinéa 4)"},
        HTMLid:"10a3a1a1a3",
        HTMLclass:"leave"
    },
node10a3a1a1a4 = {
        parent: node10a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine du Conseil constitutionnel (article 39 alinéa 4)"},
        HTMLid:"10a3a1a1a4",
        HTMLclass:"leave"
    },
node10a3a1a1a5 = {
        parent: node10a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettre rectificative"},
        HTMLid:"10a3a1a1a5",
        HTMLclass:"leave"
    },
node10a3a1a2 = {
        parent: node10a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propositions de loi"},
        HTMLid:"10a3a1a2",
        HTMLclass:"leave"
    },
node10a3a1a2a1 = {
        parent: node10a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de dépôt"},
        HTMLid:"10a3a1a2a1",
        HTMLclass:"leave"
    },
node10a3a1a2a2 = {
        parent: node10a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité au regard de l'article 40 de la Constitution"},
        HTMLid:"10a3a1a2a2",
        HTMLclass:"leave"
    },
node10a3a1a2a3 = {
        parent: node10a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité au regard de l'article 43 de la Constitution"},
        HTMLid:"10a3a1a2a3",
        HTMLclass:"leave"
    },
node10a3a1a2a4 = {
        parent: node10a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité au regard de l'article 46 de la Constitution"},
        HTMLid:"10a3a1a2a4",
    },
node10a3a1a2a5 = {
        parent: node10a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation du Conseil d'État"},
        HTMLid:"10a3a1a2a5",
        HTMLclass:"leave"
    },
node10a3a2 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen en commission"},
        HTMLid:"10a3a2",
        HTMLclass:"leave"
    },
node10a3a2a1 = {
        parent: node10a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réunions"},
        HTMLid:"10a3a2a1",
        HTMLclass:"leave"
    },
node10a3a2a1a1 = {
        parent: node10a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présence"},
        HTMLid:"10a3a2a1a1",
        HTMLclass:"leave"
    },
node10a3a2a1a2 = {
        parent: node10a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Débats"},
        HTMLid:"10a3a2a1a2",
        HTMLclass:"leave"
    },
node10a3a2a1a3 = {
        parent: node10a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Votes"},
        HTMLid:"10a3a2a1a3",
        HTMLclass:"leave"
    },
node10a3a2a1a4 = {
        parent: node10a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Auditions"},
        HTMLid:"10a3a2a1a4",
        HTMLclass:"leave"
    },
node10a3a2a1a5 = {
        parent: node10a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publicité des travaux"},
        HTMLid:"10a3a2a1a5",
        HTMLclass:"leave"
    },
node10a3a2a2 = {
        parent: node10a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen des amendements en commission"},
        HTMLid:"10a3a2a2",
        HTMLclass:"leave"
    },
node10a3a2a3 = {
        parent: node10a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rapports"},
        HTMLid:"10a3a2a3",
        HTMLclass:"leave"
    },
node10a3a3 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation des débats"},
        HTMLid:"10a3a3",
        HTMLclass:"leave"
    },
node10a3a3a1 = {
        parent: node10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prérogatives du Gouvernement"},
        HTMLid:"10a3a3a1",
        HTMLclass:"leave"
    },
node10a3a3a2 = {
        parent: node10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte examiné en séance"},
        HTMLid:"10a3a3a2",
        HTMLclass:"leave"
    },
node10a3a3a3 = {
        parent: node10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Temps de parole"},
        HTMLid:"10a3a3a3",
        HTMLclass:"leave"
    },
node10a3a3a4 = {
        parent: node10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suspension de séance"},
        HTMLid:"10a3a3a4",
        HTMLclass:"leave"
    },
node10a3a3a5 = {
        parent: node10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Clôture de la discussion"},
        HTMLid:"10a3a3a5",
        HTMLclass:"leave"
    },
node10a3a4 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motions"},
        HTMLid:"10a3a4",
    },
node10a3a4a1 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"10a3a4a1",
        HTMLclass:"leave"
    },
node10a3a4a2 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question préalable"},
        HTMLid:"10a3a4a2",
        HTMLclass:"leave"
    },
node10a3a4a3 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exception d'irrecevabilité"},
        HTMLid:"10a3a4a3",
        HTMLclass:"leave"
    },
node10a3a4a4 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motion de rejet préalable"},
        HTMLid:"10a3a4a4",
        HTMLclass:"leave"
    },
node10a3a4a5 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motion de renvoi en commission"},
        HTMLid:"10a3a4a5",
        HTMLclass:"leave"
    },
node10a3a4a6 = {
        parent: node10a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motion référendaire"},
        HTMLid:"10a3a4a6",
        HTMLclass:"leave"
    },
node10a3a5 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement"},
        HTMLid:"10a3a5",
    },
node10a3a5a1 = {
        parent: node10a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du droit d'amendement"},
        HTMLid:"10a3a5a1",
        HTMLclass:"leave"
    },
node10a3a5a1a1 = {
        parent: node10a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement du Gouvernement"},
        HTMLid:"10a3a5a1a1",
        HTMLclass:"leave"
    },
node10a3a5a1a2 = {
        parent: node10a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement des parlementaires"},
        HTMLid:"10a3a5a1a2",
        HTMLclass:"leave"
    },
node10a3a5a1a3 = {
        parent: node10a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles additionnels"},
        HTMLid:"10a3a5a1a3",
        HTMLclass:"leave"
    },
node10a3a5a1a4 = {
        parent: node10a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amendements en lecture définitive devant l'Assemblée nationale"},
        HTMLid:"10a3a5a1a4",
        HTMLclass:"leave"
    },
node10a3a5a2 = {
        parent: node10a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité"},
        HTMLid:"10a3a5a2",
        HTMLclass:"leave"
    },
node10a3a5a2a1 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité au regard de l'article 40 de la Constitution"},
        HTMLid:"10a3a5a2a1",
        HTMLclass:"leave"
    },
node10a3a5a2a2 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité au regard de l'article 41 de la Constitution"},
        HTMLid:"10a3a5a2a2",
    },
node10a3a5a2a2a1 = {
        parent: node10a3a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités d'opposition de l'article 41 de la Constitution"},
        HTMLid:"10a3a5a2a2a1",
        HTMLclass:"leave"
    },
node10a3a5a2a2a2 = {
        parent: node10a3a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine du Conseil constitutionnel en cas de désaccord entre le Gouvernement et le président de l'assemblée"},
        HTMLid:"10a3a5a2a2a2",
        HTMLclass:"leave"
    },
node10a3a5a2a2a3 = {
        parent: node10a3a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Habilitation du Gouvernement à légiférer par ordonnances (article 38 de la Constitution)"},
        HTMLid:"10a3a5a2a2a3",
        HTMLclass:"leave"
    },
node10a3a5a2a3 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai de dépôt"},
        HTMLid:"10a3a5a2a3",
        HTMLclass:"leave"
    },
node10a3a5a2a4 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de l'article 44, alinéa 2"},
        HTMLid:"10a3a5a2a4",
        HTMLclass:"leave"
    },
node10a3a5a2a5 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité en première lecture"},
        HTMLid:"10a3a5a2a5",
        HTMLclass:"leave"
    },
node10a3a5a2a5a1 = {
        parent: node10a3a5a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence d'un lien direct avec le texte en discussion"},
        HTMLid:"10a3a5a2a5a1",
        HTMLclass:"leave"
    },
node10a3a5a2a5a2 = {
        parent: node10a3a5a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence d'un lien indirect avec le texte en discussion"},
        HTMLid:"10a3a5a2a5a2",
        HTMLclass:"leave"
    },
node10a3a5a2a5a3 = {
        parent: node10a3a5a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de lien direct ou de tout lien"},
        HTMLid:"10a3a5a2a5a3",
        HTMLclass:"leave"
    },
node10a3a5a2a5a4 = {
        parent: node10a3a5a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de lien indirect"},
        HTMLid:"10a3a5a2a5a4",
        HTMLclass:"leave"
    },
node10a3a5a2a6 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité après la première lecture"},
        HTMLid:"10a3a5a2a6",
    },
node10a3a5a2a6a1 = {
        parent: node10a3a5a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence d'un lien direct avec le texte en discussion"},
        HTMLid:"10a3a5a2a6a1",
        HTMLclass:"leave"
    },
node10a3a5a2a6a2 = {
        parent: node10a3a5a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Disposition ayant pour objet d'assurer le respect de la Constitution"},
        HTMLid:"10a3a5a2a6a2",
        HTMLclass:"leave"
    },
node10a3a5a2a6a3 = {
        parent: node10a3a5a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'un lien direct avec le texte en discussion"},
        HTMLid:"10a3a5a2a6a3",
        HTMLclass:"leave"
    },
node10a3a5a2a6a4 = {
        parent: node10a3a5a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanction de l'adoption irrégulière d'un amendement de suppression"},
        HTMLid:"10a3a5a2a6a4",
        HTMLclass:"leave"
    },
node10a3a5a2a7 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des amendements aux projets de loi de finances"},
        HTMLid:"10a3a5a2a7",
        HTMLclass:"leave"
    },
node10a3a5a2a8 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des amendements aux projets de loi de financement de la sécurité sociale"},
        HTMLid:"10a3a5a2a8",
        HTMLclass:"leave"
    },
node10a3a5a2a9 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Textes concernant un territoire d'outre-mer"},
        HTMLid:"10a3a5a2a9",
        HTMLclass:"leave"
    },
node10a3a5a2a10 = {
        parent: node10a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des amendements aux textes organiques"},
        HTMLid:"10a3a5a2a10",
        HTMLclass:"leave"
    },
node10a3a5a2a10a1 = {
        parent: node10a3a5a2a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence d'un lien avec le texte en discussion"},
        HTMLid:"10a3a5a2a10a1",
        HTMLclass:"leave"
    },
node10a3a5a2a10a2 = {
        parent: node10a3a5a2a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de lien avec le texte en discussion"},
        HTMLid:"10a3a5a2a10a2",
        HTMLclass:"leave"
    },
node10a3a5a3 = {
        parent: node10a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sous-amendement"},
        HTMLid:"10a3a5a3",
        HTMLclass:"leave"
    },
node10a3a6 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Seconde délibération"},
        HTMLid:"10a3a6",
        HTMLclass:"leave"
    },
node10a3a7 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote"},
        HTMLid:"10a3a7",
    },
node10a3a7a1 = {
        parent: node10a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Explication de vote"},
        HTMLid:"10a3a7a1",
        HTMLclass:"leave"
    },
node10a3a7a2 = {
        parent: node10a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du droit de vote personnel : Constitution, article 27"},
        HTMLid:"10a3a7a2",
    },
node10a3a7a2a1 = {
        parent: node10a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique"},
        HTMLid:"10a3a7a2a1",
        HTMLclass:"leave"
    },
node10a3a7a2a2 = {
        parent: node10a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs donnés aux groupes et aux présidents de groupe"},
        HTMLid:"10a3a7a2a2",
        HTMLclass:"leave"
    },
node10a3a7a2a3 = {
        parent: node10a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Scrutins secrets"},
        HTMLid:"10a3a7a2a3",
        HTMLclass:"leave"
    },
node10a3a7a2a4 = {
        parent: node10a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décompte des suffrages et délégations de vote"},
        HTMLid:"10a3a7a2a4",
        HTMLclass:"leave"
    },
node10a3a7a3 = {
        parent: node10a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités du vote"},
        HTMLid:"10a3a7a3",
        HTMLclass:"leave"
    },
node10a3a7a3a1 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Quorum"},
        HTMLid:"10a3a7a3a1",
        HTMLclass:"leave"
    },
node10a3a7a3a2 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par article"},
        HTMLid:"10a3a7a3a2",
        HTMLclass:"leave"
    },
node10a3a7a3a3 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote de l'intitulé"},
        HTMLid:"10a3a7a3a3",
        HTMLclass:"leave"
    },
node10a3a7a3a4 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en oeuvre de l'article 44, alinéa 3, de la Constitution (Vote bloqué)"},
        HTMLid:"10a3a7a3a4",
        HTMLclass:"leave"
    },
node10a3a7a3a5 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en oeuvre de l'article 49, alinéa 3, de la Constitution"},
        HTMLid:"10a3a7a3a5",
        HTMLclass:"leave"
    },
node10a3a7a3a6 = {
        parent: node10a3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Scrutin public"},
        HTMLid:"10a3a7a3a6",
        HTMLclass:"leave"
    },
node10a3a8 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lectures successives et promulgation"},
        HTMLid:"10a3a8",
        HTMLclass:"leave"
    },
node10a3a8a1 = {
        parent: node10a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urgence et procédure accélérée"},
        HTMLid:"10a3a8a1",
        HTMLclass:"leave"
    },
node10a3a8a2 = {
        parent: node10a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lectures ultérieures"},
        HTMLid:"10a3a8a2",
    },
node10a3a8a2a1 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen successif par les deux assemblées"},
        HTMLid:"10a3a8a2a1",
        HTMLclass:"leave"
    },
node10a3a8a2a2 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Échec de la commission mixte paritaire"},
        HTMLid:"10a3a8a2a2",
        HTMLclass:"leave"
    },
node10a3a8a2a3 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du Gouvernement d'être entendu par les assemblées"},
        HTMLid:"10a3a8a2a3",
        HTMLclass:"leave"
    },
node10a3a8a2a4 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lectures ultérieures ne couvrant pas une irrégularité de procédure"},
        HTMLid:"10a3a8a2a4",
        HTMLclass:"leave"
    },
node10a3a8a2a5 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte de base après rejet par l'autre assemblée"},
        HTMLid:"10a3a8a2a5",
        HTMLclass:"leave"
    },
node10a3a8a2a6 = {
        parent: node10a3a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lecture définitive par l'Assemblée nationale"},
        HTMLid:"10a3a8a2a6",
        HTMLclass:"leave"
    },
node10a3a8a3 = {
        parent: node10a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission mixte paritaire"},
        HTMLid:"10a3a8a3",
        HTMLclass:"leave"
    },
node10a3a8a3a1 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours à la commission mixte paritaire et demande à l'Assemblée de statuer définitivement"},
        HTMLid:"10a3a8a3a1",
        HTMLclass:"leave"
    },
node10a3a8a3a2 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte de la commission mixte paritaire ne portant que sur les dispositions restant en discussion"},
        HTMLid:"10a3a8a3a2",
        HTMLclass:"leave"
    },
node10a3a8a3a3 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amendements du Gouvernement au texte élaboré par la commission"},
        HTMLid:"10a3a8a3a3",
        HTMLclass:"leave"
    },
node10a3a8a3a4 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amendements déposés par le Gouvernement postérieurement à la réunion de la commission"},
        HTMLid:"10a3a8a3a4",
        HTMLclass:"leave"
    },
node10a3a8a3a5 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amendements adoptés postérieurement à l'échec de la commission"},
        HTMLid:"10a3a8a3a5",
        HTMLclass:"leave"
    },
node10a3a8a3a6 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances et de financement de la sécurité sociale et urgence"},
        HTMLid:"10a3a8a3a6",
        HTMLclass:"leave"
    },
node10a3a8a3a7 = {
        parent: node10a3a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Travaux d'une commission mixte paritaire"},
        HTMLid:"10a3a8a3a7",
        HTMLclass:"leave"
    },
node10a3a8a4 = {
        parent: node10a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nouvelle délibération en application de l'article 10 de la Constitution"},
        HTMLid:"10a3a8a4",
        HTMLclass:"leave"
    },
node10a3a8a5 = {
        parent: node10a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Promulgation"},
        HTMLid:"10a3a8a5",
        HTMLclass:"leave"
    },
node10a3a9 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures particulières"},
        HTMLid:"10a3a9",
    },
node10a3a9a1 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois constitutionnelles"},
        HTMLid:"10a3a9a1",
        HTMLclass:"leave"
    },
node10a3a9a1a1 = {
        parent: node10a3a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Adoption de la loi constitutionnelle par le Congrès"},
        HTMLid:"10a3a9a1a1",
        HTMLclass:"leave"
    },
node10a3a9a2 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois organiques"},
        HTMLid:"10a3a9a2",
    },
node10a3a9a2a1 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles générales de procédure"},
        HTMLid:"10a3a9a2a1",
        HTMLclass:"leave"
    },
node10a3a9a2a2 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à des dispositions d'une loi ordinaire non définitivement adoptée"},
        HTMLid:"10a3a9a2a2",
        HTMLclass:"leave"
    },
node10a3a9a2a3 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à des dispositions d'une loi ordinaire définitivement adoptée"},
        HTMLid:"10a3a9a2a3",
        HTMLclass:"leave"
    },
node10a3a9a2a4 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative au Sénat"},
        HTMLid:"10a3a9a2a4",
        HTMLclass:"leave"
    },
node10a3a9a2a5 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à la Nouvelle-Calédonie prévue par l'article 77 de la Constitution"},
        HTMLid:"10a3a9a2a5",
        HTMLclass:"leave"
    },
node10a3a9a2a6 = {
        parent: node10a3a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique prévue par l'article 88-3 de la Constitution"},
        HTMLid:"10a3a9a2a6",
        HTMLclass:"leave"
    },
node10a3a9a3 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances et de financement de la sécurité sociale (voir Titre 6 Finances publiques)"},
        HTMLid:"10a3a9a3",
    },
node10a3a9a4 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions affectant des décisions prises par des collectivités d'outre-mer"},
        HTMLid:"10a3a9a4",
        HTMLclass:"leave"
    },
node10a3a9a5 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propositions de loi présentées en application du troisième alinéa de l'article 11 de la Constitution"},
        HTMLid:"10a3a9a5",
        HTMLclass:"leave"
    },
node10a3a9a6 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures abrégées"},
        HTMLid:"10a3a9a6",
    },
node10a3a9a6a1 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de principe"},
        HTMLid:"10a3a9a6a1",
        HTMLclass:"leave"
    },
node10a3a9a6a2 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application de la procédure d'adoption simplifiée"},
        HTMLid:"10a3a9a6a2",
        HTMLclass:"leave"
    },
node10a3a9a6a3 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prérogatives du Gouvernement"},
        HTMLid:"10a3a9a6a3",
        HTMLclass:"leave"
    },
node10a3a9a6a4 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités de la demande d'examen selon la procédure d'adoption simplifiée"},
        HTMLid:"10a3a9a6a4",
        HTMLclass:"leave"
    },
node10a3a9a6a5 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen des projets et propositions de loi par les commissions"},
        HTMLid:"10a3a9a6a5",
        HTMLclass:"leave"
    },
node10a3a9a6a6 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de dépôt des amendements à un texte faisant l'objet d'une procédure d'adoption simplifiée et modalités de discussion de ce texte"},
        HTMLid:"10a3a9a6a6",
        HTMLclass:"leave"
    },
node10a3a9a6a7 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités de mise aux voix"},
        HTMLid:"10a3a9a6a7",
        HTMLclass:"leave"
    },
node10a3a9a6a8 = {
        parent: node10a3a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application au vote sans débat"},
        HTMLid:"10a3a9a6a8",
    },
node10a3a9a6a8a1 = {
        parent: node10a3a9a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles générales"},
        HTMLid:"10a3a9a6a8a1",
        HTMLclass:"leave"
    },
node10a3a9a6a8a2 = {
        parent: node10a3a9a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'amendement des parlementaires"},
        HTMLid:"10a3a9a6a8a2",
        HTMLclass:"leave"
    },
node10a3a9a7 = {
        parent: node10a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures programmées"},
        HTMLid:"10a3a9a7",
        HTMLclass:"leave"
    },
node10a3a10 = {
        parent: node10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualité de la loi"},
        HTMLid:"10a3a10",
    },
node10a3a10a1 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté de la loi"},
        HTMLid:"10a3a10a1",
        HTMLclass:"leave"
    },
node10a3a10a2 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de sincérité des débats parlementaires"},
        HTMLid:"10a3a10a2",
        HTMLclass:"leave"
    },
node10a3a10a3 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif d'accessibilité et d'intelligibilité (voir également ci-dessus Principe de clarté de la loi)"},
        HTMLid:"10a3a10a3",
        HTMLclass:"leave"
    },
node10a3a10a4 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de précision de la loi"},
        HTMLid:"10a3a10a4",
    },
node10a3a10a4a1 = {
        parent: node10a3a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"10a3a10a4a1",
        HTMLclass:"leave"
    },
node10a3a10a4a2 = {
        parent: node10a3a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence découlant de l'article 34 de la Constitution de 1958"},
        HTMLid:"10a3a10a4a2",
        HTMLclass:"leave"
    },
node10a3a10a4a3 = {
        parent: node10a3a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence découlant de l'article 72-2 de la Constitution du 4 octobre 1958"},
        HTMLid:"10a3a10a4a3",
        HTMLclass:"leave"
    },
node10a3a10a4a4 = {
        parent: node10a3a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence découlant du principe de la légalité des délits et des peines (article 8 de la Déclaration de 1789)"},
        HTMLid:"10a3a10a4a4",
        HTMLclass:"leave"
    },
node10a3a10a5 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Complexité excessive"},
        HTMLid:"10a3a10a5",
        HTMLclass:"leave"
    },
node10a3a10a6 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de normativité de la loi"},
        HTMLid:"10a3a10a6",
        HTMLclass:"leave"
    },
node10a3a10a6a1 = {
        parent: node10a3a10a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"10a3a10a6a1",
        HTMLclass:"leave"
    },
node10a3a10a6a2 = {
        parent: node10a3a10a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exceptions"},
        HTMLid:"10a3a10a6a2",
        HTMLclass:"leave"
    },
node10a3a10a7 = {
        parent: node10a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Encadrement du droit d'amendement (voir ci-dessus Droit d'amendement et Qualité de la loi - Principe de clarté et de sincérité des débats)"},
        HTMLid:"10a3a10a7",
    },
node10a4 = {
        parent: node10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "FONCTION DE CONTRÔLE ET D'ÉVALUATION"},
        HTMLid:"10a4",
        HTMLclass:"leave"
    },
node10a4a1 = {
        parent: node10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des nominations"},
        HTMLid:"10a4a1",
        HTMLclass:"leave"
    },
node10a4a2 = {
        parent: node10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en jeu de la responsabilité du Gouvernement"},
        HTMLid:"10a4a2",
        HTMLclass:"leave"
    },
node10a4a2a1 = {
        parent: node10a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Majorité exigée pour le vote d'une motion de censure"},
        HTMLid:"10a4a2a1",
        HTMLclass:"leave"
    },
node10a4a2a2 = {
        parent: node10a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motion de censure et article 16 de la Constitution"},
        HTMLid:"10a4a2a2",
        HTMLclass:"leave"
    },
node10a4a2a3 = {
        parent: node10a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de droit de réponse du Sénat à la lecture du programme du Gouvernement ou à une déclaration de politique générale"},
        HTMLid:"10a4a2a3",
        HTMLclass:"leave"
    },
node10a4a2a4 = {
        parent: node10a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure applicable aux lois de finances"},
        HTMLid:"10a4a2a4",
        HTMLclass:"leave"
    },
node10a4a2a5 = {
        parent: node10a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation de la démission du Gouvernement (article 50)"},
        HTMLid:"10a4a2a5",
        HTMLclass:"leave"
    },
node10a4a3 = {
        parent: node10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'activité gouvernementale et évaluation des politiques publiques en séance et en commission"},
        HTMLid:"10a4a3",
    },
node10a4a3a1 = {
        parent: node10a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle en séance publique"},
        HTMLid:"10a4a3a1",
    },
node10a4a3a1a1 = {
        parent: node10a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Débats"},
        HTMLid:"10a4a3a1a1",
        HTMLclass:"leave"
    },
node10a4a3a1a2 = {
        parent: node10a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions"},
        HTMLid:"10a4a3a1a2",
        HTMLclass:"leave"
    },
node10a4a3a2 = {
        parent: node10a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des commissions permanentes"},
        HTMLid:"10a4a3a2",
        HTMLclass:"leave"
    },
node10a4a3a2a1 = {
        parent: node10a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle de la commission chargée des finances"},
        HTMLid:"10a4a3a2a1",
        HTMLclass:"leave"
    },
node10a4a3a2a2 = {
        parent: node10a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Missions d'information communes à plusieurs commissions"},
        HTMLid:"10a4a3a2a2",
        HTMLclass:"leave"
    },
node10a4a3a3 = {
        parent: node10a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des commissions et missions non permanentes"},
        HTMLid:"10a4a3a3",
        HTMLclass:"leave"
    },
node10a4a3a3a1 = {
        parent: node10a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des commissions d'enquête"},
        HTMLid:"10a4a3a3a1",
        HTMLclass:"leave"
    },
node10a4a3a3a2 = {
        parent: node10a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des missions d'information"},
        HTMLid:"10a4a3a3a2",
        HTMLclass:"leave"
    },
node10a4a3a3a3 = {
        parent: node10a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle du comité d'évaluation des politiques publiques"},
        HTMLid:"10a4a3a3a3",
        HTMLclass:"leave"
    },
node10a4a3a4 = {
        parent: node10a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle de la Cour des comptes"},
        HTMLid:"10a4a3a4",
        HTMLclass:"leave"
    },
node10a4a4 = {
        parent: node10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres procédures de contrôle et d'information"},
        HTMLid:"10a4a4",
    },
node10a4a4a1 = {
        parent: node10a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des interventions militaires à l'étranger"},
        HTMLid:"10a4a4a1",
        HTMLclass:"leave"
    },
node10a4a4a2 = {
        parent: node10a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suivi des activités de l'Union européenne"},
        HTMLid:"10a4a4a2",
        HTMLclass:"leave"
    },
node10a4a4a2a1 = {
        parent: node10a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propositions de résolution portant sur les propositions d'actes communautaires"},
        HTMLid:"10a4a4a2a1",
        HTMLclass:"leave"
    },
node10a4a4a2a2 = {
        parent: node10a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propositions portant sur les textes transmis en application de l'article 88-4 de la Constitution"},
        HTMLid:"10a4a4a2a2",
        HTMLclass:"leave"
    },
node10a4a4a2a3 = {
        parent: node10a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des articles 88-6 et 88-7 de la Constitution"},
        HTMLid:"10a4a4a2a3",
        HTMLclass:"leave"
    },
node10a4a4a3 = {
        parent: node10a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pétitions"},
        HTMLid:"10a4a4a3",
    },
node10a4a4a3a1 = {
        parent: node10a4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande motivée de renvoi d'une pétition à une commission permanente"},
        HTMLid:"10a4a4a3a1",
        HTMLclass:"leave"
    },
node10a4a4a3a2 = {
        parent: node10a4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suite donnée aux pétitions"},
        HTMLid:"10a4a4a3a2",
        HTMLclass:"leave"
    },
node10a4a4a4 = {
        parent: node10a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolutions"},
        HTMLid:"10a4a4a4",
        HTMLclass:"leave"
    },
node10a4a4a4a1 = {
        parent: node10a4a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objet"},
        HTMLid:"10a4a4a4a1",
        HTMLclass:"leave"
    },
node10a4a4a4a2 = {
        parent: node10a4a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen d'une demande de levée d'immunité parlementaire"},
        HTMLid:"10a4a4a4a2",
        HTMLclass:"leave"
    },
tree_config10 = [config,node10,node10a1,node10a1a1,node10a1a1a1,node10a1a1a2,node10a1a2,node10a1a2a1,node10a1a2a2,node10a1a2a3,node10a1a2a3a1,node10a1a2a3a1a1,node10a1a2a3a1a2,node10a1a2a3a1a3,node10a1a2a3a1a4,node10a1a2a3a1a5,node10a1a2a3a1a6,node10a1a2a3a1a7,node10a1a2a3a1a8,node10a1a2a3a2,node10a1a2a3a2a1,node10a1a2a4,node10a1a2a4a1,node10a1a2a4a2,node10a1a2a4a3,node10a1a2a4a4,node10a1a2a4a5,node10a1a2a4a6,node10a1a2a4a7,node10a1a2a4a8,node10a1a2a4a9,node10a1a2a4a10,node10a1a2a4a11,node10a1a2a4a12,node10a1a3,node10a1a3a1,node10a1a3a2,node10a1a3a2a1,node10a1a3a2a2,node10a1a3a2a3,node10a1a3a2a4,node10a1a3a3,node10a1a3a4,node10a1a3a5,node10a1a3a6,node10a1a3a6a1,node10a1a3a6a2,node10a2,node10a2a1,node10a2a2,node10a2a2a1,node10a2a2a1a1,node10a2a2a1a1a1,node10a2a2a1a1a2,node10a2a2a1a1a2a1,node10a2a2a1a1a2a2,node10a2a2a1a1a2a3,node10a2a2a1a2,node10a2a2a1a2a1,node10a2a2a1a2a2,node10a2a2a1a2a3,node10a2a2a1a2a4,node10a2a2a1a2a5,node10a2a2a1a2a6,node10a2a2a1a3,node10a2a2a2,node10a2a2a2a1,node10a2a2a2a2,node10a2a2a2a3,node10a2a2a3,node10a2a2a3a1,node10a2a2a3a1a1,node10a2a2a3a1a2,node10a2a2a3a1a2a1,node10a2a2a3a1a2a2,node10a2a2a3a1a2a3,node10a2a2a3a1a3,node10a2a2a3a2,node10a2a2a3a2a1,node10a2a2a3a2a1a1,node10a2a2a3a2a1a2,node10a2a2a3a2a1a3,node10a2a2a3a2a2,node10a2a2a3a2a2a1,node10a2a2a3a2a2a2,node10a2a2a3a2a2a3,node10a2a3,node10a2a3a1,node10a2a3a1a1,node10a2a3a1a2,node10a2a3a1a2a1,node10a2a3a1a2a2,node10a2a3a1a3,node10a2a3a1a3a1,node10a2a3a1a3a2,node10a2a3a1a3a3,node10a2a3a1a4,node10a2a3a1a5,node10a2a3a1a5a1,node10a2a3a1a5a2,node10a2a3a1a5a3,node10a2a3a2,node10a2a3a2a1,node10a2a3a2a2,node10a2a3a2a3,node10a2a3a2a4,node10a2a3a2a5,node10a2a3a3,node10a2a3a3a1,node10a2a3a3a2,node10a2a3a3a3,node10a2a4,node10a3,node10a3a1,node10a3a1a1,node10a3a1a1a1,node10a3a1a1a1a1,node10a3a1a1a1a2,node10a3a1a1a1a2a1,node10a3a1a1a1a3,node10a3a1a1a1a4,node10a3a1a1a1a4a1,node10a3a1a1a1a4a2,node10a3a1a1a2,node10a3a1a1a3,node10a3a1a1a4,node10a3a1a1a5,node10a3a1a2,node10a3a1a2a1,node10a3a1a2a2,node10a3a1a2a3,node10a3a1a2a4,node10a3a1a2a5,node10a3a2,node10a3a2a1,node10a3a2a1a1,node10a3a2a1a2,node10a3a2a1a3,node10a3a2a1a4,node10a3a2a1a5,node10a3a2a2,node10a3a2a3,node10a3a3,node10a3a3a1,node10a3a3a2,node10a3a3a3,node10a3a3a4,node10a3a3a5,node10a3a4,node10a3a4a1,node10a3a4a2,node10a3a4a3,node10a3a4a4,node10a3a4a5,node10a3a4a6,node10a3a5,node10a3a5a1,node10a3a5a1a1,node10a3a5a1a2,node10a3a5a1a3,node10a3a5a1a4,node10a3a5a2,node10a3a5a2a1,node10a3a5a2a2,node10a3a5a2a2a1,node10a3a5a2a2a2,node10a3a5a2a2a3,node10a3a5a2a3,node10a3a5a2a4,node10a3a5a2a5,node10a3a5a2a5a1,node10a3a5a2a5a2,node10a3a5a2a5a3,node10a3a5a2a5a4,node10a3a5a2a6,node10a3a5a2a6a1,node10a3a5a2a6a2,node10a3a5a2a6a3,node10a3a5a2a6a4,node10a3a5a2a7,node10a3a5a2a8,node10a3a5a2a9,node10a3a5a2a10,node10a3a5a2a10a1,node10a3a5a2a10a2,node10a3a5a3,node10a3a6,node10a3a7,node10a3a7a1,node10a3a7a2,node10a3a7a2a1,node10a3a7a2a2,node10a3a7a2a3,node10a3a7a2a4,node10a3a7a3,node10a3a7a3a1,node10a3a7a3a2,node10a3a7a3a3,node10a3a7a3a4,node10a3a7a3a5,node10a3a7a3a6,node10a3a8,node10a3a8a1,node10a3a8a2,node10a3a8a2a1,node10a3a8a2a2,node10a3a8a2a3,node10a3a8a2a4,node10a3a8a2a5,node10a3a8a2a6,node10a3a8a3,node10a3a8a3a1,node10a3a8a3a2,node10a3a8a3a3,node10a3a8a3a4,node10a3a8a3a5,node10a3a8a3a6,node10a3a8a3a7,node10a3a8a4,node10a3a8a5,node10a3a9,node10a3a9a1,node10a3a9a1a1,node10a3a9a2,node10a3a9a2a1,node10a3a9a2a2,node10a3a9a2a3,node10a3a9a2a4,node10a3a9a2a5,node10a3a9a2a6,node10a3a9a3,node10a3a9a4,node10a3a9a5,node10a3a9a6,node10a3a9a6a1,node10a3a9a6a2,node10a3a9a6a3,node10a3a9a6a4,node10a3a9a6a5,node10a3a9a6a6,node10a3a9a6a7,node10a3a9a6a8,node10a3a9a6a8a1,node10a3a9a6a8a2,node10a3a9a7,node10a3a10,node10a3a10a1,node10a3a10a2,node10a3a10a3,node10a3a10a4,node10a3a10a4a1,node10a3a10a4a2,node10a3a10a4a3,node10a3a10a4a4,node10a3a10a5,node10a3a10a6,node10a3a10a6a1,node10a3a10a6a2,node10a3a10a7,node10a4,node10a4a1,node10a4a2,node10a4a2a1,node10a4a2a2,node10a4a2a3,node10a4a2a4,node10a4a2a5,node10a4a3,node10a4a3a1,node10a4a3a1a1,node10a4a3a1a2,node10a4a3a2,node10a4a3a2a1,node10a4a3a2a2,node10a4a3a3,node10a4a3a3a1,node10a4a3a3a2,node10a4a3a3a3,node10a4a3a4,node10a4a4,node10a4a4a1,node10a4a4a2,node10a4a4a2a1,node10a4a4a2a2,node10a4a4a2a3,node10a4a4a3,node10a4a4a3a1,node10a4a4a3a2,node10a4a4a4,node10a4a4a4a1,node10a4a4a4a2];

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
node12 = {
        childrenDropLevel: 1,
        text:{name: "JURIDICTIONS ET AUTORITÉ JUDICIAIRE"},
        HTMLid:"12",
    },
node12a1 = {
        parent: node12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "JURIDICTIONS ET SÉPARATION DES POUVOIRS"},
        HTMLid:"12a1",
    },
node12a1a1 = {
        parent: node12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dualité des ordres de juridiction"},
        HTMLid:"12a1a1",
        HTMLclass:"leave"
    },
node12a1a2 = {
        parent: node12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance de la justice et des juridictions"},
        HTMLid:"12a1a2",
    },
node12a1a2a1 = {
        parent: node12a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"12a1a2a1",
    },
node12a1a2a1a1 = {
        parent: node12a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridiction judiciaire"},
        HTMLid:"12a1a2a1a1",
        HTMLclass:"leave"
    },
node12a1a2a1a2 = {
        parent: node12a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridiction administrative"},
        HTMLid:"12a1a2a1a2",
        HTMLclass:"leave"
    },
node12a1a2a2 = {
        parent: node12a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"12a1a2a2",
        HTMLclass:"leave"
    },
node12a1a2a2a1 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"12a1a2a2a1",
        HTMLclass:"leave"
    },
node12a1a2a2a2 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine et pouvoirs d'office"},
        HTMLid:"12a1a2a2a2",
        HTMLclass:"leave"
    },
node12a1a2a2a3 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validations législatives (voir également Titre 4 Droits et liberté - Sécurité juridique)"},
        HTMLid:"12a1a2a2a3",
        HTMLclass:"leave"
    },
node12a1a2a2a4 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Homologation d'une transaction"},
        HTMLid:"12a1a2a2a4",
        HTMLclass:"leave"
    },
node12a1a2a2a5 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exécution d'une décision juridictionnelle"},
        HTMLid:"12a1a2a2a5",
        HTMLclass:"leave"
    },
node12a1a2a2a6 = {
        parent: node12a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret du délibéré"},
        HTMLid:"12a1a2a2a6",
        HTMLclass:"leave"
    },
node12a1a3 = {
        parent: node12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au recours juridictionnel"},
        HTMLid:"12a1a3",
    },
node12a1a3a1 = {
        parent: node12a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consécration du principe"},
        HTMLid:"12a1a3a1",
        HTMLclass:"leave"
    },
node12a1a3a2 = {
        parent: node12a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application à la procédure administrative"},
        HTMLid:"12a1a3a2",
        HTMLclass:"leave"
    },
node12a1a3a3 = {
        parent: node12a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application à la procédure judiciaire"},
        HTMLid:"12a1a3a3",
        HTMLclass:"leave"
    },
node12a2 = {
        parent: node12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "STATUTS DES JUGES ET DES MAGISTRATS"},
        HTMLid:"12a2",
    },
node12a2a1 = {
        parent: node12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes constitutionnels relatifs aux statuts"},
        HTMLid:"12a2a1",
    },
node12a2a1a1 = {
        parent: node12a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance statutaire"},
        HTMLid:"12a2a1a1",
        HTMLclass:"leave"
    },
node12a2a1a2 = {
        parent: node12a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigences de capacité et d'impartialité (article 6 de la Déclaration de 1789)"},
        HTMLid:"12a2a1a2",
        HTMLclass:"leave"
    },
node12a2a1a3 = {
        parent: node12a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes propres à l'autorité judiciaire"},
        HTMLid:"12a2a1a3",
    },
node12a2a1a3a1 = {
        parent: node12a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de corps judiciaire"},
        HTMLid:"12a2a1a3a1",
        HTMLclass:"leave"
    },
node12a2a1a3a2 = {
        parent: node12a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la loi organique"},
        HTMLid:"12a2a1a3a2",
        HTMLclass:"leave"
    },
node12a2a1a3a3 = {
        parent: node12a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Unité du corps judiciaire"},
        HTMLid:"12a2a1a3a3",
        HTMLclass:"leave"
    },
node12a2a1a3a4 = {
        parent: node12a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inamovibilité des magistrats du siège"},
        HTMLid:"12a2a1a3a4",
        HTMLclass:"leave"
    },
node12a2a1a3a5 = {
        parent: node12a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions particulières aux magistrats du parquet"},
        HTMLid:"12a2a1a3a5",
        HTMLclass:"leave"
    },
node12a2a2 = {
        parent: node12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès aux fonctions judiciaires"},
        HTMLid:"12a2a2",
    },
node12a2a2a1 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"12a2a2a1",
        HTMLclass:"leave"
    },
node12a2a2a2 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement par concours"},
        HTMLid:"12a2a2a2",
        HTMLclass:"leave"
    },
node12a2a2a3 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement à titre exceptionnel"},
        HTMLid:"12a2a2a3",
        HTMLclass:"leave"
    },
node12a2a2a4 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement latéral"},
        HTMLid:"12a2a2a4",
        HTMLclass:"leave"
    },
node12a2a2a5 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement à titre temporaire et nomination directe"},
        HTMLid:"12a2a2a5",
        HTMLclass:"leave"
    },
node12a2a2a6 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situations spécifiques antérieures à l'indépendance de l'Algérie"},
        HTMLid:"12a2a2a6",
        HTMLclass:"leave"
    },
node12a2a2a7 = {
        parent: node12a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Magistrats honoraires"},
        HTMLid:"12a2a2a7",
        HTMLclass:"leave"
    },
node12a2a3 = {
        parent: node12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement de la carrière"},
        HTMLid:"12a2a3",
    },
node12a2a3a1 = {
        parent: node12a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affectation"},
        HTMLid:"12a2a3a1",
        HTMLclass:"leave"
    },
node12a2a3a2 = {
        parent: node12a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avancement"},
        HTMLid:"12a2a3a2",
        HTMLclass:"leave"
    },
node12a2a3a2a1 = {
        parent: node12a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hiérarchie judiciaire"},
        HTMLid:"12a2a3a2a1",
        HTMLclass:"leave"
    },
node12a2a3a2a2 = {
        parent: node12a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ancienneté"},
        HTMLid:"12a2a3a2a2",
        HTMLclass:"leave"
    },
node12a2a3a3 = {
        parent: node12a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formation continue des magistrats"},
        HTMLid:"12a2a3a3",
        HTMLclass:"leave"
    },
node12a2a3a4 = {
        parent: node12a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"12a2a3a4",
    },
node12a2a3a4a1 = {
        parent: node12a2a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice d'une activité professionnelle"},
        HTMLid:"12a2a3a4a1",
        HTMLclass:"leave"
    },
node12a2a3a4a2 = {
        parent: node12a2a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités du fait de l'exercice d'un mandat électif"},
        HTMLid:"12a2a3a4a2",
        HTMLclass:"leave"
    },
node12a2a3a4a3 = {
        parent: node12a2a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres incompatibilités"},
        HTMLid:"12a2a3a4a3",
        HTMLclass:"leave"
    },
node12a2a3a5 = {
        parent: node12a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Positions administratives"},
        HTMLid:"12a2a3a5",
    },
node12a2a3a5a1 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détachement, disponibilité et mobilité statutaire"},
        HTMLid:"12a2a3a5a1",
        HTMLclass:"leave"
    },
node12a2a3a5a2 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Congés"},
        HTMLid:"12a2a3a5a2",
        HTMLclass:"leave"
    },
node12a2a3a5a3 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prolongation des fonctions"},
        HTMLid:"12a2a3a5a3",
        HTMLclass:"leave"
    },
node12a2a3a5a4 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applicabilité des dispositions du statut général des fonctionnaires"},
        HTMLid:"12a2a3a5a4",
        HTMLclass:"leave"
    },
node12a2a3a5a5 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste des magistrats placés hors hiérarchie"},
        HTMLid:"12a2a3a5a5",
        HTMLclass:"leave"
    },
node12a2a3a5a6 = {
        parent: node12a2a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retraite, cessation des fonctions"},
        HTMLid:"12a2a3a5a6",
        HTMLclass:"leave"
    },
node12a2a4 = {
        parent: node12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime disciplinaire"},
        HTMLid:"12a2a4",
        HTMLclass:"leave"
    },
node12a2a5 = {
        parent: node12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité des juges et des magistrats"},
        HTMLid:"12a2a5",
    },
node12a2a5a1 = {
        parent: node12a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité personnelle"},
        HTMLid:"12a2a5a1",
        HTMLclass:"leave"
    },
node12a2a5a2 = {
        parent: node12a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité à raison des fonctions de jugement"},
        HTMLid:"12a2a5a2",
        HTMLclass:"leave"
    },
node12a3 = {
        parent: node12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ORGANISATION DES JURIDICTIONS"},
        HTMLid:"12a3",
    },
node12a3a1 = {
        parent: node12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition"},
        HTMLid:"12a3a1",
    },
node12a3a1a1 = {
        parent: node12a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions de droit commun"},
        HTMLid:"12a3a1a1",
    },
node12a3a1a1a1 = {
        parent: node12a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ministère public"},
        HTMLid:"12a3a1a1a1",
        HTMLclass:"leave"
    },
node12a3a1a1a2 = {
        parent: node12a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juge unique"},
        HTMLid:"12a3a1a1a2",
        HTMLclass:"leave"
    },
node12a3a1a1a3 = {
        parent: node12a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présence minoritaire de juges non professionnels"},
        HTMLid:"12a3a1a1a3",
        HTMLclass:"leave"
    },
node12a3a1a2 = {
        parent: node12a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions spécialisées"},
        HTMLid:"12a3a1a2",
        HTMLclass:"leave"
    },
node12a3a1a2a1 = {
        parent: node12a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridiction de proximité"},
        HTMLid:"12a3a1a2a1",
        HTMLclass:"leave"
    },
node12a3a1a2a2 = {
        parent: node12a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions professionnelles"},
        HTMLid:"12a3a1a2a2",
        HTMLclass:"leave"
    },
node12a3a1a2a3 = {
        parent: node12a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour d'assises à composition spéciale"},
        HTMLid:"12a3a1a2a3",
        HTMLclass:"leave"
    },
node12a3a2 = {
        parent: node12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence"},
        HTMLid:"12a3a2",
    },
node12a3a2a1 = {
        parent: node12a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la juridiction judiciaire"},
        HTMLid:"12a3a2a1",
    },
node12a3a2a1a1 = {
        parent: node12a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe (voir aussi Titre 4 Droits et libertés - Liberté individuelle - Protection de la liberté individuelle par l'autorité judiciaire)"},
        HTMLid:"12a3a2a1a1",
        HTMLclass:"leave"
    },
node12a3a2a1a2 = {
        parent: node12a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité judiciaire gardienne de la liberté individuelle (voir Titre 4 Droits et libertés - Liberté individuelle)"},
        HTMLid:"12a3a2a1a2",
    },
node12a3a2a1a3 = {
        parent: node12a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences à l'intérieur de l'ordre judiciaire"},
        HTMLid:"12a3a2a1a3",
    },
node12a3a2a1a3a1 = {
        parent: node12a3a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la juridiction de proximité"},
        HTMLid:"12a3a2a1a3a1",
        HTMLclass:"leave"
    },
node12a3a2a1a3a2 = {
        parent: node12a3a2a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi de la juridiction de proximité vers le tribunal d'instance"},
        HTMLid:"12a3a2a1a3a2",
        HTMLclass:"leave"
    },
node12a3a2a2 = {
        parent: node12a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de la juridiction administrative"},
        HTMLid:"12a3a2a2",
    },
node12a3a2a2a1 = {
        parent: node12a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve de compétence au profit de la juridiction administrative"},
        HTMLid:"12a3a2a2a1",
        HTMLclass:"leave"
    },
node12a3a2a2a2 = {
        parent: node12a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas d'unification du contentieux"},
        HTMLid:"12a3a2a2a2",
        HTMLclass:"leave"
    },
node12a3a2a2a3 = {
        parent: node12a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: " Lois du pays  de Polynésie française"},
        HTMLid:"12a3a2a2a3",
        HTMLclass:"leave"
    },
node12a3a3 = {
        parent: node12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctionnement"},
        HTMLid:"12a3a3",
    },
node12a3a3a1 = {
        parent: node12a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Salles d'audience"},
        HTMLid:"12a3a3a1",
        HTMLclass:"leave"
    },
node12a4 = {
        parent: node12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CONSEIL SUPÉRIEUR DE LA MAGISTRATURE"},
        HTMLid:"12a4",
    },
node12a4a1 = {
        parent: node12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes et organisation"},
        HTMLid:"12a4a1",
        HTMLclass:"leave"
    },
node12a4a2 = {
        parent: node12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition"},
        HTMLid:"12a4a2",
    },
node12a4a2a1 = {
        parent: node12a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des membres du CSM"},
        HTMLid:"12a4a2a1",
        HTMLclass:"leave"
    },
node12a4a2a2 = {
        parent: node12a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut des membres du CSM"},
        HTMLid:"12a4a2a2",
        HTMLclass:"leave"
    },
node12a4a2a3 = {
        parent: node12a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inapplication du principe de parité des sexes"},
        HTMLid:"12a4a2a3",
        HTMLclass:"leave"
    },
node12a4a3 = {
        parent: node12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des juges et magistrats"},
        HTMLid:"12a4a3",
    },
node12a4a3a1 = {
        parent: node12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis du CSM"},
        HTMLid:"12a4a3a1",
        HTMLclass:"leave"
    },
node12a4a3a2 = {
        parent: node12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des auditeurs de justice"},
        HTMLid:"12a4a3a2",
        HTMLclass:"leave"
    },
node12a4a4 = {
        parent: node12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Discipline des magistrats"},
        HTMLid:"12a4a4",
        HTMLclass:"leave"
    },
node12a4a4a1 = {
        parent: node12a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes généraux"},
        HTMLid:"12a4a4a1",
    },
node12a4a4a2 = {
        parent: node12a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine du CSM par les justiciables"},
        HTMLid:"12a4a4a2",
        HTMLclass:"leave"
    },
node12a5 = {
        parent: node12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "HAUTE COUR DE JUSTICE ET COUR DE JUSTICE DE LA RÉPUBLIQUE"},
        HTMLid:"12a5",
    },
node12a5a1 = {
        parent: node12a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute Cour de justice"},
        HTMLid:"12a5a1",
        HTMLclass:"leave"
    },
node12a5a2 = {
        parent: node12a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour de justice de la République"},
        HTMLid:"12a5a2",
        HTMLclass:"leave"
    },
tree_config12 = [config,node12,node12a1,node12a1a1,node12a1a2,node12a1a2a1,node12a1a2a1a1,node12a1a2a1a2,node12a1a2a2,node12a1a2a2a1,node12a1a2a2a2,node12a1a2a2a3,node12a1a2a2a4,node12a1a2a2a5,node12a1a2a2a6,node12a1a3,node12a1a3a1,node12a1a3a2,node12a1a3a3,node12a2,node12a2a1,node12a2a1a1,node12a2a1a2,node12a2a1a3,node12a2a1a3a1,node12a2a1a3a2,node12a2a1a3a3,node12a2a1a3a4,node12a2a1a3a5,node12a2a2,node12a2a2a1,node12a2a2a2,node12a2a2a3,node12a2a2a4,node12a2a2a5,node12a2a2a6,node12a2a2a7,node12a2a3,node12a2a3a1,node12a2a3a2,node12a2a3a2a1,node12a2a3a2a2,node12a2a3a3,node12a2a3a4,node12a2a3a4a1,node12a2a3a4a2,node12a2a3a4a3,node12a2a3a5,node12a2a3a5a1,node12a2a3a5a2,node12a2a3a5a3,node12a2a3a5a4,node12a2a3a5a5,node12a2a3a5a6,node12a2a4,node12a2a5,node12a2a5a1,node12a2a5a2,node12a3,node12a3a1,node12a3a1a1,node12a3a1a1a1,node12a3a1a1a2,node12a3a1a1a3,node12a3a1a2,node12a3a1a2a1,node12a3a1a2a2,node12a3a1a2a3,node12a3a2,node12a3a2a1,node12a3a2a1a1,node12a3a2a1a2,node12a3a2a1a3,node12a3a2a1a3a1,node12a3a2a1a3a2,node12a3a2a2,node12a3a2a2a1,node12a3a2a2a2,node12a3a2a2a3,node12a3a3,node12a3a3a1,node12a4,node12a4a1,node12a4a2,node12a4a2a1,node12a4a2a2,node12a4a2a3,node12a4a3,node12a4a3a1,node12a4a3a2,node12a4a4,node12a4a4a1,node12a4a4a2,node12a5,node12a5a1,node12a5a2];

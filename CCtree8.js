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
node8 = {
        childrenDropLevel: 1,
        text:{name: "ÉLECTIONS"},
        HTMLid:"8",
    },
node8a1 = {
        parent: node8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES DU DROIT ÉLECTORAL"},
        HTMLid:"8a1",
    },
node8a1a1 = {
        parent: node8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits et libertés de l'électeur"},
        HTMLid:"8a1a1",
    },
node8a1a1a1 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité du suffrage"},
        HTMLid:"8a1a1a1",
        HTMLclass:"leave"
    },
node8a1a1a2 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité entre électeurs"},
        HTMLid:"8a1a1a2",
        HTMLclass:"leave"
    },
node8a1a1a2a1 = {
        parent: node8a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'équilibre démographique"},
        HTMLid:"8a1a1a2a1",
    },
node8a1a1a2a1a1 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des députés et des sénateurs"},
        HTMLid:"8a1a1a2a1a1",
    },
node8a1a1a2a1a1a1 = {
        parent: node8a1a1a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bases démographiques de l'élection"},
        HTMLid:"8a1a1a2a1a1a1",
        HTMLclass:"leave"
    },
node8a1a1a2a1a1a2 = {
        parent: node8a1a1a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission indépendante prévue à l'article 25 de la Constitution"},
        HTMLid:"8a1a1a2a1a1a2",
        HTMLclass:"leave"
    },
node8a1a1a2a1a1a3 = {
        parent: node8a1a1a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation minimale des départements par des députés"},
        HTMLid:"8a1a1a2a1a1a3",
        HTMLclass:"leave"
    },
node8a1a1a2a1a1a4 = {
        parent: node8a1a1a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des sièges"},
        HTMLid:"8a1a1a2a1a1a4",
        HTMLclass:"leave"
    },
node8a1a1a2a1a1a5 = {
        parent: node8a1a1a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délimitation des circonscriptions et écarts de représentation"},
        HTMLid:"8a1a1a2a1a1a5",
        HTMLclass:"leave"
    },
node8a1a1a2a1a2 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des membres du Parlement européen"},
        HTMLid:"8a1a1a2a1a2",
        HTMLclass:"leave"
    },
node8a1a1a2a1a3 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des conseillers régionaux"},
        HTMLid:"8a1a1a2a1a3",
        HTMLclass:"leave"
    },
node8a1a1a2a1a4 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des conseillers municipaux"},
        HTMLid:"8a1a1a2a1a4",
        HTMLclass:"leave"
    },
node8a1a1a2a1a5 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des membres d'une assemblée territoriale d'outre-mer"},
        HTMLid:"8a1a1a2a1a5",
        HTMLclass:"leave"
    },
node8a1a1a2a1a6 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection aux conseils des établissements publics de coopération entre collectivités"},
        HTMLid:"8a1a1a2a1a6",
        HTMLclass:"leave"
    },
node8a1a1a2a1a7 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des conseillers territoriaux"},
        HTMLid:"8a1a1a2a1a7",
        HTMLclass:"leave"
    },
node8a1a1a2a1a8 = {
        parent: node8a1a1a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des conseillers départementaux et des membres du Conseil de Paris"},
        HTMLid:"8a1a1a2a1a8",
        HTMLclass:"leave"
    },
node8a1a1a2a2 = {
        parent: node8a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité de représentation"},
        HTMLid:"8a1a1a2a2",
    },
node8a1a1a2a2a1 = {
        parent: node8a1a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles électorales - répartition des sièges"},
        HTMLid:"8a1a1a2a2a1",
        HTMLclass:"leave"
    },
node8a1a1a2a2a2 = {
        parent: node8a1a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modes de scrutin"},
        HTMLid:"8a1a1a2a2a2",
        HTMLclass:"leave"
    },
node8a1a1a2a2a3 = {
        parent: node8a1a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières pour l'outre-mer"},
        HTMLid:"8a1a1a2a2a3",
        HTMLclass:"leave"
    },
node8a1a1a2a2a4 = {
        parent: node8a1a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime électoral applicable à la Corse"},
        HTMLid:"8a1a1a2a2a4",
        HTMLclass:"leave"
    },
node8a1a1a2a2a5 = {
        parent: node8a1a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité des sexes et parité"},
        HTMLid:"8a1a1a2a2a5",
        HTMLclass:"leave"
    },
node8a1a1a2a3 = {
        parent: node8a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inscription sur les listes électorales"},
        HTMLid:"8a1a1a2a3",
        HTMLclass:"leave"
    },
node8a1a1a2a4 = {
        parent: node8a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction du vote plural"},
        HTMLid:"8a1a1a2a4",
        HTMLclass:"leave"
    },
node8a1a1a3 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice du droit de suffrage"},
        HTMLid:"8a1a1a3",
    },
node8a1a1a3a1 = {
        parent: node8a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fréquence de l'exercice du droit de suffrage"},
        HTMLid:"8a1a1a3a1",
    },
node8a1a1a3a1a1 = {
        parent: node8a1a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périodicité raisonnable"},
        HTMLid:"8a1a1a3a1a1",
        HTMLclass:"leave"
    },
node8a1a1a3a1a2 = {
        parent: node8a1a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concomitance d'élections"},
        HTMLid:"8a1a1a3a1a2",
        HTMLclass:"leave"
    },
node8a1a1a3a1a3 = {
        parent: node8a1a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prorogation de mandats électoraux"},
        HTMLid:"8a1a1a3a1a3",
        HTMLclass:"leave"
    },
node8a1a1a3a2 = {
        parent: node8a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité d'exercice du droit de suffrage"},
        HTMLid:"8a1a1a3a2",
        HTMLclass:"leave"
    },
node8a1a1a3a2a1 = {
        parent: node8a1a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incapacité électorale"},
        HTMLid:"8a1a1a3a2a1",
        HTMLclass:"leave"
    },
node8a1a1a3a2a2 = {
        parent: node8a1a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de vote et d'éligibilité des citoyens de l'Union européenne"},
        HTMLid:"8a1a1a3a2a2",
        HTMLclass:"leave"
    },
node8a1a1a3a2a3 = {
        parent: node8a1a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Identification des électeurs"},
        HTMLid:"8a1a1a3a2a3",
        HTMLclass:"leave"
    },
node8a1a1a3a2a4 = {
        parent: node8a1a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refonte des listes électorales"},
        HTMLid:"8a1a1a3a2a4",
        HTMLclass:"leave"
    },
node8a1a1a3a2a5 = {
        parent: node8a1a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Empêchement à l'exercice du droit de suffrage"},
        HTMLid:"8a1a1a3a2a5",
        HTMLclass:"leave"
    },
node8a1a1a3a3 = {
        parent: node8a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités d'exercice du droit de suffrage"},
        HTMLid:"8a1a1a3a3",
    },
node8a1a1a3a3a1 = {
        parent: node8a1a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par correspondance"},
        HTMLid:"8a1a1a3a3a1",
        HTMLclass:"leave"
    },
node8a1a1a3a3a2 = {
        parent: node8a1a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par procuration"},
        HTMLid:"8a1a1a3a3a2",
        HTMLclass:"leave"
    },
node8a1a1a4 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de l'électeur"},
        HTMLid:"8a1a1a4",
    },
node8a1a1a4a1 = {
        parent: node8a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de vote"},
        HTMLid:"8a1a1a4a1",
        HTMLclass:"leave"
    },
node8a1a1a4a2 = {
        parent: node8a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère facultatif du vote"},
        HTMLid:"8a1a1a4a2",
    },
node8a1a1a4a3 = {
        parent: node8a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de choix"},
        HTMLid:"8a1a1a4a3",
        HTMLclass:"leave"
    },
node8a1a1a5 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de secret du suffrage"},
        HTMLid:"8a1a1a5",
        HTMLclass:"leave"
    },
node8a1a1a6 = {
        parent: node8a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'universalité du suffrage"},
        HTMLid:"8a1a1a6",
        HTMLclass:"leave"
    },
node8a1a2 = {
        parent: node8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits et libertés du candidat"},
        HTMLid:"8a1a2",
    },
node8a1a2a1 = {
        parent: node8a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'éligibilité (voir également : Titre 1er Normes de référence - Article 88-3 de la Constitution ; Titre 10 Parlement - Conditions d'éligibilité - Déchéance )"},
        HTMLid:"8a1a2a1",
        HTMLclass:"leave"
    },
node8a1a2a2 = {
        parent: node8a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité"},
        HTMLid:"8a1a2a2",
    },
node8a1a2a2a1 = {
        parent: node8a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité hors propagande"},
        HTMLid:"8a1a2a2a1",
        HTMLclass:"leave"
    },
node8a1a2a2a2 = {
        parent: node8a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité des moyens de propagande (voir également ci-dessous : Droits et libertés des partis et organisations politiques)"},
        HTMLid:"8a1a2a2a2",
        HTMLclass:"leave"
    },
node8a1a3 = {
        parent: node8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits et libertés des partis et organisations politiques"},
        HTMLid:"8a1a3",
    },
node8a1a3a1 = {
        parent: node8a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté"},
        HTMLid:"8a1a3a1",
        HTMLclass:"leave"
    },
node8a1a3a2 = {
        parent: node8a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parité"},
        HTMLid:"8a1a3a2",
        HTMLclass:"leave"
    },
node8a1a3a3 = {
        parent: node8a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Participation à l'expression du suffrage"},
        HTMLid:"8a1a3a3",
        HTMLclass:"leave"
    },
node8a1a3a4 = {
        parent: node8a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pluralisme (voir également : Titre 4 Droits et libertés - Liberté de la communication)"},
        HTMLid:"8a1a3a4",
        HTMLclass:"leave"
    },
node8a1a3a5 = {
        parent: node8a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité entre les partis et groupements politiques"},
        HTMLid:"8a1a3a5",
        HTMLclass:"leave"
    },
node8a1a4 = {
        parent: node8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance de l'élu"},
        HTMLid:"8a1a4",
    },
node8a1a4a1 = {
        parent: node8a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation du principe"},
        HTMLid:"8a1a4a1",
        HTMLclass:"leave"
    },
node8a1a4a2 = {
        parent: node8a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prohibition du mandat impératif"},
        HTMLid:"8a1a4a2",
        HTMLclass:"leave"
    },
node8a1a5 = {
        parent: node8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sincérité, loyauté et dignité du scrutin"},
        HTMLid:"8a1a5",
        HTMLclass:"leave"
    },
node8a1a5a1 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation du principe de sincérité du scrutin"},
        HTMLid:"8a1a5a1",
        HTMLclass:"leave"
    },
node8a1a5a2 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications du principe de sincérité du scrutin"},
        HTMLid:"8a1a5a2",
    },
node8a1a5a2a1 = {
        parent: node8a1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité du scrutin appliqué à l'élection présidentielle (exemples)"},
        HTMLid:"8a1a5a2a1",
        HTMLclass:"leave"
    },
node8a1a5a2a2 = {
        parent: node8a1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité du scrutin appliqué aux élections législatives (exemples)"},
        HTMLid:"8a1a5a2a2",
        HTMLclass:"leave"
    },
node8a1a5a2a3 = {
        parent: node8a1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité du scrutin appliqué aux élections sénatoriales (exemples)"},
        HTMLid:"8a1a5a2a3",
        HTMLclass:"leave"
    },
node8a1a5a2a4 = {
        parent: node8a1a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de sincérité du scrutin appliqué aux référendums (exemples)"},
        HTMLid:"8a1a5a2a4",
        HTMLclass:"leave"
    },
node8a1a5a3 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sincérité des comptes de campagne"},
        HTMLid:"8a1a5a3",
        HTMLclass:"leave"
    },
node8a1a5a4 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de clarté et de loyauté de la consultation"},
        HTMLid:"8a1a5a4",
        HTMLclass:"leave"
    },
node8a1a5a5 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de loyauté du suffrage"},
        HTMLid:"8a1a5a5",
        HTMLclass:"leave"
    },
node8a1a5a6 = {
        parent: node8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de dignité du scrutin"},
        HTMLid:"8a1a5a6",
        HTMLclass:"leave"
    },
node8a2 = {
        parent: node8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉLECTION PRÉSIDENTIELLE"},
        HTMLid:"8a2",
    },
node8a2a1 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations préalables au scrutin"},
        HTMLid:"8a2a1",
    },
node8a2a1a1 = {
        parent: node8a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décret de convocation des électeurs"},
        HTMLid:"8a2a1a1",
    },
node8a2a1a1a1 = {
        parent: node8a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"8a2a1a1a1",
        HTMLclass:"leave"
    },
node8a2a1a1a2 = {
        parent: node8a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de la légalité du décret de convocation des électeurs"},
        HTMLid:"8a2a1a1a2",
        HTMLclass:"leave"
    },
node8a2a1a2 = {
        parent: node8a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention de la Commission nationale de contrôle"},
        HTMLid:"8a2a1a2",
        HTMLclass:"leave"
    },
node8a2a1a3 = {
        parent: node8a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décision du Conseil supérieur de l'audiovisuel"},
        HTMLid:"8a2a1a3",
        HTMLclass:"leave"
    },
node8a2a1a4 = {
        parent: node8a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence du Conseil constitutionnel"},
        HTMLid:"8a2a1a4",
    },
node8a2a1a4a1 = {
        parent: node8a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formalités relatives à la liste des candidats"},
        HTMLid:"8a2a1a4a1",
        HTMLclass:"leave"
    },
node8a2a1a4a2 = {
        parent: node8a2a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes préparatoires"},
        HTMLid:"8a2a1a4a2",
        HTMLclass:"leave"
    },
node8a2a2 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures"},
        HTMLid:"8a2a2",
    },
node8a2a2a1 = {
        parent: node8a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Éligibilité"},
        HTMLid:"8a2a2a1",
    },
node8a2a2a1a1 = {
        parent: node8a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situation des candidats au regard des obligations du service national"},
        HTMLid:"8a2a2a1a1",
        HTMLclass:"leave"
    },
node8a2a2a2 = {
        parent: node8a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation des candidats"},
        HTMLid:"8a2a2a2",
    },
node8a2a2a2a1 = {
        parent: node8a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Catégories de citoyens habilités à présenter un candidat"},
        HTMLid:"8a2a2a2a1",
        HTMLclass:"leave"
    },
node8a2a2a2a2 = {
        parent: node8a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de présentation des candidatures"},
        HTMLid:"8a2a2a2a2",
        HTMLclass:"leave"
    },
node8a2a2a2a3 = {
        parent: node8a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la validité des présentations"},
        HTMLid:"8a2a2a2a3",
        HTMLclass:"leave"
    },
node8a2a2a3 = {
        parent: node8a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration de situation patrimoniale et déclaration d'intérêts et d'activités des candidats à l'élection présidentielle"},
        HTMLid:"8a2a2a3",
        HTMLclass:"leave"
    },
node8a2a2a4 = {
        parent: node8a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réclamation contre la liste des candidats devant le Conseil constitutionnel"},
        HTMLid:"8a2a2a4",
    },
node8a2a2a4a1 = {
        parent: node8a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine du Conseil constitutionnel"},
        HTMLid:"8a2a2a4a1",
        HTMLclass:"leave"
    },
node8a2a2a4a2 = {
        parent: node8a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste des candidats pour le premier tour"},
        HTMLid:"8a2a2a4a2",
        HTMLclass:"leave"
    },
node8a2a2a4a3 = {
        parent: node8a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste des candidats pour le second tour"},
        HTMLid:"8a2a2a4a3",
        HTMLclass:"leave"
    },
node8a2a2a4a4 = {
        parent: node8a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution de signes distinctifs aux candidats"},
        HTMLid:"8a2a2a4a4",
        HTMLclass:"leave"
    },
node8a2a2a4a5 = {
        parent: node8a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question prioritaire de constitutionnalité"},
        HTMLid:"8a2a2a4a5",
        HTMLclass:"leave"
    },
node8a2a3 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale"},
        HTMLid:"8a2a3",
    },
node8a2a3a1 = {
        parent: node8a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation de la campagne électorale"},
        HTMLid:"8a2a3a1",
        HTMLclass:"leave"
    },
node8a2a3a2 = {
        parent: node8a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a2a3a2",
        HTMLclass:"leave"
    },
node8a2a4 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Financement"},
        HTMLid:"8a2a4",
    },
node8a2a4a1 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions applicables au financement de l'élection présidentielle"},
        HTMLid:"8a2a4a1",
        HTMLclass:"leave"
    },
node8a2a4a2 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles applicables au contentieux du compte de campagne"},
        HTMLid:"8a2a4a2",
        HTMLclass:"leave"
    },
node8a2a4a3 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu du compte de campagne"},
        HTMLid:"8a2a4a3",
    },
node8a2a4a3a1 = {
        parent: node8a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses"},
        HTMLid:"8a2a4a3a1",
    },
node8a2a4a3a1a1 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes généraux"},
        HTMLid:"8a2a4a3a1a1",
        HTMLclass:"leave"
    },
node8a2a4a3a1a2 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses devant figurer dans le compte"},
        HTMLid:"8a2a4a3a1a2",
        HTMLclass:"leave"
    },
node8a2a4a3a1a3 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses remboursables"},
        HTMLid:"8a2a4a3a1a3",
    },
node8a2a4a3a1a4 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses non remboursables"},
        HTMLid:"8a2a4a3a1a4",
        HTMLclass:"leave"
    },
node8a2a4a3a1a5 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concours en nature des partis politiques"},
        HTMLid:"8a2a4a3a1a5",
        HTMLclass:"leave"
    },
node8a2a4a3a1a6 = {
        parent: node8a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres concours en nature"},
        HTMLid:"8a2a4a3a1a6",
        HTMLclass:"leave"
    },
node8a2a4a3a2 = {
        parent: node8a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses ne devant pas figurer dans le compte"},
        HTMLid:"8a2a4a3a2",
        HTMLclass:"leave"
    },
node8a2a4a3a3 = {
        parent: node8a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes"},
        HTMLid:"8a2a4a3a3",
    },
node8a2a4a3a3a1 = {
        parent: node8a2a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Apport personnel"},
        HTMLid:"8a2a4a3a3a1",
        HTMLclass:"leave"
    },
node8a2a4a3a3a2 = {
        parent: node8a2a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période durant laquelle peuvent être recueillis les fonds"},
        HTMLid:"8a2a4a3a3a2",
        HTMLclass:"leave"
    },
node8a2a4a3a3a3 = {
        parent: node8a2a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons"},
        HTMLid:"8a2a4a3a3a3",
        HTMLclass:"leave"
    },
node8a2a4a4 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rejet du compte de campagne"},
        HTMLid:"8a2a4a4",
        HTMLclass:"leave"
    },
node8a2a4a4a1 = {
        parent: node8a2a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes généraux"},
        HTMLid:"8a2a4a4a1",
        HTMLclass:"leave"
    },
node8a2a4a4a2 = {
        parent: node8a2a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de droit au remboursement forfaitaire des dépenses"},
        HTMLid:"8a2a4a4a2",
        HTMLclass:"leave"
    },
node8a2a4a4a3 = {
        parent: node8a2a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Versement au Trésor public"},
        HTMLid:"8a2a4a4a3",
        HTMLclass:"leave"
    },
node8a2a4a5 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remboursement à la charge de l'État"},
        HTMLid:"8a2a4a5",
        HTMLclass:"leave"
    },
node8a2a4a6 = {
        parent: node8a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dévolution de l'excédent éventuel du compte à la Fondation de France"},
        HTMLid:"8a2a4a6",
        HTMLclass:"leave"
    },
node8a2a5 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a2a5",
    },
node8a2a5a1 = {
        parent: node8a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bureau de vote"},
        HTMLid:"8a2a5a1",
        HTMLclass:"leave"
    },
node8a2a5a1a1 = {
        parent: node8a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présidence du bureau de vote"},
        HTMLid:"8a2a5a1a1",
        HTMLclass:"leave"
    },
node8a2a5a1a2 = {
        parent: node8a2a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition du bureau de vote et présence de ses membres"},
        HTMLid:"8a2a5a1a2",
        HTMLclass:"leave"
    },
node8a2a5a2 = {
        parent: node8a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégués du Conseil constitutionnel"},
        HTMLid:"8a2a5a2",
    },
node8a2a5a2a1 = {
        parent: node8a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Observations non suivies d'effet"},
        HTMLid:"8a2a5a2a1",
        HTMLclass:"leave"
    },
node8a2a5a2a2 = {
        parent: node8a2a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrave aux fonctions"},
        HTMLid:"8a2a5a2a2",
        HTMLclass:"leave"
    },
node8a2a5a3 = {
        parent: node8a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a2a5a3",
    },
node8a2a5a3a1 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'identité des électeurs"},
        HTMLid:"8a2a5a3a1",
        HTMLclass:"leave"
    },
node8a2a5a3a2 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise à la disposition des électeurs des bulletins"},
        HTMLid:"8a2a5a3a2",
        HTMLclass:"leave"
    },
node8a2a5a3a3 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Isoloirs"},
        HTMLid:"8a2a5a3a3",
        HTMLclass:"leave"
    },
node8a2a5a3a4 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Machine à voter"},
        HTMLid:"8a2a5a3a4",
        HTMLclass:"leave"
    },
node8a2a5a3a5 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste d'émargement"},
        HTMLid:"8a2a5a3a5",
        HTMLclass:"leave"
    },
node8a2a5a3a6 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violences ou pressions lors du scrutin"},
        HTMLid:"8a2a5a3a6",
        HTMLclass:"leave"
    },
node8a2a5a3a7 = {
        parent: node8a2a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités diverses"},
        HTMLid:"8a2a5a3a7",
        HTMLclass:"leave"
    },
node8a2a5a4 = {
        parent: node8a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépouillement"},
        HTMLid:"8a2a5a4",
    },
node8a2a5a4a1 = {
        parent: node8a2a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure de dépouillement"},
        HTMLid:"8a2a5a4a1",
        HTMLclass:"leave"
    },
node8a2a5a4a2 = {
        parent: node8a2a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Discordance entre émargements et bulletins"},
        HTMLid:"8a2a5a4a2",
        HTMLclass:"leave"
    },
node8a2a5a4a3 = {
        parent: node8a2a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres discordances"},
        HTMLid:"8a2a5a4a3",
        HTMLclass:"leave"
    },
node8a2a5a5 = {
        parent: node8a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités relatives aux procès-verbaux et aux pièces annexes"},
        HTMLid:"8a2a5a5",
        HTMLclass:"leave"
    },
node8a2a6 = {
        parent: node8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux"},
        HTMLid:"8a2a6",
    },
node8a2a6a1 = {
        parent: node8a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence du Conseil constitutionnel"},
        HTMLid:"8a2a6a1",
    },
node8a2a6a1a1 = {
        parent: node8a2a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de rectification"},
        HTMLid:"8a2a6a1a1",
        HTMLclass:"leave"
    },
node8a2a6a1a2 = {
        parent: node8a2a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions n'entrant pas dans la compétence du Conseil constitutionnel"},
        HTMLid:"8a2a6a1a2",
        HTMLclass:"leave"
    },
node8a2a6a1a3 = {
        parent: node8a2a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rectification d'une erreur matérielle d'une décision rendue"},
        HTMLid:"8a2a6a1a3",
        HTMLclass:"leave"
    },
node8a2a6a2 = {
        parent: node8a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure de réclamation"},
        HTMLid:"8a2a6a2",
    },
node8a2a6a2a1 = {
        parent: node8a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais"},
        HTMLid:"8a2a6a2a1",
    },
node8a2a6a2a1a1 = {
        parent: node8a2a6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais de réclamation"},
        HTMLid:"8a2a6a2a1a1",
        HTMLclass:"leave"
    },
node8a2a6a2a1a2 = {
        parent: node8a2a6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Octroi d'un délai de procédure"},
        HTMLid:"8a2a6a2a1a2",
        HTMLclass:"leave"
    },
node8a2a6a2a2 = {
        parent: node8a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualité pour agir"},
        HTMLid:"8a2a6a2a2",
        HTMLclass:"leave"
    },
node8a2a6a2a3 = {
        parent: node8a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des conclusions"},
        HTMLid:"8a2a6a2a3",
        HTMLclass:"leave"
    },
node8a2a6a2a4 = {
        parent: node8a2a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation de la requête"},
        HTMLid:"8a2a6a2a4",
        HTMLclass:"leave"
    },
node8a3 = {
        parent: node8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉLECTIONS LÉGISLATIVES"},
        HTMLid:"8a3",
    },
node8a3a1 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations préalables au scrutin"},
        HTMLid:"8a3a1",
    },
node8a3a1a1 = {
        parent: node8a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Listes électorales"},
        HTMLid:"8a3a1a1",
    },
node8a3a1a1a1 = {
        parent: node8a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement des listes électorales"},
        HTMLid:"8a3a1a1a1",
        HTMLclass:"leave"
    },
node8a3a1a1a1a1 = {
        parent: node8a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inscriptions"},
        HTMLid:"8a3a1a1a1a1",
        HTMLclass:"leave"
    },
node8a3a1a1a1a2 = {
        parent: node8a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Radiations"},
        HTMLid:"8a3a1a1a1a2",
        HTMLclass:"leave"
    },
node8a3a1a1a1a3 = {
        parent: node8a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Français établis hors de France"},
        HTMLid:"8a3a1a1a1a3",
        HTMLclass:"leave"
    },
node8a3a1a1a1a4 = {
        parent: node8a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités spécifiques de refonte des listes électorales des communes de Corse"},
        HTMLid:"8a3a1a1a1a4",
        HTMLclass:"leave"
    },
node8a3a1a1a1a5 = {
        parent: node8a3a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication et consultation des listes électorales"},
        HTMLid:"8a3a1a1a1a5",
        HTMLclass:"leave"
    },
node8a3a1a1a2 = {
        parent: node8a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation de la révision de la liste électorale"},
        HTMLid:"8a3a1a1a2",
    },
node8a3a1a1a2a1 = {
        parent: node8a3a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du tribunal d'instance"},
        HTMLid:"8a3a1a1a2a1",
        HTMLclass:"leave"
    },
node8a3a1a1a2a2 = {
        parent: node8a3a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du juge de l'élection"},
        HTMLid:"8a3a1a1a2a2",
        HTMLclass:"leave"
    },
node8a3a1a1a3 = {
        parent: node8a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cartes d'électeur"},
        HTMLid:"8a3a1a1a3",
        HTMLclass:"leave"
    },
node8a3a1a1a3a1 = {
        parent: node8a3a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Distribution"},
        HTMLid:"8a3a1a1a3a1",
        HTMLclass:"leave"
    },
node8a3a1a1a3a2 = {
        parent: node8a3a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme et contenu"},
        HTMLid:"8a3a1a1a3a2",
        HTMLclass:"leave"
    },
node8a3a1a2 = {
        parent: node8a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convocation des collèges électoraux"},
        HTMLid:"8a3a1a2",
        HTMLclass:"leave"
    },
node8a3a1a3 = {
        parent: node8a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"8a3a1a3",
        HTMLclass:"leave"
    },
node8a3a2 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures"},
        HTMLid:"8a3a2",
        HTMLclass:"leave"
    },
node8a3a2a1 = {
        parent: node8a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'éligibilité"},
        HTMLid:"8a3a2a1",
    },
node8a3a2a1a1 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Âge"},
        HTMLid:"8a3a2a1a1",
        HTMLclass:"leave"
    },
node8a3a2a1a2 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Personnes sous tutelle"},
        HTMLid:"8a3a2a1a2",
        HTMLclass:"leave"
    },
node8a3a2a1a3 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalité"},
        HTMLid:"8a3a2a1a3",
        HTMLclass:"leave"
    },
node8a3a2a1a4 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accomplissement des obligations du service national"},
        HTMLid:"8a3a2a1a4",
        HTMLclass:"leave"
    },
node8a3a2a1a5 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualité d'électeur"},
        HTMLid:"8a3a2a1a5",
        HTMLclass:"leave"
    },
node8a3a2a1a6 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions n'entraînant pas inéligibilité"},
        HTMLid:"8a3a2a1a6",
    },
node8a3a2a1a6a1 = {
        parent: node8a3a2a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Gouvernement"},
        HTMLid:"8a3a2a1a6a1",
        HTMLclass:"leave"
    },
node8a3a2a1a6a2 = {
        parent: node8a3a2a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Conseil constitutionnel"},
        HTMLid:"8a3a2a1a6a2",
        HTMLclass:"leave"
    },
node8a3a2a1a6a3 = {
        parent: node8a3a2a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres fonctions"},
        HTMLid:"8a3a2a1a6a3",
        HTMLclass:"leave"
    },
node8a3a2a1a7 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions entraînant inéligibilité"},
        HTMLid:"8a3a2a1a7",
        HTMLclass:"leave"
    },
node8a3a2a1a8 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère strict de l'inéligibilité"},
        HTMLid:"8a3a2a1a8",
        HTMLclass:"leave"
    },
node8a3a2a1a9 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remplaçants"},
        HTMLid:"8a3a2a1a9",
        HTMLclass:"leave"
    },
node8a3a2a1a10 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Condamnations pénales"},
        HTMLid:"8a3a2a1a10",
    },
node8a3a2a1a10a1 = {
        parent: node8a3a2a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des dispositions de l'article L.O. 130 du code électoral"},
        HTMLid:"8a3a2a1a10a1",
        HTMLclass:"leave"
    },
node8a3a2a1a10a2 = {
        parent: node8a3a2a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à application des dispositions de l'article L. 7 du code électoral"},
        HTMLid:"8a3a2a1a10a2",
        HTMLclass:"leave"
    },
node8a3a2a1a10a3 = {
        parent: node8a3a2a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liquidation judiciaire d'une personne physique"},
        HTMLid:"8a3a2a1a10a3",
        HTMLclass:"leave"
    },
node8a3a2a1a11 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclarations prévues à l'article L.O. 135-1 du code électoral"},
        HTMLid:"8a3a2a1a11",
        HTMLclass:"leave"
    },
node8a3a2a1a12 = {
        parent: node8a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de condition de résidence"},
        HTMLid:"8a3a2a1a12",
        HTMLclass:"leave"
    },
node8a3a2a2 = {
        parent: node8a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cautionnement"},
        HTMLid:"8a3a2a2",
        HTMLclass:"leave"
    },
node8a3a2a3 = {
        parent: node8a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration de candidature"},
        HTMLid:"8a3a2a3",
        HTMLclass:"leave"
    },
node8a3a2a3a1 = {
        parent: node8a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élections faisant suite à une dissolution de l'Assemblée nationale"},
        HTMLid:"8a3a2a3a1",
    },
node8a3a2a3a1a1 = {
        parent: node8a3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais : déroulement de la campagne électorale, dépôt des candidatures"},
        HTMLid:"8a3a2a3a1a1",
        HTMLclass:"leave"
    },
node8a3a2a3a2 = {
        parent: node8a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures de liste"},
        HTMLid:"8a3a2a3a2",
        HTMLclass:"leave"
    },
node8a3a2a3a3 = {
        parent: node8a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité de la déclaration de candidature"},
        HTMLid:"8a3a2a3a3",
    },
node8a3a2a3a3a1 = {
        parent: node8a3a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus"},
        HTMLid:"8a3a2a3a3a1",
        HTMLclass:"leave"
    },
node8a3a2a3a3a2 = {
        parent: node8a3a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours du préfet devant le tribunal administratif (voir également : Déclaration de candidature - Candidatures de liste - Refus de déclaration de candidature)"},
        HTMLid:"8a3a2a3a3a2",
        HTMLclass:"leave"
    },
node8a3a2a3a3a3 = {
        parent: node8a3a2a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence du juge judiciaire"},
        HTMLid:"8a3a2a3a3a3",
        HTMLclass:"leave"
    },
node8a3a2a3a4 = {
        parent: node8a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait de la candidature"},
        HTMLid:"8a3a2a3a4",
    },
node8a3a2a3a4a1 = {
        parent: node8a3a2a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consentement au retrait"},
        HTMLid:"8a3a2a3a4a1",
        HTMLclass:"leave"
    },
node8a3a2a3a4a2 = {
        parent: node8a3a2a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait tardif"},
        HTMLid:"8a3a2a3a4a2",
        HTMLclass:"leave"
    },
node8a3a2a3a5 = {
        parent: node8a3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures pour le second tour de scrutin"},
        HTMLid:"8a3a2a3a5",
        HTMLclass:"leave"
    },
node8a3a3 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale - Moyens de propagande"},
        HTMLid:"8a3a3",
    },
node8a3a3a1 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiches"},
        HTMLid:"8a3a3a1",
    },
node8a3a3a1a1 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre d'affiches"},
        HTMLid:"8a3a3a1a1",
        HTMLclass:"leave"
    },
node8a3a3a1a2 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation des affiches"},
        HTMLid:"8a3a3a1a2",
        HTMLclass:"leave"
    },
node8a3a3a1a3 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Envoi des affiches"},
        HTMLid:"8a3a3a1a3",
        HTMLclass:"leave"
    },
node8a3a3a1a4 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Emplacement des affiches"},
        HTMLid:"8a3a3a1a4",
        HTMLclass:"leave"
    },
node8a3a3a1a5 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date et lieu d'apposition des affiches"},
        HTMLid:"8a3a3a1a5",
        HTMLclass:"leave"
    },
node8a3a3a1a6 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiches recouvertes ou lacérées"},
        HTMLid:"8a3a3a1a6",
        HTMLclass:"leave"
    },
node8a3a3a1a7 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu des affiches"},
        HTMLid:"8a3a3a1a7",
        HTMLclass:"leave"
    },
node8a3a3a1a8 = {
        parent: node8a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités diverses"},
        HTMLid:"8a3a3a1a8",
        HTMLclass:"leave"
    },
node8a3a3a2 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins"},
        HTMLid:"8a3a3a2",
    },
node8a3a3a2a1 = {
        parent: node8a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise des bulletins"},
        HTMLid:"8a3a3a2a1",
        HTMLclass:"leave"
    },
node8a3a3a2a2 = {
        parent: node8a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Acceptation des bulletins par la commission de propagande"},
        HTMLid:"8a3a3a2a2",
        HTMLclass:"leave"
    },
node8a3a3a2a3 = {
        parent: node8a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu et format des bulletins"},
        HTMLid:"8a3a3a2a3",
        HTMLclass:"leave"
    },
node8a3a3a3 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Circulaires"},
        HTMLid:"8a3a3a3",
    },
node8a3a3a3a1 = {
        parent: node8a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Acceptation des circulaires par la commission de propagande"},
        HTMLid:"8a3a3a3a1",
        HTMLclass:"leave"
    },
node8a3a3a3a2 = {
        parent: node8a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation des professions de foi"},
        HTMLid:"8a3a3a3a2",
        HTMLclass:"leave"
    },
node8a3a3a3a3 = {
        parent: node8a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: " Étiquette  politique mentionnée sur la profession de foi"},
        HTMLid:"8a3a3a3a3",
        HTMLclass:"leave"
    },
node8a3a3a3a4 = {
        parent: node8a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Envoi et diffusion des circulaires"},
        HTMLid:"8a3a3a3a4",
        HTMLclass:"leave"
    },
node8a3a3a3a5 = {
        parent: node8a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu des circulaires"},
        HTMLid:"8a3a3a3a5",
        HTMLclass:"leave"
    },
node8a3a3a4 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démarchage téléphonique"},
        HTMLid:"8a3a3a4",
        HTMLclass:"leave"
    },
node8a3a3a5 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers"},
        HTMLid:"8a3a3a5",
    },
node8a3a3a5a1 = {
        parent: node8a3a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation de fichiers commerciaux"},
        HTMLid:"8a3a3a5a1",
        HTMLclass:"leave"
    },
node8a3a3a5a2 = {
        parent: node8a3a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation d'un fichier d'adhérents d'une formation politique"},
        HTMLid:"8a3a3a5a2",
        HTMLclass:"leave"
    },
node8a3a3a6 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haut-parleurs"},
        HTMLid:"8a3a3a6",
        HTMLclass:"leave"
    },
node8a3a3a7 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Internet"},
        HTMLid:"8a3a3a7",
    },
node8a3a3a7a1 = {
        parent: node8a3a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sites internet"},
        HTMLid:"8a3a3a7a1",
        HTMLclass:"leave"
    },
node8a3a3a7a2 = {
        parent: node8a3a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Messages électroniques"},
        HTMLid:"8a3a3a7a2",
        HTMLclass:"leave"
    },
node8a3a3a7a3 = {
        parent: node8a3a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réseaux sociaux"},
        HTMLid:"8a3a3a7a3",
        HTMLclass:"leave"
    },
node8a3a3a8 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres"},
        HTMLid:"8a3a3a8",
    },
node8a3a3a8a1 = {
        parent: node8a3a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Envoi ou diffusion de lettres en faveur de candidats"},
        HTMLid:"8a3a3a8a1",
        HTMLclass:"leave"
    },
node8a3a3a8a1a1 = {
        parent: node8a3a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres émanant de membres du Gouvernement"},
        HTMLid:"8a3a3a8a1a1",
        HTMLclass:"leave"
    },
node8a3a3a8a1a2 = {
        parent: node8a3a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres de parlementaires"},
        HTMLid:"8a3a3a8a1a2",
        HTMLclass:"leave"
    },
node8a3a3a8a1a3 = {
        parent: node8a3a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres d'élus locaux"},
        HTMLid:"8a3a3a8a1a3",
        HTMLclass:"leave"
    },
node8a3a3a8a1a4 = {
        parent: node8a3a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres envoyées par un parti politique"},
        HTMLid:"8a3a3a8a1a4",
        HTMLclass:"leave"
    },
node8a3a3a8a2 = {
        parent: node8a3a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres par lettres dirigées contre un candidat"},
        HTMLid:"8a3a3a8a2",
        HTMLclass:"leave"
    },
node8a3a3a9 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Presse"},
        HTMLid:"8a3a3a9",
    },
node8a3a3a9a1 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prises de positions politiques de la presse écrite"},
        HTMLid:"8a3a3a9a1",
        HTMLclass:"leave"
    },
node8a3a3a9a2 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Insertions payantes ou publicitaires dans les journaux"},
        HTMLid:"8a3a3a9a2",
        HTMLclass:"leave"
    },
node8a3a3a9a3 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Distribution gratuite de journaux"},
        HTMLid:"8a3a3a9a3",
        HTMLclass:"leave"
    },
node8a3a3a9a4 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lancement d'un journal en période électorale"},
        HTMLid:"8a3a3a9a4",
        HTMLclass:"leave"
    },
node8a3a3a9a5 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Éditions spéciales"},
        HTMLid:"8a3a3a9a5",
        HTMLclass:"leave"
    },
node8a3a3a9a6 = {
        parent: node8a3a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités diverses"},
        HTMLid:"8a3a3a9a6",
        HTMLclass:"leave"
    },
node8a3a3a10 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publications municipales"},
        HTMLid:"8a3a3a10",
        HTMLclass:"leave"
    },
node8a3a3a11 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publicité commerciale par voie de presse ou par un moyen de communication audiovisuelle (article L. 52-1, alinéa 1er, du code électoral)"},
        HTMLid:"8a3a3a11",
        HTMLclass:"leave"
    },
node8a3a3a11a1 = {
        parent: node8a3a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'application en cas de dissolution de l'Assemblée nationale"},
        HTMLid:"8a3a3a11a1",
        HTMLclass:"leave"
    },
node8a3a3a12 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne de promotion publicitaire des réalisations ou de la gestion d'une collectivité (article L. 52-1, alinéa 2, du code électoral)"},
        HTMLid:"8a3a3a12",
        HTMLclass:"leave"
    },
node8a3a3a13 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Radio-télévision"},
        HTMLid:"8a3a3a13",
        HTMLclass:"leave"
    },
node8a3a3a14 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réunions électorales"},
        HTMLid:"8a3a3a14",
        HTMLclass:"leave"
    },
node8a3a3a15 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sondages"},
        HTMLid:"8a3a3a15",
        HTMLclass:"leave"
    },
node8a3a3a16 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tracts"},
        HTMLid:"8a3a3a16",
    },
node8a3a3a16a1 = {
        parent: node8a3a3a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Origine des tracts"},
        HTMLid:"8a3a3a16a1",
        HTMLclass:"leave"
    },
node8a3a3a16a2 = {
        parent: node8a3a3a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités retenues pour l'annulation d'une élection"},
        HTMLid:"8a3a3a16a2",
        HTMLclass:"leave"
    },
node8a3a3a16a3 = {
        parent: node8a3a3a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités sans influence sur les résultats de l'élection"},
        HTMLid:"8a3a3a16a3",
        HTMLclass:"leave"
    },
node8a3a3a16a3a1 = {
        parent: node8a3a3a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date de distribution des tracts"},
        HTMLid:"8a3a3a16a3a1",
        HTMLclass:"leave"
    },
node8a3a3a16a3a2 = {
        parent: node8a3a3a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités de la distribution des tracts"},
        HTMLid:"8a3a3a16a3a2",
        HTMLclass:"leave"
    },
node8a3a3a16a3a3 = {
        parent: node8a3a3a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu et portée des tracts"},
        HTMLid:"8a3a3a16a3a3",
        HTMLclass:"leave"
    },
node8a3a3a16a3a4 = {
        parent: node8a3a3a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Informations mensongères ou malveillantes"},
        HTMLid:"8a3a3a16a3a4",
        HTMLclass:"leave"
    },
node8a3a3a16a4 = {
        parent: node8a3a3a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités analogues de la part d'autres candidats"},
        HTMLid:"8a3a3a16a4",
        HTMLclass:"leave"
    },
node8a3a3a16a5 = {
        parent: node8a3a3a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrégularités"},
        HTMLid:"8a3a3a16a5",
        HTMLclass:"leave"
    },
node8a3a3a16a5a1 = {
        parent: node8a3a3a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu n'excédant pas les limites de la polémique électorale"},
        HTMLid:"8a3a3a16a5a1",
        HTMLclass:"leave"
    },
node8a3a3a16a5a2 = {
        parent: node8a3a3a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traduction en langue étrangère"},
        HTMLid:"8a3a3a16a5a2",
        HTMLclass:"leave"
    },
node8a3a3a17 = {
        parent: node8a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités diverses de propagande"},
        HTMLid:"8a3a3a17",
        HTMLclass:"leave"
    },
node8a3a4 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale - Pressions, interventions, manoeuvres"},
        HTMLid:"8a3a4",
    },
node8a3a4a1 = {
        parent: node8a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature des pressions, interventions, manoeuvres"},
        HTMLid:"8a3a4a1",
    },
node8a3a4a1a1 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interventions d'autorités officielles"},
        HTMLid:"8a3a4a1a1",
    },
node8a3a4a1a1a1 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chef de l'État"},
        HTMLid:"8a3a4a1a1a1",
        HTMLclass:"leave"
    },
node8a3a4a1a1a2 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Gouvernement"},
        HTMLid:"8a3a4a1a1a2",
        HTMLclass:"leave"
    },
node8a3a4a1a1a3 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Administration"},
        HTMLid:"8a3a4a1a1a3",
        HTMLclass:"leave"
    },
node8a3a4a1a1a4 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Armée"},
        HTMLid:"8a3a4a1a1a4",
        HTMLclass:"leave"
    },
node8a3a4a1a1a5 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parlementaires"},
        HTMLid:"8a3a4a1a1a5",
        HTMLclass:"leave"
    },
node8a3a4a1a1a6 = {
        parent: node8a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres élus"},
        HTMLid:"8a3a4a1a1a6",
        HTMLclass:"leave"
    },
node8a3a4a1a2 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interventions d'autorités officielles - Absence de manoeuvre"},
        HTMLid:"8a3a4a1a2",
        HTMLclass:"leave"
    },
node8a3a4a1a3 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interventions d'organismes divers"},
        HTMLid:"8a3a4a1a3",
    },
node8a3a4a1a3a1 = {
        parent: node8a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Groupements politiques"},
        HTMLid:"8a3a4a1a3a1",
        HTMLclass:"leave"
    },
node8a3a4a1a3a2 = {
        parent: node8a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisations professionnelles"},
        HTMLid:"8a3a4a1a3a2",
        HTMLclass:"leave"
    },
node8a3a4a1a3a3 = {
        parent: node8a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Clergé"},
        HTMLid:"8a3a4a1a3a3",
        HTMLclass:"leave"
    },
node8a3a4a1a3a4 = {
        parent: node8a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Associations"},
        HTMLid:"8a3a4a1a3a4",
        HTMLclass:"leave"
    },
node8a3a4a1a4 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation du crédit d'autorités officielles"},
        HTMLid:"8a3a4a1a4",
    },
node8a3a4a1a4a1 = {
        parent: node8a3a4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation du nom du général de Gaulle"},
        HTMLid:"8a3a4a1a4a1",
        HTMLclass:"leave"
    },
node8a3a4a1a4a2 = {
        parent: node8a3a4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation de l'effigie ou du nom du chef de l'État"},
        HTMLid:"8a3a4a1a4a2",
        HTMLclass:"leave"
    },
node8a3a4a1a4a3 = {
        parent: node8a3a4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a4a1a4a3",
        HTMLclass:"leave"
    },
node8a3a4a1a5 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation par un candidat de fonctions officielles"},
        HTMLid:"8a3a4a1a5",
        HTMLclass:"leave"
    },
node8a3a4a1a6 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation de moyens de l'administration"},
        HTMLid:"8a3a4a1a6",
    },
node8a3a4a1a6a1 = {
        parent: node8a3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Locaux"},
        HTMLid:"8a3a4a1a6a1",
        HTMLclass:"leave"
    },
node8a3a4a1a6a2 = {
        parent: node8a3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Matériel"},
        HTMLid:"8a3a4a1a6a2",
        HTMLclass:"leave"
    },
node8a3a4a1a6a3 = {
        parent: node8a3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Personnel"},
        HTMLid:"8a3a4a1a6a3",
        HTMLclass:"leave"
    },
node8a3a4a1a7 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation de moyens de l'administration - Absence de manoeuvre"},
        HTMLid:"8a3a4a1a7",
        HTMLclass:"leave"
    },
node8a3a4a1a8 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions par intimidation ou corruption"},
        HTMLid:"8a3a4a1a8",
    },
node8a3a4a1a8a1 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violences"},
        HTMLid:"8a3a4a1a8a1",
        HTMLclass:"leave"
    },
node8a3a4a1a8a2 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Menaces"},
        HTMLid:"8a3a4a1a8a2",
        HTMLclass:"leave"
    },
node8a3a4a1a8a3 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imputations de nature à discréditer un candidat"},
        HTMLid:"8a3a4a1a8a3",
        HTMLclass:"leave"
    },
node8a3a4a1a8a4 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve d'action en diffamation"},
        HTMLid:"8a3a4a1a8a4",
        HTMLclass:"leave"
    },
node8a3a4a1a8a5 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injures"},
        HTMLid:"8a3a4a1a8a5",
        HTMLclass:"leave"
    },
node8a3a4a1a8a6 = {
        parent: node8a3a4a1a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Distribution ou promesses d'argent, cadeaux, avantages divers"},
        HTMLid:"8a3a4a1a8a6",
        HTMLclass:"leave"
    },
node8a3a4a1a9 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions diverses"},
        HTMLid:"8a3a4a1a9",
        HTMLclass:"leave"
    },
node8a3a4a1a10 = {
        parent: node8a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Informations mensongères ou malveillantes"},
        HTMLid:"8a3a4a1a10",
        HTMLclass:"leave"
    },
node8a3a4a2 = {
        parent: node8a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres ou interventions relatives à la situation politique des candidats"},
        HTMLid:"8a3a4a2",
    },
node8a3a4a2a1 = {
        parent: node8a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appartenance ou  étiquette  politique"},
        HTMLid:"8a3a4a2a1",
        HTMLclass:"leave"
    },
node8a3a4a2a2 = {
        parent: node8a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Investitures (voir ci-dessous également : Manoeuvres ou interventions relatives au second tour de scrutin)"},
        HTMLid:"8a3a4a2a2",
        HTMLclass:"leave"
    },
node8a3a4a2a3 = {
        parent: node8a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soutiens"},
        HTMLid:"8a3a4a2a3",
        HTMLclass:"leave"
    },
node8a3a4a2a4 = {
        parent: node8a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait d'un candidat"},
        HTMLid:"8a3a4a2a4",
    },
node8a3a4a2a5 = {
        parent: node8a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de manoeuvre"},
        HTMLid:"8a3a4a2a5",
        HTMLclass:"leave"
    },
node8a3a4a3 = {
        parent: node8a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres ou interventions relatives au second tour"},
        HTMLid:"8a3a4a3",
    },
node8a3a4a3a1 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modification de l' étiquette  politique"},
        HTMLid:"8a3a4a3a1",
        HTMLclass:"leave"
    },
node8a3a4a3a2 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soutiens"},
        HTMLid:"8a3a4a3a2",
        HTMLclass:"leave"
    },
node8a3a4a3a3 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien de candidature"},
        HTMLid:"8a3a4a3a3",
        HTMLclass:"leave"
    },
node8a3a4a3a4 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait de candidature"},
        HTMLid:"8a3a4a3a4",
        HTMLclass:"leave"
    },
node8a3a4a3a5 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désistements"},
        HTMLid:"8a3a4a3a5",
        HTMLclass:"leave"
    },
node8a3a4a3a6 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recommandations de vote pour un candidat"},
        HTMLid:"8a3a4a3a6",
        HTMLclass:"leave"
    },
node8a3a4a3a7 = {
        parent: node8a3a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recommandations  négatives "},
        HTMLid:"8a3a4a3a7",
        HTMLclass:"leave"
    },
node8a3a5 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Financement"},
        HTMLid:"8a3a5",
    },
node8a3a5a1 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandataire financier"},
        HTMLid:"8a3a5a1",
    },
node8a3a5a1a1 = {
        parent: node8a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Association de financement"},
        HTMLid:"8a3a5a1a1",
        HTMLclass:"leave"
    },
node8a3a5a1a2 = {
        parent: node8a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de recourir à un mandataire"},
        HTMLid:"8a3a5a1a2",
    },
node8a3a5a1a2a1 = {
        parent: node8a3a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de déclarer un mandataire financier"},
        HTMLid:"8a3a5a1a2a1",
        HTMLclass:"leave"
    },
node8a3a5a1a2a2 = {
        parent: node8a3a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Perception des recettes"},
        HTMLid:"8a3a5a1a2a2",
        HTMLclass:"leave"
    },
node8a3a5a1a2a3 = {
        parent: node8a3a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlement des dépenses"},
        HTMLid:"8a3a5a1a2a3",
        HTMLclass:"leave"
    },
node8a3a5a1a3 = {
        parent: node8a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte bancaire ou postal"},
        HTMLid:"8a3a5a1a3",
        HTMLclass:"leave"
    },
node8a3a5a1a4 = {
        parent: node8a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Circonscriptions des Français établis hors de France"},
        HTMLid:"8a3a5a1a4",
        HTMLclass:"leave"
    },
node8a3a5a2 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement d'un compte de campagne"},
        HTMLid:"8a3a5a2",
        HTMLclass:"leave"
    },
node8a3a5a2a1 = {
        parent: node8a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de dépôt du compte de campagne"},
        HTMLid:"8a3a5a2a1",
        HTMLclass:"leave"
    },
node8a3a5a2a1a1 = {
        parent: node8a3a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de dépôt"},
        HTMLid:"8a3a5a2a1a1",
        HTMLclass:"leave"
    },
node8a3a5a2a1a2 = {
        parent: node8a3a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispense de dépôt (moins de 1 % des suffrages exprimés et absence de dons de personnes physiques)"},
        HTMLid:"8a3a5a2a1a2",
        HTMLclass:"leave"
    },
node8a3a5a2a1a3 = {
        parent: node8a3a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attestation d'absence de dépense et de recette"},
        HTMLid:"8a3a5a2a1a3",
        HTMLclass:"leave"
    },
node8a3a5a2a2 = {
        parent: node8a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai du dépôt"},
        HTMLid:"8a3a5a2a2",
    },
node8a3a5a2a2a1 = {
        parent: node8a3a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-respect du délai de dépôt"},
        HTMLid:"8a3a5a2a2a1",
        HTMLclass:"leave"
    },
node8a3a5a2a2a2 = {
        parent: node8a3a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-prononcé de l'inéligibilité"},
        HTMLid:"8a3a5a2a2a2",
        HTMLclass:"leave"
    },
node8a3a5a2a3 = {
        parent: node8a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lieu du dépôt"},
        HTMLid:"8a3a5a2a3",
    },
node8a3a5a2a3a1 = {
        parent: node8a3a5a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-respect du lieu de dépôt"},
        HTMLid:"8a3a5a2a3a1",
        HTMLclass:"leave"
    },
node8a3a5a2a4 = {
        parent: node8a3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions du dépôt"},
        HTMLid:"8a3a5a2a4",
    },
node8a3a5a2a4a1 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période de comptabilisation des dons et dépenses : cas de dissolution de l'Assemblée nationale"},
        HTMLid:"8a3a5a2a4a1",
        HTMLclass:"leave"
    },
node8a3a5a2a4a2 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de certification par un membre de l'ordre des experts-comptables et des comptables agréés : inéligibilité"},
        HTMLid:"8a3a5a2a4a2",
        HTMLclass:"leave"
    },
node8a3a5a2a4a3 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Certification par le candidat lui-même"},
        HTMLid:"8a3a5a2a4a3",
        HTMLclass:"leave"
    },
node8a3a5a2a4a4 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de signature du candidat"},
        HTMLid:"8a3a5a2a4a4",
        HTMLclass:"leave"
    },
node8a3a5a2a4a5 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de pièces justificatives : inéligibilité"},
        HTMLid:"8a3a5a2a4a5",
        HTMLclass:"leave"
    },
node8a3a5a2a4a6 = {
        parent: node8a3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Production des pièces justificatives devant le Conseil constitutionnel"},
        HTMLid:"8a3a5a2a4a6",
        HTMLclass:"leave"
    },
node8a3a5a3 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation du compte"},
        HTMLid:"8a3a5a3",
    },
node8a3a5a3a1 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes d'unicité et d'exhaustivité du compte"},
        HTMLid:"8a3a5a3a1",
        HTMLclass:"leave"
    },
node8a3a5a3a2 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Totalité des opérations financières"},
        HTMLid:"8a3a5a3a2",
        HTMLclass:"leave"
    },
node8a3a5a3a3 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de compte ne présentant pas de déficit"},
        HTMLid:"8a3a5a3a3",
        HTMLclass:"leave"
    },
node8a3a5a3a4 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte présenté en dépassement"},
        HTMLid:"8a3a5a3a4",
        HTMLclass:"leave"
    },
node8a3a5a3a5 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte ne faisant apparaître ni recettes ni dépenses"},
        HTMLid:"8a3a5a3a5",
        HTMLclass:"leave"
    },
node8a3a5a3a6 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte ne faisant apparaître aucune recette"},
        HTMLid:"8a3a5a3a6",
        HTMLclass:"leave"
    },
node8a3a5a3a7 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte ne faisant apparaître aucune dépense"},
        HTMLid:"8a3a5a3a7",
        HTMLclass:"leave"
    },
node8a3a5a3a8 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Excédent des dépenses sur les recettes"},
        HTMLid:"8a3a5a3a8",
        HTMLclass:"leave"
    },
node8a3a5a3a9 = {
        parent: node8a3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régularisation devant le Conseil constitutionnel"},
        HTMLid:"8a3a5a3a9",
        HTMLclass:"leave"
    },
node8a3a5a4 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes produites au compte de campagne"},
        HTMLid:"8a3a5a4",
        HTMLclass:"leave"
    },
node8a3a5a4a1 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Plafonnement des recettes"},
        HTMLid:"8a3a5a4a1",
        HTMLclass:"leave"
    },
node8a3a5a4a2 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes devant figurer dans le compte"},
        HTMLid:"8a3a5a4a2",
        HTMLclass:"leave"
    },
node8a3a5a4a2a1 = {
        parent: node8a3a5a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remises, rabais, prix inférieurs aux prix habituellement pratiqués"},
        HTMLid:"8a3a5a4a2a1",
        HTMLclass:"leave"
    },
node8a3a5a4a3 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons ou avantages consentis par des partis ou groupements politiques"},
        HTMLid:"8a3a5a4a3",
        HTMLclass:"leave"
    },
node8a3a5a4a4 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons consentis à un candidat par une personne physique (article L. 52-8, alinéa 1er, du code électoral)"},
        HTMLid:"8a3a5a4a4",
    },
node8a3a5a4a4a1 = {
        parent: node8a3a5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"8a3a5a4a4a1",
        HTMLclass:"leave"
    },
node8a3a5a4a4a2 = {
        parent: node8a3a5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période"},
        HTMLid:"8a3a5a4a4a2",
        HTMLclass:"leave"
    },
node8a3a5a4a4a3 = {
        parent: node8a3a5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Montant"},
        HTMLid:"8a3a5a4a4a3",
        HTMLclass:"leave"
    },
node8a3a5a4a4a4 = {
        parent: node8a3a5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités - Chèque - Espèces"},
        HTMLid:"8a3a5a4a4a4",
        HTMLclass:"leave"
    },
node8a3a5a4a5 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons consentis à un candidat par une personne morale à l'exception des partis ou groupements politiques (article L. 52-8, alinéa 2, du code électoral)"},
        HTMLid:"8a3a5a4a5",
    },
node8a3a5a4a5a1 = {
        parent: node8a3a5a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"8a3a5a4a5a1",
        HTMLclass:"leave"
    },
node8a3a5a4a5a2 = {
        parent: node8a3a5a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période"},
        HTMLid:"8a3a5a4a5a2",
        HTMLclass:"leave"
    },
node8a3a5a4a5a3 = {
        parent: node8a3a5a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de don ou d'avantage"},
        HTMLid:"8a3a5a4a5a3",
        HTMLclass:"leave"
    },
node8a3a5a4a5a4 = {
        parent: node8a3a5a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice d'un avantage n'entraînant pas le rejet du compte"},
        HTMLid:"8a3a5a4a5a4",
        HTMLclass:"leave"
    },
node8a3a5a4a5a5 = {
        parent: node8a3a5a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice d'un don ou d'un avantage entraînant le rejet du compte"},
        HTMLid:"8a3a5a4a5a5",
        HTMLclass:"leave"
    },
node8a3a5a4a6 = {
        parent: node8a3a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons sollicités par publicité par voie de presse (article L. 52-8, alinéa 6, du code électoral)"},
        HTMLid:"8a3a5a4a6",
        HTMLclass:"leave"
    },
node8a3a5a5 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses produites au compte de campagne"},
        HTMLid:"8a3a5a5",
    },
node8a3a5a5a1 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Plafonnement de dépenses"},
        HTMLid:"8a3a5a5a1",
        HTMLclass:"leave"
    },
node8a3a5a5a2 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses devant figurer dans le compte"},
        HTMLid:"8a3a5a5a2",
    },
node8a3a5a5a2a1 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"8a3a5a5a2a1",
        HTMLclass:"leave"
    },
node8a3a5a5a2a2 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiches, tracts, lettre circulaire"},
        HTMLid:"8a3a5a5a2a2",
        HTMLclass:"leave"
    },
node8a3a5a5a2a3 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avantage en nature"},
        HTMLid:"8a3a5a5a2a3",
        HTMLclass:"leave"
    },
node8a3a5a5a2a3a1 = {
        parent: node8a3a5a5a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Évaluation"},
        HTMLid:"8a3a5a5a2a3a1",
        HTMLclass:"leave"
    },
node8a3a5a5a2a4 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletin municipal"},
        HTMLid:"8a3a5a5a2a4",
        HTMLclass:"leave"
    },
node8a3a5a5a2a5 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démarchage téléphonique"},
        HTMLid:"8a3a5a5a2a5",
        HTMLclass:"leave"
    },
node8a3a5a5a2a6 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réunions"},
        HTMLid:"8a3a5a5a2a6",
        HTMLclass:"leave"
    },
node8a3a5a5a2a7 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sondages"},
        HTMLid:"8a3a5a5a2a7",
        HTMLclass:"leave"
    },
node8a3a5a5a2a8 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ouvrage, brochure, publication"},
        HTMLid:"8a3a5a5a2a8",
        HTMLclass:"leave"
    },
node8a3a5a5a2a9 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périodique, journal, journal gratuit"},
        HTMLid:"8a3a5a5a2a9",
        HTMLclass:"leave"
    },
node8a3a5a5a2a10 = {
        parent: node8a3a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a5a5a2a10",
        HTMLclass:"leave"
    },
node8a3a5a5a3 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses n'ayant pas à figurer dans le compte"},
        HTMLid:"8a3a5a5a3",
        HTMLclass:"leave"
    },
node8a3a5a5a3a1 = {
        parent: node8a3a5a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses de la campagne officielle"},
        HTMLid:"8a3a5a5a3a1",
        HTMLclass:"leave"
    },
node8a3a5a5a3a2 = {
        parent: node8a3a5a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de campagne de promotion publicitaire"},
        HTMLid:"8a3a5a5a3a2",
        HTMLclass:"leave"
    },
node8a3a5a5a4 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses payées directement"},
        HTMLid:"8a3a5a5a4",
        HTMLclass:"leave"
    },
node8a3a5a5a4a1 = {
        parent: node8a3a5a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses antérieures à la désignation d'un mandataire financier"},
        HTMLid:"8a3a5a5a4a1",
        HTMLclass:"leave"
    },
node8a3a5a5a5 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réintégrations chiffrées"},
        HTMLid:"8a3a5a5a5",
        HTMLclass:"leave"
    },
node8a3a5a5a6 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ristournes - Remises"},
        HTMLid:"8a3a5a5a6",
        HTMLclass:"leave"
    },
node8a3a5a5a7 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Factures non réglées avant le dépôt du compte"},
        HTMLid:"8a3a5a5a7",
        HTMLclass:"leave"
    },
node8a3a5a5a8 = {
        parent: node8a3a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modes de financement des dépenses"},
        HTMLid:"8a3a5a5a8",
        HTMLclass:"leave"
    },
node8a3a5a5a8a1 = {
        parent: node8a3a5a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours à un emprunt bancaire"},
        HTMLid:"8a3a5a5a8a1",
    },
node8a3a5a5a8a2 = {
        parent: node8a3a5a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours à des lettres de change"},
        HTMLid:"8a3a5a5a8a2",
        HTMLclass:"leave"
    },
node8a3a5a5a8a3 = {
        parent: node8a3a5a5a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Reconnaissance de dette"},
        HTMLid:"8a3a5a5a8a3",
        HTMLclass:"leave"
    },
node8a3a5a6 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déficit (voir également ci-dessus : Présentation du compte)"},
        HTMLid:"8a3a5a6",
        HTMLclass:"leave"
    },
node8a3a5a7 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale des comptes de campagne et des financements politiques"},
        HTMLid:"8a3a5a7",
    },
node8a3a5a7a1 = {
        parent: node8a3a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature de la Commission (voir également : Titre 15 Autorités indépendantes)"},
        HTMLid:"8a3a5a7a1",
        HTMLclass:"leave"
    },
node8a3a5a7a2 = {
        parent: node8a3a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine"},
        HTMLid:"8a3a5a7a2",
        HTMLclass:"leave"
    },
node8a3a5a7a3 = {
        parent: node8a3a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure"},
        HTMLid:"8a3a5a7a3",
        HTMLclass:"leave"
    },
node8a3a5a7a4 = {
        parent: node8a3a5a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Évaluations effectuées par la Commission"},
        HTMLid:"8a3a5a7a4",
        HTMLclass:"leave"
    },
node8a3a5a8 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention du Conseil constitutionnel en application des articles L.O. 136-1 et 186-1 du code électoral"},
        HTMLid:"8a3a5a8",
        HTMLclass:"leave"
    },
node8a3a5a9 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inéligibilité du candidat élu"},
        HTMLid:"8a3a5a9",
    },
node8a3a5a9a1 = {
        parent: node8a3a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de l'élection"},
        HTMLid:"8a3a5a9a1",
        HTMLclass:"leave"
    },
node8a3a5a9a2 = {
        parent: node8a3a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démission d'office du candidat élu"},
        HTMLid:"8a3a5a9a2",
        HTMLclass:"leave"
    },
node8a3a5a9a3 = {
        parent: node8a3a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépassement du plafond des dépenses"},
        HTMLid:"8a3a5a9a3",
    },
node8a3a5a9a3a1 = {
        parent: node8a3a5a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"8a3a5a9a3a1",
        HTMLclass:"leave"
    },
node8a3a5a9a3a2 = {
        parent: node8a3a5a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépassement justifiant le prononcé de l'inéligibilité"},
        HTMLid:"8a3a5a9a3a2",
        HTMLclass:"leave"
    },
node8a3a5a9a3a3 = {
        parent: node8a3a5a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépassement ne justifiant pas le prononcé de l'inéligibilité"},
        HTMLid:"8a3a5a9a3a3",
        HTMLclass:"leave"
    },
node8a3a5a9a4 = {
        parent: node8a3a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance de l'article L. 52-8 du code électoral"},
        HTMLid:"8a3a5a9a4",
        HTMLclass:"leave"
    },
node8a3a5a9a5 = {
        parent: node8a3a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance des principes d'unicité et d'exhaustivité du compte de campagne"},
        HTMLid:"8a3a5a9a5",
        HTMLclass:"leave"
    },
node8a3a5a10 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'inéligibilité du candidat"},
        HTMLid:"8a3a5a10",
        HTMLclass:"leave"
    },
node8a3a5a11 = {
        parent: node8a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidat non élu"},
        HTMLid:"8a3a5a11",
    },
node8a3a5a11a1 = {
        parent: node8a3a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence du Conseil constitutionnel"},
        HTMLid:"8a3a5a11a1",
        HTMLclass:"leave"
    },
node8a3a5a11a2 = {
        parent: node8a3a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Défaut d'intérêt à agir d'un candidat non élu pour contester les comptes d'un autre candidat non élu"},
        HTMLid:"8a3a5a11a2",
        HTMLclass:"leave"
    },
node8a3a6 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a3a6",
    },
node8a3a6a1 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation matérielle du scrutin"},
        HTMLid:"8a3a6a1",
    },
node8a3a6a1a1 = {
        parent: node8a3a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transport d'électeurs, candidats, délégués"},
        HTMLid:"8a3a6a1a1",
        HTMLclass:"leave"
    },
node8a3a6a1a2 = {
        parent: node8a3a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre et implantation des bureaux de vote"},
        HTMLid:"8a3a6a1a2",
        HTMLclass:"leave"
    },
node8a3a6a1a3 = {
        parent: node8a3a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation matérielle des bureaux de vote"},
        HTMLid:"8a3a6a1a3",
        HTMLclass:"leave"
    },
node8a3a6a2 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bureaux de vote"},
        HTMLid:"8a3a6a2",
    },
node8a3a6a2a1 = {
        parent: node8a3a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président des bureaux de vote"},
        HTMLid:"8a3a6a2a1",
        HTMLclass:"leave"
    },
node8a3a6a2a2 = {
        parent: node8a3a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition des bureaux de vote"},
        HTMLid:"8a3a6a2a2",
        HTMLclass:"leave"
    },
node8a3a6a2a2a1 = {
        parent: node8a3a6a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice de leurs fonctions par les membres du bureau"},
        HTMLid:"8a3a6a2a2a1",
        HTMLclass:"leave"
    },
node8a3a6a3 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégués des candidats"},
        HTMLid:"8a3a6a3",
        HTMLclass:"leave"
    },
node8a3a6a4 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a3a6a4",
    },
node8a3a6a4a1 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date du scrutin"},
        HTMLid:"8a3a6a4a1",
        HTMLclass:"leave"
    },
node8a3a6a4a2 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Heures du scrutin et dérogations"},
        HTMLid:"8a3a6a4a2",
        HTMLclass:"leave"
    },
node8a3a6a4a3 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du scrutin"},
        HTMLid:"8a3a6a4a3",
        HTMLclass:"leave"
    },
node8a3a6a4a4 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interruption du scrutin"},
        HTMLid:"8a3a6a4a4",
        HTMLclass:"leave"
    },
node8a3a6a4a5 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procès-verbal"},
        HTMLid:"8a3a6a4a5",
        HTMLclass:"leave"
    },
node8a3a6a4a6 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise à disposition des électeurs des bulletins et des enveloppes"},
        HTMLid:"8a3a6a4a6",
    },
node8a3a6a4a6a1 = {
        parent: node8a3a6a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins"},
        HTMLid:"8a3a6a4a6a1",
        HTMLclass:"leave"
    },
node8a3a6a4a6a2 = {
        parent: node8a3a6a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enveloppes"},
        HTMLid:"8a3a6a4a6a2",
        HTMLclass:"leave"
    },
node8a3a6a4a7 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Isoloirs"},
        HTMLid:"8a3a6a4a7",
        HTMLclass:"leave"
    },
node8a3a6a4a8 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Machines à voter"},
        HTMLid:"8a3a6a4a8",
        HTMLclass:"leave"
    },
node8a3a6a4a8a1 = {
        parent: node8a3a6a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime juridique"},
        HTMLid:"8a3a6a4a8a1",
    },
node8a3a6a4a9 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'identité des électeurs"},
        HTMLid:"8a3a6a4a9",
    },
node8a3a6a4a9a1 = {
        parent: node8a3a6a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités sans influence"},
        HTMLid:"8a3a6a4a9a1",
        HTMLclass:"leave"
    },
node8a3a6a4a9a2 = {
        parent: node8a3a6a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Documents utilisés"},
        HTMLid:"8a3a6a4a9a2",
        HTMLclass:"leave"
    },
node8a3a6a4a9a3 = {
        parent: node8a3a6a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Reconnaissance d'identité"},
        HTMLid:"8a3a6a4a9a3",
        HTMLclass:"leave"
    },
node8a3a6a4a10 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Listes d'émargement"},
        HTMLid:"8a3a6a4a10",
        HTMLclass:"leave"
    },
node8a3a6a4a10a1 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrégularités"},
        HTMLid:"8a3a6a4a10a1",
        HTMLclass:"leave"
    },
node8a3a6a4a10a2 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités vénielles ou sans influence sur le scrutin"},
        HTMLid:"8a3a6a4a10a2",
        HTMLclass:"leave"
    },
node8a3a6a4a10a3 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulations"},
        HTMLid:"8a3a6a4a10a3",
        HTMLclass:"leave"
    },
node8a3a6a4a10a4 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Signatures"},
        HTMLid:"8a3a6a4a10a4",
        HTMLclass:"leave"
    },
node8a3a6a4a10a5 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Omission ou erreur purement matérielle"},
        HTMLid:"8a3a6a4a10a5",
        HTMLclass:"leave"
    },
node8a3a6a4a10a6 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Particularités des élections dans les circonscriptions des Français établis hors de France"},
        HTMLid:"8a3a6a4a10a6",
    },
node8a3a6a4a10a7 = {
        parent: node8a3a6a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a6a4a10a7",
        HTMLclass:"leave"
    },
node8a3a6a4a11 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urnes de vote"},
        HTMLid:"8a3a6a4a11",
        HTMLclass:"leave"
    },
node8a3a6a4a12 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violences ou pressions lors du scrutin"},
        HTMLid:"8a3a6a4a12",
    },
node8a3a6a4a12a1 = {
        parent: node8a3a6a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violences"},
        HTMLid:"8a3a6a4a12a1",
        HTMLclass:"leave"
    },
node8a3a6a4a12a2 = {
        parent: node8a3a6a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions sur les assesseurs ou délégués"},
        HTMLid:"8a3a6a4a12a2",
        HTMLclass:"leave"
    },
node8a3a6a4a12a3 = {
        parent: node8a3a6a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions sur les électeurs"},
        HTMLid:"8a3a6a4a12a3",
        HTMLclass:"leave"
    },
node8a3a6a4a13 = {
        parent: node8a3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidents divers"},
        HTMLid:"8a3a6a4a13",
        HTMLclass:"leave"
    },
node8a3a6a5 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par procuration"},
        HTMLid:"8a3a6a5",
    },
node8a3a6a5a1 = {
        parent: node8a3a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement des procurations"},
        HTMLid:"8a3a6a5a1",
    },
node8a3a6a5a1a1 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas d'admission au vote par procuration"},
        HTMLid:"8a3a6a5a1a1",
        HTMLclass:"leave"
    },
node8a3a6a5a1a2 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demandes de déplacement de l'officier de police judiciaire - attestations"},
        HTMLid:"8a3a6a5a1a2",
        HTMLclass:"leave"
    },
node8a3a6a5a1a3 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formulaires"},
        HTMLid:"8a3a6a5a1a3",
        HTMLclass:"leave"
    },
node8a3a6a5a1a4 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mentions de la procuration, signatures"},
        HTMLid:"8a3a6a5a1a4",
        HTMLclass:"leave"
    },
node8a3a6a5a1a5 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Choix personnel du mandataire"},
        HTMLid:"8a3a6a5a1a5",
        HTMLclass:"leave"
    },
node8a3a6a5a1a6 = {
        parent: node8a3a6a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de pièces justificatives"},
        HTMLid:"8a3a6a5a1a6",
        HTMLclass:"leave"
    },
node8a3a6a5a2 = {
        parent: node8a3a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Acheminement des documents"},
        HTMLid:"8a3a6a5a2",
        HTMLclass:"leave"
    },
node8a3a6a5a3 = {
        parent: node8a3a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des documents de vote par procuration"},
        HTMLid:"8a3a6a5a3",
        HTMLclass:"leave"
    },
node8a3a6a5a4 = {
        parent: node8a3a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situations particulières"},
        HTMLid:"8a3a6a5a4",
    },
node8a3a6a5a4a1 = {
        parent: node8a3a6a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Français établis hors de France"},
        HTMLid:"8a3a6a5a4a1",
    },
node8a3a6a5a4a2 = {
        parent: node8a3a6a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hospices, hôpitaux, collectivités diverses"},
        HTMLid:"8a3a6a5a4a2",
        HTMLclass:"leave"
    },
node8a3a6a5a4a3 = {
        parent: node8a3a6a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence des délégués"},
        HTMLid:"8a3a6a5a4a3",
        HTMLclass:"leave"
    },
node8a3a6a6 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par correspondance"},
        HTMLid:"8a3a6a6",
        HTMLclass:"leave"
    },
node8a3a6a6a1 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Admission au vote par correspondance"},
        HTMLid:"8a3a6a6a1",
        HTMLclass:"leave"
    },
node8a3a6a6a2 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Catégories de bénéficiaires"},
        HTMLid:"8a3a6a6a2",
        HTMLclass:"leave"
    },
node8a3a6a6a3 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demandes à formuler"},
        HTMLid:"8a3a6a6a3",
    },
node8a3a6a6a3a1 = {
        parent: node8a3a6a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme et date de la demande"},
        HTMLid:"8a3a6a6a3a1",
        HTMLclass:"leave"
    },
node8a3a6a6a3a2 = {
        parent: node8a3a6a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pièces justificatives"},
        HTMLid:"8a3a6a6a3a2",
        HTMLclass:"leave"
    },
node8a3a6a6a4 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Envoi aux électeurs des documents de vote par correspondance"},
        HTMLid:"8a3a6a6a4",
    },
node8a3a6a6a4a1 = {
        parent: node8a3a6a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme de l'envoi"},
        HTMLid:"8a3a6a6a4a1",
        HTMLclass:"leave"
    },
node8a3a6a6a4a2 = {
        parent: node8a3a6a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date de l'envoi"},
        HTMLid:"8a3a6a6a4a2",
        HTMLclass:"leave"
    },
node8a3a6a6a5 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste des électeurs admis au vote par correspondance"},
        HTMLid:"8a3a6a6a5",
        HTMLclass:"leave"
    },
node8a3a6a6a6 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Envoi des votes par correspondance"},
        HTMLid:"8a3a6a6a6",
    },
node8a3a6a6a6a1 = {
        parent: node8a3a6a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme de l'envoi"},
        HTMLid:"8a3a6a6a6a1",
        HTMLclass:"leave"
    },
node8a3a6a6a6a2 = {
        parent: node8a3a6a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date de l'envoi"},
        HTMLid:"8a3a6a6a6a2",
        HTMLclass:"leave"
    },
node8a3a6a6a7 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a3a6a6a7",
        HTMLclass:"leave"
    },
node8a3a6a6a8 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conservation des documents relatifs au vote par correspondance"},
        HTMLid:"8a3a6a6a8",
        HTMLclass:"leave"
    },
node8a3a6a6a9 = {
        parent: node8a3a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux des votes par correspondance"},
        HTMLid:"8a3a6a6a9",
        HTMLclass:"leave"
    },
node8a3a6a7 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote électronique dans les circonscriptions des Français établis hors de France"},
        HTMLid:"8a3a6a7",
        HTMLclass:"leave"
    },
node8a3a6a8 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépouillement"},
        HTMLid:"8a3a6a8",
    },
node8a3a6a8a1 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation du dépouillement"},
        HTMLid:"8a3a6a8a1",
        HTMLclass:"leave"
    },
node8a3a6a8a2 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission de recensement général des votes"},
        HTMLid:"8a3a6a8a2",
        HTMLclass:"leave"
    },
node8a3a6a8a3 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validité des bulletins"},
        HTMLid:"8a3a6a8a3",
    },
node8a3a6a8a3a1 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation"},
        HTMLid:"8a3a6a8a3a1",
        HTMLclass:"leave"
    },
node8a3a6a8a3a2 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mentions"},
        HTMLid:"8a3a6a8a3a2",
        HTMLclass:"leave"
    },
node8a3a6a8a3a3 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins modifiés par les électeurs"},
        HTMLid:"8a3a6a8a3a3",
        HTMLclass:"leave"
    },
node8a3a6a8a3a4 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Marques"},
        HTMLid:"8a3a6a8a3a4",
        HTMLclass:"leave"
    },
node8a3a6a8a3a5 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation, au second tour, de bulletins imprimés pour le premier tour"},
        HTMLid:"8a3a6a8a3a5",
        HTMLclass:"leave"
    },
node8a3a6a8a3a6 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simultanéité de deux scrutins le même jour"},
        HTMLid:"8a3a6a8a3a6",
        HTMLclass:"leave"
    },
node8a3a6a8a3a7 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins blancs"},
        HTMLid:"8a3a6a8a3a7",
        HTMLclass:"leave"
    },
node8a3a6a8a3a8 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins annulés suite à des erreurs de dépouillement"},
        HTMLid:"8a3a6a8a3a8",
        HTMLclass:"leave"
    },
node8a3a6a8a3a9 = {
        parent: node8a3a6a8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Regroupement des bulletins"},
        HTMLid:"8a3a6a8a3a9",
        HTMLclass:"leave"
    },
node8a3a6a8a4 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validité des enveloppes"},
        HTMLid:"8a3a6a8a4",
        HTMLclass:"leave"
    },
node8a3a6a8a5 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre des émargements différent de celui des bulletins et enveloppes trouvés dans l'urne"},
        HTMLid:"8a3a6a8a5",
        HTMLclass:"leave"
    },
node8a3a6a8a5a1 = {
        parent: node8a3a6a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence antérieure aux élections législatives de 1988"},
        HTMLid:"8a3a6a8a5a1",
        HTMLclass:"leave"
    },
node8a3a6a8a5a2 = {
        parent: node8a3a6a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence faisant suite aux élections législatives de 1988"},
        HTMLid:"8a3a6a8a5a2",
        HTMLclass:"leave"
    },
node8a3a6a8a6 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre d'enveloppes différent de celui des bulletins"},
        HTMLid:"8a3a6a8a6",
        HTMLclass:"leave"
    },
node8a3a6a8a7 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imputation des suffrages annulés"},
        HTMLid:"8a3a6a8a7",
    },
node8a3a6a8a7a1 = {
        parent: node8a3a6a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence antérieure aux élections législatives de 1988"},
        HTMLid:"8a3a6a8a7a1",
        HTMLclass:"leave"
    },
node8a3a6a8a7a2 = {
        parent: node8a3a6a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence faisant suite aux élections législatives de 1988"},
        HTMLid:"8a3a6a8a7a2",
        HTMLclass:"leave"
    },
node8a3a6a8a8 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Différences de signatures entre le premier et le second tour"},
        HTMLid:"8a3a6a8a8",
        HTMLclass:"leave"
    },
node8a3a6a8a9 = {
        parent: node8a3a6a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités et incidents divers (voir également ci-dessus : Organisation du dépouillement)"},
        HTMLid:"8a3a6a8a9",
        HTMLclass:"leave"
    },
node8a3a6a9 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement des procès-verbaux et de leurs annexes"},
        HTMLid:"8a3a6a9",
    },
node8a3a6a9a1 = {
        parent: node8a3a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Feuilles de dépouillement et feuilles de pointage"},
        HTMLid:"8a3a6a9a1",
        HTMLclass:"leave"
    },
node8a3a6a9a2 = {
        parent: node8a3a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procès-verbaux"},
        HTMLid:"8a3a6a9a2",
        HTMLclass:"leave"
    },
node8a3a6a9a3 = {
        parent: node8a3a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pièces annexes : bulletins nuls et enveloppes vides"},
        HTMLid:"8a3a6a9a3",
        HTMLclass:"leave"
    },
node8a3a6a9a4 = {
        parent: node8a3a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retard dans la transmission des listes d'émargements"},
        HTMLid:"8a3a6a9a4",
        HTMLclass:"leave"
    },
node8a3a6a9a5 = {
        parent: node8a3a6a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Disparition d'une liste d'émargement"},
        HTMLid:"8a3a6a9a5",
        HTMLclass:"leave"
    },
node8a3a6a10 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation des résultats"},
        HTMLid:"8a3a6a10",
        HTMLclass:"leave"
    },
node8a3a6a11 = {
        parent: node8a3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recensement général des votes"},
        HTMLid:"8a3a6a11",
        HTMLclass:"leave"
    },
node8a3a7 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Compétence"},
        HTMLid:"8a3a7",
    },
node8a3a7a1 = {
        parent: node8a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence du Conseil constitutionnel"},
        HTMLid:"8a3a7a1",
    },
node8a3a7a1a1 = {
        parent: node8a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décisions préliminaires"},
        HTMLid:"8a3a7a1a1",
        HTMLclass:"leave"
    },
node8a3a7a1a2 = {
        parent: node8a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de la régularité des textes organisant les élections"},
        HTMLid:"8a3a7a1a2",
        HTMLclass:"leave"
    },
node8a3a7a1a2a1 = {
        parent: node8a3a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité"},
        HTMLid:"8a3a7a1a2a1",
        HTMLclass:"leave"
    },
node8a3a7a1a2a2 = {
        parent: node8a3a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décret de convocation"},
        HTMLid:"8a3a7a1a2a2",
        HTMLclass:"leave"
    },
node8a3a7a1a2a3 = {
        parent: node8a3a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décision du Conseil supérieur de l'audiovisuel"},
        HTMLid:"8a3a7a1a2a3",
        HTMLclass:"leave"
    },
node8a3a7a1a2a4 = {
        parent: node8a3a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la délimitation des circonscriptions électorales"},
        HTMLid:"8a3a7a1a2a4",
        HTMLclass:"leave"
    },
node8a3a7a1a3 = {
        parent: node8a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Comptes de campagne"},
        HTMLid:"8a3a7a1a3",
    },
node8a3a7a1a4 = {
        parent: node8a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question prioritaire de constitutionnalité"},
        HTMLid:"8a3a7a1a4",
        HTMLclass:"leave"
    },
node8a3a7a1a5 = {
        parent: node8a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traités internationaux"},
        HTMLid:"8a3a7a1a5",
        HTMLclass:"leave"
    },
node8a3a7a2 = {
        parent: node8a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions n'entrant pas dans la compétence du Conseil constitutionnel"},
        HTMLid:"8a3a7a2",
    },
node8a3a7a2a1 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la validité des candidatures"},
        HTMLid:"8a3a7a2a1",
        HTMLclass:"leave"
    },
node8a3a7a2a2 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la régularité des investitures"},
        HTMLid:"8a3a7a2a2",
    },
node8a3a7a2a3 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la régularité des listes électorales"},
        HTMLid:"8a3a7a2a3",
        HTMLclass:"leave"
    },
node8a3a7a2a4 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remboursement des frais de propagande"},
        HTMLid:"8a3a7a2a4",
        HTMLclass:"leave"
    },
node8a3a7a2a5 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres avantages financiers"},
        HTMLid:"8a3a7a2a5",
        HTMLclass:"leave"
    },
node8a3a7a2a6 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilité de certaines fonctions avec un mandat parlementaire"},
        HTMLid:"8a3a7a2a6",
        HTMLclass:"leave"
    },
node8a3a7a2a7 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation de la régularité d'un acte du chef de l'État"},
        HTMLid:"8a3a7a2a7",
        HTMLclass:"leave"
    },
node8a3a7a2a8 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conformité à la Constitution d'un texte législatif"},
        HTMLid:"8a3a7a2a8",
        HTMLclass:"leave"
    },
node8a3a7a2a9 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Frais irrépétibles"},
        HTMLid:"8a3a7a2a9",
        HTMLclass:"leave"
    },
node8a3a7a2a10 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande de dommages-intérêts"},
        HTMLid:"8a3a7a2a10",
        HTMLclass:"leave"
    },
node8a3a7a2a11 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation d'une recommandation du Conseil supérieur de l'audiovisuel"},
        HTMLid:"8a3a7a2a11",
        HTMLclass:"leave"
    },
node8a3a7a2a12 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Aide juridictionnelle"},
        HTMLid:"8a3a7a2a12",
        HTMLclass:"leave"
    },
node8a3a7a2a13 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en examen"},
        HTMLid:"8a3a7a2a13",
        HTMLclass:"leave"
    },
node8a3a7a2a14 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de l'article L. 117-1 du code électoral"},
        HTMLid:"8a3a7a2a14",
        HTMLclass:"leave"
    },
node8a3a7a2a15 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amende pour recours abusif"},
        HTMLid:"8a3a7a2a15",
        HTMLclass:"leave"
    },
node8a3a7a2a16 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Engagement d'une procédure ou prononcé d'une condamnation"},
        HTMLid:"8a3a7a2a16",
        HTMLclass:"leave"
    },
node8a3a7a2a17 = {
        parent: node8a3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a7a2a17",
        HTMLclass:"leave"
    },
node8a3a8 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Recevabilité"},
        HTMLid:"8a3a8",
    },
node8a3a8a1 = {
        parent: node8a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépôt de la requête"},
        HTMLid:"8a3a8a1",
    },
node8a3a8a1a1 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité du requérant"},
        HTMLid:"8a3a8a1a1",
        HTMLclass:"leave"
    },
node8a3a8a1a2 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualité du requérant"},
        HTMLid:"8a3a8a1a2",
        HTMLclass:"leave"
    },
node8a3a8a1a3 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités auxquelles la requête doit être adressée"},
        HTMLid:"8a3a8a1a3",
        HTMLclass:"leave"
    },
node8a3a8a1a4 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais"},
        HTMLid:"8a3a8a1a4",
    },
node8a3a8a1a4a1 = {
        parent: node8a3a8a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère impératif du délai de dix jours"},
        HTMLid:"8a3a8a1a4a1",
        HTMLclass:"leave"
    },
node8a3a8a1a4a2 = {
        parent: node8a3a8a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête prématurée"},
        HTMLid:"8a3a8a1a4a2",
        HTMLclass:"leave"
    },
node8a3a8a1a4a3 = {
        parent: node8a3a8a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête tardive"},
        HTMLid:"8a3a8a1a4a3",
        HTMLclass:"leave"
    },
node8a3a8a1a5 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formes de la requête"},
        HTMLid:"8a3a8a1a5",
        HTMLclass:"leave"
    },
node8a3a8a1a5a1 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désignation de l'élection contestée"},
        HTMLid:"8a3a8a1a5a1",
        HTMLclass:"leave"
    },
node8a3a8a1a5a2 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Signature"},
        HTMLid:"8a3a8a1a5a2",
        HTMLclass:"leave"
    },
node8a3a8a1a5a3 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation (voir également ci-dessous : Irrecevabilité des conclusions ; Griefs - Griefs insuffisamment précisés)"},
        HTMLid:"8a3a8a1a5a3",
        HTMLclass:"leave"
    },
node8a3a8a1a5a4 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pièces justificatives"},
        HTMLid:"8a3a8a1a5a4",
        HTMLclass:"leave"
    },
node8a3a8a1a5a5 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requêtes collectives"},
        HTMLid:"8a3a8a1a5a5",
        HTMLclass:"leave"
    },
node8a3a8a1a5a6 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Adresse du requérant"},
        HTMLid:"8a3a8a1a5a6",
        HTMLclass:"leave"
    },
node8a3a8a1a5a7 = {
        parent: node8a3a8a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête non signée présentée par une personne non identifiée"},
        HTMLid:"8a3a8a1a5a7",
        HTMLclass:"leave"
    },
node8a3a8a1a6 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité des conclusions"},
        HTMLid:"8a3a8a1a6",
    },
node8a3a8a1a6a1 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simples réclamations ou protestations"},
        HTMLid:"8a3a8a1a6a1",
        HTMLclass:"leave"
    },
node8a3a8a1a6a2 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simples critiques des conditions dans lesquelles la campagne électorale ou le scrutin se sont déroulés"},
        HTMLid:"8a3a8a1a6a2",
        HTMLclass:"leave"
    },
node8a3a8a1a6a3 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simples demandes de rectification de résultats sans incidence sur le sens de l'élection"},
        HTMLid:"8a3a8a1a6a3",
        HTMLclass:"leave"
    },
node8a3a8a1a6a4 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande d'annulation partielle"},
        HTMLid:"8a3a8a1a6a4",
        HTMLclass:"leave"
    },
node8a3a8a1a6a5 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation ne portant pas sur l'élection elle-même"},
        HTMLid:"8a3a8a1a6a5",
        HTMLclass:"leave"
    },
node8a3a8a1a6a6 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande d'annulation de plusieurs élections"},
        HTMLid:"8a3a8a1a6a6",
        HTMLclass:"leave"
    },
node8a3a8a1a6a7 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation portant sur des élections antérieures"},
        HTMLid:"8a3a8a1a6a7",
        HTMLclass:"leave"
    },
node8a3a8a1a6a8 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête concluant uniquement à ce qu'une enquête soit ordonnée"},
        HTMLid:"8a3a8a1a6a8",
        HTMLclass:"leave"
    },
node8a3a8a1a6a9 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer"},
        HTMLid:"8a3a8a1a6a9",
        HTMLclass:"leave"
    },
node8a3a8a1a6a10 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en cause de l'appréciation juridique"},
        HTMLid:"8a3a8a1a6a10",
    },
node8a3a8a1a6a11 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indétermination de l'élection contestée"},
        HTMLid:"8a3a8a1a6a11",
        HTMLclass:"leave"
    },
node8a3a8a1a6a12 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mémoires injurieux, outrageants ou diffamatoires"},
        HTMLid:"8a3a8a1a6a12",
        HTMLclass:"leave"
    },
node8a3a8a1a6a13 = {
        parent: node8a3a8a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a8a1a6a13",
        HTMLclass:"leave"
    },
node8a3a8a1a7 = {
        parent: node8a3a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des conclusions"},
        HTMLid:"8a3a8a1a7",
    },
node8a3a8a1a7a1 = {
        parent: node8a3a8a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête dirigée contre des opérations électorales ayant donné lieu à ballottage"},
        HTMLid:"8a3a8a1a7a1",
        HTMLclass:"leave"
    },
node8a3a8a1a7a2 = {
        parent: node8a3a8a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conclusions tendant au remboursement des frais de propagande liées à la contestation de l'élection"},
        HTMLid:"8a3a8a1a7a2",
        HTMLclass:"leave"
    },
node8a3a8a1a7a3 = {
        parent: node8a3a8a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation de la régularité des textes organisant les élections"},
        HTMLid:"8a3a8a1a7a3",
        HTMLclass:"leave"
    },
node8a3a8a1a7a4 = {
        parent: node8a3a8a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination de l'élection contestée"},
        HTMLid:"8a3a8a1a7a4",
        HTMLclass:"leave"
    },
node8a3a9 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Griefs"},
        HTMLid:"8a3a9",
    },
node8a3a9a1 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des griefs tendant à l'annulation de l'élection"},
        HTMLid:"8a3a9a1",
        HTMLclass:"leave"
    },
node8a3a9a2 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des griefs tirés de la violation d'une convention internationale (voir ci-dessus Contentieux - Compétence - Étendue de la compétence du Conseil constitutionnel - Traités internationaux)"},
        HTMLid:"8a3a9a2",
    },
node8a3a9a3 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs nouveaux"},
        HTMLid:"8a3a9a3",
        HTMLclass:"leave"
    },
node8a3a9a3a1 = {
        parent: node8a3a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence"},
        HTMLid:"8a3a9a3a1",
        HTMLclass:"leave"
    },
node8a3a9a3a2 = {
        parent: node8a3a9a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence"},
        HTMLid:"8a3a9a3a2",
        HTMLclass:"leave"
    },
node8a3a9a4 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exception d'illégalité"},
        HTMLid:"8a3a9a4",
        HTMLclass:"leave"
    },
node8a3a9a5 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs d'ordre public"},
        HTMLid:"8a3a9a5",
        HTMLclass:"leave"
    },
node8a3a9a6 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs manquant en fait"},
        HTMLid:"8a3a9a6",
        HTMLclass:"leave"
    },
node8a3a9a7 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs insuffisamment précisés"},
        HTMLid:"8a3a9a7",
        HTMLclass:"leave"
    },
node8a3a9a8 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs qui ne sont assortis d'aucun commencement de preuve"},
        HTMLid:"8a3a9a8",
        HTMLclass:"leave"
    },
node8a3a9a9 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs inopérants"},
        HTMLid:"8a3a9a9",
        HTMLclass:"leave"
    },
node8a3a9a10 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs surabondants"},
        HTMLid:"8a3a9a10",
    },
node8a3a9a11 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abandon d'un grief"},
        HTMLid:"8a3a9a11",
        HTMLclass:"leave"
    },
node8a3a9a12 = {
        parent: node8a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des griefs"},
        HTMLid:"8a3a9a12",
        HTMLclass:"leave"
    },
node8a3a10 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Instruction"},
        HTMLid:"8a3a10",
    },
node8a3a10a1 = {
        parent: node8a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs généraux d'instruction"},
        HTMLid:"8a3a10a1",
    },
node8a3a10a1a1 = {
        parent: node8a3a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rejet sans instruction contradictoire préalable"},
        HTMLid:"8a3a10a1a1",
        HTMLclass:"leave"
    },
node8a3a10a1a2 = {
        parent: node8a3a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jonction d'instance"},
        HTMLid:"8a3a10a1a2",
        HTMLclass:"leave"
    },
node8a3a10a1a3 = {
        parent: node8a3a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vérifications administratives"},
        HTMLid:"8a3a10a1a3",
        HTMLclass:"leave"
    },
node8a3a10a1a4 = {
        parent: node8a3a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pièces non fournies"},
        HTMLid:"8a3a10a1a4",
    },
node8a3a10a2 = {
        parent: node8a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Preuve"},
        HTMLid:"8a3a10a2",
    },
node8a3a10a2a1 = {
        parent: node8a3a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Preuve de la fraude rapportée"},
        HTMLid:"8a3a10a2a1",
    },
node8a3a10a2a2 = {
        parent: node8a3a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation des parties qui ne sont corroborées par aucun élément de preuve"},
        HTMLid:"8a3a10a2a2",
        HTMLclass:"leave"
    },
node8a3a10a2a3 = {
        parent: node8a3a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation au regard des procès-verbaux"},
        HTMLid:"8a3a10a2a3",
        HTMLclass:"leave"
    },
node8a3a10a2a4 = {
        parent: node8a3a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attestations"},
        HTMLid:"8a3a10a2a4",
        HTMLclass:"leave"
    },
node8a3a10a2a5 = {
        parent: node8a3a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Faits non pertinents pour prouver la fraude ou l'irrégularité alléguée"},
        HTMLid:"8a3a10a2a5",
        HTMLclass:"leave"
    },
node8a3a10a3 = {
        parent: node8a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidents de procédure, demandes particulières, non-lieu à statuer"},
        HTMLid:"8a3a10a3",
    },
node8a3a10a3a1 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désistement d'instance"},
        HTMLid:"8a3a10a3a1",
        HTMLclass:"leave"
    },
node8a3a10a3a2 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Grief abandonné"},
        HTMLid:"8a3a10a3a2",
        HTMLclass:"leave"
    },
node8a3a10a3a3 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enquêtes"},
        HTMLid:"8a3a10a3a3",
        HTMLclass:"leave"
    },
node8a3a10a3a4 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus d'enquête"},
        HTMLid:"8a3a10a3a4",
        HTMLclass:"leave"
    },
node8a3a10a3a5 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer"},
        HTMLid:"8a3a10a3a5",
        HTMLclass:"leave"
    },
node8a3a10a3a6 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve d'action en diffamation"},
        HTMLid:"8a3a10a3a6",
        HTMLclass:"leave"
    },
node8a3a10a3a7 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demandes particulières"},
        HTMLid:"8a3a10a3a7",
        HTMLclass:"leave"
    },
node8a3a10a3a8 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Invitations à régulariser"},
        HTMLid:"8a3a10a3a8",
        HTMLclass:"leave"
    },
node8a3a10a3a9 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande de consultation d'un compte de campagne"},
        HTMLid:"8a3a10a3a9",
        HTMLclass:"leave"
    },
node8a3a10a3a10 = {
        parent: node8a3a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requêtes présentant un caractère abusif"},
        HTMLid:"8a3a10a3a10",
        HTMLclass:"leave"
    },
node8a3a11 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Appréciation des faits par le Conseil constitutionnel"},
        HTMLid:"8a3a11",
    },
node8a3a11a1 = {
        parent: node8a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités qui ne modifient pas le résultat"},
        HTMLid:"8a3a11a1",
        HTMLclass:"leave"
    },
node8a3a11a1a1 = {
        parent: node8a3a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités dont il n'est pas établi qu'elles aient permis des fraudes"},
        HTMLid:"8a3a11a1a1",
        HTMLclass:"leave"
    },
node8a3a11a1a1a1 = {
        parent: node8a3a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Électorat"},
        HTMLid:"8a3a11a1a1a1",
        HTMLclass:"leave"
    },
node8a3a11a1a1a2 = {
        parent: node8a3a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a1a1a2",
        HTMLclass:"leave"
    },
node8a3a11a1a1a3 = {
        parent: node8a3a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a3a11a1a1a3",
        HTMLclass:"leave"
    },
node8a3a11a1a1a4 = {
        parent: node8a3a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations de dépouillement"},
        HTMLid:"8a3a11a1a1a4",
    },
node8a3a11a1a2 = {
        parent: node8a3a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités qui, en raison de l'écart des voix, ne modifient pas le résultat"},
        HTMLid:"8a3a11a1a2",
        HTMLclass:"leave"
    },
node8a3a11a1a2a1 = {
        parent: node8a3a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Électorat"},
        HTMLid:"8a3a11a1a2a1",
        HTMLclass:"leave"
    },
node8a3a11a1a2a2 = {
        parent: node8a3a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Éligibilité"},
        HTMLid:"8a3a11a1a2a2",
        HTMLclass:"leave"
    },
node8a3a11a1a2a3 = {
        parent: node8a3a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures"},
        HTMLid:"8a3a11a1a2a3",
        HTMLclass:"leave"
    },
node8a3a11a1a2a4 = {
        parent: node8a3a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a1a2a4",
        HTMLclass:"leave"
    },
node8a3a11a1a2a5 = {
        parent: node8a3a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a3a11a1a2a5",
        HTMLclass:"leave"
    },
node8a3a11a1a3 = {
        parent: node8a3a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités qui ne modifient pas le résultat en raison de la réciprocité des manoeuvres ou irrégularités"},
        HTMLid:"8a3a11a1a3",
    },
node8a3a11a1a3a1 = {
        parent: node8a3a11a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a1a3a1",
        HTMLclass:"leave"
    },
node8a3a11a1a3a2 = {
        parent: node8a3a11a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a3a11a1a3a2",
        HTMLclass:"leave"
    },
node8a3a11a1a4 = {
        parent: node8a3a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités au premier tour sans incidence sur la situation des candidats pour le second"},
        HTMLid:"8a3a11a1a4",
        HTMLclass:"leave"
    },
node8a3a11a1a4a1 = {
        parent: node8a3a11a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Éligibilité"},
        HTMLid:"8a3a11a1a4a1",
        HTMLclass:"leave"
    },
node8a3a11a1a4a2 = {
        parent: node8a3a11a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a1a4a2",
        HTMLclass:"leave"
    },
node8a3a11a1a4a3 = {
        parent: node8a3a11a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a3a11a1a4a3",
        HTMLclass:"leave"
    },
node8a3a11a1a4a4 = {
        parent: node8a3a11a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux"},
        HTMLid:"8a3a11a1a4a4",
        HTMLclass:"leave"
    },
node8a3a11a1a5 = {
        parent: node8a3a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités qui ne modifient pas le résultat en raison des circonstances particulières de l'élection"},
        HTMLid:"8a3a11a1a5",
    },
node8a3a11a1a5a1 = {
        parent: node8a3a11a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Électorat"},
        HTMLid:"8a3a11a1a5a1",
        HTMLclass:"leave"
    },
node8a3a11a1a5a2 = {
        parent: node8a3a11a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures"},
        HTMLid:"8a3a11a1a5a2",
        HTMLclass:"leave"
    },
node8a3a11a1a5a3 = {
        parent: node8a3a11a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a1a5a3",
        HTMLclass:"leave"
    },
node8a3a11a2 = {
        parent: node8a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités ne donnant pas lieu à rectifications"},
        HTMLid:"8a3a11a2",
    },
node8a3a11a2a1 = {
        parent: node8a3a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En raison de l'écart des voix"},
        HTMLid:"8a3a11a2a1",
        HTMLclass:"leave"
    },
node8a3a11a2a2 = {
        parent: node8a3a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de certains votes au premier tour"},
        HTMLid:"8a3a11a2a2",
        HTMLclass:"leave"
    },
node8a3a11a3 = {
        parent: node8a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités donnant lieu à rectifications"},
        HTMLid:"8a3a11a3",
    },
node8a3a11a3a1 = {
        parent: node8a3a11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de certains votes"},
        HTMLid:"8a3a11a3a1",
    },
node8a3a11a3a1a1 = {
        parent: node8a3a11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Électorat"},
        HTMLid:"8a3a11a3a1a1",
        HTMLclass:"leave"
    },
node8a3a11a3a1a2 = {
        parent: node8a3a11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a3a11a3a1a2",
        HTMLclass:"leave"
    },
node8a3a11a3a1a3 = {
        parent: node8a3a11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre des émargements différent de celui des bulletins et enveloppes trouvés dans l'urne : jurisprudence antérieure aux élections législatives de 1988"},
        HTMLid:"8a3a11a3a1a3",
        HTMLclass:"leave"
    },
node8a3a11a3a1a4 = {
        parent: node8a3a11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre des émargements différent de celui des bulletins et enveloppes trouvés dans l'urne : jurisprudence faisant suite aux élections législatives de 1988"},
        HTMLid:"8a3a11a3a1a4",
        HTMLclass:"leave"
    },
node8a3a11a3a1a5 = {
        parent: node8a3a11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"8a3a11a3a1a5",
        HTMLclass:"leave"
    },
node8a3a11a3a2 = {
        parent: node8a3a11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation des votes dans un ou plusieurs bureaux"},
        HTMLid:"8a3a11a3a2",
        HTMLclass:"leave"
    },
node8a3a11a3a2a1 = {
        parent: node8a3a11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation des votes dans une section"},
        HTMLid:"8a3a11a3a2a1",
    },
node8a3a11a3a2a2 = {
        parent: node8a3a11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chose jugée par le Conseil constitutionnel"},
        HTMLid:"8a3a11a3a2a2",
        HTMLclass:"leave"
    },
node8a3a11a3a3 = {
        parent: node8a3a11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de l'élection"},
        HTMLid:"8a3a11a3a3",
        HTMLclass:"leave"
    },
node8a3a11a3a3a1 = {
        parent: node8a3a11a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Éligibilité"},
        HTMLid:"8a3a11a3a3a1",
        HTMLclass:"leave"
    },
node8a3a11a3a3a2 = {
        parent: node8a3a11a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propagande"},
        HTMLid:"8a3a11a3a3a2",
        HTMLclass:"leave"
    },
node8a3a11a3a3a3 = {
        parent: node8a3a11a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impossibilité de procéder à une rectification des résultats du scrutin"},
        HTMLid:"8a3a11a3a3a3",
        HTMLclass:"leave"
    },
node8a3a11a3a4 = {
        parent: node8a3a11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation du scrutin"},
        HTMLid:"8a3a11a3a4",
        HTMLclass:"leave"
    },
node8a3a11a3a4a1 = {
        parent: node8a3a11a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a3a11a3a4a1",
        HTMLclass:"leave"
    },
node8a3a11a3a4a2 = {
        parent: node8a3a11a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par correspondance"},
        HTMLid:"8a3a11a3a4a2",
        HTMLclass:"leave"
    },
node8a3a11a3a4a3 = {
        parent: node8a3a11a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par procuration"},
        HTMLid:"8a3a11a3a4a3",
        HTMLclass:"leave"
    },
node8a3a11a3a4a4 = {
        parent: node8a3a11a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépouillement"},
        HTMLid:"8a3a11a3a4a4",
        HTMLclass:"leave"
    },
node8a3a11a3a5 = {
        parent: node8a3a11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réformation"},
        HTMLid:"8a3a11a3a5",
        HTMLclass:"leave"
    },
node8a3a11a4 = {
        parent: node8a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes du contrôle"},
        HTMLid:"8a3a11a4",
        HTMLclass:"leave"
    },
node8a3a12 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Effet de la décision"},
        HTMLid:"8a3a12",
    },
node8a3a12a1 = {
        parent: node8a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de chose jugée par le Conseil constitutionnel"},
        HTMLid:"8a3a12a1",
        HTMLclass:"leave"
    },
node8a3a13 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Voies de recours (voir Titre 11.8.8 Conseil constitutionnel et contentieux des normes - Sens et portée de la décision)"},
        HTMLid:"8a3a13",
    },
node8a3a14 = {
        parent: node8a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mode de scrutin"},
        HTMLid:"8a3a14",
        HTMLclass:"leave"
    },
node8a4 = {
        parent: node8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉLECTIONS SÉNATORIALES"},
        HTMLid:"8a4",
    },
node8a4a1 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations préalables au scrutin"},
        HTMLid:"8a4a1",
    },
node8a4a1a1 = {
        parent: node8a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Listes des électeurs sénatoriaux"},
        HTMLid:"8a4a1a1",
    },
node8a4a1a1a1 = {
        parent: node8a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désignation des délégués"},
        HTMLid:"8a4a1a1a1",
        HTMLclass:"leave"
    },
node8a4a1a1a2 = {
        parent: node8a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité électorale"},
        HTMLid:"8a4a1a1a2",
        HTMLclass:"leave"
    },
node8a4a1a1a3 = {
        parent: node8a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tableau des électeurs sénatoriaux"},
        HTMLid:"8a4a1a1a3",
        HTMLclass:"leave"
    },
node8a4a1a1a4 = {
        parent: node8a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remplacement des délégués"},
        HTMLid:"8a4a1a1a4",
        HTMLclass:"leave"
    },
node8a4a1a1a5 = {
        parent: node8a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cartes d'électeur"},
        HTMLid:"8a4a1a1a5",
        HTMLclass:"leave"
    },
node8a4a1a2 = {
        parent: node8a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers des élus"},
        HTMLid:"8a4a1a2",
        HTMLclass:"leave"
    },
node8a4a2 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures"},
        HTMLid:"8a4a2",
    },
node8a4a2a1 = {
        parent: node8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'éligibilité"},
        HTMLid:"8a4a2a1",
    },
node8a4a2a1a1 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Âge"},
        HTMLid:"8a4a2a1a1",
    },
node8a4a2a1a2 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Personnes sous tutelle"},
        HTMLid:"8a4a2a1a2",
        HTMLclass:"leave"
    },
node8a4a2a1a3 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Naturalisés"},
        HTMLid:"8a4a2a1a3",
    },
node8a4a2a1a4 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accomplissement des obligations du service national"},
        HTMLid:"8a4a2a1a4",
        HTMLclass:"leave"
    },
node8a4a2a1a5 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inscription sur la liste électorale"},
        HTMLid:"8a4a2a1a5",
    },
node8a4a2a1a6 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions incompatibles"},
        HTMLid:"8a4a2a1a6",
        HTMLclass:"leave"
    },
node8a4a2a1a7 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctions n'entraînant pas l'inéligibilité"},
        HTMLid:"8a4a2a1a7",
        HTMLclass:"leave"
    },
node8a4a2a1a8 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remplaçants"},
        HTMLid:"8a4a2a1a8",
        HTMLclass:"leave"
    },
node8a4a2a1a9 = {
        parent: node8a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Condamnations pénales"},
        HTMLid:"8a4a2a1a9",
        HTMLclass:"leave"
    },
node8a4a2a2 = {
        parent: node8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration de candidature"},
        HTMLid:"8a4a2a2",
    },
node8a4a2a2a1 = {
        parent: node8a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures de liste"},
        HTMLid:"8a4a2a2a1",
        HTMLclass:"leave"
    },
node8a4a2a2a2 = {
        parent: node8a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité de la déclaration de candidature"},
        HTMLid:"8a4a2a2a2",
    },
node8a4a2a2a2a1 = {
        parent: node8a4a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus"},
        HTMLid:"8a4a2a2a2a1",
        HTMLclass:"leave"
    },
node8a4a2a2a2a2 = {
        parent: node8a4a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours du préfet devant le tribunal administratif"},
        HTMLid:"8a4a2a2a2a2",
        HTMLclass:"leave"
    },
node8a4a2a3 = {
        parent: node8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait de candidature"},
        HTMLid:"8a4a2a3",
    },
node8a4a2a3a1 = {
        parent: node8a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Après enregistrement de la liste primitive"},
        HTMLid:"8a4a2a3a1",
        HTMLclass:"leave"
    },
node8a4a2a3a2 = {
        parent: node8a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidatures pour le second tour du scrutin"},
        HTMLid:"8a4a2a3a2",
        HTMLclass:"leave"
    },
node8a4a2a3a3 = {
        parent: node8a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consentement au retrait"},
        HTMLid:"8a4a2a3a3",
        HTMLclass:"leave"
    },
node8a4a2a4 = {
        parent: node8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidature pour le second tour du scrutin"},
        HTMLid:"8a4a2a4",
        HTMLclass:"leave"
    },
node8a4a2a5 = {
        parent: node8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sénateurs représentant les Français établis hors de France"},
        HTMLid:"8a4a2a5",
        HTMLclass:"leave"
    },
node8a4a3 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale - Moyens de propagande"},
        HTMLid:"8a4a3",
    },
node8a4a3a1 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiches"},
        HTMLid:"8a4a3a1",
    },
node8a4a3a1a1 = {
        parent: node8a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lieu et date d'apposition des affiches"},
        HTMLid:"8a4a3a1a1",
        HTMLclass:"leave"
    },
node8a4a3a1a2 = {
        parent: node8a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu"},
        HTMLid:"8a4a3a1a2",
        HTMLclass:"leave"
    },
node8a4a3a1a3 = {
        parent: node8a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiches enlevées, recouvertes ou lacérées"},
        HTMLid:"8a4a3a1a3",
        HTMLclass:"leave"
    },
node8a4a3a2 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins"},
        HTMLid:"8a4a3a2",
    },
node8a4a3a2a1 = {
        parent: node8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise des bulletins"},
        HTMLid:"8a4a3a2a1",
        HTMLclass:"leave"
    },
node8a4a3a2a2 = {
        parent: node8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Acceptation des bulletins par la commission de propagande"},
        HTMLid:"8a4a3a2a2",
    },
node8a4a3a2a3 = {
        parent: node8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu et format des bulletins"},
        HTMLid:"8a4a3a2a3",
        HTMLclass:"leave"
    },
node8a4a3a3 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tracts"},
        HTMLid:"8a4a3a3",
    },
node8a4a3a3a1 = {
        parent: node8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"8a4a3a3a1",
        HTMLclass:"leave"
    },
node8a4a3a3a2 = {
        parent: node8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités retenues pour l'annulation d'une élection"},
        HTMLid:"8a4a3a3a2",
        HTMLclass:"leave"
    },
node8a4a3a3a3 = {
        parent: node8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités sans influence sur les résultats"},
        HTMLid:"8a4a3a3a3",
        HTMLclass:"leave"
    },
node8a4a3a3a4 = {
        parent: node8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrégularités"},
        HTMLid:"8a4a3a3a4",
        HTMLclass:"leave"
    },
node8a4a3a4 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réunions"},
        HTMLid:"8a4a3a4",
        HTMLclass:"leave"
    },
node8a4a3a5 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Circulaires"},
        HTMLid:"8a4a3a5",
    },
node8a4a3a5a1 = {
        parent: node8a4a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités"},
        HTMLid:"8a4a3a5a1",
        HTMLclass:"leave"
    },
node8a4a3a5a2 = {
        parent: node8a4a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrégularités"},
        HTMLid:"8a4a3a5a2",
        HTMLclass:"leave"
    },
node8a4a3a6 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Presse"},
        HTMLid:"8a4a3a6",
        HTMLclass:"leave"
    },
node8a4a3a7 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publications municipales"},
        HTMLid:"8a4a3a7",
        HTMLclass:"leave"
    },
node8a4a3a8 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sondages"},
        HTMLid:"8a4a3a8",
    },
node8a4a3a9 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Radio-télévision"},
        HTMLid:"8a4a3a9",
        HTMLclass:"leave"
    },
node8a4a3a10 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Internet"},
        HTMLid:"8a4a3a10",
        HTMLclass:"leave"
    },
node8a4a3a11 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres de soutien au candidat"},
        HTMLid:"8a4a3a11",
    },
node8a4a3a11a1 = {
        parent: node8a4a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres émanant du Gouvernement"},
        HTMLid:"8a4a3a11a1",
        HTMLclass:"leave"
    },
node8a4a3a11a2 = {
        parent: node8a4a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres de parlementaires"},
        HTMLid:"8a4a3a11a2",
    },
node8a4a3a11a3 = {
        parent: node8a4a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres d'élus locaux"},
        HTMLid:"8a4a3a11a3",
        HTMLclass:"leave"
    },
node8a4a3a11a4 = {
        parent: node8a4a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres envoyées par un parti politique"},
        HTMLid:"8a4a3a11a4",
        HTMLclass:"leave"
    },
node8a4a3a12 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lettres dirigées contre un candidat"},
        HTMLid:"8a4a3a12",
        HTMLclass:"leave"
    },
node8a4a3a13 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prohibition de dons émanant de personnes morales (article L. 52-8, alinéa 2, du code électoral)"},
        HTMLid:"8a4a3a13",
        HTMLclass:"leave"
    },
node8a4a3a14 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de don ou d'avantage"},
        HTMLid:"8a4a3a14",
        HTMLclass:"leave"
    },
node8a4a3a15 = {
        parent: node8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres irrégularités"},
        HTMLid:"8a4a3a15",
        HTMLclass:"leave"
    },
node8a4a4 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale - Incidents"},
        HTMLid:"8a4a4",
        HTMLclass:"leave"
    },
node8a4a5 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne électorale - Interventions, pressions, manoeuvres"},
        HTMLid:"8a4a5",
    },
node8a4a5a1 = {
        parent: node8a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interventions"},
        HTMLid:"8a4a5a1",
    },
node8a4a5a1a1 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Gouvernement"},
        HTMLid:"8a4a5a1a1",
        HTMLclass:"leave"
    },
node8a4a5a1a2 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parlementaires"},
        HTMLid:"8a4a5a1a2",
    },
node8a4a5a1a3 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président du conseil général"},
        HTMLid:"8a4a5a1a3",
        HTMLclass:"leave"
    },
node8a4a5a1a4 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisations professionnelles"},
        HTMLid:"8a4a5a1a4",
        HTMLclass:"leave"
    },
node8a4a5a1a5 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres élus"},
        HTMLid:"8a4a5a1a5",
        HTMLclass:"leave"
    },
node8a4a5a1a6 = {
        parent: node8a4a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"8a4a5a1a6",
        HTMLclass:"leave"
    },
node8a4a5a2 = {
        parent: node8a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions"},
        HTMLid:"8a4a5a2",
    },
node8a4a5a2a1 = {
        parent: node8a4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions sur les électeurs"},
        HTMLid:"8a4a5a2a1",
        HTMLclass:"leave"
    },
node8a4a5a2a2 = {
        parent: node8a4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pressions par intimidation ou corruption"},
        HTMLid:"8a4a5a2a2",
        HTMLclass:"leave"
    },
node8a4a5a3 = {
        parent: node8a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres"},
        HTMLid:"8a4a5a3",
    },
node8a4a5a3a1 = {
        parent: node8a4a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres ou interventions relatives à la situation politique d'un candidat"},
        HTMLid:"8a4a5a3a1",
    },
node8a4a5a3a1a1 = {
        parent: node8a4a5a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appartenance ou  étiquette  politique"},
        HTMLid:"8a4a5a3a1a1",
        HTMLclass:"leave"
    },
node8a4a5a3a1a2 = {
        parent: node8a4a5a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Investitures"},
        HTMLid:"8a4a5a3a1a2",
        HTMLclass:"leave"
    },
node8a4a5a3a1a3 = {
        parent: node8a4a5a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soutiens"},
        HTMLid:"8a4a5a3a1a3",
        HTMLclass:"leave"
    },
node8a4a5a3a1a4 = {
        parent: node8a4a5a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait d'un candidat"},
        HTMLid:"8a4a5a3a1a4",
        HTMLclass:"leave"
    },
node8a4a5a3a2 = {
        parent: node8a4a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres ou interventions relatives au second tour"},
        HTMLid:"8a4a5a3a2",
    },
node8a4a5a3a2a1 = {
        parent: node8a4a5a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accord des partis (voir également ci-dessous : Soutiens)"},
        HTMLid:"8a4a5a3a2a1",
        HTMLclass:"leave"
    },
node8a4a5a3a2a2 = {
        parent: node8a4a5a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soutiens"},
        HTMLid:"8a4a5a3a2a2",
        HTMLclass:"leave"
    },
node8a4a5a3a2a3 = {
        parent: node8a4a5a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien de candidature"},
        HTMLid:"8a4a5a3a2a3",
        HTMLclass:"leave"
    },
node8a4a5a3a2a4 = {
        parent: node8a4a5a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désistements"},
        HTMLid:"8a4a5a3a2a4",
        HTMLclass:"leave"
    },
node8a4a5a3a3 = {
        parent: node8a4a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Manoeuvres diverses"},
        HTMLid:"8a4a5a3a3",
    },
node8a4a5a3a3a1 = {
        parent: node8a4a5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation des moyens de l'administration"},
        HTMLid:"8a4a5a3a3a1",
        HTMLclass:"leave"
    },
node8a4a5a3a3a2 = {
        parent: node8a4a5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence inexacte à des fonctions occupées par le candidat"},
        HTMLid:"8a4a5a3a3a2",
        HTMLclass:"leave"
    },
node8a4a5a3a3a3 = {
        parent: node8a4a5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tests relatifs aux résultats des élections sénatoriales"},
        HTMLid:"8a4a5a3a3a3",
    },
node8a4a6 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations électorales"},
        HTMLid:"8a4a6",
    },
node8a4a6a1 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation matérielle du scrutin"},
        HTMLid:"8a4a6a1",
    },
node8a4a6a1a1 = {
        parent: node8a4a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nombre et implantation des bureaux de vote"},
        HTMLid:"8a4a6a1a1",
    },
node8a4a6a1a2 = {
        parent: node8a4a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation matérielle des bureaux de vote"},
        HTMLid:"8a4a6a1a2",
        HTMLclass:"leave"
    },
node8a4a6a2 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition du bureau du collège électoral"},
        HTMLid:"8a4a6a2",
    },
node8a4a6a2a1 = {
        parent: node8a4a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président des bureaux du collège électoral"},
        HTMLid:"8a4a6a2a1",
        HTMLclass:"leave"
    },
node8a4a6a2a2 = {
        parent: node8a4a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution des bureaux du collège électoral"},
        HTMLid:"8a4a6a2a2",
        HTMLclass:"leave"
    },
node8a4a6a2a3 = {
        parent: node8a4a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice de leurs fonctions par les membres du bureau"},
        HTMLid:"8a4a6a2a3",
    },
node8a4a6a3 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a4a6a3",
    },
node8a4a6a3a1 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès à la salle de vote"},
        HTMLid:"8a4a6a3a1",
        HTMLclass:"leave"
    },
node8a4a6a3a2 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Heure d'ouverture du scrutin"},
        HTMLid:"8a4a6a3a2",
        HTMLclass:"leave"
    },
node8a4a6a3a3 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du scrutin"},
        HTMLid:"8a4a6a3a3",
        HTMLclass:"leave"
    },
node8a4a6a3a4 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interruption du scrutin"},
        HTMLid:"8a4a6a3a4",
        HTMLclass:"leave"
    },
node8a4a6a3a5 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise à la disposition des électeurs des bulletins et enveloppes"},
        HTMLid:"8a4a6a3a5",
    },
node8a4a6a3a5a1 = {
        parent: node8a4a6a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins"},
        HTMLid:"8a4a6a3a5a1",
        HTMLclass:"leave"
    },
node8a4a6a3a5a2 = {
        parent: node8a4a6a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enveloppes"},
        HTMLid:"8a4a6a3a5a2",
        HTMLclass:"leave"
    },
node8a4a6a3a6 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Isoloirs"},
        HTMLid:"8a4a6a3a6",
        HTMLclass:"leave"
    },
node8a4a6a3a7 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'identité des électeurs"},
        HTMLid:"8a4a6a3a7",
    },
node8a4a6a3a7a1 = {
        parent: node8a4a6a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularité sans influence"},
        HTMLid:"8a4a6a3a7a1",
        HTMLclass:"leave"
    },
node8a4a6a3a8 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Listes d'émargement"},
        HTMLid:"8a4a6a3a8",
    },
node8a4a6a3a8a1 = {
        parent: node8a4a6a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités"},
        HTMLid:"8a4a6a3a8a1",
        HTMLclass:"leave"
    },
node8a4a6a3a8a2 = {
        parent: node8a4a6a3a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'irrégularités"},
        HTMLid:"8a4a6a3a8a2",
        HTMLclass:"leave"
    },
node8a4a6a3a9 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Empêchement des délégués - Suppléants"},
        HTMLid:"8a4a6a3a9",
    },
node8a4a6a3a9a1 = {
        parent: node8a4a6a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situation des délégués de plein droit"},
        HTMLid:"8a4a6a3a9a1",
        HTMLclass:"leave"
    },
node8a4a6a3a9a2 = {
        parent: node8a4a6a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Justificatifs"},
        HTMLid:"8a4a6a3a9a2",
        HTMLclass:"leave"
    },
node8a4a6a3a9a3 = {
        parent: node8a4a6a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre de suppléance"},
        HTMLid:"8a4a6a3a9a3",
        HTMLclass:"leave"
    },
node8a4a6a3a10 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urnes de vote"},
        HTMLid:"8a4a6a3a10",
        HTMLclass:"leave"
    },
node8a4a6a3a11 = {
        parent: node8a4a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidents divers"},
        HTMLid:"8a4a6a3a11",
        HTMLclass:"leave"
    },
node8a4a6a4 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote par procuration"},
        HTMLid:"8a4a6a4",
        HTMLclass:"leave"
    },
node8a4a6a5 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépouillement"},
        HTMLid:"8a4a6a5",
    },
node8a4a6a5a1 = {
        parent: node8a4a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation du dépouillement"},
        HTMLid:"8a4a6a5a1",
        HTMLclass:"leave"
    },
node8a4a6a5a2 = {
        parent: node8a4a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validité des bulletins"},
        HTMLid:"8a4a6a5a2",
        HTMLclass:"leave"
    },
node8a4a6a5a3 = {
        parent: node8a4a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités et incidents divers"},
        HTMLid:"8a4a6a5a3",
        HTMLclass:"leave"
    },
node8a4a6a6 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement des procès-verbaux et de leurs annexes"},
        HTMLid:"8a4a6a6",
    },
node8a4a6a6a1 = {
        parent: node8a4a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Feuilles de dépouillement et feuilles de pointage"},
        HTMLid:"8a4a6a6a1",
        HTMLclass:"leave"
    },
node8a4a6a6a2 = {
        parent: node8a4a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procès-verbaux"},
        HTMLid:"8a4a6a6a2",
        HTMLclass:"leave"
    },
node8a4a6a7 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation des résultats"},
        HTMLid:"8a4a6a7",
        HTMLclass:"leave"
    },
node8a4a6a8 = {
        parent: node8a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recensement général des votes"},
        HTMLid:"8a4a6a8",
        HTMLclass:"leave"
    },
node8a4a7 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Compétence"},
        HTMLid:"8a4a7",
    },
node8a4a7a1 = {
        parent: node8a4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence du Conseil constitutionnel"},
        HTMLid:"8a4a7a1",
    },
node8a4a7a1a1 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décisions préliminaires - Examen de la régularité du décret de convocation des électeurs"},
        HTMLid:"8a4a7a1a1",
        HTMLclass:"leave"
    },
node8a4a7a1a2 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nullité édictée par un texte de nature réglementaire"},
        HTMLid:"8a4a7a1a2",
        HTMLclass:"leave"
    },
node8a4a7a1a3 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des jugements des tribunaux administratifs"},
        HTMLid:"8a4a7a1a3",
    },
node8a4a7a1a3a1 = {
        parent: node8a4a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jugement statuant sur la validité des candidatures"},
        HTMLid:"8a4a7a1a3a1",
        HTMLclass:"leave"
    },
node8a4a7a1a3a2 = {
        parent: node8a4a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jugement portant sur la composition du collège électoral sénatorial"},
        HTMLid:"8a4a7a1a3a2",
        HTMLclass:"leave"
    },
node8a4a7a1a4 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élection des sénateurs représentant les Français établis hors de France"},
        HTMLid:"8a4a7a1a4",
        HTMLclass:"leave"
    },
node8a4a7a1a5 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question prioritaire de constitutionnalité"},
        HTMLid:"8a4a7a1a5",
        HTMLclass:"leave"
    },
node8a4a7a1a6 = {
        parent: node8a4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions n'entrant pas dans la compétence du Conseil constitutionnel"},
        HTMLid:"8a4a7a1a6",
    },
node8a4a7a1a6a1 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conformité à la Constitution d'un texte législatif"},
        HTMLid:"8a4a7a1a6a1",
        HTMLclass:"leave"
    },
node8a4a7a1a6a2 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation ne portant pas sur l'élection elle-même (voir également ci-dessus : Jugement portant sur la composition du collège électoral sénatorial)"},
        HTMLid:"8a4a7a1a6a2",
        HTMLclass:"leave"
    },
node8a4a7a1a6a3 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation des membres de droit du collège électoral sénatorial"},
        HTMLid:"8a4a7a1a6a3",
        HTMLclass:"leave"
    },
node8a4a7a1a6a4 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Engagement d'une procédure, condamnation d'un élu, dommages-intérêts"},
        HTMLid:"8a4a7a1a6a4",
        HTMLclass:"leave"
    },
node8a4a7a1a6a5 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remboursement des frais de propagande"},
        HTMLid:"8a4a7a1a6a5",
        HTMLclass:"leave"
    },
node8a4a7a1a6a6 = {
        parent: node8a4a7a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Frais irrépétibles"},
        HTMLid:"8a4a7a1a6a6",
        HTMLclass:"leave"
    },
node8a4a8 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Recevabilité de la réclamation"},
        HTMLid:"8a4a8",
    },
node8a4a8a1 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délais"},
        HTMLid:"8a4a8a1",
    },
node8a4a8a1a1 = {
        parent: node8a4a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date d'enregistrement au secrétariat général du Conseil constitutionnel"},
        HTMLid:"8a4a8a1a1",
        HTMLclass:"leave"
    },
node8a4a8a1a2 = {
        parent: node8a4a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête prématurée"},
        HTMLid:"8a4a8a1a2",
        HTMLclass:"leave"
    },
node8a4a8a1a3 = {
        parent: node8a4a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête tardive"},
        HTMLid:"8a4a8a1a3",
        HTMLclass:"leave"
    },
node8a4a8a2 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Capacité du requérant"},
        HTMLid:"8a4a8a2",
        HTMLclass:"leave"
    },
node8a4a8a3 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualité pour agir"},
        HTMLid:"8a4a8a3",
        HTMLclass:"leave"
    },
node8a4a8a4 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités auxquelles la requête doit être adressée"},
        HTMLid:"8a4a8a4",
        HTMLclass:"leave"
    },
node8a4a8a5 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formes de la requête"},
        HTMLid:"8a4a8a5",
    },
node8a4a8a5a1 = {
        parent: node8a4a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désignation de l'élection contestée"},
        HTMLid:"8a4a8a5a1",
        HTMLclass:"leave"
    },
node8a4a8a5a2 = {
        parent: node8a4a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Signature"},
        HTMLid:"8a4a8a5a2",
        HTMLclass:"leave"
    },
node8a4a8a5a3 = {
        parent: node8a4a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation"},
        HTMLid:"8a4a8a5a3",
        HTMLclass:"leave"
    },
node8a4a8a5a4 = {
        parent: node8a4a8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requêtes collectives"},
        HTMLid:"8a4a8a5a4",
        HTMLclass:"leave"
    },
node8a4a8a6 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des conclusions et griefs"},
        HTMLid:"8a4a8a6",
    },
node8a4a8a6a1 = {
        parent: node8a4a8a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité d'un recours préalable devant le tribunal administratif"},
        HTMLid:"8a4a8a6a1",
        HTMLclass:"leave"
    },
node8a4a8a6a2 = {
        parent: node8a4a8a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Possibilité de contestation partielle des résultats"},
        HTMLid:"8a4a8a6a2",
        HTMLclass:"leave"
    },
node8a4a8a6a3 = {
        parent: node8a4a8a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité d'un grief tiré de l'octroi d'avantages au candidat élu"},
        HTMLid:"8a4a8a6a3",
        HTMLclass:"leave"
    },
node8a4a8a7 = {
        parent: node8a4a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité"},
        HTMLid:"8a4a8a7",
    },
node8a4a8a7a1 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande en annulation non constituée (voir également ci-dessus : Contestation ne portant pas sur l'élection elle-même)"},
        HTMLid:"8a4a8a7a1",
        HTMLclass:"leave"
    },
node8a4a8a7a2 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de la règle  non ultra petita "},
        HTMLid:"8a4a8a7a2",
        HTMLclass:"leave"
    },
node8a4a8a7a3 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simple réclamation ou protestation"},
        HTMLid:"8a4a8a7a3",
        HTMLclass:"leave"
    },
node8a4a8a7a4 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Simple demande de rectification des résultats sans incidence sur le sens de l'élection"},
        HTMLid:"8a4a8a7a4",
        HTMLclass:"leave"
    },
node8a4a8a7a5 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requête concluant uniquement à ce qu'une enquête soit ordonnée"},
        HTMLid:"8a4a8a7a5",
        HTMLclass:"leave"
    },
node8a4a8a7a6 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contestation portant sur des élections antérieures"},
        HTMLid:"8a4a8a7a6",
        HTMLclass:"leave"
    },
node8a4a8a7a7 = {
        parent: node8a4a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en cause de l'appréciation juridique"},
        HTMLid:"8a4a8a7a7",
        HTMLclass:"leave"
    },
node8a4a9 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Griefs"},
        HTMLid:"8a4a9",
    },
node8a4a9a1 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des griefs tendant à l'annulation de l'élection"},
        HTMLid:"8a4a9a1",
        HTMLclass:"leave"
    },
node8a4a9a2 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exception d'illégalité"},
        HTMLid:"8a4a9a2",
        HTMLclass:"leave"
    },
node8a4a9a3 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs nouveaux"},
        HTMLid:"8a4a9a3",
        HTMLclass:"leave"
    },
node8a4a9a4 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs manquant en fait"},
        HTMLid:"8a4a9a4",
        HTMLclass:"leave"
    },
node8a4a9a5 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs insuffisamment précisés"},
        HTMLid:"8a4a9a5",
        HTMLclass:"leave"
    },
node8a4a9a6 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs qui ne sont assortis d'aucun commencement de preuve"},
        HTMLid:"8a4a9a6",
        HTMLclass:"leave"
    },
node8a4a9a7 = {
        parent: node8a4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs inopérants"},
        HTMLid:"8a4a9a7",
        HTMLclass:"leave"
    },
node8a4a10 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Instruction"},
        HTMLid:"8a4a10",
    },
node8a4a10a1 = {
        parent: node8a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs généraux d'instruction"},
        HTMLid:"8a4a10a1",
    },
node8a4a10a1a1 = {
        parent: node8a4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rejet sans instruction contradictoire préalable"},
        HTMLid:"8a4a10a1a1",
        HTMLclass:"leave"
    },
node8a4a10a1a2 = {
        parent: node8a4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jonction d'instance"},
        HTMLid:"8a4a10a1a2",
        HTMLclass:"leave"
    },
node8a4a10a2 = {
        parent: node8a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Preuve"},
        HTMLid:"8a4a10a2",
    },
node8a4a10a2a1 = {
        parent: node8a4a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation des parties qui ne sont corroborées par aucun élément de preuve"},
        HTMLid:"8a4a10a2a1",
        HTMLclass:"leave"
    },
node8a4a10a2a2 = {
        parent: node8a4a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation au regard des procès-verbaux"},
        HTMLid:"8a4a10a2a2",
        HTMLclass:"leave"
    },
node8a4a10a2a3 = {
        parent: node8a4a10a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Faits non pertinents pour prouver la fraude ou l'irrégularité alléguée"},
        HTMLid:"8a4a10a2a3",
        HTMLclass:"leave"
    },
node8a4a10a3 = {
        parent: node8a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incidents de procédure, demandes particulières, non-lieu à statuer"},
        HTMLid:"8a4a10a3",
    },
node8a4a10a3a1 = {
        parent: node8a4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désistement d'instance"},
        HTMLid:"8a4a10a3a1",
        HTMLclass:"leave"
    },
node8a4a10a3a2 = {
        parent: node8a4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus d'enquête"},
        HTMLid:"8a4a10a3a2",
        HTMLclass:"leave"
    },
node8a4a10a3a3 = {
        parent: node8a4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demandes particulières"},
        HTMLid:"8a4a10a3a3",
        HTMLclass:"leave"
    },
node8a4a10a3a4 = {
        parent: node8a4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Invitations à régulariser"},
        HTMLid:"8a4a10a3a4",
    },
node8a4a11 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Appréciation des faits par le Conseil constitutionnel"},
        HTMLid:"8a4a11",
    },
node8a4a11a1 = {
        parent: node8a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités qui ne modifient pas le résultat"},
        HTMLid:"8a4a11a1",
    },
node8a4a11a1a1 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parce qu'il n'est pas établi qu'elles aient permis des fraudes"},
        HTMLid:"8a4a11a1a1",
        HTMLclass:"leave"
    },
node8a4a11a1a2 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En raison de la composition particulière du collège électoral sénatorial"},
        HTMLid:"8a4a11a1a2",
        HTMLclass:"leave"
    },
node8a4a11a1a3 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En raison de l'écart des voix"},
        HTMLid:"8a4a11a1a3",
        HTMLclass:"leave"
    },
node8a4a11a1a4 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En raison de la réciprocité des manoeuvres ou irrégularités"},
        HTMLid:"8a4a11a1a4",
        HTMLclass:"leave"
    },
node8a4a11a1a5 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En raison des circonstances particulières de l'élection"},
        HTMLid:"8a4a11a1a5",
        HTMLclass:"leave"
    },
node8a4a11a1a6 = {
        parent: node8a4a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"8a4a11a1a6",
        HTMLclass:"leave"
    },
node8a4a11a2 = {
        parent: node8a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrégularités donnant lieu à rectifications"},
        HTMLid:"8a4a11a2",
    },
node8a4a11a2a1 = {
        parent: node8a4a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation des votes dans une section"},
        HTMLid:"8a4a11a2a1",
        HTMLclass:"leave"
    },
node8a4a11a2a2 = {
        parent: node8a4a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de l'élection"},
        HTMLid:"8a4a11a2a2",
        HTMLclass:"leave"
    },
node8a4a11a3 = {
        parent: node8a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes du contrôle"},
        HTMLid:"8a4a11a3",
        HTMLclass:"leave"
    },
node8a4a11a4 = {
        parent: node8a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rectification des résultats emportant réformation"},
        HTMLid:"8a4a11a4",
        HTMLclass:"leave"
    },
node8a4a12 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Effet de la décision"},
        HTMLid:"8a4a12",
    },
node8a4a12a1 = {
        parent: node8a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date d'effet"},
        HTMLid:"8a4a12a1",
        HTMLclass:"leave"
    },
node8a4a13 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Voies de recours (voir Titre 11.8.8 Conseil constitutionnel et contentieux des normes - Sens et portée de la décision)"},
        HTMLid:"8a4a13",
    },
node8a4a14 = {
        parent: node8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Financement"},
        HTMLid:"8a4a14",
    },
node8a4a14a1 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandataire financier"},
        HTMLid:"8a4a14a1",
    },
node8a4a14a1a1 = {
        parent: node8a4a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Association de financement"},
        HTMLid:"8a4a14a1a1",
    },
node8a4a14a1a2 = {
        parent: node8a4a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de recourir à un mandataire"},
        HTMLid:"8a4a14a1a2",
    },
node8a4a14a1a3 = {
        parent: node8a4a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compte bancaire ou postal"},
        HTMLid:"8a4a14a1a3",
        HTMLclass:"leave"
    },
node8a4a14a2 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etablissement d'un compte de campagne"},
        HTMLid:"8a4a14a2",
    },
node8a4a14a2a1 = {
        parent: node8a4a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de dépôt du compte de campagne"},
        HTMLid:"8a4a14a2a1",
    },
node8a4a14a2a1a1 = {
        parent: node8a4a14a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de dépôt"},
        HTMLid:"8a4a14a2a1a1",
        HTMLclass:"leave"
    },
node8a4a14a2a1a2 = {
        parent: node8a4a14a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispense de dépôt"},
        HTMLid:"8a4a14a2a1a2",
    },
node8a4a14a2a1a3 = {
        parent: node8a4a14a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attestation d'absence de recette et de dépense"},
        HTMLid:"8a4a14a2a1a3",
        HTMLclass:"leave"
    },
node8a4a14a2a2 = {
        parent: node8a4a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai du dépôt"},
        HTMLid:"8a4a14a2a2",
        HTMLclass:"leave"
    },
node8a4a14a2a3 = {
        parent: node8a4a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lieu du dépôt"},
        HTMLid:"8a4a14a2a3",
    },
node8a4a14a2a4 = {
        parent: node8a4a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions du dépôt"},
        HTMLid:"8a4a14a2a4",
    },
node8a4a14a2a4a1 = {
        parent: node8a4a14a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Certification du compte de campagne par un membre de l'ordre des experts-comptables et comptables agréés"},
        HTMLid:"8a4a14a2a4a1",
        HTMLclass:"leave"
    },
node8a4a14a3 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présentation du compte"},
        HTMLid:"8a4a14a3",
        HTMLclass:"leave"
    },
node8a4a14a4 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes produites au compte de campagne"},
        HTMLid:"8a4a14a4",
    },
node8a4a14a4a1 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Plafonnement des recettes"},
        HTMLid:"8a4a14a4a1",
    },
node8a4a14a4a2 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes devant figurer dans le compte"},
        HTMLid:"8a4a14a4a2",
    },
node8a4a14a4a3 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons ou avantages consentis par des partis ou groupements politiques"},
        HTMLid:"8a4a14a4a3",
    },
node8a4a14a4a4 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons ou avantages consentis par une personne physique"},
        HTMLid:"8a4a14a4a4",
    },
node8a4a14a4a5 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons ou avantages consentis par une personne morale à l'exception d'un parti ou groupement politique"},
        HTMLid:"8a4a14a4a5",
    },
node8a4a14a4a5a1 = {
        parent: node8a4a14a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"8a4a14a4a5a1",
    },
node8a4a14a4a5a2 = {
        parent: node8a4a14a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période"},
        HTMLid:"8a4a14a4a5a2",
    },
node8a4a14a4a5a3 = {
        parent: node8a4a14a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de don ou d'avantage"},
        HTMLid:"8a4a14a4a5a3",
        HTMLclass:"leave"
    },
node8a4a14a4a5a4 = {
        parent: node8a4a14a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice d'un avantage n'entraînant pas le rejet du compte"},
        HTMLid:"8a4a14a4a5a4",
    },
node8a4a14a4a5a5 = {
        parent: node8a4a14a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice d'un avantage entraînant le rejet du compte"},
        HTMLid:"8a4a14a4a5a5",
    },
node8a4a14a4a6 = {
        parent: node8a4a14a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dons sollicités par publicité par voie de presse"},
        HTMLid:"8a4a14a4a6",
    },
node8a4a14a5 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses produites au compte de campagne"},
        HTMLid:"8a4a14a5",
    },
node8a4a14a5a1 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Plafonnement des dépenses"},
        HTMLid:"8a4a14a5a1",
    },
node8a4a14a5a2 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses devant figurer dans le compte"},
        HTMLid:"8a4a14a5a2",
        HTMLclass:"leave"
    },
node8a4a14a5a3 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses n'ayant pas à figurer dans le compte"},
        HTMLid:"8a4a14a5a3",
    },
node8a4a14a5a3a1 = {
        parent: node8a4a14a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses de la campagne officielle"},
        HTMLid:"8a4a14a5a3a1",
    },
node8a4a14a5a3a2 = {
        parent: node8a4a14a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de campagne de promotion publicitaire"},
        HTMLid:"8a4a14a5a3a2",
        HTMLclass:"leave"
    },
node8a4a14a5a4 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses payées directement"},
        HTMLid:"8a4a14a5a4",
    },
node8a4a14a5a4a1 = {
        parent: node8a4a14a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses antérieures à la désignation du mandataire financier"},
        HTMLid:"8a4a14a5a4a1",
        HTMLclass:"leave"
    },
node8a4a14a5a4a2 = {
        parent: node8a4a14a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses postérieures à la désignation du mandataire financier"},
        HTMLid:"8a4a14a5a4a2",
        HTMLclass:"leave"
    },
node8a4a14a5a5 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réintégrations chiffrées"},
        HTMLid:"8a4a14a5a5",
    },
node8a4a14a5a6 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ristournes-Remises"},
        HTMLid:"8a4a14a5a6",
    },
node8a4a14a5a7 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Factures non réglées avant le dépôt du compte"},
        HTMLid:"8a4a14a5a7",
    },
node8a4a14a5a8 = {
        parent: node8a4a14a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modes de financement des dépenses"},
        HTMLid:"8a4a14a5a8",
    },
node8a4a14a6 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déficit"},
        HTMLid:"8a4a14a6",
        HTMLclass:"leave"
    },
node8a4a14a7 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission nationale des comptes de campagne et des financements politiques"},
        HTMLid:"8a4a14a7",
    },
node8a4a14a8 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention du Conseil constitutionnel en application des articles L.O. 136-1 et L. 308-1 du code électoral"},
        HTMLid:"8a4a14a8",
        HTMLclass:"leave"
    },
node8a4a14a9 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inéligibilité du candidat élu"},
        HTMLid:"8a4a14a9",
    },
node8a4a14a9a1 = {
        parent: node8a4a14a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Annulation de l'élection"},
        HTMLid:"8a4a14a9a1",
    },
node8a4a14a9a2 = {
        parent: node8a4a14a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Démission d'office du candidat élu"},
        HTMLid:"8a4a14a9a2",
        HTMLclass:"leave"
    },
node8a4a14a9a3 = {
        parent: node8a4a14a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépassement du plafond des dépenses"},
        HTMLid:"8a4a14a9a3",
    },
node8a4a14a9a4 = {
        parent: node8a4a14a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance de l'article L.52-8 du code électoral"},
        HTMLid:"8a4a14a9a4",
    },
node8a4a14a9a5 = {
        parent: node8a4a14a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance des principes d'unicité et d'exhaustivité"},
        HTMLid:"8a4a14a9a5",
    },
node8a4a14a10 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'inéligibilité du candidat élu"},
        HTMLid:"8a4a14a10",
        HTMLclass:"leave"
    },
node8a4a14a11 = {
        parent: node8a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidat non élu"},
        HTMLid:"8a4a14a11",
    },
node8a5 = {
        parent: node8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "RÉFÉRENDUMS"},
        HTMLid:"8a5",
    },
node8a5a1 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Initiative"},
        HTMLid:"8a5a1",
    },
node8a5a1a1 = {
        parent: node8a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proposition de recourir au référendum"},
        HTMLid:"8a5a1a1",
    },
node8a5a1a1a1 = {
        parent: node8a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 11, alinéa 1er"},
        HTMLid:"8a5a1a1a1",
    },
node8a5a1a1a2 = {
        parent: node8a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 11, alinéa 3"},
        HTMLid:"8a5a1a1a2",
        HTMLclass:"leave"
    },
node8a5a1a1a3 = {
        parent: node8a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 88-5"},
        HTMLid:"8a5a1a1a3",
    },
node8a5a1a1a4 = {
        parent: node8a5a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 89"},
        HTMLid:"8a5a1a1a4",
    },
node8a5a1a2 = {
        parent: node8a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Projet de loi soumis au référendum"},
        HTMLid:"8a5a1a2",
        HTMLclass:"leave"
    },
node8a5a1a3 = {
        parent: node8a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proposition de loi soumise au référendum"},
        HTMLid:"8a5a1a3",
    },
node8a5a1a3a1 = {
        parent: node8a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions"},
        HTMLid:"8a5a1a3a1",
        HTMLclass:"leave"
    },
node8a5a1a3a2 = {
        parent: node8a5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limites"},
        HTMLid:"8a5a1a3a2",
    },
node8a5a1a4 = {
        parent: node8a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration du Gouvernement et débat"},
        HTMLid:"8a5a1a4",
        HTMLclass:"leave"
    },
node8a5a2 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation du scrutin"},
        HTMLid:"8a5a2",
    },
node8a5a2a1 = {
        parent: node8a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du pouvoir réglementaire"},
        HTMLid:"8a5a2a1",
        HTMLclass:"leave"
    },
node8a5a2a2 = {
        parent: node8a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décret portant organisation du référendum"},
        HTMLid:"8a5a2a2",
    },
node8a5a2a2a1 = {
        parent: node8a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme du décret"},
        HTMLid:"8a5a2a2a1",
        HTMLclass:"leave"
    },
node8a5a2a2a2 = {
        parent: node8a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impression et diffusion des textes annexés"},
        HTMLid:"8a5a2a2a2",
        HTMLclass:"leave"
    },
node8a5a2a2a3 = {
        parent: node8a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu et diffusion de l'exposé des motifs"},
        HTMLid:"8a5a2a2a3",
        HTMLclass:"leave"
    },
node8a5a2a2a4 = {
        parent: node8a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu du projet de loi annexé"},
        HTMLid:"8a5a2a2a4",
        HTMLclass:"leave"
    },
node8a5a2a2a5 = {
        parent: node8a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai pour l'acheminement des documents électoraux"},
        HTMLid:"8a5a2a2a5",
        HTMLclass:"leave"
    },
node8a5a3 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Campagne référendaire"},
        HTMLid:"8a5a3",
    },
node8a5a3a1 = {
        parent: node8a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forme du décret relatif à la campagne du référendum"},
        HTMLid:"8a5a3a1",
        HTMLclass:"leave"
    },
node8a5a3a2 = {
        parent: node8a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Période de campagne"},
        HTMLid:"8a5a3a2",
        HTMLclass:"leave"
    },
node8a5a3a3 = {
        parent: node8a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Moyens de propagande"},
        HTMLid:"8a5a3a3",
    },
node8a5a3a4 = {
        parent: node8a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Partis et groupements habilités à participer à la campagne"},
        HTMLid:"8a5a3a4",
        HTMLclass:"leave"
    },
node8a5a4 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Financement"},
        HTMLid:"8a5a4",
    },
node8a5a4a1 = {
        parent: node8a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du décret relatif à la campagne du référendum"},
        HTMLid:"8a5a4a1",
        HTMLclass:"leave"
    },
node8a5a4a2 = {
        parent: node8a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution de l'aide publique aux formations politiques habilitées à participer à la campagne"},
        HTMLid:"8a5a4a2",
        HTMLclass:"leave"
    },
node8a5a4a3 = {
        parent: node8a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépôt des comptes de campagne"},
        HTMLid:"8a5a4a3",
    },
node8a5a4a4 = {
        parent: node8a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Association de financement"},
        HTMLid:"8a5a4a4",
        HTMLclass:"leave"
    },
node8a5a5 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations référendaires"},
        HTMLid:"8a5a5",
    },
node8a5a5a1 = {
        parent: node8a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déroulement du scrutin"},
        HTMLid:"8a5a5a1",
    },
node8a5a5a1a1 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procès-verbal"},
        HTMLid:"8a5a5a1a1",
        HTMLclass:"leave"
    },
node8a5a5a1a2 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Isoloirs"},
        HTMLid:"8a5a5a1a2",
        HTMLclass:"leave"
    },
node8a5a5a1a3 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'identité des électeurs"},
        HTMLid:"8a5a5a1a3",
        HTMLclass:"leave"
    },
node8a5a5a1a4 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bulletins"},
        HTMLid:"8a5a5a1a4",
        HTMLclass:"leave"
    },
node8a5a5a1a5 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urne de vote"},
        HTMLid:"8a5a5a1a5",
        HTMLclass:"leave"
    },
node8a5a5a1a6 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liste d'émargement"},
        HTMLid:"8a5a5a1a6",
        HTMLclass:"leave"
    },
node8a5a5a1a7 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violences ou pressions lors du scrutin"},
        HTMLid:"8a5a5a1a7",
        HTMLclass:"leave"
    },
node8a5a5a1a8 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégué d'une organisation politique"},
        HTMLid:"8a5a5a1a8",
        HTMLclass:"leave"
    },
node8a5a5a1a9 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégué du Conseil constitutionnel"},
        HTMLid:"8a5a5a1a9",
        HTMLclass:"leave"
    },
node8a5a5a1a10 = {
        parent: node8a5a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fermeture anticipée d'un bureau de vote"},
        HTMLid:"8a5a5a1a10",
        HTMLclass:"leave"
    },
node8a5a5a2 = {
        parent: node8a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépouillement"},
        HTMLid:"8a5a5a2",
    },
node8a5a5a2a1 = {
        parent: node8a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décompte des suffrages"},
        HTMLid:"8a5a5a2a1",
        HTMLclass:"leave"
    },
node8a5a5a2a2 = {
        parent: node8a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validité des bulletins (voir ci-dessus : Bulletins)"},
        HTMLid:"8a5a5a2a2",
    },
node8a5a5a2a3 = {
        parent: node8a5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement des procès-verbaux et de leurs annexes"},
        HTMLid:"8a5a5a2a3",
        HTMLclass:"leave"
    },
node8a5a6 = {
        parent: node8a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux"},
        HTMLid:"8a5a6",
    },
node8a5a6a1 = {
        parent: node8a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence du Conseil constitutionnel"},
        HTMLid:"8a5a6a1",
    },
node8a5a6a1a1 = {
        parent: node8a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de la régularité des textes organisant le référendum"},
        HTMLid:"8a5a6a1a1",
    },
node8a5a6a1a1a1 = {
        parent: node8a5a6a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"8a5a6a1a1a1",
        HTMLclass:"leave"
    },
node8a5a6a1a1a2 = {
        parent: node8a5a6a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exception"},
        HTMLid:"8a5a6a1a1a2",
        HTMLclass:"leave"
    },
node8a5a6a1a1a3 = {
        parent: node8a5a6a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets du contrôle"},
        HTMLid:"8a5a6a1a1a3",
        HTMLclass:"leave"
    },
node8a5a6a1a2 = {
        parent: node8a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du respect des conditions de forme et de procédure"},
        HTMLid:"8a5a6a1a2",
    },
node8a5a6a1a2a1 = {
        parent: node8a5a6a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 11, alinéa 1er"},
        HTMLid:"8a5a6a1a2a1",
        HTMLclass:"leave"
    },
node8a5a6a1a2a2 = {
        parent: node8a5a6a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référendum de l'article 11, alinéa 3"},
        HTMLid:"8a5a6a1a2a2",
        HTMLclass:"leave"
    },
node8a5a6a1a3 = {
        parent: node8a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la sincérité, de la clarté et de la loyauté du référendum"},
        HTMLid:"8a5a6a1a3",
        HTMLclass:"leave"
    },
node8a5a6a1a4 = {
        parent: node8a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions n'entrant pas dans la compétence du Conseil constitutionnel"},
        HTMLid:"8a5a6a1a4",
    },
node8a5a6a1a4a1 = {
        parent: node8a5a6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des comptes de campagne"},
        HTMLid:"8a5a6a1a4a1",
        HTMLclass:"leave"
    },
node8a5a6a1a4a2 = {
        parent: node8a5a6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la constitutionnalité d'une loi dans le cadre de l'article 60 de la Constitution"},
        HTMLid:"8a5a6a1a4a2",
        HTMLclass:"leave"
    },
node8a5a6a1a4a3 = {
        parent: node8a5a6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la constitutionnalité du projet de loi adopté par référendum"},
        HTMLid:"8a5a6a1a4a3",
        HTMLclass:"leave"
    },
node8a5a6a1a4a4 = {
        parent: node8a5a6a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Questions relevant de la compétence de la juridiction administrative"},
        HTMLid:"8a5a6a1a4a4",
        HTMLclass:"leave"
    },
node8a5a6a1a5 = {
        parent: node8a5a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question réservée : examen de la recevabilité sur le fond d'une loi soumise au référendum dans le cadre des attributions de l'article 60 de la Constitution"},
        HTMLid:"8a5a6a1a5",
        HTMLclass:"leave"
    },
node8a5a6a2 = {
        parent: node8a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de procédure"},
        HTMLid:"8a5a6a2",
        HTMLclass:"leave"
    },
node8a5a6a3 = {
        parent: node8a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conclusions et griefs"},
        HTMLid:"8a5a6a3",
    },
node8a5a6a3a1 = {
        parent: node8a5a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recevabilité des conclusions (voir ci-dessus : Étendue de la compétence du Conseil constitutionnel)"},
        HTMLid:"8a5a6a3a1",
    },
node8a5a6a3a2 = {
        parent: node8a5a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Requalification de conclusions"},
        HTMLid:"8a5a6a3a2",
        HTMLclass:"leave"
    },
node8a5a6a3a3 = {
        parent: node8a5a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs inopérants"},
        HTMLid:"8a5a6a3a3",
        HTMLclass:"leave"
    },
node8a5a6a4 = {
        parent: node8a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation de l'incidence des irrégularités"},
        HTMLid:"8a5a6a4",
        HTMLclass:"leave"
    },
tree_config8 = [config,node8,node8a1,node8a1a1,node8a1a1a1,node8a1a1a2,node8a1a1a2a1,node8a1a1a2a1a1,node8a1a1a2a1a1a1,node8a1a1a2a1a1a2,node8a1a1a2a1a1a3,node8a1a1a2a1a1a4,node8a1a1a2a1a1a5,node8a1a1a2a1a2,node8a1a1a2a1a3,node8a1a1a2a1a4,node8a1a1a2a1a5,node8a1a1a2a1a6,node8a1a1a2a1a7,node8a1a1a2a1a8,node8a1a1a2a2,node8a1a1a2a2a1,node8a1a1a2a2a2,node8a1a1a2a2a3,node8a1a1a2a2a4,node8a1a1a2a2a5,node8a1a1a2a3,node8a1a1a2a4,node8a1a1a3,node8a1a1a3a1,node8a1a1a3a1a1,node8a1a1a3a1a2,node8a1a1a3a1a3,node8a1a1a3a2,node8a1a1a3a2a1,node8a1a1a3a2a2,node8a1a1a3a2a3,node8a1a1a3a2a4,node8a1a1a3a2a5,node8a1a1a3a3,node8a1a1a3a3a1,node8a1a1a3a3a2,node8a1a1a4,node8a1a1a4a1,node8a1a1a4a2,node8a1a1a4a3,node8a1a1a5,node8a1a1a6,node8a1a2,node8a1a2a1,node8a1a2a2,node8a1a2a2a1,node8a1a2a2a2,node8a1a3,node8a1a3a1,node8a1a3a2,node8a1a3a3,node8a1a3a4,node8a1a3a5,node8a1a4,node8a1a4a1,node8a1a4a2,node8a1a5,node8a1a5a1,node8a1a5a2,node8a1a5a2a1,node8a1a5a2a2,node8a1a5a2a3,node8a1a5a2a4,node8a1a5a3,node8a1a5a4,node8a1a5a5,node8a1a5a6,node8a2,node8a2a1,node8a2a1a1,node8a2a1a1a1,node8a2a1a1a2,node8a2a1a2,node8a2a1a3,node8a2a1a4,node8a2a1a4a1,node8a2a1a4a2,node8a2a2,node8a2a2a1,node8a2a2a1a1,node8a2a2a2,node8a2a2a2a1,node8a2a2a2a2,node8a2a2a2a3,node8a2a2a3,node8a2a2a4,node8a2a2a4a1,node8a2a2a4a2,node8a2a2a4a3,node8a2a2a4a4,node8a2a2a4a5,node8a2a3,node8a2a3a1,node8a2a3a2,node8a2a4,node8a2a4a1,node8a2a4a2,node8a2a4a3,node8a2a4a3a1,node8a2a4a3a1a1,node8a2a4a3a1a2,node8a2a4a3a1a3,node8a2a4a3a1a4,node8a2a4a3a1a5,node8a2a4a3a1a6,node8a2a4a3a2,node8a2a4a3a3,node8a2a4a3a3a1,node8a2a4a3a3a2,node8a2a4a3a3a3,node8a2a4a4,node8a2a4a4a1,node8a2a4a4a2,node8a2a4a4a3,node8a2a4a5,node8a2a4a6,node8a2a5,node8a2a5a1,node8a2a5a1a1,node8a2a5a1a2,node8a2a5a2,node8a2a5a2a1,node8a2a5a2a2,node8a2a5a3,node8a2a5a3a1,node8a2a5a3a2,node8a2a5a3a3,node8a2a5a3a4,node8a2a5a3a5,node8a2a5a3a6,node8a2a5a3a7,node8a2a5a4,node8a2a5a4a1,node8a2a5a4a2,node8a2a5a4a3,node8a2a5a5,node8a2a6,node8a2a6a1,node8a2a6a1a1,node8a2a6a1a2,node8a2a6a1a3,node8a2a6a2,node8a2a6a2a1,node8a2a6a2a1a1,node8a2a6a2a1a2,node8a2a6a2a2,node8a2a6a2a3,node8a2a6a2a4,node8a3,node8a3a1,node8a3a1a1,node8a3a1a1a1,node8a3a1a1a1a1,node8a3a1a1a1a2,node8a3a1a1a1a3,node8a3a1a1a1a4,node8a3a1a1a1a5,node8a3a1a1a2,node8a3a1a1a2a1,node8a3a1a1a2a2,node8a3a1a1a3,node8a3a1a1a3a1,node8a3a1a1a3a2,node8a3a1a2,node8a3a1a3,node8a3a2,node8a3a2a1,node8a3a2a1a1,node8a3a2a1a2,node8a3a2a1a3,node8a3a2a1a4,node8a3a2a1a5,node8a3a2a1a6,node8a3a2a1a6a1,node8a3a2a1a6a2,node8a3a2a1a6a3,node8a3a2a1a7,node8a3a2a1a8,node8a3a2a1a9,node8a3a2a1a10,node8a3a2a1a10a1,node8a3a2a1a10a2,node8a3a2a1a10a3,node8a3a2a1a11,node8a3a2a1a12,node8a3a2a2,node8a3a2a3,node8a3a2a3a1,node8a3a2a3a1a1,node8a3a2a3a2,node8a3a2a3a3,node8a3a2a3a3a1,node8a3a2a3a3a2,node8a3a2a3a3a3,node8a3a2a3a4,node8a3a2a3a4a1,node8a3a2a3a4a2,node8a3a2a3a5,node8a3a3,node8a3a3a1,node8a3a3a1a1,node8a3a3a1a2,node8a3a3a1a3,node8a3a3a1a4,node8a3a3a1a5,node8a3a3a1a6,node8a3a3a1a7,node8a3a3a1a8,node8a3a3a2,node8a3a3a2a1,node8a3a3a2a2,node8a3a3a2a3,node8a3a3a3,node8a3a3a3a1,node8a3a3a3a2,node8a3a3a3a3,node8a3a3a3a4,node8a3a3a3a5,node8a3a3a4,node8a3a3a5,node8a3a3a5a1,node8a3a3a5a2,node8a3a3a6,node8a3a3a7,node8a3a3a7a1,node8a3a3a7a2,node8a3a3a7a3,node8a3a3a8,node8a3a3a8a1,node8a3a3a8a1a1,node8a3a3a8a1a2,node8a3a3a8a1a3,node8a3a3a8a1a4,node8a3a3a8a2,node8a3a3a9,node8a3a3a9a1,node8a3a3a9a2,node8a3a3a9a3,node8a3a3a9a4,node8a3a3a9a5,node8a3a3a9a6,node8a3a3a10,node8a3a3a11,node8a3a3a11a1,node8a3a3a12,node8a3a3a13,node8a3a3a14,node8a3a3a15,node8a3a3a16,node8a3a3a16a1,node8a3a3a16a2,node8a3a3a16a3,node8a3a3a16a3a1,node8a3a3a16a3a2,node8a3a3a16a3a3,node8a3a3a16a3a4,node8a3a3a16a4,node8a3a3a16a5,node8a3a3a16a5a1,node8a3a3a16a5a2,node8a3a3a17,node8a3a4,node8a3a4a1,node8a3a4a1a1,node8a3a4a1a1a1,node8a3a4a1a1a2,node8a3a4a1a1a3,node8a3a4a1a1a4,node8a3a4a1a1a5,node8a3a4a1a1a6,node8a3a4a1a2,node8a3a4a1a3,node8a3a4a1a3a1,node8a3a4a1a3a2,node8a3a4a1a3a3,node8a3a4a1a3a4,node8a3a4a1a4,node8a3a4a1a4a1,node8a3a4a1a4a2,node8a3a4a1a4a3,node8a3a4a1a5,node8a3a4a1a6,node8a3a4a1a6a1,node8a3a4a1a6a2,node8a3a4a1a6a3,node8a3a4a1a7,node8a3a4a1a8,node8a3a4a1a8a1,node8a3a4a1a8a2,node8a3a4a1a8a3,node8a3a4a1a8a4,node8a3a4a1a8a5,node8a3a4a1a8a6,node8a3a4a1a9,node8a3a4a1a10,node8a3a4a2,node8a3a4a2a1,node8a3a4a2a2,node8a3a4a2a3,node8a3a4a2a4,node8a3a4a2a5,node8a3a4a3,node8a3a4a3a1,node8a3a4a3a2,node8a3a4a3a3,node8a3a4a3a4,node8a3a4a3a5,node8a3a4a3a6,node8a3a4a3a7,node8a3a5,node8a3a5a1,node8a3a5a1a1,node8a3a5a1a2,node8a3a5a1a2a1,node8a3a5a1a2a2,node8a3a5a1a2a3,node8a3a5a1a3,node8a3a5a1a4,node8a3a5a2,node8a3a5a2a1,node8a3a5a2a1a1,node8a3a5a2a1a2,node8a3a5a2a1a3,node8a3a5a2a2,node8a3a5a2a2a1,node8a3a5a2a2a2,node8a3a5a2a3,node8a3a5a2a3a1,node8a3a5a2a4,node8a3a5a2a4a1,node8a3a5a2a4a2,node8a3a5a2a4a3,node8a3a5a2a4a4,node8a3a5a2a4a5,node8a3a5a2a4a6,node8a3a5a3,node8a3a5a3a1,node8a3a5a3a2,node8a3a5a3a3,node8a3a5a3a4,node8a3a5a3a5,node8a3a5a3a6,node8a3a5a3a7,node8a3a5a3a8,node8a3a5a3a9,node8a3a5a4,node8a3a5a4a1,node8a3a5a4a2,node8a3a5a4a2a1,node8a3a5a4a3,node8a3a5a4a4,node8a3a5a4a4a1,node8a3a5a4a4a2,node8a3a5a4a4a3,node8a3a5a4a4a4,node8a3a5a4a5,node8a3a5a4a5a1,node8a3a5a4a5a2,node8a3a5a4a5a3,node8a3a5a4a5a4,node8a3a5a4a5a5,node8a3a5a4a6,node8a3a5a5,node8a3a5a5a1,node8a3a5a5a2,node8a3a5a5a2a1,node8a3a5a5a2a2,node8a3a5a5a2a3,node8a3a5a5a2a3a1,node8a3a5a5a2a4,node8a3a5a5a2a5,node8a3a5a5a2a6,node8a3a5a5a2a7,node8a3a5a5a2a8,node8a3a5a5a2a9,node8a3a5a5a2a10,node8a3a5a5a3,node8a3a5a5a3a1,node8a3a5a5a3a2,node8a3a5a5a4,node8a3a5a5a4a1,node8a3a5a5a5,node8a3a5a5a6,node8a3a5a5a7,node8a3a5a5a8,node8a3a5a5a8a1,node8a3a5a5a8a2,node8a3a5a5a8a3,node8a3a5a6,node8a3a5a7,node8a3a5a7a1,node8a3a5a7a2,node8a3a5a7a3,node8a3a5a7a4,node8a3a5a8,node8a3a5a9,node8a3a5a9a1,node8a3a5a9a2,node8a3a5a9a3,node8a3a5a9a3a1,node8a3a5a9a3a2,node8a3a5a9a3a3,node8a3a5a9a4,node8a3a5a9a5,node8a3a5a10,node8a3a5a11,node8a3a5a11a1,node8a3a5a11a2,node8a3a6,node8a3a6a1,node8a3a6a1a1,node8a3a6a1a2,node8a3a6a1a3,node8a3a6a2,node8a3a6a2a1,node8a3a6a2a2,node8a3a6a2a2a1,node8a3a6a3,node8a3a6a4,node8a3a6a4a1,node8a3a6a4a2,node8a3a6a4a3,node8a3a6a4a4,node8a3a6a4a5,node8a3a6a4a6,node8a3a6a4a6a1,node8a3a6a4a6a2,node8a3a6a4a7,node8a3a6a4a8,node8a3a6a4a8a1,node8a3a6a4a9,node8a3a6a4a9a1,node8a3a6a4a9a2,node8a3a6a4a9a3,node8a3a6a4a10,node8a3a6a4a10a1,node8a3a6a4a10a2,node8a3a6a4a10a3,node8a3a6a4a10a4,node8a3a6a4a10a5,node8a3a6a4a10a6,node8a3a6a4a10a7,node8a3a6a4a11,node8a3a6a4a12,node8a3a6a4a12a1,node8a3a6a4a12a2,node8a3a6a4a12a3,node8a3a6a4a13,node8a3a6a5,node8a3a6a5a1,node8a3a6a5a1a1,node8a3a6a5a1a2,node8a3a6a5a1a3,node8a3a6a5a1a4,node8a3a6a5a1a5,node8a3a6a5a1a6,node8a3a6a5a2,node8a3a6a5a3,node8a3a6a5a4,node8a3a6a5a4a1,node8a3a6a5a4a2,node8a3a6a5a4a3,node8a3a6a6,node8a3a6a6a1,node8a3a6a6a2,node8a3a6a6a3,node8a3a6a6a3a1,node8a3a6a6a3a2,node8a3a6a6a4,node8a3a6a6a4a1,node8a3a6a6a4a2,node8a3a6a6a5,node8a3a6a6a6,node8a3a6a6a6a1,node8a3a6a6a6a2,node8a3a6a6a7,node8a3a6a6a8,node8a3a6a6a9,node8a3a6a7,node8a3a6a8,node8a3a6a8a1,node8a3a6a8a2,node8a3a6a8a3,node8a3a6a8a3a1,node8a3a6a8a3a2,node8a3a6a8a3a3,node8a3a6a8a3a4,node8a3a6a8a3a5,node8a3a6a8a3a6,node8a3a6a8a3a7,node8a3a6a8a3a8,node8a3a6a8a3a9,node8a3a6a8a4,node8a3a6a8a5,node8a3a6a8a5a1,node8a3a6a8a5a2,node8a3a6a8a6,node8a3a6a8a7,node8a3a6a8a7a1,node8a3a6a8a7a2,node8a3a6a8a8,node8a3a6a8a9,node8a3a6a9,node8a3a6a9a1,node8a3a6a9a2,node8a3a6a9a3,node8a3a6a9a4,node8a3a6a9a5,node8a3a6a10,node8a3a6a11,node8a3a7,node8a3a7a1,node8a3a7a1a1,node8a3a7a1a2,node8a3a7a1a2a1,node8a3a7a1a2a2,node8a3a7a1a2a3,node8a3a7a1a2a4,node8a3a7a1a3,node8a3a7a1a4,node8a3a7a1a5,node8a3a7a2,node8a3a7a2a1,node8a3a7a2a2,node8a3a7a2a3,node8a3a7a2a4,node8a3a7a2a5,node8a3a7a2a6,node8a3a7a2a7,node8a3a7a2a8,node8a3a7a2a9,node8a3a7a2a10,node8a3a7a2a11,node8a3a7a2a12,node8a3a7a2a13,node8a3a7a2a14,node8a3a7a2a15,node8a3a7a2a16,node8a3a7a2a17,node8a3a8,node8a3a8a1,node8a3a8a1a1,node8a3a8a1a2,node8a3a8a1a3,node8a3a8a1a4,node8a3a8a1a4a1,node8a3a8a1a4a2,node8a3a8a1a4a3,node8a3a8a1a5,node8a3a8a1a5a1,node8a3a8a1a5a2,node8a3a8a1a5a3,node8a3a8a1a5a4,node8a3a8a1a5a5,node8a3a8a1a5a6,node8a3a8a1a5a7,node8a3a8a1a6,node8a3a8a1a6a1,node8a3a8a1a6a2,node8a3a8a1a6a3,node8a3a8a1a6a4,node8a3a8a1a6a5,node8a3a8a1a6a6,node8a3a8a1a6a7,node8a3a8a1a6a8,node8a3a8a1a6a9,node8a3a8a1a6a10,node8a3a8a1a6a11,node8a3a8a1a6a12,node8a3a8a1a6a13,node8a3a8a1a7,node8a3a8a1a7a1,node8a3a8a1a7a2,node8a3a8a1a7a3,node8a3a8a1a7a4,node8a3a9,node8a3a9a1,node8a3a9a2,node8a3a9a3,node8a3a9a3a1,node8a3a9a3a2,node8a3a9a4,node8a3a9a5,node8a3a9a6,node8a3a9a7,node8a3a9a8,node8a3a9a9,node8a3a9a10,node8a3a9a11,node8a3a9a12,node8a3a10,node8a3a10a1,node8a3a10a1a1,node8a3a10a1a2,node8a3a10a1a3,node8a3a10a1a4,node8a3a10a2,node8a3a10a2a1,node8a3a10a2a2,node8a3a10a2a3,node8a3a10a2a4,node8a3a10a2a5,node8a3a10a3,node8a3a10a3a1,node8a3a10a3a2,node8a3a10a3a3,node8a3a10a3a4,node8a3a10a3a5,node8a3a10a3a6,node8a3a10a3a7,node8a3a10a3a8,node8a3a10a3a9,node8a3a10a3a10,node8a3a11,node8a3a11a1,node8a3a11a1a1,node8a3a11a1a1a1,node8a3a11a1a1a2,node8a3a11a1a1a3,node8a3a11a1a1a4,node8a3a11a1a2,node8a3a11a1a2a1,node8a3a11a1a2a2,node8a3a11a1a2a3,node8a3a11a1a2a4,node8a3a11a1a2a5,node8a3a11a1a3,node8a3a11a1a3a1,node8a3a11a1a3a2,node8a3a11a1a4,node8a3a11a1a4a1,node8a3a11a1a4a2,node8a3a11a1a4a3,node8a3a11a1a4a4,node8a3a11a1a5,node8a3a11a1a5a1,node8a3a11a1a5a2,node8a3a11a1a5a3,node8a3a11a2,node8a3a11a2a1,node8a3a11a2a2,node8a3a11a3,node8a3a11a3a1,node8a3a11a3a1a1,node8a3a11a3a1a2,node8a3a11a3a1a3,node8a3a11a3a1a4,node8a3a11a3a1a5,node8a3a11a3a2,node8a3a11a3a2a1,node8a3a11a3a2a2,node8a3a11a3a3,node8a3a11a3a3a1,node8a3a11a3a3a2,node8a3a11a3a3a3,node8a3a11a3a4,node8a3a11a3a4a1,node8a3a11a3a4a2,node8a3a11a3a4a3,node8a3a11a3a4a4,node8a3a11a3a5,node8a3a11a4,node8a3a12,node8a3a12a1,node8a3a13,node8a3a14,node8a4,node8a4a1,node8a4a1a1,node8a4a1a1a1,node8a4a1a1a2,node8a4a1a1a3,node8a4a1a1a4,node8a4a1a1a5,node8a4a1a2,node8a4a2,node8a4a2a1,node8a4a2a1a1,node8a4a2a1a2,node8a4a2a1a3,node8a4a2a1a4,node8a4a2a1a5,node8a4a2a1a6,node8a4a2a1a7,node8a4a2a1a8,node8a4a2a1a9,node8a4a2a2,node8a4a2a2a1,node8a4a2a2a2,node8a4a2a2a2a1,node8a4a2a2a2a2,node8a4a2a3,node8a4a2a3a1,node8a4a2a3a2,node8a4a2a3a3,node8a4a2a4,node8a4a2a5,node8a4a3,node8a4a3a1,node8a4a3a1a1,node8a4a3a1a2,node8a4a3a1a3,node8a4a3a2,node8a4a3a2a1,node8a4a3a2a2,node8a4a3a2a3,node8a4a3a3,node8a4a3a3a1,node8a4a3a3a2,node8a4a3a3a3,node8a4a3a3a4,node8a4a3a4,node8a4a3a5,node8a4a3a5a1,node8a4a3a5a2,node8a4a3a6,node8a4a3a7,node8a4a3a8,node8a4a3a9,node8a4a3a10,node8a4a3a11,node8a4a3a11a1,node8a4a3a11a2,node8a4a3a11a3,node8a4a3a11a4,node8a4a3a12,node8a4a3a13,node8a4a3a14,node8a4a3a15,node8a4a4,node8a4a5,node8a4a5a1,node8a4a5a1a1,node8a4a5a1a2,node8a4a5a1a3,node8a4a5a1a4,node8a4a5a1a5,node8a4a5a1a6,node8a4a5a2,node8a4a5a2a1,node8a4a5a2a2,node8a4a5a3,node8a4a5a3a1,node8a4a5a3a1a1,node8a4a5a3a1a2,node8a4a5a3a1a3,node8a4a5a3a1a4,node8a4a5a3a2,node8a4a5a3a2a1,node8a4a5a3a2a2,node8a4a5a3a2a3,node8a4a5a3a2a4,node8a4a5a3a3,node8a4a5a3a3a1,node8a4a5a3a3a2,node8a4a5a3a3a3,node8a4a6,node8a4a6a1,node8a4a6a1a1,node8a4a6a1a2,node8a4a6a2,node8a4a6a2a1,node8a4a6a2a2,node8a4a6a2a3,node8a4a6a3,node8a4a6a3a1,node8a4a6a3a2,node8a4a6a3a3,node8a4a6a3a4,node8a4a6a3a5,node8a4a6a3a5a1,node8a4a6a3a5a2,node8a4a6a3a6,node8a4a6a3a7,node8a4a6a3a7a1,node8a4a6a3a8,node8a4a6a3a8a1,node8a4a6a3a8a2,node8a4a6a3a9,node8a4a6a3a9a1,node8a4a6a3a9a2,node8a4a6a3a9a3,node8a4a6a3a10,node8a4a6a3a11,node8a4a6a4,node8a4a6a5,node8a4a6a5a1,node8a4a6a5a2,node8a4a6a5a3,node8a4a6a6,node8a4a6a6a1,node8a4a6a6a2,node8a4a6a7,node8a4a6a8,node8a4a7,node8a4a7a1,node8a4a7a1a1,node8a4a7a1a2,node8a4a7a1a3,node8a4a7a1a3a1,node8a4a7a1a3a2,node8a4a7a1a4,node8a4a7a1a5,node8a4a7a1a6,node8a4a7a1a6a1,node8a4a7a1a6a2,node8a4a7a1a6a3,node8a4a7a1a6a4,node8a4a7a1a6a5,node8a4a7a1a6a6,node8a4a8,node8a4a8a1,node8a4a8a1a1,node8a4a8a1a2,node8a4a8a1a3,node8a4a8a2,node8a4a8a3,node8a4a8a4,node8a4a8a5,node8a4a8a5a1,node8a4a8a5a2,node8a4a8a5a3,node8a4a8a5a4,node8a4a8a6,node8a4a8a6a1,node8a4a8a6a2,node8a4a8a6a3,node8a4a8a7,node8a4a8a7a1,node8a4a8a7a2,node8a4a8a7a3,node8a4a8a7a4,node8a4a8a7a5,node8a4a8a7a6,node8a4a8a7a7,node8a4a9,node8a4a9a1,node8a4a9a2,node8a4a9a3,node8a4a9a4,node8a4a9a5,node8a4a9a6,node8a4a9a7,node8a4a10,node8a4a10a1,node8a4a10a1a1,node8a4a10a1a2,node8a4a10a2,node8a4a10a2a1,node8a4a10a2a2,node8a4a10a2a3,node8a4a10a3,node8a4a10a3a1,node8a4a10a3a2,node8a4a10a3a3,node8a4a10a3a4,node8a4a11,node8a4a11a1,node8a4a11a1a1,node8a4a11a1a2,node8a4a11a1a3,node8a4a11a1a4,node8a4a11a1a5,node8a4a11a1a6,node8a4a11a2,node8a4a11a2a1,node8a4a11a2a2,node8a4a11a3,node8a4a11a4,node8a4a12,node8a4a12a1,node8a4a13,node8a4a14,node8a4a14a1,node8a4a14a1a1,node8a4a14a1a2,node8a4a14a1a3,node8a4a14a2,node8a4a14a2a1,node8a4a14a2a1a1,node8a4a14a2a1a2,node8a4a14a2a1a3,node8a4a14a2a2,node8a4a14a2a3,node8a4a14a2a4,node8a4a14a2a4a1,node8a4a14a3,node8a4a14a4,node8a4a14a4a1,node8a4a14a4a2,node8a4a14a4a3,node8a4a14a4a4,node8a4a14a4a5,node8a4a14a4a5a1,node8a4a14a4a5a2,node8a4a14a4a5a3,node8a4a14a4a5a4,node8a4a14a4a5a5,node8a4a14a4a6,node8a4a14a5,node8a4a14a5a1,node8a4a14a5a2,node8a4a14a5a3,node8a4a14a5a3a1,node8a4a14a5a3a2,node8a4a14a5a4,node8a4a14a5a4a1,node8a4a14a5a4a2,node8a4a14a5a5,node8a4a14a5a6,node8a4a14a5a7,node8a4a14a5a8,node8a4a14a6,node8a4a14a7,node8a4a14a8,node8a4a14a9,node8a4a14a9a1,node8a4a14a9a2,node8a4a14a9a3,node8a4a14a9a4,node8a4a14a9a5,node8a4a14a10,node8a4a14a11,node8a5,node8a5a1,node8a5a1a1,node8a5a1a1a1,node8a5a1a1a2,node8a5a1a1a3,node8a5a1a1a4,node8a5a1a2,node8a5a1a3,node8a5a1a3a1,node8a5a1a3a2,node8a5a1a4,node8a5a2,node8a5a2a1,node8a5a2a2,node8a5a2a2a1,node8a5a2a2a2,node8a5a2a2a3,node8a5a2a2a4,node8a5a2a2a5,node8a5a3,node8a5a3a1,node8a5a3a2,node8a5a3a3,node8a5a3a4,node8a5a4,node8a5a4a1,node8a5a4a2,node8a5a4a3,node8a5a4a4,node8a5a5,node8a5a5a1,node8a5a5a1a1,node8a5a5a1a2,node8a5a5a1a3,node8a5a5a1a4,node8a5a5a1a5,node8a5a5a1a6,node8a5a5a1a7,node8a5a5a1a8,node8a5a5a1a9,node8a5a5a1a10,node8a5a5a2,node8a5a5a2a1,node8a5a5a2a2,node8a5a5a2a3,node8a5a6,node8a5a6a1,node8a5a6a1a1,node8a5a6a1a1a1,node8a5a6a1a1a2,node8a5a6a1a1a3,node8a5a6a1a2,node8a5a6a1a2a1,node8a5a6a1a2a2,node8a5a6a1a3,node8a5a6a1a4,node8a5a6a1a4a1,node8a5a6a1a4a2,node8a5a6a1a4a3,node8a5a6a1a4a4,node8a5a6a1a5,node8a5a6a2,node8a5a6a3,node8a5a6a3a1,node8a5a6a3a2,node8a5a6a3a3,node8a5a6a4];

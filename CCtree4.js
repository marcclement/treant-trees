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
node4 = {
        childrenDropLevel: 1,
        text:{name: "DROITS ET LIBERTÉS"},
        HTMLid:"4",
    },
node4a1 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "NOTION DE  DROITS ET LIBERTÉS QUE LA CONSTITUTION GARANTIT  (art. 61-1)"},
        HTMLid:"4a1",
    },
node4a1a1 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration des droits de l'homme et du citoyen de 1789"},
        HTMLid:"4a1a1",
    },
node4a1a1a1 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1er"},
        HTMLid:"4a1a1a1",
        HTMLclass:"leave"
    },
node4a1a1a2 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 2"},
        HTMLid:"4a1a1a2",
        HTMLclass:"leave"
    },
node4a1a1a3 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 4"},
        HTMLid:"4a1a1a3",
        HTMLclass:"leave"
    },
node4a1a1a4 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 6"},
        HTMLid:"4a1a1a4",
        HTMLclass:"leave"
    },
node4a1a1a5 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 7"},
        HTMLid:"4a1a1a5",
        HTMLclass:"leave"
    },
node4a1a1a6 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 8"},
        HTMLid:"4a1a1a6",
        HTMLclass:"leave"
    },
node4a1a1a7 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "article 9"},
        HTMLid:"4a1a1a7",
        HTMLclass:"leave"
    },
node4a1a1a8 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 10"},
        HTMLid:"4a1a1a8",
        HTMLclass:"leave"
    },
node4a1a1a9 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 11"},
        HTMLid:"4a1a1a9",
        HTMLclass:"leave"
    },
node4a1a1a10 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 13"},
        HTMLid:"4a1a1a10",
        HTMLclass:"leave"
    },
node4a1a1a11 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 15"},
        HTMLid:"4a1a1a11",
        HTMLclass:"leave"
    },
node4a1a1a12 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 16"},
        HTMLid:"4a1a1a12",
        HTMLclass:"leave"
    },
node4a1a1a13 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 17"},
        HTMLid:"4a1a1a13",
        HTMLclass:"leave"
    },
node4a1a1a14 = {
        parent: node4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 12"},
        HTMLid:"4a1a1a14",
        HTMLclass:"leave"
    },
node4a1a2 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préambule de 1946"},
        HTMLid:"4a1a2",
    },
node4a1a2a1 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dignité de la personne"},
        HTMLid:"4a1a2a1",
        HTMLclass:"leave"
    },
node4a1a2a2 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité entre les sexes (alinéa 3)"},
        HTMLid:"4a1a2a2",
        HTMLclass:"leave"
    },
node4a1a2a3 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à l'emploi (alinéa 5)"},
        HTMLid:"4a1a2a3",
        HTMLclass:"leave"
    },
node4a1a2a4 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté syndicale (alinéa 6)"},
        HTMLid:"4a1a2a4",
        HTMLclass:"leave"
    },
node4a1a2a5 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de grève (alinéa 7)"},
        HTMLid:"4a1a2a5",
        HTMLclass:"leave"
    },
node4a1a2a6 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de participation des travailleurs à la détermination collective des conditions de travail (alinéa 8)"},
        HTMLid:"4a1a2a6",
        HTMLclass:"leave"
    },
node4a1a2a7 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de participation des travailleurs à la gestion des entreprises (alinéa 8)"},
        HTMLid:"4a1a2a7",
        HTMLclass:"leave"
    },
node4a1a2a8 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de mener une vie familiale normale (alinéa 10)"},
        HTMLid:"4a1a2a8",
        HTMLclass:"leave"
    },
node4a1a2a9 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la protection sociale (alinéa 11)"},
        HTMLid:"4a1a2a9",
        HTMLclass:"leave"
    },
node4a1a2a10 = {
        parent: node4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la protection de la santé (alinéa 11)"},
        HTMLid:"4a1a2a10",
        HTMLclass:"leave"
    },
node4a1a3 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes fondamentaux reconnus par les lois de la République"},
        HTMLid:"4a1a3",
    },
node4a1a3a1 = {
        parent: node4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'association"},
        HTMLid:"4a1a3a1",
        HTMLclass:"leave"
    },
node4a1a4 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution du 4 octobre 1958"},
        HTMLid:"4a1a4",
    },
node4a1a4a1 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1er"},
        HTMLid:"4a1a4a1",
        HTMLclass:"leave"
    },
node4a1a4a2 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 4"},
        HTMLid:"4a1a4a2",
        HTMLclass:"leave"
    },
node4a1a4a3 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 34"},
        HTMLid:"4a1a4a3",
        HTMLclass:"leave"
    },
node4a1a4a4 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 64"},
        HTMLid:"4a1a4a4",
        HTMLclass:"leave"
    },
node4a1a4a5 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 66"},
        HTMLid:"4a1a4a5",
        HTMLclass:"leave"
    },
node4a1a4a6 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72"},
        HTMLid:"4a1a4a6",
        HTMLclass:"leave"
    },
node4a1a4a7 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 72-2"},
        HTMLid:"4a1a4a7",
        HTMLclass:"leave"
    },
node4a1a4a8 = {
        parent: node4a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 75-1"},
        HTMLid:"4a1a4a8",
        HTMLclass:"leave"
    },
node4a1a5 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Charte de l'environnement"},
        HTMLid:"4a1a5",
    },
node4a1a5a1 = {
        parent: node4a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1 et 2"},
        HTMLid:"4a1a5a1",
        HTMLclass:"leave"
    },
node4a1a5a2 = {
        parent: node4a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 3"},
        HTMLid:"4a1a5a2",
        HTMLclass:"leave"
    },
node4a1a5a3 = {
        parent: node4a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 4"},
        HTMLid:"4a1a5a3",
        HTMLclass:"leave"
    },
node4a1a5a4 = {
        parent: node4a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 7"},
        HTMLid:"4a1a5a4",
        HTMLclass:"leave"
    },
node4a1a6 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectifs de valeur constitutionnelle"},
        HTMLid:"4a1a6",
        HTMLclass:"leave"
    },
node4a1a6a1 = {
        parent: node4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pluralisme des courants de pensées et d'opinions"},
        HTMLid:"4a1a6a1",
        HTMLclass:"leave"
    },
node4a1a6a2 = {
        parent: node4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accessibilité et intelligibilité de la loi invoquée avec une autre norme constitutionnelle"},
        HTMLid:"4a1a6a2",
        HTMLclass:"leave"
    },
node4a1a7 = {
        parent: node4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Normes de référence ou éléments non pris en considération"},
        HTMLid:"4a1a7",
    },
node4a1a7a1 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration des droits de l'homme et du citoyen de 1789"},
        HTMLid:"4a1a7a1",
        HTMLclass:"leave"
    },
node4a1a7a2 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préambule de 1946"},
        HTMLid:"4a1a7a2",
        HTMLclass:"leave"
    },
node4a1a7a3 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution du 4 octobre 1958"},
        HTMLid:"4a1a7a3",
        HTMLclass:"leave"
    },
node4a1a7a4 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Charte de l'environnement"},
        HTMLid:"4a1a7a4",
        HTMLclass:"leave"
    },
node4a1a7a5 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectifs de valeur constitutionnelle"},
        HTMLid:"4a1a7a5",
        HTMLclass:"leave"
    },
node4a1a7a6 = {
        parent: node4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"4a1a7a6",
        HTMLclass:"leave"
    },
node4a2 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES GÉNÉRAUX APPLICABLES AUX DROITS ET LIBERTÉS CONSTITUTIONNELLEMENT GARANTIS"},
        HTMLid:"4a2",
    },
node4a2a1 = {
        parent: node4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application des droits et libertés"},
        HTMLid:"4a2a1",
    },
node4a2a1a1 = {
        parent: node4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application dans l'espace"},
        HTMLid:"4a2a1a1",
    },
node4a2a1a1a1 = {
        parent: node4a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Libre administration des collectivités locales"},
        HTMLid:"4a2a1a1a1",
        HTMLclass:"leave"
    },
node4a2a1a1a2 = {
        parent: node4a2a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étrangers"},
        HTMLid:"4a2a1a1a2",
        HTMLclass:"leave"
    },
node4a2a1a2 = {
        parent: node4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application dans le temps"},
        HTMLid:"4a2a1a2",
    },
node4a2a1a2a1 = {
        parent: node4a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois d'habilitation"},
        HTMLid:"4a2a1a2a1",
        HTMLclass:"leave"
    },
node4a2a1a2a2 = {
        parent: node4a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de la loi nouvelle aux situations existantes"},
        HTMLid:"4a2a1a2a2",
        HTMLclass:"leave"
    },
node4a2a2 = {
        parent: node4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garantie des droits"},
        HTMLid:"4a2a2",
    },
node4a2a2a1 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de la défense"},
        HTMLid:"4a2a2a1",
        HTMLclass:"leave"
    },
node4a2a2a2 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du contradictoire (hors procédures juridictionnelles)"},
        HTMLid:"4a2a2a2",
        HTMLclass:"leave"
    },
node4a2a2a3 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au recours"},
        HTMLid:"4a2a2a3",
    },
node4a2a2a3a1 = {
        parent: node4a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a2a2a3a1",
        HTMLclass:"leave"
    },
node4a2a2a3a2 = {
        parent: node4a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure administrative"},
        HTMLid:"4a2a2a3a2",
        HTMLclass:"leave"
    },
node4a2a2a3a3 = {
        parent: node4a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure civile"},
        HTMLid:"4a2a2a3a3",
        HTMLclass:"leave"
    },
node4a2a2a3a4 = {
        parent: node4a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure fiscale"},
        HTMLid:"4a2a2a3a4",
        HTMLclass:"leave"
    },
node4a2a2a3a5 = {
        parent: node4a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure pénale"},
        HTMLid:"4a2a2a3a5",
        HTMLclass:"leave"
    },
node4a2a2a4 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sécurité juridique"},
        HTMLid:"4a2a2a4",
    },
node4a2a2a4a1 = {
        parent: node4a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Atteinte à un acte ou à une situation légalement acquise"},
        HTMLid:"4a2a2a4a1",
        HTMLclass:"leave"
    },
node4a2a2a4a1a1 = {
        parent: node4a2a2a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise en cause des effets qui peuvent légitimement être attendus"},
        HTMLid:"4a2a2a4a1a1",
        HTMLclass:"leave"
    },
node4a2a2a4a2 = {
        parent: node4a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autre mesure rétroactive"},
        HTMLid:"4a2a2a4a2",
        HTMLclass:"leave"
    },
node4a2a2a4a2a1 = {
        parent: node4a2a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de la rétroactivité"},
        HTMLid:"4a2a2a4a2a1",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2 = {
        parent: node4a2a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validation législative"},
        HTMLid:"4a2a2a4a2a2",
    },
node4a2a2a4a2a2a1 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"4a2a2a4a2a2a1",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a2 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motif d'intérêt général - Principe"},
        HTMLid:"4a2a2a4a2a2a2",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a3 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motif d'intérêt général suffisant"},
        HTMLid:"4a2a2a4a2a2a3",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a4 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motif impérieux d'intérêt général"},
        HTMLid:"4a2a2a4a2a2a4",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a5 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de motif d'intérêt général suffisant"},
        HTMLid:"4a2a2a4a2a2a5",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a6 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de méconnaissance d'un principe de valeur constitutionnelle"},
        HTMLid:"4a2a2a4a2a2a6",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a7 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée de la validation"},
        HTMLid:"4a2a2a4a2a2a7",
        HTMLclass:"leave"
    },
node4a2a2a4a2a2a8 = {
        parent: node4a2a2a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de motif impérieux d'intérêt général"},
        HTMLid:"4a2a2a4a2a2a8",
        HTMLclass:"leave"
    },
node4a2a2a4a3 = {
        parent: node4a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de la loi dans le temps"},
        HTMLid:"4a2a2a4a3",
        HTMLclass:"leave"
    },
node4a2a2a4a4 = {
        parent: node4a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Stabilité des normes juridiques"},
        HTMLid:"4a2a2a4a4",
        HTMLclass:"leave"
    },
node4a2a2a5 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut civil de droit local"},
        HTMLid:"4a2a2a5",
        HTMLclass:"leave"
    },
node4a2a2a6 = {
        parent: node4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"4a2a2a6",
        HTMLclass:"leave"
    },
node4a2a3 = {
        parent: node4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté et responsabilité"},
        HTMLid:"4a2a3",
    },
node4a2a3a1 = {
        parent: node4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation du principe"},
        HTMLid:"4a2a3a1",
        HTMLclass:"leave"
    },
node4a2a3a2 = {
        parent: node4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a2a3a2",
        HTMLclass:"leave"
    },
node4a3 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DIGNITÉ DE LA PERSONNE HUMAINE"},
        HTMLid:"4a3",
    },
node4a3a1 = {
        parent: node4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a3a1",
        HTMLclass:"leave"
    },
node4a3a2 = {
        parent: node4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a3a2",
        HTMLclass:"leave"
    },
node4a3a2a1 = {
        parent: node4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des étrangers"},
        HTMLid:"4a3a2a1",
        HTMLclass:"leave"
    },
node4a3a2a2 = {
        parent: node4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interruption volontaire de grossesse"},
        HTMLid:"4a3a2a2",
        HTMLclass:"leave"
    },
node4a3a2a3 = {
        parent: node4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bioéthique et génétique"},
        HTMLid:"4a3a2a3",
        HTMLclass:"leave"
    },
node4a3a2a4 = {
        parent: node4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Privation de liberté"},
        HTMLid:"4a3a2a4",
        HTMLclass:"leave"
    },
node4a3a2a5 = {
        parent: node4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Arrêt des traitement de maintien en vie"},
        HTMLid:"4a3a2a5",
        HTMLclass:"leave"
    },
node4a4 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT À LA VIE ET À L'INTÉGRITÉ PHYSIQUE, PROTECTION DE LA SANTÉ (Pour la protection de la santé publique, voir ci-dessous Autres droits et principes sociaux)"},
        HTMLid:"4a4",
    },
node4a4a1 = {
        parent: node4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interruption volontaire de grossesse"},
        HTMLid:"4a4a1",
        HTMLclass:"leave"
    },
node4a4a2 = {
        parent: node4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Anonymat du don"},
        HTMLid:"4a4a2",
        HTMLclass:"leave"
    },
node4a4a3 = {
        parent: node4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvement"},
        HTMLid:"4a4a3",
    },
node4a4a3a1 = {
        parent: node4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvement de sang"},
        HTMLid:"4a4a3a1",
        HTMLclass:"leave"
    },
node4a4a3a2 = {
        parent: node4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvements externes"},
        HTMLid:"4a4a3a2",
        HTMLclass:"leave"
    },
node4a4a3a3 = {
        parent: node4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvement de cellules"},
        HTMLid:"4a4a3a3",
        HTMLclass:"leave"
    },
node4a4a3a4 = {
        parent: node4a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consentement aux soins et droit de refuser tout traitement"},
        HTMLid:"4a4a3a4",
        HTMLclass:"leave"
    },
node4a4a4 = {
        parent: node4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accouchement sous X"},
        HTMLid:"4a4a4",
        HTMLclass:"leave"
    },
node4a4a5 = {
        parent: node4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Arrêt des traitements de maintien en vie"},
        HTMLid:"4a4a5",
        HTMLclass:"leave"
    },
node4a5 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT AU RESPECT DE LA VIE PRIVÉE (voir également ci-dessous Droits des étrangers et droit d'asile, Liberté individuelle et Liberté personnelle)"},
        HTMLid:"4a5",
        HTMLclass:"leave"
    },
node4a5a1 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de sa valeur constitutionnelle"},
        HTMLid:"4a5a1",
        HTMLclass:"leave"
    },
node4a5a2 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traitements de données à caractère personnel (voir également Titre 15 Autorités indépendantes)"},
        HTMLid:"4a5a2",
        HTMLclass:"leave"
    },
node4a5a2a1 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers de police et de justice"},
        HTMLid:"4a5a2a1",
    },
node4a5a2a1a1 = {
        parent: node4a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers de la police et de la Gendarmerie"},
        HTMLid:"4a5a2a1a1",
        HTMLclass:"leave"
    },
node4a5a2a1a2 = {
        parent: node4a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichier judiciaire automatisé des auteurs d'infractions sexuelles"},
        HTMLid:"4a5a2a1a2",
        HTMLclass:"leave"
    },
node4a5a2a1a3 = {
        parent: node4a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Casier judiciaire"},
        HTMLid:"4a5a2a1a3",
        HTMLclass:"leave"
    },
node4a5a2a1a4 = {
        parent: node4a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichier national automatisé des empreintes génétiques (FNAEG)"},
        HTMLid:"4a5a2a1a4",
        HTMLclass:"leave"
    },
node4a5a2a1a5 = {
        parent: node4a5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichier des titres d'identité"},
        HTMLid:"4a5a2a1a5",
        HTMLclass:"leave"
    },
node4a5a2a2 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers économiques et sociaux"},
        HTMLid:"4a5a2a2",
        HTMLclass:"leave"
    },
node4a5a2a3 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers électoraux"},
        HTMLid:"4a5a2a3",
        HTMLclass:"leave"
    },
node4a5a2a4 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fichiers privés d'infractions"},
        HTMLid:"4a5a2a4",
        HTMLclass:"leave"
    },
node4a5a2a5 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"4a5a2a5",
        HTMLclass:"leave"
    },
node4a5a2a6 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des étrangers (voir également ci-dessous Droit des étrangers et droit d'asile)"},
        HTMLid:"4a5a2a6",
        HTMLclass:"leave"
    },
node4a5a2a7 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail"},
        HTMLid:"4a5a2a7",
        HTMLclass:"leave"
    },
node4a5a2a8 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des données médicales"},
        HTMLid:"4a5a2a8",
        HTMLclass:"leave"
    },
node4a5a2a9 = {
        parent: node4a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Utilisation du numéro d'inscription au répertoire national d'identification des personnes physiques"},
        HTMLid:"4a5a2a9",
        HTMLclass:"leave"
    },
node4a5a3 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inviolabilité du domicile (voir également ci-dessous Liberté individuelle)"},
        HTMLid:"4a5a3",
        HTMLclass:"leave"
    },
node4a5a4 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interceptions de correspondances"},
        HTMLid:"4a5a4",
        HTMLclass:"leave"
    },
node4a5a5 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Listes électorales"},
        HTMLid:"4a5a5",
        HTMLclass:"leave"
    },
node4a5a6 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Géolocalisation"},
        HTMLid:"4a5a6",
        HTMLclass:"leave"
    },
node4a5a7 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vidéosurveillance, sonorisations, fixations d'images, captation et saisie de données informatiques"},
        HTMLid:"4a5a7",
        HTMLclass:"leave"
    },
node4a5a8 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situation des étrangers (voir également ci-dessous Droit des étrangers et droit d'asile)"},
        HTMLid:"4a5a8",
        HTMLclass:"leave"
    },
node4a5a9 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secrets protégés"},
        HTMLid:"4a5a9",
    },
node4a5a9a1 = {
        parent: node4a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret fiscal"},
        HTMLid:"4a5a9a1",
        HTMLclass:"leave"
    },
node4a5a9a2 = {
        parent: node4a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret professionnel"},
        HTMLid:"4a5a9a2",
        HTMLclass:"leave"
    },
node4a5a9a3 = {
        parent: node4a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret médical (voir également ci-dessus Traitement de données à caractère personnel - Données médicales)"},
        HTMLid:"4a5a9a3",
        HTMLclass:"leave"
    },
node4a5a10 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès aux origines personnelles"},
        HTMLid:"4a5a10",
        HTMLclass:"leave"
    },
node4a5a11 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transparence de la vie publique"},
        HTMLid:"4a5a11",
    },
node4a5a11a1 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles communes"},
        HTMLid:"4a5a11a1",
        HTMLclass:"leave"
    },
node4a5a11a2 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Parlement"},
        HTMLid:"4a5a11a2",
        HTMLclass:"leave"
    },
node4a5a11a3 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres du Gouvernement"},
        HTMLid:"4a5a11a3",
        HTMLclass:"leave"
    },
node4a5a11a4 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élus locaux"},
        HTMLid:"4a5a11a4",
        HTMLclass:"leave"
    },
node4a5a11a5 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres titulaires de fonctions ou d'emplois publics"},
        HTMLid:"4a5a11a5",
        HTMLclass:"leave"
    },
node4a5a11a6 = {
        parent: node4a5a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Président de la République et candidats à l'élection présidentielle"},
        HTMLid:"4a5a11a6",
        HTMLclass:"leave"
    },
node4a5a12 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès aux données de connexion"},
        HTMLid:"4a5a12",
        HTMLclass:"leave"
    },
node4a5a13 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assignation à résidence"},
        HTMLid:"4a5a13",
        HTMLclass:"leave"
    },
node4a5a14 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès aux données professionnelles"},
        HTMLid:"4a5a14",
        HTMLclass:"leave"
    },
node4a5a15 = {
        parent: node4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exécution des peines"},
        HTMLid:"4a5a15",
        HTMLclass:"leave"
    },
node4a6 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE MENER UNE VIE FAMILIALE NORMALE"},
        HTMLid:"4a6",
    },
node4a6a1 = {
        parent: node4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a6a1",
        HTMLclass:"leave"
    },
node4a6a2 = {
        parent: node4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a6a2",
        HTMLclass:"leave"
    },
node4a6a3 = {
        parent: node4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation avec des exigences de valeur constitutionnelle"},
        HTMLid:"4a6a3",
        HTMLclass:"leave"
    },
node4a6a4 = {
        parent: node4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des garanties légales de ce droit"},
        HTMLid:"4a6a4",
    },
node4a6a4a1 = {
        parent: node4a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties légales suffisantes"},
        HTMLid:"4a6a4a1",
        HTMLclass:"leave"
    },
node4a6a4a2 = {
        parent: node4a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties légales insuffisantes"},
        HTMLid:"4a6a4a2",
        HTMLclass:"leave"
    },
node4a6a5 = {
        parent: node4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'erreur manifeste d'appréciation"},
        HTMLid:"4a6a5",
    },
node4a6a5a1 = {
        parent: node4a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'erreur manifeste d'appréciation"},
        HTMLid:"4a6a5a1",
        HTMLclass:"leave"
    },
node4a6a5a2 = {
        parent: node4a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Erreur manifeste d'appréciation"},
        HTMLid:"4a6a5a2",
        HTMLclass:"leave"
    },
node4a7 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE PROPRIÉTÉ"},
        HTMLid:"4a7",
    },
node4a7a1 = {
        parent: node4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a7a1",
    },
node4a7a1a1 = {
        parent: node4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondements du droit de propriété"},
        HTMLid:"4a7a1a1",
        HTMLclass:"leave"
    },
node4a7a1a2 = {
        parent: node4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère fondamental du droit de propriété"},
        HTMLid:"4a7a1a2",
        HTMLclass:"leave"
    },
node4a7a1a3 = {
        parent: node4a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Évolution de la protection du droit de propriété"},
        HTMLid:"4a7a1a3",
        HTMLclass:"leave"
    },
node4a7a2 = {
        parent: node4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application de la protection du droit de propriété"},
        HTMLid:"4a7a2",
    },
node4a7a2a1 = {
        parent: node4a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titulaires du droit de propriété"},
        HTMLid:"4a7a2a1",
        HTMLclass:"leave"
    },
node4a7a2a2 = {
        parent: node4a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaines d'application"},
        HTMLid:"4a7a2a2",
    },
node4a7a2a2a1 = {
        parent: node4a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propriété immobilière"},
        HTMLid:"4a7a2a2a1",
        HTMLclass:"leave"
    },
node4a7a2a2a2 = {
        parent: node4a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propriété mobilière"},
        HTMLid:"4a7a2a2a2",
        HTMLclass:"leave"
    },
node4a7a2a2a3 = {
        parent: node4a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propriété incorporelle"},
        HTMLid:"4a7a2a2a3",
        HTMLclass:"leave"
    },
node4a7a2a2a3a1 = {
        parent: node4a7a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propriété industrielle et commerciale"},
        HTMLid:"4a7a2a2a3a1",
        HTMLclass:"leave"
    },
node4a7a2a2a3a2 = {
        parent: node4a7a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits d'auteur et droits voisins"},
        HTMLid:"4a7a2a2a3a2",
        HTMLclass:"leave"
    },
node4a7a2a2a4 = {
        parent: node4a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Créances"},
        HTMLid:"4a7a2a2a4",
        HTMLclass:"leave"
    },
node4a7a3 = {
        parent: node4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection contre la dénaturation du droit de propriété"},
        HTMLid:"4a7a3",
    },
node4a7a3a1 = {
        parent: node4a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critère de la gravité de l'atteinte au droit de propriété"},
        HTMLid:"4a7a3a1",
    },
node4a7a3a1a1 = {
        parent: node4a7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Atteinte au droit de propriété"},
        HTMLid:"4a7a3a1a1",
        HTMLclass:"leave"
    },
node4a7a3a1a2 = {
        parent: node4a7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'atteinte au droit de propriété"},
        HTMLid:"4a7a3a1a2",
        HTMLclass:"leave"
    },
node4a7a3a2 = {
        parent: node4a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties légales"},
        HTMLid:"4a7a3a2",
    },
node4a7a3a2a1 = {
        parent: node4a7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Atteinte au droit de propriété"},
        HTMLid:"4a7a3a2a1",
        HTMLclass:"leave"
    },
node4a7a3a2a2 = {
        parent: node4a7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'atteinte au droit de propriété"},
        HTMLid:"4a7a3a2a2",
        HTMLclass:"leave"
    },
node4a7a4 = {
        parent: node4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection contre la privation de propriété"},
        HTMLid:"4a7a4",
    },
node4a7a4a1 = {
        parent: node4a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de privation de propriété"},
        HTMLid:"4a7a4a1",
        HTMLclass:"leave"
    },
node4a7a4a2 = {
        parent: node4a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nécessité publique de la privation de propriété"},
        HTMLid:"4a7a4a2",
        HTMLclass:"leave"
    },
node4a7a4a3 = {
        parent: node4a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation d'une juste et préalable indemnité"},
        HTMLid:"4a7a4a3",
    },
node4a7a4a3a1 = {
        parent: node4a7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a7a4a3a1",
        HTMLclass:"leave"
    },
node4a7a4a3a2 = {
        parent: node4a7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a7a4a3a2",
        HTMLclass:"leave"
    },
node4a7a4a4 = {
        parent: node4a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence de l'autorité judiciaire en matière d'atteinte au droit de propriété"},
        HTMLid:"4a7a4a4",
        HTMLclass:"leave"
    },
node4a7a5 = {
        parent: node4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des atteintes à l'exercice du droit de propriété"},
        HTMLid:"4a7a5",
    },
node4a7a5a1 = {
        parent: node4a7a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de conciliation avec des objectifs d'intérêt général"},
        HTMLid:"4a7a5a1",
        HTMLclass:"leave"
    },
node4a7a5a2 = {
        parent: node4a7a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Atteinte au droit de propriété contraire à la Constitution"},
        HTMLid:"4a7a5a2",
        HTMLclass:"leave"
    },
node4a7a5a3 = {
        parent: node4a7a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'atteinte au droit de propriété contraire à la Constitution"},
        HTMLid:"4a7a5a3",
        HTMLclass:"leave"
    },
node4a8 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROITS CIVIQUES (voir Titre 8 Élections et référendums nationaux - Principes du droit électoral)"},
        HTMLid:"4a8",
    },
node4a9 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROITS CONSTITUTIONNELS DES TRAVAILLEURS"},
        HTMLid:"4a9",
    },
node4a9a1 = {
        parent: node4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits collectifs des travailleurs"},
        HTMLid:"4a9a1",
    },
node4a9a1a1 = {
        parent: node4a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de grève (alinéa 7 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a1a1",
        HTMLclass:"leave"
    },
node4a9a1a1a1 = {
        parent: node4a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences normatives"},
        HTMLid:"4a9a1a1a1",
    },
node4a9a1a1a1a1 = {
        parent: node4a9a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a9a1a1a1a1",
        HTMLclass:"leave"
    },
node4a9a1a1a1a2 = {
        parent: node4a9a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du pouvoir réglementaire"},
        HTMLid:"4a9a1a1a1a2",
        HTMLclass:"leave"
    },
node4a9a1a1a1a3 = {
        parent: node4a9a1a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence des partenaires sociaux"},
        HTMLid:"4a9a1a1a1a3",
        HTMLclass:"leave"
    },
node4a9a1a1a2 = {
        parent: node4a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Définition du droit de grève"},
        HTMLid:"4a9a1a1a2",
    },
node4a9a1a1a2a1 = {
        parent: node4a9a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cessation du travail"},
        HTMLid:"4a9a1a1a2a1",
        HTMLclass:"leave"
    },
node4a9a1a1a2a2 = {
        parent: node4a9a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cessation concertée du travail"},
        HTMLid:"4a9a1a1a2a2",
        HTMLclass:"leave"
    },
node4a9a1a1a2a3 = {
        parent: node4a9a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cessation concertée du travail en vue de la défense d'intérêts professionnels"},
        HTMLid:"4a9a1a1a2a3",
        HTMLclass:"leave"
    },
node4a9a1a1a2a4 = {
        parent: node4a9a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Titulaires du droit de grève"},
        HTMLid:"4a9a1a1a2a4",
        HTMLclass:"leave"
    },
node4a9a1a1a2a5 = {
        parent: node4a9a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres éléments de définition"},
        HTMLid:"4a9a1a1a2a5",
        HTMLclass:"leave"
    },
node4a9a1a1a3 = {
        parent: node4a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités législatives d'aménagement de l'exercice du droit de grève jugées constitutionnelles"},
        HTMLid:"4a9a1a1a3",
    },
node4a9a1a1a3a1 = {
        parent: node4a9a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préavis"},
        HTMLid:"4a9a1a1a3a1",
        HTMLclass:"leave"
    },
node4a9a1a1a3a2 = {
        parent: node4a9a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration individuelle"},
        HTMLid:"4a9a1a1a3a2",
        HTMLclass:"leave"
    },
node4a9a1a1a3a3 = {
        parent: node4a9a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation des salariés"},
        HTMLid:"4a9a1a1a3a3",
        HTMLclass:"leave"
    },
node4a9a1a1a3a4 = {
        parent: node4a9a1a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction d'interrompre l'activité"},
        HTMLid:"4a9a1a1a3a4",
        HTMLclass:"leave"
    },
node4a9a1a1a4 = {
        parent: node4a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités législatives d'aménagement de l'exercice du droit de grève jugées constitutionnelles sous réserves d'interprétation"},
        HTMLid:"4a9a1a1a4",
    },
node4a9a1a1a4a1 = {
        parent: node4a9a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de sanction pénale"},
        HTMLid:"4a9a1a1a4a1",
        HTMLclass:"leave"
    },
node4a9a1a1a4a2 = {
        parent: node4a9a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de sanction disciplinaire"},
        HTMLid:"4a9a1a1a4a2",
        HTMLclass:"leave"
    },
node4a9a1a1a4a3 = {
        parent: node4a9a1a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de sanction pécuniaire"},
        HTMLid:"4a9a1a1a4a3",
        HTMLclass:"leave"
    },
node4a9a1a1a5 = {
        parent: node4a9a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités législatives d'aménagement de l'exercice du droit de grève jugées inconstitutionnelles"},
        HTMLid:"4a9a1a1a5",
        HTMLclass:"leave"
    },
node4a9a1a2 = {
        parent: node4a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de négociation collective (alinéa 8 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a1a2",
    },
node4a9a1a2a1 = {
        parent: node4a9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des modalités concrètes de mise en oeuvre de la loi"},
        HTMLid:"4a9a1a2a1",
        HTMLclass:"leave"
    },
node4a9a1a2a2 = {
        parent: node4a9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consécration de la liberté de négociation collective"},
        HTMLid:"4a9a1a2a2",
    },
node4a9a1a2a2a1 = {
        parent: node4a9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation"},
        HTMLid:"4a9a1a2a2a1",
        HTMLclass:"leave"
    },
node4a9a1a2a2a2 = {
        parent: node4a9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des syndicats"},
        HTMLid:"4a9a1a2a2a2",
        HTMLclass:"leave"
    },
node4a9a1a2a2a3 = {
        parent: node4a9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des autres acteurs sociaux"},
        HTMLid:"4a9a1a2a2a3",
        HTMLclass:"leave"
    },
node4a9a1a2a2a4 = {
        parent: node4a9a1a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Seuils d'effectifs"},
        HTMLid:"4a9a1a2a2a4",
        HTMLclass:"leave"
    },
node4a9a1a2a3 = {
        parent: node4a9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conventions et accords collectifs de travail"},
        HTMLid:"4a9a1a2a3",
    },
node4a9a1a2a3a1 = {
        parent: node4a9a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Extension des conventions collectives"},
        HTMLid:"4a9a1a2a3a1",
        HTMLclass:"leave"
    },
node4a9a1a2a3a2 = {
        parent: node4a9a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accords dérogatoires"},
        HTMLid:"4a9a1a2a3a2",
        HTMLclass:"leave"
    },
node4a9a1a2a3a3 = {
        parent: node4a9a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de faveur"},
        HTMLid:"4a9a1a2a3a3",
        HTMLclass:"leave"
    },
node4a9a1a2a3a4 = {
        parent: node4a9a1a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articulation entre accords collectifs"},
        HTMLid:"4a9a1a2a3a4",
        HTMLclass:"leave"
    },
node4a9a1a2a4 = {
        parent: node4a9a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences normatives pour réglementer la négociation collective"},
        HTMLid:"4a9a1a2a4",
    },
node4a9a1a2a4a1 = {
        parent: node4a9a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle du législateur"},
        HTMLid:"4a9a1a2a4a1",
        HTMLclass:"leave"
    },
node4a9a1a2a4a2 = {
        parent: node4a9a1a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle du pouvoir réglementaire et des partenaires sociaux"},
        HTMLid:"4a9a1a2a4a2",
        HTMLclass:"leave"
    },
node4a9a1a3 = {
        parent: node4a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté syndicale (alinéa 6 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a1a3",
        HTMLclass:"leave"
    },
node4a9a1a3a1 = {
        parent: node4a9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté syndicale individuelle"},
        HTMLid:"4a9a1a3a1",
        HTMLclass:"leave"
    },
node4a9a1a3a2 = {
        parent: node4a9a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté syndicale collective"},
        HTMLid:"4a9a1a3a2",
        HTMLclass:"leave"
    },
node4a9a1a3a2a1 = {
        parent: node4a9a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'action du syndicat"},
        HTMLid:"4a9a1a3a2a1",
        HTMLclass:"leave"
    },
node4a9a1a3a2a2 = {
        parent: node4a9a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des délégués syndicaux"},
        HTMLid:"4a9a1a3a2a2",
        HTMLclass:"leave"
    },
node4a9a1a4 = {
        parent: node4a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de participation des travailleurs à la gestion des entreprises (alinéa 8 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a1a4",
        HTMLclass:"leave"
    },
node4a9a1a4a1 = {
        parent: node4a9a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation et information du comité d'entreprise"},
        HTMLid:"4a9a1a4a1",
        HTMLclass:"leave"
    },
node4a9a1a4a2 = {
        parent: node4a9a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentativité des syndicats et institutions représentatives du personnel"},
        HTMLid:"4a9a1a4a2",
        HTMLclass:"leave"
    },
node4a9a1a4a3 = {
        parent: node4a9a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "En matière de fonction publique et d'entreprise publique"},
        HTMLid:"4a9a1a4a3",
        HTMLclass:"leave"
    },
node4a9a2 = {
        parent: node4a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits individuels des travailleurs"},
        HTMLid:"4a9a2",
    },
node4a9a2a1 = {
        parent: node4a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'obtenir un emploi (alinéa 5 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a2a1",
        HTMLclass:"leave"
    },
node4a9a2a1a1 = {
        parent: node4a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe et compétence du législateur"},
        HTMLid:"4a9a2a1a1",
        HTMLclass:"leave"
    },
node4a9a2a1a2 = {
        parent: node4a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a9a2a1a2",
    },
node4a9a2a1a2a1 = {
        parent: node4a9a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Partage du temps de travail"},
        HTMLid:"4a9a2a1a2a1",
        HTMLclass:"leave"
    },
node4a9a2a1a2a2 = {
        parent: node4a9a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Politique fiscale - incidence sur l'emploi des entreprises concernées"},
        HTMLid:"4a9a2a1a2a2",
        HTMLclass:"leave"
    },
node4a9a2a1a2a3 = {
        parent: node4a9a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au travail et licenciement des salariés"},
        HTMLid:"4a9a2a1a2a3",
        HTMLclass:"leave"
    },
node4a9a2a1a2a4 = {
        parent: node4a9a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au travail et droit au reclassement du salarié"},
        HTMLid:"4a9a2a1a2a4",
        HTMLclass:"leave"
    },
node4a9a2a2 = {
        parent: node4a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au repos et à la protection de la santé des travailleurs (alinéa 11 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a9a2a2",
        HTMLclass:"leave"
    },
node4a10 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "AUTRES DROITS ET PRINCIPES SOCIAUX"},
        HTMLid:"4a10",
    },
node4a10a1 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la protection sociale (alinéa 11 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a10a1",
        HTMLclass:"leave"
    },
node4a10a1a1 = {
        parent: node4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application"},
        HTMLid:"4a10a1a1",
    },
node4a10a1a1a1 = {
        parent: node4a10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Aide sociale"},
        HTMLid:"4a10a1a1a1",
        HTMLclass:"leave"
    },
node4a10a1a1a2 = {
        parent: node4a10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maladie"},
        HTMLid:"4a10a1a1a2",
        HTMLclass:"leave"
    },
node4a10a1a1a3 = {
        parent: node4a10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vieillesse"},
        HTMLid:"4a10a1a1a3",
        HTMLclass:"leave"
    },
node4a10a1a1a4 = {
        parent: node4a10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Famille"},
        HTMLid:"4a10a1a1a4",
        HTMLclass:"leave"
    },
node4a10a1a1a5 = {
        parent: node4a10a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Handicap et dépendance"},
        HTMLid:"4a10a1a1a5",
        HTMLclass:"leave"
    },
node4a10a1a2 = {
        parent: node4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Financement de la protection sociale"},
        HTMLid:"4a10a1a2",
        HTMLclass:"leave"
    },
node4a10a1a3 = {
        parent: node4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décentralisation de l'aide sociale"},
        HTMLid:"4a10a1a3",
        HTMLclass:"leave"
    },
node4a10a1a4 = {
        parent: node4a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits à prestations des assurés sociaux et des bénéficiaires de l'aide sociale"},
        HTMLid:"4a10a1a4",
        HTMLclass:"leave"
    },
node4a10a2 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égal accès à l'instruction et à la formation professionnelle (alinéa 13 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a10a2",
        HTMLclass:"leave"
    },
node4a10a3 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Possibilité pour toute personne de disposer d'un logement décent"},
        HTMLid:"4a10a3",
        HTMLclass:"leave"
    },
node4a10a3a1 = {
        parent: node4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondement et compétence législative de mise en oeuvre"},
        HTMLid:"4a10a3a1",
        HTMLclass:"leave"
    },
node4a10a3a2 = {
        parent: node4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de violation de l'objectif"},
        HTMLid:"4a10a3a2",
        HTMLclass:"leave"
    },
node4a10a3a3 = {
        parent: node4a10a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Restriction apportée à des droits et libertés constitutionnels au nom de l'objectif"},
        HTMLid:"4a10a3a3",
    },
node4a10a3a3a1 = {
        parent: node4a10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Restriction constitutionnelle"},
        HTMLid:"4a10a3a3a1",
        HTMLclass:"leave"
    },
node4a10a3a3a2 = {
        parent: node4a10a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Restriction inconstitutionnelle"},
        HTMLid:"4a10a3a3a2",
        HTMLclass:"leave"
    },
node4a10a4 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de protection de la famille (alinéa 10 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a10a4",
        HTMLclass:"leave"
    },
node4a10a4a1 = {
        parent: node4a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pacs et protection de la famille"},
        HTMLid:"4a10a4a1",
        HTMLclass:"leave"
    },
node4a10a4a2 = {
        parent: node4a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de développement de la famille"},
        HTMLid:"4a10a4a2",
        HTMLclass:"leave"
    },
node4a10a4a3 = {
        parent: node4a10a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation des droits de la famille avec les exigences de valeur constitutionnelle"},
        HTMLid:"4a10a4a3",
        HTMLclass:"leave"
    },
node4a10a5 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de protection de la santé publique"},
        HTMLid:"4a10a5",
    },
node4a10a5a1 = {
        parent: node4a10a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondement"},
        HTMLid:"4a10a5a1",
    },
node4a10a5a1a1 = {
        parent: node4a10a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de rattachement textuel"},
        HTMLid:"4a10a5a1a1",
        HTMLclass:"leave"
    },
node4a10a5a1a2 = {
        parent: node4a10a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de valeur constitutionnelle"},
        HTMLid:"4a10a5a1a2",
        HTMLclass:"leave"
    },
node4a10a5a1a3 = {
        parent: node4a10a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rattachement à l'alinéa 11 du Préambule de la Constitution de 1946"},
        HTMLid:"4a10a5a1a3",
        HTMLclass:"leave"
    },
node4a10a5a2 = {
        parent: node4a10a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a10a5a2",
    },
node4a10a5a2a1 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des matières nucléaires"},
        HTMLid:"4a10a5a2a1",
        HTMLclass:"leave"
    },
node4a10a5a2a2 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lutte contre le tabagisme et l'alcoolisme"},
        HTMLid:"4a10a5a2a2",
        HTMLclass:"leave"
    },
node4a10a5a2a3 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lutte contre l'addiction au jeu"},
        HTMLid:"4a10a5a2a3",
        HTMLclass:"leave"
    },
node4a10a5a2a4 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etudes médicales"},
        HTMLid:"4a10a5a2a4",
        HTMLclass:"leave"
    },
node4a10a5a2a5 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lutte contre le bruit"},
        HTMLid:"4a10a5a2a5",
        HTMLclass:"leave"
    },
node4a10a5a2a6 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dossier médical personnel"},
        HTMLid:"4a10a5a2a6",
        HTMLclass:"leave"
    },
node4a10a5a2a7 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public hospitalier"},
        HTMLid:"4a10a5a2a7",
        HTMLclass:"leave"
    },
node4a10a5a2a8 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlementation des professions médicales et paramédicales"},
        HTMLid:"4a10a5a2a8",
        HTMLclass:"leave"
    },
node4a10a5a2a9 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Santé mentale"},
        HTMLid:"4a10a5a2a9",
        HTMLclass:"leave"
    },
node4a10a5a2a10 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"4a10a5a2a10",
        HTMLclass:"leave"
    },
node4a10a5a2a11 = {
        parent: node4a10a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Politique de vaccination"},
        HTMLid:"4a10a5a2a11",
        HTMLclass:"leave"
    },
node4a10a6 = {
        parent: node4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes de solidarité et d'égalité devant les charges qui résultent de calamités nationales (alinéa 12 du Préambule de la Constitution de 1946)"},
        HTMLid:"4a10a6",
        HTMLclass:"leave"
    },
node4a11 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ENVIRONNEMENT"},
        HTMLid:"4a11",
    },
node4a11a1 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à vivre dans un environnement sain et vigilance environnementale"},
        HTMLid:"4a11a1",
        HTMLclass:"leave"
    },
node4a11a2 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Devoir de prévention"},
        HTMLid:"4a11a2",
        HTMLclass:"leave"
    },
node4a11a3 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution à la réparation des dommages"},
        HTMLid:"4a11a3",
        HTMLclass:"leave"
    },
node4a11a4 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de précaution"},
        HTMLid:"4a11a4",
        HTMLclass:"leave"
    },
node4a11a5 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Promotion du développement durable"},
        HTMLid:"4a11a5",
        HTMLclass:"leave"
    },
node4a11a6 = {
        parent: node4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes d'information et de participation"},
        HTMLid:"4a11a6",
    },
node4a11a6a1 = {
        parent: node4a11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation du principe"},
        HTMLid:"4a11a6a1",
        HTMLclass:"leave"
    },
node4a11a6a2 = {
        parent: node4a11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application du principe"},
        HTMLid:"4a11a6a2",
        HTMLclass:"leave"
    },
node4a11a6a3 = {
        parent: node4a11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance du principe"},
        HTMLid:"4a11a6a3",
        HTMLclass:"leave"
    },
node4a11a6a4 = {
        parent: node4a11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de méconnaissance du principe"},
        HTMLid:"4a11a6a4",
        HTMLclass:"leave"
    },
node4a12 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DES ÉTRANGERS ET DROIT D'ASILE"},
        HTMLid:"4a12",
    },
node4a12a1 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de droit de caractère  général et absolu "},
        HTMLid:"4a12a1",
        HTMLclass:"leave"
    },
node4a12a1a1 = {
        parent: node4a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime administratif d'autorisation préalable"},
        HTMLid:"4a12a1a1",
        HTMLclass:"leave"
    },
node4a12a1a2 = {
        parent: node4a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des titres de séjour"},
        HTMLid:"4a12a1a2",
        HTMLclass:"leave"
    },
node4a12a2 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en France"},
        HTMLid:"4a12a2",
    },
node4a12a2a1 = {
        parent: node4a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Visas"},
        HTMLid:"4a12a2a1",
    },
node4a12a2a2 = {
        parent: node4a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Refus d'entrée"},
        HTMLid:"4a12a2a2",
        HTMLclass:"leave"
    },
node4a12a3 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séjour en France"},
        HTMLid:"4a12a3",
    },
node4a12a3a1 = {
        parent: node4a12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Regroupement familial (voir également ci dessus Droit de mener une vie familiale normale)"},
        HTMLid:"4a12a3a1",
        HTMLclass:"leave"
    },
node4a12a3a2 = {
        parent: node4a12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accueil pour visite familiale et privée"},
        HTMLid:"4a12a3a2",
        HTMLclass:"leave"
    },
node4a12a3a3 = {
        parent: node4a12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Carte de séjour temporaire"},
        HTMLid:"4a12a3a3",
        HTMLclass:"leave"
    },
node4a12a3a4 = {
        parent: node4a12a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Carte de résident"},
        HTMLid:"4a12a3a4",
        HTMLclass:"leave"
    },
node4a12a4 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'asile"},
        HTMLid:"4a12a4",
    },
node4a12a4a1 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a12a4a1",
        HTMLclass:"leave"
    },
node4a12a4a2 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en oeuvre"},
        HTMLid:"4a12a4a2",
    },
node4a12a4a2a1 = {
        parent: node4a12a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des conventions internationales"},
        HTMLid:"4a12a4a2a1",
    },
node4a12a4a2a1a1 = {
        parent: node4a12a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convention de Genève du 28 juillet 1961 sur le statut des réfugiés"},
        HTMLid:"4a12a4a2a1a1",
        HTMLclass:"leave"
    },
node4a12a4a2a1a2 = {
        parent: node4a12a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convention additionnelle à la Convention européenne d'entraide en matière pénale"},
        HTMLid:"4a12a4a2a1a2",
        HTMLclass:"leave"
    },
node4a12a4a2a2 = {
        parent: node4a12a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlementation nationale des conditions du droit d'asile"},
        HTMLid:"4a12a4a2a2",
        HTMLclass:"leave"
    },
node4a12a4a3 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure"},
        HTMLid:"4a12a4a3",
    },
node4a12a4a3a1 = {
        parent: node4a12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Convention d'application de l'accord Schengen"},
        HTMLid:"4a12a4a3a1",
    },
node4a12a4a3a1a1 = {
        parent: node4a12a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Traitement de la demande d'asile"},
        HTMLid:"4a12a4a3a1a1",
        HTMLclass:"leave"
    },
node4a12a4a3a1a2 = {
        parent: node4a12a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réexamen d'une demande d'asile rejeté"},
        HTMLid:"4a12a4a3a1a2",
        HTMLclass:"leave"
    },
node4a12a4a3a2 = {
        parent: node4a12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Office Français de Protection des Réfugiés et Apatrides"},
        HTMLid:"4a12a4a3a2",
    },
node4a12a4a3a2a1 = {
        parent: node4a12a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication de documents"},
        HTMLid:"4a12a4a3a2a1",
        HTMLclass:"leave"
    },
node4a12a4a3a2a2 = {
        parent: node4a12a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des données à caractère personnel"},
        HTMLid:"4a12a4a3a2a2",
        HTMLclass:"leave"
    },
node4a12a4a3a3 = {
        parent: node4a12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission des recours des réfugiés"},
        HTMLid:"4a12a4a3a3",
        HTMLclass:"leave"
    },
node4a12a4a3a4 = {
        parent: node4a12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pays d'origine sûr"},
        HTMLid:"4a12a4a3a4",
    },
node4a12a4a3a4a1 = {
        parent: node4a12a4a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement de la liste des pays sûrs"},
        HTMLid:"4a12a4a3a4a1",
        HTMLclass:"leave"
    },
node4a12a4a3a4a2 = {
        parent: node4a12a4a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure prioritaire"},
        HTMLid:"4a12a4a3a4a2",
        HTMLclass:"leave"
    },
node4a12a4a3a4a3 = {
        parent: node4a12a4a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai"},
        HTMLid:"4a12a4a3a4a3",
        HTMLclass:"leave"
    },
node4a12a4a3a4a4 = {
        parent: node4a12a4a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'audition du demandeur d'asile"},
        HTMLid:"4a12a4a3a4a4",
        HTMLclass:"leave"
    },
node4a12a4a3a5 = {
        parent: node4a12a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au recours des demandeurs d'asile"},
        HTMLid:"4a12a4a3a5",
        HTMLclass:"leave"
    },
node4a12a4a4 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séjour"},
        HTMLid:"4a12a4a4",
    },
node4a12a4a4a1 = {
        parent: node4a12a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au séjour temporaire"},
        HTMLid:"4a12a4a4a1",
    },
node4a12a4a4a1a1 = {
        parent: node4a12a4a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a12a4a4a1a1",
        HTMLclass:"leave"
    },
node4a12a4a4a1a2 = {
        parent: node4a12a4a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limite"},
        HTMLid:"4a12a4a4a1a2",
        HTMLclass:"leave"
    },
node4a12a4a4a2 = {
        parent: node4a12a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Octroi de la carte de résident au conjoint"},
        HTMLid:"4a12a4a4a2",
        HTMLclass:"leave"
    },
node4a12a4a4a3 = {
        parent: node4a12a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Octroi de la carte de résident à l'enfant d'un réfugié"},
        HTMLid:"4a12a4a4a3",
        HTMLclass:"leave"
    },
node4a12a4a5 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection subsidiaire"},
        HTMLid:"4a12a4a5",
    },
node4a12a4a5a1 = {
        parent: node4a12a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure"},
        HTMLid:"4a12a4a5a1",
        HTMLclass:"leave"
    },
node4a12a4a5a2 = {
        parent: node4a12a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions du refus"},
        HTMLid:"4a12a4a5a2",
        HTMLclass:"leave"
    },
node4a12a4a6 = {
        parent: node4a12a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité des entreprises de transport ayant acheminé un étranger en France"},
        HTMLid:"4a12a4a6",
        HTMLclass:"leave"
    },
node4a12a5 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Eloignement des étrangers"},
        HTMLid:"4a12a5",
    },
node4a12a5a1 = {
        parent: node4a12a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Expulsion, refoulement, reconduite à la frontière et interdiction du territoire"},
        HTMLid:"4a12a5a1",
        HTMLclass:"leave"
    },
node4a12a5a2 = {
        parent: node4a12a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Extradition"},
        HTMLid:"4a12a5a2",
        HTMLclass:"leave"
    },
node4a12a6 = {
        parent: node4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures privatives"},
        HTMLid:"4a12a6",
    },
node4a12a6a1 = {
        parent: node4a12a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en zone d'attente"},
        HTMLid:"4a12a6a1",
    },
node4a12a6a1a1 = {
        parent: node4a12a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en zone d'attente des demandeurs d'asile"},
        HTMLid:"4a12a6a1a1",
        HTMLclass:"leave"
    },
node4a12a6a1a2 = {
        parent: node4a12a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention de l'autorité judiciaire"},
        HTMLid:"4a12a6a1a2",
        HTMLclass:"leave"
    },
node4a12a6a2 = {
        parent: node4a12a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétention judiciaire"},
        HTMLid:"4a12a6a2",
        HTMLclass:"leave"
    },
node4a12a6a3 = {
        parent: node4a12a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétention administrative"},
        HTMLid:"4a12a6a3",
        HTMLclass:"leave"
    },
node4a12a6a3a1 = {
        parent: node4a12a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée de la rétention"},
        HTMLid:"4a12a6a3a1",
        HTMLclass:"leave"
    },
node4a12a6a3a2 = {
        parent: node4a12a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure et voie de recours"},
        HTMLid:"4a12a6a3a2",
        HTMLclass:"leave"
    },
node4a12a6a3a3 = {
        parent: node4a12a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle de l'autorité judiciaire"},
        HTMLid:"4a12a6a3a3",
        HTMLclass:"leave"
    },
node4a12a6a3a3a1 = {
        parent: node4a12a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allongement de la durée de la rétention"},
        HTMLid:"4a12a6a3a3a1",
        HTMLclass:"leave"
    },
node4a12a6a3a3a2 = {
        parent: node4a12a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise en liberté"},
        HTMLid:"4a12a6a3a3a2",
        HTMLclass:"leave"
    },
node4a12a6a3a3a3 = {
        parent: node4a12a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suspension d'une ordonnance de libération"},
        HTMLid:"4a12a6a3a3a3",
        HTMLclass:"leave"
    },
node4a12a6a4 = {
        parent: node4a12a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assignation à résidence"},
        HTMLid:"4a12a6a4",
        HTMLclass:"leave"
    },
node4a12a6a5 = {
        parent: node4a12a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits des étrangers"},
        HTMLid:"4a12a6a5",
    },
node4a12a6a5a1 = {
        parent: node4a12a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'information"},
        HTMLid:"4a12a6a5a1",
        HTMLclass:"leave"
    },
node4a12a6a5a2 = {
        parent: node4a12a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties procédurales"},
        HTMLid:"4a12a6a5a2",
    },
node4a12a6a5a2a1 = {
        parent: node4a12a6a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Visioconférence"},
        HTMLid:"4a12a6a5a2a1",
        HTMLclass:"leave"
    },
node4a12a6a5a2a2 = {
        parent: node4a12a6a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Force majeure"},
        HTMLid:"4a12a6a5a2a2",
        HTMLclass:"leave"
    },
node4a13 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ CONTRACTUELLE ET DROIT AU MAINTIEN DE L'ÉCONOMIE DES CONVENTIONS LÉGALEMENT CONCLUES"},
        HTMLid:"4a13",
    },
node4a13a1 = {
        parent: node4a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté contractuelle"},
        HTMLid:"4a13a1",
    },
node4a13a1a1 = {
        parent: node4a13a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Construction du principe"},
        HTMLid:"4a13a1a1",
        HTMLclass:"leave"
    },
node4a13a1a2 = {
        parent: node4a13a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a13a1a2",
        HTMLclass:"leave"
    },
node4a13a1a3 = {
        parent: node4a13a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation du principe"},
        HTMLid:"4a13a1a3",
        HTMLclass:"leave"
    },
node4a13a1a3a1 = {
        parent: node4a13a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec les exigences d'intérêt général"},
        HTMLid:"4a13a1a3a1",
        HTMLclass:"leave"
    },
node4a13a1a3a2 = {
        parent: node4a13a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec les exigences de droit social"},
        HTMLid:"4a13a1a3a2",
        HTMLclass:"leave"
    },
node4a13a1a3a3 = {
        parent: node4a13a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec des règles, principes ou objectifs de valeur constitutionnelle"},
        HTMLid:"4a13a1a3a3",
        HTMLclass:"leave"
    },
node4a13a2 = {
        parent: node4a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au maintien de l'économie des conventions légalement conclues"},
        HTMLid:"4a13a2",
        HTMLclass:"leave"
    },
node4a13a2a1 = {
        parent: node4a13a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a13a2a1",
        HTMLclass:"leave"
    },
node4a13a2a2 = {
        parent: node4a13a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation du principe"},
        HTMLid:"4a13a2a2",
    },
node4a13a2a2a1 = {
        parent: node4a13a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec les exigences d'intérêt général"},
        HTMLid:"4a13a2a2a1",
        HTMLclass:"leave"
    },
node4a13a2a2a2 = {
        parent: node4a13a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec les exigences de droit social"},
        HTMLid:"4a13a2a2a2",
        HTMLclass:"leave"
    },
node4a14 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ D'ALLER ET DE VENIR (voir ci-dessous Liberté individuelle et Liberté personnelle)"},
        HTMLid:"4a14",
    },
node4a15 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ D'ASSOCIATION"},
        HTMLid:"4a15",
    },
node4a15a1 = {
        parent: node4a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a15a1",
        HTMLclass:"leave"
    },
node4a15a2 = {
        parent: node4a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime juridique de création"},
        HTMLid:"4a15a2",
    },
node4a15a2a1 = {
        parent: node4a15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe général"},
        HTMLid:"4a15a2a1",
        HTMLclass:"leave"
    },
node4a15a2a2 = {
        parent: node4a15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autre structure ayant reçu une mission de service public"},
        HTMLid:"4a15a2a2",
        HTMLclass:"leave"
    },
node4a15a2a3 = {
        parent: node4a15a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agrément de certaines associations à but spécifique"},
        HTMLid:"4a15a2a3",
        HTMLclass:"leave"
    },
node4a15a3 = {
        parent: node4a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources et régime fiscal"},
        HTMLid:"4a15a3",
        HTMLclass:"leave"
    },
node4a16 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ D'EXPRESSION ET DE COMMUNICATION"},
        HTMLid:"4a16",
    },
node4a16a1 = {
        parent: node4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"4a16a1",
    },
node4a16a1a1 = {
        parent: node4a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Valeur constitutionnelle"},
        HTMLid:"4a16a1a1",
        HTMLclass:"leave"
    },
node4a16a1a2 = {
        parent: node4a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée de cette liberté"},
        HTMLid:"4a16a1a2",
    },
node4a16a1a2a1 = {
        parent: node4a16a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté fondamentale"},
        HTMLid:"4a16a1a2a1",
        HTMLclass:"leave"
    },
node4a16a1a2a2 = {
        parent: node4a16a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation avec les contraintes techniques ou d'autres principes"},
        HTMLid:"4a16a1a2a2",
        HTMLclass:"leave"
    },
node4a16a1a3 = {
        parent: node4a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pluralisme des médias"},
        HTMLid:"4a16a1a3",
        HTMLclass:"leave"
    },
node4a16a2 = {
        parent: node4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'expression et de communication (hors des médias)"},
        HTMLid:"4a16a2",
    },
node4a16a2a1 = {
        parent: node4a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté individuelle de parler, écrire et imprimer librement"},
        HTMLid:"4a16a2a1",
        HTMLclass:"leave"
    },
node4a16a2a2 = {
        parent: node4a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'expression collective des idées et opinions"},
        HTMLid:"4a16a2a2",
        HTMLclass:"leave"
    },
node4a16a2a2a1 = {
        parent: node4a16a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Associations"},
        HTMLid:"4a16a2a2a1",
        HTMLclass:"leave"
    },
node4a16a3 = {
        parent: node4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Médias de presse"},
        HTMLid:"4a16a3",
    },
node4a16a3a1 = {
        parent: node4a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Presse d'information politique et générale"},
        HTMLid:"4a16a3a1",
    },
node4a16a3a1a1 = {
        parent: node4a16a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Partis et groupements politiques"},
        HTMLid:"4a16a3a1a1",
        HTMLclass:"leave"
    },
node4a16a3a1a2 = {
        parent: node4a16a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des plafonds de diffusion"},
        HTMLid:"4a16a3a1a2",
        HTMLclass:"leave"
    },
node4a16a3a1a3 = {
        parent: node4a16a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de transparence financière"},
        HTMLid:"4a16a3a1a3",
        HTMLclass:"leave"
    },
node4a16a3a1a4 = {
        parent: node4a16a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de pluralisme"},
        HTMLid:"4a16a3a1a4",
        HTMLclass:"leave"
    },
node4a16a3a2 = {
        parent: node4a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi du 29 juillet 1881"},
        HTMLid:"4a16a3a2",
        HTMLclass:"leave"
    },
node4a16a4 = {
        parent: node4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication audiovisuelle"},
        HTMLid:"4a16a4",
        HTMLclass:"leave"
    },
node4a16a4a1 = {
        parent: node4a16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a16a4a1",
    },
node4a16a4a1a1 = {
        parent: node4a16a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Monopole"},
        HTMLid:"4a16a4a1a1",
        HTMLclass:"leave"
    },
node4a16a4a1a2 = {
        parent: node4a16a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de communication"},
        HTMLid:"4a16a4a1a2",
        HTMLclass:"leave"
    },
node4a16a4a1a3 = {
        parent: node4a16a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etendue des compétences"},
        HTMLid:"4a16a4a1a3",
        HTMLclass:"leave"
    },
node4a16a4a1a4 = {
        parent: node4a16a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Habilitation donnée à une autorité administrative indépendante pour prendre des mesures réglementaires (voir également Titre 15 Autorités indépendantes)"},
        HTMLid:"4a16a4a1a4",
        HTMLclass:"leave"
    },
node4a16a4a2 = {
        parent: node4a16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de pluralisme"},
        HTMLid:"4a16a4a2",
        HTMLclass:"leave"
    },
node4a16a4a3 = {
        parent: node4a16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité"},
        HTMLid:"4a16a4a3",
        HTMLclass:"leave"
    },
node4a16a4a4 = {
        parent: node4a16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif de transparence financière"},
        HTMLid:"4a16a4a4",
        HTMLclass:"leave"
    },
node4a16a5 = {
        parent: node4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication électronique"},
        HTMLid:"4a16a5",
        HTMLclass:"leave"
    },
node4a16a5a1 = {
        parent: node4a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité des hébergeurs"},
        HTMLid:"4a16a5a1",
        HTMLclass:"leave"
    },
node4a16a5a2 = {
        parent: node4a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de réponse"},
        HTMLid:"4a16a5a2",
        HTMLclass:"leave"
    },
node4a16a5a3 = {
        parent: node4a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prescription"},
        HTMLid:"4a16a5a3",
        HTMLclass:"leave"
    },
node4a16a5a4 = {
        parent: node4a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Données de connexion"},
        HTMLid:"4a16a5a4",
        HTMLclass:"leave"
    },
node4a16a5a5 = {
        parent: node4a16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation d'un service de communication en ligne"},
        HTMLid:"4a16a5a5",
        HTMLclass:"leave"
    },
node4a17 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ DE CONSCIENCE ET D'OPINION"},
        HTMLid:"4a17",
    },
node4a17a1 = {
        parent: node4a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de conscience"},
        HTMLid:"4a17a1",
        HTMLclass:"leave"
    },
node4a17a2 = {
        parent: node4a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'opinion"},
        HTMLid:"4a17a2",
        HTMLclass:"leave"
    },
node4a18 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ INDIVIDUELLE"},
        HTMLid:"4a18",
    },
node4a18a1 = {
        parent: node4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affirmation de sa valeur constitutionnelle"},
        HTMLid:"4a18a1",
        HTMLclass:"leave"
    },
node4a18a2 = {
        parent: node4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application"},
        HTMLid:"4a18a2",
    },
node4a18a2a1 = {
        parent: node4a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composantes de la liberté individuelle avant 1999"},
        HTMLid:"4a18a2a1",
    },
node4a18a2a1a1 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la sûreté"},
        HTMLid:"4a18a2a1a1",
        HTMLclass:"leave"
    },
node4a18a2a1a2 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au respect de la vie privée (voir également ci-dessus Respect de la vie privée)"},
        HTMLid:"4a18a2a1a2",
        HTMLclass:"leave"
    },
node4a18a2a1a3 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inviolabilité du domicile"},
        HTMLid:"4a18a2a1a3",
        HTMLclass:"leave"
    },
node4a18a2a1a4 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'aller et venir"},
        HTMLid:"4a18a2a1a4",
        HTMLclass:"leave"
    },
node4a18a2a1a5 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté du mariage"},
        HTMLid:"4a18a2a1a5",
        HTMLclass:"leave"
    },
node4a18a2a1a6 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des données personnelles"},
        HTMLid:"4a18a2a1a6",
        HTMLclass:"leave"
    },
node4a18a2a1a7 = {
        parent: node4a18a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction de port et transport d'armes et projectiles"},
        HTMLid:"4a18a2a1a7",
        HTMLclass:"leave"
    },
node4a18a2a2 = {
        parent: node4a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détachement total des composantes de la liberté individuelle depuis 1999"},
        HTMLid:"4a18a2a2",
    },
node4a18a2a2a1 = {
        parent: node4a18a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'aller et venir"},
        HTMLid:"4a18a2a2a1",
    },
node4a18a2a2a1a1 = {
        parent: node4a18a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a18a2a2a1a1",
        HTMLclass:"leave"
    },
node4a18a2a2a1a2 = {
        parent: node4a18a2a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application aux étrangers"},
        HTMLid:"4a18a2a2a1a2",
        HTMLclass:"leave"
    },
node4a18a2a2a2 = {
        parent: node4a18a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté du mariage (voir ci-dessous Liberté personnelle)"},
        HTMLid:"4a18a2a2a2",
        HTMLclass:"leave"
    },
node4a18a2a2a3 = {
        parent: node4a18a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des données personnelles (voir ci-dessous Liberté personnelle)"},
        HTMLid:"4a18a2a2a3",
    },
node4a18a2a3 = {
        parent: node4a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détachement partiel des composantes de la liberté individuelle depuis 1999"},
        HTMLid:"4a18a2a3",
    },
node4a18a2a3a1 = {
        parent: node4a18a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inviolabilité du domicile"},
        HTMLid:"4a18a2a3a1",
        HTMLclass:"leave"
    },
node4a18a2a3a2 = {
        parent: node4a18a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des correspondances"},
        HTMLid:"4a18a2a3a2",
        HTMLclass:"leave"
    },
node4a18a2a4 = {
        parent: node4a18a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures qui ne relèvent pas du champ d'application de l'article 66 de la Constitution."},
        HTMLid:"4a18a2a4",
        HTMLclass:"leave"
    },
node4a18a3 = {
        parent: node4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection de la liberté individuelle par l'autorité judiciaire"},
        HTMLid:"4a18a3",
    },
node4a18a3a1 = {
        parent: node4a18a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion d'autorité judiciaire"},
        HTMLid:"4a18a3a1",
    },
node4a18a3a1a1 = {
        parent: node4a18a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Magistrats du siège"},
        HTMLid:"4a18a3a1a1",
        HTMLclass:"leave"
    },
node4a18a3a1a2 = {
        parent: node4a18a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Magistrats du parquet"},
        HTMLid:"4a18a3a1a2",
        HTMLclass:"leave"
    },
node4a18a3a1a3 = {
        parent: node4a18a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions composées de juges non professionnels"},
        HTMLid:"4a18a3a1a3",
        HTMLclass:"leave"
    },
node4a18a3a2 = {
        parent: node4a18a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"4a18a3a2",
    },
node4a18a3a2a1 = {
        parent: node4a18a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police administrative et police judiciaire"},
        HTMLid:"4a18a3a2a1",
        HTMLclass:"leave"
    },
node4a18a3a2a2 = {
        parent: node4a18a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enquêtes administratives et constatation d'infractions par une autorité administrative"},
        HTMLid:"4a18a3a2a2",
    },
node4a18a3a2a2a1 = {
        parent: node4a18a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la Commission nationale des comptes de campagnes et des financements politiques"},
        HTMLid:"4a18a3a2a2a1",
        HTMLclass:"leave"
    },
node4a18a3a2a2a2 = {
        parent: node4a18a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de conformité du fonctionnement du système de télétransmission"},
        HTMLid:"4a18a3a2a2a2",
        HTMLclass:"leave"
    },
node4a18a3a2a2a3 = {
        parent: node4a18a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la Commission des opérations de bourse"},
        HTMLid:"4a18a3a2a2a3",
        HTMLclass:"leave"
    },
node4a18a3a2a2a4 = {
        parent: node4a18a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Investigations du service central de prévention de la corruption"},
        HTMLid:"4a18a3a2a2a4",
        HTMLclass:"leave"
    },
node4a18a3a2a3 = {
        parent: node4a18a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanctions infligées par une autorité administrative (voir également ci-dessous Principes de droit pénal et de procédure pénale)"},
        HTMLid:"4a18a3a2a3",
        HTMLclass:"leave"
    },
node4a18a4 = {
        parent: node4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des mesures portant atteinte à la liberté individuelle"},
        HTMLid:"4a18a4",
    },
node4a18a4a1 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence exclusive de l'autorité judiciaire"},
        HTMLid:"4a18a4a1",
        HTMLclass:"leave"
    },
node4a18a4a2 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle et vérification d'identité"},
        HTMLid:"4a18a4a2",
    },
node4a18a4a2a1 = {
        parent: node4a18a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"4a18a4a2a1",
        HTMLclass:"leave"
    },
node4a18a4a2a2 = {
        parent: node4a18a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôles réalisés dans les lieux à usage professionnel"},
        HTMLid:"4a18a4a2a2",
        HTMLclass:"leave"
    },
node4a18a4a2a3 = {
        parent: node4a18a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôles en matière de police judiciaire générale"},
        HTMLid:"4a18a4a2a3",
        HTMLclass:"leave"
    },
node4a18a4a2a4 = {
        parent: node4a18a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôles en matière de police judiciaire particulière"},
        HTMLid:"4a18a4a2a4",
        HTMLclass:"leave"
    },
node4a18a4a2a5 = {
        parent: node4a18a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôles d'identité pour compenser la suppression des contrôles aux frontières résultant de l'application des accords de Schengen"},
        HTMLid:"4a18a4a2a5",
        HTMLclass:"leave"
    },
node4a18a4a3 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Perquisitions, visites domiciliaires et saisies"},
        HTMLid:"4a18a4a3",
    },
node4a18a4a3a1 = {
        parent: node4a18a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Perquisitions"},
        HTMLid:"4a18a4a3a1",
    },
node4a18a4a3a1a1 = {
        parent: node4a18a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties procédurales appropriées"},
        HTMLid:"4a18a4a3a1a1",
        HTMLclass:"leave"
    },
node4a18a4a3a1a2 = {
        parent: node4a18a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties procédurales non appropriées"},
        HTMLid:"4a18a4a3a1a2",
        HTMLclass:"leave"
    },
node4a18a4a3a1a3 = {
        parent: node4a18a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Perquisitions en matière fiscale"},
        HTMLid:"4a18a4a3a1a3",
        HTMLclass:"leave"
    },
node4a18a4a3a1a4 = {
        parent: node4a18a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Visites d'entreprises"},
        HTMLid:"4a18a4a3a1a4",
        HTMLclass:"leave"
    },
node4a18a4a4 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fouilles et visites de véhicules"},
        HTMLid:"4a18a4a4",
        HTMLclass:"leave"
    },
node4a18a4a5 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garde à vue"},
        HTMLid:"4a18a4a5",
    },
node4a18a4a5a1 = {
        parent: node4a18a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Information de l'autorité judiciaire"},
        HTMLid:"4a18a4a5a1",
        HTMLclass:"leave"
    },
node4a18a4a5a2 = {
        parent: node4a18a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prolongation du délai"},
        HTMLid:"4a18a4a5a2",
        HTMLclass:"leave"
    },
node4a18a4a5a3 = {
        parent: node4a18a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garde à vue et retenue des mineurs"},
        HTMLid:"4a18a4a5a3",
        HTMLclass:"leave"
    },
node4a18a4a6 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandats"},
        HTMLid:"4a18a4a6",
        HTMLclass:"leave"
    },
node4a18a4a7 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détention provisoire"},
        HTMLid:"4a18a4a7",
        HTMLclass:"leave"
    },
node4a18a4a7a1 = {
        parent: node4a18a4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détention provisoire des mineurs"},
        HTMLid:"4a18a4a7a1",
        HTMLclass:"leave"
    },
node4a18a4a7a2 = {
        parent: node4a18a4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Suspension de la décision de mise en liberté"},
        HTMLid:"4a18a4a7a2",
        HTMLclass:"leave"
    },
node4a18a4a7a3 = {
        parent: node4a18a4a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure en matière de détention provisoire"},
        HTMLid:"4a18a4a7a3",
        HTMLclass:"leave"
    },
node4a18a4a8 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injonction pénale"},
        HTMLid:"4a18a4a8",
        HTMLclass:"leave"
    },
node4a18a4a9 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en exécution immédiate d'une peine d'emprisonnement"},
        HTMLid:"4a18a4a9",
        HTMLclass:"leave"
    },
node4a18a4a10 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en zone d'attente (voir ci-dessus Droits des étrangers et droit d'asile)"},
        HTMLid:"4a18a4a10",
    },
node4a18a4a11 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétentions judiciaire et administrative (voir ci-dessus Droits des étrangers et droit d'asile)"},
        HTMLid:"4a18a4a11",
    },
node4a18a4a12 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétention de sûreté"},
        HTMLid:"4a18a4a12",
        HTMLclass:"leave"
    },
node4a18a4a13 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Surveillance électronique"},
        HTMLid:"4a18a4a13",
        HTMLclass:"leave"
    },
node4a18a4a14 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hospitalisation sans consentement des malades mentaux"},
        HTMLid:"4a18a4a14",
        HTMLclass:"leave"
    },
node4a18a4a15 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Placement en chambre de sûreté en cas d'ivresse publique"},
        HTMLid:"4a18a4a15",
        HTMLclass:"leave"
    },
node4a18a4a16 = {
        parent: node4a18a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assignation à résidence"},
        HTMLid:"4a18a4a16",
        HTMLclass:"leave"
    },
node4a19 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ PERSONNELLE"},
        HTMLid:"4a19",
    },
node4a19a1 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et liberté de se marier et de mettre fin au mariage"},
        HTMLid:"4a19a1",
    },
node4a19a1a1 = {
        parent: node4a19a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de se marier"},
        HTMLid:"4a19a1a1",
        HTMLclass:"leave"
    },
node4a19a1a2 = {
        parent: node4a19a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de mettre fin au mariage"},
        HTMLid:"4a19a1a2",
        HTMLclass:"leave"
    },
node4a19a2 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et droit du travail"},
        HTMLid:"4a19a2",
    },
node4a19a2a1 = {
        parent: node4a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle du salarié"},
        HTMLid:"4a19a2a1",
        HTMLclass:"leave"
    },
node4a19a2a2 = {
        parent: node4a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle de l'employeur"},
        HTMLid:"4a19a2a2",
        HTMLclass:"leave"
    },
node4a19a3 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et police administrative"},
        HTMLid:"4a19a3",
        HTMLclass:"leave"
    },
node4a19a4 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et protection des données à caractère personnel"},
        HTMLid:"4a19a4",
        HTMLclass:"leave"
    },
node4a19a5 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et prévention de la corruption"},
        HTMLid:"4a19a5",
        HTMLclass:"leave"
    },
node4a19a6 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et prévention de la récidive"},
        HTMLid:"4a19a6",
        HTMLclass:"leave"
    },
node4a19a7 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et protection de la santé"},
        HTMLid:"4a19a7",
        HTMLclass:"leave"
    },
node4a19a8 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et prélèvements biologiques"},
        HTMLid:"4a19a8",
        HTMLclass:"leave"
    },
node4a19a9 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et état militaire"},
        HTMLid:"4a19a9",
        HTMLclass:"leave"
    },
node4a19a10 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et contrôles d'identité"},
        HTMLid:"4a19a10",
        HTMLclass:"leave"
    },
node4a19a11 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et exercice de l'action civile"},
        HTMLid:"4a19a11",
        HTMLclass:"leave"
    },
node4a19a12 = {
        parent: node4a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté personnelle et imposition"},
        HTMLid:"4a19a12",
        HTMLclass:"leave"
    },
node4a20 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉ ET DROIT DE L'ENSEIGNEMENT"},
        HTMLid:"4a20",
    },
node4a20a1 = {
        parent: node4a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de l'enseignement"},
        HTMLid:"4a20a1",
        HTMLclass:"leave"
    },
node4a20a1a1 = {
        parent: node4a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation : Aide financière de l'État et des collectivités locales"},
        HTMLid:"4a20a1a1",
        HTMLclass:"leave"
    },
node4a20a1a2 = {
        parent: node4a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de conscience des maîtres des établissements d'enseignement privés"},
        HTMLid:"4a20a1a2",
        HTMLclass:"leave"
    },
node4a20a1a3 = {
        parent: node4a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du caractère propre des établissements d'enseignement privés"},
        HTMLid:"4a20a1a3",
        HTMLclass:"leave"
    },
node4a20a1a4 = {
        parent: node4a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Définition du besoin scolaire reconnu"},
        HTMLid:"4a20a1a4",
        HTMLclass:"leave"
    },
node4a20a2 = {
        parent: node4a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Universités"},
        HTMLid:"4a20a2",
    },
node4a20a2a1 = {
        parent: node4a20a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance des professeurs"},
        HTMLid:"4a20a2a1",
        HTMLclass:"leave"
    },
node4a20a2a2 = {
        parent: node4a20a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tutelle"},
        HTMLid:"4a20a2a2",
        HTMLclass:"leave"
    },
node4a21 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "LIBERTÉS ÉCONOMIQUES"},
        HTMLid:"4a21",
    },
node4a21a1 = {
        parent: node4a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté du commerce et de l'industrie"},
        HTMLid:"4a21a1",
        HTMLclass:"leave"
    },
node4a21a2 = {
        parent: node4a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'entreprendre"},
        HTMLid:"4a21a2",
    },
node4a21a2a1 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondement du principe"},
        HTMLid:"4a21a2a1",
        HTMLclass:"leave"
    },
node4a21a2a2 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a21a2a2",
        HTMLclass:"leave"
    },
node4a21a2a3 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a21a2a3",
        HTMLclass:"leave"
    },
node4a21a2a4 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application du principe"},
        HTMLid:"4a21a2a4",
        HTMLclass:"leave"
    },
node4a21a2a5 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation du principe"},
        HTMLid:"4a21a2a5",
        HTMLclass:"leave"
    },
node4a21a2a5a1 = {
        parent: node4a21a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec l'ordre public"},
        HTMLid:"4a21a2a5a1",
        HTMLclass:"leave"
    },
node4a21a2a5a2 = {
        parent: node4a21a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec l'intérêt général"},
        HTMLid:"4a21a2a5a2",
        HTMLclass:"leave"
    },
node4a21a2a5a3 = {
        parent: node4a21a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec des exigences de droit social"},
        HTMLid:"4a21a2a5a3",
        HTMLclass:"leave"
    },
node4a21a2a5a4 = {
        parent: node4a21a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avec des règles, principes ou objectifs de valeur constitutionnelle"},
        HTMLid:"4a21a2a5a4",
        HTMLclass:"leave"
    },
node4a21a2a6 = {
        parent: node4a21a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes découlant de la liberté d'entreprendre"},
        HTMLid:"4a21a2a6",
    },
node4a21a2a6a1 = {
        parent: node4a21a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Libre exercice de la profession médicale"},
        HTMLid:"4a21a2a6a1",
        HTMLclass:"leave"
    },
node4a21a2a6a2 = {
        parent: node4a21a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits et libertés de l'employeur"},
        HTMLid:"4a21a2a6a2",
        HTMLclass:"leave"
    },
node4a21a3 = {
        parent: node4a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'établissement"},
        HTMLid:"4a21a3",
        HTMLclass:"leave"
    },
node4a21a4 = {
        parent: node4a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'exercice d'une profession ou d'une activité économique"},
        HTMLid:"4a21a4",
        HTMLclass:"leave"
    },
node4a21a5 = {
        parent: node4a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Libre concurrence"},
        HTMLid:"4a21a5",
        HTMLclass:"leave"
    },
node4a22 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "NATIONALISATIONS ET TRANSFERTS D'ENTREPRISES DU SECTEUR PUBLIC AU SECTEUR PRIVÉ"},
        HTMLid:"4a22",
    },
node4a22a1 = {
        parent: node4a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalisations"},
        HTMLid:"4a22a1",
    },
node4a22a1a1 = {
        parent: node4a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critère de la nationalisation"},
        HTMLid:"4a22a1a1",
        HTMLclass:"leave"
    },
node4a22a1a2 = {
        parent: node4a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence législative et principes des nationalisations"},
        HTMLid:"4a22a1a2",
        HTMLclass:"leave"
    },
node4a22a1a3 = {
        parent: node4a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indemnisations"},
        HTMLid:"4a22a1a3",
        HTMLclass:"leave"
    },
node4a22a1a4 = {
        parent: node4a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets des nationalisations"},
        HTMLid:"4a22a1a4",
        HTMLclass:"leave"
    },
node4a22a2 = {
        parent: node4a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transferts d'entreprises du secteur public au secteur privé"},
        HTMLid:"4a22a2",
    },
node4a22a2a1 = {
        parent: node4a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a22a2a1",
    },
node4a22a2a1a1 = {
        parent: node4a22a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"4a22a2a1a1",
        HTMLclass:"leave"
    },
node4a22a2a1a2 = {
        parent: node4a22a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public national"},
        HTMLid:"4a22a2a1a2",
        HTMLclass:"leave"
    },
node4a22a2a1a3 = {
        parent: node4a22a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Monopole de fait"},
        HTMLid:"4a22a2a1a3",
        HTMLclass:"leave"
    },
node4a22a2a2 = {
        parent: node4a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fixation de la valeur des entreprises publiques transférées au secteur privé"},
        HTMLid:"4a22a2a2",
    },
node4a22a2a2a1 = {
        parent: node4a22a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"4a22a2a2a1",
        HTMLclass:"leave"
    },
node4a22a3 = {
        parent: node4a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mode de gestion des entreprises du secteur public"},
        HTMLid:"4a22a3",
        HTMLclass:"leave"
    },
node4a23 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPES DE DROIT PÉNAL ET DE PROCÉDURE PÉNALE"},
        HTMLid:"4a23",
    },
node4a23a1 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application des principes de l'article 8 de la Déclaration de 1789"},
        HTMLid:"4a23a1",
        HTMLclass:"leave"
    },
node4a23a1a1 = {
        parent: node4a23a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanction ayant le caractère d'une punition"},
        HTMLid:"4a23a1a1",
    },
node4a23a1a1a1 = {
        parent: node4a23a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critères"},
        HTMLid:"4a23a1a1a1",
        HTMLclass:"leave"
    },
node4a23a1a1a2 = {
        parent: node4a23a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Périodes ou mesures de sûreté qui assortissent les peines"},
        HTMLid:"4a23a1a1a2",
        HTMLclass:"leave"
    },
node4a23a1a1a3 = {
        parent: node4a23a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incapacités"},
        HTMLid:"4a23a1a1a3",
        HTMLclass:"leave"
    },
node4a23a1a2 = {
        parent: node4a23a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures n'ayant pas le caractère d'une punition"},
        HTMLid:"4a23a1a2",
    },
node4a23a1a2a1 = {
        parent: node4a23a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures de police"},
        HTMLid:"4a23a1a2a1",
        HTMLclass:"leave"
    },
node4a23a1a2a2 = {
        parent: node4a23a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures de rétention"},
        HTMLid:"4a23a1a2a2",
        HTMLclass:"leave"
    },
node4a23a1a2a3 = {
        parent: node4a23a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures d'exécution des peines"},
        HTMLid:"4a23a1a2a3",
        HTMLclass:"leave"
    },
node4a23a1a2a4 = {
        parent: node4a23a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres mesures n'ayant pas le caractère d'une punition"},
        HTMLid:"4a23a1a2a4",
        HTMLclass:"leave"
    },
node4a23a1a2a4 = {
        parent: node4a23a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres mesures n'ayant pas le caractère d'une punition)"},
        HTMLid:"4a23a1a2a4",
        HTMLclass:"leave"
    },
node4a23a1a3 = {
        parent: node4a23a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transposition en matière de répression administrative"},
        HTMLid:"4a23a1a3",
        HTMLclass:"leave"
    },
node4a23a2 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de la légalité des délits et des peines"},
        HTMLid:"4a23a2",
    },
node4a23a2a1 = {
        parent: node4a23a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a23a2a1",
    },
node4a23a2a1a1 = {
        parent: node4a23a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a23a2a1a1",
        HTMLclass:"leave"
    },
node4a23a2a1a2 = {
        parent: node4a23a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a23a2a1a2",
    },
node4a23a2a1a2a1 = {
        parent: node4a23a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de méconnaissance de la compétence du législateur"},
        HTMLid:"4a23a2a1a2a1",
        HTMLclass:"leave"
    },
node4a23a2a1a2a2 = {
        parent: node4a23a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance de la compétence du législateur"},
        HTMLid:"4a23a2a1a2a2",
        HTMLclass:"leave"
    },
node4a23a2a1a2a3 = {
        parent: node4a23a2a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation stricte de la loi pénale"},
        HTMLid:"4a23a2a1a2a3",
        HTMLclass:"leave"
    },
node4a23a2a2 = {
        parent: node4a23a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validité de la pratique des renvois"},
        HTMLid:"4a23a2a2",
        HTMLclass:"leave"
    },
node4a23a3 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes de nécessité et de proportionnalité"},
        HTMLid:"4a23a3",
    },
node4a23a3a1 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature du contrôle du Conseil constitutionnel"},
        HTMLid:"4a23a3a1",
    },
node4a23a3a1a1 = {
        parent: node4a23a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'erreur manifeste d'appréciation"},
        HTMLid:"4a23a3a1a1",
        HTMLclass:"leave"
    },
node4a23a3a1a2 = {
        parent: node4a23a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation avec l'ordre public ou d'autres exigences constitutionnelles"},
        HTMLid:"4a23a3a1a2",
        HTMLclass:"leave"
    },
node4a23a3a2 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de méconnaissance des principes de nécessité et de proportionnalité des peines"},
        HTMLid:"4a23a3a2",
        HTMLclass:"leave"
    },
node4a23a3a2a1 = {
        parent: node4a23a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des infractions et des peines"},
        HTMLid:"4a23a3a2a1",
        HTMLclass:"leave"
    },
node4a23a3a2a2 = {
        parent: node4a23a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures de sûreté qui assortissent les peines"},
        HTMLid:"4a23a3a2a2",
        HTMLclass:"leave"
    },
node4a23a3a2a3 = {
        parent: node4a23a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure pénale"},
        HTMLid:"4a23a3a2a3",
        HTMLclass:"leave"
    },
node4a23a3a2a4 = {
        parent: node4a23a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exécution des peines"},
        HTMLid:"4a23a3a2a4",
        HTMLclass:"leave"
    },
node4a23a3a3 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Méconnaissance des principes de nécessité et de proportionnalité des peines"},
        HTMLid:"4a23a3a3",
        HTMLclass:"leave"
    },
node4a23a3a4 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe Non bis in idem"},
        HTMLid:"4a23a3a4",
        HTMLclass:"leave"
    },
node4a23a3a5 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-cumul des peines"},
        HTMLid:"4a23a3a5",
        HTMLclass:"leave"
    },
node4a23a3a6 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-automaticité des peines"},
        HTMLid:"4a23a3a6",
        HTMLclass:"leave"
    },
node4a23a3a7 = {
        parent: node4a23a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rétroactivité de la loi pénale plus douce"},
        HTMLid:"4a23a3a7",
        HTMLclass:"leave"
    },
node4a23a4 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de non-rétroactivité de la loi pénale plus sévère"},
        HTMLid:"4a23a4",
    },
node4a23a4a1 = {
        parent: node4a23a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application (voir également ci-dessus Champ d'application des principes de l'article 8 de la Déclaration de 1789)"},
        HTMLid:"4a23a4a1",
    },
node4a23a4a1a1 = {
        parent: node4a23a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a23a4a1a1",
        HTMLclass:"leave"
    },
node4a23a4a1a2 = {
        parent: node4a23a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures n'entrant pas dans le champ du principe de non-rétroactivité de la loi pénale plus sévère"},
        HTMLid:"4a23a4a1a2",
        HTMLclass:"leave"
    },
node4a23a4a2 = {
        parent: node4a23a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications du principe de non-rétroactivité de la loi pénale plus sévère"},
        HTMLid:"4a23a4a2",
        HTMLclass:"leave"
    },
node4a23a5 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'individualisation des peines"},
        HTMLid:"4a23a5",
        HTMLclass:"leave"
    },
node4a23a5a1 = {
        parent: node4a23a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Valeur constitutionnelle"},
        HTMLid:"4a23a5a1",
    },
node4a23a5a1a1 = {
        parent: node4a23a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décisions antérieures à la reconnaissance de la pleine valeur constitutionnelle"},
        HTMLid:"4a23a5a1a1",
        HTMLclass:"leave"
    },
node4a23a5a1a2 = {
        parent: node4a23a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rattachement à l'article 8 de la Déclaration de 1789"},
        HTMLid:"4a23a5a1a2",
        HTMLclass:"leave"
    },
node4a23a6 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Justice pénale des mineurs"},
        HTMLid:"4a23a6",
    },
node4a23a6a1 = {
        parent: node4a23a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Existence d'un principe fondamental reconnu par les lois de la République en matière de justice pénale des mineurs"},
        HTMLid:"4a23a6a1",
        HTMLclass:"leave"
    },
node4a23a6a2 = {
        parent: node4a23a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des mesures propres à la justice pénale des mineurs"},
        HTMLid:"4a23a6a2",
    },
node4a23a6a2a1 = {
        parent: node4a23a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle sur le fondement de l'article 9 de la Déclaration de 1789"},
        HTMLid:"4a23a6a2a1",
        HTMLclass:"leave"
    },
node4a23a6a2a2 = {
        parent: node4a23a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle sur le fondement de l'article 16 de la Déclaration de 1789"},
        HTMLid:"4a23a6a2a2",
        HTMLclass:"leave"
    },
node4a23a6a2a3 = {
        parent: node4a23a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle sur le fondement du principe fondamental"},
        HTMLid:"4a23a6a2a3",
    },
node4a23a6a2a3a1 = {
        parent: node4a23a6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanctions éducatives et peines"},
        HTMLid:"4a23a6a2a3a1",
        HTMLclass:"leave"
    },
node4a23a6a2a3a2 = {
        parent: node4a23a6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres dispositions"},
        HTMLid:"4a23a6a2a3a2",
        HTMLclass:"leave"
    },
node4a23a7 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité pénale"},
        HTMLid:"4a23a7",
    },
node4a23a7a1 = {
        parent: node4a23a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de responsabilité personnelle"},
        HTMLid:"4a23a7a1",
        HTMLclass:"leave"
    },
node4a23a7a2 = {
        parent: node4a23a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élément intentionnel de l'infraction"},
        HTMLid:"4a23a7a2",
    },
node4a23a7a2a1 = {
        parent: node4a23a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"4a23a7a2a1",
        HTMLclass:"leave"
    },
node4a23a7a2a2 = {
        parent: node4a23a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Altération des facultés mentales"},
        HTMLid:"4a23a7a2a2",
        HTMLclass:"leave"
    },
node4a23a7a2a3 = {
        parent: node4a23a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Erreur de droit"},
        HTMLid:"4a23a7a2a3",
        HTMLclass:"leave"
    },
node4a23a8 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présomption d'innocence"},
        HTMLid:"4a23a8",
    },
node4a23a8a1 = {
        parent: node4a23a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime"},
        HTMLid:"4a23a8a1",
        HTMLclass:"leave"
    },
node4a23a8a2 = {
        parent: node4a23a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de l'interdiction des présomptions de culpabilité en matière répressive"},
        HTMLid:"4a23a8a2",
        HTMLclass:"leave"
    },
node4a23a9 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des droits de la défense, droit à un procès équitable et droit à un recours juridictionnel effectif en matière pénale"},
        HTMLid:"4a23a9",
    },
node4a23a9a1 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fondement constitutionnel"},
        HTMLid:"4a23a9a1",
        HTMLclass:"leave"
    },
node4a23a9a2 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a23a9a2",
        HTMLclass:"leave"
    },
node4a23a9a3 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application du principe"},
        HTMLid:"4a23a9a3",
        HTMLclass:"leave"
    },
node4a23a9a4 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanctions administratives (voir également Titre 15 Autorités indépendantes)"},
        HTMLid:"4a23a9a4",
    },
node4a23a9a4a1 = {
        parent: node4a23a9a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions ne méconnaissant pas le respect des droits de la défense"},
        HTMLid:"4a23a9a4a1",
        HTMLclass:"leave"
    },
node4a23a9a4a2 = {
        parent: node4a23a9a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions méconnaissant le respect des droits de la défense"},
        HTMLid:"4a23a9a4a2",
        HTMLclass:"leave"
    },
node4a23a9a5 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'ensemble d'une procédure pénale"},
        HTMLid:"4a23a9a5",
        HTMLclass:"leave"
    },
node4a23a9a6 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions relevant de la procédure d'enquête et d'instruction"},
        HTMLid:"4a23a9a6",
        HTMLclass:"leave"
    },
node4a23a9a6a1 = {
        parent: node4a23a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes d'investigation"},
        HTMLid:"4a23a9a6a1",
        HTMLclass:"leave"
    },
node4a23a9a6a2 = {
        parent: node4a23a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garde à vue"},
        HTMLid:"4a23a9a6a2",
        HTMLclass:"leave"
    },
node4a23a9a6a3 = {
        parent: node4a23a9a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Instruction"},
        HTMLid:"4a23a9a6a3",
        HTMLclass:"leave"
    },
node4a23a9a7 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions en matière de poursuites et d'alternatives aux poursuites"},
        HTMLid:"4a23a9a7",
    },
node4a23a9a7a1 = {
        parent: node4a23a9a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Choix des poursuites"},
        HTMLid:"4a23a9a7a1",
        HTMLclass:"leave"
    },
node4a23a9a7a2 = {
        parent: node4a23a9a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures dérogatoires nécessitant l'accord de la personne mise en cause"},
        HTMLid:"4a23a9a7a2",
    },
node4a23a9a7a2a1 = {
        parent: node4a23a9a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amende forfaitaire"},
        HTMLid:"4a23a9a7a2a1",
        HTMLclass:"leave"
    },
node4a23a9a7a2a2 = {
        parent: node4a23a9a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injonction pénale"},
        HTMLid:"4a23a9a7a2a2",
        HTMLclass:"leave"
    },
node4a23a9a7a2a3 = {
        parent: node4a23a9a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnance pénale"},
        HTMLid:"4a23a9a7a2a3",
        HTMLclass:"leave"
    },
node4a23a9a7a2a4 = {
        parent: node4a23a9a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Comparution sur reconnaissance préalable de culpabilité"},
        HTMLid:"4a23a9a7a2a4",
        HTMLclass:"leave"
    },
node4a23a9a7a2a5 = {
        parent: node4a23a9a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transaction sur l'action publique"},
        HTMLid:"4a23a9a7a2a5",
        HTMLclass:"leave"
    },
node4a23a9a8 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Phase de jugement et prononcé des peines"},
        HTMLid:"4a23a9a8",
        HTMLclass:"leave"
    },
node4a23a9a9 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des peines"},
        HTMLid:"4a23a9a9",
        HTMLclass:"leave"
    },
node4a23a9a10 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "voies de recours"},
        HTMLid:"4a23a9a10",
        HTMLclass:"leave"
    },
node4a23a9a11 = {
        parent: node4a23a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure d'extradition"},
        HTMLid:"4a23a9a11",
        HTMLclass:"leave"
    },
node4a23a10 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garantie résultant de l'intervention d'une autorité juridictionnelle"},
        HTMLid:"4a23a10",
    },
node4a23a10a1 = {
        parent: node4a23a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de la rigueur nécessaire des actes de procédure pénale"},
        HTMLid:"4a23a10a1",
        HTMLclass:"leave"
    },
node4a23a10a2 = {
        parent: node4a23a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prononcé des peines et sanctions ayant le caractère d'une punition"},
        HTMLid:"4a23a10a2",
        HTMLclass:"leave"
    },
node4a23a10a3 = {
        parent: node4a23a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exécution des peines"},
        HTMLid:"4a23a10a3",
        HTMLclass:"leave"
    },
node4a23a11 = {
        parent: node4a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amnistie"},
        HTMLid:"4a23a11",
    },
node4a23a11a1 = {
        parent: node4a23a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'amnistie"},
        HTMLid:"4a23a11a1",
    },
node4a23a11a1a1 = {
        parent: node4a23a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"4a23a11a1a1",
        HTMLclass:"leave"
    },
node4a23a11a1a2 = {
        parent: node4a23a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"4a23a11a1a2",
        HTMLclass:"leave"
    },
node4a23a11a1a3 = {
        parent: node4a23a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présomption d'innocence"},
        HTMLid:"4a23a11a1a3",
        HTMLclass:"leave"
    },
node4a23a11a1a4 = {
        parent: node4a23a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limites"},
        HTMLid:"4a23a11a1a4",
        HTMLclass:"leave"
    },
node4a24 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PRINCIPE DE LAÏCITÉ"},
        HTMLid:"4a24",
    },
node4a24a1 = {
        parent: node4a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée du principe"},
        HTMLid:"4a24a1",
        HTMLclass:"leave"
    },
node4a24a2 = {
        parent: node4a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"4a24a2",
        HTMLclass:"leave"
    },
node4a25 = {
        parent: node4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT D'ACCÈS AUX DOCUMENTS D'ARCHIVES PUBLIQUES"},
        HTMLid:"4a25",
        HTMLclass:"leave"
    },
tree_config4 = [config,node4,node4a1,node4a1a1,node4a1a1a1,node4a1a1a2,node4a1a1a3,node4a1a1a4,node4a1a1a5,node4a1a1a6,node4a1a1a7,node4a1a1a8,node4a1a1a9,node4a1a1a10,node4a1a1a11,node4a1a1a12,node4a1a1a13,node4a1a1a14,node4a1a2,node4a1a2a1,node4a1a2a2,node4a1a2a3,node4a1a2a4,node4a1a2a5,node4a1a2a6,node4a1a2a7,node4a1a2a8,node4a1a2a9,node4a1a2a10,node4a1a3,node4a1a3a1,node4a1a4,node4a1a4a1,node4a1a4a2,node4a1a4a3,node4a1a4a4,node4a1a4a5,node4a1a4a6,node4a1a4a7,node4a1a4a8,node4a1a5,node4a1a5a1,node4a1a5a2,node4a1a5a3,node4a1a5a4,node4a1a6,node4a1a6a1,node4a1a6a2,node4a1a7,node4a1a7a1,node4a1a7a2,node4a1a7a3,node4a1a7a4,node4a1a7a5,node4a1a7a6,node4a2,node4a2a1,node4a2a1a1,node4a2a1a1a1,node4a2a1a1a2,node4a2a1a2,node4a2a1a2a1,node4a2a1a2a2,node4a2a2,node4a2a2a1,node4a2a2a2,node4a2a2a3,node4a2a2a3a1,node4a2a2a3a2,node4a2a2a3a3,node4a2a2a3a4,node4a2a2a3a5,node4a2a2a4,node4a2a2a4a1,node4a2a2a4a1a1,node4a2a2a4a2,node4a2a2a4a2a1,node4a2a2a4a2a2,node4a2a2a4a2a2a1,node4a2a2a4a2a2a2,node4a2a2a4a2a2a3,node4a2a2a4a2a2a4,node4a2a2a4a2a2a5,node4a2a2a4a2a2a6,node4a2a2a4a2a2a7,node4a2a2a4a2a2a8,node4a2a2a4a3,node4a2a2a4a4,node4a2a2a5,node4a2a2a6,node4a2a3,node4a2a3a1,node4a2a3a2,node4a3,node4a3a1,node4a3a2,node4a3a2a1,node4a3a2a2,node4a3a2a3,node4a3a2a4,node4a3a2a5,node4a4,node4a4a1,node4a4a2,node4a4a3,node4a4a3a1,node4a4a3a2,node4a4a3a3,node4a4a3a4,node4a4a4,node4a4a5,node4a5,node4a5a1,node4a5a2,node4a5a2a1,node4a5a2a1a1,node4a5a2a1a2,node4a5a2a1a3,node4a5a2a1a4,node4a5a2a1a5,node4a5a2a2,node4a5a2a3,node4a5a2a4,node4a5a2a5,node4a5a2a6,node4a5a2a7,node4a5a2a8,node4a5a2a9,node4a5a3,node4a5a4,node4a5a5,node4a5a6,node4a5a7,node4a5a8,node4a5a9,node4a5a9a1,node4a5a9a2,node4a5a9a3,node4a5a10,node4a5a11,node4a5a11a1,node4a5a11a2,node4a5a11a3,node4a5a11a4,node4a5a11a5,node4a5a11a6,node4a5a12,node4a5a13,node4a5a14,node4a5a15,node4a6,node4a6a1,node4a6a2,node4a6a3,node4a6a4,node4a6a4a1,node4a6a4a2,node4a6a5,node4a6a5a1,node4a6a5a2,node4a7,node4a7a1,node4a7a1a1,node4a7a1a2,node4a7a1a3,node4a7a2,node4a7a2a1,node4a7a2a2,node4a7a2a2a1,node4a7a2a2a2,node4a7a2a2a3,node4a7a2a2a3a1,node4a7a2a2a3a2,node4a7a2a2a4,node4a7a3,node4a7a3a1,node4a7a3a1a1,node4a7a3a1a2,node4a7a3a2,node4a7a3a2a1,node4a7a3a2a2,node4a7a4,node4a7a4a1,node4a7a4a2,node4a7a4a3,node4a7a4a3a1,node4a7a4a3a2,node4a7a4a4,node4a7a5,node4a7a5a1,node4a7a5a2,node4a7a5a3,node4a8,node4a9,node4a9a1,node4a9a1a1,node4a9a1a1a1,node4a9a1a1a1a1,node4a9a1a1a1a2,node4a9a1a1a1a3,node4a9a1a1a2,node4a9a1a1a2a1,node4a9a1a1a2a2,node4a9a1a1a2a3,node4a9a1a1a2a4,node4a9a1a1a2a5,node4a9a1a1a3,node4a9a1a1a3a1,node4a9a1a1a3a2,node4a9a1a1a3a3,node4a9a1a1a3a4,node4a9a1a1a4,node4a9a1a1a4a1,node4a9a1a1a4a2,node4a9a1a1a4a3,node4a9a1a1a5,node4a9a1a2,node4a9a1a2a1,node4a9a1a2a2,node4a9a1a2a2a1,node4a9a1a2a2a2,node4a9a1a2a2a3,node4a9a1a2a2a4,node4a9a1a2a3,node4a9a1a2a3a1,node4a9a1a2a3a2,node4a9a1a2a3a3,node4a9a1a2a3a4,node4a9a1a2a4,node4a9a1a2a4a1,node4a9a1a2a4a2,node4a9a1a3,node4a9a1a3a1,node4a9a1a3a2,node4a9a1a3a2a1,node4a9a1a3a2a2,node4a9a1a4,node4a9a1a4a1,node4a9a1a4a2,node4a9a1a4a3,node4a9a2,node4a9a2a1,node4a9a2a1a1,node4a9a2a1a2,node4a9a2a1a2a1,node4a9a2a1a2a2,node4a9a2a1a2a3,node4a9a2a1a2a4,node4a9a2a2,node4a10,node4a10a1,node4a10a1a1,node4a10a1a1a1,node4a10a1a1a2,node4a10a1a1a3,node4a10a1a1a4,node4a10a1a1a5,node4a10a1a2,node4a10a1a3,node4a10a1a4,node4a10a2,node4a10a3,node4a10a3a1,node4a10a3a2,node4a10a3a3,node4a10a3a3a1,node4a10a3a3a2,node4a10a4,node4a10a4a1,node4a10a4a2,node4a10a4a3,node4a10a5,node4a10a5a1,node4a10a5a1a1,node4a10a5a1a2,node4a10a5a1a3,node4a10a5a2,node4a10a5a2a1,node4a10a5a2a2,node4a10a5a2a3,node4a10a5a2a4,node4a10a5a2a5,node4a10a5a2a6,node4a10a5a2a7,node4a10a5a2a8,node4a10a5a2a9,node4a10a5a2a10,node4a10a5a2a11,node4a10a6,node4a11,node4a11a1,node4a11a2,node4a11a3,node4a11a4,node4a11a5,node4a11a6,node4a11a6a1,node4a11a6a2,node4a11a6a3,node4a11a6a4,node4a12,node4a12a1,node4a12a1a1,node4a12a1a2,node4a12a2,node4a12a2a1,node4a12a2a2,node4a12a3,node4a12a3a1,node4a12a3a2,node4a12a3a3,node4a12a3a4,node4a12a4,node4a12a4a1,node4a12a4a2,node4a12a4a2a1,node4a12a4a2a1a1,node4a12a4a2a1a2,node4a12a4a2a2,node4a12a4a3,node4a12a4a3a1,node4a12a4a3a1a1,node4a12a4a3a1a2,node4a12a4a3a2,node4a12a4a3a2a1,node4a12a4a3a2a2,node4a12a4a3a3,node4a12a4a3a4,node4a12a4a3a4a1,node4a12a4a3a4a2,node4a12a4a3a4a3,node4a12a4a3a4a4,node4a12a4a3a5,node4a12a4a4,node4a12a4a4a1,node4a12a4a4a1a1,node4a12a4a4a1a2,node4a12a4a4a2,node4a12a4a4a3,node4a12a4a5,node4a12a4a5a1,node4a12a4a5a2,node4a12a4a6,node4a12a5,node4a12a5a1,node4a12a5a2,node4a12a6,node4a12a6a1,node4a12a6a1a1,node4a12a6a1a2,node4a12a6a2,node4a12a6a3,node4a12a6a3a1,node4a12a6a3a2,node4a12a6a3a3,node4a12a6a3a3a1,node4a12a6a3a3a2,node4a12a6a3a3a3,node4a12a6a4,node4a12a6a5,node4a12a6a5a1,node4a12a6a5a2,node4a12a6a5a2a1,node4a12a6a5a2a2,node4a13,node4a13a1,node4a13a1a1,node4a13a1a2,node4a13a1a3,node4a13a1a3a1,node4a13a1a3a2,node4a13a1a3a3,node4a13a2,node4a13a2a1,node4a13a2a2,node4a13a2a2a1,node4a13a2a2a2,node4a14,node4a15,node4a15a1,node4a15a2,node4a15a2a1,node4a15a2a2,node4a15a2a3,node4a15a3,node4a16,node4a16a1,node4a16a1a1,node4a16a1a2,node4a16a1a2a1,node4a16a1a2a2,node4a16a1a3,node4a16a2,node4a16a2a1,node4a16a2a2,node4a16a2a2a1,node4a16a3,node4a16a3a1,node4a16a3a1a1,node4a16a3a1a2,node4a16a3a1a3,node4a16a3a1a4,node4a16a3a2,node4a16a4,node4a16a4a1,node4a16a4a1a1,node4a16a4a1a2,node4a16a4a1a3,node4a16a4a1a4,node4a16a4a2,node4a16a4a3,node4a16a4a4,node4a16a5,node4a16a5a1,node4a16a5a2,node4a16a5a3,node4a16a5a4,node4a16a5a5,node4a17,node4a17a1,node4a17a2,node4a18,node4a18a1,node4a18a2,node4a18a2a1,node4a18a2a1a1,node4a18a2a1a2,node4a18a2a1a3,node4a18a2a1a4,node4a18a2a1a5,node4a18a2a1a6,node4a18a2a1a7,node4a18a2a2,node4a18a2a2a1,node4a18a2a2a1a1,node4a18a2a2a1a2,node4a18a2a2a2,node4a18a2a2a3,node4a18a2a3,node4a18a2a3a1,node4a18a2a3a2,node4a18a2a4,node4a18a3,node4a18a3a1,node4a18a3a1a1,node4a18a3a1a2,node4a18a3a1a3,node4a18a3a2,node4a18a3a2a1,node4a18a3a2a2,node4a18a3a2a2a1,node4a18a3a2a2a2,node4a18a3a2a2a3,node4a18a3a2a2a4,node4a18a3a2a3,node4a18a4,node4a18a4a1,node4a18a4a2,node4a18a4a2a1,node4a18a4a2a2,node4a18a4a2a3,node4a18a4a2a4,node4a18a4a2a5,node4a18a4a3,node4a18a4a3a1,node4a18a4a3a1a1,node4a18a4a3a1a2,node4a18a4a3a1a3,node4a18a4a3a1a4,node4a18a4a4,node4a18a4a5,node4a18a4a5a1,node4a18a4a5a2,node4a18a4a5a3,node4a18a4a6,node4a18a4a7,node4a18a4a7a1,node4a18a4a7a2,node4a18a4a7a3,node4a18a4a8,node4a18a4a9,node4a18a4a10,node4a18a4a11,node4a18a4a12,node4a18a4a13,node4a18a4a14,node4a18a4a15,node4a18a4a16,node4a19,node4a19a1,node4a19a1a1,node4a19a1a2,node4a19a2,node4a19a2a1,node4a19a2a2,node4a19a3,node4a19a4,node4a19a5,node4a19a6,node4a19a7,node4a19a8,node4a19a9,node4a19a10,node4a19a11,node4a19a12,node4a20,node4a20a1,node4a20a1a1,node4a20a1a2,node4a20a1a3,node4a20a1a4,node4a20a2,node4a20a2a1,node4a20a2a2,node4a21,node4a21a1,node4a21a2,node4a21a2a1,node4a21a2a2,node4a21a2a3,node4a21a2a4,node4a21a2a5,node4a21a2a5a1,node4a21a2a5a2,node4a21a2a5a3,node4a21a2a5a4,node4a21a2a6,node4a21a2a6a1,node4a21a2a6a2,node4a21a3,node4a21a4,node4a21a5,node4a22,node4a22a1,node4a22a1a1,node4a22a1a2,node4a22a1a3,node4a22a1a4,node4a22a2,node4a22a2a1,node4a22a2a1a1,node4a22a2a1a2,node4a22a2a1a3,node4a22a2a2,node4a22a2a2a1,node4a22a3,node4a23,node4a23a1,node4a23a1a1,node4a23a1a1a1,node4a23a1a1a2,node4a23a1a1a3,node4a23a1a2,node4a23a1a2a1,node4a23a1a2a2,node4a23a1a2a3,node4a23a1a2a4,node4a23a1a2a4,node4a23a1a3,node4a23a2,node4a23a2a1,node4a23a2a1a1,node4a23a2a1a2,node4a23a2a1a2a1,node4a23a2a1a2a2,node4a23a2a1a2a3,node4a23a2a2,node4a23a3,node4a23a3a1,node4a23a3a1a1,node4a23a3a1a2,node4a23a3a2,node4a23a3a2a1,node4a23a3a2a2,node4a23a3a2a3,node4a23a3a2a4,node4a23a3a3,node4a23a3a4,node4a23a3a5,node4a23a3a6,node4a23a3a7,node4a23a4,node4a23a4a1,node4a23a4a1a1,node4a23a4a1a2,node4a23a4a2,node4a23a5,node4a23a5a1,node4a23a5a1a1,node4a23a5a1a2,node4a23a6,node4a23a6a1,node4a23a6a2,node4a23a6a2a1,node4a23a6a2a2,node4a23a6a2a3,node4a23a6a2a3a1,node4a23a6a2a3a2,node4a23a7,node4a23a7a1,node4a23a7a2,node4a23a7a2a1,node4a23a7a2a2,node4a23a7a2a3,node4a23a8,node4a23a8a1,node4a23a8a2,node4a23a9,node4a23a9a1,node4a23a9a2,node4a23a9a3,node4a23a9a4,node4a23a9a4a1,node4a23a9a4a2,node4a23a9a5,node4a23a9a6,node4a23a9a6a1,node4a23a9a6a2,node4a23a9a6a3,node4a23a9a7,node4a23a9a7a1,node4a23a9a7a2,node4a23a9a7a2a1,node4a23a9a7a2a2,node4a23a9a7a2a3,node4a23a9a7a2a4,node4a23a9a7a2a5,node4a23a9a8,node4a23a9a9,node4a23a9a10,node4a23a9a11,node4a23a10,node4a23a10a1,node4a23a10a2,node4a23a10a3,node4a23a11,node4a23a11a1,node4a23a11a1a1,node4a23a11a1a2,node4a23a11a1a3,node4a23a11a1a4,node4a24,node4a24a1,node4a24a2,node4a25];

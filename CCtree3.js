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
node3 = {
        childrenDropLevel: 1,
        text:{name: "NORMES LÉGISLATIVES ET RÉGLEMENTAIRES"},
        HTMLid:"3",
    },
node3a1 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PROCÉDURE D'ÉLABORATION DES LOIS"},
        HTMLid:"3a1",
    },
node3a2 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CONDITIONS DE RECOURS À LA LOI"},
        HTMLid:"3a2",
    },
node3a2a1 = {
        parent: node3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation souveraine de l'opportunité de la loi dans le respect de la Constitution"},
        HTMLid:"3a2a1",
        HTMLclass:"leave"
    },
node3a2a2 = {
        parent: node3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application de la loi"},
        HTMLid:"3a2a2",
        HTMLclass:"leave"
    },
node3a2a2a1 = {
        parent: node3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine électoral"},
        HTMLid:"3a2a2a1",
        HTMLclass:"leave"
    },
node3a2a2a2 = {
        parent: node3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits et libertés"},
        HTMLid:"3a2a2a2",
        HTMLclass:"leave"
    },
node3a2a2a3 = {
        parent: node3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine économique et social"},
        HTMLid:"3a2a2a3",
        HTMLclass:"leave"
    },
node3a2a2a4 = {
        parent: node3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions de toutes natures"},
        HTMLid:"3a2a2a4",
        HTMLclass:"leave"
    },
node3a2a2a5 = {
        parent: node3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Codification"},
        HTMLid:"3a2a2a5",
        HTMLclass:"leave"
    },
node3a2a3 = {
        parent: node3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Catégories de lois"},
        HTMLid:"3a2a3",
    },
node3a2a3a1 = {
        parent: node3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition entre catégories de lois"},
        HTMLid:"3a2a3a1",
    },
node3a2a3a1a1 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi ordinaire / Constitution"},
        HTMLid:"3a2a3a1a1",
        HTMLclass:"leave"
    },
node3a2a3a1a2 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi / loi organique"},
        HTMLid:"3a2a3a1a2",
        HTMLclass:"leave"
    },
node3a2a3a1a3 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi / loi de finances"},
        HTMLid:"3a2a3a1a3",
        HTMLclass:"leave"
    },
node3a2a3a1a4 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi / loi de financement de la sécurité sociale"},
        HTMLid:"3a2a3a1a4",
        HTMLclass:"leave"
    },
node3a2a3a1a5 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi / loi de programmation des finances publiques"},
        HTMLid:"3a2a3a1a5",
        HTMLclass:"leave"
    },
node3a2a3a1a6 = {
        parent: node3a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition loi de finances / loi de financement de la sécurité sociale"},
        HTMLid:"3a2a3a1a6",
    },
node3a2a3a2 = {
        parent: node3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois spécifiques"},
        HTMLid:"3a2a3a2",
    },
node3a2a3a2a1 = {
        parent: node3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de programme (jusqu'en 2008)"},
        HTMLid:"3a2a3a2a1",
        HTMLclass:"leave"
    },
node3a2a3a2a2 = {
        parent: node3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de programmation (à partir de 2008)"},
        HTMLid:"3a2a3a2a2",
        HTMLclass:"leave"
    },
node3a2a3a2a3 = {
        parent: node3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de programmation des finances publiques"},
        HTMLid:"3a2a3a2a3",
        HTMLclass:"leave"
    },
node3a2a3a2a4 = {
        parent: node3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi approuvant un rapport"},
        HTMLid:"3a2a3a2a4",
        HTMLclass:"leave"
    },
node3a2a3a2a5 = {
        parent: node3a2a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois expérimentales (article 37-1 de la Constitution)"},
        HTMLid:"3a2a3a2a5",
        HTMLclass:"leave"
    },
node3a2a3a2a5a1 = {
        parent: node3a2a3a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Économie et emploi"},
        HTMLid:"3a2a3a2a5a1",
        HTMLclass:"leave"
    },
node3a2a3a2a5a2 = {
        parent: node3a2a3a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affaires sanitaires et sociales"},
        HTMLid:"3a2a3a2a5a2",
        HTMLclass:"leave"
    },
node3a2a3a2a5a3 = {
        parent: node3a2a3a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement"},
        HTMLid:"3a2a3a2a5a3",
        HTMLclass:"leave"
    },
node3a2a3a2a5a4 = {
        parent: node3a2a3a2a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Justice et libertés publiques"},
        HTMLid:"3a2a3a2a5a4",
        HTMLclass:"leave"
    },
node3a2a3a3 = {
        parent: node3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi et engagement international"},
        HTMLid:"3a2a3a3",
    },
node3a2a3a4 = {
        parent: node3a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi et outre-mer"},
        HTMLid:"3a2a3a4",
    },
node3a3 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉTENDUE ET LIMITES DE LA COMPÉTENCE LÉGISLATIVE"},
        HTMLid:"3a3",
    },
node3a3a1 = {
        parent: node3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validations législatives"},
        HTMLid:"3a3a1",
        HTMLclass:"leave"
    },
node3a3a2 = {
        parent: node3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur de la loi"},
        HTMLid:"3a3a2",
        HTMLclass:"leave"
    },
node3a3a2a1 = {
        parent: node3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs du législateur"},
        HTMLid:"3a3a2a1",
        HTMLclass:"leave"
    },
node3a3a2a2 = {
        parent: node3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-rétroactivité de la loi (voir Titre 4 Droits et libertés)"},
        HTMLid:"3a3a2a2",
        HTMLclass:"leave"
    },
node3a3a2a2a1 = {
        parent: node3a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-rétroactivité de la loi pénale plus sévère (voir Titre 4 Droits et libertés)"},
        HTMLid:"3a3a2a2a1",
        HTMLclass:"leave"
    },
node3a3a2a2a2 = {
        parent: node3a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-rétroactivité de la loi pénale plus douce (voir Titre 4 Droits et libertés)"},
        HTMLid:"3a3a2a2a2",
        HTMLclass:"leave"
    },
node3a3a2a2a3 = {
        parent: node3a3a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-rétroactivité d'une loi non répressive"},
        HTMLid:"3a3a2a2a3",
        HTMLclass:"leave"
    },
node3a3a3 = {
        parent: node3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injonctions au Gouvernement"},
        HTMLid:"3a3a3",
        HTMLclass:"leave"
    },
node3a3a3a1 = {
        parent: node3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions prescrivant au Gouvernement de déposer un projet de loi"},
        HTMLid:"3a3a3a1",
        HTMLclass:"leave"
    },
node3a3a3a2 = {
        parent: node3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions prescrivant au Gouvernement d'affecter et d'utiliser des crédits"},
        HTMLid:"3a3a3a2",
        HTMLclass:"leave"
    },
node3a3a3a3 = {
        parent: node3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'injonction"},
        HTMLid:"3a3a3a3",
        HTMLclass:"leave"
    },
node3a3a4 = {
        parent: node3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence négative"},
        HTMLid:"3a3a4",
    },
node3a3a4a1 = {
        parent: node3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas d'incompétence négative"},
        HTMLid:"3a3a4a1",
    },
node3a3a4a1a1 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal et procédure pénale"},
        HTMLid:"3a3a4a1a1",
    },
node3a3a4a1a1a1 = {
        parent: node3a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application de la loi pénale"},
        HTMLid:"3a3a4a1a1a1",
        HTMLclass:"leave"
    },
node3a3a4a1a1a2 = {
        parent: node3a3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle d'identité et procédure pénale"},
        HTMLid:"3a3a4a1a1a2",
        HTMLclass:"leave"
    },
node3a3a4a1a2 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit économique"},
        HTMLid:"3a3a4a1a2",
    },
node3a3a4a1a2a1 = {
        parent: node3a3a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics"},
        HTMLid:"3a3a4a1a2a1",
        HTMLclass:"leave"
    },
node3a3a4a1a2a2 = {
        parent: node3a3a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Marchés publics"},
        HTMLid:"3a3a4a1a2a2",
        HTMLclass:"leave"
    },
node3a3a4a1a2a3 = {
        parent: node3a3a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté des prix"},
        HTMLid:"3a3a4a1a2a3",
        HTMLclass:"leave"
    },
node3a3a4a1a3 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Finances publiques et droit fiscal"},
        HTMLid:"3a3a4a1a3",
        HTMLclass:"leave"
    },
node3a3a4a1a3a1 = {
        parent: node3a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nouveau régime d'imposition"},
        HTMLid:"3a3a4a1a3a1",
        HTMLclass:"leave"
    },
node3a3a4a1a3a2 = {
        parent: node3a3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abrogation d'une loi fixant des obligations aux contribuables"},
        HTMLid:"3a3a4a1a3a2",
        HTMLclass:"leave"
    },
node3a3a4a1a4 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit rural"},
        HTMLid:"3a3a4a1a4",
        HTMLclass:"leave"
    },
node3a3a4a1a5 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"3a3a4a1a5",
        HTMLclass:"leave"
    },
node3a3a4a1a6 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"3a3a4a1a6",
        HTMLclass:"leave"
    },
node3a3a4a1a6a1 = {
        parent: node3a3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urbanisme"},
        HTMLid:"3a3a4a1a6a1",
        HTMLclass:"leave"
    },
node3a3a4a1a7 = {
        parent: node3a3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres droits et libertés"},
        HTMLid:"3a3a4a1a7",
        HTMLclass:"leave"
    },
node3a3a4a1a7a1 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haute autorité de la communication audiovisuelle"},
        HTMLid:"3a3a4a1a7a1",
        HTMLclass:"leave"
    },
node3a3a4a1a7a2 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de la presse"},
        HTMLid:"3a3a4a1a7a2",
        HTMLclass:"leave"
    },
node3a3a4a1a7a3 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concentrations portant atteinte au pluralisme"},
        HTMLid:"3a3a4a1a7a3",
        HTMLclass:"leave"
    },
node3a3a4a1a7a4 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication audiovisuelle"},
        HTMLid:"3a3a4a1a7a4",
        HTMLclass:"leave"
    },
node3a3a4a1a7a5 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Internet"},
        HTMLid:"3a3a4a1a7a5",
        HTMLclass:"leave"
    },
node3a3a4a1a7a6 = {
        parent: node3a3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Environnement"},
        HTMLid:"3a3a4a1a7a6",
        HTMLclass:"leave"
    },
node3a3a4a2 = {
        parent: node3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence d'incompétence négative"},
        HTMLid:"3a3a4a2",
        HTMLclass:"leave"
    },
node3a3a4a2a1 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Le législateur a épuisé sa compétence"},
        HTMLid:"3a3a4a2a1",
        HTMLclass:"leave"
    },
node3a3a4a2a2 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi au règlement d'application"},
        HTMLid:"3a3a4a2a2",
        HTMLclass:"leave"
    },
node3a3a4a2a3 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à une convention collective"},
        HTMLid:"3a3a4a2a3",
        HTMLclass:"leave"
    },
node3a3a4a2a4 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi au contrôle du juge"},
        HTMLid:"3a3a4a2a4",
        HTMLclass:"leave"
    },
node3a3a4a2a5 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve d'interprétation"},
        HTMLid:"3a3a4a2a5",
        HTMLclass:"leave"
    },
node3a3a4a2a6 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à la volonté des parties"},
        HTMLid:"3a3a4a2a6",
        HTMLclass:"leave"
    },
node3a3a4a2a7 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à une disposition communautaire"},
        HTMLid:"3a3a4a2a7",
        HTMLclass:"leave"
    },
node3a3a4a2a8 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à une disposition législative antérieure"},
        HTMLid:"3a3a4a2a8",
        HTMLclass:"leave"
    },
node3a3a4a2a9 = {
        parent: node3a3a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi à une autorité indépendante"},
        HTMLid:"3a3a4a2a9",
        HTMLclass:"leave"
    },
node3a3a5 = {
        parent: node3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abrogation ou modification des lois"},
        HTMLid:"3a3a5",
        HTMLclass:"leave"
    },
node3a4 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "POUVOIR LÉGISLATIF DÉLÉGUÉ"},
        HTMLid:"3a4",
    },
node3a4a1 = {
        parent: node3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances de l'article 38"},
        HTMLid:"3a4a1",
    },
node3a4a1a1 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de recours à l'article 38"},
        HTMLid:"3a4a1a1",
    },
node3a4a1a1a1 = {
        parent: node3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande d'habilitation"},
        HTMLid:"3a4a1a1a1",
        HTMLclass:"leave"
    },
node3a4a1a1a2 = {
        parent: node3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exécution du programme"},
        HTMLid:"3a4a1a1a2",
    },
node3a4a1a1a2a1 = {
        parent: node3a4a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de programme"},
        HTMLid:"3a4a1a1a2a1",
        HTMLclass:"leave"
    },
node3a4a1a1a2a2 = {
        parent: node3a4a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Finalité des mesures et domaines d'intervention"},
        HTMLid:"3a4a1a1a2a2",
        HTMLclass:"leave"
    },
node3a4a1a1a2a3 = {
        parent: node3a4a1a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Teneur des ordonnances"},
        HTMLid:"3a4a1a1a2a3",
        HTMLclass:"leave"
    },
node3a4a1a1a3 = {
        parent: node3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urgence"},
        HTMLid:"3a4a1a1a3",
        HTMLclass:"leave"
    },
node3a4a1a1a4 = {
        parent: node3a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de l'article 40 de la Constitution"},
        HTMLid:"3a4a1a1a4",
        HTMLclass:"leave"
    },
node3a4a1a2 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de délai"},
        HTMLid:"3a4a1a2",
    },
node3a4a1a2a1 = {
        parent: node3a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée de l'habilitation"},
        HTMLid:"3a4a1a2a1",
        HTMLclass:"leave"
    },
node3a4a1a2a2 = {
        parent: node3a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Date de dépôt du projet de loi de ratification"},
        HTMLid:"3a4a1a2a2",
        HTMLclass:"leave"
    },
node3a4a1a3 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objet de la délégation"},
        HTMLid:"3a4a1a3",
    },
node3a4a1a3a1 = {
        parent: node3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Matières législatives ordinaires"},
        HTMLid:"3a4a1a3a1",
        HTMLclass:"leave"
    },
node3a4a1a3a2 = {
        parent: node3a4a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas de délégation interdite"},
        HTMLid:"3a4a1a3a2",
    },
node3a4a1a3a2a1 = {
        parent: node3a4a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles générales"},
        HTMLid:"3a4a1a3a2a1",
        HTMLclass:"leave"
    },
node3a4a1a3a2a2 = {
        parent: node3a4a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières à l'outre-mer"},
        HTMLid:"3a4a1a3a2a2",
        HTMLclass:"leave"
    },
node3a4a1a4 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de la hiérarchie des normes"},
        HTMLid:"3a4a1a4",
        HTMLclass:"leave"
    },
node3a4a1a5 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Signature par le Président des ordonnances"},
        HTMLid:"3a4a1a5",
        HTMLclass:"leave"
    },
node3a4a1a6 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification des ordonnances"},
        HTMLid:"3a4a1a6",
        HTMLclass:"leave"
    },
node3a4a1a6a1 = {
        parent: node3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification explicite"},
        HTMLid:"3a4a1a6a1",
    },
node3a4a1a6a1a1 = {
        parent: node3a4a1a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification prévue par la loi de ratification"},
        HTMLid:"3a4a1a6a1a1",
        HTMLclass:"leave"
    },
node3a4a1a6a1a2 = {
        parent: node3a4a1a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification par une loi ordinaire"},
        HTMLid:"3a4a1a6a1a2",
        HTMLclass:"leave"
    },
node3a4a1a6a1a3 = {
        parent: node3a4a1a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité prévue à l'article 41"},
        HTMLid:"3a4a1a6a1a3",
        HTMLclass:"leave"
    },
node3a4a1a6a1a4 = {
        parent: node3a4a1a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte ne valant pas ratification"},
        HTMLid:"3a4a1a6a1a4",
        HTMLclass:"leave"
    },
node3a4a1a6a2 = {
        parent: node3a4a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ratification implicite (avant 2008)"},
        HTMLid:"3a4a1a6a2",
        HTMLclass:"leave"
    },
node3a4a1a7 = {
        parent: node3a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime juridique des ordonnances"},
        HTMLid:"3a4a1a7",
    },
node3a4a1a7a1 = {
        parent: node3a4a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes de forme réglementaire avant ratification"},
        HTMLid:"3a4a1a7a1",
        HTMLclass:"leave"
    },
node3a4a2 = {
        parent: node3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances des articles 47 et 47-1"},
        HTMLid:"3a4a2",
    },
node3a4a3 = {
        parent: node3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances de l'article 74-1"},
        HTMLid:"3a4a3",
        HTMLclass:"leave"
    },
node3a4a4 = {
        parent: node3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes de collectivités territoriales d'outre-mer (articles 73 et 74 de la Constitution)"},
        HTMLid:"3a4a4",
        HTMLclass:"leave"
    },
node3a4a4a1 = {
        parent: node3a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Habilitation à intervenir dans le domaine de la loi (article 73, alinéas 3 à 6)"},
        HTMLid:"3a4a4a1",
        HTMLclass:"leave"
    },
node3a4a4a2 = {
        parent: node3a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Participation aux compétences de l'État (article 74, alinéa 11)"},
        HTMLid:"3a4a4a2",
        HTMLclass:"leave"
    },
node3a5 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "POUVOIR RÉGLEMENTAIRE"},
        HTMLid:"3a5",
    },
node3a5a1 = {
        parent: node3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir réglementaire national - Autorités compétentes"},
        HTMLid:"3a5a1",
    },
node3a5a1a1 = {
        parent: node3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des attributions de l'État entre diverses autorités"},
        HTMLid:"3a5a1a1",
        HTMLclass:"leave"
    },
node3a5a1a2 = {
        parent: node3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Gouvernement"},
        HTMLid:"3a5a1a2",
        HTMLclass:"leave"
    },
node3a5a1a3 = {
        parent: node3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ministres"},
        HTMLid:"3a5a1a3",
        HTMLclass:"leave"
    },
node3a5a1a4 = {
        parent: node3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes (voir Titre 14 Autorités indépendantes)"},
        HTMLid:"3a5a1a4",
    },
node3a5a2 = {
        parent: node3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir réglementaire national - Modalités d'exercice (voir Domaine de la loi et du règlement)"},
        HTMLid:"3a5a2",
        HTMLclass:"leave"
    },
node3a5a2a1 = {
        parent: node3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligations s'imposant au Gouvernement"},
        HTMLid:"3a5a2a1",
        HTMLclass:"leave"
    },
node3a5a2a2 = {
        parent: node3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des exigences constitutionnelles"},
        HTMLid:"3a5a2a2",
        HTMLclass:"leave"
    },
node3a5a2a3 = {
        parent: node3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures d'application de la loi (voir Absence d'incompétence négative - Renvoi de la loi au règlement)"},
        HTMLid:"3a5a2a3",
        HTMLclass:"leave"
    },
node3a5a2a4 = {
        parent: node3a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultations diverses"},
        HTMLid:"3a5a2a4",
    },
node3a5a2a4a1 = {
        parent: node3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis du Conseil d'État"},
        HTMLid:"3a5a2a4a1",
        HTMLclass:"leave"
    },
node3a5a2a4a2 = {
        parent: node3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis conformes de certains organismes"},
        HTMLid:"3a5a2a4a2",
        HTMLclass:"leave"
    },
node3a5a2a4a3 = {
        parent: node3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis simples"},
        HTMLid:"3a5a2a4a3",
        HTMLclass:"leave"
    },
node3a5a2a4a3a1 = {
        parent: node3a5a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère obligatoire de l'avis"},
        HTMLid:"3a5a2a4a3a1",
    },
node3a5a2a4a3a1a1 = {
        parent: node3a5a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ancienne jurisprudence"},
        HTMLid:"3a5a2a4a3a1a1",
        HTMLclass:"leave"
    },
node3a5a2a4a3a1a2 = {
        parent: node3a5a2a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Revirement de jurisprudence"},
        HTMLid:"3a5a2a4a3a1a2",
        HTMLclass:"leave"
    },
node3a5a2a4a3a2 = {
        parent: node3a5a2a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition de l'organisme consultatif"},
        HTMLid:"3a5a2a4a3a2",
        HTMLclass:"leave"
    },
node3a5a2a4a4 = {
        parent: node3a5a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organismes dont les avis ne lient aucune autorité publique (voir Titre 14 : Autorités indépendantes)"},
        HTMLid:"3a5a2a4a4",
        HTMLclass:"leave"
    },
node3a5a3 = {
        parent: node3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir réglementaire local"},
        HTMLid:"3a5a3",
        HTMLclass:"leave"
    },
node3a5a3a1 = {
        parent: node3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités de droit commun (article 72 alinéa 3)"},
        HTMLid:"3a5a3a1",
        HTMLclass:"leave"
    },
node3a5a3a2 = {
        parent: node3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités à statut particulier"},
        HTMLid:"3a5a3a2",
    },
node3a5a3a2a1 = {
        parent: node3a5a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivité territoriale de Corse"},
        HTMLid:"3a5a3a2a1",
        HTMLclass:"leave"
    },
node3a5a3a3 = {
        parent: node3a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités d'outre-mer"},
        HTMLid:"3a5a3a3",
        HTMLclass:"leave"
    },
node3a6 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CONDITIONS DE MISE EN OEUVRE DES ARTICLES 37, ALINÉA 2 ET 41 DE LA CONSTITUTION"},
        HTMLid:"3a6",
    },
node3a6a1 = {
        parent: node3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitutionnalité des lois relevant du domaine réglementaire"},
        HTMLid:"3a6a1",
        HTMLclass:"leave"
    },
node3a6a1a1 = {
        parent: node3a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration de caractère réglementaire"},
        HTMLid:"3a6a1a1",
        HTMLclass:"leave"
    },
node3a6a2 = {
        parent: node3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Faculté du Gouvernement de s'opposer à l'ingérence d'une loi dans le domaine du règlement."},
        HTMLid:"3a6a2",
        HTMLclass:"leave"
    },
node3a6a3 = {
        parent: node3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 37 alinéa 2 (procédure de la délégalisation)"},
        HTMLid:"3a6a3",
    },
node3a6a3a1 = {
        parent: node3a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur"},
        HTMLid:"3a6a3a1",
        HTMLclass:"leave"
    },
node3a6a3a2 = {
        parent: node3a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du pouvoir réglementaire"},
        HTMLid:"3a6a3a2",
        HTMLclass:"leave"
    },
node3a6a3a3 = {
        parent: node3a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du Conseil constitutionnel"},
        HTMLid:"3a6a3a3",
    },
node3a6a3a3a1 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence exclusive du Conseil constitutionnel dans le cadre de l'article 37 alinéa 2"},
        HTMLid:"3a6a3a3a1",
        HTMLclass:"leave"
    },
node3a6a3a3a2 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de la procédure de déclassement"},
        HTMLid:"3a6a3a3a2",
        HTMLclass:"leave"
    },
node3a6a3a3a3 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Textes susceptibles d'être soumis au Conseil constitutionnel"},
        HTMLid:"3a6a3a3a3",
    },
node3a6a3a3a3a1 = {
        parent: node3a6a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte de loi postérieur à l'entrée en vigueur de la Constitution"},
        HTMLid:"3a6a3a3a3a1",
        HTMLclass:"leave"
    },
node3a6a3a3a3a2 = {
        parent: node3a6a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte de loi reprenant en des termes identiques un texte de loi antérieur à 1958"},
        HTMLid:"3a6a3a3a3a2",
        HTMLclass:"leave"
    },
node3a6a3a3a3a3 = {
        parent: node3a6a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte de loi étendant le champ d'application d'un texte de loi antérieur à 1958"},
        HTMLid:"3a6a3a3a3a3",
        HTMLclass:"leave"
    },
node3a6a3a3a3a4 = {
        parent: node3a6a3a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances ratifiées"},
        HTMLid:"3a6a3a3a3a4",
        HTMLclass:"leave"
    },
node3a6a3a3a4 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Textes ne pouvant pas être soumis"},
        HTMLid:"3a6a3a3a4",
        HTMLclass:"leave"
    },
node3a6a3a3a5 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation de la nature juridique des dispositions"},
        HTMLid:"3a6a3a3a5",
        HTMLclass:"leave"
    },
node3a6a3a3a6 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation de la saisine"},
        HTMLid:"3a6a3a3a6",
        HTMLclass:"leave"
    },
node3a6a3a3a7 = {
        parent: node3a6a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délimitation du domaine loi / règlement"},
        HTMLid:"3a6a3a3a7",
    },
node3a6a3a3a7a1 = {
        parent: node3a6a3a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine de la loi"},
        HTMLid:"3a6a3a3a7a1",
        HTMLclass:"leave"
    },
node3a6a3a3a7a1a1 = {
        parent: node3a6a3a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnance organique"},
        HTMLid:"3a6a3a3a7a1a1",
        HTMLclass:"leave"
    },
node3a6a3a3a7a1a2 = {
        parent: node3a6a3a3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes généraux du droit"},
        HTMLid:"3a6a3a3a7a1a2",
        HTMLclass:"leave"
    },
node3a6a3a3a7a2 = {
        parent: node3a6a3a3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine du règlement"},
        HTMLid:"3a6a3a3a7a2",
        HTMLclass:"leave"
    },
node3a6a3a4 = {
        parent: node3a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer"},
        HTMLid:"3a6a3a4",
    },
node3a6a3a4a1 = {
        parent: node3a6a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retrait de la saisine"},
        HTMLid:"3a6a3a4a1",
        HTMLclass:"leave"
    },
node3a6a3a4a2 = {
        parent: node3a6a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande sans objet"},
        HTMLid:"3a6a3a4a2",
        HTMLclass:"leave"
    },
node3a6a3a4a3 = {
        parent: node3a6a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer partiel"},
        HTMLid:"3a6a3a4a3",
        HTMLclass:"leave"
    },
node3a6a4 = {
        parent: node3a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 41 alinéa 2 (irrecevabilité)"},
        HTMLid:"3a6a4",
    },
node3a6a4a1 = {
        parent: node3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de la procédure"},
        HTMLid:"3a6a4a1",
        HTMLclass:"leave"
    },
node3a6a4a2 = {
        parent: node3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objet de la saisine"},
        HTMLid:"3a6a4a2",
    },
node3a6a4a3 = {
        parent: node3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délimitation domaine loi / Règlement"},
        HTMLid:"3a6a4a3",
        HTMLclass:"leave"
    },
node3a6a4a3a1 = {
        parent: node3a6a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine de la loi"},
        HTMLid:"3a6a4a3a1",
        HTMLclass:"leave"
    },
node3a6a4a3a2 = {
        parent: node3a6a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine du règlement"},
        HTMLid:"3a6a4a3a2",
        HTMLclass:"leave"
    },
node3a6a4a3a2a1 = {
        parent: node3a6a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des règles antérieures"},
        HTMLid:"3a6a4a3a2a1",
        HTMLclass:"leave"
    },
node3a6a4a4 = {
        parent: node3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limites du contrôle du Conseil constitutionnel"},
        HTMLid:"3a6a4a4",
        HTMLclass:"leave"
    },
node3a6a4a5 = {
        parent: node3a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer"},
        HTMLid:"3a6a4a5",
        HTMLclass:"leave"
    },
node3a7 = {
        parent: node3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "RÉPARTITION DES COMPÉTENCES PAR MATIÈRES"},
        HTMLid:"3a7",
    },
node3a7a1 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties des libertés publiques"},
        HTMLid:"3a7a1",
        HTMLclass:"leave"
    },
node3a7a1a1 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de suffrage et droits civiques"},
        HTMLid:"3a7a1a1",
        HTMLclass:"leave"
    },
node3a7a1a2 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté d'association"},
        HTMLid:"3a7a1a2",
        HTMLclass:"leave"
    },
node3a7a1a3 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté de communication"},
        HTMLid:"3a7a1a3",
        HTMLclass:"leave"
    },
node3a7a1a4 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté du commerce et de l'industrie"},
        HTMLid:"3a7a1a4",
    },
node3a7a1a4a1 = {
        parent: node3a7a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réglementation des activités professionnelles"},
        HTMLid:"3a7a1a4a1",
        HTMLclass:"leave"
    },
node3a7a1a5 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties juridictionnelles"},
        HTMLid:"3a7a1a5",
    },
node3a7a1a5a1 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit d'agir en justice"},
        HTMLid:"3a7a1a5a1",
        HTMLclass:"leave"
    },
node3a7a1a5a2 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure administrative"},
        HTMLid:"3a7a1a5a2",
        HTMLclass:"leave"
    },
node3a7a1a5a3 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure civile"},
        HTMLid:"3a7a1a5a3",
        HTMLclass:"leave"
    },
node3a7a1a5a4 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure contentieuse en matière fiscale"},
        HTMLid:"3a7a1a5a4",
        HTMLclass:"leave"
    },
node3a7a1a5a5 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours en cassation"},
        HTMLid:"3a7a1a5a5",
        HTMLclass:"leave"
    },
node3a7a1a5a6 = {
        parent: node3a7a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure disciplinaire"},
        HTMLid:"3a7a1a5a6",
        HTMLclass:"leave"
    },
node3a7a1a6 = {
        parent: node3a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de l'état d'urgence"},
        HTMLid:"3a7a1a6",
        HTMLclass:"leave"
    },
node3a7a2 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des personnes"},
        HTMLid:"3a7a2",
        HTMLclass:"leave"
    },
node3a7a2a1 = {
        parent: node3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Adoption"},
        HTMLid:"3a7a2a1",
        HTMLclass:"leave"
    },
node3a7a2a2 = {
        parent: node3a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalité"},
        HTMLid:"3a7a2a2",
        HTMLclass:"leave"
    },
node3a7a3 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal. Contraventions, crimes et délits, procédure pénale, amnistie, ordres de juridiction et statut des magistrats"},
        HTMLid:"3a7a3",
        HTMLclass:"leave"
    },
node3a7a3a1 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des infractions et des peines"},
        HTMLid:"3a7a3a1",
        HTMLclass:"leave"
    },
node3a7a3a1a1 = {
        parent: node3a7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité compétente en matière de contraventions"},
        HTMLid:"3a7a3a1a1",
        HTMLclass:"leave"
    },
node3a7a3a1a2 = {
        parent: node3a7a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité compétente en matière de crimes et délits"},
        HTMLid:"3a7a3a1a2",
        HTMLclass:"leave"
    },
node3a7a3a2 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure pénale"},
        HTMLid:"3a7a3a2",
        HTMLclass:"leave"
    },
node3a7a3a3 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de procédure contentieuse n'ayant pas un caractère pénal"},
        HTMLid:"3a7a3a3",
    },
node3a7a3a3a1 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"3a7a3a3a1",
        HTMLclass:"leave"
    },
node3a7a3a3a2 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure civile"},
        HTMLid:"3a7a3a3a2",
        HTMLclass:"leave"
    },
node3a7a3a3a2a1 = {
        parent: node3a7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Audition du ministère public"},
        HTMLid:"3a7a3a3a2a1",
        HTMLclass:"leave"
    },
node3a7a3a3a2a2 = {
        parent: node3a7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Expropriation"},
        HTMLid:"3a7a3a3a2a2",
        HTMLclass:"leave"
    },
node3a7a3a3a2a3 = {
        parent: node3a7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de contradiction"},
        HTMLid:"3a7a3a3a2a3",
        HTMLclass:"leave"
    },
node3a7a3a3a2a4 = {
        parent: node3a7a3a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours"},
        HTMLid:"3a7a3a3a2a4",
        HTMLclass:"leave"
    },
node3a7a3a3a3 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil de prud'hommes"},
        HTMLid:"3a7a3a3a3",
        HTMLclass:"leave"
    },
node3a7a3a3a4 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure administrative contentieuse"},
        HTMLid:"3a7a3a3a4",
    },
node3a7a3a3a4a1 = {
        parent: node3a7a3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité compétente"},
        HTMLid:"3a7a3a3a4a1",
        HTMLclass:"leave"
    },
node3a7a3a3a4a2 = {
        parent: node3a7a3a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure contentieuse en matière fiscale"},
        HTMLid:"3a7a3a3a4a2",
        HTMLclass:"leave"
    },
node3a7a3a3a5 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure administrative non contentieuse"},
        HTMLid:"3a7a3a3a5",
        HTMLclass:"leave"
    },
node3a7a3a3a6 = {
        parent: node3a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure disciplinaire"},
        HTMLid:"3a7a3a3a6",
        HTMLclass:"leave"
    },
node3a7a3a4 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amnistie"},
        HTMLid:"3a7a3a4",
    },
node3a7a3a4a1 = {
        parent: node3a7a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application des lois d'amnistie"},
        HTMLid:"3a7a3a4a1",
        HTMLclass:"leave"
    },
node3a7a3a4a2 = {
        parent: node3a7a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Présomption d'innocence"},
        HTMLid:"3a7a3a4a2",
        HTMLclass:"leave"
    },
node3a7a3a4a3 = {
        parent: node3a7a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs"},
        HTMLid:"3a7a3a4a3",
        HTMLclass:"leave"
    },
node3a7a3a5 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre de juridiction"},
        HTMLid:"3a7a3a5",
    },
node3a7a3a5a1 = {
        parent: node3a7a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'un nouvel ordre de juridiction - règles constitutives"},
        HTMLid:"3a7a3a5a1",
    },
node3a7a3a5a1a1 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour de cassation"},
        HTMLid:"3a7a3a5a1a1",
        HTMLclass:"leave"
    },
node3a7a3a5a1a2 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chambre de l'expropriation"},
        HTMLid:"3a7a3a5a1a2",
        HTMLclass:"leave"
    },
node3a7a3a5a1a3 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseils de prud'hommes"},
        HTMLid:"3a7a3a5a1a3",
        HTMLclass:"leave"
    },
node3a7a3a5a1a4 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour de discipline budgétaire et financière"},
        HTMLid:"3a7a3a5a1a4",
        HTMLclass:"leave"
    },
node3a7a3a5a1a5 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions de proximité"},
        HTMLid:"3a7a3a5a1a5",
        HTMLclass:"leave"
    },
node3a7a3a5a1a6 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tribunal d'instance à compétence exclusivement pénale"},
        HTMLid:"3a7a3a5a1a6",
        HTMLclass:"leave"
    },
node3a7a3a5a1a7 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tribunal pour enfants"},
        HTMLid:"3a7a3a5a1a7",
        HTMLclass:"leave"
    },
node3a7a3a5a1a8 = {
        parent: node3a7a3a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Section des assurances sociales du conseil régional de discipline"},
        HTMLid:"3a7a3a5a1a8",
        HTMLclass:"leave"
    },
node3a7a3a5a2 = {
        parent: node3a7a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles d'organisation juridictionnelle ne relevant pas de la loi"},
        HTMLid:"3a7a3a5a2",
        HTMLclass:"leave"
    },
node3a7a3a5a3 = {
        parent: node3a7a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences entre les ordres juridictionnels"},
        HTMLid:"3a7a3a5a3",
        HTMLclass:"leave"
    },
node3a7a3a5a4 = {
        parent: node3a7a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des compétences au sein d'un ordre juridictionnel"},
        HTMLid:"3a7a3a5a4",
        HTMLclass:"leave"
    },
node3a7a3a6 = {
        parent: node3a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut des magistrats"},
        HTMLid:"3a7a3a6",
        HTMLclass:"leave"
    },
node3a7a4 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assiette, taux et modalités de recouvrement des impositions de toutes natures, régime d'émission de la monnaie"},
        HTMLid:"3a7a4",
        HTMLclass:"leave"
    },
node3a7a4a1 = {
        parent: node3a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes publiques"},
        HTMLid:"3a7a4a1",
    },
node3a7a4a1a1 = {
        parent: node3a7a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvements obligatoires"},
        HTMLid:"3a7a4a1a1",
    },
node3a7a4a1a1a1 = {
        parent: node3a7a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisations sociales"},
        HTMLid:"3a7a4a1a1a1",
        HTMLclass:"leave"
    },
node3a7a4a1a1a2 = {
        parent: node3a7a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions de toutes natures - Qualification"},
        HTMLid:"3a7a4a1a1a2",
        HTMLclass:"leave"
    },
node3a7a4a1a1a3 = {
        parent: node3a7a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions de toutes natures - Détermination de l'assiette et du taux"},
        HTMLid:"3a7a4a1a1a3",
        HTMLclass:"leave"
    },
node3a7a4a1a1a4 = {
        parent: node3a7a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions de toutes natures - Modalités de recouvrement"},
        HTMLid:"3a7a4a1a1a4",
        HTMLclass:"leave"
    },
node3a7a4a1a1a5 = {
        parent: node3a7a4a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions de toutes natures - Exonérations fiscales et règles dérogatoires"},
        HTMLid:"3a7a4a1a1a5",
        HTMLclass:"leave"
    },
node3a7a4a1a2 = {
        parent: node3a7a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources non obligatoires"},
        HTMLid:"3a7a4a1a2",
    },
node3a7a4a1a2a1 = {
        parent: node3a7a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rémunération pour services rendus"},
        HTMLid:"3a7a4a1a2a1",
        HTMLclass:"leave"
    },
node3a7a4a1a2a2 = {
        parent: node3a7a4a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Revenus divers"},
        HTMLid:"3a7a4a1a2a2",
        HTMLclass:"leave"
    },
node3a7a4a1a3 = {
        parent: node3a7a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxes parafiscales"},
        HTMLid:"3a7a4a1a3",
        HTMLclass:"leave"
    },
node3a7a4a2 = {
        parent: node3a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Garanties des contribuables"},
        HTMLid:"3a7a4a2",
    },
node3a7a4a2a1 = {
        parent: node3a7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Charge de la preuve"},
        HTMLid:"3a7a4a2a1",
        HTMLclass:"leave"
    },
node3a7a4a2a2 = {
        parent: node3a7a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de motiver"},
        HTMLid:"3a7a4a2a2",
        HTMLclass:"leave"
    },
node3a7a4a3 = {
        parent: node3a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses"},
        HTMLid:"3a7a4a3",
    },
node3a7a4a3a1 = {
        parent: node3a7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution d'aides et de subventions par l'État"},
        HTMLid:"3a7a4a3a1",
        HTMLclass:"leave"
    },
node3a7a4a3a2 = {
        parent: node3a7a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle budgétaire"},
        HTMLid:"3a7a4a3a2",
        HTMLclass:"leave"
    },
node3a7a4a4 = {
        parent: node3a7a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime d'émission de la monnaie"},
        HTMLid:"3a7a4a4",
        HTMLclass:"leave"
    },
node3a7a5 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rapports au Parlement"},
        HTMLid:"3a7a5",
        HTMLclass:"leave"
    },
node3a7a6 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime électoral des assemblées parlementaires et des assemblées locales"},
        HTMLid:"3a7a6",
    },
node3a7a6a1 = {
        parent: node3a7a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"3a7a6a1",
        HTMLclass:"leave"
    },
node3a7a6a2 = {
        parent: node3a7a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assemblées parlementaires"},
        HTMLid:"3a7a6a2",
        HTMLclass:"leave"
    },
node3a7a6a3 = {
        parent: node3a7a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assemblées locales"},
        HTMLid:"3a7a6a3",
        HTMLclass:"leave"
    },
node3a7a7 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création de catégories d'établissements publics"},
        HTMLid:"3a7a7",
    },
node3a7a7a1 = {
        parent: node3a7a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de catégories d'établissements publics"},
        HTMLid:"3a7a7a1",
        HTMLclass:"leave"
    },
node3a7a7a1a1 = {
        parent: node3a7a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement public constituant une catégorie"},
        HTMLid:"3a7a7a1a1",
    },
node3a7a7a1a1a1 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agence financière de bassin"},
        HTMLid:"3a7a7a1a1a1",
        HTMLclass:"leave"
    },
node3a7a7a1a1a2 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caisse de crédit municipal"},
        HTMLid:"3a7a7a1a1a2",
        HTMLclass:"leave"
    },
node3a7a7a1a1a3 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Centre de formation des personnels communaux"},
        HTMLid:"3a7a7a1a1a3",
        HTMLclass:"leave"
    },
node3a7a7a1a1a4 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Centre national d'art et de culture Georges Pompidou"},
        HTMLid:"3a7a7a1a1a4",
        HTMLclass:"leave"
    },
node3a7a7a1a1a5 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement public à caractère scientifique, culturel et professionnel"},
        HTMLid:"3a7a7a1a1a5",
        HTMLclass:"leave"
    },
node3a7a7a1a1a6 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement public national chargé des diagnostics et fouilles des archéologies préventives"},
        HTMLid:"3a7a7a1a1a6",
        HTMLclass:"leave"
    },
node3a7a7a1a1a7 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Institut national de la consommation"},
        HTMLid:"3a7a7a1a1a7",
        HTMLclass:"leave"
    },
node3a7a7a1a1a8 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ORTF"},
        HTMLid:"3a7a7a1a1a8",
        HTMLclass:"leave"
    },
node3a7a7a1a1a9 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Radiodiffusion - télévision française"},
        HTMLid:"3a7a7a1a1a9",
        HTMLclass:"leave"
    },
node3a7a7a1a1a10 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régie autonome des transports parisiens"},
        HTMLid:"3a7a7a1a1a10",
        HTMLclass:"leave"
    },
node3a7a7a1a1a11 = {
        parent: node3a7a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Syndicat des transports parisiens"},
        HTMLid:"3a7a7a1a1a11",
        HTMLclass:"leave"
    },
node3a7a7a1a2 = {
        parent: node3a7a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics relevant d'une catégorie existante : ancienne jurisprudence"},
        HTMLid:"3a7a7a1a2",
    },
node3a7a7a1a2a1 = {
        parent: node3a7a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agence de défense des biens et intérêt des rapatriés"},
        HTMLid:"3a7a7a1a2a1",
        HTMLclass:"leave"
    },
node3a7a7a1a2a2 = {
        parent: node3a7a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Institut des hautes études d'outre mer"},
        HTMLid:"3a7a7a1a2a2",
        HTMLclass:"leave"
    },
node3a7a7a1a2a3 = {
        parent: node3a7a7a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agence nationale de valorisation de la recherche"},
        HTMLid:"3a7a7a1a2a3",
        HTMLclass:"leave"
    },
node3a7a7a1a3 = {
        parent: node3a7a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement relevant d'une catégorie existante : nouvelle jurisprudence"},
        HTMLid:"3a7a7a1a3",
    },
node3a7a7a1a3a1 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agence nationale pour l'emploi"},
        HTMLid:"3a7a7a1a3a1",
        HTMLclass:"leave"
    },
node3a7a7a1a3a2 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agence pour les économies d'énergie"},
        HTMLid:"3a7a7a1a3a2",
        HTMLclass:"leave"
    },
node3a7a7a1a3a3 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CNEXO"},
        HTMLid:"3a7a7a1a3a3",
        HTMLclass:"leave"
    },
node3a7a7a1a3a4 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement public locaux d'enseignement"},
        HTMLid:"3a7a7a1a3a4",
        HTMLclass:"leave"
    },
node3a7a7a1a3a5 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement public de gestion du quartier d'affaires de la défense"},
        HTMLid:"3a7a7a1a3a5",
        HTMLclass:"leave"
    },
node3a7a7a1a3a6 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonds de financement de la protection complémentaire de la couverture universelle du risque maladie"},
        HTMLid:"3a7a7a1a3a6",
        HTMLclass:"leave"
    },
node3a7a7a1a3a7 = {
        parent: node3a7a7a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Institut de recherche d'informatique et d'automatique"},
        HTMLid:"3a7a7a1a3a7",
        HTMLclass:"leave"
    },
node3a7a7a2 = {
        parent: node3a7a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles constitutives des catégories d'établissements publics"},
        HTMLid:"3a7a7a2",
    },
node3a7a7a2a1 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Les règles de création d'un établissement public constituant à lui seul une catégorie particulière"},
        HTMLid:"3a7a7a2a1",
        HTMLclass:"leave"
    },
node3a7a7a2a2 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination des ressources"},
        HTMLid:"3a7a7a2a2",
        HTMLclass:"leave"
    },
node3a7a7a2a3 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil d'administration, comité directeur"},
        HTMLid:"3a7a7a2a3",
        HTMLclass:"leave"
    },
node3a7a7a2a4 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transferts de compétences des établissements publics locaux"},
        HTMLid:"3a7a7a2a4",
        HTMLclass:"leave"
    },
node3a7a7a2a5 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'État"},
        HTMLid:"3a7a7a2a5",
        HTMLclass:"leave"
    },
node3a7a7a2a6 = {
        parent: node3a7a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dérogations aux règles constitutives"},
        HTMLid:"3a7a7a2a6",
        HTMLclass:"leave"
    },
node3a7a7a3 = {
        parent: node3a7a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ne sont pas des règles constitutives des catégories d'établissements publics"},
        HTMLid:"3a7a7a3",
    },
node3a7a7a3a1 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère de l'établissement public"},
        HTMLid:"3a7a7a3a1",
        HTMLclass:"leave"
    },
node3a7a7a3a2 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dénomination de l'établissement public"},
        HTMLid:"3a7a7a3a2",
        HTMLclass:"leave"
    },
node3a7a7a3a3 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mode de rémunération"},
        HTMLid:"3a7a7a3a3",
        HTMLclass:"leave"
    },
node3a7a7a3a4 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination des agents"},
        HTMLid:"3a7a7a3a4",
        HTMLclass:"leave"
    },
node3a7a7a3a5 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation interne de l'établissement public"},
        HTMLid:"3a7a7a3a5",
        HTMLclass:"leave"
    },
node3a7a7a3a6 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Relations financières entre établissements publics et autorités de tutelle"},
        HTMLid:"3a7a7a3a6",
        HTMLclass:"leave"
    },
node3a7a7a3a7 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités d'exercice du contrôle de tutelle"},
        HTMLid:"3a7a7a3a7",
        HTMLclass:"leave"
    },
node3a7a7a3a8 = {
        parent: node3a7a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Siège de l'établissement public"},
        HTMLid:"3a7a7a3a8",
        HTMLclass:"leave"
    },
node3a7a8 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonction publique"},
        HTMLid:"3a7a8",
    },
node3a7a8a1 = {
        parent: node3a7a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine de la loi - Garanties fondamentales accordées aux fonctionnaires civils et assimilés"},
        HTMLid:"3a7a8a1",
    },
node3a7a8a1a1 = {
        parent: node3a7a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement"},
        HTMLid:"3a7a8a1a1",
        HTMLclass:"leave"
    },
node3a7a8a1a2 = {
        parent: node3a7a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avancement"},
        HTMLid:"3a7a8a1a2",
        HTMLclass:"leave"
    },
node3a7a8a1a3 = {
        parent: node3a7a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Carrière"},
        HTMLid:"3a7a8a1a3",
        HTMLclass:"leave"
    },
node3a7a8a1a4 = {
        parent: node3a7a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à pension"},
        HTMLid:"3a7a8a1a4",
        HTMLclass:"leave"
    },
node3a7a8a1a5 = {
        parent: node3a7a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions rétroactives - Validations législatives"},
        HTMLid:"3a7a8a1a5",
        HTMLclass:"leave"
    },
node3a7a8a2 = {
        parent: node3a7a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence réglementaire"},
        HTMLid:"3a7a8a2",
    },
node3a7a8a2a1 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agents des offices publics d'HLM"},
        HTMLid:"3a7a8a2a1",
        HTMLclass:"leave"
    },
node3a7a8a2a2 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cadres de réserve de l'armée (de l'air)"},
        HTMLid:"3a7a8a2a2",
        HTMLclass:"leave"
    },
node3a7a8a2a3 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'admission à un concours"},
        HTMLid:"3a7a8a2a3",
        HTMLclass:"leave"
    },
node3a7a8a2a4 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Corps des chambres régionales des comptes - recrutement"},
        HTMLid:"3a7a8a2a4",
        HTMLclass:"leave"
    },
node3a7a8a2a5 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avancement - Mise en oeuvre"},
        HTMLid:"3a7a8a2a5",
        HTMLclass:"leave"
    },
node3a7a8a2a6 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à pension - mise en oeuvre"},
        HTMLid:"3a7a8a2a6",
        HTMLclass:"leave"
    },
node3a7a8a2a7 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctionnaires près de la Cour supérieure d'arbitrage - Indemnités"},
        HTMLid:"3a7a8a2a7",
        HTMLclass:"leave"
    },
node3a7a8a2a8 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rémunérations"},
        HTMLid:"3a7a8a2a8",
        HTMLclass:"leave"
    },
node3a7a8a2a9 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jury d'examens"},
        HTMLid:"3a7a8a2a9",
        HTMLclass:"leave"
    },
node3a7a8a2a10 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures d'intégrations et de détachements - délais"},
        HTMLid:"3a7a8a2a10",
        HTMLclass:"leave"
    },
node3a7a8a2a11 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Reclassement et reconstitution de carrière des fonctionnaires"},
        HTMLid:"3a7a8a2a11",
        HTMLclass:"leave"
    },
node3a7a8a2a12 = {
        parent: node3a7a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut des agents de la radiodiffusion- télévision française - délais de choix"},
        HTMLid:"3a7a8a2a12",
        HTMLclass:"leave"
    },
node3a7a9 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalisations"},
        HTMLid:"3a7a9",
    },
node3a7a9a1 = {
        parent: node3a7a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entreprises publiques"},
        HTMLid:"3a7a9a1",
    },
node3a7a9a1a1 = {
        parent: node3a7a9a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission de vérification des comptes des entreprises publiques"},
        HTMLid:"3a7a9a1a1",
        HTMLclass:"leave"
    },
node3a7a9a2 = {
        parent: node3a7a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalisations - Transferts de propriétés d'entreprises du secteur public au secteur privé"},
        HTMLid:"3a7a9a2",
    },
node3a7a9a2a1 = {
        parent: node3a7a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités de réalisation du transfert"},
        HTMLid:"3a7a9a2a1",
        HTMLclass:"leave"
    },
node3a7a9a2a1a1 = {
        parent: node3a7a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission d'évaluation"},
        HTMLid:"3a7a9a2a1a1",
        HTMLclass:"leave"
    },
node3a7a9a2a1a2 = {
        parent: node3a7a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine du règlement"},
        HTMLid:"3a7a9a2a1a2",
        HTMLclass:"leave"
    },
node3a7a9a2a1a3 = {
        parent: node3a7a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fixation d'un cadre général"},
        HTMLid:"3a7a9a2a1a3",
        HTMLclass:"leave"
    },
node3a7a9a2a1a4 = {
        parent: node3a7a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liquidation de la société nationale des entreprises de presse"},
        HTMLid:"3a7a9a2a1a4",
        HTMLclass:"leave"
    },
node3a7a9a2a1a5 = {
        parent: node3a7a9a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Haut Conseil du secteur public et Haut Conseil du secteur financier public et semi-public"},
        HTMLid:"3a7a9a2a1a5",
        HTMLclass:"leave"
    },
node3a7a9a2a2 = {
        parent: node3a7a9a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public national"},
        HTMLid:"3a7a9a2a2",
        HTMLclass:"leave"
    },
node3a7a10 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Défense Nationale"},
        HTMLid:"3a7a10",
        HTMLclass:"leave"
    },
node3a7a11 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Libre administration des collectivités territoriales"},
        HTMLid:"3a7a11",
    },
node3a7a11a1 = {
        parent: node3a7a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de libre administration des collectivités"},
        HTMLid:"3a7a11a1",
    },
node3a7a11a1a1 = {
        parent: node3a7a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence législative"},
        HTMLid:"3a7a11a1a1",
        HTMLclass:"leave"
    },
node3a7a11a1a1a1 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication de documents administratifs"},
        HTMLid:"3a7a11a1a1a1",
        HTMLclass:"leave"
    },
node3a7a11a1a1a2 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Urbanisme"},
        HTMLid:"3a7a11a1a1a2",
        HTMLclass:"leave"
    },
node3a7a11a1a1a3 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Environnement"},
        HTMLid:"3a7a11a1a1a3",
        HTMLclass:"leave"
    },
node3a7a11a1a1a4 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Centre national de la fonction publique territoriale"},
        HTMLid:"3a7a11a1a1a4",
        HTMLclass:"leave"
    },
node3a7a11a1a1a5 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorisation de la création d'une structure intercommunale"},
        HTMLid:"3a7a11a1a1a5",
        HTMLclass:"leave"
    },
node3a7a11a1a1a6 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis sur la création d'une agglomération nouvelle"},
        HTMLid:"3a7a11a1a1a6",
        HTMLclass:"leave"
    },
node3a7a11a1a1a7 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Participation d'une région à un établissement public chargé de l'organisation de transports en commun"},
        HTMLid:"3a7a11a1a1a7",
        HTMLclass:"leave"
    },
node3a7a11a1a1a8 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation et présence de représentants des collectivités territoriales au sein des commissions"},
        HTMLid:"3a7a11a1a1a8",
        HTMLclass:"leave"
    },
node3a7a11a1a1a9 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation des communes et structures intercommunales"},
        HTMLid:"3a7a11a1a1a9",
        HTMLclass:"leave"
    },
node3a7a11a1a1a10 = {
        parent: node3a7a11a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commande publique"},
        HTMLid:"3a7a11a1a1a10",
        HTMLclass:"leave"
    },
node3a7a11a1a2 = {
        parent: node3a7a11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence réglementaire"},
        HTMLid:"3a7a11a1a2",
    },
node3a7a11a1a2a1 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité centrale pour l'adoption"},
        HTMLid:"3a7a11a1a2a1",
        HTMLclass:"leave"
    },
node3a7a11a1a2a2 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil territorial de l'éducation nationale"},
        HTMLid:"3a7a11a1a2a2",
        HTMLclass:"leave"
    },
node3a7a11a1a2a3 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut des OPHLM"},
        HTMLid:"3a7a11a1a2a3",
        HTMLclass:"leave"
    },
node3a7a11a1a2a4 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des monuments naturels et des sites"},
        HTMLid:"3a7a11a1a2a4",
        HTMLclass:"leave"
    },
node3a7a11a1a2a5 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissement d'un plan de chasse"},
        HTMLid:"3a7a11a1a2a5",
        HTMLclass:"leave"
    },
node3a7a11a1a2a6 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fusion de communes - commission consultative spéciale"},
        HTMLid:"3a7a11a1a2a6",
        HTMLclass:"leave"
    },
node3a7a11a1a2a7 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics communaux"},
        HTMLid:"3a7a11a1a2a7",
        HTMLclass:"leave"
    },
node3a7a11a1a2a8 = {
        parent: node3a7a11a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commande publique"},
        HTMLid:"3a7a11a1a2a8",
        HTMLclass:"leave"
    },
node3a7a11a2 = {
        parent: node3a7a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contre partie du principe : contrôle de l'action des collectivités territoriales"},
        HTMLid:"3a7a11a2",
    },
node3a7a11a2a1 = {
        parent: node3a7a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Archives"},
        HTMLid:"3a7a11a2a1",
        HTMLclass:"leave"
    },
node3a7a11a2a2 = {
        parent: node3a7a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence des autorités de tutelle sur les districts"},
        HTMLid:"3a7a11a2a2",
        HTMLclass:"leave"
    },
node3a7a11a2a3 = {
        parent: node3a7a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence des collectivités territoriales et tutelle administrative"},
        HTMLid:"3a7a11a2a3",
    },
node3a7a11a2a3a1 = {
        parent: node3a7a11a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de substitution"},
        HTMLid:"3a7a11a2a3a1",
        HTMLclass:"leave"
    },
node3a7a11a2a3a2 = {
        parent: node3a7a11a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désignation de l'autorité de tutelle"},
        HTMLid:"3a7a11a2a3a2",
        HTMLclass:"leave"
    },
node3a7a11a2a3a3 = {
        parent: node3a7a11a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine et mise en oeuvre de la tutelle"},
        HTMLid:"3a7a11a2a3a3",
        HTMLclass:"leave"
    },
node3a7a11a2a3a4 = {
        parent: node3a7a11a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégation spéciale"},
        HTMLid:"3a7a11a2a3a4",
        HTMLclass:"leave"
    },
node3a7a11a2a3a5 = {
        parent: node3a7a11a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Agrément des architectes chargés de la réalisation des opérations sanitaires"},
        HTMLid:"3a7a11a2a3a5",
        HTMLclass:"leave"
    },
node3a7a11a3 = {
        parent: node3a7a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transferts de compétence d'une collectivité territoriale à l'État"},
        HTMLid:"3a7a11a3",
        HTMLclass:"leave"
    },
node3a7a11a4 = {
        parent: node3a7a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autonomie financière"},
        HTMLid:"3a7a11a4",
    },
node3a7a11a4a1 = {
        parent: node3a7a11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétences respectives de l'État et des collectivités territoriales"},
        HTMLid:"3a7a11a4a1",
    },
node3a7a11a4a1a1 = {
        parent: node3a7a11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles générales"},
        HTMLid:"3a7a11a4a1a1",
        HTMLclass:"leave"
    },
node3a7a11a4a1a2 = {
        parent: node3a7a11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses obligatoires"},
        HTMLid:"3a7a11a4a1a2",
        HTMLclass:"leave"
    },
node3a7a11a4a1a3 = {
        parent: node3a7a11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de préemption"},
        HTMLid:"3a7a11a4a1a3",
        HTMLclass:"leave"
    },
node3a7a11a4a2 = {
        parent: node3a7a11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources et charges des collectivités territoriales"},
        HTMLid:"3a7a11a4a2",
    },
node3a7a11a4a2a1 = {
        parent: node3a7a11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compensation par l'État des pertes de recettes"},
        HTMLid:"3a7a11a4a2a1",
        HTMLclass:"leave"
    },
node3a7a11a4a2a2 = {
        parent: node3a7a11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources inscrites au budget des structures intercommunales"},
        HTMLid:"3a7a11a4a2a2",
        HTMLclass:"leave"
    },
node3a7a11a4a2a3 = {
        parent: node3a7a11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication annuelle du budget et des comptes des syndicats de communes"},
        HTMLid:"3a7a11a4a2a3",
        HTMLclass:"leave"
    },
node3a7a11a4a2a4 = {
        parent: node3a7a11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notification à l'administration du produit attendu des taxes locales"},
        HTMLid:"3a7a11a4a2a4",
        HTMLclass:"leave"
    },
node3a7a11a4a2a5 = {
        parent: node3a7a11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Vote du budget communal"},
        HTMLid:"3a7a11a4a2a5",
        HTMLclass:"leave"
    },
node3a7a12 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement"},
        HTMLid:"3a7a12",
    },
node3a7a12a1 = {
        parent: node3a7a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence législative"},
        HTMLid:"3a7a12a1",
    },
node3a7a12a1a1 = {
        parent: node3a7a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère électif d'une commission consultative"},
        HTMLid:"3a7a12a1a1",
        HTMLclass:"leave"
    },
node3a7a12a1a2 = {
        parent: node3a7a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil de l'enseignement et de la formation professionnelle agricole -Avis obligatoire"},
        HTMLid:"3a7a12a1a2",
        HTMLclass:"leave"
    },
node3a7a12a1a3 = {
        parent: node3a7a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe de la restriction à l'accès aux études médicales ou pharmaceutiques"},
        HTMLid:"3a7a12a1a3",
        HTMLclass:"leave"
    },
node3a7a12a1a4 = {
        parent: node3a7a12a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement supérieur"},
        HTMLid:"3a7a12a1a4",
        HTMLclass:"leave"
    },
node3a7a12a2 = {
        parent: node3a7a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence réglementaire"},
        HTMLid:"3a7a12a2",
        HTMLclass:"leave"
    },
node3a7a12a2a1 = {
        parent: node3a7a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil de l'enseignement et de la formation professionnelle agricole"},
        HTMLid:"3a7a12a2a1",
        HTMLclass:"leave"
    },
node3a7a12a2a2 = {
        parent: node3a7a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil territorial de l'éducation nationale"},
        HTMLid:"3a7a12a2a2",
        HTMLclass:"leave"
    },
node3a7a12a2a3 = {
        parent: node3a7a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Études de médecine"},
        HTMLid:"3a7a12a2a3",
        HTMLclass:"leave"
    },
node3a7a12a2a4 = {
        parent: node3a7a12a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Désignation de l'inspecteur d'académie"},
        HTMLid:"3a7a12a2a4",
        HTMLclass:"leave"
    },
node3a7a13 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Environnement"},
        HTMLid:"3a7a13",
        HTMLclass:"leave"
    },
node3a7a14 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime de la propriété, des droits réels et des obligations civiles et commerciales"},
        HTMLid:"3a7a14",
    },
node3a7a14a1 = {
        parent: node3a7a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes fondamentaux du régime de la propriété"},
        HTMLid:"3a7a14a1",
    },
node3a7a14a1a1 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Aménagement, urbanisme, construction, voirie"},
        HTMLid:"3a7a14a1a1",
    },
node3a7a14a1a1a1 = {
        parent: node3a7a14a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Certificat de conformité"},
        HTMLid:"3a7a14a1a1a1",
        HTMLclass:"leave"
    },
node3a7a14a1a1a2 = {
        parent: node3a7a14a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine public maritime"},
        HTMLid:"3a7a14a1a1a2",
        HTMLclass:"leave"
    },
node3a7a14a1a1a3 = {
        parent: node3a7a14a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Terrains frappés d'occupation temporaire"},
        HTMLid:"3a7a14a1a1a3",
        HTMLclass:"leave"
    },
node3a7a14a1a1a4 = {
        parent: node3a7a14a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"3a7a14a1a1a4",
        HTMLclass:"leave"
    },
node3a7a14a1a2 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis d'organismes consultatifs"},
        HTMLid:"3a7a14a1a2",
        HTMLclass:"leave"
    },
node3a7a14a1a3 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Baux"},
        HTMLid:"3a7a14a1a3",
        HTMLclass:"leave"
    },
node3a7a14a1a4 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Baux à ferme"},
        HTMLid:"3a7a14a1a4",
        HTMLclass:"leave"
    },
node3a7a14a1a5 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Carrières"},
        HTMLid:"3a7a14a1a5",
        HTMLclass:"leave"
    },
node3a7a14a1a6 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chasse"},
        HTMLid:"3a7a14a1a6",
        HTMLclass:"leave"
    },
node3a7a14a1a7 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conservation des hypothèques"},
        HTMLid:"3a7a14a1a7",
        HTMLclass:"leave"
    },
node3a7a14a1a8 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Débits de boissons"},
        HTMLid:"3a7a14a1a8",
        HTMLclass:"leave"
    },
node3a7a14a1a9 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Défrichement"},
        HTMLid:"3a7a14a1a9",
        HTMLclass:"leave"
    },
node3a7a14a1a10 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Expropriation"},
        HTMLid:"3a7a14a1a10",
    },
node3a7a14a1a10a1 = {
        parent: node3a7a14a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chambres d'expropriation"},
        HTMLid:"3a7a14a1a10a1",
        HTMLclass:"leave"
    },
node3a7a14a1a10a2 = {
        parent: node3a7a14a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention de l'autorité judiciaire"},
        HTMLid:"3a7a14a1a10a2",
        HTMLclass:"leave"
    },
node3a7a14a1a10a3 = {
        parent: node3a7a14a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indemnisation"},
        HTMLid:"3a7a14a1a10a3",
        HTMLclass:"leave"
    },
node3a7a14a1a10a4 = {
        parent: node3a7a14a1a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure"},
        HTMLid:"3a7a14a1a10a4",
        HTMLclass:"leave"
    },
node3a7a14a1a11 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Monuments ou sites à protéger"},
        HTMLid:"3a7a14a1a11",
        HTMLclass:"leave"
    },
node3a7a14a1a12 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organismes de placement collectif en valeurs mobilières"},
        HTMLid:"3a7a14a1a12",
        HTMLclass:"leave"
    },
node3a7a14a1a13 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prix"},
        HTMLid:"3a7a14a1a13",
        HTMLclass:"leave"
    },
node3a7a14a1a14 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxis"},
        HTMLid:"3a7a14a1a14",
        HTMLclass:"leave"
    },
node3a7a14a1a15 = {
        parent: node3a7a14a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"3a7a14a1a15",
        HTMLclass:"leave"
    },
node3a7a14a1a15a1 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commission - durée des mandats"},
        HTMLid:"3a7a14a1a15a1",
        HTMLclass:"leave"
    },
node3a7a14a1a15a2 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dénomination d'une commission"},
        HTMLid:"3a7a14a1a15a2",
        HTMLclass:"leave"
    },
node3a7a14a1a15a3 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dommages de guerre"},
        HTMLid:"3a7a14a1a15a3",
        HTMLclass:"leave"
    },
node3a7a14a1a15a4 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Terrains communaux"},
        HTMLid:"3a7a14a1a15a4",
        HTMLclass:"leave"
    },
node3a7a14a1a15a5 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code de la route"},
        HTMLid:"3a7a14a1a15a5",
        HTMLclass:"leave"
    },
node3a7a14a1a15a6 = {
        parent: node3a7a14a1a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Marque commerciale"},
        HTMLid:"3a7a14a1a15a6",
        HTMLclass:"leave"
    },
node3a7a14a2 = {
        parent: node3a7a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes fondamentaux des obligations civiles et commerciales"},
        HTMLid:"3a7a14a2",
    },
node3a7a14a2a1 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application des principes"},
        HTMLid:"3a7a14a2a1",
        HTMLclass:"leave"
    },
node3a7a14a2a2 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impositions"},
        HTMLid:"3a7a14a2a2",
        HTMLclass:"leave"
    },
node3a7a14a2a3 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Législation sociale"},
        HTMLid:"3a7a14a2a3",
    },
node3a7a14a2a3a1 = {
        parent: node3a7a14a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Epargne retraite"},
        HTMLid:"3a7a14a2a3a1",
        HTMLclass:"leave"
    },
node3a7a14a2a3a2 = {
        parent: node3a7a14a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propriété de créances nées d'un trop-perçu de cotisations"},
        HTMLid:"3a7a14a2a3a2",
        HTMLclass:"leave"
    },
node3a7a14a2a3a3 = {
        parent: node3a7a14a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rentes"},
        HTMLid:"3a7a14a2a3a3",
        HTMLclass:"leave"
    },
node3a7a14a2a3a4 = {
        parent: node3a7a14a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Paiement des honoraires des professionnels de santé"},
        HTMLid:"3a7a14a2a3a4",
        HTMLclass:"leave"
    },
node3a7a14a2a4 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opérations financières"},
        HTMLid:"3a7a14a2a4",
        HTMLclass:"leave"
    },
node3a7a14a2a5 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Marchés et contrats de l'État et des collectivités locales"},
        HTMLid:"3a7a14a2a5",
        HTMLclass:"leave"
    },
node3a7a14a2a6 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Relations employeurs / salariés"},
        HTMLid:"3a7a14a2a6",
    },
node3a7a14a2a6a1 = {
        parent: node3a7a14a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prime de transport"},
        HTMLid:"3a7a14a2a6a1",
        HTMLclass:"leave"
    },
node3a7a14a2a6a2 = {
        parent: node3a7a14a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect d'une convention par les employeurs"},
        HTMLid:"3a7a14a2a6a2",
        HTMLclass:"leave"
    },
node3a7a14a2a7 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés - Entreprises"},
        HTMLid:"3a7a14a2a7",
        HTMLclass:"leave"
    },
node3a7a14a2a8 = {
        parent: node3a7a14a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Divers"},
        HTMLid:"3a7a14a2a8",
        HTMLclass:"leave"
    },
node3a7a14a2a8a1 = {
        parent: node3a7a14a2a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Créance privilégiée"},
        HTMLid:"3a7a14a2a8a1",
        HTMLclass:"leave"
    },
node3a7a14a2a8a2 = {
        parent: node3a7a14a2a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil d'orientation et de surveillance des caisses d'épargne et de prévoyance"},
        HTMLid:"3a7a14a2a8a2",
        HTMLclass:"leave"
    },
node3a7a14a2a8a3 = {
        parent: node3a7a14a2a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dommages de guerre"},
        HTMLid:"3a7a14a2a8a3",
        HTMLclass:"leave"
    },
node3a7a14a2a8a4 = {
        parent: node3a7a14a2a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité de l'agent comptable d'un organisme de sécurité sociale"},
        HTMLid:"3a7a14a2a8a4",
        HTMLclass:"leave"
    },
node3a7a14a2a8a5 = {
        parent: node3a7a14a2a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Noms de domaine sur internet"},
        HTMLid:"3a7a14a2a8a5",
        HTMLclass:"leave"
    },
node3a7a15 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail et droit de la sécurité sociale"},
        HTMLid:"3a7a15",
    },
node3a7a15a1 = {
        parent: node3a7a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail"},
        HTMLid:"3a7a15a1",
    },
node3a7a15a1a1 = {
        parent: node3a7a15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes fondamentaux du droit du travail"},
        HTMLid:"3a7a15a1a1",
    },
node3a7a15a1a1a1 = {
        parent: node3a7a15a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence législative"},
        HTMLid:"3a7a15a1a1a1",
        HTMLclass:"leave"
    },
node3a7a15a1a1a2 = {
        parent: node3a7a15a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence réglementaire"},
        HTMLid:"3a7a15a1a1a2",
        HTMLclass:"leave"
    },
node3a7a15a1a2 = {
        parent: node3a7a15a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits des travailleurs"},
        HTMLid:"3a7a15a1a2",
    },
node3a7a15a1a2a1 = {
        parent: node3a7a15a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de grève"},
        HTMLid:"3a7a15a1a2a1",
        HTMLclass:"leave"
    },
node3a7a15a1a2a2 = {
        parent: node3a7a15a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit à la participation"},
        HTMLid:"3a7a15a1a2a2",
        HTMLclass:"leave"
    },
node3a7a15a2 = {
        parent: node3a7a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Liberté syndicale"},
        HTMLid:"3a7a15a2",
        HTMLclass:"leave"
    },
node3a7a15a3 = {
        parent: node3a7a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la sécurité sociale"},
        HTMLid:"3a7a15a3",
    },
node3a7a15a3a1 = {
        parent: node3a7a15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Typologie des régimes de sécurité sociale"},
        HTMLid:"3a7a15a3a1",
    },
node3a7a15a3a1a1 = {
        parent: node3a7a15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime général"},
        HTMLid:"3a7a15a3a1a1",
        HTMLclass:"leave"
    },
node3a7a15a3a1a2 = {
        parent: node3a7a15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régimes spéciaux ou particuliers"},
        HTMLid:"3a7a15a3a1a2",
        HTMLclass:"leave"
    },
node3a7a15a3a1a3 = {
        parent: node3a7a15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régimes autonomes"},
        HTMLid:"3a7a15a3a1a3",
        HTMLclass:"leave"
    },
node3a7a15a3a1a4 = {
        parent: node3a7a15a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régimes complémentaires"},
        HTMLid:"3a7a15a3a1a4",
        HTMLclass:"leave"
    },
node3a7a15a3a2 = {
        parent: node3a7a15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recettes sociales"},
        HTMLid:"3a7a15a3a2",
    },
node3a7a15a3a2a1 = {
        parent: node3a7a15a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisations"},
        HTMLid:"3a7a15a3a2a1",
        HTMLclass:"leave"
    },
node3a7a15a3a2a2 = {
        parent: node3a7a15a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recouvrement"},
        HTMLid:"3a7a15a3a2a2",
        HTMLclass:"leave"
    },
node3a7a15a3a3 = {
        parent: node3a7a15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses sociales"},
        HTMLid:"3a7a15a3a3",
    },
node3a7a15a3a3a1 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation d'invalidité et de vieillesse"},
        HTMLid:"3a7a15a3a3a1",
        HTMLclass:"leave"
    },
node3a7a15a3a3a2 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prestations familiales"},
        HTMLid:"3a7a15a3a3a2",
        HTMLclass:"leave"
    },
node3a7a15a3a3a3 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation prénatale"},
        HTMLid:"3a7a15a3a3a3",
        HTMLclass:"leave"
    },
node3a7a15a3a3a4 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation de maternité"},
        HTMLid:"3a7a15a3a3a4",
        HTMLclass:"leave"
    },
node3a7a15a3a3a5 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Congé de naissance ou d'adoption"},
        HTMLid:"3a7a15a3a3a5",
        HTMLclass:"leave"
    },
node3a7a15a3a3a6 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dépenses maladies"},
        HTMLid:"3a7a15a3a3a6",
        HTMLclass:"leave"
    },
node3a7a15a3a3a7 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation logement"},
        HTMLid:"3a7a15a3a3a7",
        HTMLclass:"leave"
    },
node3a7a15a3a3a8 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocation du Fonds national de solidarité"},
        HTMLid:"3a7a15a3a3a8",
        HTMLclass:"leave"
    },
node3a7a15a3a3a9 = {
        parent: node3a7a15a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispense d'avance de frais par le patient"},
        HTMLid:"3a7a15a3a3a9",
        HTMLclass:"leave"
    },
node3a7a15a3a4 = {
        parent: node3a7a15a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Fonctionnement des organismes de sécurité sociale"},
        HTMLid:"3a7a15a3a4",
    },
node3a7a15a3a4a1 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autonomie des organismes"},
        HTMLid:"3a7a15a3a4a1",
        HTMLclass:"leave"
    },
node3a7a15a3a4a2 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concertation avec les médecins"},
        HTMLid:"3a7a15a3a4a2",
        HTMLclass:"leave"
    },
node3a7a15a3a4a3 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concertation avec les professions de santé"},
        HTMLid:"3a7a15a3a4a3",
        HTMLclass:"leave"
    },
node3a7a15a3a4a4 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités de calcul des prestations"},
        HTMLid:"3a7a15a3a4a4",
        HTMLclass:"leave"
    },
node3a7a15a3a4a5 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Gestion des ressources"},
        HTMLid:"3a7a15a3a4a5",
        HTMLclass:"leave"
    },
node3a7a15a3a4a6 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Relations avec les assurés sociaux"},
        HTMLid:"3a7a15a3a4a6",
        HTMLclass:"leave"
    },
node3a7a15a3a4a7 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Information des établissements hospitaliers"},
        HTMLid:"3a7a15a3a4a7",
        HTMLclass:"leave"
    },
node3a7a15a3a4a8 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Administration des organismes de sécurité sociale"},
        HTMLid:"3a7a15a3a4a8",
        HTMLclass:"leave"
    },
node3a7a15a3a4a9 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Missions des organismes de sécurité sociale"},
        HTMLid:"3a7a15a3a4a9",
        HTMLclass:"leave"
    },
node3a7a15a3a4a10 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Outre-mer"},
        HTMLid:"3a7a15a3a4a10",
        HTMLclass:"leave"
    },
node3a7a15a3a4a11 = {
        parent: node3a7a15a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tutelle"},
        HTMLid:"3a7a15a3a4a11",
        HTMLclass:"leave"
    },
node3a7a16 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance et pluralisme des médias"},
        HTMLid:"3a7a16",
        HTMLclass:"leave"
    },
node3a7a17 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit électoral"},
        HTMLid:"3a7a17",
        HTMLclass:"leave"
    },
node3a7a18 = {
        parent: node3a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du législateur précisée ou complétée par une loi organique (22e alinéa de l'article 34)"},
        HTMLid:"3a7a18",
    },
node3a7a18a1 = {
        parent: node3a7a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorités administratives indépendantes et autorités publiques indépendantes"},
        HTMLid:"3a7a18a1",
        HTMLclass:"leave"
    },
node3a7a18a2 = {
        parent: node3a7a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de finances"},
        HTMLid:"3a7a18a2",
    },
tree_config3 = [config,node3,node3a1,node3a2,node3a2a1,node3a2a2,node3a2a2a1,node3a2a2a2,node3a2a2a3,node3a2a2a4,node3a2a2a5,node3a2a3,node3a2a3a1,node3a2a3a1a1,node3a2a3a1a2,node3a2a3a1a3,node3a2a3a1a4,node3a2a3a1a5,node3a2a3a1a6,node3a2a3a2,node3a2a3a2a1,node3a2a3a2a2,node3a2a3a2a3,node3a2a3a2a4,node3a2a3a2a5,node3a2a3a2a5a1,node3a2a3a2a5a2,node3a2a3a2a5a3,node3a2a3a2a5a4,node3a2a3a3,node3a2a3a4,node3a3,node3a3a1,node3a3a2,node3a3a2a1,node3a3a2a2,node3a3a2a2a1,node3a3a2a2a2,node3a3a2a2a3,node3a3a3,node3a3a3a1,node3a3a3a2,node3a3a3a3,node3a3a4,node3a3a4a1,node3a3a4a1a1,node3a3a4a1a1a1,node3a3a4a1a1a2,node3a3a4a1a2,node3a3a4a1a2a1,node3a3a4a1a2a2,node3a3a4a1a2a3,node3a3a4a1a3,node3a3a4a1a3a1,node3a3a4a1a3a2,node3a3a4a1a4,node3a3a4a1a5,node3a3a4a1a6,node3a3a4a1a6a1,node3a3a4a1a7,node3a3a4a1a7a1,node3a3a4a1a7a2,node3a3a4a1a7a3,node3a3a4a1a7a4,node3a3a4a1a7a5,node3a3a4a1a7a6,node3a3a4a2,node3a3a4a2a1,node3a3a4a2a2,node3a3a4a2a3,node3a3a4a2a4,node3a3a4a2a5,node3a3a4a2a6,node3a3a4a2a7,node3a3a4a2a8,node3a3a4a2a9,node3a3a5,node3a4,node3a4a1,node3a4a1a1,node3a4a1a1a1,node3a4a1a1a2,node3a4a1a1a2a1,node3a4a1a1a2a2,node3a4a1a1a2a3,node3a4a1a1a3,node3a4a1a1a4,node3a4a1a2,node3a4a1a2a1,node3a4a1a2a2,node3a4a1a3,node3a4a1a3a1,node3a4a1a3a2,node3a4a1a3a2a1,node3a4a1a3a2a2,node3a4a1a4,node3a4a1a5,node3a4a1a6,node3a4a1a6a1,node3a4a1a6a1a1,node3a4a1a6a1a2,node3a4a1a6a1a3,node3a4a1a6a1a4,node3a4a1a6a2,node3a4a1a7,node3a4a1a7a1,node3a4a2,node3a4a3,node3a4a4,node3a4a4a1,node3a4a4a2,node3a5,node3a5a1,node3a5a1a1,node3a5a1a2,node3a5a1a3,node3a5a1a4,node3a5a2,node3a5a2a1,node3a5a2a2,node3a5a2a3,node3a5a2a4,node3a5a2a4a1,node3a5a2a4a2,node3a5a2a4a3,node3a5a2a4a3a1,node3a5a2a4a3a1a1,node3a5a2a4a3a1a2,node3a5a2a4a3a2,node3a5a2a4a4,node3a5a3,node3a5a3a1,node3a5a3a2,node3a5a3a2a1,node3a5a3a3,node3a6,node3a6a1,node3a6a1a1,node3a6a2,node3a6a3,node3a6a3a1,node3a6a3a2,node3a6a3a3,node3a6a3a3a1,node3a6a3a3a2,node3a6a3a3a3,node3a6a3a3a3a1,node3a6a3a3a3a2,node3a6a3a3a3a3,node3a6a3a3a3a4,node3a6a3a3a4,node3a6a3a3a5,node3a6a3a3a6,node3a6a3a3a7,node3a6a3a3a7a1,node3a6a3a3a7a1a1,node3a6a3a3a7a1a2,node3a6a3a3a7a2,node3a6a3a4,node3a6a3a4a1,node3a6a3a4a2,node3a6a3a4a3,node3a6a4,node3a6a4a1,node3a6a4a2,node3a6a4a3,node3a6a4a3a1,node3a6a4a3a2,node3a6a4a3a2a1,node3a6a4a4,node3a6a4a5,node3a7,node3a7a1,node3a7a1a1,node3a7a1a2,node3a7a1a3,node3a7a1a4,node3a7a1a4a1,node3a7a1a5,node3a7a1a5a1,node3a7a1a5a2,node3a7a1a5a3,node3a7a1a5a4,node3a7a1a5a5,node3a7a1a5a6,node3a7a1a6,node3a7a2,node3a7a2a1,node3a7a2a2,node3a7a3,node3a7a3a1,node3a7a3a1a1,node3a7a3a1a2,node3a7a3a2,node3a7a3a3,node3a7a3a3a1,node3a7a3a3a2,node3a7a3a3a2a1,node3a7a3a3a2a2,node3a7a3a3a2a3,node3a7a3a3a2a4,node3a7a3a3a3,node3a7a3a3a4,node3a7a3a3a4a1,node3a7a3a3a4a2,node3a7a3a3a5,node3a7a3a3a6,node3a7a3a4,node3a7a3a4a1,node3a7a3a4a2,node3a7a3a4a3,node3a7a3a5,node3a7a3a5a1,node3a7a3a5a1a1,node3a7a3a5a1a2,node3a7a3a5a1a3,node3a7a3a5a1a4,node3a7a3a5a1a5,node3a7a3a5a1a6,node3a7a3a5a1a7,node3a7a3a5a1a8,node3a7a3a5a2,node3a7a3a5a3,node3a7a3a5a4,node3a7a3a6,node3a7a4,node3a7a4a1,node3a7a4a1a1,node3a7a4a1a1a1,node3a7a4a1a1a2,node3a7a4a1a1a3,node3a7a4a1a1a4,node3a7a4a1a1a5,node3a7a4a1a2,node3a7a4a1a2a1,node3a7a4a1a2a2,node3a7a4a1a3,node3a7a4a2,node3a7a4a2a1,node3a7a4a2a2,node3a7a4a3,node3a7a4a3a1,node3a7a4a3a2,node3a7a4a4,node3a7a5,node3a7a6,node3a7a6a1,node3a7a6a2,node3a7a6a3,node3a7a7,node3a7a7a1,node3a7a7a1a1,node3a7a7a1a1a1,node3a7a7a1a1a2,node3a7a7a1a1a3,node3a7a7a1a1a4,node3a7a7a1a1a5,node3a7a7a1a1a6,node3a7a7a1a1a7,node3a7a7a1a1a8,node3a7a7a1a1a9,node3a7a7a1a1a10,node3a7a7a1a1a11,node3a7a7a1a2,node3a7a7a1a2a1,node3a7a7a1a2a2,node3a7a7a1a2a3,node3a7a7a1a3,node3a7a7a1a3a1,node3a7a7a1a3a2,node3a7a7a1a3a3,node3a7a7a1a3a4,node3a7a7a1a3a5,node3a7a7a1a3a6,node3a7a7a1a3a7,node3a7a7a2,node3a7a7a2a1,node3a7a7a2a2,node3a7a7a2a3,node3a7a7a2a4,node3a7a7a2a5,node3a7a7a2a6,node3a7a7a3,node3a7a7a3a1,node3a7a7a3a2,node3a7a7a3a3,node3a7a7a3a4,node3a7a7a3a5,node3a7a7a3a6,node3a7a7a3a7,node3a7a7a3a8,node3a7a8,node3a7a8a1,node3a7a8a1a1,node3a7a8a1a2,node3a7a8a1a3,node3a7a8a1a4,node3a7a8a1a5,node3a7a8a2,node3a7a8a2a1,node3a7a8a2a2,node3a7a8a2a3,node3a7a8a2a4,node3a7a8a2a5,node3a7a8a2a6,node3a7a8a2a7,node3a7a8a2a8,node3a7a8a2a9,node3a7a8a2a10,node3a7a8a2a11,node3a7a8a2a12,node3a7a9,node3a7a9a1,node3a7a9a1a1,node3a7a9a2,node3a7a9a2a1,node3a7a9a2a1a1,node3a7a9a2a1a2,node3a7a9a2a1a3,node3a7a9a2a1a4,node3a7a9a2a1a5,node3a7a9a2a2,node3a7a10,node3a7a11,node3a7a11a1,node3a7a11a1a1,node3a7a11a1a1a1,node3a7a11a1a1a2,node3a7a11a1a1a3,node3a7a11a1a1a4,node3a7a11a1a1a5,node3a7a11a1a1a6,node3a7a11a1a1a7,node3a7a11a1a1a8,node3a7a11a1a1a9,node3a7a11a1a1a10,node3a7a11a1a2,node3a7a11a1a2a1,node3a7a11a1a2a2,node3a7a11a1a2a3,node3a7a11a1a2a4,node3a7a11a1a2a5,node3a7a11a1a2a6,node3a7a11a1a2a7,node3a7a11a1a2a8,node3a7a11a2,node3a7a11a2a1,node3a7a11a2a2,node3a7a11a2a3,node3a7a11a2a3a1,node3a7a11a2a3a2,node3a7a11a2a3a3,node3a7a11a2a3a4,node3a7a11a2a3a5,node3a7a11a3,node3a7a11a4,node3a7a11a4a1,node3a7a11a4a1a1,node3a7a11a4a1a2,node3a7a11a4a1a3,node3a7a11a4a2,node3a7a11a4a2a1,node3a7a11a4a2a2,node3a7a11a4a2a3,node3a7a11a4a2a4,node3a7a11a4a2a5,node3a7a12,node3a7a12a1,node3a7a12a1a1,node3a7a12a1a2,node3a7a12a1a3,node3a7a12a1a4,node3a7a12a2,node3a7a12a2a1,node3a7a12a2a2,node3a7a12a2a3,node3a7a12a2a4,node3a7a13,node3a7a14,node3a7a14a1,node3a7a14a1a1,node3a7a14a1a1a1,node3a7a14a1a1a2,node3a7a14a1a1a3,node3a7a14a1a1a4,node3a7a14a1a2,node3a7a14a1a3,node3a7a14a1a4,node3a7a14a1a5,node3a7a14a1a6,node3a7a14a1a7,node3a7a14a1a8,node3a7a14a1a9,node3a7a14a1a10,node3a7a14a1a10a1,node3a7a14a1a10a2,node3a7a14a1a10a3,node3a7a14a1a10a4,node3a7a14a1a11,node3a7a14a1a12,node3a7a14a1a13,node3a7a14a1a14,node3a7a14a1a15,node3a7a14a1a15a1,node3a7a14a1a15a2,node3a7a14a1a15a3,node3a7a14a1a15a4,node3a7a14a1a15a5,node3a7a14a1a15a6,node3a7a14a2,node3a7a14a2a1,node3a7a14a2a2,node3a7a14a2a3,node3a7a14a2a3a1,node3a7a14a2a3a2,node3a7a14a2a3a3,node3a7a14a2a3a4,node3a7a14a2a4,node3a7a14a2a5,node3a7a14a2a6,node3a7a14a2a6a1,node3a7a14a2a6a2,node3a7a14a2a7,node3a7a14a2a8,node3a7a14a2a8a1,node3a7a14a2a8a2,node3a7a14a2a8a3,node3a7a14a2a8a4,node3a7a14a2a8a5,node3a7a15,node3a7a15a1,node3a7a15a1a1,node3a7a15a1a1a1,node3a7a15a1a1a2,node3a7a15a1a2,node3a7a15a1a2a1,node3a7a15a1a2a2,node3a7a15a2,node3a7a15a3,node3a7a15a3a1,node3a7a15a3a1a1,node3a7a15a3a1a2,node3a7a15a3a1a3,node3a7a15a3a1a4,node3a7a15a3a2,node3a7a15a3a2a1,node3a7a15a3a2a2,node3a7a15a3a3,node3a7a15a3a3a1,node3a7a15a3a3a2,node3a7a15a3a3a3,node3a7a15a3a3a4,node3a7a15a3a3a5,node3a7a15a3a3a6,node3a7a15a3a3a7,node3a7a15a3a3a8,node3a7a15a3a3a9,node3a7a15a3a4,node3a7a15a3a4a1,node3a7a15a3a4a2,node3a7a15a3a4a3,node3a7a15a3a4a4,node3a7a15a3a4a5,node3a7a15a3a4a6,node3a7a15a3a4a7,node3a7a15a3a4a8,node3a7a15a3a4a9,node3a7a15a3a4a10,node3a7a15a3a4a11,node3a7a16,node3a7a17,node3a7a18,node3a7a18a1,node3a7a18a2];

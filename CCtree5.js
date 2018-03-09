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
node5 = {
        childrenDropLevel: 1,
        text:{name: "ÉGALITÉ"},
        HTMLid:"5",
    },
node5a1 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DEVANT LA LOI"},
        HTMLid:"5a1",
    },
node5a1a1 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"5a1a1",
        HTMLclass:"leave"
    },
node5a1a2 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Discriminations interdites"},
        HTMLid:"5a1a2",
        HTMLclass:"leave"
    },
node5a1a3 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du principe d'égalité : absence de discrimination injustifiée"},
        HTMLid:"5a1a3",
        HTMLclass:"leave"
    },
node5a1a3a1 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"5a1a3a1",
        HTMLclass:"leave"
    },
node5a1a3a1a1 = {
        parent: node5a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispense de l'obligation d'assurance de dommage"},
        HTMLid:"5a1a3a1a1",
        HTMLclass:"leave"
    },
node5a1a3a1a2 = {
        parent: node5a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compensation par l'État de la perte de recettes fiscales"},
        HTMLid:"5a1a3a1a2",
        HTMLclass:"leave"
    },
node5a1a3a1a3 = {
        parent: node5a1a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des dotations entre catégories de collectivités territoriales"},
        HTMLid:"5a1a3a1a3",
        HTMLclass:"leave"
    },
node5a1a3a2 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la communication"},
        HTMLid:"5a1a3a2",
    },
node5a1a3a2a1 = {
        parent: node5a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Diffusion d'émissions publicitaires à caractère politique"},
        HTMLid:"5a1a3a2a1",
        HTMLclass:"leave"
    },
node5a1a3a2a2 = {
        parent: node5a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime des autorisations"},
        HTMLid:"5a1a3a2a2",
        HTMLclass:"leave"
    },
node5a1a3a2a3 = {
        parent: node5a1a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ressources publicitaires"},
        HTMLid:"5a1a3a2a3",
        HTMLclass:"leave"
    },
node5a1a3a3 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la construction, de l'habitation et de l'urbanisme"},
        HTMLid:"5a1a3a3",
    },
node5a1a3a3a1 = {
        parent: node5a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositif de concertation entre bailleurs et locataires"},
        HTMLid:"5a1a3a3a1",
        HTMLclass:"leave"
    },
node5a1a3a3a2 = {
        parent: node5a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Logement social"},
        HTMLid:"5a1a3a3a2",
        HTMLclass:"leave"
    },
node5a1a3a3a3 = {
        parent: node5a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transfert de propriété d'immeuble"},
        HTMLid:"5a1a3a3a3",
        HTMLclass:"leave"
    },
node5a1a3a3a4 = {
        parent: node5a1a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Qualification d'un texte sans effet sur sa nature juridique"},
        HTMLid:"5a1a3a3a4",
        HTMLclass:"leave"
    },
node5a1a3a4 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"5a1a3a4",
        HTMLclass:"leave"
    },
node5a1a3a4a1 = {
        parent: node5a1a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la nationalité"},
        HTMLid:"5a1a3a4a1",
        HTMLclass:"leave"
    },
node5a1a3a4a2 = {
        parent: node5a1a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "État et capacité des personnes"},
        HTMLid:"5a1a3a4a2",
        HTMLclass:"leave"
    },
node5a1a3a4a3 = {
        parent: node5a1a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit international privé"},
        HTMLid:"5a1a3a4a3",
        HTMLclass:"leave"
    },
node5a1a3a4a4 = {
        parent: node5a1a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des biens et des obligations"},
        HTMLid:"5a1a3a4a4",
        HTMLclass:"leave"
    },
node5a1a3a4a5 = {
        parent: node5a1a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la propriété intellectuelle"},
        HTMLid:"5a1a3a4a5",
        HTMLclass:"leave"
    },
node5a1a3a5 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des assurances"},
        HTMLid:"5a1a3a5",
        HTMLclass:"leave"
    },
node5a1a3a6 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de l'environnement"},
        HTMLid:"5a1a3a6",
        HTMLclass:"leave"
    },
node5a1a3a7 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit fiscal"},
        HTMLid:"5a1a3a7",
        HTMLclass:"leave"
    },
node5a1a3a8 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal et procédure pénale"},
        HTMLid:"5a1a3a8",
        HTMLclass:"leave"
    },
node5a1a3a9 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"5a1a3a9",
        HTMLclass:"leave"
    },
node5a1a3a9a1 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice de l'allégement de cotisations sociales"},
        HTMLid:"5a1a3a9a1",
        HTMLclass:"leave"
    },
node5a1a3a9a2 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice du complément différentiel de salaire"},
        HTMLid:"5a1a3a9a2",
        HTMLclass:"leave"
    },
node5a1a3a9a3 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions pour l'ouverture de prestations"},
        HTMLid:"5a1a3a9a3",
        HTMLclass:"leave"
    },
node5a1a3a9a4 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conventions collectives dérogatoires au droit commun"},
        HTMLid:"5a1a3a9a4",
        HTMLclass:"leave"
    },
node5a1a3a9a5 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conventions en matière médicale"},
        HTMLid:"5a1a3a9a5",
        HTMLclass:"leave"
    },
node5a1a3a9a6 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail et droit syndical"},
        HTMLid:"5a1a3a9a6",
        HTMLclass:"leave"
    },
node5a1a3a9a7 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recouvrement sur succession en matière d'aide sociale"},
        HTMLid:"5a1a3a9a7",
        HTMLclass:"leave"
    },
node5a1a3a9a8 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retraite"},
        HTMLid:"5a1a3a9a8",
        HTMLclass:"leave"
    },
node5a1a3a9a9 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sécurité sociale"},
        HTMLid:"5a1a3a9a9",
        HTMLclass:"leave"
    },
node5a1a3a9a10 = {
        parent: node5a1a3a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validation législative d'une convention"},
        HTMLid:"5a1a3a9a10",
        HTMLclass:"leave"
    },
node5a1a3a10 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Elections"},
        HTMLid:"5a1a3a10",
    },
node5a1a3a10a1 = {
        parent: node5a1a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Candidature simultanée aux élections aux conseils généraux et aux conseils régionaux"},
        HTMLid:"5a1a3a10a1",
        HTMLclass:"leave"
    },
node5a1a3a10a2 = {
        parent: node5a1a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Elus habilités à présenter des candidats à l'élection présidentielle"},
        HTMLid:"5a1a3a10a2",
        HTMLclass:"leave"
    },
node5a1a3a10a3 = {
        parent: node5a1a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prorogation de mandats électoraux"},
        HTMLid:"5a1a3a10a3",
        HTMLclass:"leave"
    },
node5a1a3a10a4 = {
        parent: node5a1a3a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"5a1a3a10a4",
        HTMLclass:"leave"
    },
node5a1a3a11 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit économique"},
        HTMLid:"5a1a3a11",
        HTMLclass:"leave"
    },
node5a1a3a11a1 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Acquisition des actions de la Caisse nationale de Crédit agricole par les caisses régionales"},
        HTMLid:"5a1a3a11a1",
        HTMLclass:"leave"
    },
node5a1a3a11a2 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Institutions financières spécialisées"},
        HTMLid:"5a1a3a11a2",
        HTMLclass:"leave"
    },
node5a1a3a11a3 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation spécifique de personnels au sein d'organismes professionnels"},
        HTMLid:"5a1a3a11a3",
        HTMLclass:"leave"
    },
node5a1a3a11a4 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés d'investissement"},
        HTMLid:"5a1a3a11a4",
        HTMLclass:"leave"
    },
node5a1a3a11a5 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appel public à l'épargne"},
        HTMLid:"5a1a3a11a5",
        HTMLclass:"leave"
    },
node5a1a3a11a6 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dérogations limitées et temporaires au statut du fermage"},
        HTMLid:"5a1a3a11a6",
        HTMLclass:"leave"
    },
node5a1a3a11a7 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Offre publique d'achat"},
        HTMLid:"5a1a3a11a7",
        HTMLclass:"leave"
    },
node5a1a3a11a8 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation de paris hippiques"},
        HTMLid:"5a1a3a11a8",
        HTMLclass:"leave"
    },
node5a1a3a11a9 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise de dettes consentie à une entreprise en difficulté"},
        HTMLid:"5a1a3a11a9",
        HTMLclass:"leave"
    },
node5a1a3a11a10 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle d'une caisse de garantie en cas de défaillance professionnelle"},
        HTMLid:"5a1a3a11a10",
        HTMLclass:"leave"
    },
node5a1a3a11a11 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commande publique"},
        HTMLid:"5a1a3a11a11",
        HTMLclass:"leave"
    },
node5a1a3a11a12 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Evaluation de la valeur des droits sociaux"},
        HTMLid:"5a1a3a11a12",
        HTMLclass:"leave"
    },
node5a1a3a11a13 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures collectives"},
        HTMLid:"5a1a3a11a13",
        HTMLclass:"leave"
    },
node5a1a3a11a14 = {
        parent: node5a1a3a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Protection des investisseurs"},
        HTMLid:"5a1a3a11a14",
        HTMLclass:"leave"
    },
node5a1a3a12 = {
        parent: node5a1a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications diverses"},
        HTMLid:"5a1a3a12",
        HTMLclass:"leave"
    },
node5a1a3a12a1 = {
        parent: node5a1a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès aux filières de formation professionnelle et d'apprentissage"},
        HTMLid:"5a1a3a12a1",
        HTMLclass:"leave"
    },
node5a1a3a12a2 = {
        parent: node5a1a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non prise en compte des connaissances linguistiques"},
        HTMLid:"5a1a3a12a2",
        HTMLclass:"leave"
    },
node5a1a3a12a3 = {
        parent: node5a1a3a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sport"},
        HTMLid:"5a1a3a12a3",
        HTMLclass:"leave"
    },
node5a1a4 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du principe d'égalité : différence de traitement justifiée par une différence de situation"},
        HTMLid:"5a1a4",
        HTMLclass:"leave"
    },
node5a1a4a1 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Associations"},
        HTMLid:"5a1a4a1",
        HTMLclass:"leave"
    },
node5a1a4a2 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"5a1a4a2",
        HTMLclass:"leave"
    },
node5a1a4a2a1 = {
        parent: node5a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communes"},
        HTMLid:"5a1a4a2a1",
        HTMLclass:"leave"
    },
node5a1a4a2a2 = {
        parent: node5a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Métropoles"},
        HTMLid:"5a1a4a2a2",
        HTMLclass:"leave"
    },
node5a1a4a2a3 = {
        parent: node5a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régions"},
        HTMLid:"5a1a4a2a3",
        HTMLclass:"leave"
    },
node5a1a4a2a4 = {
        parent: node5a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sociétés d'économie mixte locales"},
        HTMLid:"5a1a4a2a4",
        HTMLclass:"leave"
    },
node5a1a4a2a5 = {
        parent: node5a1a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Outre-mer"},
        HTMLid:"5a1a4a2a5",
        HTMLclass:"leave"
    },
node5a1a4a3 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit administratif"},
        HTMLid:"5a1a4a3",
        HTMLclass:"leave"
    },
node5a1a4a4 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la communication"},
        HTMLid:"5a1a4a4",
    },
node5a1a4a4a1 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Presse écrite"},
        HTMLid:"5a1a4a4a1",
        HTMLclass:"leave"
    },
node5a1a4a4a2 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution aux seules associations des dérogations au monopole de la radiodiffusion"},
        HTMLid:"5a1a4a4a2",
        HTMLclass:"leave"
    },
node5a1a4a4a3 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéficiaires des autorisations en matière de communication audiovisuelle"},
        HTMLid:"5a1a4a4a3",
        HTMLclass:"leave"
    },
node5a1a4a4a4 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chaînes publiques"},
        HTMLid:"5a1a4a4a4",
        HTMLclass:"leave"
    },
node5a1a4a4a5 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délivrance d'autorisations aux stations périphériques"},
        HTMLid:"5a1a4a4a5",
        HTMLclass:"leave"
    },
node5a1a4a4a6 = {
        parent: node5a1a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Particularités géographiques"},
        HTMLid:"5a1a4a4a6",
        HTMLclass:"leave"
    },
node5a1a4a5 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal et procédure pénale"},
        HTMLid:"5a1a4a5",
        HTMLclass:"leave"
    },
node5a1a4a5a1 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes accomplis entre personnes du même sexe et actes accomplis entre personnes de sexe différent"},
        HTMLid:"5a1a4a5a1",
        HTMLclass:"leave"
    },
node5a1a4a5a2 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle d'identité"},
        HTMLid:"5a1a4a5a2",
        HTMLclass:"leave"
    },
node5a1a4a5a3 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'un délit spécifique"},
        HTMLid:"5a1a4a5a3",
        HTMLclass:"leave"
    },
node5a1a4a5a4 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime d'individualisation des peines"},
        HTMLid:"5a1a4a5a4",
        HTMLclass:"leave"
    },
node5a1a4a5a5 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Visites de véhicules"},
        HTMLid:"5a1a4a5a5",
        HTMLclass:"leave"
    },
node5a1a4a5a6 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'un gallodrome"},
        HTMLid:"5a1a4a5a6",
        HTMLclass:"leave"
    },
node5a1a4a5a7 = {
        parent: node5a1a4a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandat d'arrêt européen"},
        HTMLid:"5a1a4a5a7",
        HTMLclass:"leave"
    },
node5a1a4a6 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"5a1a4a6",
    },
node5a1a4a6a1 = {
        parent: node5a1a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des personnes et de la famille"},
        HTMLid:"5a1a4a6a1",
        HTMLclass:"leave"
    },
node5a1a4a6a2 = {
        parent: node5a1a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la nationalité"},
        HTMLid:"5a1a4a6a2",
        HTMLclass:"leave"
    },
node5a1a4a6a3 = {
        parent: node5a1a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la responsabilité"},
        HTMLid:"5a1a4a6a3",
        HTMLclass:"leave"
    },
node5a1a4a6a4 = {
        parent: node5a1a4a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligations civiles"},
        HTMLid:"5a1a4a6a4",
        HTMLclass:"leave"
    },
node5a1a4a7 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des assurances"},
        HTMLid:"5a1a4a7",
    },
node5a1a4a8 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit fiscal"},
        HTMLid:"5a1a4a8",
        HTMLclass:"leave"
    },
node5a1a4a9 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit rural"},
        HTMLid:"5a1a4a9",
        HTMLclass:"leave"
    },
node5a1a4a10 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"5a1a4a10",
        HTMLclass:"leave"
    },
node5a1a4a10a1 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assujettissement aux cotisations sociales des plus-values d'achat réalisées sur  stock options "},
        HTMLid:"5a1a4a10a1",
        HTMLclass:"leave"
    },
node5a1a4a10a2 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attribution du produit de nouvelles cotisations à la Caisse nationale d'assurance maladie"},
        HTMLid:"5a1a4a10a2",
        HTMLclass:"leave"
    },
node5a1a4a10a3 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Catégories particulières de bénéficiaires de droits"},
        HTMLid:"5a1a4a10a3",
        HTMLclass:"leave"
    },
node5a1a4a10a4 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions pour l'ouverture de prestations"},
        HTMLid:"5a1a4a10a4",
        HTMLclass:"leave"
    },
node5a1a4a10a5 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conventions médicales distinctes"},
        HTMLid:"5a1a4a10a5",
        HTMLclass:"leave"
    },
node5a1a4a10a6 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dérogations aux règles du droit du travail destinées à favoriser l'emploi des jeunes"},
        HTMLid:"5a1a4a10a6",
        HTMLclass:"leave"
    },
node5a1a4a10a7 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail et droit syndical"},
        HTMLid:"5a1a4a10a7",
        HTMLclass:"leave"
    },
node5a1a4a10a8 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée du travail"},
        HTMLid:"5a1a4a10a8",
        HTMLclass:"leave"
    },
node5a1a4a10a9 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Journée de solidarité"},
        HTMLid:"5a1a4a10a9",
        HTMLclass:"leave"
    },
node5a1a4a10a10 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Législation sur le cumul emploi-retraite"},
        HTMLid:"5a1a4a10a10",
        HTMLclass:"leave"
    },
node5a1a4a10a11 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Législation sur les retraites"},
        HTMLid:"5a1a4a10a11",
        HTMLclass:"leave"
    },
node5a1a4a10a12 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Participation des salariés dans les entreprises"},
        HTMLid:"5a1a4a10a12",
        HTMLclass:"leave"
    },
node5a1a4a10a13 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières concernant les navigants résidant hors de France"},
        HTMLid:"5a1a4a10a13",
        HTMLclass:"leave"
    },
node5a1a4a10a14 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sécurité sociale"},
        HTMLid:"5a1a4a10a14",
        HTMLclass:"leave"
    },
node5a1a4a10a15 = {
        parent: node5a1a4a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Emploi des travailleurs handicapés"},
        HTMLid:"5a1a4a10a15",
        HTMLclass:"leave"
    },
node5a1a4a11 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la construction, de l'habitation et de l'urbanisme"},
        HTMLid:"5a1a4a11",
        HTMLclass:"leave"
    },
node5a1a4a11a1 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution des associations foncières agricoles"},
        HTMLid:"5a1a4a11a1",
        HTMLclass:"leave"
    },
node5a1a4a11a2 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir de sanction du préfet"},
        HTMLid:"5a1a4a11a2",
        HTMLclass:"leave"
    },
node5a1a4a11a3 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles applicables aux propriétés foncières en vertu de documents d'urbanisme"},
        HTMLid:"5a1a4a11a3",
        HTMLclass:"leave"
    },
node5a1a4a11a4 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sauvegarde des sites et des milieux naturels"},
        HTMLid:"5a1a4a11a4",
        HTMLclass:"leave"
    },
node5a1a4a11a5 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de reprise"},
        HTMLid:"5a1a4a11a5",
        HTMLclass:"leave"
    },
node5a1a4a11a6 = {
        parent: node5a1a4a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution des associations foncières agricoles"},
        HTMLid:"5a1a4a11a6",
    },
node5a1a4a12 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit économique"},
        HTMLid:"5a1a4a12",
        HTMLclass:"leave"
    },
node5a1a4a12a1 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de révocation des représentants de l'État dans les organes dirigeants"},
        HTMLid:"5a1a4a12a1",
        HTMLclass:"leave"
    },
node5a1a4a12a2 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle des comptes"},
        HTMLid:"5a1a4a12a2",
        HTMLclass:"leave"
    },
node5a1a4a12a3 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de vote des salariés"},
        HTMLid:"5a1a4a12a3",
        HTMLclass:"leave"
    },
node5a1a4a12a4 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des établissements de crédit à effectuer des opérations bancaires"},
        HTMLid:"5a1a4a12a4",
        HTMLclass:"leave"
    },
node5a1a4a12a5 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interventionnisme économique"},
        HTMLid:"5a1a4a12a5",
        HTMLclass:"leave"
    },
node5a1a4a12a6 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalisations"},
        HTMLid:"5a1a4a12a6",
        HTMLclass:"leave"
    },
node5a1a4a12a7 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Privatisations"},
        HTMLid:"5a1a4a12a7",
        HTMLclass:"leave"
    },
node5a1a4a12a8 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régimes de responsabilité civile des représentants des salariés et des actionnaires"},
        HTMLid:"5a1a4a12a8",
        HTMLclass:"leave"
    },
node5a1a4a12a9 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime des institutions financières particulières et des services de l'État"},
        HTMLid:"5a1a4a12a9",
        HTMLclass:"leave"
    },
node5a1a4a12a10 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation des salariés"},
        HTMLid:"5a1a4a12a10",
        HTMLclass:"leave"
    },
node5a1a4a12a11 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrats de distribution"},
        HTMLid:"5a1a4a12a11",
        HTMLclass:"leave"
    },
node5a1a4a12a12 = {
        parent: node5a1a4a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sanctions pécuniaires pour pratiques anticoncurrentielles"},
        HTMLid:"5a1a4a12a12",
        HTMLclass:"leave"
    },
node5a1a4a13 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de l'environnement"},
        HTMLid:"5a1a4a13",
        HTMLclass:"leave"
    },
node5a1a4a14 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Elections"},
        HTMLid:"5a1a4a14",
        HTMLclass:"leave"
    },
node5a1a4a14a1 = {
        parent: node5a1a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Professions libérales"},
        HTMLid:"5a1a4a14a1",
        HTMLclass:"leave"
    },
node5a1a4a14a2 = {
        parent: node5a1a4a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles d'incompatibilité"},
        HTMLid:"5a1a4a14a2",
        HTMLclass:"leave"
    },
node5a1a4a15 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement"},
        HTMLid:"5a1a4a15",
        HTMLclass:"leave"
    },
node5a1a4a16 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etrangers"},
        HTMLid:"5a1a4a16",
    },
node5a1a4a16a1 = {
        parent: node5a1a4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la nationalité"},
        HTMLid:"5a1a4a16a1",
        HTMLclass:"leave"
    },
node5a1a4a16a2 = {
        parent: node5a1a4a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe d'égalité entre nationaux et étrangers"},
        HTMLid:"5a1a4a16a2",
        HTMLclass:"leave"
    },
node5a1a4a17 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Expropriation pour cause d'utilité publique"},
        HTMLid:"5a1a4a17",
        HTMLclass:"leave"
    },
node5a1a4a18 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de validation"},
        HTMLid:"5a1a4a18",
    },
node5a1a4a18a1 = {
        parent: node5a1a4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Offres de prêts immobiliers"},
        HTMLid:"5a1a4a18a1",
        HTMLclass:"leave"
    },
node5a1a4a18a2 = {
        parent: node5a1a4a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Situation propre d'un syndicat intercommunal"},
        HTMLid:"5a1a4a18a2",
        HTMLclass:"leave"
    },
node5a1a4a19 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police administrative"},
        HTMLid:"5a1a4a19",
        HTMLclass:"leave"
    },
node5a1a4a20 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public"},
        HTMLid:"5a1a4a20",
        HTMLclass:"leave"
    },
node5a1a4a20a1 = {
        parent: node5a1a4a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrats de service public"},
        HTMLid:"5a1a4a20a1",
        HTMLclass:"leave"
    },
node5a1a4a20a2 = {
        parent: node5a1a4a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégations de service public"},
        HTMLid:"5a1a4a20a2",
        HTMLclass:"leave"
    },
node5a1a4a21 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut de la magistrature"},
        HTMLid:"5a1a4a21",
        HTMLclass:"leave"
    },
node5a1a4a22 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transparence de la vie publique"},
        HTMLid:"5a1a4a22",
        HTMLclass:"leave"
    },
node5a1a4a23 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la santé"},
        HTMLid:"5a1a4a23",
        HTMLclass:"leave"
    },
node5a1a4a24 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit commercial"},
        HTMLid:"5a1a4a24",
        HTMLclass:"leave"
    },
node5a1a4a25 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Finances publiques"},
        HTMLid:"5a1a4a25",
        HTMLclass:"leave"
    },
node5a1a4a26 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Union européenne"},
        HTMLid:"5a1a4a26",
        HTMLclass:"leave"
    },
node5a1a4a27 = {
        parent: node5a1a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Religions"},
        HTMLid:"5a1a4a27",
        HTMLclass:"leave"
    },
node5a1a5 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Considérations d'intérêt général justifiant une différence de traitement"},
        HTMLid:"5a1a5",
    },
node5a1a5a1 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Aménagement du territoire"},
        HTMLid:"5a1a5a1",
        HTMLclass:"leave"
    },
node5a1a5a2 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Associations"},
        HTMLid:"5a1a5a2",
        HTMLclass:"leave"
    },
node5a1a5a3 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"5a1a5a3",
        HTMLclass:"leave"
    },
node5a1a5a4 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la communication"},
        HTMLid:"5a1a5a4",
    },
node5a1a5a4a1 = {
        parent: node5a1a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication audiovisuelle"},
        HTMLid:"5a1a5a4a1",
        HTMLclass:"leave"
    },
node5a1a5a4a2 = {
        parent: node5a1a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Presse écrite"},
        HTMLid:"5a1a5a4a2",
        HTMLclass:"leave"
    },
node5a1a5a5 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"5a1a5a5",
    },
node5a1a5a5a1 = {
        parent: node5a1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la nationalité"},
        HTMLid:"5a1a5a5a1",
        HTMLclass:"leave"
    },
node5a1a5a5a2 = {
        parent: node5a1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la responsabilité"},
        HTMLid:"5a1a5a5a2",
        HTMLclass:"leave"
    },
node5a1a5a5a3 = {
        parent: node5a1a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des contrats"},
        HTMLid:"5a1a5a5a3",
        HTMLclass:"leave"
    },
node5a1a5a6 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit économique"},
        HTMLid:"5a1a5a6",
        HTMLclass:"leave"
    },
node5a1a5a6a1 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assurance et réassurance"},
        HTMLid:"5a1a5a6a1",
        HTMLclass:"leave"
    },
node5a1a5a6a2 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Banques"},
        HTMLid:"5a1a5a6a2",
        HTMLclass:"leave"
    },
node5a1a5a6a3 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Commande publique"},
        HTMLid:"5a1a5a6a3",
        HTMLclass:"leave"
    },
node5a1a5a6a4 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Épargne-logement"},
        HTMLid:"5a1a5a6a4",
        HTMLclass:"leave"
    },
node5a1a5a6a5 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publicité"},
        HTMLid:"5a1a5a6a5",
        HTMLclass:"leave"
    },
node5a1a5a6a6 = {
        parent: node5a1a5a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création et développement des entreprises"},
        HTMLid:"5a1a5a6a6",
        HTMLclass:"leave"
    },
node5a1a5a7 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit fiscal"},
        HTMLid:"5a1a5a7",
        HTMLclass:"leave"
    },
node5a1a5a8 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal et procédure pénale"},
        HTMLid:"5a1a5a8",
        HTMLclass:"leave"
    },
node5a1a5a9 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"5a1a5a9",
        HTMLclass:"leave"
    },
node5a1a5a9a1 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Professions libérales"},
        HTMLid:"5a1a5a9a1",
        HTMLclass:"leave"
    },
node5a1a5a9a2 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Médecins et professions médicales"},
        HTMLid:"5a1a5a9a2",
        HTMLclass:"leave"
    },
node5a1a5a9a3 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incitation au développement de l'emploi"},
        HTMLid:"5a1a5a9a3",
        HTMLclass:"leave"
    },
node5a1a5a9a4 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prestations d'aide sociale"},
        HTMLid:"5a1a5a9a4",
        HTMLclass:"leave"
    },
node5a1a5a9a5 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prestations de sécurité sociale"},
        HTMLid:"5a1a5a9a5",
        HTMLclass:"leave"
    },
node5a1a5a9a6 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retraites"},
        HTMLid:"5a1a5a9a6",
        HTMLclass:"leave"
    },
node5a1a5a9a7 = {
        parent: node5a1a5a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affiliation au régime général d'assurance maladie"},
        HTMLid:"5a1a5a9a7",
        HTMLclass:"leave"
    },
node5a1a5a10 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Élections"},
        HTMLid:"5a1a5a10",
        HTMLclass:"leave"
    },
node5a1a5a11 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Emploi et droit du travail"},
        HTMLid:"5a1a5a11",
        HTMLclass:"leave"
    },
node5a1a5a12 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit administratif"},
        HTMLid:"5a1a5a12",
    },
node5a1a5a13 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des transports"},
        HTMLid:"5a1a5a13",
        HTMLclass:"leave"
    },
node5a1a5a14 = {
        parent: node5a1a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Redevances"},
        HTMLid:"5a1a5a14",
        HTMLclass:"leave"
    },
node5a1a6 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violation du principe d'égalité"},
        HTMLid:"5a1a6",
    },
node5a1a6a1 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"5a1a6a1",
        HTMLclass:"leave"
    },
node5a1a6a2 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la communication"},
        HTMLid:"5a1a6a2",
    },
node5a1a6a2a1 = {
        parent: node5a1a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication électronique"},
        HTMLid:"5a1a6a2a1",
        HTMLclass:"leave"
    },
node5a1a6a2a2 = {
        parent: node5a1a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de réponse"},
        HTMLid:"5a1a6a2a2",
        HTMLclass:"leave"
    },
node5a1a6a3 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit économique"},
        HTMLid:"5a1a6a3",
    },
node5a1a6a3a1 = {
        parent: node5a1a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délégations de services publics et de marchés publics"},
        HTMLid:"5a1a6a3a1",
        HTMLclass:"leave"
    },
node5a1a6a3a2 = {
        parent: node5a1a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entreprises publiques"},
        HTMLid:"5a1a6a3a2",
        HTMLclass:"leave"
    },
node5a1a6a3a3 = {
        parent: node5a1a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Aides publiques"},
        HTMLid:"5a1a6a3a3",
        HTMLclass:"leave"
    },
node5a1a6a4 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit électoral"},
        HTMLid:"5a1a6a4",
        HTMLclass:"leave"
    },
node5a1a6a4a1 = {
        parent: node5a1a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles d'inéligibilité"},
        HTMLid:"5a1a6a4a1",
        HTMLclass:"leave"
    },
node5a1a6a4a2 = {
        parent: node5a1a6a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles d'incompatibilité"},
        HTMLid:"5a1a6a4a2",
        HTMLclass:"leave"
    },
node5a1a6a5 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"5a1a6a5",
        HTMLclass:"leave"
    },
node5a1a6a6 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit pénal et procédure pénale"},
        HTMLid:"5a1a6a6",
        HTMLclass:"leave"
    },
node5a1a6a6a1 = {
        parent: node5a1a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exonération de responsabilité"},
        HTMLid:"5a1a6a6a1",
        HTMLclass:"leave"
    },
node5a1a6a6a2 = {
        parent: node5a1a6a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la propriété intellectuelle"},
        HTMLid:"5a1a6a6a2",
        HTMLclass:"leave"
    },
node5a1a6a7 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"5a1a6a7",
        HTMLclass:"leave"
    },
node5a1a6a8 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement"},
        HTMLid:"5a1a6a8",
        HTMLclass:"leave"
    },
node5a1a6a9 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etrangers"},
        HTMLid:"5a1a6a9",
        HTMLclass:"leave"
    },
node5a1a6a10 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nationalité"},
        HTMLid:"5a1a6a10",
        HTMLclass:"leave"
    },
node5a1a6a11 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police administrative"},
        HTMLid:"5a1a6a11",
        HTMLclass:"leave"
    },
node5a1a6a12 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut des magistrats"},
        HTMLid:"5a1a6a12",
        HTMLclass:"leave"
    },
node5a1a6a13 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit fiscal"},
        HTMLid:"5a1a6a13",
        HTMLclass:"leave"
    },
node5a1a6a14 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des assurances"},
        HTMLid:"5a1a6a14",
        HTMLclass:"leave"
    },
node5a1a6a15 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit du travail"},
        HTMLid:"5a1a6a15",
        HTMLclass:"leave"
    },
node5a1a6a16 = {
        parent: node5a1a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de l'environnement"},
        HTMLid:"5a1a6a16",
        HTMLclass:"leave"
    },
node5a1a7 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions particulières aux départements du Bas-Rhin, du Haut-Rhin et de la Moselle"},
        HTMLid:"5a1a7",
    },
node5a1a7a1 = {
        parent: node5a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe fondamental reconnu par les lois de la République"},
        HTMLid:"5a1a7a1",
        HTMLclass:"leave"
    },
node5a1a7a2 = {
        parent: node5a1a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applications"},
        HTMLid:"5a1a7a2",
    },
node5a1a7a2a1 = {
        parent: node5a1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Repos dominical"},
        HTMLid:"5a1a7a2a1",
        HTMLclass:"leave"
    },
node5a1a7a2a2 = {
        parent: node5a1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit civil"},
        HTMLid:"5a1a7a2a2",
        HTMLclass:"leave"
    },
node5a1a7a2a3 = {
        parent: node5a1a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit des assurances"},
        HTMLid:"5a1a7a2a3",
        HTMLclass:"leave"
    },
node5a1a8 = {
        parent: node5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conciliation avec l'objectif de parité entre les femmes et les hommes"},
        HTMLid:"5a1a8",
        HTMLclass:"leave"
    },
node5a2 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DEVANT LA JUSTICE"},
        HTMLid:"5a2",
    },
node5a2a1 = {
        parent: node5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amnistie et autres mesures d'effacement de la peine"},
        HTMLid:"5a2a1",
    },
node5a2a1a1 = {
        parent: node5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"5a2a1a1",
        HTMLclass:"leave"
    },
node5a2a1a2 = {
        parent: node5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime spécifique"},
        HTMLid:"5a2a1a2",
        HTMLclass:"leave"
    },
node5a2a1a3 = {
        parent: node5a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réhabilitation judiciaire"},
        HTMLid:"5a2a1a3",
        HTMLclass:"leave"
    },
node5a2a2 = {
        parent: node5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité et droits - Garanties des justiciables"},
        HTMLid:"5a2a2",
    },
node5a2a2a1 = {
        parent: node5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle juridictionnel des conditions de licenciement d'un salarié"},
        HTMLid:"5a2a2a1",
        HTMLclass:"leave"
    },
node5a2a2a2 = {
        parent: node5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité et règles de procédure"},
        HTMLid:"5a2a2a2",
    },
node5a2a2a2a1 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de compétence"},
        HTMLid:"5a2a2a2a1",
        HTMLclass:"leave"
    },
node5a2a2a2a2 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de la défense"},
        HTMLid:"5a2a2a2a2",
        HTMLclass:"leave"
    },
node5a2a2a2a3 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Equilibre des droits des parties dans la procédure"},
        HTMLid:"5a2a2a2a3",
        HTMLclass:"leave"
    },
node5a2a2a2a4 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détention provisoire"},
        HTMLid:"5a2a2a2a4",
        HTMLclass:"leave"
    },
node5a2a2a2a5 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures dérogatoires pour certaines infractions"},
        HTMLid:"5a2a2a2a5",
        HTMLclass:"leave"
    },
node5a2a2a2a6 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédures d'imposition"},
        HTMLid:"5a2a2a2a6",
        HTMLclass:"leave"
    },
node5a2a2a2a6a1 = {
        parent: node5a2a2a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Amnistie fiscale"},
        HTMLid:"5a2a2a2a6a1",
        HTMLclass:"leave"
    },
node5a2a2a2a6a2 = {
        parent: node5a2a2a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lutte contre la fraude fiscale"},
        HTMLid:"5a2a2a2a6a2",
        HTMLclass:"leave"
    },
node5a2a2a2a6a3 = {
        parent: node5a2a2a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sursis à paiement"},
        HTMLid:"5a2a2a2a6a3",
        HTMLclass:"leave"
    },
node5a2a2a2a6a4 = {
        parent: node5a2a2a2a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxation d'office"},
        HTMLid:"5a2a2a2a6a4",
        HTMLclass:"leave"
    },
node5a2a2a2a7 = {
        parent: node5a2a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mandat d'arrêt"},
        HTMLid:"5a2a2a2a7",
        HTMLclass:"leave"
    },
node5a2a2a3 = {
        parent: node5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité des prévenus et droits de la partie civile"},
        HTMLid:"5a2a2a3",
    },
node5a2a2a3a1 = {
        parent: node5a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit au double degré de juridiction"},
        HTMLid:"5a2a2a3a1",
        HTMLclass:"leave"
    },
node5a2a2a3a2 = {
        parent: node5a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des droits de la défense et droit à la présomption d'innocence"},
        HTMLid:"5a2a2a3a2",
        HTMLclass:"leave"
    },
node5a2a2a3a3 = {
        parent: node5a2a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Publicité de l'audience"},
        HTMLid:"5a2a2a3a3",
        HTMLclass:"leave"
    },
node5a2a2a4 = {
        parent: node5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité dans l'exercice des voies de recours"},
        HTMLid:"5a2a2a4",
        HTMLclass:"leave"
    },
node5a2a2a4a1 = {
        parent: node5a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recours contre les décisions administratives"},
        HTMLid:"5a2a2a4a1",
        HTMLclass:"leave"
    },
node5a2a2a4a2 = {
        parent: node5a2a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles applicables à Mayotte"},
        HTMLid:"5a2a2a4a2",
        HTMLclass:"leave"
    },
node5a2a3 = {
        parent: node5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juridictions"},
        HTMLid:"5a2a3",
    },
node5a2a3a1 = {
        parent: node5a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition et compétence des juridictions"},
        HTMLid:"5a2a3a1",
        HTMLclass:"leave"
    },
node5a2a3a1a1 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Juge unique"},
        HTMLid:"5a2a3a1a1",
        HTMLclass:"leave"
    },
node5a2a3a1a2 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Renvoi d'un juge à un autre"},
        HTMLid:"5a2a3a1a2",
        HTMLclass:"leave"
    },
node5a2a3a1a3 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cour d'assises compétente pour certaines infractions"},
        HTMLid:"5a2a3a1a3",
        HTMLclass:"leave"
    },
node5a2a3a1a4 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières applicables à Paris"},
        HTMLid:"5a2a3a1a4",
        HTMLclass:"leave"
    },
node5a2a3a1a5 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières applicables en Polynésie française"},
        HTMLid:"5a2a3a1a5",
        HTMLclass:"leave"
    },
node5a2a3a1a6 = {
        parent: node5a2a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles particulières applicables à Mayotte"},
        HTMLid:"5a2a3a1a6",
        HTMLclass:"leave"
    },
node5a2a4 = {
        parent: node5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance des juridictions et respect de la chose jugée"},
        HTMLid:"5a2a4",
        HTMLclass:"leave"
    },
node5a2a5 = {
        parent: node5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avocats"},
        HTMLid:"5a2a5",
        HTMLclass:"leave"
    },
node5a3 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DEVANT LE SERVICE PUBLIC"},
        HTMLid:"5a3",
    },
node5a3a1 = {
        parent: node5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant les services publics"},
        HTMLid:"5a3a1",
        HTMLclass:"leave"
    },
node5a3a2 = {
        parent: node5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant le service public de la santé"},
        HTMLid:"5a3a2",
        HTMLclass:"leave"
    },
node5a3a3 = {
        parent: node5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant le service public de l'enseignement"},
        HTMLid:"5a3a3",
    },
node5a3a3a1 = {
        parent: node5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assistants d'éducation"},
        HTMLid:"5a3a3a1",
        HTMLclass:"leave"
    },
node5a3a3a2 = {
        parent: node5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité des élèves face au service public de l'enseignement"},
        HTMLid:"5a3a3a2",
        HTMLclass:"leave"
    },
node5a3a3a3 = {
        parent: node5a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Insertion dans le temps scolaire de la langue et de la culture corses"},
        HTMLid:"5a3a3a3",
        HTMLclass:"leave"
    },
node5a3a4 = {
        parent: node5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant le service public des transports"},
        HTMLid:"5a3a4",
        HTMLclass:"leave"
    },
node5a4 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DEVANT LES CHARGES PUBLIQUES"},
        HTMLid:"5a4",
    },
node5a4a1 = {
        parent: node5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Signification du principe"},
        HTMLid:"5a4a1",
    },
node5a4a1a1 = {
        parent: node5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction des distinctions excessives"},
        HTMLid:"5a4a1a1",
        HTMLclass:"leave"
    },
node5a4a1a2 = {
        parent: node5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interdiction des assimilations excessives"},
        HTMLid:"5a4a1a2",
        HTMLclass:"leave"
    },
node5a4a2 = {
        parent: node5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Champ d'application du principe"},
        HTMLid:"5a4a2",
    },
node5a4a2a1 = {
        parent: node5a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objet de la législation"},
        HTMLid:"5a4a2a1",
        HTMLclass:"leave"
    },
node5a4a2a1a1 = {
        parent: node5a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Octroi d'avantages"},
        HTMLid:"5a4a2a1a1",
        HTMLclass:"leave"
    },
node5a4a2a1a2 = {
        parent: node5a4a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Soumission à des sujétions"},
        HTMLid:"5a4a2a1a2",
        HTMLclass:"leave"
    },
node5a4a2a2 = {
        parent: node5a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité en matière d'impositions de toutes natures"},
        HTMLid:"5a4a2a2",
    },
node5a4a2a2a1 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avantages, réductions et crédits d'impôts"},
        HTMLid:"5a4a2a2a1",
        HTMLclass:"leave"
    },
node5a4a2a2a2 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bonus-malus sur les consommations domestiques d'énergies de réseau"},
        HTMLid:"5a4a2a2a2",
        HTMLclass:"leave"
    },
node5a4a2a2a3 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution au remboursement de la dette sociale"},
        HTMLid:"5a4a2a2a3",
        HTMLclass:"leave"
    },
node5a4a2a2a4 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution carbone"},
        HTMLid:"5a4a2a2a4",
        HTMLclass:"leave"
    },
node5a4a2a2a5 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution de France Télécom"},
        HTMLid:"5a4a2a2a5",
        HTMLclass:"leave"
    },
node5a4a2a2a6 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution de solidarité territoriale (Polynésie française)"},
        HTMLid:"5a4a2a2a6",
        HTMLclass:"leave"
    },
node5a4a2a2a7 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution des entreprises de préparation de médicaments"},
        HTMLid:"5a4a2a2a7",
        HTMLclass:"leave"
    },
node5a4a2a2a8 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution des institutions financières"},
        HTMLid:"5a4a2a2a8",
        HTMLclass:"leave"
    },
node5a4a2a2a9 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution économique territoriale"},
        HTMLid:"5a4a2a2a9",
        HTMLclass:"leave"
    },
node5a4a2a2a9a1 = {
        parent: node5a4a2a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisation foncière des entreprises"},
        HTMLid:"5a4a2a2a9a1",
        HTMLclass:"leave"
    },
node5a4a2a2a9a2 = {
        parent: node5a4a2a2a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisation sur la valeur ajoutée des entreprises"},
        HTMLid:"5a4a2a2a9a2",
        HTMLclass:"leave"
    },
node5a4a2a2a10 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution exceptionnelle sur la valeur des stocks de produits pétroliers"},
        HTMLid:"5a4a2a2a10",
        HTMLclass:"leave"
    },
node5a4a2a2a11 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution représentative du droit de bail et contribution additionnelle"},
        HTMLid:"5a4a2a2a11",
        HTMLclass:"leave"
    },
node5a4a2a2a12 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution salariale sur les gains et avantages d'acquisition des  stock options  et actions gratuites"},
        HTMLid:"5a4a2a2a12",
        HTMLclass:"leave"
    },
node5a4a2a2a13 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution sociale généralisée"},
        HTMLid:"5a4a2a2a13",
        HTMLclass:"leave"
    },
node5a4a2a2a14 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution sur la consommation d'énergie (CSPE)"},
        HTMLid:"5a4a2a2a14",
        HTMLclass:"leave"
    },
node5a4a2a2a15 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution sur les boissons énergisantes"},
        HTMLid:"5a4a2a2a15",
        HTMLclass:"leave"
    },
node5a4a2a2a16 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contributions sur les jus de fruits, eaux et sodas"},
        HTMLid:"5a4a2a2a16",
        HTMLclass:"leave"
    },
node5a4a2a2a17 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisation  1 % logement "},
        HTMLid:"5a4a2a2a17",
        HTMLclass:"leave"
    },
node5a4a2a2a18 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisation sur les boissons alcooliques"},
        HTMLid:"5a4a2a2a18",
        HTMLclass:"leave"
    },
node5a4a2a2a19 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de consommation sur les tabacs"},
        HTMLid:"5a4a2a2a19",
        HTMLclass:"leave"
    },
node5a4a2a2a20 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits d'enregistrement"},
        HTMLid:"5a4a2a2a20",
        HTMLclass:"leave"
    },
node5a4a2a2a21 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de mutation"},
        HTMLid:"5a4a2a2a21",
        HTMLclass:"leave"
    },
node5a4a2a2a22 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Forfait social"},
        HTMLid:"5a4a2a2a22",
        HTMLclass:"leave"
    },
node5a4a2a2a23 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition de la fortune (IGF et ISF)"},
        HTMLid:"5a4a2a2a23",
        HTMLclass:"leave"
    },
node5a4a2a2a24 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition des plus-values immobilières"},
        HTMLid:"5a4a2a2a24",
        HTMLclass:"leave"
    },
node5a4a2a2a25 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition des plus-values mobilières"},
        HTMLid:"5a4a2a2a25",
        HTMLclass:"leave"
    },
node5a4a2a2a26 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition des plus-values professionnelles"},
        HTMLid:"5a4a2a2a26",
        HTMLclass:"leave"
    },
node5a4a2a2a27 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition forfaitaire sur les entreprises de réseaux"},
        HTMLid:"5a4a2a2a27",
        HTMLclass:"leave"
    },
node5a4a2a2a28 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impôt sur les bénéfices (des sociétés)"},
        HTMLid:"5a4a2a2a28",
        HTMLclass:"leave"
    },
node5a4a2a2a28a1 = {
        parent: node5a4a2a2a28,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution exceptionnelle sur l'impôt sur les sociétés"},
        HTMLid:"5a4a2a2a28a1",
        HTMLclass:"leave"
    },
node5a4a2a2a28a2 = {
        parent: node5a4a2a2a28,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution sociale de solidarité des sociétés"},
        HTMLid:"5a4a2a2a28a2",
        HTMLclass:"leave"
    },
node5a4a2a2a29 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impôt sur le revenu (des particuliers)"},
        HTMLid:"5a4a2a2a29",
        HTMLclass:"leave"
    },
node5a4a2a2a30 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impôt sur les spectacles, jeux et divertissements"},
        HTMLid:"5a4a2a2a30",
        HTMLclass:"leave"
    },
node5a4a2a2a31 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intéressement et participation"},
        HTMLid:"5a4a2a2a31",
        HTMLclass:"leave"
    },
node5a4a2a2a32 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvement sur le centre national des caisses d'épargne"},
        HTMLid:"5a4a2a2a32",
        HTMLclass:"leave"
    },
node5a4a2a2a33 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Prélèvement sur le potentiel financier (HLM)"},
        HTMLid:"5a4a2a2a33",
        HTMLclass:"leave"
    },
node5a4a2a2a34 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retraites"},
        HTMLid:"5a4a2a2a34",
        HTMLclass:"leave"
    },
node5a4a2a2a35 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe d'aéroport"},
        HTMLid:"5a4a2a2a35",
        HTMLclass:"leave"
    },
node5a4a2a2a36 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe d'aide au commerce et à l'artisanat (voir également Taxe sur les surfaces commerciales)"},
        HTMLid:"5a4a2a2a36",
        HTMLclass:"leave"
    },
node5a4a2a2a37 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe d'équarrissage (achats de viande)"},
        HTMLid:"5a4a2a2a37",
        HTMLclass:"leave"
    },
node5a4a2a2a38 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe départementale sur le revenu"},
        HTMLid:"5a4a2a2a38",
        HTMLclass:"leave"
    },
node5a4a2a2a39 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe différentielle sur les véhicules à moteur (vignette)"},
        HTMLid:"5a4a2a2a39",
        HTMLclass:"leave"
    },
node5a4a2a2a40 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe exceptionnelle sur les hautes rémunérations attribuées en 2013 et 2014"},
        HTMLid:"5a4a2a2a40",
        HTMLclass:"leave"
    },
node5a4a2a2a41 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxes foncières"},
        HTMLid:"5a4a2a2a41",
        HTMLclass:"leave"
    },
node5a4a2a2a42 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe générale sur les activités polluantes"},
        HTMLid:"5a4a2a2a42",
        HTMLclass:"leave"
    },
node5a4a2a2a43 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe locale sur la publicité extérieure"},
        HTMLid:"5a4a2a2a43",
        HTMLclass:"leave"
    },
node5a4a2a2a44 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe professionnelle"},
        HTMLid:"5a4a2a2a44",
        HTMLclass:"leave"
    },
node5a4a2a2a45 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur l'électricité"},
        HTMLid:"5a4a2a2a45",
        HTMLclass:"leave"
    },
node5a4a2a2a46 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur la réserve de capitalisation des entreprises d'assurance"},
        HTMLid:"5a4a2a2a46",
        HTMLclass:"leave"
    },
node5a4a2a2a47 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur la valeur ajoutée"},
        HTMLid:"5a4a2a2a47",
        HTMLclass:"leave"
    },
node5a4a2a2a48 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur la valeur vénale des immeubles possédés en France par des personnes morales"},
        HTMLid:"5a4a2a2a48",
        HTMLclass:"leave"
    },
node5a4a2a2a49 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur le chiffre d'affaire des laboratoires pharmaceutiques"},
        HTMLid:"5a4a2a2a49",
        HTMLclass:"leave"
    },
node5a4a2a2a50 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les activités commerciales non salariées à durée saisonnière"},
        HTMLid:"5a4a2a2a50",
        HTMLclass:"leave"
    },
node5a4a2a2a51 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les boues d'épuration"},
        HTMLid:"5a4a2a2a51",
        HTMLclass:"leave"
    },
node5a4a2a2a52 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les contrats d'assurance-vie"},
        HTMLid:"5a4a2a2a52",
        HTMLclass:"leave"
    },
node5a4a2a2a53 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les imprimés publicitaires et les journaux gratuits"},
        HTMLid:"5a4a2a2a53",
        HTMLclass:"leave"
    },
node5a4a2a2a54 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxes sur les instances juridictionnelles"},
        HTMLid:"5a4a2a2a54",
        HTMLclass:"leave"
    },
node5a4a2a2a55 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les jeux et paris"},
        HTMLid:"5a4a2a2a55",
        HTMLclass:"leave"
    },
node5a4a2a2a56 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les locaux à usage de bureaux en Île-de-France"},
        HTMLid:"5a4a2a2a56",
        HTMLclass:"leave"
    },
node5a4a2a2a57 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les logements vacants"},
        HTMLid:"5a4a2a2a57",
        HTMLclass:"leave"
    },
node5a4a2a2a58 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les opérateurs de communications électroniques"},
        HTMLid:"5a4a2a2a58",
        HTMLclass:"leave"
    },
node5a4a2a2a59 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les salaires"},
        HTMLid:"5a4a2a2a59",
        HTMLclass:"leave"
    },
node5a4a2a2a60 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les services de télévision"},
        HTMLid:"5a4a2a2a60",
        HTMLclass:"leave"
    },
node5a4a2a2a61 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les surfaces commerciales"},
        HTMLid:"5a4a2a2a61",
        HTMLclass:"leave"
    },
node5a4a2a2a62 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les véhicules des sociétés"},
        HTMLid:"5a4a2a2a62",
        HTMLclass:"leave"
    },
node5a4a2a2a63 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe d'habitation"},
        HTMLid:"5a4a2a2a63",
        HTMLclass:"leave"
    },
node5a4a2a2a64 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution de 3 % sur les montants distribués"},
        HTMLid:"5a4a2a2a64",
        HTMLclass:"leave"
    },
node5a4a2a2a65 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur la publicité diffusée par les chaînes de télévision"},
        HTMLid:"5a4a2a2a65",
        HTMLclass:"leave"
    },
node5a4a2a2a66 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime fiscal des opérations réalisées dans les ETNC"},
        HTMLid:"5a4a2a2a66",
        HTMLclass:"leave"
    },
node5a4a2a2a67 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Versement destiné aux transports"},
        HTMLid:"5a4a2a2a67",
        HTMLclass:"leave"
    },
node5a4a2a2a68 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution sociale à la charge des fournisseurs agréés de produits du tabac"},
        HTMLid:"5a4a2a2a68",
        HTMLclass:"leave"
    },
node5a4a2a2a69 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution patronale sur les attributions d'actions gratuites"},
        HTMLid:"5a4a2a2a69",
        HTMLclass:"leave"
    },
node5a4a2a2a70 = {
        parent: node5a4a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit départemental de passage sur les ouvrages d'art reliant une île maritime au continent"},
        HTMLid:"5a4a2a2a70",
        HTMLclass:"leave"
    },
node5a4a2a3 = {
        parent: node5a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité en dehors des impositions de toutes natures"},
        HTMLid:"5a4a2a3",
        HTMLclass:"leave"
    },
node5a4a2a3a1 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Collectivités territoriales"},
        HTMLid:"5a4a2a3a1",
        HTMLclass:"leave"
    },
node5a4a2a3a2 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cotisations sociales"},
        HTMLid:"5a4a2a3a2",
        HTMLclass:"leave"
    },
node5a4a2a3a3 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service public"},
        HTMLid:"5a4a2a3a3",
        HTMLclass:"leave"
    },
node5a4a2a3a4 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit social"},
        HTMLid:"5a4a2a3a4",
        HTMLclass:"leave"
    },
node5a4a2a3a5 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Créances"},
        HTMLid:"5a4a2a3a5",
        HTMLclass:"leave"
    },
node5a4a2a3a6 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indemnisations"},
        HTMLid:"5a4a2a3a6",
        HTMLclass:"leave"
    },
node5a4a2a3a7 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Journée de solidarité"},
        HTMLid:"5a4a2a3a7",
        HTMLclass:"leave"
    },
node5a4a2a3a8 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Location de biens"},
        HTMLid:"5a4a2a3a8",
        HTMLclass:"leave"
    },
node5a4a2a3a9 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Police administrative"},
        HTMLid:"5a4a2a3a9",
        HTMLclass:"leave"
    },
node5a4a2a3a10 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Redevances"},
        HTMLid:"5a4a2a3a10",
        HTMLclass:"leave"
    },
node5a4a2a3a11 = {
        parent: node5a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Établissements publics"},
        HTMLid:"5a4a2a3a11",
        HTMLclass:"leave"
    },
node5a4a3 = {
        parent: node5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du principe - Conditions du contrôle"},
        HTMLid:"5a4a3",
    },
node5a4a3a1 = {
        parent: node5a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence législative"},
        HTMLid:"5a4a3a1",
    },
node5a4a3a1a1 = {
        parent: node5a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "La détermination des attributs du prélèvement"},
        HTMLid:"5a4a3a1a1",
        HTMLclass:"leave"
    },
node5a4a3a1a2 = {
        parent: node5a4a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination de l'objectif poursuivi"},
        HTMLid:"5a4a3a1a2",
    },
node5a4a3a1a2a1 = {
        parent: node5a4a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif purement fiscal"},
        HTMLid:"5a4a3a1a2a1",
        HTMLclass:"leave"
    },
node5a4a3a1a2a2 = {
        parent: node5a4a3a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Objectif incitatif"},
        HTMLid:"5a4a3a1a2a2",
        HTMLclass:"leave"
    },
node5a4a3a2 = {
        parent: node5a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cadre d'appréciation du principe"},
        HTMLid:"5a4a3a2",
        HTMLclass:"leave"
    },
node5a4a4 = {
        parent: node5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle du principe - exercice du contrôle"},
        HTMLid:"5a4a4",
    },
node5a4a4a1 = {
        parent: node5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Adéquation des dispositions législatives"},
        HTMLid:"5a4a4a1",
        HTMLclass:"leave"
    },
node5a4a4a2 = {
        parent: node5a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proportionnalité des dispositions législatives"},
        HTMLid:"5a4a4a2",
    },
node5a4a4a2a1 = {
        parent: node5a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proportionnalité par rapport aux facultés contributives (impôt confiscatoire)"},
        HTMLid:"5a4a4a2a1",
        HTMLclass:"leave"
    },
node5a4a4a2a2 = {
        parent: node5a4a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Proportionnalité par rapport à l'objectif du législateur"},
        HTMLid:"5a4a4a2a2",
        HTMLclass:"leave"
    },
node5a5 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DANS LES EMPLOIS PUBLICS"},
        HTMLid:"5a5",
    },
node5a5a1 = {
        parent: node5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine d'application du principe"},
        HTMLid:"5a5a1",
        HTMLclass:"leave"
    },
node5a5a2 = {
        parent: node5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égale admissibilité aux emplois publics"},
        HTMLid:"5a5a2",
    },
node5a5a2a1 = {
        parent: node5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Accès à la magistrature"},
        HTMLid:"5a5a2a1",
        HTMLclass:"leave"
    },
node5a5a2a2 = {
        parent: node5a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles de recrutement dans les emplois publics"},
        HTMLid:"5a5a2a2",
        HTMLclass:"leave"
    },
node5a5a2a2a1 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application de traitements différents à des candidats ou agents dans des situations différentes"},
        HTMLid:"5a5a2a2a1",
        HTMLclass:"leave"
    },
node5a5a2a2a2 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Condition de nationalité"},
        HTMLid:"5a5a2a2a2",
        HTMLclass:"leave"
    },
node5a5a2a2a3 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de timbre pour l'inscription à un concours administratif"},
        HTMLid:"5a5a2a2a3",
        HTMLclass:"leave"
    },
node5a5a2a2a4 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Parité entre les sexes"},
        HTMLid:"5a5a2a2a4",
        HTMLclass:"leave"
    },
node5a5a2a2a5 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutements différenciés"},
        HTMLid:"5a5a2a2a5",
        HTMLclass:"leave"
    },
node5a5a2a2a6 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement sans concours"},
        HTMLid:"5a5a2a2a6",
        HTMLclass:"leave"
    },
node5a5a2a2a7 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement sans diplômes"},
        HTMLid:"5a5a2a2a7",
        HTMLclass:"leave"
    },
node5a5a2a2a8 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de l'exigence de capacité des candidats"},
        HTMLid:"5a5a2a2a8",
        HTMLclass:"leave"
    },
node5a5a2a2a9 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Tour extérieur"},
        HTMLid:"5a5a2a2a9",
        HTMLclass:"leave"
    },
node5a5a2a2a10 = {
        parent: node5a5a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conflit d'intérêts"},
        HTMLid:"5a5a2a2a10",
        HTMLclass:"leave"
    },
node5a5a3 = {
        parent: node5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité au regard de la procédure disciplinaire"},
        HTMLid:"5a5a3",
    },
node5a5a3a1 = {
        parent: node5a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retenue pour absence de service fait"},
        HTMLid:"5a5a3a1",
        HTMLclass:"leave"
    },
node5a5a4 = {
        parent: node5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité de traitement dans le déroulement de carrière des fonctionnaires"},
        HTMLid:"5a5a4",
    },
node5a5a4a1 = {
        parent: node5a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du principe"},
        HTMLid:"5a5a4a1",
        HTMLclass:"leave"
    },
node5a5a4a1a1 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurys d'examen"},
        HTMLid:"5a5a4a1a1",
        HTMLclass:"leave"
    },
node5a5a4a1a2 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement"},
        HTMLid:"5a5a4a1a2",
        HTMLclass:"leave"
    },
node5a5a4a1a3 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avancement"},
        HTMLid:"5a5a4a1a3",
        HTMLclass:"leave"
    },
node5a5a4a1a4 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limite d'âge"},
        HTMLid:"5a5a4a1a4",
        HTMLclass:"leave"
    },
node5a5a4a1a5 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en activité en surnombre"},
        HTMLid:"5a5a4a1a5",
        HTMLclass:"leave"
    },
node5a5a4a1a6 = {
        parent: node5a5a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validations législatives"},
        HTMLid:"5a5a4a1a6",
        HTMLclass:"leave"
    },
node5a5a4a2 = {
        parent: node5a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Violation du principe"},
        HTMLid:"5a5a4a2",
        HTMLclass:"leave"
    },
node5a5a5 = {
        parent: node5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité devant la retraite"},
        HTMLid:"5a5a5",
    },
node5a5a5a1 = {
        parent: node5a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité en fonction de la date d'ouverture des droits"},
        HTMLid:"5a5a5a1",
        HTMLclass:"leave"
    },
node5a5a5a2 = {
        parent: node5a5a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Égalité entre femmes et hommes"},
        HTMLid:"5a5a5a2",
        HTMLclass:"leave"
    },
node5a6 = {
        parent: node5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ÉGALITÉ DU SUFFRAGE (voir Titre 8 Élections et référendums - Principes du droit électoral)"},
        HTMLid:"5a6",
    },
tree_config5 = [config,node5,node5a1,node5a1a1,node5a1a2,node5a1a3,node5a1a3a1,node5a1a3a1a1,node5a1a3a1a2,node5a1a3a1a3,node5a1a3a2,node5a1a3a2a1,node5a1a3a2a2,node5a1a3a2a3,node5a1a3a3,node5a1a3a3a1,node5a1a3a3a2,node5a1a3a3a3,node5a1a3a3a4,node5a1a3a4,node5a1a3a4a1,node5a1a3a4a2,node5a1a3a4a3,node5a1a3a4a4,node5a1a3a4a5,node5a1a3a5,node5a1a3a6,node5a1a3a7,node5a1a3a8,node5a1a3a9,node5a1a3a9a1,node5a1a3a9a2,node5a1a3a9a3,node5a1a3a9a4,node5a1a3a9a5,node5a1a3a9a6,node5a1a3a9a7,node5a1a3a9a8,node5a1a3a9a9,node5a1a3a9a10,node5a1a3a10,node5a1a3a10a1,node5a1a3a10a2,node5a1a3a10a3,node5a1a3a10a4,node5a1a3a11,node5a1a3a11a1,node5a1a3a11a2,node5a1a3a11a3,node5a1a3a11a4,node5a1a3a11a5,node5a1a3a11a6,node5a1a3a11a7,node5a1a3a11a8,node5a1a3a11a9,node5a1a3a11a10,node5a1a3a11a11,node5a1a3a11a12,node5a1a3a11a13,node5a1a3a11a14,node5a1a3a12,node5a1a3a12a1,node5a1a3a12a2,node5a1a3a12a3,node5a1a4,node5a1a4a1,node5a1a4a2,node5a1a4a2a1,node5a1a4a2a2,node5a1a4a2a3,node5a1a4a2a4,node5a1a4a2a5,node5a1a4a3,node5a1a4a4,node5a1a4a4a1,node5a1a4a4a2,node5a1a4a4a3,node5a1a4a4a4,node5a1a4a4a5,node5a1a4a4a6,node5a1a4a5,node5a1a4a5a1,node5a1a4a5a2,node5a1a4a5a3,node5a1a4a5a4,node5a1a4a5a5,node5a1a4a5a6,node5a1a4a5a7,node5a1a4a6,node5a1a4a6a1,node5a1a4a6a2,node5a1a4a6a3,node5a1a4a6a4,node5a1a4a7,node5a1a4a8,node5a1a4a9,node5a1a4a10,node5a1a4a10a1,node5a1a4a10a2,node5a1a4a10a3,node5a1a4a10a4,node5a1a4a10a5,node5a1a4a10a6,node5a1a4a10a7,node5a1a4a10a8,node5a1a4a10a9,node5a1a4a10a10,node5a1a4a10a11,node5a1a4a10a12,node5a1a4a10a13,node5a1a4a10a14,node5a1a4a10a15,node5a1a4a11,node5a1a4a11a1,node5a1a4a11a2,node5a1a4a11a3,node5a1a4a11a4,node5a1a4a11a5,node5a1a4a11a6,node5a1a4a12,node5a1a4a12a1,node5a1a4a12a2,node5a1a4a12a3,node5a1a4a12a4,node5a1a4a12a5,node5a1a4a12a6,node5a1a4a12a7,node5a1a4a12a8,node5a1a4a12a9,node5a1a4a12a10,node5a1a4a12a11,node5a1a4a12a12,node5a1a4a13,node5a1a4a14,node5a1a4a14a1,node5a1a4a14a2,node5a1a4a15,node5a1a4a16,node5a1a4a16a1,node5a1a4a16a2,node5a1a4a17,node5a1a4a18,node5a1a4a18a1,node5a1a4a18a2,node5a1a4a19,node5a1a4a20,node5a1a4a20a1,node5a1a4a20a2,node5a1a4a21,node5a1a4a22,node5a1a4a23,node5a1a4a24,node5a1a4a25,node5a1a4a26,node5a1a4a27,node5a1a5,node5a1a5a1,node5a1a5a2,node5a1a5a3,node5a1a5a4,node5a1a5a4a1,node5a1a5a4a2,node5a1a5a5,node5a1a5a5a1,node5a1a5a5a2,node5a1a5a5a3,node5a1a5a6,node5a1a5a6a1,node5a1a5a6a2,node5a1a5a6a3,node5a1a5a6a4,node5a1a5a6a5,node5a1a5a6a6,node5a1a5a7,node5a1a5a8,node5a1a5a9,node5a1a5a9a1,node5a1a5a9a2,node5a1a5a9a3,node5a1a5a9a4,node5a1a5a9a5,node5a1a5a9a6,node5a1a5a9a7,node5a1a5a10,node5a1a5a11,node5a1a5a12,node5a1a5a13,node5a1a5a14,node5a1a6,node5a1a6a1,node5a1a6a2,node5a1a6a2a1,node5a1a6a2a2,node5a1a6a3,node5a1a6a3a1,node5a1a6a3a2,node5a1a6a3a3,node5a1a6a4,node5a1a6a4a1,node5a1a6a4a2,node5a1a6a5,node5a1a6a6,node5a1a6a6a1,node5a1a6a6a2,node5a1a6a7,node5a1a6a8,node5a1a6a9,node5a1a6a10,node5a1a6a11,node5a1a6a12,node5a1a6a13,node5a1a6a14,node5a1a6a15,node5a1a6a16,node5a1a7,node5a1a7a1,node5a1a7a2,node5a1a7a2a1,node5a1a7a2a2,node5a1a7a2a3,node5a1a8,node5a2,node5a2a1,node5a2a1a1,node5a2a1a2,node5a2a1a3,node5a2a2,node5a2a2a1,node5a2a2a2,node5a2a2a2a1,node5a2a2a2a2,node5a2a2a2a3,node5a2a2a2a4,node5a2a2a2a5,node5a2a2a2a6,node5a2a2a2a6a1,node5a2a2a2a6a2,node5a2a2a2a6a3,node5a2a2a2a6a4,node5a2a2a2a7,node5a2a2a3,node5a2a2a3a1,node5a2a2a3a2,node5a2a2a3a3,node5a2a2a4,node5a2a2a4a1,node5a2a2a4a2,node5a2a3,node5a2a3a1,node5a2a3a1a1,node5a2a3a1a2,node5a2a3a1a3,node5a2a3a1a4,node5a2a3a1a5,node5a2a3a1a6,node5a2a4,node5a2a5,node5a3,node5a3a1,node5a3a2,node5a3a3,node5a3a3a1,node5a3a3a2,node5a3a3a3,node5a3a4,node5a4,node5a4a1,node5a4a1a1,node5a4a1a2,node5a4a2,node5a4a2a1,node5a4a2a1a1,node5a4a2a1a2,node5a4a2a2,node5a4a2a2a1,node5a4a2a2a2,node5a4a2a2a3,node5a4a2a2a4,node5a4a2a2a5,node5a4a2a2a6,node5a4a2a2a7,node5a4a2a2a8,node5a4a2a2a9,node5a4a2a2a9a1,node5a4a2a2a9a2,node5a4a2a2a10,node5a4a2a2a11,node5a4a2a2a12,node5a4a2a2a13,node5a4a2a2a14,node5a4a2a2a15,node5a4a2a2a16,node5a4a2a2a17,node5a4a2a2a18,node5a4a2a2a19,node5a4a2a2a20,node5a4a2a2a21,node5a4a2a2a22,node5a4a2a2a23,node5a4a2a2a24,node5a4a2a2a25,node5a4a2a2a26,node5a4a2a2a27,node5a4a2a2a28,node5a4a2a2a28a1,node5a4a2a2a28a2,node5a4a2a2a29,node5a4a2a2a30,node5a4a2a2a31,node5a4a2a2a32,node5a4a2a2a33,node5a4a2a2a34,node5a4a2a2a35,node5a4a2a2a36,node5a4a2a2a37,node5a4a2a2a38,node5a4a2a2a39,node5a4a2a2a40,node5a4a2a2a41,node5a4a2a2a42,node5a4a2a2a43,node5a4a2a2a44,node5a4a2a2a45,node5a4a2a2a46,node5a4a2a2a47,node5a4a2a2a48,node5a4a2a2a49,node5a4a2a2a50,node5a4a2a2a51,node5a4a2a2a52,node5a4a2a2a53,node5a4a2a2a54,node5a4a2a2a55,node5a4a2a2a56,node5a4a2a2a57,node5a4a2a2a58,node5a4a2a2a59,node5a4a2a2a60,node5a4a2a2a61,node5a4a2a2a62,node5a4a2a2a63,node5a4a2a2a64,node5a4a2a2a65,node5a4a2a2a66,node5a4a2a2a67,node5a4a2a2a68,node5a4a2a2a69,node5a4a2a2a70,node5a4a2a3,node5a4a2a3a1,node5a4a2a3a2,node5a4a2a3a3,node5a4a2a3a4,node5a4a2a3a5,node5a4a2a3a6,node5a4a2a3a7,node5a4a2a3a8,node5a4a2a3a9,node5a4a2a3a10,node5a4a2a3a11,node5a4a3,node5a4a3a1,node5a4a3a1a1,node5a4a3a1a2,node5a4a3a1a2a1,node5a4a3a1a2a2,node5a4a3a2,node5a4a4,node5a4a4a1,node5a4a4a2,node5a4a4a2a1,node5a4a4a2a2,node5a5,node5a5a1,node5a5a2,node5a5a2a1,node5a5a2a2,node5a5a2a2a1,node5a5a2a2a2,node5a5a2a2a3,node5a5a2a2a4,node5a5a2a2a5,node5a5a2a2a6,node5a5a2a2a7,node5a5a2a2a8,node5a5a2a2a9,node5a5a2a2a10,node5a5a3,node5a5a3a1,node5a5a4,node5a5a4a1,node5a5a4a1a1,node5a5a4a1a2,node5a5a4a1a3,node5a5a4a1a4,node5a5a4a1a5,node5a5a4a1a6,node5a5a4a2,node5a5a5,node5a5a5a1,node5a5a5a2,node5a6];

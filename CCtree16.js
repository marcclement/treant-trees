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
node16 = {
        childrenDropLevel: 1,
        text:{name: "RÉSERVES D'INTERPRÉTATION"},
        HTMLid:"16",
    },
node16a1 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "GÉNÉRALITÉS"},
        HTMLid:"16a1",
    },
node16a1a1 = {
        parent: node16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas où le Conseil constitutionnel ne peut procéder à une interprétation neutralisante."},
        HTMLid:"16a1a1",
        HTMLclass:"leave"
    },
node16a1a2 = {
        parent: node16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation de la loi après censure partielle."},
        HTMLid:"16a1a2",
        HTMLclass:"leave"
    },
node16a1a3 = {
        parent: node16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Interprétation de la loi assurant son accessibilité et son intelligibilité"},
        HTMLid:"16a1a3",
        HTMLclass:"leave"
    },
node16a1a4 = {
        parent: node16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Difficulté dans la détermination du champ d'application d'une réserve d'interprétation"},
        HTMLid:"16a1a4",
        HTMLclass:"leave"
    },
node16a2 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT CIVIL"},
        HTMLid:"16a2",
    },
node16a2a1 = {
        parent: node16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code civil"},
        HTMLid:"16a2a1",
    },
node16a2a1a1 = {
        parent: node16a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 26-4 (délai de contestation par le ministère public de la déclaration d'acquisition de la nationalité par mariage)"},
        HTMLid:"16a2a1a1",
        HTMLclass:"leave"
    },
node16a2a1a2 = {
        parent: node16a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 274, 2° (prestation compensatoire en capital)"},
        HTMLid:"16a2a1a2",
        HTMLclass:"leave"
    },
node16a2a2 = {
        parent: node16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Statut civil coutumier"},
        HTMLid:"16a2a2",
    },
node16a2a2a1 = {
        parent: node16a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique n° 99-209 du 19 mars 1999"},
        HTMLid:"16a2a2a1",
        HTMLclass:"leave"
    },
node16a2a2a2 = {
        parent: node16a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique n° 2013-1027 du 15 novembre 2013"},
        HTMLid:"16a2a2a2",
        HTMLclass:"leave"
    },
node16a2a3 = {
        parent: node16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pacte civil de solidarité (loi n° 99-944 du 15 novembre 1999)"},
        HTMLid:"16a2a3",
        HTMLclass:"leave"
    },
node16a3 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT ÉCONOMIQUE"},
        HTMLid:"16a3",
    },
node16a3a1 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la commande publique loi (n° 2003-591 du 2 juillet 2003) - Exigences de complexité et d'urgence pour les contrats de partenariats public-privé"},
        HTMLid:"16a3a1",
        HTMLclass:"leave"
    },
node16a3a2 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droit de la commande publique (n° 2003-591 du 2 juillet 2003) - Caractère ajustable des modalités de financement d'un contrat de partenariat"},
        HTMLid:"16a3a2",
    },
node16a3a3 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant mesures urgentes de réformes à caractère économique et financier (n° 2001-1168 du 11 décembre 2001) - Informations délivrées par la COB"},
        HTMLid:"16a3a3",
        HTMLclass:"leave"
    },
node16a3a4 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Privatisation"},
        HTMLid:"16a3a4",
    },
node16a3a4a1 = {
        parent: node16a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la mutualisation de la Caisse nationale de crédit agricole (n° 88-50 du 18 janvier 1988) - Fixation du prix d'une entreprise publique transférée au secteur privé"},
        HTMLid:"16a3a4a1",
        HTMLclass:"leave"
    },
node16a3a4a2 = {
        parent: node16a3a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'entreprise nationale France Télécom (n° 96-660 du 26 juillet 1996) - Maintien dans le secteur public et participation majoritaire"},
        HTMLid:"16a3a4a2",
        HTMLclass:"leave"
    },
node16a3a5 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code de commerce"},
        HTMLid:"16a3a5",
        HTMLclass:"leave"
    },
node16a3a6 = {
        parent: node16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article. L. 621-15 du code monétaire et financier"},
        HTMLid:"16a3a6",
        HTMLclass:"leave"
    },
node16a4 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT ÉLECTORAL"},
        HTMLid:"16a4",
    },
node16a4a1 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'élection du Président de la République au suffrage universel (n° 88-36 du 13 janvier 1988) - Compatibilité entre l'exercice de mandats électifs"},
        HTMLid:"16a4a1",
        HTMLclass:"leave"
    },
node16a4a2 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la limitation des dépenses électorales et à la clarification du financement des activités politiques (n° 90-55 du 15 janvier 1990) - Commission nationale des comptes de campagne et compétence du juge administratif"},
        HTMLid:"16a4a2",
        HTMLclass:"leave"
    },
node16a4a3 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'élection des conseillers régionaux et des représentants au Parlement européen ainsi qu'à l'aide publique aux partis politiques (n° 2003-327 du 11 avril 2003) - Information des électeurs"},
        HTMLid:"16a4a3",
        HTMLclass:"leave"
    },
node16a4a4 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique portant dispositions statutaires et institutionnelles relatives à l'outre-mer (n° 2007-223 du 21 février 2007) - Entrée en vigueur"},
        HTMLid:"16a4a4",
        HTMLclass:"leave"
    },
node16a4a5 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la commission prévue à l'article 25 de la Constitution et à l'élection des députés (n° 2009-39 du 13 janvier 2009)"},
        HTMLid:"16a4a5",
        HTMLclass:"leave"
    },
node16a4a6 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'élection des députés et des sénateurs (n° 2011-410 du 14 avril 2011)"},
        HTMLid:"16a4a6",
        HTMLclass:"leave"
    },
node16a4a7 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi interdisant le cumul de fonctions exécutives locales avec le mandat de représentant au Parlement européen"},
        HTMLid:"16a4a7",
        HTMLclass:"leave"
    },
node16a4a8 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi autorisant l'accord local de répartition des sièges de conseiller communautaire"},
        HTMLid:"16a4a8",
        HTMLclass:"leave"
    },
node16a4a9 = {
        parent: node16a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique de modernisation des règles applicables à l'élection présidentielle"},
        HTMLid:"16a4a9",
        HTMLclass:"leave"
    },
node16a5 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT PARLEMENTAIRE"},
        HTMLid:"16a5",
    },
node16a5a1 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'application des articles 34-1, 39 et 44 de la Constitution"},
        HTMLid:"16a5a1",
        HTMLclass:"leave"
    },
node16a5a2 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique portant application de l'article 11 de la Constitution"},
        HTMLid:"16a5a2",
        HTMLclass:"leave"
    },
node16a5a3 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlement de l'Assemblée nationale"},
        HTMLid:"16a5a3",
    },
node16a5a3a1 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution complétant le règlement de l'Assemblée nationale pour l'application de l'article 88-4 de la Constitution (1992) - Propositions de résolutions relatives à des propositions d'actes communautaires"},
        HTMLid:"16a5a3a1",
        HTMLclass:"leave"
    },
node16a5a3a2 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution modifiant le règlement de l'Assemblée nationale (1995) - Tenue des séances de l'Assemblée"},
        HTMLid:"16a5a3a2",
        HTMLclass:"leave"
    },
node16a5a3a3 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution modifiant le règlement de l'Assemblée nationale (articles 86 et 143) (2004) - Caractère non contraignant à l'égard du Gouvernement des conclusions d'une commission d'enquête"},
        HTMLid:"16a5a3a3",
        HTMLclass:"leave"
    },
node16a5a3a4 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution modifiant le règlement de l'Assemblée nationale (2005) - Respect du droit d'amendement par la conférence des présidents"},
        HTMLid:"16a5a3a4",
        HTMLclass:"leave"
    },
node16a5a3a5 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution du 27 mai 2009"},
        HTMLid:"16a5a3a5",
        HTMLclass:"leave"
    },
node16a5a3a6 = {
        parent: node16a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution du 28 novembre 2014"},
        HTMLid:"16a5a3a6",
        HTMLclass:"leave"
    },
node16a5a4 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlement du Sénat"},
        HTMLid:"16a5a4",
    },
node16a5a4a1 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution insérant dans le règlement du Sénat les dispositions nécessaires à la mise en oeuvre de l'article 88-4 de la Constitution (1993) - Propositions d'actes communautaires comportant des dispositions de nature législative"},
        HTMLid:"16a5a4a1",
        HTMLclass:"leave"
    },
node16a5a4a2 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution modifiant l'article 73 bis du règlement du Sénat (1999) - Propositions d'actes communautaires comportant des dispositions de nature législative"},
        HTMLid:"16a5a4a2",
        HTMLclass:"leave"
    },
node16a5a4a3 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution modifiant le Règlement du Sénat (articles 7, 13, 15, 16, 20, 22, 39 et 69 bis) (2004) - Délégation de vote en commission permanente"},
        HTMLid:"16a5a4a3",
        HTMLclass:"leave"
    },
node16a5a4a4 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motions intervenant sur le fondement de l'article 73 alinéa 7 de la Constitution (2004)"},
        HTMLid:"16a5a4a4",
        HTMLclass:"leave"
    },
node16a5a4a5 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution du 2 juin 2009 pour mettre en oeuvre la révision constitutionnelle"},
        HTMLid:"16a5a4a5",
        HTMLclass:"leave"
    },
node16a5a4a6 = {
        parent: node16a5a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Résolution du 13 mai 2015"},
        HTMLid:"16a5a4a6",
        HTMLclass:"leave"
    },
node16a5a5 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique interdisant le cumul de fonctions exécutives locales avec le mandat de député ou de sénateur"},
        HTMLid:"16a5a5",
        HTMLclass:"leave"
    },
node16a5a6 = {
        parent: node16a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique portant application de l'article 68 de la Constitution"},
        HTMLid:"16a5a6",
        HTMLclass:"leave"
    },
node16a6 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT RURAL ET DE L'ENVIRONNEMENT"},
        HTMLid:"16a6",
        HTMLclass:"leave"
    },
node16a6a1 = {
        parent: node16a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la chasse (n° 2000-698 du 26 juillet 2000)"},
        HTMLid:"16a6a1",
    },
node16a6a1a1 = {
        parent: node16a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Territoire des associations communales de chasse"},
        HTMLid:"16a6a1a1",
        HTMLclass:"leave"
    },
node16a6a1a2 = {
        parent: node16a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Opposition à la pratique de la chasse sur ses biens à raison de ses convictions personnelles"},
        HTMLid:"16a6a1a2",
        HTMLclass:"leave"
    },
node16a6a1a3 = {
        parent: node16a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle économique et financier des fédérations départementales des chasseurs"},
        HTMLid:"16a6a1a3",
        HTMLclass:"leave"
    },
node16a7 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CODE DE L'ACTION SOCIALE ET DES FAMILLES"},
        HTMLid:"16a7",
        HTMLclass:"leave"
    },
node16a8 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CODE DE L'ENVIRONNEMENT"},
        HTMLid:"16a8",
        HTMLclass:"leave"
    },
node16a9 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CODE RURAL ET DE LA PECHE MARITIME"},
        HTMLid:"16a9",
    },
node16a9a1 = {
        parent: node16a9,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 221-2 (abattage des animaux malades)"},
        HTMLid:"16a9a1",
        HTMLclass:"leave"
    },
node16a10 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT SOCIAL"},
        HTMLid:"16a10",
    },
node16a10a1 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant diverses mesures d'ordre social (n° 87-39 du 27 janvier 1987)"},
        HTMLid:"16a10a1",
    },
node16a10a1a1 = {
        parent: node16a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Durée minimale de résidence sur le territoire national"},
        HTMLid:"16a10a1a1",
        HTMLclass:"leave"
    },
node16a10a1a2 = {
        parent: node16a10a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime dérogatoire aux règles d'organisation et de fonctionnement des services publics hospitaliers"},
        HTMLid:"16a10a1a2",
        HTMLclass:"leave"
    },
node16a10a2 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exercice et protection du mandat de négociation (loi n° 96-985 du 12 novembre 1996) - Information et consultation des salariés"},
        HTMLid:"16a10a2",
        HTMLclass:"leave"
    },
node16a10a3 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant création d'une couverture maladie universelle (n° 99-641 du 27 juillet 1999) - Compétence du pouvoir réglementaire"},
        HTMLid:"16a10a3",
        HTMLclass:"leave"
    },
node16a10a4 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la réduction négociée du temps de travail (n° 2000-37 du 19 janvier 2000) - Accords entre partenaires sociaux"},
        HTMLid:"16a10a4",
        HTMLclass:"leave"
    },
node16a10a5 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la solidarité et au renouvellement urbains (n° 2000-1208 du 13 décembre 2000) - Notion de logement décent"},
        HTMLid:"16a10a5",
        HTMLclass:"leave"
    },
node16a10a6 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant amélioration de la couverture des non salariés agricoles contre les accidents du travail et les maladies professionnelles (n° 2001-1128 du 30 novembre 2001)"},
        HTMLid:"16a10a6",
        HTMLclass:"leave"
    },
node16a10a7 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative aux salaires, au temps de travail et au développement de l'emploi (n° 2003-47 du 17 janvier 2003) - Effets des accords antérieurs"},
        HTMLid:"16a10a7",
        HTMLclass:"leave"
    },
node16a10a8 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'assurance maladie (n° 2004-810 du 13 août 2004) - Participation forfaitaire de l'assuré"},
        HTMLid:"16a10a8",
        HTMLclass:"leave"
    },
node16a10a9 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale pour 2006 (n° 2005-1579 du 19 décembre 2005) - Regroupement familial"},
        HTMLid:"16a10a9",
        HTMLclass:"leave"
    },
node16a10a10 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi ratifiant l'ordonnance n° 2007-329 du 12 mars 2007 relative au code du travail (n° 2008-67 du 21 janvier 2008) - Inspection du travail"},
        HTMLid:"16a10a10",
        HTMLclass:"leave"
    },
node16a10a11 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'égalité salariale entre les femmes et les hommes (n° 2006-340 du 23 mars 2006)"},
        HTMLid:"16a10a11",
        HTMLclass:"leave"
    },
node16a10a12 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant rénovation de la démocratie sociale et réforme du temps de travail (n° 2008-789 du 20 août 2008)"},
        HTMLid:"16a10a12",
        HTMLclass:"leave"
    },
node16a10a13 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant réforme de l'hôpital et relative aux patients, à la santé et aux territoires (n° 2009-879 du 21 juillet 2009)"},
        HTMLid:"16a10a13",
        HTMLclass:"leave"
    },
node16a10a14 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 243-5 du code de la sécurité sociale (QPC)"},
        HTMLid:"16a10a14",
        HTMLclass:"leave"
    },
node16a10a15 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indemnisation des accidents du travail (art. L.412-8, L.413-12 et L. 452-3 du CSS, art. 34 du décret n° 57-245)"},
        HTMLid:"16a10a15",
        HTMLclass:"leave"
    },
node16a10a16 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 351 du code de la santé publique, devenu sont article L. 3211-12 (QPC)"},
        HTMLid:"16a10a16",
        HTMLclass:"leave"
    },
node16a10a17 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles L. 2411-1 (13°), L. 2411-3 et L. 2411-18 du code du travail (licenciement d'un salarié protégé)"},
        HTMLid:"16a10a17",
        HTMLclass:"leave"
    },
node16a10a18 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles L. 5134-111 et L. 5134-115 du code du travail et L. 322-46 et L. 322-50 du code du travail applicable à Mayotte (loi n° 2012-1189 du 26 octobre 2012 portant création des emplois d'avenir, articles 1er et 11)"},
        HTMLid:"16a10a18",
        HTMLclass:"leave"
    },
node16a10a19 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles L. 5134-21 et L. 5134-24 du code du travail et L. 322-7 et L. 322-13 du code du travail applicable à Mayotte (contrats d'accompagnement dans l'emploi)"},
        HTMLid:"16a10a19",
        HTMLclass:"leave"
    },
node16a10a20 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Allocations familiales"},
        HTMLid:"16a10a20",
        HTMLclass:"leave"
    },
node16a10a21 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 5212-14 du code du travail (obligation d'emploi de travailleurs handicapés)"},
        HTMLid:"16a10a21",
        HTMLclass:"leave"
    },
node16a10a22 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative au travail, à la modernisation du dialogue social et à la sécurisation des parcours professionnels ( loi n° 2016-1088 du 8 août 2016)"},
        HTMLid:"16a10a22",
        HTMLclass:"leave"
    },
node16a10a23 = {
        parent: node16a10,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 6362-7-1 du code du travail (remboursement des fonds de formation professionnelle continue)"},
        HTMLid:"16a10a23",
        HTMLclass:"leave"
    },
node16a11 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE L'ÉDUCATION"},
        HTMLid:"16a11",
    },
node16a11a1 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de révision de la loi Falloux (n° 94-51 du 21 janvier 1994) - Aides aux établissements d'enseignement privés"},
        HTMLid:"16a11a1",
        HTMLclass:"leave"
    },
node16a11a2 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative aux assistants d'éducation (n° 2003-400 du 30 avril 2003)"},
        HTMLid:"16a11a2",
    },
node16a11a2a1 = {
        parent: node16a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répartition des crédits entre établissements"},
        HTMLid:"16a11a2a1",
        HTMLclass:"leave"
    },
node16a11a2a2 = {
        parent: node16a11a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement des assistants d'éducation"},
        HTMLid:"16a11a2a2",
        HTMLclass:"leave"
    },
node16a11a3 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi d'orientation et de programme sur l'avenir de l'école (n° 2005-380 du 23 avril 2005) - Précisions des obligations des établissements"},
        HTMLid:"16a11a3",
        HTMLclass:"leave"
    },
node16a11a4 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi instituant un droit d'accueil pour les élèves des écoles maternelles et élémentaires pendant le temps scolaire (n° 2008-790 du 20 août 2008) - Exercice de la liberté syndicale"},
        HTMLid:"16a11a4",
        HTMLclass:"leave"
    },
node16a11a5 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative aux libertés et responsabilités des universités (n°2007-1199 du 10 août 2007)"},
        HTMLid:"16a11a5",
        HTMLclass:"leave"
    },
node16a11a6 = {
        parent: node16a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant dispositions statutaires relatives à la fonction publique de l'État (n°84-16 du 11 janvier 1984)"},
        HTMLid:"16a11a6",
        HTMLclass:"leave"
    },
node16a12 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE LA COMMUNICATION - LOI DE 1986 RELATIVE À LA LIBERTÉ DE COMMUNICATION ET SES MODIFICATIONS"},
        HTMLid:"16a12",
    },
node16a12a1 = {
        parent: node16a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs de la CNCL (loi n° 86-1067 du 30 septembre 1986)"},
        HTMLid:"16a12a1",
        HTMLclass:"leave"
    },
node16a12a2 = {
        parent: node16a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Indépendance de la CNCL (loi n° 86-1067 du 30 septembre 1986)"},
        HTMLid:"16a12a2",
        HTMLclass:"leave"
    },
node16a12a3 = {
        parent: node16a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du CSA (loi n° 92-61 du 18 janvier 1992)"},
        HTMLid:"16a12a3",
        HTMLclass:"leave"
    },
node16a12a4 = {
        parent: node16a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du pluralisme des courants de pensées et d'opinions (loi relative à la modernisation de la diffusion audiovisuelle et à la télévision du futur - n° 2007-309 du 5 mars 2007)"},
        HTMLid:"16a12a4",
        HTMLclass:"leave"
    },
node16a12a5 = {
        parent: node16a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Responsabilité du  producteur  d'un site de communication au public (article 93-3 de la loi n° 82-652 du 29 juillet 1982 sur la communication audiovisuelle)"},
        HTMLid:"16a12a5",
        HTMLclass:"leave"
    },
node16a13 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE LA FONCTION PUBLIQUE"},
        HTMLid:"16a13",
    },
node16a13a1 = {
        parent: node16a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Assistants d'éducation (loi n° 2003-400 du 30 avril 2003)"},
        HTMLid:"16a13a1",
        HTMLclass:"leave"
    },
node16a13a2 = {
        parent: node16a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination d'inspecteurs généraux ou de contrôleurs généraux au tour extérieur (loi n° 84-834 du 13 septembre 1984)"},
        HTMLid:"16a13a2",
        HTMLclass:"leave"
    },
node16a13a3 = {
        parent: node16a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement d'agents sans concours (loi n° 84-821 du 6 septembre 1984)"},
        HTMLid:"16a13a3",
        HTMLclass:"leave"
    },
node16a13a4 = {
        parent: node16a13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nomination de non-fonctionnaires à des emplois permanents de la fonction publique"},
        HTMLid:"16a13a4",
        HTMLclass:"leave"
    },
node16a14 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE LA PROPRIÉTÉ INTELLECTUELLE"},
        HTMLid:"16a14",
    },
node16a14a1 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe du  test en trois étapes  (loi n° 2006-961 du 1er août 2006)"},
        HTMLid:"16a14a1",
        HTMLclass:"leave"
    },
node16a14a2 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de droits d'auteur (loi n° 2006-961 du 1er août 2006)"},
        HTMLid:"16a14a2",
        HTMLclass:"leave"
    },
node16a14a3 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de respect des droits des parties (loi n° 2006-961 du 1er août 2006)"},
        HTMLid:"16a14a3",
        HTMLclass:"leave"
    },
node16a14a4 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités d'exercice des exceptions au droit d'auteur et aux droits voisins (loi n° 2006-961 du 1er août 2006)"},
        HTMLid:"16a14a4",
        HTMLclass:"leave"
    },
node16a14a5 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cause d'exonération de sanction prévue au bénéfice de la  recherche  (loi n° 2006-961 du 1er août 2006)"},
        HTMLid:"16a14a5",
        HTMLclass:"leave"
    },
node16a14a6 = {
        parent: node16a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoirs du tribunal de grande instance pour prendre toute mesure nécessaire en présence d'une atteinte aux droits d'auteurs (loi n° 2009-669 du 12 juin 2009)"},
        HTMLid:"16a14a6",
        HTMLclass:"leave"
    },
node16a15 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DES COLLECTIVITÉS TERRITORIALES"},
        HTMLid:"16a15",
    },
node16a15a1 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code de l'éducation (article L. 313-5 - Centres publics d'orientation scolaire et professionnelle)"},
        HTMLid:"16a15a1",
        HTMLclass:"leave"
    },
node16a15a2 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique n° 99-209 du 19 mars 1999 relative à la Nouvelle-Calédonie)"},
        HTMLid:"16a15a2",
        HTMLclass:"leave"
    },
node16a15a3 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation sur l'accession à la pleine souveraineté (loi n° 99-209 du 19 mars 1999 - Nouvelle-Calédonie)"},
        HTMLid:"16a15a3",
        HTMLclass:"leave"
    },
node16a15a4 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation de la population de Mayotte sur son avenir statutaire (loi n° 2000-391 du 9 mai 2000) - Portée consultative du vote"},
        HTMLid:"16a15a4",
        HTMLclass:"leave"
    },
node16a15a5 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la solidarité et au renouvellement urbains (n° 2000-1208 du 13 décembre 2000) - Contenu des documents d'urbanisme"},
        HTMLid:"16a15a5",
        HTMLclass:"leave"
    },
node16a15a6 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi d'orientation pour l'outre-mer (n° 2000-1207 du 13 décembre 2000)"},
        HTMLid:"16a15a6",
    },
node16a15a6a1 = {
        parent: node16a15a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Organisation des départements d'outre-mer"},
        HTMLid:"16a15a6a1",
        HTMLclass:"leave"
    },
node16a15a6a2 = {
        parent: node16a15a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régions d'outre-mer"},
        HTMLid:"16a15a6a2",
        HTMLclass:"leave"
    },
node16a15a6a3 = {
        parent: node16a15a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles L. 3441-4 et L. 4433-4-3 du CGCT - Négociation et signature des accords internationaux"},
        HTMLid:"16a15a6a3",
        HTMLclass:"leave"
    },
node16a15a6a4 = {
        parent: node16a15a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée consultative du vote sur l'évolution statutaire de la collectivité"},
        HTMLid:"16a15a6a4",
        HTMLclass:"leave"
    },
node16a15a7 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la Corse (n° 2002-92 du 22 janvier 2002)"},
        HTMLid:"16a15a7",
    },
node16a15a7a1 = {
        parent: node16a15a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 4424-2 du code général des collectivités territoriales - Pouvoir réglementaire des collectivités territoriales"},
        HTMLid:"16a15a7a1",
        HTMLclass:"leave"
    },
node16a15a7a2 = {
        parent: node16a15a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enseignement de la langue corse"},
        HTMLid:"16a15a7a2",
        HTMLclass:"leave"
    },
node16a15a8 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative au statut d'autonomie de la Polynésie française (n° 2004-192 du 27 février 2004)"},
        HTMLid:"16a15a8",
    },
node16a15a8a1 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des élections législatives et sénatoriales en Polynésie française"},
        HTMLid:"16a15a8a1",
        HTMLclass:"leave"
    },
node16a15a8a2 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Textes applicables en Polynésie française"},
        HTMLid:"16a15a8a2",
        HTMLclass:"leave"
    },
node16a15a8a3 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation obligatoire des institutions de la Polynésie française"},
        HTMLid:"16a15a8a3",
        HTMLclass:"leave"
    },
node16a15a8a4 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Attributions réservées aux communes"},
        HTMLid:"16a15a8a4",
        HTMLclass:"leave"
    },
node16a15a8a5 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Représentation internationale de la Polynésie française"},
        HTMLid:"16a15a8a5",
        HTMLclass:"leave"
    },
node16a15a8a6 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conventions de coopération décentralisées"},
        HTMLid:"16a15a8a6",
        HTMLclass:"leave"
    },
node16a15a8a7 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine public maritime de la Polynésie française"},
        HTMLid:"16a15a8a7",
        HTMLclass:"leave"
    },
node16a15a8a8 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur des lois de pays"},
        HTMLid:"16a15a8a8",
        HTMLclass:"leave"
    },
node16a15a8a9 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délivrance des titres de séjour des étrangers"},
        HTMLid:"16a15a8a9",
        HTMLclass:"leave"
    },
node16a15a8a10 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Service d'assainissement"},
        HTMLid:"16a15a8a10",
        HTMLclass:"leave"
    },
node16a15a8a11 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect du principe d'égalité par le fonds intercommunal de péréquation"},
        HTMLid:"16a15a8a11",
        HTMLclass:"leave"
    },
node16a15a8a12 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination du domaine initial des communes de la Polynésie française"},
        HTMLid:"16a15a8a12",
        HTMLclass:"leave"
    },
node16a15a8a13 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avis de la commission permanente de l'assemblée de la Polynésie française"},
        HTMLid:"16a15a8a13",
        HTMLclass:"leave"
    },
node16a15a8a14 = {
        parent: node16a15a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application des lois du pays aux contrats en cours"},
        HTMLid:"16a15a8a14",
        HTMLclass:"leave"
    },
node16a15a9 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2004 (n° 2003-1311 du 30 décembre 2003) - Maintien par l'État du niveau de ressources des collectivités"},
        HTMLid:"16a15a9",
        HTMLclass:"leave"
    },
node16a15a10 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concours de l'État au financement des charges liées à l'allocation personnalisée d'autonomie (loi n° 2004-626 du 30 juin 2004) - Préservation de la libre administration"},
        HTMLid:"16a15a10",
        HTMLclass:"leave"
    },
node16a15a11 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'autonomie financière des collectivités territoriales (n° 2004-758 du 29 juillet 2004) - Part et modalités de calcul des ressources propres"},
        HTMLid:"16a15a11",
        HTMLclass:"leave"
    },
node16a15a12 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Concours de l'État au financement des charges liées à la prestation de compensation du handicap (loi n° 2005-102 du 11 février 2005) - Préservation de la libre administration"},
        HTMLid:"16a15a12",
        HTMLclass:"leave"
    },
node16a15a13 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2006 (n° 2005-1719 du 30 décembre 2005) - Maintien du degré d'autonomie financière des collectivités territoriales"},
        HTMLid:"16a15a13",
        HTMLclass:"leave"
    },
node16a15a14 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique portant dispositions statutaires et institutionnelles relatives à l'outre-mer (n° 2007-223 du 21 février 2007)"},
        HTMLid:"16a15a14",
    },
node16a15a14a1 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Calcul de la compensation résultant du transfert de compétences"},
        HTMLid:"16a15a14a1",
        HTMLclass:"leave"
    },
node16a15a14a2 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Application du principe de spécialité législative"},
        HTMLid:"16a15a14a2",
        HTMLclass:"leave"
    },
node16a15a14a3 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domiciliation fiscale"},
        HTMLid:"16a15a14a3",
        HTMLclass:"leave"
    },
node16a15a14a4 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur locale des lois et règlements"},
        HTMLid:"16a15a14a4",
        HTMLclass:"leave"
    },
node16a15a14a5 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Habilitation législative des assemblées délibérantes des départements et des régions d'outre-mer"},
        HTMLid:"16a15a14a5",
        HTMLclass:"leave"
    },
node16a15a14a6 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des élections législatives et sénatoriales"},
        HTMLid:"16a15a14a6",
        HTMLclass:"leave"
    },
node16a15a14a7 = {
        parent: node16a15a14,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transferts de propriété entre vifs"},
        HTMLid:"16a15a14a7",
        HTMLclass:"leave"
    },
node16a15a15 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique tendant à renforcer la stabilité des institutions et la transparence de la vie politique en Polynésie française (n° 2007-1719 du 7 décembre 2007)"},
        HTMLid:"16a15a15",
    },
node16a15a15a1 = {
        parent: node16a15a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation de l'assemblée de la Polynésie française sur les propositions de loi"},
        HTMLid:"16a15a15a1",
        HTMLclass:"leave"
    },
node16a15a15a2 = {
        parent: node16a15a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critères d'attribution des concours financiers accordés aux communes par la Polynésie française"},
        HTMLid:"16a15a15a2",
        HTMLclass:"leave"
    },
node16a15a15a3 = {
        parent: node16a15a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur des décrets approuvant un projet ou une proposition de loi de pays"},
        HTMLid:"16a15a15a3",
        HTMLclass:"leave"
    },
node16a15a16 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'évolution institutionnelle de la Nouvelle-Calédonie et à la départementalisation de Mayotte (n° 2009-969 du 3 août 2009)"},
        HTMLid:"16a15a16",
        HTMLclass:"leave"
    },
node16a15a17 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à la loi organique modifiant le livre III de la sixième partie du code général des collectivités territoriales relatif à Saint-Martin (n° 2010-92 du 25 janvier 2010)"},
        HTMLid:"16a15a17",
        HTMLclass:"leave"
    },
node16a15a18 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique tendant à permettre à Saint-Barthélemy d'imposer les revenus de source locale des personnes établies depuis moins de cinq ans (n° 2010-93 du 25 janvier 2010)"},
        HTMLid:"16a15a18",
        HTMLclass:"leave"
    },
node16a15a19 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative aux collectivités régies par l'article 73 de la Constitution (n° 2011-883 du 27 juillet 2011)"},
        HTMLid:"16a15a19",
        HTMLclass:"leave"
    },
node16a15a20 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de modernisation de l'action publique territoriale et d'affirmation des métropoles (n° 2014-58 du 27 janvier 2014)"},
        HTMLid:"16a15a20",
        HTMLclass:"leave"
    },
node16a15a21 = {
        parent: node16a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative au travail, à la modernisation du dialogue social et à la sécurisation des parcours professionnels (loi n° 2016-1088 du 8 août 2016)"},
        HTMLid:"16a15a21",
        HTMLclass:"leave"
    },
node16a16 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DES ÉTRANGERS"},
        HTMLid:"16a16",
    },
node16a16a1 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi sur les conditions d'entrée et de séjour des étrangers en France (n° 92-190 du 26 février 1992)"},
        HTMLid:"16a16a1",
    },
node16a16a1a1 = {
        parent: node16a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en zone de transit d'un demandeur d'asile"},
        HTMLid:"16a16a1a1",
        HTMLclass:"leave"
    },
node16a16a1a2 = {
        parent: node16a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exonération de responsabilité d'un transporteur acheminant en France un étranger en situation irrégulière"},
        HTMLid:"16a16a1a2",
        HTMLclass:"leave"
    },
node16a16a1a3 = {
        parent: node16a16a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur d'une disposition internationale"},
        HTMLid:"16a16a1a3",
        HTMLclass:"leave"
    },
node16a16a2 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la maîtrise de l'immigration (n° 93-1027 du 24 août 1993)"},
        HTMLid:"16a16a2",
    },
node16a16a2a1 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non subordination à une absence de menaces de troubles à l'ordre public"},
        HTMLid:"16a16a2a1",
        HTMLclass:"leave"
    },
node16a16a2a2 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Polygamie"},
        HTMLid:"16a16a2a2",
        HTMLclass:"leave"
    },
node16a16a2a3 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Regroupement familial et délai de séjour préalable et régulier en France"},
        HTMLid:"16a16a2a3",
        HTMLclass:"leave"
    },
node16a16a2a4 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Regroupement partiel"},
        HTMLid:"16a16a2a4",
        HTMLclass:"leave"
    },
node16a16a2a5 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de la Convention de Genève du 28 juillet 1951"},
        HTMLid:"16a16a2a5",
        HTMLclass:"leave"
    },
node16a16a2a6 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Admission provisoire de séjour"},
        HTMLid:"16a16a2a6",
        HTMLclass:"leave"
    },
node16a16a2a7 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mesures de polices"},
        HTMLid:"16a16a2a7",
        HTMLclass:"leave"
    },
node16a16a2a8 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration préalable à la sortie du territoire français"},
        HTMLid:"16a16a2a8",
        HTMLclass:"leave"
    },
node16a16a2a9 = {
        parent: node16a16a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Bénéfice des prestations d'aide sociale"},
        HTMLid:"16a16a2a9",
        HTMLclass:"leave"
    },
node16a16a3 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'immigration (n° 97-396 du 24 avril 1997)"},
        HTMLid:"16a16a3",
    },
node16a16a3a1 = {
        parent: node16a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de la défense durant une procédure de visite sommaire de véhicules"},
        HTMLid:"16a16a3a1",
        HTMLclass:"leave"
    },
node16a16a3a2 = {
        parent: node16a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Subvention effective aux besoins d'un enfant"},
        HTMLid:"16a16a3a2",
        HTMLclass:"leave"
    },
node16a16a3a3 = {
        parent: node16a16a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien en rétention"},
        HTMLid:"16a16a3a3",
        HTMLclass:"leave"
    },
node16a16a4 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi pour la sécurité intérieure (n° 2003-239 du 18 mars 2003) - Renouvellement du titre de séjour et retrait de la carte temporaire de séjour"},
        HTMLid:"16a16a4",
        HTMLclass:"leave"
    },
node16a16a5 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la maîtrise de l'immigration, au séjour des étrangers en France et à la nationalité (n° 2003-1119 du 26 novembre 2003) - Compétence de l'autorité judiciaire en matière de maintien en rétention"},
        HTMLid:"16a16a5",
        HTMLclass:"leave"
    },
node16a16a6 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'immigration et à l'intégration (n° 2006-911 du 24 juillet 2006) - Regroupement familial"},
        HTMLid:"16a16a6",
        HTMLclass:"leave"
    },
node16a16a7 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la maîtrise de l'immigration, à l'intégration et à l'asile (n° 2007-1631 du 20 novembre 2007) - État et capacité des personnes"},
        HTMLid:"16a16a7",
        HTMLclass:"leave"
    },
node16a16a8 = {
        parent: node16a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'immigration, à l'intégration et à la nationalité (n° 2011-672 du 16 juin 2011) - Rétention administrative"},
        HTMLid:"16a16a8",
        HTMLclass:"leave"
    },
node16a17 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DES FINANCES PUBLIQUES ET SOCIALES"},
        HTMLid:"16a17",
    },
node16a17a1 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code des assurances"},
        HTMLid:"16a17a1",
    },
node16a17a1a1 = {
        parent: node16a17a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 425-1 (taxe sur les boues d'épuration)"},
        HTMLid:"16a17a1a1",
        HTMLclass:"leave"
    },
node16a17a2 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code des juridictions financières (loi organique n° 2005-881 du 2 août 2005)"},
        HTMLid:"16a17a2",
        HTMLclass:"leave"
    },
node16a17a3 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code général des impôts"},
        HTMLid:"16a17a3",
    },
node16a17a3a1 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impôt sur le revenu et indemnités de rupture du contrat de travail (80 duodecies)"},
        HTMLid:"16a17a3a1",
        HTMLclass:"leave"
    },
node16a17a3a2 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Double imposition (article 155A)"},
        HTMLid:"16a17a3a2",
        HTMLclass:"leave"
    },
node16a17a3a3 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Évaluation forfaitaire du revenu à partir du train de vie (article 168)"},
        HTMLid:"16a17a3a3",
        HTMLclass:"leave"
    },
node16a17a3a4 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contribution supplémentaire à l'apprentissage (article 230 H)"},
        HTMLid:"16a17a3a4",
        HTMLclass:"leave"
    },
node16a17a3a5 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Taxe sur les logements vacants (article 232)"},
        HTMLid:"16a17a3a5",
        HTMLclass:"leave"
    },
node16a17a3a6 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régime fiscal des opérations réalisées dans les ETNC - clause de sauvegarde"},
        HTMLid:"16a17a3a6",
        HTMLclass:"leave"
    },
node16a17a3a7 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Imposition des revenus de capitaux mobiliers"},
        HTMLid:"16a17a3a7",
        HTMLclass:"leave"
    },
node16a17a3a8 = {
        parent: node16a17a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Droits de mutation à titre gratuit"},
        HTMLid:"16a17a3a8",
        HTMLclass:"leave"
    },
node16a17a4 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 1985 (n° 84-1208 du 29 décembre 1984)"},
        HTMLid:"16a17a4",
    },
node16a17a4a1 = {
        parent: node16a17a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Avantage fiscal"},
        HTMLid:"16a17a4a1",
        HTMLclass:"leave"
    },
node16a17a4a2 = {
        parent: node16a17a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Budget annexe"},
        HTMLid:"16a17a4a2",
        HTMLclass:"leave"
    },
node16a17a5 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 1992 (n° 91-1322 du 30 décembre 1991) - Fonds de réserve"},
        HTMLid:"16a17a5",
        HTMLclass:"leave"
    },
node16a17a6 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale pour 2000 (n° 99-1140 du 29 décembre 1999) - Taxe générale sur les activités polluantes"},
        HTMLid:"16a17a6",
        HTMLclass:"leave"
    },
node16a17a7 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2001 (n° 2000-1352 du 30 décembre 2000) - Taxe générale sur les activités polluantes"},
        HTMLid:"16a17a7",
        HTMLclass:"leave"
    },
node16a17a8 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative aux lois de finances de 2001 (n° 2001-692 du 1er août 2001)"},
        HTMLid:"16a17a8",
    },
node16a17a8a1 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorisation en loi de finances de garanties accordées par l'État"},
        HTMLid:"16a17a8a1",
        HTMLclass:"leave"
    },
node16a17a8a2 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Budgets annexes"},
        HTMLid:"16a17a8a2",
        HTMLclass:"leave"
    },
node16a17a8a3 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Communication de documents ou renseignements - Pouvoirs du juge des référés"},
        HTMLid:"16a17a8a3",
        HTMLclass:"leave"
    },
node16a17a8a4 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Comptes d'affectation spéciale"},
        HTMLid:"16a17a8a4",
        HTMLclass:"leave"
    },
node16a17a8a5 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de distribution du projet de loi de finances de l'année et des documents joints"},
        HTMLid:"16a17a8a5",
        HTMLclass:"leave"
    },
node16a17a8a6 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rapport sur les prélèvements obligatoires"},
        HTMLid:"16a17a8a6",
        HTMLclass:"leave"
    },
node16a17a8a7 = {
        parent: node16a17a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle de la Cour des comptes"},
        HTMLid:"16a17a8a7",
        HTMLclass:"leave"
    },
node16a17a9 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2003 (n° 2002-1575 du 30 décembre 2002) - Mesures de régulation budgétaire"},
        HTMLid:"16a17a9",
        HTMLclass:"leave"
    },
node16a17a10 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à l'assurance maladie (n° 2004-810 du 13 août 2004) - Cadrage financier pluriannuel"},
        HTMLid:"16a17a10",
        HTMLclass:"leave"
    },
node16a17a11 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique modifiant la LOLF de 2001 (n° 2005-779 du 12 juillet 2005)"},
        HTMLid:"16a17a11",
    },
node16a17a11a1 = {
        parent: node16a17a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en réserve de crédits ouverts"},
        HTMLid:"16a17a11a1",
        HTMLclass:"leave"
    },
node16a17a11a2 = {
        parent: node16a17a11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Retard dans la distribution des documents exigés par la loi organique"},
        HTMLid:"16a17a11a2",
        HTMLclass:"leave"
    },
node16a17a12 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative au financement de la Sécurité sociale (n° 2005-881 du 2 août 2005)"},
        HTMLid:"16a17a12",
    },
node16a17a12a1 = {
        parent: node16a17a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L.O. 111-4 du code de la sécurité sociale - Information du Parlement"},
        HTMLid:"16a17a12a1",
        HTMLclass:"leave"
    },
node16a17a12a2 = {
        parent: node16a17a12,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L.O. 111-9-1 du code de la sécurité sociale - Obligation de communication des renseignements"},
        HTMLid:"16a17a12a2",
        HTMLclass:"leave"
    },
node16a17a13 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale pour 2006 (n° 2005-1579 du 19 décembre 2005) - Participation de l'assurance maladie aux fonds de concours"},
        HTMLid:"16a17a13",
        HTMLclass:"leave"
    },
node16a17a14 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2006 (n° 2005-1719 du 30 décembre 2005) - Présentation des missions  mono-programme "},
        HTMLid:"16a17a14",
        HTMLclass:"leave"
    },
node16a17a15 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à la gestion de la dette sociale (n° 2010-1380 du 13 novembre 2010)"},
        HTMLid:"16a17a15",
        HTMLclass:"leave"
    },
node16a17a15a1 = {
        parent: node16a17a15,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Préservation des conditions générales de l'équilibre financier de la sécurité sociale"},
        HTMLid:"16a17a15a1",
    },
node16a17a16 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à la programmation et à la gouvernance des finances publiques (n° 2012-1403 du décembre 2012)"},
        HTMLid:"16a17a16",
    },
node16a17a16a1 = {
        parent: node16a17a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contenu de l'exposé des motifs des projets de loi de finances et projets de loi de financement de la sécurité sociale"},
        HTMLid:"16a17a16a1",
        HTMLclass:"leave"
    },
node16a17a16a2 = {
        parent: node16a17a16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Transmission de l'avis du Haut Conseil des finances publiques"},
        HTMLid:"16a17a16a2",
    },
node16a17a17 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validation législative des modalités de recouvrement d'une imposition (loi n° 2012-958 du 16 août 2012 de finances rectificative pour 2012)"},
        HTMLid:"16a17a17",
        HTMLclass:"leave"
    },
node16a17a18 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validation du versement de transport (article 50 de la loi n° 2012-1510 du 29 décembre 2012 de finances rectificative pour 2012)"},
        HTMLid:"16a17a18",
        HTMLclass:"leave"
    },
node16a17a19 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la lutte contre la fraude fiscale et la grande délinquance économique et financière (n° 2013-1117 du 6 décembre 2013)"},
        HTMLid:"16a17a19",
        HTMLclass:"leave"
    },
node16a17a20 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de financement de la sécurité sociale pour 2014 (n° 2013-1203 du 23 décembre 2013)"},
        HTMLid:"16a17a20",
        HTMLclass:"leave"
    },
node16a17a21 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2012 (n° 2011-1977 du 28 décembre 2011)"},
        HTMLid:"16a17a21",
        HTMLclass:"leave"
    },
node16a17a22 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code de la sécurité sociale"},
        HTMLid:"16a17a22",
        HTMLclass:"leave"
    },
node16a17a23 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code du travail"},
        HTMLid:"16a17a23",
        HTMLclass:"leave"
    },
node16a17a24 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code des douanes"},
        HTMLid:"16a17a24",
        HTMLclass:"leave"
    },
node16a17a25 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Livre des procédures fiscales"},
        HTMLid:"16a17a25",
        HTMLclass:"leave"
    },
node16a17a26 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi de finances pour 2017 (n°2016-1917 du 29 décembre 2016)"},
        HTMLid:"16a17a26",
        HTMLclass:"leave"
    },
node16a17a27 = {
        parent: node16a17,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique pour la confiance dans la vie politique (n°************)"},
        HTMLid:"16a17a27",
        HTMLclass:"leave"
    },
node16a18 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DU SERVICE PUBLIC"},
        HTMLid:"16a18",
    },
node16a18a1 = {
        parent: node16a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Constitution de droits réels sur le domaine public (loi n° 94-631 du 25 juillet 1994)"},
        HTMLid:"16a18a1",
    },
node16a18a1a1 = {
        parent: node16a18a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Affectation du domaine public faisant l'objet d'une autorisation d'occupation temporaire"},
        HTMLid:"16a18a1a1",
        HTMLclass:"leave"
    },
node16a18a1a2 = {
        parent: node16a18a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cession de droits réels"},
        HTMLid:"16a18a1a2",
        HTMLclass:"leave"
    },
node16a18a1a3 = {
        parent: node16a18a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions du retrait d'autorisation temporaire d'occupation du domaine public avant terme"},
        HTMLid:"16a18a1a3",
        HTMLclass:"leave"
    },
node16a18a2 = {
        parent: node16a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi habilitant le gouvernement à simplifier le droit (n° 2003-591 du 2 juillet 2003) - Impossibilité de déléguer à une personne privée l'exercice d'une mission de souveraineté."},
        HTMLid:"16a18a2",
        HTMLclass:"leave"
    },
node16a18a3 = {
        parent: node16a18,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative au secteur de l'énergie (n° 2006-1537 du 7 décembre 2006) - Date du transfert effectif au secteur privé de GDF"},
        HTMLid:"16a18a3",
        HTMLclass:"leave"
    },
node16a19 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "JUSTICE"},
        HTMLid:"16a19",
    },
node16a19a1 = {
        parent: node16a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conseil supérieur de la magistrature (Loi organique n° 94-100 du 5 février 1994)"},
        HTMLid:"16a19a1",
        HTMLclass:"leave"
    },
node16a19a2 = {
        parent: node16a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement de magistrats"},
        HTMLid:"16a19a2",
    },
node16a19a2a1 = {
        parent: node16a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement exceptionnel de magistrats (loi organique n° 98-105 du 24 février 1998) - Évaluation des compétences"},
        HTMLid:"16a19a2a1",
        HTMLclass:"leave"
    },
node16a19a2a2 = {
        parent: node16a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi d'orientation et de programmation pour la justice (n° 2002-1138 du 9 septembre 2002) - Juridictions de proximité"},
        HTMLid:"16a19a2a2",
        HTMLclass:"leave"
    },
node16a19a2a3 = {
        parent: node16a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative aux juges de proximité (n° 2003-153 du 26 février 2003)"},
        HTMLid:"16a19a2a3",
    },
node16a19a2a3a1 = {
        parent: node16a19a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'évaluation des candidats"},
        HTMLid:"16a19a2a3a1",
        HTMLclass:"leave"
    },
node16a19a2a3a2 = {
        parent: node16a19a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilité des fonctions"},
        HTMLid:"16a19a2a3a2",
        HTMLclass:"leave"
    },
node16a19a2a4 = {
        parent: node16a19a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Recrutement de magistrats temporaires et de magistrats honoraires (loi organique n° 2016-1090 du 8 août 2016)"},
        HTMLid:"16a19a2a4",
        HTMLclass:"leave"
    },
node16a19a3 = {
        parent: node16a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordre de juridiction"},
        HTMLid:"16a19a3",
    },
node16a19a3a1 = {
        parent: node16a19a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Création d'un ordre de juridiction (loi n° 2002-1138 du 9 septembre 2002)- Statut des membres des juridictions de proximité"},
        HTMLid:"16a19a3a1",
        HTMLclass:"leave"
    },
node16a19a3a2 = {
        parent: node16a19a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi modifiant la loi n° 52-893 du 25 juillet 1952 relative au droit d'asile (n° 2003-1176 du 10 décembre 2003) - Statut des membres de la Commission des recours des réfugiés"},
        HTMLid:"16a19a3a2",
        HTMLclass:"leave"
    },
node16a19a3a3 = {
        parent: node16a19a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative aux compétences du tribunal d'instance, de la juridiction de proximité et du tribunal de grande instance (n° 2005-47 du 26 janvier 2005) - Composition d'un tribunal correctionnel"},
        HTMLid:"16a19a3a3",
        HTMLclass:"leave"
    },
node16a19a4 = {
        parent: node16a19,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi n° 71-1130 du 31 décembre 1971 portant réforme de certaines professions judiciaires et juridiques"},
        HTMLid:"16a19a4",
        HTMLclass:"leave"
    },
node16a20 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ORDRE PUBLIC ET DROIT PÉNAL"},
        HTMLid:"16a20",
    },
node16a20a1 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi d'orientation et de programmation relative à la sécurité (vidéosurveillance - n° 95-73 du 21 janvier 1995)"},
        HTMLid:"16a20a1",
    },
node16a20a1a1 = {
        parent: node16a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Faculté ouverte à l'autorité préfectorale d'interdire le port ou le transport d'objets pouvant constituer une arme lors de manifestations"},
        HTMLid:"16a20a1a1",
        HTMLclass:"leave"
    },
node16a20a1a2 = {
        parent: node16a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Destruction et accès aux enregistrements"},
        HTMLid:"16a20a1a2",
        HTMLclass:"leave"
    },
node16a20a1a3 = {
        parent: node16a20a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rôle des commissions départementales"},
        HTMLid:"16a20a1a3",
        HTMLclass:"leave"
    },
node16a20a2 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Répression du terrorisme (loi n° 96-647 du 22 juillet 1996) - Notion de nécessité de l'enquête"},
        HTMLid:"16a20a2",
        HTMLclass:"leave"
    },
node16a20a3 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Infractions assorties de sanctions administratives et peines contraventionnelles (loi organique n° 96-312 du 12 avril 1996)"},
        HTMLid:"16a20a3",
        HTMLclass:"leave"
    },
node16a20a4 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Législation applicable en matière de jeux de hasard et de loteries (loi organique n° 96-312 du 12 avril 1996)"},
        HTMLid:"16a20a4",
        HTMLclass:"leave"
    },
node16a20a5 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non rétroactivité de la loi pénale - Loi relative à la prestation d'autonomie pour les personnes âgées dépendantes (n° 97-60 du 24 janvier 1997)"},
        HTMLid:"16a20a5",
        HTMLclass:"leave"
    },
node16a20a6 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion d'élément moral de l'infraction - Diverses mesures relatives à la sécurité routière (loi n° 99-505 du 18 juin 1999)"},
        HTMLid:"16a20a6",
        HTMLclass:"leave"
    },
node16a20a7 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi pour la sécurité intérieure (n° 2003-239 du 18 mars 2003)"},
        HTMLid:"16a20a7",
    },
node16a20a7a1 = {
        parent: node16a20a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation de la proportionnalité des peines"},
        HTMLid:"16a20a7a1",
        HTMLclass:"leave"
    },
node16a20a7a2 = {
        parent: node16a20a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des principes généraux du droit pénal"},
        HTMLid:"16a20a7a2",
        HTMLclass:"leave"
    },
node16a20a7a3 = {
        parent: node16a20a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Outrage à l'hymne national ou au drapeau"},
        HTMLid:"16a20a7a3",
        HTMLclass:"leave"
    },
node16a20a8 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la confiance dans l'économie numérique (n° 2004-575 du 21 juin 2004)"},
        HTMLid:"16a20a8",
        HTMLclass:"leave"
    },
node16a20a9 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative au droit d'auteur (n° 2006-961 du 1er août 2006) - Cause d'exonération au bénéfice de la recherche (voir Titre 4 Droits et libertés - Droit de propriété)"},
        HTMLid:"16a20a9",
        HTMLclass:"leave"
    },
node16a20a10 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi interdisant la dissimulation du visage dans l'espace public (loi n° 2010-1192 du 11 octobre 2010)"},
        HTMLid:"16a20a10",
        HTMLclass:"leave"
    },
node16a20a11 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 3341-1 du code de la santé publique (ivresse publique - QPC)"},
        HTMLid:"16a20a11",
        HTMLclass:"leave"
    },
node16a20a12 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la consommation (n° 2014-344 du 17 mars 2014)"},
        HTMLid:"16a20a12",
        HTMLclass:"leave"
    },
node16a20a13 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 1741 du code général des impôts"},
        HTMLid:"16a20a13",
        HTMLclass:"leave"
    },
node16a20a14 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 465-2 du code monétaire et financier"},
        HTMLid:"16a20a14",
        HTMLclass:"leave"
    },
node16a20a15 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article L. 2223-2 du code de la santé publique"},
        HTMLid:"16a20a15",
        HTMLclass:"leave"
    },
node16a20a16 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Etat d'urgence"},
        HTMLid:"16a20a16",
        HTMLclass:"leave"
    },
node16a20a17 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 421-2-6 du code pénal (entreprise individuelle terroriste)"},
        HTMLid:"16a20a17",
        HTMLclass:"leave"
    },
node16a20a18 = {
        parent: node16a20,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 131-26-2 du code pénal (peine complémentaire obligatoire d'inéligibilité)"},
        HTMLid:"16a20a18",
        HTMLclass:"leave"
    },
node16a21 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "POUVOIRS PUBLICS"},
        HTMLid:"16a21",
    },
node16a21a1 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validations législatives (lois n° 94-112 du 9 février 1994 et n° 95-65 du 19 janvier 1995)"},
        HTMLid:"16a21a1",
        HTMLclass:"leave"
    },
node16a21a2 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect de la hiérarchie des normes (loi n° 95-115 du 4 février 1995) - Schémas directeurs"},
        HTMLid:"16a21a2",
        HTMLclass:"leave"
    },
node16a21a3 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Séparation des pouvoirs (loi n° 2001-1275 du 28 décembre 2001) - Autonomie financières des pouvoirs publics"},
        HTMLid:"16a21a3",
        HTMLclass:"leave"
    },
node16a21a4 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative aux archives du Conseil constitutionnel (n° 2008-695 du 15 juillet 2008)"},
        HTMLid:"16a21a4",
        HTMLclass:"leave"
    },
node16a21a5 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à l'article 61-1 de la Constitution (n° 2009-1523 du 10 décembre 2009)"},
        HTMLid:"16a21a5",
        HTMLclass:"leave"
    },
node16a21a6 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative au Défenseur des droits (n° 2011-333 du 29 mars 2011)"},
        HTMLid:"16a21a6",
        HTMLclass:"leave"
    },
node16a21a7 = {
        parent: node16a21,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Validation législative (Loi du pays de la Nouvelle-Calédonie)"},
        HTMLid:"16a21a7",
        HTMLclass:"leave"
    },
node16a22 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "PROCÉDURE PÉNALE"},
        HTMLid:"16a22",
    },
node16a22a1 = {
        parent: node16a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Code de procédure pénale"},
        HTMLid:"16a22a1",
    },
node16a22a1a1 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 62, alinéa 2 (audition de la personne suspectée)"},
        HTMLid:"16a22a1a1",
        HTMLclass:"leave"
    },
node16a22a1a2 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 78, alinéa 1er (audition de la personne suspectée)"},
        HTMLid:"16a22a1a2",
        HTMLclass:"leave"
    },
node16a22a1a3 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 130, 130-1 et 133 (al 4) (exécution des mandats d'amener ou d'arrêt)"},
        HTMLid:"16a22a1a3",
    },
node16a22a1a4 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 148 (JLD)"},
        HTMLid:"16a22a1a4",
        HTMLclass:"leave"
    },
node16a22a1a5 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 186 (appel ordonnances JI et JLD)"},
        HTMLid:"16a22a1a5",
        HTMLclass:"leave"
    },
node16a22a1a6 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 230-6 à 230-11 (fichiers d'antécédents)"},
        HTMLid:"16a22a1a6",
        HTMLclass:"leave"
    },
node16a22a1a7 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 230-20 à 230-27 (logiciels de rapprochement judiciaire)"},
        HTMLid:"16a22a1a7",
        HTMLclass:"leave"
    },
node16a22a1a8 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 230-40 à 230-42 (géolocalisation)"},
        HTMLid:"16a22a1a8",
        HTMLclass:"leave"
    },
node16a22a1a9 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 393 (défèrement devant le procureur de la République)"},
        HTMLid:"16a22a1a9",
        HTMLclass:"leave"
    },
node16a22a1a10 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 495-7 et suivants (Comparution sur reconnaissance préalable de culpabilité)"},
        HTMLid:"16a22a1a10",
        HTMLclass:"leave"
    },
node16a22a1a11 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 529-10 (amende forfaitaire)"},
        HTMLid:"16a22a1a11",
        HTMLclass:"leave"
    },
node16a22a1a12 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 706-54 (FNAEG)"},
        HTMLid:"16a22a1a12",
        HTMLclass:"leave"
    },
node16a22a1a13 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Articles 712-13-1, 720-4-1 et 730-1 (citoyens assesseurs pour l'application des peines)"},
        HTMLid:"16a22a1a13",
        HTMLclass:"leave"
    },
node16a22a1a14 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 803-3 (mise à la disposition de la justice)"},
        HTMLid:"16a22a1a14",
        HTMLclass:"leave"
    },
node16a22a1a15 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 41-4 (sort des biens saisis au cours de l'enquête ou de l'instruction)"},
        HTMLid:"16a22a1a15",
        HTMLclass:"leave"
    },
node16a22a1a16 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 530 (amende forfaitaire majorée)"},
        HTMLid:"16a22a1a16",
        HTMLclass:"leave"
    },
node16a22a1a17 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 696-11"},
        HTMLid:"16a22a1a17",
        HTMLclass:"leave"
    },
node16a22a1a18 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 696-19"},
        HTMLid:"16a22a1a18",
        HTMLclass:"leave"
    },
node16a22a1a19 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 78-2 et 78-2-2 du code de procédure pénale (contrôles d'identité sur réquisition du procureur)"},
        HTMLid:"16a22a1a19",
        HTMLclass:"leave"
    },
node16a22a1a20 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 695-28"},
        HTMLid:"16a22a1a20",
        HTMLclass:"leave"
    },
node16a22a1a21 = {
        parent: node16a22a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Article 41-1-1 du cu code pénal"},
        HTMLid:"16a22a1a21",
        HTMLclass:"leave"
    },
node16a22a2 = {
        parent: node16a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi portant adaptation de la justice aux évolutions de la criminalité (n° 2004-204 du 9 mars 2004)"},
        HTMLid:"16a22a2",
    },
node16a22a2a1 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect par l'autorité judiciaire des principes rappelés à l'article préliminaire du code de procédure pénale dans l'application des règles de procédure pénale spéciales"},
        HTMLid:"16a22a2a1",
        HTMLclass:"leave"
    },
node16a22a2a2 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Appréciation des actions perpétrées en bande organisée"},
        HTMLid:"16a22a2a2",
        HTMLclass:"leave"
    },
node16a22a2a3 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Report de l'intervention de l'avocat au cours de la garde à vue"},
        HTMLid:"16a22a2a3",
        HTMLclass:"leave"
    },
node16a22a2a4 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Risque immédiat de disparition de preuves ou d'indices matériels"},
        HTMLid:"16a22a2a4",
        HTMLclass:"leave"
    },
node16a22a2a5 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Enregistrements utiles à la manifestation de vérité"},
        HTMLid:"16a22a2a5",
        HTMLclass:"leave"
    },
node16a22a2a6 = {
        parent: node16a22a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Compétence du président du tribunal de grande instance en matière d'homologation des peines"},
        HTMLid:"16a22a2a6",
        HTMLclass:"leave"
    },
node16a22a3 = {
        parent: node16a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique portant dispositions statutaires et institutionnelles relatives à l'outre-mer (n° 2007-223 du 21 février 2007) - Compétences des magistrats du siège"},
        HTMLid:"16a22a3",
        HTMLclass:"leave"
    },
node16a22a4 = {
        parent: node16a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la rétention de sûreté et à la déclaration d'irresponsabilité pénale pour cause de trouble mental (n° 2008-174 du 25 février 2008) - Contrôle de la juridiction régionale de la rétention de sûreté"},
        HTMLid:"16a22a4",
        HTMLclass:"leave"
    },
node16a22a5 = {
        parent: node16a22,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi pénitentiaire (n° 2009-1436 du 24 novembre 2009) - Renvoi au décret pour fixer le régime disciplinaire des personnes détenues."},
        HTMLid:"16a22a5",
        HTMLclass:"leave"
    },
node16a23 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "TRANSPARENCE DE LA VIE PUBLIQUE"},
        HTMLid:"16a23",
    },
node16a23a1 = {
        parent: node16a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi organique relative à la transparence de la vie publique"},
        HTMLid:"16a23a1",
        HTMLclass:"leave"
    },
node16a23a2 = {
        parent: node16a23,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la transparence de la vie publique"},
        HTMLid:"16a23a2",
        HTMLclass:"leave"
    },
node16a24 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DIVERS"},
        HTMLid:"16a24",
    },
node16a24a1 = {
        parent: node16a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Langue française"},
        HTMLid:"16a24a1",
    },
node16a24a1a1 = {
        parent: node16a24a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Usage du français en Polynésie française (loi organique n° 96-312 du 12 avril 1996)"},
        HTMLid:"16a24a1a1",
        HTMLclass:"leave"
    },
node16a24a1a2 = {
        parent: node16a24a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impossibilité d'imposer l'usage d'une langue autre que le français aux élèves des établissements de l'enseignement public (lois n° 2001-1275 du 28 décembre 2001 et n° 2004-192 du 27 février 2004)"},
        HTMLid:"16a24a1a2",
        HTMLclass:"leave"
    },
node16a24a2 = {
        parent: node16a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois relatives à l'informatique, aux fichiers et aux libertés"},
        HTMLid:"16a24a2",
    },
node16a24a2a1 = {
        parent: node16a24a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi du 6 janvier 1978, relative à l'informatique, aux fichiers et aux libertés (loi n° 2003-239 du 18 mars 2003)"},
        HTMLid:"16a24a2a1",
        HTMLclass:"leave"
    },
node16a24a2a2 = {
        parent: node16a24a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel et modifiant la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés (n° 2004-801 du 6 août 2004)"},
        HTMLid:"16a24a2a2",
        HTMLclass:"leave"
    },
node16a24a2a3 = {
        parent: node16a24a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi favorisant la diffusion et la protection de la création sur internet (loi n° 2009-669 du 12 juin 2009)"},
        HTMLid:"16a24a2a3",
        HTMLclass:"leave"
    },
node16a24a3 = {
        parent: node16a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Domaine public"},
        HTMLid:"16a24a3",
        HTMLclass:"leave"
    },
node16a24a4 = {
        parent: node16a24,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi du 1er juillet 1901 relative au contrat d'association"},
        HTMLid:"16a24a4",
        HTMLclass:"leave"
    },
node16a25 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "AUTORITES ADMINISTRATIVES INDEPENDANTES"},
        HTMLid:"16a25",
        HTMLclass:"leave"
    },
node16a26 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DE PROPRIETE"},
        HTMLid:"16a26",
        HTMLclass:"leave"
    },
node16a27 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "DROIT DES TRANSPORTS"},
        HTMLid:"16a27",
        HTMLclass:"leave"
    },
node16a28 = {
        parent: node16,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "SANTÉ"},
        HTMLid:"16a28",
        HTMLclass:"leave"
    },
tree_config16 = [config,node16,node16a1,node16a1a1,node16a1a2,node16a1a3,node16a1a4,node16a2,node16a2a1,node16a2a1a1,node16a2a1a2,node16a2a2,node16a2a2a1,node16a2a2a2,node16a2a3,node16a3,node16a3a1,node16a3a2,node16a3a3,node16a3a4,node16a3a4a1,node16a3a4a2,node16a3a5,node16a3a6,node16a4,node16a4a1,node16a4a2,node16a4a3,node16a4a4,node16a4a5,node16a4a6,node16a4a7,node16a4a8,node16a4a9,node16a5,node16a5a1,node16a5a2,node16a5a3,node16a5a3a1,node16a5a3a2,node16a5a3a3,node16a5a3a4,node16a5a3a5,node16a5a3a6,node16a5a4,node16a5a4a1,node16a5a4a2,node16a5a4a3,node16a5a4a4,node16a5a4a5,node16a5a4a6,node16a5a5,node16a5a6,node16a6,node16a6a1,node16a6a1a1,node16a6a1a2,node16a6a1a3,node16a7,node16a8,node16a9,node16a9a1,node16a10,node16a10a1,node16a10a1a1,node16a10a1a2,node16a10a2,node16a10a3,node16a10a4,node16a10a5,node16a10a6,node16a10a7,node16a10a8,node16a10a9,node16a10a10,node16a10a11,node16a10a12,node16a10a13,node16a10a14,node16a10a15,node16a10a16,node16a10a17,node16a10a18,node16a10a19,node16a10a20,node16a10a21,node16a10a22,node16a10a23,node16a11,node16a11a1,node16a11a2,node16a11a2a1,node16a11a2a2,node16a11a3,node16a11a4,node16a11a5,node16a11a6,node16a12,node16a12a1,node16a12a2,node16a12a3,node16a12a4,node16a12a5,node16a13,node16a13a1,node16a13a2,node16a13a3,node16a13a4,node16a14,node16a14a1,node16a14a2,node16a14a3,node16a14a4,node16a14a5,node16a14a6,node16a15,node16a15a1,node16a15a2,node16a15a3,node16a15a4,node16a15a5,node16a15a6,node16a15a6a1,node16a15a6a2,node16a15a6a3,node16a15a6a4,node16a15a7,node16a15a7a1,node16a15a7a2,node16a15a8,node16a15a8a1,node16a15a8a2,node16a15a8a3,node16a15a8a4,node16a15a8a5,node16a15a8a6,node16a15a8a7,node16a15a8a8,node16a15a8a9,node16a15a8a10,node16a15a8a11,node16a15a8a12,node16a15a8a13,node16a15a8a14,node16a15a9,node16a15a10,node16a15a11,node16a15a12,node16a15a13,node16a15a14,node16a15a14a1,node16a15a14a2,node16a15a14a3,node16a15a14a4,node16a15a14a5,node16a15a14a6,node16a15a14a7,node16a15a15,node16a15a15a1,node16a15a15a2,node16a15a15a3,node16a15a16,node16a15a17,node16a15a18,node16a15a19,node16a15a20,node16a15a21,node16a16,node16a16a1,node16a16a1a1,node16a16a1a2,node16a16a1a3,node16a16a2,node16a16a2a1,node16a16a2a2,node16a16a2a3,node16a16a2a4,node16a16a2a5,node16a16a2a6,node16a16a2a7,node16a16a2a8,node16a16a2a9,node16a16a3,node16a16a3a1,node16a16a3a2,node16a16a3a3,node16a16a4,node16a16a5,node16a16a6,node16a16a7,node16a16a8,node16a17,node16a17a1,node16a17a1a1,node16a17a2,node16a17a3,node16a17a3a1,node16a17a3a2,node16a17a3a3,node16a17a3a4,node16a17a3a5,node16a17a3a6,node16a17a3a7,node16a17a3a8,node16a17a4,node16a17a4a1,node16a17a4a2,node16a17a5,node16a17a6,node16a17a7,node16a17a8,node16a17a8a1,node16a17a8a2,node16a17a8a3,node16a17a8a4,node16a17a8a5,node16a17a8a6,node16a17a8a7,node16a17a9,node16a17a10,node16a17a11,node16a17a11a1,node16a17a11a2,node16a17a12,node16a17a12a1,node16a17a12a2,node16a17a13,node16a17a14,node16a17a15,node16a17a15a1,node16a17a16,node16a17a16a1,node16a17a16a2,node16a17a17,node16a17a18,node16a17a19,node16a17a20,node16a17a21,node16a17a22,node16a17a23,node16a17a24,node16a17a25,node16a17a26,node16a17a27,node16a18,node16a18a1,node16a18a1a1,node16a18a1a2,node16a18a1a3,node16a18a2,node16a18a3,node16a19,node16a19a1,node16a19a2,node16a19a2a1,node16a19a2a2,node16a19a2a3,node16a19a2a3a1,node16a19a2a3a2,node16a19a2a4,node16a19a3,node16a19a3a1,node16a19a3a2,node16a19a3a3,node16a19a4,node16a20,node16a20a1,node16a20a1a1,node16a20a1a2,node16a20a1a3,node16a20a2,node16a20a3,node16a20a4,node16a20a5,node16a20a6,node16a20a7,node16a20a7a1,node16a20a7a2,node16a20a7a3,node16a20a8,node16a20a9,node16a20a10,node16a20a11,node16a20a12,node16a20a13,node16a20a14,node16a20a15,node16a20a16,node16a20a17,node16a20a18,node16a21,node16a21a1,node16a21a2,node16a21a3,node16a21a4,node16a21a5,node16a21a6,node16a21a7,node16a22,node16a22a1,node16a22a1a1,node16a22a1a2,node16a22a1a3,node16a22a1a4,node16a22a1a5,node16a22a1a6,node16a22a1a7,node16a22a1a8,node16a22a1a9,node16a22a1a10,node16a22a1a11,node16a22a1a12,node16a22a1a13,node16a22a1a14,node16a22a1a15,node16a22a1a16,node16a22a1a17,node16a22a1a18,node16a22a1a19,node16a22a1a20,node16a22a1a21,node16a22a2,node16a22a2a1,node16a22a2a2,node16a22a2a3,node16a22a2a4,node16a22a2a5,node16a22a2a6,node16a22a3,node16a22a4,node16a22a5,node16a23,node16a23a1,node16a23a2,node16a24,node16a24a1,node16a24a1a1,node16a24a1a2,node16a24a2,node16a24a2a1,node16a24a2a2,node16a24a2a3,node16a24a3,node16a24a4,node16a25,node16a26,node16a27,node16a28];

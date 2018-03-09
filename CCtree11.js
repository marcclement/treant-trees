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
node11 = {
        childrenDropLevel: 1,
        text:{name: "CONSEIL CONSTITUTIONNEL ET CONTENTIEUX DES NORMES"},
        HTMLid:"11",
    },
node11a1 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "STATUT DES MEMBRES DU CONSEIL CONSTITUTIONNEL"},
        HTMLid:"11a1",
    },
node11a1a1 = {
        parent: node11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres de droit"},
        HTMLid:"11a1a1",
        HTMLclass:"leave"
    },
node11a1a2 = {
        parent: node11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Membres nommés"},
        HTMLid:"11a1a2",
        HTMLclass:"leave"
    },
node11a1a3 = {
        parent: node11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"11a1a3",
        HTMLclass:"leave"
    },
node11a1a4 = {
        parent: node11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Impartialité"},
        HTMLid:"11a1a4",
        HTMLclass:"leave"
    },
node11a1a5 = {
        parent: node11a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Secret des délibérations et des votes"},
        HTMLid:"11a1a5",
        HTMLclass:"leave"
    },
node11a2 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "FONCTIONNEMENT"},
        HTMLid:"11a2",
        HTMLclass:"leave"
    },
node11a3 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "CHAMP D'APPLICATION DU CONTRÔLE DE CONFORMITÉ À LA CONSTITUTION"},
        HTMLid:"11a3",
    },
node11a3a1 = {
        parent: node11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompétence du Conseil constitutionnel"},
        HTMLid:"11a3a1",
    },
node11a3a1a1 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Révision constitutionnelle approuvée par le Congrès"},
        HTMLid:"11a3a1a1",
        HTMLclass:"leave"
    },
node11a3a1a2 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois adoptées par voie de référendum"},
        HTMLid:"11a3a1a2",
        HTMLclass:"leave"
    },
node11a3a1a3 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi se bornant à tirer les conséquences nécessaires de dispositions inconditionnelles et précises d'une directive"},
        HTMLid:"11a3a1a3",
        HTMLclass:"leave"
    },
node11a3a1a4 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi promulguée non encore publiée"},
        HTMLid:"11a3a1a4",
        HTMLclass:"leave"
    },
node11a3a1a5 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Ordonnances prévues par l'article 38 de la Constitution"},
        HTMLid:"11a3a1a5",
        HTMLclass:"leave"
    },
node11a3a1a6 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Décret portant dissolution de l'Assemblée nationale"},
        HTMLid:"11a3a1a6",
        HTMLclass:"leave"
    },
node11a3a1a7 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Régularité de l'élection du président de l'Assemblée nationale"},
        HTMLid:"11a3a1a7",
        HTMLclass:"leave"
    },
node11a3a1a8 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande en interprétation de la loi"},
        HTMLid:"11a3a1a8",
        HTMLclass:"leave"
    },
node11a3a1a9 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande d'avis"},
        HTMLid:"11a3a1a9",
        HTMLclass:"leave"
    },
node11a3a1a10 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Voeux"},
        HTMLid:"11a3a1a10",
        HTMLclass:"leave"
    },
node11a3a1a11 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Litige ayant donné lieu à la question prioritaire de constitutionnalité"},
        HTMLid:"11a3a1a11",
        HTMLclass:"leave"
    },
node11a3a1a12 = {
        parent: node11a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Actes réglementaires"},
        HTMLid:"11a3a1a12",
        HTMLclass:"leave"
    },
node11a3a2 = {
        parent: node11a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue de la compétence du Conseil constitutionnel"},
        HTMLid:"11a3a2",
    },
node11a3a2a1 = {
        parent: node11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois adoptées par le Parlement"},
        HTMLid:"11a3a2a1",
    },
node11a3a2a1a1 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois organiques"},
        HTMLid:"11a3a2a1a1",
        HTMLclass:"leave"
    },
node11a3a2a1a2 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois autorisant la ratification d'un traité"},
        HTMLid:"11a3a2a1a2",
        HTMLclass:"leave"
    },
node11a3a2a1a3 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois mettant en oeuvre une directive communautaire"},
        HTMLid:"11a3a2a1a3",
        HTMLclass:"leave"
    },
node11a3a2a1a4 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois d'habilitation"},
        HTMLid:"11a3a2a1a4",
        HTMLclass:"leave"
    },
node11a3a2a1a5 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de ratification d'ordonnances"},
        HTMLid:"11a3a2a1a5",
        HTMLclass:"leave"
    },
node11a3a2a1a6 = {
        parent: node11a3a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de programme et de programmation (pas de contenu pour l'instant)"},
        HTMLid:"11a3a2a1a6",
        HTMLclass:"leave"
    },
node11a3a2a2 = {
        parent: node11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règlements des assemblées"},
        HTMLid:"11a3a2a2",
        HTMLclass:"leave"
    },
node11a3a2a3 = {
        parent: node11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois de pays"},
        HTMLid:"11a3a2a3",
        HTMLclass:"leave"
    },
node11a3a2a4 = {
        parent: node11a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Propositions de lois soumises au référendum (articles 11 et 61 modifiés en 2008)"},
        HTMLid:"11a3a2a4",
        HTMLclass:"leave"
    },
node11a4 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "RECEVABILITÉ DES SAISINES (article 61 de la Constitution)"},
        HTMLid:"11a4",
    },
node11a4a1 = {
        parent: node11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions tenant aux auteurs de la saisine"},
        HTMLid:"11a4a1",
    },
node11a4a1a1 = {
        parent: node11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité d'une demande formée par un particulier"},
        HTMLid:"11a4a1a1",
        HTMLclass:"leave"
    },
node11a4a1a2 = {
        parent: node11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité d'une saisine émanant de moins de soixante députés ou de moins de soixante sénateurs"},
        HTMLid:"11a4a1a2",
        HTMLclass:"leave"
    },
node11a4a1a3 = {
        parent: node11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité d'un mémoire complémentaire émanant d'un parlementaire"},
        HTMLid:"11a4a1a3",
        HTMLclass:"leave"
    },
node11a4a1a4 = {
        parent: node11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois du pays"},
        HTMLid:"11a4a1a4",
        HTMLclass:"leave"
    },
node11a4a1a5 = {
        parent: node11a4a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Authentification des requêtes"},
        HTMLid:"11a4a1a5",
        HTMLclass:"leave"
    },
node11a4a2 = {
        parent: node11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions tenant à la nature de l'acte déféré"},
        HTMLid:"11a4a2",
    },
node11a4a2a1 = {
        parent: node11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'examen du règlement d'une assemblée"},
        HTMLid:"11a4a2a1",
        HTMLclass:"leave"
    },
node11a4a2a2 = {
        parent: node11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'examen d'une loi organique"},
        HTMLid:"11a4a2a2",
        HTMLclass:"leave"
    },
node11a4a2a3 = {
        parent: node11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions d'examen d'une loi"},
        HTMLid:"11a4a2a3",
    },
node11a4a2a3a1 = {
        parent: node11a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conséquence éventuelle de l'adoption d'une exception d'irrecevabilité"},
        HTMLid:"11a4a2a3a1",
        HTMLclass:"leave"
    },
node11a4a2a3a2 = {
        parent: node11a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "La loi déférée doit être définitivement adoptée"},
        HTMLid:"11a4a2a3a2",
        HTMLclass:"leave"
    },
node11a4a2a3a3 = {
        parent: node11a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions ne figurant pas dans la loi définitive"},
        HTMLid:"11a4a2a3a3",
        HTMLclass:"leave"
    },
node11a4a2a3a4 = {
        parent: node11a4a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Loi sur laquelle le Conseil constitutionnel s'est déjà prononcé"},
        HTMLid:"11a4a2a3a4",
        HTMLclass:"leave"
    },
node11a4a2a4 = {
        parent: node11a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Condition d'examen d'une loi du pays"},
        HTMLid:"11a4a2a4",
        HTMLclass:"leave"
    },
node11a4a3 = {
        parent: node11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions tenant à la forme de la saisine"},
        HTMLid:"11a4a3",
    },
node11a4a3a1 = {
        parent: node11a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation"},
        HTMLid:"11a4a3a1",
        HTMLclass:"leave"
    },
node11a4a3a2 = {
        parent: node11a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Formes de la saisine"},
        HTMLid:"11a4a3a2",
        HTMLclass:"leave"
    },
node11a4a3a3 = {
        parent: node11a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisines multiples"},
        HTMLid:"11a4a3a3",
    },
node11a4a3a3a1 = {
        parent: node11a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine double"},
        HTMLid:"11a4a3a3a1",
    },
node11a4a3a3a2 = {
        parent: node11a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisines conjointes"},
        HTMLid:"11a4a3a3a2",
    },
node11a4a3a4 = {
        parent: node11a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jonction des saisines"},
        HTMLid:"11a4a3a4",
        HTMLclass:"leave"
    },
node11a4a4 = {
        parent: node11a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets de la saisine"},
        HTMLid:"11a4a4",
    },
node11a4a4a1 = {
        parent: node11a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de l'ensemble des dispositions de la loi déférée"},
        HTMLid:"11a4a4a1",
        HTMLclass:"leave"
    },
node11a4a4a2 = {
        parent: node11a4a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen de dispositions non contestées de la loi déférée"},
        HTMLid:"11a4a4a2",
        HTMLclass:"leave"
    },
node11a5 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "GRIEFS (contrôle a priori des lois - article 61 de la Constitution)"},
        HTMLid:"11a5",
    },
node11a5a1 = {
        parent: node11a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs irrecevables"},
        HTMLid:"11a5a1",
    },
node11a5a1a1 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée de l'article 40 de la Constitution"},
        HTMLid:"11a5a1a1",
        HTMLclass:"leave"
    },
node11a5a1a2 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée de l'article 42 de l'ordonnance organique n° 59-2 du 2 janvier 1959"},
        HTMLid:"11a5a1a2",
    },
node11a5a1a2a1 = {
        parent: node11a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence initiale : grief d'ordre public"},
        HTMLid:"11a5a1a2a1",
        HTMLclass:"leave"
    },
node11a5a1a2a2 = {
        parent: node11a5a1a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Évolution de la jurisprudence"},
        HTMLid:"11a5a1a2a2",
        HTMLclass:"leave"
    },
node11a5a1a3 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée de l'article 41 de la Constitution"},
        HTMLid:"11a5a1a3",
        HTMLclass:"leave"
    },
node11a5a1a4 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée de l'article L.O. 111-3-III du code de la sécurité sociale"},
        HTMLid:"11a5a1a4",
        HTMLclass:"leave"
    },
node11a5a1a5 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée de la dernière phrase de l'article 45 de la Constitution"},
        HTMLid:"11a5a1a5",
        HTMLclass:"leave"
    },
node11a5a1a6 = {
        parent: node11a5a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Irrecevabilité tirée du quatrième alinéa de l'article 39 de la Constitution"},
        HTMLid:"11a5a1a6",
        HTMLclass:"leave"
    },
node11a5a2 = {
        parent: node11a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs inopérants ou manquant en fait"},
        HTMLid:"11a5a2",
        HTMLclass:"leave"
    },
node11a5a2a1 = {
        parent: node11a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs inopérants (exemples)"},
        HTMLid:"11a5a2a1",
        HTMLclass:"leave"
    },
node11a5a2a2 = {
        parent: node11a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs manquant en fait (exemples)"},
        HTMLid:"11a5a2a2",
        HTMLclass:"leave"
    },
node11a5a2a3 = {
        parent: node11a5a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Griefs surabondants"},
        HTMLid:"11a5a2a3",
        HTMLclass:"leave"
    },
node11a5a3 = {
        parent: node11a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas des lois promulguées"},
        HTMLid:"11a5a3",
    },
node11a5a3a1 = {
        parent: node11a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe : rejet du contrôle"},
        HTMLid:"11a5a3a1",
        HTMLclass:"leave"
    },
node11a5a3a2 = {
        parent: node11a5a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exception : admission conditionnelle du contrôle"},
        HTMLid:"11a5a3a2",
        HTMLclass:"leave"
    },
node11a6 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "QUESTION PRIORITAIRE DE CONSTITUTIONNALITÉ"},
        HTMLid:"11a6",
    },
node11a6a1 = {
        parent: node11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure applicable devant les juridictions judiciaires et administratives"},
        HTMLid:"11a6a1",
    },
node11a6a1a1 = {
        parent: node11a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère prioritaire de la question"},
        HTMLid:"11a6a1a1",
        HTMLclass:"leave"
    },
node11a6a1a2 = {
        parent: node11a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Encadrement de la question prioritaire de constitutionnalité"},
        HTMLid:"11a6a1a2",
        HTMLclass:"leave"
    },
node11a6a1a3 = {
        parent: node11a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Règles procédurales applicables à l'examen de la transmission ou du renvoi de la question"},
        HTMLid:"11a6a1a3",
        HTMLclass:"leave"
    },
node11a6a1a4 = {
        parent: node11a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sursis à statuer"},
        HTMLid:"11a6a1a4",
        HTMLclass:"leave"
    },
node11a6a2 = {
        parent: node11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critères de transmission ou de renvoi de la question au Conseil constitutionnel"},
        HTMLid:"11a6a2",
    },
node11a6a2a1 = {
        parent: node11a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de disposition législative et interprétation"},
        HTMLid:"11a6a2a1",
        HTMLclass:"leave"
    },
node11a6a2a1a1 = {
        parent: node11a6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Examen des dispositions telles qu'interprétées par une jurisprudence constante"},
        HTMLid:"11a6a2a1a1",
        HTMLclass:"leave"
    },
node11a6a2a1a2 = {
        parent: node11a6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère législatif des dispositions"},
        HTMLid:"11a6a2a1a2",
        HTMLclass:"leave"
    },
node11a6a2a1a3 = {
        parent: node11a6a2a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de caractère législatif des dispositions"},
        HTMLid:"11a6a2a1a3",
        HTMLclass:"leave"
    },
node11a6a2a2 = {
        parent: node11a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Applicable au litige ou à la procédure ou fondement des poursuites"},
        HTMLid:"11a6a2a2",
        HTMLclass:"leave"
    },
node11a6a2a3 = {
        parent: node11a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Absence de décision antérieure du Conseil constitutionnel (1° de l'article 23-2 Ord. 7/11/1958)"},
        HTMLid:"11a6a2a3",
        HTMLclass:"leave"
    },
node11a6a2a4 = {
        parent: node11a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère sérieux ou difficulté sérieuse de la question"},
        HTMLid:"11a6a2a4",
        HTMLclass:"leave"
    },
node11a6a2a5 = {
        parent: node11a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question nouvelle"},
        HTMLid:"11a6a2a5",
        HTMLclass:"leave"
    },
node11a6a3 = {
        parent: node11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Procédure applicable devant le Conseil constitutionnel"},
        HTMLid:"11a6a3",
        HTMLclass:"leave"
    },
node11a6a3a1 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Observations en intervention"},
        HTMLid:"11a6a3a1",
        HTMLclass:"leave"
    },
node11a6a3a2 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Grief soulevé d'office par le Conseil constitutionnel"},
        HTMLid:"11a6a3a2",
        HTMLclass:"leave"
    },
node11a6a3a3 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Grief inopérant"},
        HTMLid:"11a6a3a3",
        HTMLclass:"leave"
    },
node11a6a3a4 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Grief manquant en fait"},
        HTMLid:"11a6a3a4",
        HTMLclass:"leave"
    },
node11a6a3a5 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination de la disposition soumise au Conseil constitutionnel"},
        HTMLid:"11a6a3a5",
        HTMLclass:"leave"
    },
node11a6a3a5a1 = {
        parent: node11a6a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délimitation plus étroite de la disposition législative soumise au Conseil constitutionnel"},
        HTMLid:"11a6a3a5a1",
        HTMLclass:"leave"
    },
node11a6a3a5a2 = {
        parent: node11a6a3a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Détermination de la version de la disposition législative soumise au Conseil constitutionnel"},
        HTMLid:"11a6a3a5a2",
        HTMLclass:"leave"
    },
node11a6a3a6 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Question soumise d'office aux parties par le Conseil constitutionnel"},
        HTMLid:"11a6a3a6",
        HTMLclass:"leave"
    },
node11a6a3a7 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Saisine directe du Conseil constitutionnel"},
        HTMLid:"11a6a3a7",
        HTMLclass:"leave"
    },
node11a6a3a8 = {
        parent: node11a6a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Grief mal dirigé"},
        HTMLid:"11a6a3a8",
        HTMLclass:"leave"
    },
node11a6a4 = {
        parent: node11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de  droits et libertés que la Constitution garantit  (voir Titre 4.1 Notion de  droits et libertés que la constitution garantit )"},
        HTMLid:"11a6a4",
    },
node11a6a5 = {
        parent: node11a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Sens et portée de la décision"},
        HTMLid:"11a6a5",
    },
node11a6a5a1 = {
        parent: node11a6a5,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Non-lieu à statuer"},
        HTMLid:"11a6a5a1",
        HTMLclass:"leave"
    },
node11a7 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "EXAMEN DE LA CONSTITUTIONNALITÉ"},
        HTMLid:"11a7",
    },
node11a7a1 = {
        parent: node11a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature du contrôle"},
        HTMLid:"11a7a1",
    },
node11a7a1a1 = {
        parent: node11a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir d'appréciation conféré au Conseil constitutionnel"},
        HTMLid:"11a7a1a1",
        HTMLclass:"leave"
    },
node11a7a1a2 = {
        parent: node11a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nature de l'intervention du Conseil constitutionnel"},
        HTMLid:"11a7a1a2",
        HTMLclass:"leave"
    },
node11a7a2 = {
        parent: node11a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Conditions de prise en compte d'éléments extrinsèques au texte de la loi"},
        HTMLid:"11a7a2",
    },
node11a7a2a1 = {
        parent: node11a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Approche exégétique"},
        HTMLid:"11a7a2a1",
        HTMLclass:"leave"
    },
node11a7a2a2 = {
        parent: node11a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence aux travaux préparatoires"},
        HTMLid:"11a7a2a2",
    },
node11a7a2a2a1 = {
        parent: node11a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence aux travaux préparatoires d'une loi constitutionnelle"},
        HTMLid:"11a7a2a2a1",
        HTMLclass:"leave"
    },
node11a7a2a2a2 = {
        parent: node11a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence aux travaux préparatoires d'une loi organique"},
        HTMLid:"11a7a2a2a2",
        HTMLclass:"leave"
    },
node11a7a2a2a3 = {
        parent: node11a7a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence aux travaux préparatoires de la loi déférée"},
        HTMLid:"11a7a2a2a3",
        HTMLclass:"leave"
    },
node11a7a2a3 = {
        parent: node11a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Référence à une loi non encore promulguée"},
        HTMLid:"11a7a2a3",
        HTMLclass:"leave"
    },
node11a7a2a4 = {
        parent: node11a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Entrée en vigueur d'une loi subordonnée à l'intervention d'une loi ultérieure"},
        HTMLid:"11a7a2a4",
        HTMLclass:"leave"
    },
node11a7a2a5 = {
        parent: node11a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Adoption d'une exception d'irrecevabilité"},
        HTMLid:"11a7a2a5",
        HTMLclass:"leave"
    },
node11a7a3 = {
        parent: node11a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Étendue du contrôle"},
        HTMLid:"11a7a3",
    },
node11a7a3a1 = {
        parent: node11a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pouvoir discrétionnaire du législateur non contrôlé par le juge constitutionnel"},
        HTMLid:"11a7a3a1",
        HTMLclass:"leave"
    },
node11a7a3a2 = {
        parent: node11a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Limites reconnues au pouvoir discrétionnaire du législateur"},
        HTMLid:"11a7a3a2",
    },
node11a7a3a2a1 = {
        parent: node11a7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigences de valeur constitutionnelle"},
        HTMLid:"11a7a3a2a1",
        HTMLclass:"leave"
    },
node11a7a3a2a2 = {
        parent: node11a7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "État des connaissances et des techniques"},
        HTMLid:"11a7a3a2a2",
        HTMLclass:"leave"
    },
node11a7a3a2a3 = {
        parent: node11a7a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Modalités retenues par la loi manifestement inappropriées à cet objectif"},
        HTMLid:"11a7a3a2a3",
        HTMLclass:"leave"
    },
node11a7a3a3 = {
        parent: node11a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intensité du contrôle du juge"},
        HTMLid:"11a7a3a3",
    },
node11a7a3a3a1 = {
        parent: node11a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle restreint"},
        HTMLid:"11a7a3a3a1",
    },
node11a7a3a3a1a1 = {
        parent: node11a7a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle de l'erreur manifeste"},
        HTMLid:"11a7a3a3a1a1",
        HTMLclass:"leave"
    },
node11a7a3a3a1a2 = {
        parent: node11a7a3a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle restreint découlant de la norme constitutionnelle"},
        HTMLid:"11a7a3a3a1a2",
        HTMLclass:"leave"
    },
node11a7a3a3a2 = {
        parent: node11a7a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contrôle normal"},
        HTMLid:"11a7a3a3a2",
        HTMLclass:"leave"
    },
node11a8 = {
        parent: node11,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "SENS ET PORTÉE DE LA DÉCISION"},
        HTMLid:"11a8",
    },
node11a8a1 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dispositions de loi dépourvues d'effet normatif"},
        HTMLid:"11a8a1",
    },
node11a8a1a1 = {
        parent: node11a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Déclaration d'inopérance"},
        HTMLid:"11a8a1a1",
        HTMLclass:"leave"
    },
node11a8a1a2 = {
        parent: node11a8a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exigence de normativité de la loi"},
        HTMLid:"11a8a1a2",
        HTMLclass:"leave"
    },
node11a8a2 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Injonctions au législateur"},
        HTMLid:"11a8a2",
        HTMLclass:"leave"
    },
node11a8a3 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserves d'interprétation (voir Titre 16 Réserves d'interprétation)"},
        HTMLid:"11a8a3",
    },
node11a8a4 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Caractère séparable ou non des dispositions déclarées inconstitutionnelles"},
        HTMLid:"11a8a4",
        HTMLclass:"leave"
    },
node11a8a4a1 = {
        parent: node11a8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Critère de distinction"},
        HTMLid:"11a8a4a1",
        HTMLclass:"leave"
    },
node11a8a4a2 = {
        parent: node11a8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Exemples de dispositions séparables"},
        HTMLid:"11a8a4a2",
    },
node11a8a4a2a1 = {
        parent: node11a8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois organiques"},
        HTMLid:"11a8a4a2a1",
        HTMLclass:"leave"
    },
node11a8a4a2a2 = {
        parent: node11a8a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Lois ordinaires"},
        HTMLid:"11a8a4a2a2",
        HTMLclass:"leave"
    },
node11a8a4a3 = {
        parent: node11a8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inséparabilité des dispositions non conformes à la Constitution et de tout ou partie du reste de la loi"},
        HTMLid:"11a8a4a3",
    },
node11a8a4a3a1 = {
        parent: node11a8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inséparabilité des dispositions déclarées contraires à la Constitution de l'ensemble de la loi"},
        HTMLid:"11a8a4a3a1",
        HTMLclass:"leave"
    },
node11a8a4a3a2 = {
        parent: node11a8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inséparabilité d'un article de loi et d'autres articles (exemples)"},
        HTMLid:"11a8a4a3a2",
    },
node11a8a4a3a2a1 = {
        parent: node11a8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas général"},
        HTMLid:"11a8a4a3a2a1",
        HTMLclass:"leave"
    },
node11a8a4a3a2a2 = {
        parent: node11a8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas de la loi organique"},
        HTMLid:"11a8a4a3a2a2",
        HTMLclass:"leave"
    },
node11a8a4a3a2a3 = {
        parent: node11a8a4a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas particulier de l'abrogation de la législation antérieure"},
        HTMLid:"11a8a4a3a2a3",
        HTMLclass:"leave"
    },
node11a8a4a3a3 = {
        parent: node11a8a4a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Inséparabilité au sein d'un même article (exemples)"},
        HTMLid:"11a8a4a3a3",
    },
node11a8a4a3a3a1 = {
        parent: node11a8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas d'inséparabilité"},
        HTMLid:"11a8a4a3a3a1",
        HTMLclass:"leave"
    },
node11a8a4a3a3a2 = {
        parent: node11a8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Censure partielle"},
        HTMLid:"11a8a4a3a3a2",
        HTMLclass:"leave"
    },
node11a8a4a3a3a3 = {
        parent: node11a8a4a3a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Censure totale"},
        HTMLid:"11a8a4a3a3a3",
        HTMLclass:"leave"
    },
node11a8a4a4 = {
        parent: node11a8a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Censure par voie de conséquence"},
        HTMLid:"11a8a4a4",
        HTMLclass:"leave"
    },
node11a8a5 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rectification d'une disposition législative par voie de conséquence"},
        HTMLid:"11a8a5",
        HTMLclass:"leave"
    },
node11a8a6 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des décisions dans le temps"},
        HTMLid:"11a8a6",
    },
node11a8a6a1 = {
        parent: node11a8a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dans le cadre d'un contrôle a priori (article 61)"},
        HTMLid:"11a8a6a1",
    },
node11a8a6a1a1 = {
        parent: node11a8a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principes"},
        HTMLid:"11a8a6a1a1",
        HTMLclass:"leave"
    },
node11a8a6a1a2 = {
        parent: node11a8a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Délai accordé par le Conseil constitutionnel pour une mise en conformité"},
        HTMLid:"11a8a6a1a2",
        HTMLclass:"leave"
    },
node11a8a6a1a3 = {
        parent: node11a8a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Report dans le temps d'une déclaration d'inconstitutionnalité"},
        HTMLid:"11a8a6a1a3",
        HTMLclass:"leave"
    },
node11a8a6a1a4 = {
        parent: node11a8a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve"},
        HTMLid:"11a8a6a1a4",
        HTMLclass:"leave"
    },
node11a8a6a1a5 = {
        parent: node11a8a6a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets produits par la disposition déclarée inconstitutionnelle"},
        HTMLid:"11a8a6a1a5",
        HTMLclass:"leave"
    },
node11a8a6a2 = {
        parent: node11a8a6,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Dans le cadre d'un contrôle a posteriori (article 61-1)"},
        HTMLid:"11a8a6a2",
        HTMLclass:"leave"
    },
node11a8a6a2a1 = {
        parent: node11a8a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Principe"},
        HTMLid:"11a8a6a2a1",
        HTMLclass:"leave"
    },
node11a8a6a2a2 = {
        parent: node11a8a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abrogation"},
        HTMLid:"11a8a6a2a2",
    },
node11a8a6a2a2a1 = {
        parent: node11a8a6a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abrogation à la date de la publication de la décision"},
        HTMLid:"11a8a6a2a2a1",
        HTMLclass:"leave"
    },
node11a8a6a2a2a2 = {
        parent: node11a8a6a2a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Abrogation reportée dans le temps"},
        HTMLid:"11a8a6a2a2a2",
        HTMLclass:"leave"
    },
node11a8a6a2a3 = {
        parent: node11a8a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve"},
        HTMLid:"11a8a6a2a3",
    },
node11a8a6a2a3a1 = {
        parent: node11a8a6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve pérenne (voir Titre 16 Réserves d'interprétation)"},
        HTMLid:"11a8a6a2a3a1",
        HTMLclass:"leave"
    },
node11a8a6a2a3a2 = {
        parent: node11a8a6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Réserve transitoire avant abrogation"},
        HTMLid:"11a8a6a2a3a2",
        HTMLclass:"leave"
    },
node11a8a6a2a3a3 = {
        parent: node11a8a6a2a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets produits par la réserve d'interprétation"},
        HTMLid:"11a8a6a2a3a3",
        HTMLclass:"leave"
    },
node11a8a6a2a4 = {
        parent: node11a8a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Effets produits par la disposition abrogée"},
        HTMLid:"11a8a6a2a4",
    },
node11a8a6a2a4a1 = {
        parent: node11a8a6a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Maintien des effets"},
        HTMLid:"11a8a6a2a4a1",
        HTMLclass:"leave"
    },
node11a8a6a2a4a2 = {
        parent: node11a8a6a2a4,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Remise en cause des effets"},
        HTMLid:"11a8a6a2a4a2",
        HTMLclass:"leave"
    },
node11a8a6a2a4a2a1 = {
        parent: node11a8a6a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pour les instances en cours"},
        HTMLid:"11a8a6a2a4a2a1",
        HTMLclass:"leave"
    },
node11a8a6a2a4a2a2 = {
        parent: node11a8a6a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Pour les décisions définitivement jugées"},
        HTMLid:"11a8a6a2a4a2a2",
        HTMLclass:"leave"
    },
node11a8a6a2a4a2a3 = {
        parent: node11a8a6a2a4a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres situations"},
        HTMLid:"11a8a6a2a4a2a3",
        HTMLclass:"leave"
    },
node11a8a6a2a5 = {
        parent: node11a8a6a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autres"},
        HTMLid:"11a8a6a2a5",
        HTMLclass:"leave"
    },
node11a8a7 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité des décisions du Conseil constitutionnel"},
        HTMLid:"11a8a7",
    },
node11a8a7a1 = {
        parent: node11a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hypothèses où la chose jugée est opposée"},
        HTMLid:"11a8a7a1",
    },
node11a8a7a1a1 = {
        parent: node11a8a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux des normes"},
        HTMLid:"11a8a7a1a1",
    },
node11a8a7a1a1a1 = {
        parent: node11a8a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux de la répartition des compétences entre la loi et le règlement"},
        HTMLid:"11a8a7a1a1a1",
        HTMLclass:"leave"
    },
node11a8a7a1a1a2 = {
        parent: node11a8a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux de la recevabilité des projets de loi (article 39 alinéa 4 nouveau)"},
        HTMLid:"11a8a7a1a1a2",
        HTMLclass:"leave"
    },
node11a8a7a1a1a3 = {
        parent: node11a8a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux de l'article 61"},
        HTMLid:"11a8a7a1a1a3",
        HTMLclass:"leave"
    },
node11a8a7a1a1a4 = {
        parent: node11a8a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux de l'article 61-1 (contrôle a posteriori)"},
        HTMLid:"11a8a7a1a1a4",
        HTMLclass:"leave"
    },
node11a8a7a1a1a5 = {
        parent: node11a8a7a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux des lois de pays"},
        HTMLid:"11a8a7a1a1a5",
    },
node11a8a7a1a2 = {
        parent: node11a8a7a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux électoral"},
        HTMLid:"11a8a7a1a2",
        HTMLclass:"leave"
    },
node11a8a7a2 = {
        parent: node11a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Hypothèses où la chose jugée n'est pas opposée"},
        HTMLid:"11a8a7a2",
    },
node11a8a7a2a1 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Texte n'ayant pas été soumis au Conseil constitutionnel"},
        HTMLid:"11a8a7a2a1",
        HTMLclass:"leave"
    },
node11a8a7a2a2 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chose jugée à propos d'un autre texte"},
        HTMLid:"11a8a7a2a2",
        HTMLclass:"leave"
    },
node11a8a7a2a3 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Chose jugée à propos d'un texte ultérieurement abrogé"},
        HTMLid:"11a8a7a2a3",
        HTMLclass:"leave"
    },
node11a8a7a2a4 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Mise en conformité de la loi avec les exigences constitutionnelles"},
        HTMLid:"11a8a7a2a4",
        HTMLclass:"leave"
    },
node11a8a7a2a5 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Nouvelle saisine en application de l'article 54 de la Constitution"},
        HTMLid:"11a8a7a2a5",
        HTMLclass:"leave"
    },
node11a8a7a2a6 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Intervention d'une révision de la Constitution"},
        HTMLid:"11a8a7a2a6",
        HTMLclass:"leave"
    },
node11a8a7a2a7 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Disposition n'ayant pas déjà été déclarée conforme à la Constitution dans les motifs et le dispositif d'une décision du Conseil constitutionnel"},
        HTMLid:"11a8a7a2a7",
        HTMLclass:"leave"
    },
node11a8a7a2a8 = {
        parent: node11a8a7a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Changement des circonstances"},
        HTMLid:"11a8a7a2a8",
        HTMLclass:"leave"
    },
node11a8a7a3 = {
        parent: node11a8a7,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Portée des précédentes décisions"},
        HTMLid:"11a8a7a3",
    },
node11a8a7a3a1 = {
        parent: node11a8a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la chose interprétée"},
        HTMLid:"11a8a7a3a1",
        HTMLclass:"leave"
    },
node11a8a7a3a2 = {
        parent: node11a8a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Autorité de la chose jugée"},
        HTMLid:"11a8a7a3a2",
        HTMLclass:"leave"
    },
node11a8a7a3a3 = {
        parent: node11a8a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Motivation par renvoi à une autre décision"},
        HTMLid:"11a8a7a3a3",
        HTMLclass:"leave"
    },
node11a8a7a3a4 = {
        parent: node11a8a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Respect des réserves d'interprétation"},
        HTMLid:"11a8a7a3a4",
        HTMLclass:"leave"
    },
node11a8a7a3a5 = {
        parent: node11a8a7a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Cas d'une disposition devenue inconstitutionnelle"},
        HTMLid:"11a8a7a3a5",
        HTMLclass:"leave"
    },
node11a8a8 = {
        parent: node11a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Contentieux - Voies de recours"},
        HTMLid:"11a8a8",
    },
node11a8a8a1 = {
        parent: node11a8a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande en révision ou rétractation"},
        HTMLid:"11a8a8a1",
        HTMLclass:"leave"
    },
node11a8a8a2 = {
        parent: node11a8a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Demande en rectification d'erreurs matérielles"},
        HTMLid:"11a8a8a2",
        HTMLclass:"leave"
    },
node11a8a8a2a1 = {
        parent: node11a8a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence initiale"},
        HTMLid:"11a8a8a2a1",
    },
node11a8a8a2a2 = {
        parent: node11a8a8a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Jurisprudence nouvelle"},
        HTMLid:"11a8a8a2a2",
        HTMLclass:"leave"
    },
node11a8a8a3 = {
        parent: node11a8a8,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Rectification d'office d'erreurs matérielles par le Conseil constitutionnel"},
        HTMLid:"11a8a8a3",
        HTMLclass:"leave"
    },
tree_config11 = [config,node11,node11a1,node11a1a1,node11a1a2,node11a1a3,node11a1a4,node11a1a5,node11a2,node11a3,node11a3a1,node11a3a1a1,node11a3a1a2,node11a3a1a3,node11a3a1a4,node11a3a1a5,node11a3a1a6,node11a3a1a7,node11a3a1a8,node11a3a1a9,node11a3a1a10,node11a3a1a11,node11a3a1a12,node11a3a2,node11a3a2a1,node11a3a2a1a1,node11a3a2a1a2,node11a3a2a1a3,node11a3a2a1a4,node11a3a2a1a5,node11a3a2a1a6,node11a3a2a2,node11a3a2a3,node11a3a2a4,node11a4,node11a4a1,node11a4a1a1,node11a4a1a2,node11a4a1a3,node11a4a1a4,node11a4a1a5,node11a4a2,node11a4a2a1,node11a4a2a2,node11a4a2a3,node11a4a2a3a1,node11a4a2a3a2,node11a4a2a3a3,node11a4a2a3a4,node11a4a2a4,node11a4a3,node11a4a3a1,node11a4a3a2,node11a4a3a3,node11a4a3a3a1,node11a4a3a3a2,node11a4a3a4,node11a4a4,node11a4a4a1,node11a4a4a2,node11a5,node11a5a1,node11a5a1a1,node11a5a1a2,node11a5a1a2a1,node11a5a1a2a2,node11a5a1a3,node11a5a1a4,node11a5a1a5,node11a5a1a6,node11a5a2,node11a5a2a1,node11a5a2a2,node11a5a2a3,node11a5a3,node11a5a3a1,node11a5a3a2,node11a6,node11a6a1,node11a6a1a1,node11a6a1a2,node11a6a1a3,node11a6a1a4,node11a6a2,node11a6a2a1,node11a6a2a1a1,node11a6a2a1a2,node11a6a2a1a3,node11a6a2a2,node11a6a2a3,node11a6a2a4,node11a6a2a5,node11a6a3,node11a6a3a1,node11a6a3a2,node11a6a3a3,node11a6a3a4,node11a6a3a5,node11a6a3a5a1,node11a6a3a5a2,node11a6a3a6,node11a6a3a7,node11a6a3a8,node11a6a4,node11a6a5,node11a6a5a1,node11a7,node11a7a1,node11a7a1a1,node11a7a1a2,node11a7a2,node11a7a2a1,node11a7a2a2,node11a7a2a2a1,node11a7a2a2a2,node11a7a2a2a3,node11a7a2a3,node11a7a2a4,node11a7a2a5,node11a7a3,node11a7a3a1,node11a7a3a2,node11a7a3a2a1,node11a7a3a2a2,node11a7a3a2a3,node11a7a3a3,node11a7a3a3a1,node11a7a3a3a1a1,node11a7a3a3a1a2,node11a7a3a3a2,node11a8,node11a8a1,node11a8a1a1,node11a8a1a2,node11a8a2,node11a8a3,node11a8a4,node11a8a4a1,node11a8a4a2,node11a8a4a2a1,node11a8a4a2a2,node11a8a4a3,node11a8a4a3a1,node11a8a4a3a2,node11a8a4a3a2a1,node11a8a4a3a2a2,node11a8a4a3a2a3,node11a8a4a3a3,node11a8a4a3a3a1,node11a8a4a3a3a2,node11a8a4a3a3a3,node11a8a4a4,node11a8a5,node11a8a6,node11a8a6a1,node11a8a6a1a1,node11a8a6a1a2,node11a8a6a1a3,node11a8a6a1a4,node11a8a6a1a5,node11a8a6a2,node11a8a6a2a1,node11a8a6a2a2,node11a8a6a2a2a1,node11a8a6a2a2a2,node11a8a6a2a3,node11a8a6a2a3a1,node11a8a6a2a3a2,node11a8a6a2a3a3,node11a8a6a2a4,node11a8a6a2a4a1,node11a8a6a2a4a2,node11a8a6a2a4a2a1,node11a8a6a2a4a2a2,node11a8a6a2a4a2a3,node11a8a6a2a5,node11a8a7,node11a8a7a1,node11a8a7a1a1,node11a8a7a1a1a1,node11a8a7a1a1a2,node11a8a7a1a1a3,node11a8a7a1a1a4,node11a8a7a1a1a5,node11a8a7a1a2,node11a8a7a2,node11a8a7a2a1,node11a8a7a2a2,node11a8a7a2a3,node11a8a7a2a4,node11a8a7a2a5,node11a8a7a2a6,node11a8a7a2a7,node11a8a7a2a8,node11a8a7a3,node11a8a7a3a1,node11a8a7a3a2,node11a8a7a3a3,node11a8a7a3a4,node11a8a7a3a5,node11a8a8,node11a8a8a1,node11a8a8a2,node11a8a8a2a1,node11a8a8a2a2,node11a8a8a3];

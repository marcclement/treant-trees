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
node13 = {
        childrenDropLevel: 1,
        text:{name: "CONSEIL ÉCONOMIQUE, SOCIAL ET ENVIRONNEMENTAL"},
        HTMLid:"13",
    },
node13a1 = {
        parent: node13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ORGANISATION"},
        HTMLid:"13a1",
    },
node13a1a1 = {
        parent: node13a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Généralités"},
        HTMLid:"13a1a1",
        HTMLclass:"leave"
    },
node13a1a2 = {
        parent: node13a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Composition"},
        HTMLid:"13a1a2",
        HTMLclass:"leave"
    },
node13a2 = {
        parent: node13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "STATUT DES MEMBRES"},
        HTMLid:"13a2",
    },
node13a2a1 = {
        parent: node13a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Incompatibilités"},
        HTMLid:"13a2a1",
        HTMLclass:"leave"
    },
node13a3 = {
        parent: node13,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "ATTRIBUTIONS"},
        HTMLid:"13a3",
    },
node13a3a1 = {
        parent: node13a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation obligatoire"},
        HTMLid:"13a3a1",
        HTMLclass:"leave"
    },
node13a3a1a1 = {
        parent: node13a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation sur les projets de loi de programme ou de plans à caractère économique et social"},
        HTMLid:"13a3a1a1",
    },
node13a3a1a1a1 = {
        parent: node13a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Notion de loi de programme à caractère économique et social"},
        HTMLid:"13a3a1a1a1",
        HTMLclass:"leave"
    },
node13a3a1a1a2 = {
        parent: node13a3a1a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Obligation de consultation"},
        HTMLid:"13a3a1a1a2",
        HTMLclass:"leave"
    },
node13a3a1a2 = {
        parent: node13a3a1,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation sur tout plan ou tout projet de loi de programmation à caractère économique, sociale ou environnemental"},
        HTMLid:"13a3a1a2",
    },
node13a3a2 = {
        parent: node13a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation facultative"},
        HTMLid:"13a3a2",
    },
node13a3a2a1 = {
        parent: node13a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation par le Gouvernement"},
        HTMLid:"13a3a2a1",
    },
node13a3a2a2 = {
        parent: node13a3a2,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation par le Parlement"},
        HTMLid:"13a3a2a2",
    },
node13a3a3 = {
        parent: node13a3,
        childrenDropLevel: 1,
        collapsed: true,
        text:{name: "Consultation par voie de pétition"},
        HTMLid:"13a3a3",
        HTMLclass:"leave"
    },
tree_config13 = [config,node13,node13a1,node13a1a1,node13a1a2,node13a2,node13a2a1,node13a3,node13a3a1,node13a3a1a1,node13a3a1a1a1,node13a3a1a1a2,node13a3a1a2,node13a3a2,node13a3a2a1,node13a3a2a2,node13a3a3];

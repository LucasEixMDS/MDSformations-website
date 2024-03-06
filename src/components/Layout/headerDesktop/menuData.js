const data = {
  "Nos formations": {
    imageUrl: "../../../../public/question_square.png",
    items: [
      {
        label: "Ongles",
        details: ["Prothésie ongulaire", "Prothésie à distance"],
      },
      {
        label: "Corps",
        details: [
          "Réflexologie",
          "Réflexologie à distance",
          "Masseur(se) professionnel(le)",
          "Massages du monde",
        ],
      },
      {
        label: "Toutes nos formations",
        details: [
          "Les formations diplômantes",
          "Les formations en ligne",
          "Les VAE et VAP",
          "Toutes les formations",
        ],
      },
    ],
  },
  Orientation: {
    imageUrl: "../../../../public/question_square.png",
    items: [
      {
        label: "Inscription et devis",
        details: [
          "Quelle formation est faite pour vous ?",
          "Besoin d'être accompagné",
          "Réorientation professionnelle",
        ],
      },
      {
        label: "Financements",
        details: ["Comment utiliser votre CPF", "Les différents financements"],
      },
    ],
  },
  Accompagnement: {
    imageUrl: "../../../../public/question_square.png",
    items: [
      {
        label: "Interview",
        details: ["Bien-être", "Beauté", "Esthétique", "Carrière"],
      },
      {
        label: "Tous nos articles",
        details: ["Comment utiliser votre CPF", "Les différents financements"],
      },
    ],
  },
  "Chez MDS": {
    imageUrl: "../../../../public/question_square.png",
    items: [
      {
        label: "Accompagnement",
        details: [
          "Accompagnement global",
          "Suivis post-formation",
          "Notre équipe pédagogique",
        ],
      },
      { label: "Opportunités", details: ["Devenir modèle", "Rejoindre MDS"] },
      {
        label: "Notre institution",
        details: [
          "Nos diplômes reconnus",
          "Notre direction pédagogique",
          "Les valeurs de MDS",
        ],
      },
      {
        label: "Accessibilité",
        details: [
          "Hébergement",
          "Formation à distance",
          "Accessibilité & handicap",
        ],
      },
    ],
  },
};

export const getMenuData = (title) => {
  return data[title] || null;
};

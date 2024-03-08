export const data = {
  "Nos formations": {
    imageUrl: "https://mdsformations-website-u5520.vm.elestio.app/question_square.png",
    items: [
      {
        label: "Ongles",
        details: ["Prothésie ongulaire", "Prothésie ongulaire à distance"],
      },
      {
        label: "Corps",
        details: ["Réflexologie", "Réflexologie à distance", "Masseur professionnel", "Massage du monde"],
      },
      {
        label: "Toutes les formations",
        details: ["Les formations en ligne", "Les VAE et VAP", "Toutes nos formations"],
      },
    ],
  },
  "Orientation": {
    imageUrl: "https://mdsformations-website-u5520.vm.elestio.app/question_square.png",
    items: [
      {
        label: "Inscription & Devis",
        details: ["Inscription & Devis", "Comment s'inscrire en formation ?", "La VAE et la VAP"],
      },
      {
        label: "Financements",
        details: ["Comment utiliser votre CPF ?", "Les différents financements", "Paiement en plusieurs mensualités"],
      },
    ],
  },
  "Accompagnement": {
    imageUrl: "https://mdsformations-website-u5520.vm.elestio.app/question_square.png",
    items: [
      {
        label: "Suivis & accompagnement",
        details: ["Accompagnement global", "Suivi post-formation"],
      },
      {
        label: "Information sur l'école",
        details: ["Charte qualité",  "La direction pédagogique", "Les valeurs MDS"],
      },
    ],
  },
  "Chez MDS": {
    imageUrl: "https://mdsformations-website-u5520.vm.elestio.app/question_square.png",
    items: [
      {
        label: "MDS FORMATIONS",
        details: ["Accessibilités & handicap", "Rejoindre MDS","Notre équipe pédagogique"],
      },
      {
        label: "Info Pratique",
        details: ["Hébergement", "Formation à distance",  "Devenir modèle"],
      },
    ],
  },
};

export const getMenuData = (title) => {
  return data[title] || null;
};

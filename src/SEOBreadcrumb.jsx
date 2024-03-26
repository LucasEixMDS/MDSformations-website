import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SeoBreadcrumb = ({ pageType, pageDetails }) => {
  const siteUrl = "https://mdsformations-website-u5520.vm.elestio.app";
  let itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Accueil",
      "item": siteUrl,
    }
  ];

  switch (pageType) {
    case 'formation':
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Formations",
        "item": `${siteUrl}/formations`,
      });
      if (pageDetails) {
        itemListElement.push({
          "@type": "ListItem",
          "position": 3,
          "name": pageDetails.name,
          "item": `${siteUrl}/formations/${pageDetails.formationLink}`,
        });
      }
      break;
    case 'article':
      itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": "Articles",
        "item": `${siteUrl}/articles`,
      });
      if (pageDetails) {
        itemListElement.push({
          "@type": "ListItem",
          "position": 3,
          "name": pageDetails.name,
          "item": `${siteUrl}/articles/${pageDetails.articleLink}`,
        });
      }
      break;
    // Ajoutez d'autres cas ici selon vos besoins
    default:
      break;
  }

  const jsonLd = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

SeoBreadcrumb.propTypes = {
  pageType: PropTypes.string.isRequired,
  pageDetails: PropTypes.shape({
    name: PropTypes.string,
    formationLink: PropTypes.string,
    articleLink: PropTypes.string,
  }),
};

export default SeoBreadcrumb;
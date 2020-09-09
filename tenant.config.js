export default function tenantConfig() {
  switch (process.env.TENANT) {
    case 'planet':
      return {
        // name of tenant
        tenantName: 'planet',
        // url of tenant home page
        tenantURL: 'www.trilliontreecampaign.org',
        //logo url
        tenantLogoURL: 'https://www.plant-for-the-planet.org',
        // font family and it's property particular to tenant
        font: {
          primaryFontFamily: '"Raleway",Helvetica,Arial,sans-serif',
          primaryFontURL:
            'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap&subset=latin-ext',
          secondaryFontFamily: '"Open Sans", sans-serif',
          secondaryFontURL:
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap&subset=latin-ext',
        },
      };
    case 'salesforce':
      return {
        // name of tenant
        tenantName: 'salesforce',
        // url of tenant home page
        tenantURL: 'trees.salesforce.com',
        //logo url
        tenantLogoURL: 'https://www.salesforce.com/sustainability',
        // font family and it's property particular to tenant
        font: {
          primaryFontFamily: '"SalesforceSans",Helvetica,Arial,sans-serif',
          primaryFontURL:
            'https://cdn.pp.eco/media/fonts/salesforce/salesforce-sans.css?v1.0',
          secondaryFontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
          secondaryFontURL:
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap&subset=latin-ext',
        },
      };
    default:
      return {
        // name of tenant
        tenantName: 'planet',
        // url of tenant home page
        tenantURL: 'www.plant-for-the-planet.org',
        // font family and it's property particular to tenant
        font: {
          primaryFontFamily: '"Raleway",Helvetica,Arial,sans-serif',
          primaryFontURL:
            'https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap&subset=latin-ext',
          secondaryFontFamily: '"Open Sans",Helvetica,Arial,sans-serif',
          secondaryFontURL:
            'https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap&subset=latin-ext',
        },
      };
  }
}

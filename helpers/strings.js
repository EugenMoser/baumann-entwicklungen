const thisYear = new Date().getFullYear();
const difYear = thisYear - 1984;

const strings = {
  articleVariant: 'In welcher Variante benötigen Sie das Produkt?',
  articleVaraintLabel: 'Produkt-Variante',
  companyWelcome: 'Willkommen auf unserer Webseite',
  companyDescription: `Wir entwickeln und produzieren im Allgäu seit ${difYear} Jahren Spritzgussteile für die Caravan Industrie. Für diesen Markt ist ein großes Sortiment an Möbelteilen, Halterungen, Lüftungsteilen und Dichtungen entstanden. Mit dem 1984 gegründeten Unternehmen Wilfried Baumann Spritzgussteile, wurde das Fundament für das in zweiter Generation inhabergeführte Familienunternehmen Tilo Baumann Spritzgussteile e.K. gelegt.`,
  companyOurAreas: 'Unsere Bereiche',

  contaktButtonlabel: 'Kontakt',

  contactModalHeadline: 'Kontaktdaten',

  //Contact
  company: 'Tilo Baumann Spritzgussteile e.K.',
  street: 'Brugg 39',
  postalCode: '88167',
  city: 'Gestratz',
  country: 'Deutschland',

  phoneNumber: '+4983837754',

  displayPhoneNumber: '+49 8383 7754',
  displayFaxNumber: '+49 8383 7891',
  mailAddress: 'info@baumann-entwicklungen.de',
  subject: 'Unverbindliche Anfrage',

  //Imprint
  imprint: 'Impressum',
  imprintAdress: 'Postadresse',
  imprintOwner: 'Inhaber',
  imprintOwnerName: 'Tilo Baumann',
  imprintCommunication: 'Kommunikation',
  imprintRegister: 'Registereintrag',
  imprintRegisterCourt: 'Amtsgericht Kempten',
  imprintRegisterNumber: 'HRA 9734',
  imrprintTaxLabel: 'Steuernummer',
  imprintUST: 'USt-IdNr.: DE 247 636 303',
  imprintSteuer: 'Steuer-Nr.: 134/203/10387',

  //Product
  colorLabel: 'Farbe',
  chooseColor: 'In welcher Farbe benötigen Sie das Produkt?',
  request: 'unverbindlich anfragen',

  errorMsgSiteLoading:
    'Seite konnte nicht geladen werden. Bitte versuchen Sie es später nochmal.',

  backButton: 'Zurück',

  articleNumberLabel: 'Artikelnummer:',
  specialsLabel: 'Besonderheiten:',
  vpeLabel: 'Mögliche Verpackungseinheiten (VPE):',

  chooseProductAndColor: ' Bitte Produkt-Variante und Farbe auswählen.',
};

//email body
function getEmailBody(articleName, articleNumber, colorName) {
  return `
Sehr geehrte Damen und Herren,

ich habe folgendes Produkt auf Ihrer Webseite gefunden:

Artikelbezeichnung: ${articleName}
Artikelnummer: ${articleNumber}
Farbe: ${colorName}

Bitte bieten Sie mir den Artikel mit
VPE ___ bei einem Jahresbedarf von circa ___ an. `;
}

export { getEmailBody, strings };

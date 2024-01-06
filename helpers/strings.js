const thisYear = new Date().getFullYear();
const difYear = thisYear - 1984;

const strings = {
  articleVariant: "Welche Variante benötigen Sie?",
  articleVaraintLabel: "Produkt-Variante.",
  companyWelcome: "Willkommen auf unserer Webseite",
  companyDescription: `Wir entwickeln und produzieren im Allgäu seit ${difYear} Jahren Spritzgussteile für die Caravan Industrie. Für diesen Markt ist ein großes Sortiment an Möbelteilen, Halterungen, Lüftungsteilen und Dichtungen entstanden. Mit dem 1984 gegründeten Unternehmen Wilfried Baumann Spritzgussteile, wurde das Fundament für das in zweiter Generation inhabergeführte Familienunternehmen Tilo Baumann Spritzgussteile e.K. gelegt.`,
  companyOurAreas: "Unsere Bereiche",

  phoneNumber: "+4983837754",

  displayPhoneNumber: "+49 8383 7754",
  displayFaxNumber: "+49 8383 7891",
  mailAddress: "info@baumann-entwicklungen.de",
  subject: "Unverbindliche Anfrage",

  colorLabel: "Farbe.",
  chooseColor: "In welcher Farbe benötigen Sie das Produkt?",
  request: "unvberbindlich anfragen",
  sections: [
    { label: "moebel", name: "Möbelbereich" },
    { label: "halterung", name: "Halterungsbereich" },
    { label: "wasser", name: "Wasserbereich" },
    { label: "lueftung", name: "Lüftungsbereich" },
    { label: "elektro", name: "Elektrobereich" },
  ],
};

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

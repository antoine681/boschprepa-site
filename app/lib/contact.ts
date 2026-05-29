export const CONTACT = {
  phone: "+33 6 68 83 26 07",
  phoneHref: "tel:+33668832607",
  whatsappNumber: "33668832607",
  whatsappMessage:
    "Bonjour BoschPrepa, j'aimerais discuter d'un projet de préparation moteur.",
  email: "contact@boschprepa.fr",
  city: "Perpignan",
  region: "Pyrénées-Orientales · Occitanie",
} as const;

export const whatsappHref = (() => {
  const msg = encodeURIComponent(CONTACT.whatsappMessage);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${msg}`;
})();

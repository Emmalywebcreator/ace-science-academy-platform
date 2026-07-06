export const siteConfig = {
  name: "Ace Science Academy",
  tagline: "Learn. Think. Excel.",

  programme: {
    title: "Holiday Science Intensive Programme 2026",
    registrationStart: "July 7, 2026",
    registrationEnd: "July 18, 2026",
    classStart: "July 20, 2026",
    duration: "8 Weeks",
    target: "SS1 • SS2 • SS3",
  },

 pricing: {
  single: {
    title: "Single Subject",
    price: "₦5,000",
    description: "Choose Mathematics, Physics or Chemistry.",
    popular: false,
  },

  bundle: {
    title: "Science Bundle",
    price: "₦12,000",
    description: "All three subjects and save ₦3,000.",
    popular: true,
  },

  earlyBird: {
    title: "Early Bird Offer",
    price: "₦10,000",
    description: "Register before July 12, 2026.",
    popular: false,
  },
},
  contact: {
    phone: "+234 905 523 2108",
    whatsapp: "+234 703 930 1841",
  },

  navigation: [
    { label: "Programme", href: "#programme" },
    { label: "Subjects", href: "#subjects" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
};
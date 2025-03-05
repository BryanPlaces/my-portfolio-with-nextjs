interface Contact {
  url: string;
  icon: string;
  targetValue: string;
}

export const contactData: Contact[] = [
  {
    url:'https://github.com/BryanPlaces',
    icon:"github",
    targetValue: '_blank',
  },
  {
    url:'https://www.linkedin.com/in/bryan-places/',
    icon:"linkedin",
    targetValue: '_blank',
  },
  {
    url:'mailto:eduardo.places@gmail.com',
    icon:"email",
    targetValue: '_self',
  }
];

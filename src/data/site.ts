// Replace null values with confirmed destinations. Never invent shop URLs.
export const site = {
  name: 'The Curious Brain Toolkit™',
  tagline: 'Evidence-based psychology, made curious and accessible.',
  etsyUrl: null as string | null,
  instagramUrl: null as string | null,
  contactEmail: null as string | null,
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Resources', href: '/resources/' },
  { label: 'Free Resources', href: '/free-resources/' },
  { label: 'Our Approach', href: '/our-approach/' },
  { label: 'About Sarah', href: '/about/' },
];

export const policyPages = [
  { slug: 'privacy-policy', title: 'Privacy Policy' },
  { slug: 'cookie-policy', title: 'Cookie Policy' },
  { slug: 'terms-of-use', title: 'Terms of Use' },
  { slug: 'resource-licensing', title: 'Resource Licensing' },
];

export const framework = [
  { name: 'Notice', description: 'Pay attention to what is happening without rushing to change it.' },
  { name: 'Understand', description: 'Develop shared understanding of thoughts, feelings, body clues, behaviour and needs.' },
  { name: 'Explore', description: 'Consider the child, the task, the environment, relationships and available support.' },
  { name: 'Practise', description: 'Try manageable ideas, notice what happens and adjust when needed.' },
];

export const categories = [
  {
    id: 'emotional-literacy',
    path: '/emotional-literacy-resources-ks2/',
    title: 'Emotional literacy resources for KS2 and ELSA',
    label: 'Build emotional understanding',
    description: 'Explore thoughts, feelings, body clues and behaviour through four connected introductory toolkits.',
  },
  {
    id: 'worry-anxiety',
    path: '/worry-anxiety-resources-children/',
    title: 'Worry and anxiety resources for children',
    label: 'Explore worry and anxiety',
    description: 'Make sense of the brain’s Safety Alarm and explore what support might help.',
  },
  {
    id: 'problem-solving',
    path: '/problem-solving-skills-children/',
    title: 'Everyday problem-solving skills for children',
    label: 'Build everyday problem-solving skills',
    description: 'Explore options, consider what might be good or tricky and decide what to try.',
  },
] as const;

export type CategoryId = (typeof categories)[number]['id'];

export interface Resource {
  id: string;
  title: string;
  category: CategoryId;
  description: string;
  free: boolean;
  etsyUrl: string | null;
  tesUrl: string | null;
  downloadUrl: string | null;
}

// Draft catalogue based on the brief. Confirm descriptions, licences and URLs
// before launch. Real covers/downloads will be added later as production assets.
export const resources: Resource[] = [
  {
    id: 'foundation-bundle', title: 'The Foundation Bundle', category: 'emotional-literacy',
    description: 'Four connected toolkits for exploring thoughts, feelings, body clues and behaviour.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'thoughts', title: 'Understanding Thoughts', category: 'emotional-literacy',
    description: 'Explore thoughts and build shared understanding.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'feelings', title: 'Understanding Feelings', category: 'emotional-literacy',
    description: 'Build a shared language for noticing and talking about feelings.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'body-clues', title: 'Understanding Body Clues', category: 'emotional-literacy',
    description: 'Explore physical sensations and what they might communicate.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'behaviour', title: 'Understanding Behaviour', category: 'emotional-literacy',
    description: 'Explore behaviour with curiosity and consider what it might communicate.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'safety-alarm', title: 'Understanding My Safety Alarm Toolkit', category: 'worry-anxiety',
    description: 'Explore what happens when the Safety Alarm switches on and what support might help.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'problem-solving', title: 'The Problem Solving Toolkit', category: 'problem-solving',
    description: 'Identify an everyday problem, explore possible options and decide what to try.',
    free: false, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
  {
    id: 'safety-alarm-cards', title: 'Safety Alarm Support Cards', category: 'worry-anxiety',
    description: 'Four cards for exploring different kinds of support when a child’s Safety Alarm switches on.',
    free: true, etsyUrl: null, tesUrl: null, downloadUrl: null,
  },
];

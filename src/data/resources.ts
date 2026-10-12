export const categories = [
  {
    id: 'emotional-literacy',
    path: '/emotional-literacy-resources-ks2/',
    title: 'Emotional literacy resources for KS2 and ELSA',
    label: 'Build emotional understanding',
    description: 'Build shared understanding with connected Thoughts and Feelings toolkits.',
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
  image?: string;
  imageAlt?: string;
  etsyUrl: string | null;
  tesUrl: string | null;
  downloadUrl: string | null;
}

// Verified against the supplied Etsy shop on 12 October 2026.
// TES destinations remain unset until the school licence terms/links are supplied.
export const resources: Resource[] = [
  {
    "id": "thoughts-feelings-bundle",
    "title": "Understanding Thoughts & Feelings",
    "category": "emotional-literacy",
    "description": "Two connected psychology toolkits to help children explore their thoughts and feelings, with learn pages, activities and adult guidance.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4551163236/printable-child-psychology-toolkit",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/thoughts-feelings-bundle-v2.webp",
    "imageAlt": "Understanding Thoughts & Feelings: reconstructed preview of toolkit pages and activities."
  },
  {
    "id": "thoughts",
    "title": "Understanding Thoughts",
    "category": "emotional-literacy",
    "description": "Help children notice and explore their thoughts through curious conversations and practical activities.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4551552256/understanding-thoughts-printable",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/thoughts-v2.webp",
    "imageAlt": "Understanding Thoughts: reconstructed preview of toolkit pages and activities."
  },
  {
    "id": "feelings",
    "title": "Understanding Feelings",
    "category": "emotional-literacy",
    "description": "Build a shared language for noticing, understanding and talking about feelings.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4551572243/understanding-feelings-printable",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/feelings-v2.webp",
    "imageAlt": "Understanding Feelings: reconstructed preview of toolkit pages and activities."
  },
  {
    "id": "safety-alarm",
    "title": "Understanding My Safety Alarm",
    "category": "worry-anxiety",
    "description": "Explore the brain’s Safety Alarm, what happens when it switches on and what support might help.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4563863872/child-anxiety-toolkit-o-understanding-my",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/safety-alarm-v2.webp",
    "imageAlt": "Understanding My Safety Alarm: reconstructed preview of toolkit pages and activities."
  },
  {
    "id": "safety-alarm-cards",
    "title": "My Safety Alarm Coping Cards",
    "category": "worry-anxiety",
    "description": "Printable cards to support conversations about a child’s Safety Alarm and possible next steps.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4557576323/anxiety-coping-cards-for-kids-safety",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/safety-alarm-cards.webp",
    "imageAlt": "My Safety Alarm Coping Cards: genuine listing artwork with toolkit pages and activities."
  },
  {
    "id": "problem-solving",
    "title": "The Problem Solving Toolkit",
    "category": "problem-solving",
    "description": "Identify an everyday problem, explore possible options and decide what to try.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4583081926/problem-solving-toolkit-for-kids-o",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/problem-solving.webp",
    "imageAlt": "The Problem Solving Toolkit: genuine listing artwork with toolkit pages and activities."
  }
];

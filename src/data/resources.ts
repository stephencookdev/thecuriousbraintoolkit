export const categories = [
  {
    id: 'emotional-literacy',
    path: '/emotional-literacy-resources-ks2/',
    title: 'Thoughts and feelings resources for children',
    label: 'Build emotional understanding',
    description: 'Explore thoughts, feelings and body clues, with activities and guidance for the adults alongside children.',
  },
  {
    id: 'worry-anxiety',
    path: '/worry-anxiety-resources-children/',
    title: 'Worry and anxiety resources for children',
    label: 'Explore worry and anxiety',
    description: 'Explore the brain’s Safety Alarm, make time for worries and try smaller steps when worry makes things harder.',
  },
  {
    id: 'problem-solving',
    path: '/problem-solving-skills-children/',
    title: 'Everyday problem-solving skills for children',
    label: 'Build everyday problem-solving skills',
    description: 'Use a practical prompt to name an everyday problem, consider possible options and choose what to try.',
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
  imageWidth?: number;
  imageHeight?: number;
  contents?: string;
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
    "contents": "2 learn pages · 6 explore activities · 2 adult guides",
    "category": "emotional-literacy",
    "description": "Two connected toolkits to help children explore how thoughts and feelings fit together.",
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
    "id": "body-clues",
    "title": "Understanding Body Clues",
    "category": "emotional-literacy",
    "description": "Help children notice body sensations and explore how those clues can change across feelings and situations.",
    "free": false,
    "etsyUrl": "https://curiousbraintoolkit.etsy.com/listing/4551573721",
    "tesUrl": null,
    "downloadUrl": null
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
    "image": "/images/products/safety-alarm-pages.webp",
    "imageAlt": "Understanding My Safety Alarm: preview of the cover and updated toolkit pages."
  },
  {
    "id": "worry-time",
    "title": "Worry Time",
    "category": "worry-anxiety",
    "description": "A practical resource to help children explore their worries and set them aside until a planned Worry Time.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4596186205/worry-time-for-kids-ages-811-o-anxiety",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/worry-time-pages.webp",
    "imageAlt": "Worry Time: preview of the cover and printable worksheets."
  },
  {
    "id": "worry-and-avoidance",
    "title": "Worry and Avoidance – Have a Go",
    "category": "worry-anxiety",
    "description": "A practical resource to help children take manageable smaller steps when worry makes them want to stay away from something important.",
    "free": false,
    "etsyUrl": "https://www.etsy.com/uk/listing/4599583258/child-anxiety-worksheets-o-worry",
    "tesUrl": null,
    "downloadUrl": null,
    "image": "/images/products/worry-and-avoidance-pages.webp",
    "imageAlt": "Worry and Avoidance – Have a Go: preview of the cover and printable worksheets."
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
    "image": "/images/products/problem-solving-pages.webp",
    "imageWidth": 1000,
    "imageHeight": 550,
    "imageAlt": "The Problem Solving Toolkit cover and sample activities from the Etsy listing."
  }
];

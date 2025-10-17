export type Fable = {
  id: string;
  title: string;
  author: string;
  moral: string;
  story: string;
  readTime: number; // minutes
  image?: string;
};

export const fables: Fable[] = [
  {
    id: "1",
    title: "The Tortoise and the Hare",
    author: "Aesop",
    moral: "Slow and steady wins the race.",
    story:
      "Once upon a time a Hare mocked a Tortoise for his slowness... (full story here).",
    readTime: 3,
  },
  {
    id: "2",
    title: "The Fox and the Grapes",
    author: "Aesop",
    moral: "It is easy to despise what you cannot get.",
    story: "A hungry Fox saw some fine bunches of grapes... (full story).",
    readTime: 2,
  },
  // Add ~20 more for demo pagination
];
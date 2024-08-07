export type PortfolioData = {
  name: string;
  url: string;
  imgUrl: string;

  description: React.ReactNode;
  tags: string[];
};

export const portfolioData: PortfolioData[] = [
  {
    name: "ForenSeq Universal Analysis Software",
    description: (
      <>
        The ForenSeq Universal Analysis Software (UAS) provides a platform for
        analyzing and managing forensic genomic data, simplifying complex
        bioinformatics.
      </>
    ),
    url: "/portfolio",
		imgUrl: '/images/forenseq/v2/locus-overview.png',
    tags: [
      "Angular",
      "Angular Material",
      "Tailwind CSS",
      ".NET Core",
      "Entity Framework",
      "PostgreSQL",
    ],
  },

  {
    name: "Hades 2 - The Crossroads",
    description: (
      <>
        A WIP fan site for the game <strong>Hades 2</strong>. A compendium for
        builds, a wiki for boons and other important game info, and even some
        tools to assist with in-game mechanics like the Altar of Ashes and the
        Vow of Forsaking.
      </>
    ),
    url: "https://hades2-crossroads.vercel.app/",
		imgUrl: '/images/hades2-crossroads.png',
    tags: ["Next.js", "Tailwind CSS"],
  },
];

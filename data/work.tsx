import React from "react";

type WorkHistoryData = {
  companyName: string;
  companyUrl: string;
  logoFilename: string;
  dates: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
};
export const workHistory: WorkHistoryData[] = [
  {
    companyName: "Verogen",
    companyUrl: "https://www.verogen.com/",
    logoFilename: "verogen-qiagen-logo.png",
    dates: "AUG 2017 - Present",
    content: (
      <div>
        <ul>
          <li>
            Built a comprehensive and industry-leading forensic genomics
            solution, instrumental in the QIAGEN acquisition of Verogen
          </li>
          <li>
            Architected front-end of flagship product from scratch using the
            Angular framework
          </li>
          <li>Technical lead of small team for ongoing feature development</li>
          <li>
            Developed an enterprise-level application API using C#, .NET Core,
            and Entity Framework to interpret large data sets for forensic
            applications
          </li>
          <li>
            Implemented unique workflows to simplify complexities across
            multiple distinct use cases (STR/SNP genotyping, mtDNA analysis,
            phenotyping, forensic genetic genealogy, population statistics)
          </li>
          <li>
            Developed custom data visualizations using D3.js to handle unique
            domain needs
          </li>
          <li>
            Worked closely with the User Experience lead and Product Owners to
            define and execute a unified product vision
          </li>
          <li>
            Created innovative solutions to allow users to assess complex,
            layered data at a glance
          </li>
        </ul>
      </div>
    ),
  },

  {
    companyName: "Illumina",
    companyUrl: "https://www.illumina.com/",
    logoFilename: "illumina-logo.svg",
    dates: "MAR 2011 - AUG 2017",
  },

  {
    companyName: "1parkplace",
    companyUrl: "https://www.1parkplace.com/",
    logoFilename: "1parkplace-logo.jpg",
    dates: "JAN 2008 - MAR 2011",
  },
];

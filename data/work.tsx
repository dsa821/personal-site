import React from "react";

type WorkHistoryData = {
  companyName: string;
  companyUrl: string;
  logoFilename: string;
  jobTitle: string;
  dates: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
};
export const workHistory: WorkHistoryData[] = [
  {
    companyName: "Verogen",
    companyUrl: "https://www.verogen.com/",
    logoFilename: "verogen-qiagen-logo.png",
    jobTitle: "Senior Staff Software Engineer",
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
    jobTitle: "Staff Software Engineer",
    dates: "MAR 2011 - AUG 2017",
    content: (
      <div>
        <ul>
          <li>
            Led front-end development on a new project to analyze DNA for
            forensics databases and casework, which drove the creation of
            Verogen
          </li>
          <li>
            Worked on a cross-disciplinary team with bioinformaticians and assay
            scientists to understand user needs
          </li>
          <li>
            Implemented robust interfaces allowing users to visualize and
            interact with complex genomic data
          </li>
          <li>
            Spearheaded effort to modernize the front-end tech stack of the
            forensics analysis software from jQuery and vanilla HTML/CSS to
            AngularJS and Bootstrap
          </li>
          <li>
            Developed new features on a web application to help users design and
            order assays to target specific sections of the human genome
          </li>
        </ul>
      </div>
    ),
  },

  {
    companyName: "1parkplace",
    companyUrl: "https://www.1parkplace.com/",
    logoFilename: "1parkplace-logo.jpg",
    jobTitle: "Software Engineer II",
    dates: "JAN 2008 - MAR 2011",
    content: (
      <div>
        <ul>
          <li>
            Developed features on a CRM solution to help capture leads and
            manage prospective clients for real estate agents and brokers
          </li>
          <li>
            Maintained data pipelines that processed tens of thousands of
            records of real estate listing data daily
          </li>
        </ul>
      </div>
    ),
  },
];

import { LogoIllumina } from "app/components/icons/LogoIllumina";
import { LogoVerogen } from "app/components/icons/LogoVerogen";
import React from "react";

export type WorkHistoryData = {
  companyName: string;
  companyUrl: string;
  logo?: React.ReactNode;
  jobTitle: string;
  dates: string;
  description?: React.ReactNode;
  content?: React.ReactNode;
};
export const workHistory: WorkHistoryData[] = [
  {
    companyName: "Verogen (acquired by QIAGEN)",
    companyUrl: "https://www.verogen.com/",
    logo: <LogoVerogen />,
    jobTitle: "Senior Staff Software Engineer",
    dates: "AUG 2017 - Present",
    content: (
      <>
        <p>
          Verogen began as a spin-off of a project that I had worked on at
          Illumina. Along with two other ex-Illumina employees, we formed the
          core of Verogen's software team and helped build it into the world's
          first dedicated forensic genomics and human identification company.
          Because of our work, this led to QIAGEN acquiring Verogen in January
          of 2023.
        </p>
        <p>
          I was primarily responsible for rebuilding the front-end of the
          application from the ground up, making the transition from{" "}
          <strong>AngularJS</strong> (v1) to <strong>Angular</strong> (v2+). I
          also became the technical lead for the application on later projects,
          working with a UX designer and another developer to implement new
          features.
        </p>
      </>
    ),
  },

  {
    companyName: "Illumina",
    companyUrl: "https://www.illumina.com/",
    logo: <LogoIllumina />,
    jobTitle: "Staff Software Engineer",
    dates: "MAR 2011 - AUG 2017",
    content: (
      <>
        <p>
          I joined Illumina as a very junior developer, where I was given many
          wonderful opportunities to grow and learn and I took full advantage.
          Over the course of six years, I worked my way up to Staff Software
          Engineer and took on full front-end development responsibilities for
          my team.
        </p>
        <p>
          The state of front-end web development was very turbulent but exciting
          at this time, with the transition from <strong>jQuery</strong> and raw
          HTML/CSS to MVVM frameworks like <strong>Knockout</strong> and
          eventually giving rise to the SPA framework with{" "}
          <strong>AngularJS</strong>. I was able to adapt quickly to this
          ever-changing landscape, showing my ability to pick up new things
          quickly.
        </p>
      </>
    ),
  },

  {
    companyName: "1parkplace",
    companyUrl: "https://www.1parkplace.com/",
    jobTitle: "Software Engineer II",
    dates: "JAN 2008 - MAR 2011",
    content: (
      <>
        <p>
          1parkplace was basically the start of my journey into software
          development. The company made software for real estate agents and
          brokers, and I was able to cut my teeth on a tech stack that taught me
          a lot of the basics (<strong>C#</strong>, <strong>SQL Server</strong>,{" "}
          <strong>jQuery/HTML/CSS</strong>).
        </p>
      </>
    ),
  },
];

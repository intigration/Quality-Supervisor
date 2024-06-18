import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Icon from "~/components/core/icon";
import { projects, socials } from './about-content';
// import { marked } from "marked";

export default component$(() => {



  return (


    
    <div class="m-4 md:mx-16">

      <article class="bg-back p-8 mx-auto max-w-[1200px] my-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2" id="author">About the Author</h2>
          <p>
            Hi, This is <a href="https://engr-farhan.netlify.app" class="link link-primary">Muhammad Farhan</a>
            <br />▶ Demonstrated ability to create innovative AI solutions for diverse applications such as natural language processing, computer vision, and autonomous systems.

            <br />▶ Having hands on product development experience in IoT domain, specifically covered back-end development using Java, Python and related open source technologies.

<br />▶ Experience in Agile software development using SCRUM.

<br />▶ Expertise in Python, JavaScript, TypeScript, ReactJS, VueJS, Selenium, Postman, Playwright, Electron, Angular, Spring, ReadyAPI, Hibernate, MongoDB, MySQL and Cassandra.

<br />▶ Proficient in design and development of software applications especially in software as a service (SaaS) layer and micro-services.

<br />▶ Exposed to designing system level database, restful services.

<br />▶ Having hands on experience in build automation using Jenkins, Gitlab CI, Circle CI
          </p>
          <br />
          <div class="ml-4 float-right">
            <img class="rounded-lg" width="180" height="240" alt="Alicia Sykes" src="https://avatars.githubusercontent.com/u/25178774?v=4" />
            <div class="flex gap-2 my-2 justify-between">
              {
                socials.map((social, index) => (
                  <a key={index} href={social.link}>
                    <Icon icon={social.icon} width={24} height={24} />
                  </a>
                ))
              }
            </div>
          </div>
          <p class="text-lg italic font-thin">
            I worked with various organizations<b>, such as Siemens, Mentor Graphics, Intech and Imperious Tech</b>.
          </p>
          <br />
          <p>
            I have a particular interest in process, self-hosting, Linux, security and automation testing.<br />
            So if this type of stuff interests you, check out these other projects:
          </p>
          <ul class="list-disc pl-8">
            {
              projects.map((project, index) => (
                <li key={index}>
                  <img class="rounded inline mr-1" width="20" height="20" alt={project.title} src={project.icon} />
                  <a href={project.link} class="link link-secondary" target="_blank" rel="noreferrer">
                    {project.title}
                  </a> - {project.description}
                </li>
              ))
            }
          </ul>
          <br />
          <p>
            For apps I've published,
            see <a href="https://engr-farhan.netlify.app.com/" class="link link-primary">engr-farhan.netlify.app</a>,
            or <a href="https://github.com/intigration" class="link link-primary">follow me on GitHub</a>
          </p>

      </article>

  </div>
  );
});

export const head: DocumentHead = {
  title: "About | QA Supervisor",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve QA, and protect your privacy online",
    },
  ],
};

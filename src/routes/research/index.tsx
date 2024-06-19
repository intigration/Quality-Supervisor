import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

// import Icon from "~/components/core/icon";
// import { projects, socials, intro } from './about-content';
// import { marked } from "marked";

export default component$(() => {

  // interface Contributor {
  //   login: string;
  //   avatar_url: string;
  //   avatarUrl: string;
  //   html_url: string;
  //   contributions: number;
  //   name: string;
  // }

  // const parseMarkdown = (text: string | undefined): string => {
  //   return marked.parse(text || '', { async: false }) as string || '';
  // };

  // const contributorsResource = useResource$<Contributor[]>(async () => {
  //   const url = 'https://api.github.com/repos/intigration/ocr/contributors?per_page=100';
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     // throw new Error('Failed to fetch contributors');
  //   }
  //   return await response.json();
  // });

  // const sponsorsResource = useResource$<Contributor[]>(async () => {
  //   const url = 'https://github-sponsors.as93.workers.dev/intigration';
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error('Failed to fetch sponsors');
  //   }
  //   return await response.json();
  // });


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">CoPilot Use-case Identification Framework</h2>
        <p>please click on the slide to start interacting with presentation content</p>
    <iframe src="https://intigration.github.io/timeline/usecases.html" scrolling="no" width="100%" height="800px"></iframe>  
      </article>
      <div class="divider"></div>

      {/* <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Contributing</h2>
        {contributing.map((paragraph, index) => (
          <p class="mb-2" key={index} dangerouslySetInnerHTML={parseMarkdown(paragraph)}></p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">Acknowledgments</h2>


        {/* <h3 class="text-2xl mb-2">Sponsors</h3> */}

        {/* <p>
        </p>

        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
              value={sponsorsResource}
              onPending={() => <p>Loading...</p>}
              onResolved={(contributors: Contributor[]) => (
                contributors.map((contributor: Contributor) => (
                  <a
                    class="w-16 tooltip tooltip-bottom"
                    href={contributor.html_url || `https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contributor.login}
                    data-tip={`Thank you @${contributor.login}`}
                  >
                    <img
                      class="avatar rounded"
                      width="64" height="64"
                      src={contributor.avatar_url || contributor.avatarUrl}
                      alt={contributor.login}
                    />
                    <p
                      class="text-ellipsis overflow-hidden w-max-16 mx-auto line-clamp-2"
                    >{contributor.name || contributor.login}</p>
                  </a>
                ))
              )}
            />
          </div>

        <div class="divider"></div>

        <h3 class="text-2xl mb-2">Contributors</h3>
        <p>
          <br />
          Hi 🌟
        </p>
        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
            value={contributorsResource}
            onPending={() => <p>Loading...</p>}
            onResolved={(contributors: Contributor[]) => (
              contributors.map((contributor: Contributor) => (
                <a
                  class="w-16 tooltip tooltip-bottom"
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={contributor.login}
                  data-tip={`@${contributor.login} has contributed ${contributor.contributions} times\n\nClick to view their profile`}
                >
                  <img
                    class="avatar rounded"
                    width="64" height="64"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <p
                    class="text-ellipsis overflow-hidden w-max-16 mx-auto"
                  >{contributor.login}</p>
                </a>
              ))
            )}
          />
        </div>

      </article> */}
      <div class="divider"></div> 

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2"> Customer Project: Open AI ChatAPI implementation in React</h2>
        <p>You can pass the openai token to start interacting with Bot - The Interface of this app is an experiment to simplify the prompt chaining user-flow, and add a support to reinforced learning in iterative way, by providing training tags/label options </p>
    <iframe src="https://engr-farhan.github.io/NexaGPT/" scrolling="no" width="100%" height="800px"></iframe>  
      </article>

      <div class="divider"></div> 

<article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
  <h2 class="text-3xl mb-2"> Test Generator POC with pointing connection to LLM, Open AI in svelte framework</h2>
  <p> This program helps to contribute as a Specialized test reviewer, generator, auditor, explainer generates test automation code. </p>
<iframe src="https://agenerator.netlify.app/" scrolling="no" width="100%" height="800px"></iframe>  
</article>
      
      {/* <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        {/* <h2 class="text-3xl mb-2">License</h2>
        <p>
          This project is split-licensed, with the checklist content (located
          in <a class="link" href="https://github.com/intigration/qa-supervisor/blob/HEAD/personal-security-checklist.yml">
            <code>qa-checklist.yml</code>
          </a>) being licensed
          under <b><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></b>.
          And everything else (including all the code), licensed
          under <b><a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></b>.
        </p>
        <pre class="bg-front whitespace-break-spaces rounded text-xs my-2 mx-auto p-2">
          {license}
        </pre>
        <details class="collapse">
          <summary class="collapse-title">
            {/* <h3 class="mt-2">What does this means for you?</h3> 
          </summary>
          <div class="collapse-content">
            <p class="mb-2">
              
            </p>
            <p class="mb-2">
          
            </p>
          </div>
        {/* </details> 

      </article> */}

    </div>
  );
});

export const head: DocumentHead = {
  title: "Research | Quality Supervisor Defense",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};

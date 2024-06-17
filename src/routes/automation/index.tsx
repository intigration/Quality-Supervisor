// src/routes/articles/index.tsx
import { component$, useContext } from '@builder.io/qwik';
import articles from '~/data/articles';
// import SectionLinkGrid from "~/components/psc/section-link-grid";
import styles from './article.module.css';



export default component$(() => {

  return (
    <main class="p-8">
      <div class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <h1 class="text-5xl font-bold">SW Automation Testing</h1>
    
          {/* <img src="framework.png" width={1100} height={1080} /> */}
          <img src="/sdio.gif" width={800} height={400}></img>

 </div>
   </div>
   {/* <SectionLinkGrid sections={checklists.value} /> */}
   <div  class={[
          'prose bg-back my-4 mx-auto rounded-lg shadow-lg p-8',
          'max-w-max ',
          styles.psc_article
          ]}
          >

      <ul class="flex p-8 justify-between gap-6 mx-auto w-full rounded-lg shadow-md">
        {articles.map(article => (
          <li key={article.slug}
            class={`rounded-box bg-front shadow-md p-4 max-w-96 drop-shadow-md
            transition hover:drop-shadow-xl hover:scale-105 bg-blue-400 hover:bg-white-600`}
            >
            <a href={`/automation/${article.slug}`}>
              <h3 class="text-2xl mb-2">{article.title}</h3>
              <p class="text-lg">{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
      </div>
      </div>
      </main>
  
  );
});

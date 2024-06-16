// src/routes/articles/index.tsx
import { component$ } from '@builder.io/qwik';
import articles from '~/data/articles';


export default component$(() => {

  return (
 
      <div class="bg-back shadow-md rounded-box">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <h1 class="text-5xl font-bold">SW Automation Testing</h1>
    
          {/* <img src="framework.png" width={1100} height={1080} /> */}
          <img src="/sdio.gif" width={800} height={400}></img>

   </div>
   </div>
     
      {/* <h2 class="text-4xl mb-4">Automations</h2> */}
      <ul class="flex justify-between gap-6">
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
  
  );
});

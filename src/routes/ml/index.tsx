// src/routes/articles/index.tsx
import { component$ } from '@builder.io/qwik';
import ml from '~/data/ml';
// import SectionLinkGrid from "~/components/psc/section-link-grid";
import styles from './article.module.css';

import { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {

  return (
<div class="carousel w-full">
      
      <div class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <h1 class="text-5xl font-bold">Machine Learning</h1>
    
          {/* <img src="framework.png" width={1100} height={1080} /> */}
          <img src="https://th.bing.com/th/id/R.6b54267799569bbeb169bf1b05a6ceb2?rik=K7Q7%2fP28IgvZPg&pid=ImgRaw&r=0" width={800} height={400}></img>

 </div>
   </div>
   </div>
   {/* <SectionLinkGrid sections={checklists.value} /> */}
   <div  class={[
          'prose bg-back my-4 mx-auto rounded-lg shadow-lg p-8',
          'max-w-max ',
          styles.psc_article
          ]}
          >

      {/* <ul class="flex p-8 justify-between gap-6 mx-auto w-full rounded-lg shadow-md"> */}
        {ml.map(tool => (
         
         <div key={tool.slug} id="slide1" class="carousel-item relative w-full">
  {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
  <div class="card-body">  
    <h2 class="card-title">{tool.title}</h2>
    <p>{tool.description}</p>  <a href={`/ml/${tool.slug}`}>
    <div class="card-actions justify-end">
  <button class="btn btn-primary">Explore</button>
    </div></a>
  </div>
</div>
        //  <li key={article.slug}
        //     class={`rounded-box bg-front shadow-md p-4 max-w-96 drop-shadow-md
        //     transition hover:drop-shadow-xl hover:scale-105 bg-blue-400 hover:bg-white-600`}
        //     >
        //     <a href={`/automation/${article.slug}`}>
        //       <h3 class="text-2xl mb-2">{article.title}</h3>
        //       <p class="text-lg">{article.description}</p>
        //     </a>
        //   </li>
        ))}
      {/* </ul> */}
      </div>
      </div>
  
  );
});


export const head: DocumentHead = {
  title: "Machine Learning | QA Supervisor",
  meta: [
    {
      name: "description",
      content: "This project aims to give you the idea of concepts behind the machine learning",
    },
  ],
};

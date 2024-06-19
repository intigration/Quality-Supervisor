import { component$ } from "@builder.io/qwik";
// import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

 
  <img src="/download.png" width={800} height={700} />

 

  return (
    
  

    <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
      <h2 class="text-3xl mb-2"> Face and facial recognition with diffrent media</h2>
      <p> API demo & documentation of different face-api js use-cases . </p>
    <iframe src="https://intigration.github.io/face-api.js/face_and_landmark_detection" scrolling="no" width="100%" height="800px"></iframe>  
    </article>
  );
});

// export const head: DocumentHead = {
//   title: "About | Digital Defense",
//   meta: [
//     {
//       name: "description",
//       content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
//     },
//   ],
// };

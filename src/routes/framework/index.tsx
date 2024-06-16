import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {

 

 

  return (
    <img src="/download.png" width={800} height={700} />
  );
});

export const head: DocumentHead = {
  title: "About | Digital Defense",
  meta: [
    {
      name: "description",
      content: "This project aims to give you practical guidance on how to improve your digital security, and protect your privacy online",
    },
  ],
};

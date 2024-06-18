import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/intigration/';
  // const licenseLink = 'https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE';
  const authorLink = 'https://engr-farhan.netlify.app';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      {/* <p>Licensed under <a href={licenseLink} class="link link-primary">MIT</a> - */}
    <p>  © <a href={authorLink} class="link link-primary">Muhammad Farhan</a> 2024 - 
       <a href={ghLink} class="link link-primary">GitHub</a></p>
    </aside>
  </footer>
  );
});

import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (
    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <p>Dashboard</p>
          <h1 class="text-5xl font-bold">Quality Supervisor</h1>
          <p class="subtitle pb-6">An out-of-box continous quality and security compliance framework</p>
          <image src="framework.png" width={1100} height={1080} />

          <a href="https://github.com/lissy93/personal-security-checklist">
            <button class="btn btn-primary">
              <Icon icon="home" width={20} height={20}  />
             </button> 
            <button class="btn btn-secondary">
              <Icon icon="email" width={20} height={20}   />
            </button>
            <button class="btn">
              <Icon icon="linkedin" width={20} height={20}  />
              {/* View on GitHub */}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
});
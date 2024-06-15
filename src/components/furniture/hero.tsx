import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (

    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
          {/* <Framework style="transform: scale(0.9)"  width={1300} height={1080}  /> */}

      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <p>Dashboard</p>
          <h1 class="text-5xl font-bold">Quality Supervisor</h1>
          <p class="subtitle pb-6">An out-of-box continous quality and security compliance framework</p>
          {/* <img src="framework.svg" width={2048} height={1080} /> */}

          <a href="https://github.com/intigration/">
            <button class="btn btn-primary">
              <Icon icon="home" width={20} height={20}  />
             </button> 
             </a>
            <button class="btn btn-secondary">
              <Icon icon="email" width={20} height={20}   />
            </button>
            <a href="https://linkedin.com/in/engr-farhan">
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

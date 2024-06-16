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
          {/* <img src="framework.png" width={1100} height={1080} /> */}
          <img src="/Farhan.png" width={400} height={400}></img>

          <a href="https://github.com/intigration/quality-supervisor">
            <button class="btn btn- btn-bg">
              <Icon icon="home" width={20} height={20}  />
             </button> 
             </a>
          <a href="mailto:engr.farhan@icloud.com">
            <button class="btn btn-secondary">
              <Icon icon="email" width={20} height={20}   />
            </button>
          </a>
            <button class="btn">
              <Icon icon="linkedin" width={20} height={20}  />
              {/* View on GitHub */}
            </button>
        </div>
      </div>
    </div>
  );
});

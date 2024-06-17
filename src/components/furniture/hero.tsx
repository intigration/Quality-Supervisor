import { component$ } from "@builder.io/qwik";

import Icon from "~/components/core/icon";

export default component$(() => {
  return (

    <div class="hero mb-8 mx-auto xl:max-w-7xl max-w-6xl w-full xl:px-10">
          {/* <Framework style="transform: scale(0.9)"  width={1300} height={1080}  /> */}

      <div class="hero-content text-center bg-front shadow-sm lg:rounded-xl w-full">
        <div class="max-w-2xl flex flex-col place-items-center">
          <p>Automation Board</p>
          <div class="stats shadow">
  
  <div class="stat place-items-center">
    <div class="stat-title">Total Checks</div>
    <div class="stat-value">741</div>
    <div class="stat-desc">From June 1st to June 30st</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">Total Scanning Jobs</div>
    <div class="stat-value text-secondary">985</div>
    <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div class="stat place-items-center">
    <div class="stat-title">New Issues Detected</div>
    <div class="stat-value">22</div>
    <div class="stat-desc">↘︎ 27 (14%)</div>
  </div>
  <ul class="timeline timeline-vertical">
  <li>
    <div class="timeline-start"></div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
     Core
    </div>
    <div class="timeline-end timeline-box"></div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start"></div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    Vision</div>
    <div class="timeline-end timeline-box"></div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start"></div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    TrainEnv</div>
    <div class="timeline-end timeline-box"></div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start"></div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    Agent Health</div>
    <div class="timeline-end timeline-box"></div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div class="timeline-start"></div>
    <div class="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="green" class="w-5 h-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
    LLM Connector</div>
    <div class="timeline-end timeline-box"></div>
  </li>
</ul>
</div>
</div>
      <div class="xl:max-w-7xl max-w-6xl w-full xl:px-10">    
        <h1 class="text-5xl font-bold">Quality Supervisor</h1>
          <p class="subtitle pb-6">An out-of-box continous quality and security compliance framework</p>
          {/* <img src="framework.png" width={1100} height={1080} /> */}

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

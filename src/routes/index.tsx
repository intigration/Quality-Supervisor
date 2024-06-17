import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/furniture/hero";
import SectionLinkGrid from "~/components/psc/section-link-grid";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';

import { useChecklist } from '~/store/local-checklist-store';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);

  const localChecklist = useChecklist();

  return (
    <>
      <div class="max-w-2xl flex flex-col place-items-center">
        <p>State of art quality advisory.</p>
        {/* <h1 class="text-5xl font-bold">Quality Supervisor</h1> */}
      </div>
      
      <Hero />
      <Progress />
      <SectionLinkGrid sections={localChecklist.checklist.checklist || checklists.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "Quality Supervisor",
  meta: [
    {
      name: "description",
      content: "State of art quality advisory.",
    },
  ],
};

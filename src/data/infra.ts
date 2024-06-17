
interface Infra {
    title: string;
    description: string;
    slug: string;
    markdown: string;
    warningMessage?: string;
  }
  
  const infra: Infra[] = [
    
    {
      title: 'Proxmox Virtual Environment (Proxmox VE or PVE) is a hyper-converged infrastructure open-source software.',
     description:'Promox is a hosted hypervisor that can run operating systems including Linux and Windows on x64 hardware. It is a Debian-based Linux distribution with a modified Ubuntu LTS kernel and allows deployment and management of virtual machines and containers',
      slug: 'promox',
      markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/infra/proxmox.md',
    },
    {
      title: 'Oracle Solaris ZFS Administration Guide',
      description: 'ZFS dynamically stripes data across all top-level virtual devices',
      slug: 'zfs',
      markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/infra/zfs.md',
    },
    {
      title: 'Playwright,Typescript, Nodejs, express, gitlab, docker, swagger',
      description: 'An automation strategy to test the front-end component by considering  page objects modeling identifiers and DOM events.Here playwright is selected build an automated test bench that will navigate and cover all the website pages, and verify the functionality which could be interacted with by user with any possible interface.The test has recorded all the page opening, interaction states measurements and stats. Please see the Gitlab project repo that has the code, results logs',
      slug: 'privacy-gadgets',
      markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
      warningMessage: 'can be outdated and may contain incorrect information. '
        +'',
    },
    {
      title: 'Shell,C,  Python, Linux / Ubuntu OS Runtime,Docker, Github actions',
      description: 'This automated framework is a collection of automated test-scripts for a debian system, which can be run on LAVA or Non-Lava environment. It will have the coverage for all the linux-packages, networking,  filesystem and I/Os.Each test-suite has a yaml based test definition file for LAVA environment.To run a lava based test, boot your device in lava and submit the specific test-suite definition file. .',
      slug: 'awesome-privacy',
      markdown: 'https://raw.githubusercontent.com/paragonie/awesome-appsec/master/README.md',
      warningMessage: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
    }
  ,{
      title: 'OpenAI chat APIs integration with React App',
      description: '    Chat models take a list of messages as input and return a model-generated message as output. Although the chat format is designed to make multi-turn conversations easy, it’s just as useful for single-turn tasks without any conversation.',
      slug: 'llm-agent',
      markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/ai/chatgpt.md',
      warningMessage: 'GenAI LLM Chat-Client Use-case',
    }
  
  ];
  
  export default infra;
  
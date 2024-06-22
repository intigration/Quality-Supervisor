
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  

  {
    title: 'Llama3 Eval Results',
    description: 'Model Eval result of Llama3 by Meta',
    slug: 'llama',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/ai/llama-eval.md'
    },
  {
    title: 'Kubernates, garafana, promethus, postman  Linux agents,Load testingPerformance testingScaling test',
    description: 'This automates the functional verification using postman and flow to deploy an app mock metrics which will generate a count at /metrics. These metrics will be scraped by Prometheus, With the help of  k8is-Promethus-  Automation creates APIService custom.metrics.k8s.io, which then will be utilized by HPA to scale the deployment of mock metrics app (increase number of replicas).This automation is the base-template and can be extended orchestrate the environment and metric reporting for the following settings.Load testingPerformance testingScaling test',
    slug: 'importance-of-digital-security',
    markdown: 'https://colab.research.google.com/drive/18DjNufvMfDVgbtSz2VhIkpIPQ0OxJTlM?usp=sharing',
  },
  {
    title: 'Form Filling, asserting page objects, screen-shot capturing, user-interactivity cases - Headless Chrome automation with Selenium',
    description: 'A python notebook contains a headless automation strategy for chrome to test a website. Site: https://abcdef1. Scroll the page from top to bottom and assert the logo. 2. Click on Each Header, and open it in a new tab, and take a screenshot. 3. Click on the Apply Now Button and Fill out the Form for any one available meeting time in the book meeting  section.',
    slug: 'importance-of-digital-security',
    markdown: 'https://colab.research.google.com/drive/18DjNufvMfDVgbtSz2VhIkpIPQ0OxJTlM?usp=sharing',
  },
  {
    title: 'Shell, killerkoda, docker, kubernates, remote vs-code',
    description: 'Automate and orchestrate the Kubernetes feature of PersistentVolumes, to create them, claim them, work with them, seeing them in action, and cleaning them up.',
    slug: 'short-list',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
  },
  {
    title: 'Pytest (Flask  backend  automation),gitlab,docker-compose, Traefik',
    description: 'Directory of links to additional tools, resources and information.',
    slug: 'helpful-links',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
    warningMessage: 'may be outdated.',
  },
  {
    title: 'Playwright,Typescript, Nodejs, express, gitlab, docker, swagger',
    description: 'An automation strategy to test the front-end component by considering  page objects modeling identifiers and DOM events.Here playwright is selected build an automated test bench that will navigate and cover all the website pages, and verify the functionality which could be interacted with by user with any possible interface.The test has recorded all the page opening, interaction states measurements and stats. Please see the Gitlab project repo that has the code, results logs',
    slug: 'privacy-gadgets',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/ai/chatgpt.md',
    warningMessage: 'can be outdated and may contain incorrect information. '
      +'',
  },
  {
    title: 'Shell,C,  Python, Linux / Ubuntu OS Runtime,Docker, Github actions',
    description: 'This automated framework is a collection of automated test-scripts for a debian system, which can be run on LAVA or Non-Lava environment. It will have the coverage for all the linux-packages, networking,  filesystem and I/Os.Each test-suite has a yaml based test definition file for LAVA environment.To run a lava based test, boot your device in lava and submit the specific test-suite definition file. .',
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/paragonie/awesome-appsec/master/README.md',
    warningMessage: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
  },
  {
    title: 'Selenium Resources',
    description: 'This automated framework is a collection of Selenium resources and specific test-suite definition file. .',
    slug: 'resources',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/automation/selenium/resources.md',
    warningMessage: 'If you know: what are you doing? then here is list of Selenium Resources',
  },
  {
    title: 'Application Security',
    description: 'A curated list of resources for learning about application security. Contains books, websites, blog posts, and self-assessment quizzes.',
    slug: 'security',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/security/application/resources.md',
    warningMessage: 'There might some content are outdated with latest development in Application Security',
  },  {
    title: 'Gettings all images over a webpage',
    description: 'Selenium uses as all images crawler over a webpage',
    slug: 'crawler',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/automation/selenium/crawler.md',
    warningMessage: 'A crawler for getting all the links in a given webpage.',
  },{
    title: 'Open Source and Closed Source AI Agents',
    description: 'Welcome to our list of AI agents, structured the list into two parts:',
    slug: 'agents',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/ai/chatgpt.md',
    warningMessage: 'Welcome to our list of AI agents.We structured the list into two parts:',
  },{
    title: 'OpenAI chat APIs integration with React App',
    description: '    Chat models take a list of messages as input and return a model-generated message as output. Although the chat format is designed to make multi-turn conversations easy, it’s just as useful for single-turn tasks without any conversation.',
    slug: 'llm-agent',
    markdown: 'https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/ai/chatgpt.md',
    warningMessage: 'GenAI LLM Chat-Client Use-case',
  }

];

export default articles;

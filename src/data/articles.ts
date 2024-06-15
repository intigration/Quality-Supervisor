
interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  
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
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
    warningMessage: 'can be outdated and may contain incorrect information. '
      +'',
  },
  {
    title: 'Shell,C,  Python, Linux / Ubuntu OS Runtime,Docker, Github actions',
    description: 'This automated framework is a collection of automated test-scripts for a debian system, which can be run on LAVA or Non-Lava environment. It will have the coverage for all the linux-packages, networking,  filesystem and I/Os.Each test-suite has a yaml based test definition file for LAVA environment.To run a lava based test, boot your device in lava and submit the specific test-suite definition file. .',
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
    warningMessage: 'This resource has moved! You can now access it at github.com/Lissy93/awesome-privacy',
  },
];

export default articles;

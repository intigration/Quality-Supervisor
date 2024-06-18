
interface Infra {
    title: string;
    description: string;
    slug: string;
    markdown: string;
    warningMessage?: string;
  }
  
  const infra: Infra[] =[{
    title: "Helm",
    description: "Package manager for Kubernetes, enabling the management of Kubernetes applications.",
    slug: "helm",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/helm.md"
  },
  {
    title: "K3s",
    description: "Lightweight Kubernetes distribution designed for resource-constrained environments.",
    slug: "k3s",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/k3s.md"
  },
  {
    title: "K9s",
    description: "Terminal UI to manage and view Kubernetes clusters.",
    slug: "k9s",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/k9s.md"
  },
  {
    title: "Kind",
    description: "Tool for running local Kubernetes clusters using Docker container nodes.",
    slug: "kind",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/kind.md"
  },
  {
    title: "Kubectl",
    description: "Command-line tool for interacting with Kubernetes clusters.",
    slug: "kubectl",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/kubectl.md"
  },
  {
    title: "Kubernetes DNS",
    description: "DNS server that provides DNS records for Kubernetes services.",
    slug: "kubernetes-dns",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/kubernetes-dns.md"
  },
  {
    title: "Kubernetes",
    description: "Open-source container orchestration platform for automating deployment, scaling, and management of containerized applications.",
    slug: "kubernetes",
    markdown: "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/kubernetes/kubernetes.md"
  },    {
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
    }];
  export default infra;
  
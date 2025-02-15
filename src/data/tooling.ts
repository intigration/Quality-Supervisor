interface Tools {
    title: string;
    description: string;
    slug: string;
    markdown: string;
    warningMessage?: string;
}

const tool: Tools[] = 

[
    {
        "title": "1Password",
        "description": "Secure password manager to store and manage your passwords.",
        "slug": "1password",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/1password.md"
    },
    {
        "title": "Ansible",
        "description": "Automation tool for IT tasks such as configuration management, application deployment, and task automation.",
        "slug": "ansible",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/ansible.md"
    },
    {
        "title": "Bitwarden",
        "description": "Open-source password manager to manage and secure passwords and sensitive information.",
        "slug": "bitwarde",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/bitwarden.md"
    },
    {
        "title": "Chocolatey",
        "description": "Package manager for Windows, simplifying the installation and management of software.",
        "slug": "chocolatey",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/chocolatey.md"
    },
    {
        "title": "Datree",
        "description": "Policy enforcement tool for Kubernetes to prevent misconfigurations.",
        "slug": "datree",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/datree.md"
    },
    {
        "title": "Direnv",
        "description": "Extension for managing environment variables based on directory context.",
        "slug": "direnv",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/direnv.md"
    },
    {
        "title": "Git",
        "description": "Version control system for tracking changes in source code during software development.",
        "slug": "git",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/git.md"
    },
    {
        "title": "Homebrew",
        "description": "Package manager for macOS to simplify the installation of software.",
        "slug": "homebrew",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/homebrew.md"
    },
    {
        "title": "iTerm2",
        "description": "Terminal emulator for macOS that offers advanced features and customization.",
        "slug": "iterm2",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/iterm2.md"
    },
    {
        "title": "Nmap",
        "description": "Network scanning tool to discover hosts and services on a computer network.",
        "slug": "nmap",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/nmap.md"
    },
    {
        "title": "OpenSSH",
        "description": "Suite of secure networking utilities based on the SSH protocol.",
        "slug": "openssh",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/openssh.md"
    },
    {
        "title": "OpenSSL",
        "description": "Toolkit for the Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protocols.",
        "slug": "openssl",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/openssl.md"
    },
    {
        "title": "Packer",
        "description": "Tool for creating machine and container images for multiple platforms from a single source configuration.",
        "slug": "packer",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/packer.md"
    },
    {
        "title": "Starship",
        "description": "Customizable, minimal, and fast prompt for any shell.",
        "slug": "starship",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/starship.md"
    },
    {
        "title": "tcpdump",
        "description": "Network packet analyzer that allows the user to display TCP/IP and other packets being transmitted or received over a network.",
        "slug": "tcpdump",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/tcpdump.md"
    },
    {
        "title": "Terraform",
        "description": "Tool for building, changing, and versioning infrastructure safely and efficiently.",
        "slug": "terraform",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/terraform.md"
    },
    {
        "title": "Vagrant",
        "description": "Tool for building and maintaining portable virtual software development environments.",
        "slug": "vagrant",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/vagrant.md"
    },
    {
        "title": "VSCode",
        "description": "Source-code editor made by Microsoft for Windows, Linux, and macOS.",
        "slug": "vscode",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/vscode.md"
    },
    {
        "title": "Wireshark",
        "description": "Network protocol analyzer to capture and interactively browse the traffic running on a computer network.",
        "slug": "wireshark",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/wireshark.md"
    },
    {
        "title": "WSL",
        "description": "Windows Subsystem for Linux allows developers to run a GNU/Linux environment directly on Windows.",
        "slug": "wsl",
        "markdown": "https://raw.githubusercontent.com/intigration/Quality-Supervisor/main/public/tools/wsl.md"
    }
]



export default tool;

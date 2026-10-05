const tools = [

    {
        name: "System Informer",
        category: "all",
        description: "Advanced Windows system monitoring and investigation utility.",
        tags: ["Windows", "System"],
        download: "https://github.com/winsiderss/si-builds/releases/download/3.2.25275.112/systeminformer-build-canary-setup.exe"
    },

    {
        name: "Everything",
        category: "all",
        description: "Fast Windows file and folder search utility.",
        tags: ["Windows", "Search"],
        download: "https://www.voidtools.com/Everything-1.4.1.1029.x64-Setup.exe"
    },

    {
        name: "FTK Imager",
        category: "all",
        description: "Digital forensics imaging and evidence analysis utility.",
        tags: ["Forensics", "Imaging"],
        download: "https://d1kpmuwb7gvu1i.cloudfront.net/AccessData_FTK_Imager_4.7.1.exe"
    },

    {
        name: "DIE Engine",
        category: "all",
        description: "Detect It Easy for identifying executable file types and packers.",
        tags: ["PE", "Analysis"],
        download: "https://github.com/horsicq/DIE-engine/releases/download/3.10/die_win64_portable_3.10_x64.zip"
    },

    {
        name: "HxD Portable",
        category: "all",
        description: "Portable hexadecimal editor.",
        tags: ["Hex", "Editor"],
        download: "https://mh-nexus.de/downloads/HxDPortableSetup.zip"
    },

    {
        name: "PEStudio",
        category: "all",
        description: "Static analysis utility for Windows executable files.",
        tags: ["PE", "Analysis"],
        download: "https://www.winitor.com/tools/pestudio/current/pestudio.zip"
    },

    {
        name: "Strings",
        category: "all",
        description: "Sysinternals utility for extracting strings from files.",
        tags: ["Sysinternals", "Forensics"],
        download: "https://download.sysinternals.com/files/Strings.zip"
    },

    {
        name: "Luyten",
        category: "all",
        description: "Java decompiler and bytecode viewer.",
        tags: ["Java", "Decompiler"],
        download: "https://github.com/deathmarine/Luyten/releases/download/v0.5.4_Rebuilt_with_Latest_depenencies/luyten-0.5.4.jar"
    },

    {
        name: "Recaf",
        category: "all",
        description: "Java bytecode editor and analysis tool.",
        tags: ["Java", "Bytecode"],
        download: "https://github.com/Col-E/Recaf/releases/download/2.21.14/recaf-2.21.14-J8-jar-with-dependencies.jar"
    },

    {
        name: "Process Explorer",
        category: "all",
        description: "Advanced process and system activity viewer.",
        tags: ["Sysinternals", "Processes"],
        download: "https://download.sysinternals.com/files/ProcessExplorer.zip"
    },

    {
        name: "Autoruns",
        category: "all",
        description: "View programs configured to automatically start with Windows.",
        tags: ["Sysinternals", "Startup"],
        download: "https://download.sysinternals.com/files/Autoruns.zip"
    },

    {
        name: "Process Monitor",
        category: "all",
        description: "Monitor filesystem, registry and process activity.",
        tags: ["Sysinternals", "Monitoring"],
        download: "https://download.sysinternals.com/files/ProcessMonitor.zip"
    },

    {
        name: "TCPView",
        category: "all",
        description: "View active TCP and UDP network endpoints.",
        tags: ["Network", "Sysinternals"],
        download: "https://download.sysinternals.com/files/TCPView.zip"
    },

    {
        name: "Hayabusa",
        category: "all",
        description: "Windows event log threat hunting and analysis tool.",
        tags: ["Logs", "Forensics"],
        download: "https://github.com/Yamato-Security/hayabusa/releases/download/v3.7.0/hayabusa-3.7.0-win-aarch64.zip"
    },

    {
        name: "JournalTrace",
        category: "all",
        description: "Windows forensic journal analysis utility.",
        tags: ["Forensics", "Windows"],
        download: "https://github.com/spokwn/JournalTrace/releases/latest/download/JournalTrace.exe"
    },

    {
        name: "PathsParser",
        category: "all",
        description: "Windows path and forensic artifact parser.",
        tags: ["Forensics", "Parser"],
        download: "https://github.com/spokwn/PathsParser/releases/latest/download/PathsParser.exe"
    },

    {
        name: "BAMParser",
        category: "all",
        description: "Parser for Background Activity Moderator artifacts.",
        tags: ["BAM", "Forensics"],
        download: "https://github.com/spokwn/BAM-parser/releases/latest/download/BAMParser.exe"
    },

    {
        name: "PrefetchParser",
        category: "all",
        description: "Windows Prefetch artifact parser.",
        tags: ["Prefetch", "Forensics"],
        download: "https://github.com/spokwn/prefetch-parser/releases/latest/download/PrefetchParser.exe"
    },

    {
        name: "PcaSvcExecuted",
        category: "all",
        description: "Parser for PCA service execution artifacts.",
        tags: ["PCA", "Forensics"],
        download: "https://github.com/spokwn/pcasvc-executed/releases/download/v0.8.7/PcaSvcExecuted.exe"
    },

    {
        name: "ActivitiesCacheParser",
        category: "all",
        description: "Parser for Windows ActivitiesCache execution artifacts.",
        tags: ["ActivitiesCache", "Forensics"],
        download: "https://github.com/spokwn/ActivitiesCache-execution/releases/download/v0.6.5/ActivitiesCacheParser.exe"
    },

    {
        name: "Replaceparser",
        category: "all",
        description: "Windows forensic artifact parser.",
        tags: ["Parser", "Forensics"],
        download: "https://github.com/spokwn/Replaceparser/releases/latest/download/Replaceparser.exe"
    },

    {
        name: "BamDeletedKeys",
        category: "all",
        description: "Utility for examining deleted BAM registry keys.",
        tags: ["BAM", "Registry"],
        download: "https://github.com/spokwn/BamDeletedKeys/releases/latest/download/BamDeletedKeys.exe"
    },

    {
        name: "espouken",
        category: "all",
        description: "Windows investigation utility.",
        tags: ["Windows", "Forensics"],
        download: "https://github.com/spokwn/Tool/releases/latest/download/espouken.exe"
    },

    {
        name: "Kernel Live Dump Tool",
        category: "all",
        description: "Kernel live dump investigation utility.",
        tags: ["Kernel", "Forensics"],
        github: "https://github.com/spokwn/KernelLiveDumpTool"
    },

    {
        name: "WinPrefetchView",
        category: "all",
        description: "View Windows Prefetch files.",
        tags: ["Prefetch", "Forensics"],
        download: "https://www.nirsoft.net/utils/winprefetchview-x64.zip"
    },

    {
        name: "LastActivityView",
        category: "all",
        description: "View recent user activity on Windows.",
        tags: ["Activity", "Forensics"],
        download: "https://www.nirsoft.net/utils/lastactivityview.zip"
    },

    {
        name: "ExecutedProgramsList",
        category: "all",
        description: "View programs executed on a Windows system.",
        tags: ["Execution", "Forensics"],
        download: "https://www.nirsoft.net/utils/executedprogramslist.zip"
    },

    {
        name: "UserAssistView",
        category: "all",
        description: "View UserAssist registry information.",
        tags: ["Registry", "Forensics"],
        download: "https://www.nirsoft.net/utils/userassistview.zip"
    },

    {
        name: "AlternateStreamView",
        category: "all",
        description: "View NTFS alternate data streams.",
        tags: ["NTFS", "Forensics"],
        download: "https://www.nirsoft.net/utils/alternatestreamview-x64.zip"
    },

    {
        name: "HashMyFiles",
        category: "all",
        description: "Calculate hashes for files.",
        tags: ["Hash", "Files"],
        download: "https://www.nirsoft.net/utils/hashmyfiles-x64.zip"
    },

    {
        name: "JumpListsView",
        category: "all",
        description: "View Windows Jump Lists.",
        tags: ["Jump Lists", "Forensics"],
        download: "https://www.nirsoft.net/utils/jumplistsview.zip"
    },

    {
        name: "OpenSaveFilesView",
        category: "all",
        description: "View files opened or saved through Windows dialogs.",
        tags: ["Files", "Forensics"],
        download: "https://www.nirsoft.net/utils/opensavefilesview-x64.zip"
    },

    {
        name: "USBDeview",
        category: "all",
        description: "View connected and previously connected USB devices.",
        tags: ["USB", "Forensics"],
        download: "https://www.nirsoft.net/utils/usbdeview-x64.zip"
    },

    {
        name: "TurnedOnTimesView",
        category: "all",
        description: "View computer startup and shutdown information.",
        tags: ["System", "Forensics"],
        download: "https://www.nirsoft.net/utils/turnedontimesview.zip"
    },

    {
        name: "RegScanner",
        category: "all",
        description: "Advanced Windows Registry search utility.",
        tags: ["Registry", "Windows"],
        download: "https://www.nirsoft.net/utils/regscanner-x64.zip"
    },

    {
        name: "BrowserDownloadsView",
        category: "all",
        description: "View browser download history.",
        tags: ["Browser", "Forensics"],
        download: "https://www.nirsoft.net/utils/browserdownloadsview-x64.zip"
    },

    {
        name: "Clipboardic",
        category: "all",
        description: "View clipboard information.",
        tags: ["Clipboard", "Windows"],
        download: "https://www.nirsoft.net/utils/clipboardic.zip"
    },

    {
        name: "DriverView",
        category: "all",
        description: "View installed device drivers.",
        tags: ["Drivers", "Windows"],
        download: "https://www.nirsoft.net/utils/driverview-x64.zip"
    },

    {
        name: "FileAccessErrorView",
        category: "all",
        description: "View file access error information.",
        tags: ["Files", "Windows"],
        download: "https://www.nirsoft.net/utils/fileaccesserrorview-x64.zip"
    },

    {
        name: "PreviousFilesRecovery",
        category: "all",
        description: "Recover previous versions of files.",
        tags: ["Recovery", "Forensics"],
        download: "https://www.nirsoft.net/utils/previousfilesrecovery-x64.zip"
    },

    {
        name: "RecentFilesView",
        category: "all",
        description: "View recently opened files.",
        tags: ["Files", "Forensics"],
        download: "https://www.nirsoft.net/utils/recentfilesview.zip"
    },

    {
        name: "ShellBagsView",
        category: "all",
        description: "View Windows ShellBags information.",
        tags: ["ShellBags", "Forensics"],
        download: "https://www.nirsoft.net/utils/shellbagsview.zip"
    },

    {
        name: "TaskSchedulerView",
        category: "all",
        description: "View scheduled tasks on Windows.",
        tags: ["Tasks", "Windows"],
        download: "https://www.nirsoft.net/utils/taskschedulerview-x64.zip"
    },

    {
        name: "UninstallView",
        category: "all",
        description: "View installed applications and uninstall information.",
        tags: ["Programs", "Windows"],
        download: "https://www.nirsoft.net/utils/uninstallview-x64.zip"
    },

    {
        name: "USBDriveLog",
        category: "all",
        description: "View USB drive connection history.",
        tags: ["USB", "Forensics"],
        download: "https://www.nirsoft.net/utils/usbdrivelog.zip"
    },

    {
        name: "Network Usage View",
        category: "all",
        description: "View Windows network usage information.",
        tags: ["Network", "Windows"],
        download: "https://www.nirsoft.net/utils/network_usage_view.html"
    },

    {
        name: "Timeline Explorer",
        category: "all",
        description: "Explore Windows forensic timeline data.",
        tags: ["Timeline", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/TimelineExplorer.zip"
    },

    {
        name: "JumpList Explorer",
        category: "all",
        description: "Explore Windows Jump List artifacts.",
        tags: ["Jump Lists", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/JumpListExplorer.zip"
    },

    {
        name: "ShellBags Explorer",
        category: "all",
        description: "Explore Windows ShellBags artifacts.",
        tags: ["ShellBags", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/ShellBagsExplorer.zip"
    },

    {
        name: "Registry Explorer",
        category: "all",
        description: "Explore Windows Registry hives.",
        tags: ["Registry", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/RegistryExplorer.zip"
    },

    {
        name: "PECmd",
        category: "all",
        description: "Windows Prefetch artifact parser.",
        tags: ["Prefetch", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/PECmd.zip"
    },

    {
        name: "MFTECmd",
        category: "all",
        description: "Parse Windows Master File Table artifacts.",
        tags: ["MFT", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/MFTECmd.zip"
    },

    {
        name: "JLECmd",
        category: "all",
        description: "Parse Windows Jump List artifacts.",
        tags: ["Jump Lists", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/JLECmd.zip"
    },

    {
        name: "SrumECmd",
        category: "all",
        description: "Parse Windows SRUM database artifacts.",
        tags: ["SRUM", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/SrumECmd.zip"
    },

    {
        name: "bstrings",
        category: "all",
        description: "String extraction utility for forensic analysis.",
        tags: ["Strings", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/bstrings.zip"
    },

    {
        name: "RecentFileCacheParser",
        category: "all",
        description: "Parse Windows RecentFileCache artifacts.",
        tags: ["Cache", "Forensics"],
        download: "https://download.ericzimmermanstools.com/net9/RecentFileCacheParser.zip"
    },

    {
        name: "AppCompatCacheParser",
        category: "all",
        description: "Parse Windows AppCompatCache artifacts.",
        tags: ["AppCompat", "Forensics"],
        github: "https://github.com/EricZimmerman/AppCompatCacheParser"
    },

    {
        name: "AmcacheParser",
        category: "all",
        description: "Parse Windows Amcache artifacts.",
        tags: ["Amcache", "Forensics"],
        github: "https://github.com/EricZimmerman/AmcacheParser"
    },


    /* MEOWTOOLS */

    {
        name: "MeowImportsChecker",
        category: "meowtools",
        description: "MeowTools utility for checking imports.",
        tags: ["MeowTools", "Imports"],
        github: "https://github.com/MeowTonynoh/MeowImportsChecker/releases/tag/MeowImportsChecker"
    },

    {
        name: "MeowClientFucker",
        category: "meowtools",
        description: "MeowTools client analysis utility.",
        tags: ["MeowTools", "Client"],
        github: "https://github.com/MeowTonynoh/MeowClientFucker/releases/tag/V1.1"
    },

    {
        name: "MeowDoomsdayFucker",
        category: "meowtools",
        description: "MeowTools investigation utility.",
        tags: ["MeowTools", "Analysis"],
        github: "https://github.com/MeowTonynoh/MeowDoomsdayFucker/releases/tag/V.1.6"
    },

    {
        name: "MeowResolver",
        category: "meowtools",
        description: "MeowTools resolver utility.",
        tags: ["MeowTools", "Resolver"],
        github: "https://github.com/MeowTonynoh/MeowResolver/releases/tag/v.1.1"
    },

    {
        name: "MeowNovoWareFucker",
        category: "meowtools",
        description: "MeowTools investigation utility.",
        tags: ["MeowTools", "Analysis"],
        github: "https://github.com/MeowTonynoh/MeowNovowareFucker/releases/tag/V2"
    },


    /* MSC */

    {
        name: "MSC Browser Scanner",
        category: "msc",
        description: "Browser scanning utility.",
        tags: ["MSC", "Browser"],
        github: "https://github.com/ricniclac2/msc-browser-scanner/releases/tag/Beta"
    },


    /* MOD ANALYZER */

    {
        name: "HabibiMod Analyzer",
        category: "modanalyzer",
        description: "Minecraft mod analyzer PowerShell script.",
        tags: ["Mod Analyzer", "PowerShell", "Minecraft"],
        command: `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass && powershell Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/HabibiHadron/HabibiModAnalyzer/refs/heads/main/HabibiModAnalyzer.ps1)`
    },

    {
        name: "MeowModAnalyzer",
        category: "modanalyzer",
        description: "Minecraft mod analyzer PowerShell script.",
        tags: ["Mod Analyzer", "PowerShell", "Minecraft"],
        command: `powershell -ExecutionPolicy Bypass -Command "Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/MeowTonynoh/MeowModAnalyzer/main/MeowModAnalyzer.ps1')"`
    }

];


const toolsContainer = document.getElementById("tools");
const search = document.getElementById("search");
const tabs = document.querySelectorAll(".tab");

let currentCategory = "all";


function createToolCard(tool) {

    const card = document.createElement("div");

    card.className = "tool-card";

    card.dataset.category = tool.category;
    card.dataset.name = tool.name.toLowerCase();


    const tags = tool.tags
        .map(tag => `<small>${tag}</small>`)
        .join("");


    const githubButton = tool.github
        ? `
            <a
                href="${tool.github}"
                target="_blank"
                class="github">
                GitHub
            </a>
        `
        : "";


    const downloadButton = tool.download
        ? `
            <a
                href="${tool.download}"
                target="_blank"
                class="download">
                Download
            </a>
        `
        : "";


    card.innerHTML = `

        <div class="tool-header">

            <h2>${tool.name}</h2>

            <span>
                ${tool.category === "all"
                    ? "Tool"
                    : tool.category}
            </span>

        </div>

        <p>
            ${tool.description}
        </p>

        <div class="tags">
            ${tags}
        </div>

        <div class="buttons">
            ${githubButton}
            ${downloadButton}
        </div>

    `;


    /* MOD ANALYZER CLICK TO COPY */

    if (tool.command) {

        card.style.cursor = "pointer";

        card.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(tool.command);

                const badge =
                    card.querySelector(".tool-header span");

                const originalText = badge.textContent;

                badge.textContent = "Copied!";

                setTimeout(() => {
                    badge.textContent = originalText;
                }, 1500);

            } catch (error) {

                console.error(
                    "Failed to copy command:",
                    error
                );

            }

        });

    }


    return card;
}


function renderTools() {

    toolsContainer.innerHTML = "";

    const searchText =
        search.value.toLowerCase().trim();


    const filteredTools = tools.filter(tool => {

        const matchesSearch =
            tool.name.toLowerCase().includes(searchText) ||
            tool.description.toLowerCase().includes(searchText) ||
            tool.tags.some(tag =>
                tag.toLowerCase().includes(searchText)
            );


        const matchesCategory =
            currentCategory === "all" ||
            tool.category === currentCategory;


        return matchesSearch && matchesCategory;

    });


    if (filteredTools.length === 0) {

        toolsContainer.innerHTML = `
            <div class="no-results">
                No tools found.
            </div>
        `;

        return;
    }


    filteredTools.forEach(tool => {

        toolsContainer.appendChild(
            createToolCard(tool)
        );

    });

}


search.addEventListener("input", renderTools);


tabs.forEach(tab => {

    tab.addEventListener("click", () => {

        tabs.forEach(t =>
            t.classList.remove("active")
        );

        tab.classList.add("active");

        currentCategory =
            tab.dataset.category;

        renderTools();

    });

});


renderTools();
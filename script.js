const tools = [
  // =========================
  // GENERAL / SYSTEM TOOLS
  // =========================

  {
    name: "SystemInformer",
    creator: "#Winsiderss",
    category: "all",
    description: "Advanced system monitoring and process inspection tool.",
    tags: ["Process", "System", "Monitoring"],
    download:
      "https://github.com/winsiderss/si-builds/releases/download/3.2.25275.112/systeminformer-build-canary-setup.exe",
  },

  {
    name: "Everything",
    creator: "#Voidtools",
    category: "all",
    description: "Fast file and folder search utility.",
    tags: ["Files", "Search"],
    download:
      "https://www.voidtools.com/Everything-1.4.1.1029.x64-Setup.exe",
  },

  {
    name: "FTK Imager",
    creator: "#Exterro",
    category: "all",
    description: "Forensic imaging and evidence acquisition tool.",
    tags: ["Forensics", "Disk", "Imaging"],
    download:
      "https://d1kpmuwb7gvu1i.cloudfront.net/AccessData_FTK_Imager_4.7.1.exe",
  },

  {
    name: "DIE Engine",
    creator: "#Horsicq",
    category: "all",
    description: "Detect It Easy for executable analysis.",
    tags: ["PE", "Analysis", "Executable"],
    download:
      "https://github.com/horsicq/DIE-engine/releases/download/3.10/die_win64_portable_3.10_x64.zip",
  },

  {
    name: "HxD Portable",
    creator: "#MhNexus",
    category: "all",
    description: "Hex editor for inspecting binary files.",
    tags: ["Hex", "Binary", "Editor"],
    download: "https://mh-nexus.de/downloads/HxDPortableSetup.zip",
  },

  {
    name: "PEStudio",
    creator: "#Winitor",
    category: "all",
    description: "Static analysis tool for Windows executables.",
    tags: ["PE", "Static Analysis"],
    download: "https://www.winitor.com/tools/pestudio/current/pestudio.zip",
  },

  {
    name: "Strings",
    creator: "#Sysinternals",
    category: "all",
    description: "Extracts ASCII and Unicode strings from files.",
    tags: ["Strings", "Analysis"],
    download: "https://download.sysinternals.com/files/Strings.zip",
  },

  {
    name: "Luyten",
    creator: "#Deathmarine",
    category: "all",
    description: "Java decompiler and bytecode viewer.",
    tags: ["Java", "Decompiler"],
    download:
      "https://github.com/deathmarine/Luyten/releases/download/v0.5.4_Rebuilt_with_Latest_depenencies/luyten-0.5.4.jar",
  },

  {
    name: "Recaf",
    creator: "#ColE",
    category: "all",
    description: "Java bytecode editor and reverse engineering tool.",
    tags: ["Java", "Decompiler", "Bytecode"],
    download:
      "https://github.com/Col-E/Recaf/releases/download/2.21.14/recaf-2.21.14-J8-jar-with-dependencies.jar",
  },

  // =========================
  // SYSINTERNALS
  // =========================

  {
    name: "ProcessExplorer",
    creator: "#Sysinternals",
    category: "all",
    description: "Detailed process and handle inspection.",
    tags: ["Process", "Handles"],
    download: "https://download.sysinternals.com/files/ProcessExplorer.zip",
  },

  {
    name: "Autoruns",
    creator: "#Sysinternals",
    category: "all",
    description: "View applications configured to automatically start.",
    tags: ["Startup", "Persistence"],
    download: "https://download.sysinternals.com/files/Autoruns.zip",
  },

  {
    name: "ProcessMonitor",
    creator: "#Sysinternals",
    category: "all",
    description: "Real-time filesystem, registry and process monitoring.",
    tags: ["Process", "Registry", "Filesystem"],
    download: "https://download.sysinternals.com/files/ProcessMonitor.zip",
  },

  {
    name: "TCPView",
    creator: "#Sysinternals",
    category: "all",
    description: "View TCP and UDP endpoints and connections.",
    tags: ["Network", "TCP", "UDP"],
    download: "https://download.sysinternals.com/files/TCPView.zip",
  },

  // =========================
  // FORENSICS / EXECUTION
  // =========================

  {
    name: "Hayabusa",
    creator: "#YamatoSecurity",
    category: "all",
    description: "Windows event log threat hunting and timeline tool.",
    tags: ["Event Logs", "Threat Hunting"],
    download:
      "https://github.com/Yamato-Security/hayabusa/releases/download/v3.7.0/hayabusa-3.7.0-win-aarch64.zip",
  },

  {
    name: "JournalTrace",
    creator: "#Spokwn",
    category: "all",
    description: "USN Journal analysis tool.",
    tags: ["USN", "Forensics"],
    download:
      "https://github.com/spokwn/JournalTrace/releases/latest/download/JournalTrace.exe",
  },

  {
    name: "PathsParser",
    creator: "#Spokwn",
    category: "all",
    description: "Parses and analyzes Windows paths.",
    tags: ["Paths", "Forensics"],
    download:
      "https://github.com/spokwn/PathsParser/releases/latest/download/PathsParser.exe",
  },

  {
    name: "BAMReveal",
    creator: "#Orbdiff",
    category: "all",
    description: "Browser Activity Monitor analysis tool.",
    tags: ["BAM", "Execution"],
    download:
      "https://github.com/Orbdiff/BAMReveal/releases/download/v1.3.1/BAMReveal.exe",
  },

  {
    name: "WinPrefetchView",
    creator: "#Orbdiff",
    category: "all",
    description: "Windows Prefetch analysis tool.",
    tags: ["Prefetch", "Execution"],
    download:
      "https://github.com/Orbdiff/PrefetchView/releases/download/v1.6.8/pv++.exe",
  },

  {
    name: "PcaSvcExecuted",
    creator: "#Spokwn",
    category: "all",
    description: "Analyzes PcaSvc execution traces.",
    tags: ["PCA", "Execution"],
    download:
      "https://github.com/spokwn/pcasvc-executed/releases/download/v0.8.7/PcaSvcExecuted.exe",
  },

  {
    name: "ActivitiesCacheParser",
    creator: "#Spokwn",
    category: "all",
    description: "Parses Windows Activities Cache execution information.",
    tags: ["ActivitiesCache", "Execution"],
    download:
      "https://github.com/spokwn/ActivitiesCache-execution/releases/download/v0.6.5/ActivitiesCacheParser.exe",
  },

  {
    name: "Replaceparser",
    creator: "#Spokwn",
    category: "all",
    description: "Replacement and execution artifact parser.",
    tags: ["Parser", "Forensics"],
    download:
      "https://github.com/spokwn/Replaceparser/releases/latest/download/Replaceparser.exe",
  },

  {
    name: "BamDeletedKeys",
    creator: "#Spokwn",
    category: "all",
    description: "Analyzes deleted BAM registry keys.",
    tags: ["BAM", "Registry"],
    download:
      "https://github.com/spokwn/BamDeletedKeys/releases/latest/download/BamDeletedKeys.exe",
  },

  {
    name: "espouken",
    creator: "#Spokwn",
    category: "all",
    description: "Windows forensic analysis utility.",
    tags: ["Forensics", "Windows"],
    download:
      "https://github.com/spokwn/Tool/releases/latest/download/espouken.exe",
  },

  {
    name: "Kernel Live Dump Tool",
    creator: "#Spokwn",
    category: "all",
    description: "Kernel live dump analysis utility.",
    tags: ["Kernel", "Dump"],
    github: "https://github.com/spokwn/KernelLiveDumpTool",
  },

  // =========================
  // NIRSOFT
  // =========================

  {
    name: "LastActivityView",
    creator: "#Nirsoft",
    category: "all",
    description: "Displays recent system activity.",
    tags: ["Activity", "Forensics"],
    download: "https://www.nirsoft.net/utils/lastactivityview.zip",
  },

  {
    name: "ExecutedProgramsList",
    creator: "#Nirsoft",
    category: "all",
    description: "Displays programs executed on a system.",
    tags: ["Execution", "Forensics"],
    download: "https://www.nirsoft.net/utils/executedprogramslist.zip",
  },

  {
    name: "UserAssistView",
    creator: "#Orbdiff",
    category: "all",
    description: "Analyzes UserAssist execution artifacts.",
    tags: ["UserAssist", "Execution"],
    download:
      "https://github.com/Orbdiff/UserAssistView/releases/download/v1.0/UserAssistView.exe",
  },

  {
    name: "AlternateStreamView",
    creator: "#Nirsoft",
    category: "all",
    description: "View alternate data streams.",
    tags: ["ADS", "Filesystem"],
    download:
      "https://www.nirsoft.net/utils/alternatestreamview-x64.zip",
  },

  {
    name: "HashMyFiles",
    creator: "#Nirsoft",
    category: "all",
    description: "Calculate hashes for files.",
    tags: ["Hash", "Files"],
    download: "https://www.nirsoft.net/utils/hashmyfiles-x64.zip",
  },

  {
    name: "JumpListsView",
    creator: "#Nirsoft",
    category: "all",
    description: "View Windows Jump Lists.",
    tags: ["JumpLists", "Forensics"],
    download: "https://www.nirsoft.net/utils/jumplistsview.zip",
  },

  {
    name: "OpenSaveFilesView",
    creator: "#Nirsoft",
    category: "all",
    description: "View files opened or saved through Windows dialogs.",
    tags: ["Files", "Forensics"],
    download: "https://www.nirsoft.net/utils/opensavefilesview-x64.zip",
  },

  {
    name: "USBDeview",
    creator: "#Nirsoft",
    category: "all",
    description: "View connected USB devices.",
    tags: ["USB", "Devices"],
    download: "https://www.nirsoft.net/utils/usbdeview-x64.zip",
  },

  {
    name: "TurnedOnTimesView",
    creator: "#Nirsoft",
    category: "all",
    description: "View system startup and shutdown history.",
    tags: ["Boot", "Shutdown"],
    download: "https://www.nirsoft.net/utils/turnedontimesview.zip",
  },

  {
    name: "Clipboardic",
    creator: "#Nirsoft",
    category: "all",
    description: "View clipboard contents/history.",
    tags: ["Clipboard", "Forensics"],
    download: "https://www.nirsoft.net/utils/clipboardic.zip",
  },

  {
    name: "DriverView",
    creator: "#Nirsoft",
    category: "all",
    description: "View installed drivers.",
    tags: ["Drivers", "System"],
    download: "https://www.nirsoft.net/utils/driverview-x64.zip",
  },

  {
    name: "FileAccessErrorView",
    creator: "#Nirsoft",
    category: "all",
    description: "View file access errors.",
    tags: ["Filesystem", "Errors"],
    download:
      "https://www.nirsoft.net/utils/fileaccesserrorview-x64.zip",
  },

  {
    name: "PreviousFilesRecovery",
    creator: "#Nirsoft",
    category: "all",
    description: "Recover information about previous files.",
    tags: ["Recovery", "Forensics"],
    download:
      "https://www.nirsoft.net/utils/previousfilesrecovery-x64.zip",
  },

  {
    name: "RecentFilesView",
    creator: "#Nirsoft",
    category: "all",
    description: "View recently opened files.",
    tags: ["Recent Files", "Forensics"],
    download: "https://www.nirsoft.net/utils/recentfilesview.zip",
  },

  {
    name: "ShellBagsView",
    creator: "#Nirsoft",
    category: "all",
    description: "Analyze Windows ShellBags.",
    tags: ["ShellBags", "Registry"],
    download: "https://www.nirsoft.net/utils/shellbagsview.zip",
  },

  {
    name: "UninstallView",
    creator: "#Nirsoft",
    category: "all",
    description: "View installed and uninstalled applications.",
    tags: ["Programs", "Registry"],
    download: "https://www.nirsoft.net/utils/uninstallview-x64.zip",
  },

  {
    name: "Network Usage View",
    creator: "#Nirsoft",
    category: "all",
    description: "View Windows network usage information.",
    tags: ["Network", "Usage"],
    download: "https://www.nirsoft.net/utils/network_usage_view.html",
  },

  // =========================
  // MSC TOOLS
  // =========================

  {
    name: "RegistryScanner",
    creator: "#Inkenal",
    category: "msc",
    description: "Windows registry scanning utility.",
    tags: ["Registry", "MSC"],
    github: "https://github.com/Inkenal/RegistryScanner",
  },

  {
    name: "BrowserChecker",
    creator: "#Ricniclac2",
    category: "msc",
    description: "Browser-related forensic scanner.",
    tags: ["Browser", "MSC"],
    download:
      "https://github.com/ricniclac2/msc-browser-scanner/releases/download/Beta/MSC.Browser.Scanner.Setup.1.0.0.exe",
  },

  {
    name: "VigilsTaskParser",
    creator: "#Inkenal",
    category: "msc",
    description: "Task and scheduled task parser.",
    tags: ["Tasks", "MSC"],
    github: "https://github.com/Inkenal/TaskParser",
  },

  {
    name: "MarsPixelDumpAnalyzer",
    creator: "#Zedoonvm1",
    category: "msc",
    description: "Analyzes Mars Pixel dump data.",
    tags: ["Dump", "MSC"],
    github: "https://github.com/zedoonvm1/MarsPixelDumpAnalyzer",
  },

  {
    name: "MSCEventViewer",
    creator: "#Piespeas",
    category: "msc",
    description: "Windows event viewer utility.",
    tags: ["Events", "MSC"],
    download:
      "https://github.com/piespeas/MSC-Event-Viewer/releases/download/BETA/Event.Viewer.MSC.exe",
  },

  {
    name: "LOLDrivers",
    creator: "#Rtfmkiesel",
    category: "msc",
    description: "LOLDrivers client for researching vulnerable drivers.",
    tags: ["Drivers", "MSC"],
    download:
      "https://github.com/rtfmkiesel/loldrivers-client/releases/download/v2.0.1/LOLDrivers-client_Windows_amd64.zip",
  },

  // =========================
  // ERIC ZIMMERMAN
  // =========================

  {
    name: "TimelineExplorer",
    creator: "#EricZimmerman",
    category: "all",
    description: "Timeline analysis and forensic artifact viewer.",
    tags: ["Timeline", "Forensics"],
    download:
      "https://download.ericzimmermanstools.com/net9/TimelineExplorer.zip",
  },

  {
    name: "JumpListExplorer",
    creator: "#EricZimmerman",
    category: "all",
    description: "Explore Windows Jump Lists.",
    tags: ["JumpLists", "Forensics"],
    download:
      "https://download.ericzimmermanstools.com/net9/JumpListExplorer.zip",
  },

  {
    name: "ShellBagsExplorer",
    creator: "#EricZimmerman",
    category: "all",
    description: "Explore Windows ShellBags.",
    tags: ["ShellBags", "Forensics"],
    download:
      "https://download.ericzimmermanstools.com/net9/ShellBagsExplorer.zip",
  },

  {
    name: "RegistryExplorer",
    creator: "#EricZimmerman",
    category: "all",
    description: "Advanced Windows Registry explorer.",
    tags: ["Registry", "Forensics"],
    download:
      "https://download.ericzimmermanstools.com/net9/RegistryExplorer.zip",
  },

  {
    name: "PECmd",
    creator: "#EricZimmerman",
    category: "all",
    description: "Windows Prefetch parser.",
    tags: ["Prefetch", "Parser"],
    download:
      "https://download.ericzimmermanstools.com/net9/PECmd.zip",
  },

  {
    name: "MFTECmd",
    creator: "#EricZimmerman",
    category: "all",
    description: "MFT parser for NTFS forensic analysis.",
    tags: ["MFT", "NTFS"],
    download:
      "https://download.ericzimmermanstools.com/net9/MFTECmd.zip",
  },

  {
    name: "JLECmd",
    creator: "#EricZimmerman",
    category: "all",
    description: "Jump List parser.",
    tags: ["JumpLists", "Parser"],
    download:
      "https://download.ericzimmermanstools.com/net9/JLECmd.zip",
  },

  {
    name: "SrumECmd",
    creator: "#EricZimmerman",
    category: "all",
    description: "SRUM database parser.",
    tags: ["SRUM", "Parser"],
    download:
      "https://download.ericzimmermanstools.com/net9/SrumECmd.zip",
  },

  {
    name: "bstrings",
    creator: "#EricZimmerman",
    category: "all",
    description: "String extraction utility.",
    tags: ["Strings", "Parser"],
    download:
      "https://download.ericzimmermanstools.com/net9/bstrings.zip",
  },

  {
    name: "RecentFileCacheParser",
    creator: "#EricZimmerman",
    category: "all",
    description: "RecentFileCache forensic parser.",
    tags: ["Cache", "Parser"],
    download:
      "https://download.ericzimmermanstools.com/net9/RecentFileCacheParser.zip",
  },

  {
    name: "AppCompatCacheParser",
    creator: "#EricZimmerman",
    category: "all",
    description: "Windows AppCompatCache parser.",
    tags: ["AppCompat", "Execution"],
    github: "https://github.com/EricZimmerman/AppCompatCacheParser",
  },

  // =========================
  // ORBDIFF TOOLS
  // =========================

  {
    name: "JARParser",
    creator: "#Orbdiff",
    category: "all",
    description: "Java archive parser.",
    tags: ["JAR", "Java"],
    download:
      "https://github.com/Orbdiff/JARParser/releases/download/v1.2/JARParser.exe",
  },

  {
    name: "USBDetector",
    creator: "#Orbdiff",
    category: "all",
    description: "USB device detection utility.",
    tags: ["USB", "Devices"],
    download:
      "https://github.com/Orbdiff/USBDetector/releases/download/v1.1/USBDetector.exe",
  },

  {
    name: "Hardlink",
    creator: "#Orbdiff",
    category: "all",
    description: "Hardlink analysis utility.",
    tags: ["Hardlink", "Filesystem"],
    download:
      "https://github.com/Orbdiff/MFT-HardLink/releases/download/v1.2/HardLink.exe",
  },

  {
    name: "Fileless",
    creator: "#Orbdiff",
    category: "all",
    description: "Fileless artifact analysis utility.",
    tags: ["Fileless", "Forensics"],
    download:
      "https://github.com/Orbdiff/Fileless/releases/download/v1.3/fileless.exe",
  },

  {
    name: "MFTParser",
    creator: "#Orbdiff",
    category: "all",
    description: "Master File Table parser.",
    tags: ["MFT", "NTFS"],
    download:
      "https://github.com/Orbdiff/MFTParser/releases/download/v0.1/mftparser.exe",
  },

  {
    name: "WebHollowing",
    creator: "#Orbdiff",
    category: "all",
    description: "Web-related hollowing analysis utility.",
    tags: ["Hollowing", "Analysis"],
    download:
      "https://github.com/Orbdiff/WebHollowing/releases/download/v1.0/web.hollowing.exe",
  },

  {
    name: "StringsParser",
    creator: "#Orbdiff",
    category: "all",
    description: "Advanced strings parsing utility.",
    tags: ["Strings", "Parser"],
    download:
      "https://github.com/Orbdiff/StringsParser/releases/download/v1.2.1b/stringsparser.1.2.1b.exe",
  },

  {
    name: "InjGen",
    creator: "#Orbdiff",
    category: "all",
    description: "Injection-related analysis utility.",
    tags: ["Injection", "Analysis"],
    download:
      "https://github.com/Orbdiff/InjGen/releases/download/fork/InjGen.exe",
  },

  {
    name: "AmcacheParser",
    creator: "#Orbdiff",
    category: "all",
    description: "Amcache forensic parser.",
    tags: ["Amcache", "Execution"],
    download:
      "https://github.com/Orbdiff/AmcacheParser/releases/download/v1.0/AmcacheParser.exe",
  },

  {
    name: "PFTrace",
    creator: "#Orbdiff",
    category: "all",
    description: "Prefetch trace analysis utility.",
    tags: ["Prefetch", "Trace"],
    download:
      "https://github.com/Orbdiff/PFTrace/releases/download/v1.0.1/PFTrace.exe",
  },

  // =========================
  // OTHER TOOLS
  // =========================

  {
    name: "RegistryScanner",
    creator: "#Inkenal",
    category: "all",
    description: "Registry scanning tool.",
    tags: ["Registry"],
    github: "https://github.com/Inkenal/RegistryScanner",
  },

  {
    name: "TaskParser",
    creator: "#Inkenal",
    category: "all",
    description: "Task parsing utility.",
    tags: ["Tasks", "Parser"],
    github: "https://github.com/Inkenal/TaskParser",
  },

  {
    name: "MarsPixelDumpAnalyzer",
    creator: "#Zedoonvm1",
    category: "all",
    description: "Pixel dump analysis tool.",
    tags: ["Dump", "Analysis"],
    github: "https://github.com/zedoonvm1/MarsPixelDumpAnalyzer",
  },

  {
    name: "MeowDoomsdayFucker",
    creator: "#MeowTonynoh",
    category: "meowtools",
    description: "Meow forensic analysis utility.",
    tags: ["MeowTools"],
    download:
      "https://github.com/MeowTonynoh/MeowDoomsdayFucker/releases/download/V.1.6/MeowDoomsdayFucker.exe",
  },

  {
    name: "MeowClientFucker",
    creator: "#MeowTonynoh",
    category: "meowtools",
    description: "Minecraft client analysis utility.",
    tags: ["MeowTools"],
    download:
      "https://github.com/MeowTonynoh/MeowClientFucker/releases/download/V1.1/MeowClientFucker.exe",
  },

  {
    name: "MeowResolver",
    creator: "#MeowTonynoh",
    category: "meowtools",
    description: "Resolution and analysis utility.",
    tags: ["MeowTools"],
    download:
      "https://github.com/MeowTonynoh/MeowResolver/releases/download/v.1.1/MeowResolver.exe",
  },

  {
    name: "MeowNovowareFucker",
    creator: "#MeowTonynoh",
    category: "meowtools",
    description: "Minecraft-related analysis utility.",
    tags: ["MeowTools"],
    download:
      "https://github.com/MeowTonynoh/MeowNovowareFucker/releases/download/V2/MeowNovowareFucker.exe",
  },

  {
    name: "MeowImportsChecker",
    creator: "#MeowTonynoh",
    category: "meowtools",
    description: "Import analysis utility.",
    tags: ["MeowTools", "Imports"],
    download:
      "https://github.com/MeowTonynoh/MeowImportsChecker/releases/download/MeowImportsChecker/MeowImportsChecker.exe",
  },

  {
    name: "StormFuserFinder",
    creator: "#Sorted1",
    category: "all",
    description: "Storm screenshare fuser finder.",
    tags: ["Fuser", "Screenshare"],
    download:
      "https://github.com/Sorted1/StormSS-Fuser-Finder/releases/download/Main/Storm.Fuser.Finder.zip",
  },

  {
    name: "Velociraptor",
    creator: "#Velocidex",
    category: "all",
    description: "Digital forensic investigation and endpoint visibility platform.",
    tags: ["Forensics", "Endpoint"],
    download:
      "https://github.com/Velocidex/velociraptor/releases/download/v0.77.3/velociraptor-v0.77.3-windows-amd64.msi",
  },

  {
    name: "HollowHunter",
    creator: "#Hasherezade",
    category: "all",
    description: "Memory analysis tool for detecting process hollowing.",
    tags: ["Memory", "Hollowing"],
    download:
      "https://github.com/hasherezade/hollows_hunter/releases/download/v0.4.1.1/hollows_hunter64.exe",
  },

  // =========================
  // MOD ANALYZERS
  // =========================

  {
    name: "MeowModAnalyzer",
    creator: "#MeowTonynoh",
    category: "modanalyzer",
    description: "PowerShell-based Minecraft mod analyzer.",
    tags: ["Mod Analyzer", "PowerShell"],
    command: `powershell -ExecutionPolicy Bypass -Command "Invoke-Expression (Invoke-RestMethod 'https://raw.githubusercontent.com/MeowTonynoh/MeowModAnalyzer/main/MeowModAnalyzer.ps1')"`
  },

  {
    name: "HabibiModAnalyzer",
    creator: "#HabibiHadron",
    category: "modanalyzer",
    description: "PowerShell-based Minecraft mod analyzer.",
    tags: ["Mod Analyzer", "PowerShell"],
    command: `powershell Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass && powershell Invoke-Expression (Invoke-RestMethod https://raw.githubusercontent.com/HabibiHadron/HabibiModAnalyzer/refs/heads/main/HabibiModAnalyzer.ps1)`
  }
];


// =====================================
// TOOL CARD
// =====================================

function createToolCard(tool) {
  const card = document.createElement("div");
  card.className = "tool-card";

  const tags = (tool.tags || [])
    .map(tag => `<span class="tag">#${tag.replace(/^#/, "")}</span>`)
    .join("");

  let action = "";

  if (tool.command) {
    action = `
      <div class="command-box">
        <code>${escapeHtml(tool.command)}</code>
      </div>

      <button class="copy-command-btn" data-command="${escapeAttr(tool.command)}">
        Copy Command
      </button>
    `;
  } else if (tool.download) {
    action = `
      <a
        class="download-btn"
        href="${tool.download}"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    `;
  } else if (tool.github) {
    action = `
      <a
        class="download-btn"
        href="${tool.github}"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    `;
  }

  card.innerHTML = `
    <div class="tool-header">
      <div>
        <h3>${escapeHtml(tool.name)}</h3>
        <span class="creator">${escapeHtml(tool.creator || "")}</span>
      </div>
    </div>

    <p class="tool-description">
      ${escapeHtml(tool.description || "")}
    </p>

    <div class="tool-tags">
      ${tags}
    </div>

    ${action}
  `;

  const copyButton = card.querySelector(".copy-command-btn");

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      const command = copyButton.dataset.command;

      try {
        await navigator.clipboard.writeText(command);

        const oldText = copyButton.textContent;
        copyButton.textContent = "Copied!";

        setTimeout(() => {
          copyButton.textContent = oldText;
        }, 1500);
      } catch {
        copyButton.textContent = "Copy Failed";

        setTimeout(() => {
          copyButton.textContent = "Copy Command";
        }, 1500);
      }
    });
  }

  return card;
}


// =====================================
// HTML ESCAPING
// =====================================

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}


// =====================================
// RENDER TOOLS
// =====================================

const toolsContainer = document.querySelector("#tools-container");
const searchInput = document.querySelector("#search");
const tabs = document.querySelectorAll(".tab");

let currentCategory = "all";

function renderTools() {
  if (!toolsContainer) return;

  const search =
    searchInput?.value?.trim().toLowerCase() || "";

  toolsContainer.innerHTML = "";

  const filteredTools = tools.filter(tool => {
    const matchesCategory =
      currentCategory === "all" ||
      tool.category === currentCategory;

    const searchableText = [
      tool.name,
      tool.creator,
      tool.description,
      ...(tool.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    const matchesSearch =
      !search || searchableText.includes(search);

    return matchesCategory && matchesSearch;
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
    toolsContainer.appendChild(createToolCard(tool));
  });
}


// =====================================
// TABS
// =====================================

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));

    tab.classList.add("active");

    currentCategory =
      tab.dataset.category || "all";

    renderTools();
  });
});


// =====================================
// SEARCH
// =====================================

if (searchInput) {
  searchInput.addEventListener("input", renderTools);
}


// =====================================
// INITIAL RENDER
// =====================================

renderTools();
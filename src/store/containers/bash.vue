

<template lang="html">
  <div id="bash">
    <div class="language-bash highlighter-rouge"><pre class="highlight"><code><span class="c">#  ---------------------------------------------------------------------------</span>
<span class="c">#</span>
<span class="c">#  Description:  This file holds all my BASH configurations and aliases</span>
<span class="c">#</span>
<span class="c">#  Sections:</span>
<span class="c">#  1.  Environment Configuration</span>
<span class="c">#  2.  Make Terminal Better (remapping defaults and adding functionality)</span>
<span class="c">#  3.  File and Folder Management</span>
<span class="c">#  4.  Searching</span>
<span class="c">#  5.  Process Management</span>
<span class="c">#  6.  Networking</span>
<span class="c">#  7.  System Operations &amp; Information</span>
<span class="c">#  8.  Web Development</span>
<span class="c">#  9.  Reminders &amp; Notes</span>
<span class="c">#</span>
<span class="c">#  ---------------------------------------------------------------------------</span>

<span class="c">#   -------------------------------</span>
<span class="c">#   1. ENVIRONMENT CONFIGURATION</span>
<span class="c">#   -------------------------------</span>

<span class="c">#   Change Prompt</span>
<span class="c">#   ------------------------------------------------------------</span>
    <span class="nb">export </span><span class="nv">PS1</span><span class="o">=</span><span class="s2">"________________________________________________________________________________</span><span class="se">\n</span><span class="s2">| </span><span class="se">\w</span><span class="s2"> @ </span><span class="se">\h</span><span class="s2"> (</span><span class="se">\u</span><span class="s2">) </span><span class="se">\n</span><span class="s2">| =&gt; "</span>
    <span class="nb">export </span><span class="nv">PS2</span><span class="o">=</span><span class="s2">"| =&gt; "</span>

<span class="c">#   Set Paths</span>
<span class="c">#   ------------------------------------------------------------</span>
    <span class="nb">export </span><span class="nv">PATH</span><span class="o">=</span><span class="s2">"</span><span class="nv">$PATH</span><span class="s2">:/usr/local/bin/"</span>
    <span class="nb">export </span><span class="nv">PATH</span><span class="o">=</span><span class="s2">"/usr/local/git/bin:/sw/bin/:/usr/local/bin:/usr/local/:/usr/local/sbin:/usr/local/mysql/bin:</span><span class="nv">$PATH</span><span class="s2">"</span>

<span class="c">#   Set Default Editor (change 'Nano' to the editor of your choice)</span>
<span class="c">#   ------------------------------------------------------------</span>
    <span class="nb">export </span><span class="nv">EDITOR</span><span class="o">=</span>/usr/bin/nano

<span class="c">#   Set default blocksize for ls, df, du</span>
<span class="c">#   from this: http://hints.macworld.com/comment.php?mode=view&amp;cid=24491</span>
<span class="c">#   ------------------------------------------------------------</span>
    <span class="nb">export </span><span class="nv">BLOCKSIZE</span><span class="o">=</span>1k

<span class="c">#   Add color to terminal</span>
<span class="c">#   (this is all commented out as I use Mac Terminal Profiles)</span>
<span class="c">#   from http://osxdaily.com/2012/02/21/add-color-to-the-terminal-in-mac-os-x/</span>
<span class="c">#   ------------------------------------------------------------</span>
<span class="c">#   export CLICOLOR=1</span>
<span class="c">#   export LSCOLORS=ExFxBxDxCxegedabagacad</span>


<span class="c">#   -----------------------------</span>
<span class="c">#   2. MAKE TERMINAL BETTER</span>
<span class="c">#   -----------------------------</span>

<span class="nb">alias </span><span class="nv">cp</span><span class="o">=</span><span class="s1">'cp -iv'</span>                           <span class="c"># Preferred 'cp' implementation</span>
<span class="nb">alias </span><span class="nv">mv</span><span class="o">=</span><span class="s1">'mv -iv'</span>                           <span class="c"># Preferred 'mv' implementation</span>
<span class="nb">alias </span><span class="nv">mkdir</span><span class="o">=</span><span class="s1">'mkdir -pv'</span>                     <span class="c"># Preferred 'mkdir' implementation</span>
<span class="nb">alias </span><span class="nv">ll</span><span class="o">=</span><span class="s1">'ls -FGlAhp'</span>                       <span class="c"># Preferred 'ls' implementation</span>
<span class="nb">alias </span><span class="nv">less</span><span class="o">=</span><span class="s1">'less -FSRXc'</span>                    <span class="c"># Preferred 'less' implementation</span>
<span class="nb">cd</span><span class="o">()</span> <span class="o">{</span> <span class="nb">builtin cd</span> <span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span>; ll; <span class="o">}</span>               <span class="c"># Always list directory contents upon 'cd'</span>
<span class="nb">alias </span>cd..<span class="o">=</span><span class="s1">'cd ../'</span>                         <span class="c"># Go back 1 directory level (for fast typers)</span>
<span class="nb">alias</span> ..<span class="o">=</span><span class="s1">'cd ../'</span>                           <span class="c"># Go back 1 directory level</span>
<span class="nb">alias</span> ...<span class="o">=</span><span class="s1">'cd ../../'</span>                       <span class="c"># Go back 2 directory levels</span>
<span class="nb">alias</span> .3<span class="o">=</span><span class="s1">'cd ../../../'</span>                     <span class="c"># Go back 3 directory levels</span>
<span class="nb">alias</span> .4<span class="o">=</span><span class="s1">'cd ../../../../'</span>                  <span class="c"># Go back 4 directory levels</span>
<span class="nb">alias</span> .5<span class="o">=</span><span class="s1">'cd ../../../../../'</span>               <span class="c"># Go back 5 directory levels</span>
<span class="nb">alias</span> .6<span class="o">=</span><span class="s1">'cd ../../../../../../'</span>            <span class="c"># Go back 6 directory levels</span>
<span class="nb">alias </span><span class="nv">edit</span><span class="o">=</span><span class="s1">'subl'</span>                           <span class="c"># edit:         Opens any file in sublime editor</span>
<span class="nb">alias </span><span class="nv">f</span><span class="o">=</span><span class="s1">'open -a Finder ./'</span>                 <span class="c"># f:            Opens current directory in MacOS Finder</span>
<span class="nb">alias</span> ~<span class="o">=</span><span class="s2">"cd ~"</span>                              <span class="c"># ~:            Go Home</span>
<span class="nb">alias </span><span class="nv">c</span><span class="o">=</span><span class="s1">'clear'</span>                             <span class="c"># c:            Clear terminal display</span>
<span class="nb">alias </span><span class="nv">which</span><span class="o">=</span><span class="s1">'type -all'</span>                     <span class="c"># which:        Find executables</span>
<span class="nb">alias </span><span class="nv">path</span><span class="o">=</span><span class="s1">'echo -e ${PATH//:/\\n}'</span>         <span class="c"># path:         Echo all executable Paths</span>
<span class="nb">alias </span><span class="nv">show_options</span><span class="o">=</span><span class="s1">'shopt'</span>                  <span class="c"># Show_options: display bash options settings</span>
<span class="nb">alias </span><span class="nv">fix_stty</span><span class="o">=</span><span class="s1">'stty sane'</span>                  <span class="c"># fix_stty:     Restore terminal settings when screwed up</span>
<span class="nb">alias </span><span class="nv">cic</span><span class="o">=</span><span class="s1">'set completion-ignore-case On'</span>   <span class="c"># cic:          Make tab-completion case-insensitive</span>
mcd <span class="o">()</span> <span class="o">{</span> mkdir -p <span class="s2">"</span><span class="nv">$1</span><span class="s2">"</span> <span class="o">&amp;&amp;</span> <span class="nb">cd</span> <span class="s2">"</span><span class="nv">$1</span><span class="s2">"</span>; <span class="o">}</span>        <span class="c"># mcd:          Makes new Dir and jumps inside</span>
trash <span class="o">()</span> <span class="o">{</span> <span class="nb">command </span>mv <span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span> ~/.Trash ; <span class="o">}</span>     <span class="c"># trash:        Moves a file to the MacOS trash</span>
ql <span class="o">()</span> <span class="o">{</span> qlmanage -p <span class="s2">"</span><span class="nv">$*</span><span class="s2">"</span> &gt;&amp; /dev/null; <span class="o">}</span>    <span class="c"># ql:           Opens any file in MacOS Quicklook Preview</span>
<span class="nb">alias </span><span class="nv">DT</span><span class="o">=</span><span class="s1">'tee ~/Desktop/terminalOut.txt'</span>    <span class="c"># DT:           Pipe content to file on MacOS Desktop</span>

<span class="c">#   lr:  Full Recursive Directory Listing</span>
<span class="c">#   ------------------------------------------</span>
<span class="nb">alias </span><span class="nv">lr</span><span class="o">=</span><span class="s1">'ls -R | grep ":$" | sed -e '</span><span class="se">\'</span><span class="s1">'s/:$//'</span><span class="se">\'</span><span class="s1">' -e '</span><span class="se">\'</span><span class="s1">'s/[^-][^\/]*\//--/g'</span><span class="se">\'</span><span class="s1">' -e '</span><span class="se">\'</span><span class="s1">'s/^/   /'</span><span class="se">\'</span><span class="s1">' -e '</span><span class="se">\'</span><span class="s1">'s/-/|/'</span><span class="se">\'</span><span class="s1">' | less'</span>

<span class="c">#   mans:   Search manpage given in agument '1' for term given in argument '2' (case insensitive)</span>
<span class="c">#           displays paginated result with colored search terms and two lines surrounding each hit.            Example: mans mplayer codec</span>
<span class="c">#   --------------------------------------------------------------------</span>
    mans <span class="o">()</span> <span class="o">{</span>
        man <span class="nv">$1</span> | grep -iC2 --color<span class="o">=</span>always <span class="nv">$2</span> | less
    <span class="o">}</span>

<span class="c">#   showa: to remind yourself of an alias (given some part of it)</span>
<span class="c">#   ------------------------------------------------------------</span>
    showa <span class="o">()</span> <span class="o">{</span> /usr/bin/grep --color<span class="o">=</span>always -i -a1 <span class="nv">$@</span> ~/Library/init/bash/aliases.bash | grep -v <span class="s1">'^\s*$'</span> | less -FSRXc ; <span class="o">}</span>


<span class="c">#   -------------------------------</span>
<span class="c">#   3. FILE AND FOLDER MANAGEMENT</span>
<span class="c">#   -------------------------------</span>

zipf <span class="o">()</span> <span class="o">{</span> zip -r <span class="s2">"</span><span class="nv">$1</span><span class="s2">"</span>.zip <span class="s2">"</span><span class="nv">$1</span><span class="s2">"</span> ; <span class="o">}</span>          <span class="c"># zipf:         To create a ZIP archive of a folder</span>
<span class="nb">alias </span><span class="nv">numFiles</span><span class="o">=</span><span class="s1">'echo $(ls -1 | wc -l)'</span>      <span class="c"># numFiles:     Count of non-hidden files in current dir</span>
<span class="nb">alias </span><span class="nv">make1mb</span><span class="o">=</span><span class="s1">'mkfile 1m ./1MB.dat'</span>         <span class="c"># make1mb:      Creates a file of 1mb size (all zeros)</span>
<span class="nb">alias </span><span class="nv">make5mb</span><span class="o">=</span><span class="s1">'mkfile 5m ./5MB.dat'</span>         <span class="c"># make5mb:      Creates a file of 5mb size (all zeros)</span>
<span class="nb">alias </span><span class="nv">make10mb</span><span class="o">=</span><span class="s1">'mkfile 10m ./10MB.dat'</span>      <span class="c"># make10mb:     Creates a file of 10mb size (all zeros)</span>

<span class="c">#   cdf:  'Cd's to frontmost window of MacOS Finder</span>
<span class="c">#   ------------------------------------------------------</span>
    cdf <span class="o">()</span> <span class="o">{</span>
        <span class="nv">currFolderPath</span><span class="o">=</span><span class="k">$(</span> /usr/bin/osascript <span class="sh">&lt;&lt;EOT
            tell application "Finder"
                try
            set currFolder to (folder of the front window as alias)
                on error
            set currFolder to (path to desktop folder as alias)
                end try
                POSIX path of currFolder
            end tell
EOT
</span>        <span class="k">)</span>
        <span class="nb">echo</span> <span class="s2">"cd to </span><span class="se">\"</span><span class="nv">$currFolderPath</span><span class="se">\"</span><span class="s2">"</span>
        <span class="nb">cd</span> <span class="s2">"</span><span class="nv">$currFolderPath</span><span class="s2">"</span>
    <span class="o">}</span>

<span class="c">#   extract:  Extract most know archives with one command</span>
<span class="c">#   ---------------------------------------------------------</span>
    extract <span class="o">()</span> <span class="o">{</span>
        <span class="k">if</span> <span class="o">[</span> -f <span class="nv">$1</span> <span class="o">]</span> ; <span class="k">then
          case</span> <span class="nv">$1</span> <span class="k">in</span>
            <span class="k">*</span>.tar.bz2<span class="p">)</span>   tar xjf <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.tar.gz<span class="p">)</span>    tar xzf <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.bz2<span class="p">)</span>       bunzip2 <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.rar<span class="p">)</span>       unrar e <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.gz<span class="p">)</span>        gunzip <span class="nv">$1</span>      <span class="p">;;</span>
            <span class="k">*</span>.tar<span class="p">)</span>       tar xf <span class="nv">$1</span>      <span class="p">;;</span>
            <span class="k">*</span>.tbz2<span class="p">)</span>      tar xjf <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.tgz<span class="p">)</span>       tar xzf <span class="nv">$1</span>     <span class="p">;;</span>
            <span class="k">*</span>.zip<span class="p">)</span>       unzip <span class="nv">$1</span>       <span class="p">;;</span>
            <span class="k">*</span>.Z<span class="p">)</span>         uncompress <span class="nv">$1</span>  <span class="p">;;</span>
            <span class="k">*</span>.7z<span class="p">)</span>        7z x <span class="nv">$1</span>        <span class="p">;;</span>
            <span class="k">*</span><span class="p">)</span>     <span class="nb">echo</span> <span class="s2">"'</span><span class="nv">$1</span><span class="s2">' cannot be extracted via extract()"</span> <span class="p">;;</span>
             <span class="k">esac</span>
         <span class="k">else
             </span><span class="nb">echo</span> <span class="s2">"'</span><span class="nv">$1</span><span class="s2">' is not a valid file"</span>
         <span class="k">fi</span>
    <span class="o">}</span>


<span class="c">#   ---------------------------</span>
<span class="c">#   4. SEARCHING</span>
<span class="c">#   ---------------------------</span>

<span class="nb">alias </span><span class="nv">qfind</span><span class="o">=</span><span class="s2">"find . -name "</span>                 <span class="c"># qfind:    Quickly search for file</span>
ff <span class="o">()</span> <span class="o">{</span> /usr/bin/find . -name <span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span> ; <span class="o">}</span>      <span class="c"># ff:       Find file under the current directory</span>
ffs <span class="o">()</span> <span class="o">{</span> /usr/bin/find . -name <span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span><span class="s1">'*'</span> ; <span class="o">}</span>  <span class="c"># ffs:      Find file whose name starts with a given string</span>
ffe <span class="o">()</span> <span class="o">{</span> /usr/bin/find . -name <span class="s1">'*'</span><span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span> ; <span class="o">}</span>  <span class="c"># ffe:      Find file whose name ends with a given string</span>

<span class="c">#   spotlight: Search for a file using MacOS Spotlight's metadata</span>
<span class="c">#   -----------------------------------------------------------</span>
    spotlight <span class="o">()</span> <span class="o">{</span> mdfind <span class="s2">"kMDItemDisplayName == '</span><span class="nv">$@</span><span class="s2">'wc"</span>; <span class="o">}</span>


<span class="c">#   ---------------------------</span>
<span class="c">#   5. PROCESS MANAGEMENT</span>
<span class="c">#   ---------------------------</span>

<span class="c">#   findPid: find out the pid of a specified process</span>
<span class="c">#   -----------------------------------------------------</span>
<span class="c">#       Note that the command name can be specified via a regex</span>
<span class="c">#       E.g. findPid '/d$/' finds pids of all processes with names ending in 'd'</span>
<span class="c">#       Without the 'sudo' it will only find processes of the current user</span>
<span class="c">#   -----------------------------------------------------</span>
    findPid <span class="o">()</span> <span class="o">{</span> lsof -t -c <span class="s2">"</span><span class="nv">$@</span><span class="s2">"</span> ; <span class="o">}</span>

<span class="c">#   memHogsTop, memHogsPs:  Find memory hogs</span>
<span class="c">#   -----------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">memHogsTop</span><span class="o">=</span><span class="s1">'top -l 1 -o rsize | head -20'</span>
    <span class="nb">alias </span><span class="nv">memHogsPs</span><span class="o">=</span><span class="s1">'ps wwaxm -o pid,stat,vsize,rss,time,command | head -10'</span>

<span class="c">#   cpuHogs:  Find CPU hogs</span>
<span class="c">#   -----------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">cpu_hogs</span><span class="o">=</span><span class="s1">'ps wwaxr -o pid,stat,%cpu,time,command | head -10'</span>

<span class="c">#   topForever:  Continual 'top' listing (every 10 seconds)</span>
<span class="c">#   -----------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">topForever</span><span class="o">=</span><span class="s1">'top -l 9999999 -s 10 -o cpu'</span>

<span class="c">#   ttop:  Recommended 'top' invocation to minimize resources</span>
<span class="c">#   ------------------------------------------------------------</span>
<span class="c">#       Taken from this macosxhints article</span>
<span class="c">#       http://www.macosxhints.com/article.php?story=20060816123853639</span>
<span class="c">#   ------------------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">ttop</span><span class="o">=</span><span class="s2">"top -R -F -s 10 -o rsize"</span>

<span class="c">#   my_ps: List processes owned by my user:</span>
<span class="c">#   ------------------------------------------------------------</span>
    my_ps<span class="o">()</span> <span class="o">{</span> ps <span class="nv">$@</span> -u <span class="nv">$USER</span> -o pid,%cpu,%mem,start,time,bsdtime,command ; <span class="o">}</span>


<span class="c">#   ---------------------------</span>
<span class="c">#   6. NETWORKING</span>
<span class="c">#   ---------------------------</span>

<span class="nb">alias </span><span class="nv">myip</span><span class="o">=</span><span class="s1">'curl ip.appspot.com'</span>                    <span class="c"># myip:         Public facing IP Address</span>
<span class="nb">alias </span><span class="nv">netCons</span><span class="o">=</span><span class="s1">'lsof -i'</span>                             <span class="c"># netCons:      Show all open TCP/IP sockets</span>
<span class="nb">alias </span><span class="nv">flushDNS</span><span class="o">=</span><span class="s1">'dscacheutil -flushcache'</span>            <span class="c"># flushDNS:     Flush out the DNS Cache</span>
<span class="nb">alias </span><span class="nv">lsock</span><span class="o">=</span><span class="s1">'sudo /usr/sbin/lsof -i -P'</span>             <span class="c"># lsock:        Display open sockets</span>
<span class="nb">alias </span><span class="nv">lsockU</span><span class="o">=</span><span class="s1">'sudo /usr/sbin/lsof -nP | grep UDP'</span>   <span class="c"># lsockU:       Display only open UDP sockets</span>
<span class="nb">alias </span><span class="nv">lsockT</span><span class="o">=</span><span class="s1">'sudo /usr/sbin/lsof -nP | grep TCP'</span>   <span class="c"># lsockT:       Display only open TCP sockets</span>
<span class="nb">alias </span><span class="nv">ipInfo0</span><span class="o">=</span><span class="s1">'ipconfig getpacket en0'</span>              <span class="c"># ipInfo0:      Get info on connections for en0</span>
<span class="nb">alias </span><span class="nv">ipInfo1</span><span class="o">=</span><span class="s1">'ipconfig getpacket en1'</span>              <span class="c"># ipInfo1:      Get info on connections for en1</span>
<span class="nb">alias </span><span class="nv">openPorts</span><span class="o">=</span><span class="s1">'sudo lsof -i | grep LISTEN'</span>        <span class="c"># openPorts:    All listening connections</span>
<span class="nb">alias </span><span class="nv">showBlocked</span><span class="o">=</span><span class="s1">'sudo ipfw list'</span>                  <span class="c"># showBlocked:  All ipfw rules inc/ blocked IPs</span>

<span class="c">#   ii:  display useful host related informaton</span>
<span class="c">#   -------------------------------------------------------------------</span>
    ii<span class="o">()</span> <span class="o">{</span>
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="s2">You are logged on </span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="nv">$HOST</span><span class="s2">"</span>
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="s2">Additionnal information:</span><span class="nv">$NC</span><span class="s2"> "</span> ; uname -a
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="s2">Users logged on:</span><span class="nv">$NC</span><span class="s2"> "</span> ; w -h
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="s2">Current date :</span><span class="nv">$NC</span><span class="s2"> "</span> ; date
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="s2">Machine stats :</span><span class="nv">$NC</span><span class="s2"> "</span> ; uptime
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="s2">Current network location :</span><span class="nv">$NC</span><span class="s2"> "</span> ; scselect
        <span class="nb">echo</span> -e <span class="s2">"</span><span class="se">\n</span><span class="k">${</span><span class="nv">RED</span><span class="k">}</span><span class="s2">Public facing IP Address :</span><span class="nv">$NC</span><span class="s2"> "</span> ;myip
        <span class="c">#echo -e "\n${RED}DNS Configuration:$NC " ; scutil --dns</span>
        <span class="nb">echo</span>
    <span class="o">}</span>


<span class="c">#   ---------------------------------------</span>
<span class="c">#   7. SYSTEMS OPERATIONS &amp; INFORMATION</span>
<span class="c">#   ---------------------------------------</span>

<span class="nb">alias </span><span class="nv">mountReadWrite</span><span class="o">=</span><span class="s1">'/sbin/mount -uw /'</span>    <span class="c"># mountReadWrite:   For use when booted into single-user</span>

<span class="c">#   cleanupDS:  Recursively delete .DS_Store files</span>
<span class="c">#   -------------------------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">cleanupDS</span><span class="o">=</span><span class="s2">"find . -type f -name '*.DS_Store' -ls -delete"</span>

<span class="c">#   finderShowHidden:   Show hidden files in Finder</span>
<span class="c">#   finderHideHidden:   Hide hidden files in Finder</span>
<span class="c">#   -------------------------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">finderShowHidden</span><span class="o">=</span><span class="s1">'defaults write com.apple.finder ShowAllFiles TRUE'</span>
    <span class="nb">alias </span><span class="nv">finderHideHidden</span><span class="o">=</span><span class="s1">'defaults write com.apple.finder ShowAllFiles FALSE'</span>

<span class="c">#   cleanupLS:  Clean up LaunchServices to remove duplicates in the "Open With" menu</span>
<span class="c">#   -----------------------------------------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">cleanupLS</span><span class="o">=</span><span class="s2">"/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user &amp;&amp; killall Finder"</span>

<span class="c">#    screensaverDesktop: Run a screensaver on the Desktop</span>
<span class="c">#   -----------------------------------------------------------------------------------</span>
    <span class="nb">alias </span><span class="nv">screensaverDesktop</span><span class="o">=</span><span class="s1">'/System/Library/Frameworks/ScreenSaver.framework/Resources/ScreenSaverEngine.app/Contents/MacOS/ScreenSaverEngine -background'</span>

<span class="c">#   ---------------------------------------</span>
<span class="c">#   8. WEB DEVELOPMENT</span>
<span class="c">#   ---------------------------------------</span>

<span class="nb">alias </span><span class="nv">apacheEdit</span><span class="o">=</span><span class="s1">'sudo edit /etc/httpd/httpd.conf'</span>      <span class="c"># apacheEdit:       Edit httpd.conf</span>
<span class="nb">alias </span><span class="nv">apacheRestart</span><span class="o">=</span><span class="s1">'sudo apachectl graceful'</span>           <span class="c"># apacheRestart:    Restart Apache</span>
<span class="nb">alias </span><span class="nv">editHosts</span><span class="o">=</span><span class="s1">'sudo edit /etc/hosts'</span>                  <span class="c"># editHosts:        Edit /etc/hosts file</span>
<span class="nb">alias </span><span class="nv">herr</span><span class="o">=</span><span class="s1">'tail /var/log/httpd/error_log'</span>              <span class="c"># herr:             Tails HTTP error logs</span>
<span class="nb">alias </span><span class="nv">apacheLogs</span><span class="o">=</span><span class="s2">"less +F /var/log/apache2/error_log"</span>   <span class="c"># Apachelogs:   Shows apache error logs</span>
httpHeaders <span class="o">()</span> <span class="o">{</span> /usr/bin/curl -I -L <span class="nv">$@</span> ; <span class="o">}</span>             <span class="c"># httpHeaders:      Grabs headers from web page</span>

<span class="c">#   httpDebug:  Download a web page and show info on what took time</span>
<span class="c">#   -------------------------------------------------------------------</span>
    httpDebug <span class="o">()</span> <span class="o">{</span> /usr/bin/curl <span class="nv">$@</span> -o /dev/null -w <span class="s2">"dns: %{time_namelookup} connect: %{time_connect} pretransfer: %{time_pretransfer} starttransfer: %{time_starttransfer} total: %{time_total}</span><span class="se">\n</span><span class="s2">"</span> ; <span class="o">}</span>


<span class="c">#   ---------------------------------------</span>
<span class="c">#   9. REMINDERS &amp; NOTES</span>
<span class="c">#   ---------------------------------------</span>

<span class="c">#   remove_disk: spin down unneeded disk</span>
<span class="c">#   ---------------------------------------</span>
<span class="c">#   diskutil eject /dev/disk1s3</span>

<span class="c">#   to change the password on an encrypted disk image:</span>
<span class="c">#   ---------------------------------------</span>
<span class="c">#   hdiutil chpass /path/to/the/diskimage</span>

<span class="c">#   to mount a read-only disk image as read-write:</span>
<span class="c">#   ---------------------------------------</span>
<span class="c">#   hdiutil attach example.dmg -shadow /tmp/example.shadow -noverify</span>

<span class="c">#   mounting a removable drive (of type msdos or hfs)</span>
<span class="c">#   ---------------------------------------</span>
<span class="c">#   mkdir /Volumes/Foo</span>
<span class="c">#   ls /dev/disk*   to find out the device to use in the mount command)</span>
<span class="c">#   mount -t msdos /dev/disk1s1 /Volumes/Foo</span>
<span class="c">#   mount -t hfs /dev/disk1s1 /Volumes/Foo</span>

<span class="c">#   to create a file of a given size: /usr/sbin/mkfile or /usr/bin/hdiutil</span>
<span class="c">#   ---------------------------------------</span>
<span class="c">#   e.g.: mkfile 10m 10MB.dat</span>
<span class="c">#   e.g.: hdiutil create -size 10m 10MB.dmg</span>
<span class="c">#   the above create files that are almost all zeros - if random bytes are desired</span>
<span class="c">#   then use: ~/Dev/Perl/randBytes 1048576 &gt; 10MB.dat</span>
</code></pre></div>
  </div>
</template>

<script>
export default {
  name: 'bash'
}
</script>

<style lang="css">
</style>

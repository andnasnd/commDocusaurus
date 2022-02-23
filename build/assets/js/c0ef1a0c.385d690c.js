"use strict";(self.webpackChunkcomm_docs=self.webpackChunkcomm_docs||[]).push([[290],{8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),l=n(7294),o=n(2389),i=n(9443);var r=function(){var e=(0,l.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),d=n(6010),u="tabItem_vU9c";function p(e){var t,n,a,o=e.lazy,i=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,k=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:k.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),g=(0,s.lx)(v,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var f=null===p?p:null!=(t=null!=p?p:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=k[0])?void 0:a.props.value;if(null!==f&&!v.some((function(e){return e.value===f})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=r(),N=b.tabGroupChoices,w=b.setTabGroupChoices,y=(0,l.useState)(f),A=y[0],C=y[1],x=[],D=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=N[m];null!=S&&S!==A&&v.some((function(e){return e.value===S}))&&C(S)}var T=function(e){var t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==A&&(D(t),C(a),null!=m&&w(m,a))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;n=x[l]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},h)},v.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:A===t?0:-1,"aria-selected":A===t,className:(0,d.Z)("tabs__item",u,{"tabs__item--active":A===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:T,onClick:T},null!=n?n:t)}))),o?(0,l.cloneElement)(k.filter((function(e){return e.props.value===A}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==A})}))))}function c(e){var t=(0,o.Z)();return l.createElement(p,(0,a.Z)({key:String(t)},e))}},3775:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),i=n(6396),r=n(8215),s=["components"],d={sidebar_position:1},u="Prerequisites",p={unversionedId:"dev_environment_mac/prerequisites",id:"dev_environment_mac/prerequisites",isDocsHomePage:!1,title:"Prerequisites",description:"Xcode",source:"@site/docs/dev_environment_mac/prerequisites.md",sourceDirName:"dev_environment_mac",slug:"/dev_environment_mac/prerequisites",permalink:"/dev_environment_mac/prerequisites",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/"},next:{title:"Configuration",permalink:"/dev_environment_mac/configuration"}},c=[{value:"Xcode",id:"xcode",children:[],level:2},{value:"Homebrew",id:"homebrew",children:[],level:2},{value:"Node",id:"node",children:[],level:2},{value:"PHP",id:"php",children:[],level:2},{value:"Rust",id:"rust",children:[],level:2},{value:"Yarn",id:"yarn",children:[],level:2},{value:"Watchman",id:"watchman",children:[],level:2},{value:"Node Version Manager",id:"node-version-manager",children:[],level:2},{value:"MySQL",id:"mysql",children:[],level:2},{value:"Redis",id:"redis",children:[],level:2},{value:"CocoaPods",id:"cocoapods",children:[],level:2},{value:"Reactotron",id:"reactotron",children:[],level:2},{value:"React Dev Tools Chrome extension",id:"react-dev-tools-chrome-extension",children:[],level:2},{value:"Redux Dev Tools Chrome extension",id:"redux-dev-tools-chrome-extension",children:[],level:2},{value:"JDK",id:"jdk",children:[],level:2},{value:"Android Studio",id:"android-studio",children:[{value:"Android SDK",id:"android-sdk",children:[],level:3},{value:"Enable Android CLI commands",id:"enable-android-cli-commands",children:[],level:3}],level:2},{value:"Flipper",id:"flipper",children:[{value:"Flipper settings",id:"flipper-settings",children:[],level:3},{value:"Flipper plugins",id:"flipper-plugins",children:[],level:3}],level:2},{value:"idb",id:"idb",children:[{value:"Codegen for gRPC",id:"codegen-for-grpc",children:[],level:3}],level:2},{value:"Arcanist",id:"arcanist",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"prerequisites"},"Prerequisites"),(0,o.kt)(i.Z,{groupId:"chipset",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"silicon",label:"Apple silicon",mdxType:"TabItem"}),(0,o.kt)(r.Z,{value:"x86-64",label:"Intel x86-64",mdxType:"TabItem"})),(0,o.kt)("h2",{id:"xcode"},"Xcode"),(0,o.kt)("p",null,"Go to the ",(0,o.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835"},"Mac App Store")," to install Xcode, or if you already have it, to update it to the latest version."),(0,o.kt)("p",null,"Once Xcode is installed, open it up. If you are prompted, follow the instructions to install any \u201cAdditional Required Components\u201d."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  Make sure that the Xcode \u201cCommand Line Tools\u201d are installed. You can do this by running:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"xcode-select --install\n")))),(0,o.kt)("h2",{id:"homebrew"},"Homebrew"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),", a package manager for macOS."),(0,o.kt)("h2",{id:"node"},"Node"),(0,o.kt)("p",null,"Next, install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node")," using Homebrew. We\u2019re going to use version 16 to avoid some possible issues that come up on Apple silicon when we install project dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install node@16; brew upgrade node@16\n")),(0,o.kt)("p",null,"The reason we use both ",(0,o.kt)("inlineCode",{parentName:"p"},"install")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"upgrade")," is that there\u2019s no single Homebrew command equivalent to \u201cinstall if not installed, and upgrade if already installed\u201d."),(0,o.kt)("h2",{id:"php"},"PHP"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.php.net"},"PHP")," is needed for Arcanist. As of macOS 12 (Monterey), PHP is no longer bundled with the OS and needs to be installed via Homebrew."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install php@7.4; brew upgrade php@7.4\n")),(0,o.kt)("h2",{id:"rust"},"Rust"),(0,o.kt)("p",null,"We use a Rust ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/novifinancial/opaque-ke"},"implementation")," of the OPAQUE password-authenticated key exchange protocol, so you will need to install Rust to compile the static library. The easiest way to do this is with ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,o.kt)("h2",{id:"yarn"},"Yarn"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," package manager for JavaScript in our repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install yarn; brew upgrade yarn\n")),(0,o.kt)("h2",{id:"watchman"},"Watchman"),(0,o.kt)("p",null,"Watchman is a tool from Facebook used in the React Native dev environment to watch for changes to your filesystem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install watchman; brew upgrade watchman\n")),(0,o.kt)("h2",{id:"node-version-manager"},"Node Version Manager"),(0,o.kt)("p",null,"Node Version Manager (nvm) is a tool that ensures we use the same version of Node on our server between prod and dev environments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install nvm; brew upgrade nvm\n")),(0,o.kt)("p",null,"After installing, Homebrew will print out some instructions under the Caveats section of its output. It will ask you to do two things: ",(0,o.kt)("inlineCode",{parentName:"p"},"mkdir ~/.nvm"),", and to add some lines to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," (or desired shell configuration file). We recommend that you append ",(0,o.kt)("inlineCode",{parentName:"p"},"--no-use")," to the line that loads nvm, so that you continue to use your Homebrew-sourced Node distribution by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export NVM_DIR="$HOME/.nvm"\n[ -s "/usr/local/opt/nvm/nvm.sh" ] && . "/usr/local/opt/nvm/nvm.sh" --no-use # This loads nvm\n[ -s "/usr/local/opt/nvm/etc/bash_completion.d/nvm" ] && . "/usr/local/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion\n')),(0,o.kt)("p",null,"Now either close and reopen your terminal window or re-source your shell configuration file in order to load nvm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.bash_profile\n")),(0,o.kt)("h2",{id:"mysql"},"MySQL"),(0,o.kt)("p",null,"For now we\u2019re using MySQL 5.7 as the primary server-side database. Hopefully we\u2019ll change this soon, but for now, install MySQL 5.7 using Homebrew."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install mysql@5.7; brew upgrade mysql@5.7\n")),(0,o.kt)("p",null,"Next we\u2019ll configure MySQL to start when your computer boots using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew services"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap homebrew/services\nbrew services start mysql@5.7\n")),(0,o.kt)("p",null,"We\u2019ll also want to link MySQL so that you can run CLI commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew link mysql@5.7 --force\n")),(0,o.kt)("p",null,"Finally, you should set up a root password for your local MySQL instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"mysqladmin -u root password\n")),(0,o.kt)("h2",{id:"redis"},"Redis"),(0,o.kt)("p",null,"We use Redis on the server side as a message broker."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install redis; brew upgrade redis\n")),(0,o.kt)("p",null,"We\u2019ll set it up to start on boot with ",(0,o.kt)("inlineCode",{parentName:"p"},"brew services"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew services start redis\n")),(0,o.kt)("h2",{id:"cocoapods"},"CocoaPods"),(0,o.kt)("p",null,"CocoaPods is a dependency management system for iOS development. React Native uses it to manage native modules."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install cocoapods; brew upgrade cocoapods\n")),(0,o.kt)("h2",{id:"reactotron"},"Reactotron"),(0,o.kt)("p",null,"Reactotron is an event tracker and logger that can be used to aid in debugging on React Native."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew install reactotron; brew upgrade reactotron\n")),(0,o.kt)("h2",{id:"react-dev-tools-chrome-extension"},"React Dev Tools Chrome extension"),(0,o.kt)("p",null,"The React Dev Tools Chrome extension lets you inspect the React component tree for web applications in Chrome. You can install it by navigating ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"},"here")," on Chrome."),(0,o.kt)("h2",{id:"redux-dev-tools-chrome-extension"},"Redux Dev Tools Chrome extension"),(0,o.kt)("p",null,"The Redux Dev Tools Chrome extension lets you watch for Redux actions and inspect the Redux store state, both for web applications in Chrome, but also for our native applications using the \u201cRemote DevTools\u201d functionality. To install it, navigate ",(0,o.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"},"here")," on Chrome."),(0,o.kt)("h2",{id:"jdk"},"JDK"),(0,o.kt)("p",null,"We\u2019ll need the Java Development Kit (JDK) for Android development. We\u2019re using ",(0,o.kt)("a",{parentName:"p",href:"https://sdkman.io/"},"SDKMAN!")," to manage our JDK installation."),(0,o.kt)("p",null,"Run the following to install SDKMAN!:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl -s "https://get.sdkman.io" | bash\n')),(0,o.kt)("p",null,"Now either close and reopen your terminal window or re-source your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," (or desired shell configuration file) in order to load SDKMAN!:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.bash_profile\n")),(0,o.kt)("p",null,"You can run ",(0,o.kt)("inlineCode",{parentName:"p"},"sdk version")," to see if SDKMAN! was installed properly."),(0,o.kt)("p",null,"Run the following to install Azul Zulu 11 with SDKMAN!:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sdk install java 11.0.13-zulu\n")),(0,o.kt)("p",null,"SDKMAN! takes care of setting up the ",(0,o.kt)("inlineCode",{parentName:"p"},"$JAVA_HOME")," environment variable to point to the newly installed JDK. You can verify this by running ",(0,o.kt)("inlineCode",{parentName:"p"},"echo $JAVA_HOME"),"."),(0,o.kt)("h2",{id:"android-studio"},"Android Studio"),(0,o.kt)("p",null,"Start by downloading and installing ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/index.html"},"Android Studio")," for your platform. When prompted to choose an installation type, select \u201cCustom\u201d."),(0,o.kt)("p",null,"You\u2019ll be prompted to select a JDK installation. If your SDKMAN!-sourced JDK doesn\u2019t appear in the dropdown, you can find the absolute path to your installed JDK with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sdk home java 11.0.13-zulu\n")),(0,o.kt)("p",null,"Make sure you check the boxes for the following:"),(0,o.kt)(i.Z,{groupId:"chipset",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"silicon",label:"Apple silicon",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null," Android SDK "),(0,o.kt)("li",null," Android SDK Platform "),(0,o.kt)("li",null," Android Virtual Device "))),(0,o.kt)(r.Z,{value:"x86-64",label:"Intel x86-64",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null," Android SDK "),(0,o.kt)("li",null," Android SDK Platform "),(0,o.kt)("li",null," Performance (Intel \xae HAXM) "),(0,o.kt)("li",null," Android Virtual Device ")))),(0,o.kt)("h3",{id:"android-sdk"},"Android SDK"),(0,o.kt)("p",null,"Android Studio installs the latest Android SDK by default, but since React Native uses the Android 11 SDK specifically, we\u2019ll need to install it using Android Studio\u2019s SDK Manager. You can access the SDK Manager from the \u201cWelcome to Android Studio\u201d screen that pops up when you first open the application, under \u201cConfigure\u201d. If you already have a project open, you can access it from Tools \u2192 SDK Manager."),(0,o.kt)("p",null,"Once you have the SDK Manager open, select the \u201cSDK Platforms\u201d tab, and then check the box for \u201cShow Package Details\u201d. Now expand the \u201cAndroid 11 (R)\u201d section, and make sure the following subsections are checked:"),(0,o.kt)(i.Z,{groupId:"chipset",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"silicon",label:"Apple silicon",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null," Android SDK Platform 30 "),(0,o.kt)("li",null," Google Play ARM 64 v8a System Image "))),(0,o.kt)(r.Z,{value:"x86-64",label:"Intel x86-64",mdxType:"TabItem"},(0,o.kt)("ul",null,(0,o.kt)("li",null," Android SDK Platform 30 "),(0,o.kt)("li",null," Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image ")))),(0,o.kt)("p",null,"Next, select the \u201cSDK Tools\u201d tab, and check the box for \u201cShow Package Details\u201d. Refer to ",(0,o.kt)("inlineCode",{parentName:"p"},"native/android/build.gradle")," for specific tool versions and install the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android SDK Build-Tools"),(0,o.kt)("li",{parentName:"ul"},"NDK"),(0,o.kt)("li",{parentName:"ul"},"CMake version 3.10.2")),(0,o.kt)("p",null,"To finish the SDK Manager step, click \u201cApply\u201d to download and install everything you\u2019ve selected."),(0,o.kt)("h3",{id:"enable-android-cli-commands"},"Enable Android CLI commands"),(0,o.kt)("p",null,"You\u2019ll need to append the following lines to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," (or desired shell configuration file) in order for React Native to be able to build your Android project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export ANDROID_HOME=$HOME/Library/Android/sdk\nexport PATH=$PATH:$ANDROID_HOME/emulator\nexport PATH=$PATH:$ANDROID_HOME/tools\nexport PATH=$PATH:$ANDROID_HOME/tools/bin\nexport PATH=$PATH:$ANDROID_HOME/platform-tools\n")),(0,o.kt)("p",null,"Now either close and reopen your terminal window or re-source your shell configuration file in order to run the new commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source ~/.bash_profile\n")),(0,o.kt)("h2",{id:"flipper"},"Flipper"),(0,o.kt)("p",null,"Flipper is a debugging tool for mobile applications from Facebook. We use it for JavaScript debugging using the Hermes runtime, and also use several plugins such as the React Dev Tools. You can download the latest version of Flipper for MacOS ",(0,o.kt)("a",{parentName:"p",href:"https://www.facebook.com/fbflipper/public/mac"},"here"),"."),(0,o.kt)("h3",{id:"flipper-settings"},"Flipper settings"),(0,o.kt)("p",null,"After opening Flipper, click the gear icon in the bottom left and navigate to \u201cSettings\u201d."),(0,o.kt)("p",null,"Let\u2019s set the Android SDK path. To find the path, open Android Studio and navigate to Preferences \u2192 Appearance & Behavior \u2192 System Settings \u2192 Android SDK. The explicit path of your Android SDK is defined in \u201cAndroid SDK Location\u201d. Use this path in Flipper Settings as the \u201cAndroid SDK Location\u201d."),(0,o.kt)("p",null,"Also, enable the option for \u201cReact Native keyboard shortcuts\u201d below."),(0,o.kt)("h3",{id:"flipper-plugins"},"Flipper plugins"),(0,o.kt)("p",null,"Flipper has a plugin system that allows teams to integrate additional debugging tools into Flipper. We currently only use one plugin, which is for monitoring Redux state."),(0,o.kt)("p",null,"To install it, open Flipper and go to View \u2192 Manage Plugins. Type in \u201credux-debugger\u201c and install the Flipper plugin with that name."),(0,o.kt)("h2",{id:"idb"},"idb"),(0,o.kt)("p",null,"Flipper relies on Facebook\u2019s idb tool to debug iOS apps running on your device. We\u2019ll need to install it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"brew tap facebook/fb\nbrew install idb-companion\npip3 install --user --upgrade fb-idb\n")),(0,o.kt)("p",null,"Since we run ",(0,o.kt)("inlineCode",{parentName:"p"},"pip3 install")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--user")," instead of running it with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"idb")," executable gets installed in your userdir. For me, running MacOS with Python 3.9, it got installed in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/Library/Python/3.9/bin/idb"),". For Flipper to be able to talk to ",(0,o.kt)("inlineCode",{parentName:"p"},"idb"),", you\u2019ll need to set the IDB Binary Location in the Flipper Settings."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  If you have trouble getting Flipper to work with a physical iOS device, it may be due to Python weirdness. The above steps have been tested with Python 3.9 sourced from Homebrew. Let @ashoat know if you have any trouble!"))),(0,o.kt)("h3",{id:"codegen-for-grpc"},"Codegen for gRPC"),(0,o.kt)("p",null,"gRPC is a framework from Google for writing services. As a developer, you define your service\u2019s API using Protobufs, and gRPC handles the networking and basic infrastructure for you."),(0,o.kt)("p",null,"The codegen for gRPC takes files written in the ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/proto3"},"protocol buffers language")," as input and outputs C++ code that enables a developer to create a client and a server that use gRPC for communication."),(0,o.kt)("p",null,"Because of C++ build dependencies, this could not be bundled as an npm package. ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," also fails to install the required version so if you want to generate files in your local environment, you have to manually install Protobuf."),(0,o.kt)("p",null,"If you find yourself needing to modify the Protobuf schema files, you\u2019ll need to set up the tools to run the codegen. Follow the steps below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"brew install autoconf automake libtool curl make unzip")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.8/protobuf-cpp-3.15.8.tar.gz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tar xfzv protobuf-cpp-3.15.8.tar.gz")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cd protobuf-3.15.8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"./configure")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make check")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"make install"))),(0,o.kt)("p",null,"After installing, you should be able to check the version of Protobuf like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc --version")),(0,o.kt)("p",null,"After installing Protobuf, you will also need to install gRPC using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install grpc"),". This will install the ",(0,o.kt)("inlineCode",{parentName:"p"},"grpc_cpp_plugin")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"protoc")," (the Protobuf compiler), which is necessary for compiling gRPC schemas."),(0,o.kt)("p",null,"Please note that the order is crucial here - you have to first install Protobuf and only then gRPC. This is because otherwise gRPC will install Protobuf automatically from its dependency list, but the version of Protobuf will be incorrect."),(0,o.kt)("h2",{id:"arcanist"},"Arcanist"),(0,o.kt)("p",null,"We use Phabricator for code review. To upload a \u201cdiff\u201d to Phabricator, you\u2019ll need to use a tool called Arcanist."),(0,o.kt)("p",null,"To install Arcanist, we\u2019ll need to clone its Git repository. Pick a place in your filesystem to store it, and then run this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/phacility/arcanist.git\n")),(0,o.kt)("p",null,"Next, you\u2019ll need to add the path ",(0,o.kt)("inlineCode",{parentName:"p"},"./arcanist/bin")," to your ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," (or desired shell configuration file):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:~/src/arcanist/bin\n")),(0,o.kt)("p",null,"Make sure to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/src")," portion of the above with the location of the directory you installed Arcanist in."))}h.isMDXComponent=!0}}]);
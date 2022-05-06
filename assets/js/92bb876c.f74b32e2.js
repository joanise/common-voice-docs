"use strict";(self.webpackChunkcommon_voice_docs=self.webpackChunkcommon_voice_docs||[]).push([[347],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8230:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={},l="Getting Started",s={unversionedId:"getting_started",id:"getting_started",title:"Getting Started",description:"Cloning the Repository",source:"@site/docs/getting_started.md",sourceDirName:".",slug:"/getting_started",permalink:"/common-voice-docs/docs/getting_started",editUrl:"https://github.com/joanise/common-voice-docs/tree/main/docs/getting_started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microsoft Azure",permalink:"/common-voice-docs/docs/azure"},next:{title:"Languages",permalink:"/common-voice-docs/docs/language"}},u={},p=[{value:"Cloning the Repository",id:"cloning-the-repository",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Docker Environment Variables",id:"docker-environment-variables",level:3},{value:"Tasks Environment Variables",id:"tasks-environment-variables",level:2},{value:"Running",id:"running",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"cloning-the-repository"},"Cloning the Repository"),(0,a.kt)("p",null,"Start by cloning the repository and switch to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dev/ilt")," branch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/SamuelLarkin/common-voice.git\ncd common-voice\ngit checkout dev/ilt\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"docker-environment-variables"},"Docker Environment Variables"),(0,a.kt)("p",null,"Common Voice uses a file to set some environment variables that are used by the services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env-local-docker.example .env-local-docker\n")),(0,a.kt)("p",null,"Default values are fine but feel free to changes them."),(0,a.kt)("h2",{id:"tasks-environment-variables"},"Tasks Environment Variables"),(0,a.kt)("p",null,"We've added a new service that does backup.  It needs to know some credentials to access the nextcloud server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env-tasks.example .env-tasks\n")),(0,a.kt)("p",null,"which looks like this"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'WEBDAV_HOSTNAME="nextcloud.nrc-cnrc.gc.ca"\nWEBDAV_LOGIN="LLLLLLLL-LLLL-LLLL-LLLL-LLLLLLLLLLLL"\nWEBDAV_PASSWORD="PPPPP-PPPPP-PPPPP-PPPPP-PPPPP"\n')),(0,a.kt)("p",null,"You need to head to ",(0,a.kt)("a",{parentName:"p",href:"https://nextclould.nrc-cnrc.gc.ca"},"https://nextclould.nrc-cnrc.gc.ca")," and create a token which is your password.\nThen populate the ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBDAV_LOGIN")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"WEBDAV_PASSWORD"),"."),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("p",null,"Finally, start the services.\nNote that we specify a user/group because the stack can write some files/diretories that will be owned by root and you won't be able to delete them later."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'CURRENT_UID=$(id -u):$(id -g) docker-compose --project-name "common-voice" up\n')))}m.isMDXComponent=!0}}]);
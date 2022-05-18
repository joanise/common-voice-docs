"use strict";(self.webpackChunkcommon_voice_docs=self.webpackChunkcommon_voice_docs||[]).push([[688],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},766:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return d}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=["components"],c={},s="Amazon",l={unversionedId:"amazon",id:"amazon",title:"Amazon",description:"EC2",source:"@site/docs/amazon.md",sourceDirName:".",slug:"/amazon",permalink:"/common-voice-docs/docs/amazon",editUrl:"https://github.com/joanise/common-voice-docs/tree/main/docs/amazon.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction to NRC's Common Voice project and fork",permalink:"/common-voice-docs/docs/intro"},next:{title:"Changing the Audio Format",permalink:"/common-voice-docs/docs/audio"}},u={},d=[{value:"EC2",id:"ec2",level:2},{value:"Docker",id:"docker",level:3},{value:"AWS CLI",id:"aws-cli",level:3},{value:"Config",id:"config",level:4},{value:"Misc Commands",id:"misc-commands",level:4},{value:"Running a Docker Image on EC2",id:"running-a-docker-image-on-ec2",level:2},{value:"Amazon Elastic Transcoder",id:"amazon-elastic-transcoder",level:2},{value:"Lambda",id:"lambda",level:2}],p={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"amazon"},"Amazon"),(0,r.kt)("h2",{id:"ec2"},"EC2"),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.cloudbooklet.com/how-to-install-docker-on-ubuntu-22-04/"},"How to Install Docker on Ubuntu 22.04")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt update\nsudo apt upgrade\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt update\nsudo apt-cache policy docker-ce\nsudo apt install docker-ce\nsudo systemctl status docker\nsudo usermod -aG docker ubuntu\n')),(0,r.kt)("h3",{id:"aws-cli"},"AWS CLI"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html"},"Installing or updating the latest version of the AWS CLI")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt install unzip\ncurl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\nunzip awscliv2.zip\nsudo ./aws/install\n')),(0,r.kt)("h4",{id:"config"},"Config"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"},"Configuration and credential file settings"),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws/credentials")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[default]\naws_access_key_id=AKIAIOSFODNN7EXAMPLE\naws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws/config")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[default]\nregion=ca-central-1\noutput=json\n")),(0,r.kt)("h4",{id:"misc-commands"},"Misc Commands"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws s3 ls\n")),(0,r.kt)("h2",{id:"running-a-docker-image-on-ec2"},"Running a Docker Image on EC2"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-container-image.html"},"https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-container-image.html")),(0,r.kt)("h2",{id:"amazon-elastic-transcoder"},"Amazon Elastic Transcoder"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/elastictranscoder/"},"Amazon Elastic Transcoder"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.danillouz.dev/transcoding-audio-with-aws-lambda/"},"Transcoding audio with AWS Lambda"),"\n",(0,r.kt)("a",{parentName:"p",href:"http://sox.sourceforge.net/"},"SoX - Sound eXchange | HomePage"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.stefaanlippens.net/audio_conversion_execution_speed_comparison_of_SoX_FFmpeg_MPlayer/#:~:text=For%2030%20second%20fragments%2C%20FFmpeg,to%20the%20desired%20fragment%20length."},"An audio conversion use case: comparison of execution speed between SoX, FFmpeg and MPlayer")),(0,r.kt)("h2",{id:"lambda"},"Lambda"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/lambda/latest/dg/runtimes-walkthrough.html"},"Tutorial \u2013 Publishing a custom runtime"),": In this tutorial, you create a Lambda function with a custom runtime. You start by including the runtime in the function's deployment package. Then you migrate it to a layer that you manage independently from the function. Finally, you share the runtime layer with the world by updating its resource-based permissions policy.")))}m.isMDXComponent=!0}}]);
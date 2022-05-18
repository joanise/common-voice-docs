"use strict";(self.webpackChunkcommon_voice_docs=self.webpackChunkcommon_voice_docs||[]).push([[468],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(b,i(i({ref:n},p),{},{components:r})):t.createElement(b,i({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1310:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Denoiser",c={unversionedId:"microservices/denoiser",id:"microservices/denoiser",title:"Denoiser",description:"RNNoise",source:"@site/docs/microservices/denoiser.md",sourceDirName:"microservices",slug:"/microservices/denoiser",permalink:"/common-voice-docs/docs/microservices/denoiser",editUrl:"https://github.com/joanise/common-voice-docs/tree/main/docs/microservices/denoiser.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Backup",permalink:"/common-voice-docs/docs/microservices/database"},next:{title:"s3fs-fuse",permalink:"/common-voice-docs/docs/microservices/s3fs"}},p={},u=[{value:"RNNoise",id:"rnnoise",level:2},{value:"Sox",id:"sox",level:2},{value:"Sox",id:"sox-1",level:2}],m={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"denoiser"},"Denoiser"),(0,a.kt)("h2",{id:"rnnoise"},"RNNoise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/xiph/rnnoise"},"xiph / rnnoise - GitHub"),": Recurrent neural network for audio noise reduction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cedrickchee/rnnoise-nodejs"},"rnnoise-nodejs - GitHub"),": Node.js bindings to Xiph's RNNoise denoising C library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shb742/rnnoise_python"},"rnnoise_python - GitHub"),": python wrapper for rnnoise library."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/topics/rnnoise"},"RNNoise Topics - GitHub")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/shiguredo/rnnoise-wasm"},"rnnoise-wasm - GitHub"),": SIMD-accelerated WebAssembly build of RNNoise")),(0,a.kt)("h2",{id:"sox"},"Sox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/sox"},"sox - npm"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/andrewrk/node-sox"},"node-sox - GitHub"),": (unmaintained) node.js interface to the sox audio utility.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://blog.danillouz.dev/transcoding-audio-with-aws-lambda/"},"Transcoding audio with AWS Lambda")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker \\\n  container \\\n    run \\\n      --rm \\\n      -it \\\n      --volume $PWD/mfa/Librispeech:/libri:ro \\\n      --volume $PWD/denoiser/test:/output \\\n      common-voice_denoiser \\\n      rnnoise \\\n        /libri/19/19-198-0023.wav \\\n        /output/19-198-0023.wav\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/awslabs/aws-lambda-cpp"},"aws-lambda-cpp")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws iam create-role --role-name lambda-demo --assume-role-policy-document file://trust-policy.json\naws iam attach-role-policy --role-name lambda-denoiser --policy-arn arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws \\\n  lambda \\\n    create-function \\\n      --function-name denoiser-runtime \\\n      --zip-file fileb://runtime.zip \\\n      --handler function.handler \\\n      --runtime provided \\\n      --role arn:aws:iam::123456789012:role/lambda-role\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"zip runtime.zip bootstrap\naws lambda publish-layer-version --layer-name bash-runtime --zip-file fileb://runtime.zip\naws lambda update-function-configuration --function-name denoiser-runtime  --layers arn:aws:lambda:ca-central-1:194183794986:layer:bash-runtime:1\nzip function.zip function.sh sox\naws lambda update-function-code --function-name denoiser-runtime --zip-file fileb://function.zip\n")),(0,a.kt)("p",null,"From the Docker image, extract"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir tools\ncd tools\ndocker container cp denoise:/usr/local/lib .\ndocker container cp denoise:/usr/local/bin/.libs/rnnoise_demo .\ndocker container cp sox:/usr/sox-14.4.2/bin/sox .\nmv rnnoise_demo rnnoise\nzip -r ../tools.zip .\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws lambda publish-layer-version --layer-name bash-denoise-tools --zip-file fileb://tools.zip\n")),(0,a.kt)("h2",{id:"sox-1"},"Sox"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir tools\ncd tools\nmkdir lib bin\ncd lib\ndocker container cp sox:/opt/lib/libsox.la .\ndocker container cp sox:/opt/lib/libsox.a .\ndocker container cp sox:/usr/lib64/libgsm.so.1.0.12 libgsm.so.1\ncd ..\ncd bin\ndocker container cp sox:/opt/bin/sox .\nzip -r ../tools.zip .\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"aws lambda publish-layer-version --layer-name sox --zip-file fileb://tools.zip\n")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[6183],{18979:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return l}});var s=t(58168),o=t(80045),c=(t(88763),t(15680)),i=t(83407);const n=["components"],r={},d={_frontmatter:r},p=i.A;function l(e){let{components:a}=e,t=(0,o.A)(e,n);return(0,c.mdx)(p,(0,s.A)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,c.mdx)("h1",{id:"getting-started-with-photoshop"},"Getting started with Photoshop"),(0,c.mdx)("p",null,"The first step in accessing the Photoshop API is making sure your organization is provisioned with access to Firefly Services. Once you have confirmed your have access you will need to create a project in the Adobe Developer Console and obtain a set of credentials. Follow the guide below create a project and make your first ",(0,c.mdx)("inlineCode",{parentName:"p"},"Hello World")," call."),(0,c.mdx)("h2",{id:"get-access"},"Get access"),(0,c.mdx)("p",null,"Here are the steps to get started with the Photoshop API."),(0,c.mdx)("h3",{id:"getting-started-from-developer-console"},"Getting started from Developer Console"),(0,c.mdx)("p",null,"After you have confirmed you have access to Firefly Services you will need to create a project in developer console. If you have already obtained a set of credentials you can skip these steps."),(0,c.mdx)("ol",null,(0,c.mdx)("li",{parentName:"ol"},"Go to ",(0,c.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console/home"},"https://developer.adobe.com/console/home")," and ",(0,c.mdx)("strong",{parentName:"li"},"sign in to the Developer Console"),"."),(0,c.mdx)("li",{parentName:"ol"},"Select ",(0,c.mdx)("strong",{parentName:"li"},"Create new project")," under the ",(0,c.mdx)("strong",{parentName:"li"},"Quick start")," section on the middle of your screen:\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"49.375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/5530d/CreateNewProjectConsole.webp 320w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/0c8fb/CreateNewProjectConsole.webp 640w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/94b1e/CreateNewProjectConsole.webp 1280w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/183a8/CreateNewProjectConsole.webp 1411w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/dd4a7/CreateNewProjectConsole.png 320w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/0f09e/CreateNewProjectConsole.png 640w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/bbbf7/CreateNewProjectConsole.png 1280w","/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/8f817/CreateNewProjectConsole.png 1411w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/8f108a9c85f508a21e3522454350e7b3/bbbf7/CreateNewProjectConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("li",{parentName:"ol"},"Choose ",(0,c.mdx)("strong",{parentName:"li"},"Add API"),":\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/5530d/AddAPIConsole.webp 320w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/0c8fb/AddAPIConsole.webp 640w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/94b1e/AddAPIConsole.webp 1280w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/259ac/AddAPIConsole.webp 1349w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/dd4a7/AddAPIConsole.png 320w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/0f09e/AddAPIConsole.png 640w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/bbbf7/AddAPIConsole.png 1280w","/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/d8823/AddAPIConsole.png 1349w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/c597f0b26bdb303b1b6336a79d79ae93/bbbf7/AddAPIConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("li",{parentName:"ol"},"Select the ",(0,c.mdx)("strong",{parentName:"li"},"Photoshop - Firefly and Creative Cloud Automation")," and click on ",(0,c.mdx)("strong",{parentName:"li"},"Next"),":\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1047px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.75%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/5530d/AddAPIConsolePSFF.webp 320w","/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/0c8fb/AddAPIConsolePSFF.webp 640w","/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/74e18/AddAPIConsolePSFF.webp 1047w"],sizes:"(max-width: 1047px) 100vw, 1047px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/dd4a7/AddAPIConsolePSFF.png 320w","/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/0f09e/AddAPIConsolePSFF.png 640w","/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/094ea/AddAPIConsolePSFF.png 1047w"],sizes:"(max-width: 1047px) 100vw, 1047px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/6c797f958c5167e62f6ed541478bc8cd/094ea/AddAPIConsolePSFF.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("li",{parentName:"ol"},"Select ",(0,c.mdx)("strong",{parentName:"li"},"Save configured API"),":\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"43.4375%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/5530d/ServicePrincipalConsole.webp 320w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0c8fb/ServicePrincipalConsole.webp 640w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/94b1e/ServicePrincipalConsole.webp 1280w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0b34d/ServicePrincipalConsole.webp 1920w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/d5269/ServicePrincipalConsole.webp 2560w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/3b2f5/ServicePrincipalConsole.webp 3233w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/dd4a7/ServicePrincipalConsole.png 320w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/0f09e/ServicePrincipalConsole.png 640w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/bbbf7/ServicePrincipalConsole.png 1280w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/ac7a9/ServicePrincipalConsole.png 1920w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/c7a69/ServicePrincipalConsole.png 2560w","/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/2d526/ServicePrincipalConsole.png 3233w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/ec83b4955ba15e8570f20032d74b24fe/bbbf7/ServicePrincipalConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nDefault selection for type of Authentication is made for ",(0,c.mdx)("strong",{parentName:"li"},"OAuth Server-to-Server")," and you should keep it. Service Account(JWT) authentication will be deprecated soon."),(0,c.mdx)("li",{parentName:"ol"},"Repeat step 4 and select ",(0,c.mdx)("strong",{parentName:"li"},"Remove Background - Firefly and Creative Cloud Automation")," and click on ",(0,c.mdx)("strong",{parentName:"li"},"Next"),":\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1048px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.8125%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/5530d/AddAPIConsoleRBFF.webp 320w","/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/0c8fb/AddAPIConsoleRBFF.webp 640w","/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/0e1ad/AddAPIConsoleRBFF.webp 1048w"],sizes:"(max-width: 1048px) 100vw, 1048px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/dd4a7/AddAPIConsoleRBFF.png 320w","/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/0f09e/AddAPIConsoleRBFF.png 640w","/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/f0257/AddAPIConsoleRBFF.png 1048w"],sizes:"(max-width: 1048px) 100vw, 1048px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/a91cc19fa56d1b43f45da83fa510d513/f0257/AddAPIConsoleRBFF.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    "),"\nRepeat step 5"),(0,c.mdx)("li",{parentName:"ol"},"Select ",(0,c.mdx)("strong",{parentName:"li"},"Generate access token"),":\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.43750000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/5530d/GenerateAccessTokenFromConsole.webp 320w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/0c8fb/GenerateAccessTokenFromConsole.webp 640w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/94b1e/GenerateAccessTokenFromConsole.webp 1280w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/5993e/GenerateAccessTokenFromConsole.webp 1415w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/dd4a7/GenerateAccessTokenFromConsole.png 320w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/0f09e/GenerateAccessTokenFromConsole.png 640w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/bbbf7/GenerateAccessTokenFromConsole.png 1280w","/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/49e93/GenerateAccessTokenFromConsole.png 1415w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/7f517318a4fd1a1cd85fdc32058c1da0/bbbf7/GenerateAccessTokenFromConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("li",{parentName:"ol"},"Congratulations! You have just created a token. You can ",(0,c.mdx)("strong",{parentName:"li"},"copy")," the token :\n",(0,c.mdx)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,c.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.5%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,c.mdx)("picture",{parentName:"span"},"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/17eca42c50634b78c8db259887200596/5530d/AccessTokenCurlConsole.webp 320w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0c8fb/AccessTokenCurlConsole.webp 640w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/94b1e/AccessTokenCurlConsole.webp 1280w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0b34d/AccessTokenCurlConsole.webp 1920w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/d5269/AccessTokenCurlConsole.webp 2560w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/68fb3/AccessTokenCurlConsole.webp 2879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,c.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/17eca42c50634b78c8db259887200596/dd4a7/AccessTokenCurlConsole.png 320w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/0f09e/AccessTokenCurlConsole.png 640w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/bbbf7/AccessTokenCurlConsole.png 1280w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/ac7a9/AccessTokenCurlConsole.png 1920w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/c7a69/AccessTokenCurlConsole.png 2560w","/ff-services-docs/static/17eca42c50634b78c8db259887200596/49703/AccessTokenCurlConsole.png 2879w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,c.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/17eca42c50634b78c8db259887200596/bbbf7/AccessTokenCurlConsole.png",alt:"Screenshot",title:"Screenshot",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,c.mdx)("li",{parentName:"ol"},"Once you’ve created your token, you can follow the steps below to make your first API call.",(0,c.mdx)("ul",{parentName:"li"},(0,c.mdx)("li",{parentName:"ul"},"Open your terminal and paste the code below."),(0,c.mdx)("li",{parentName:"ul"},'Replace the variables "YOUR_ACCESS_TOKEN" with the token you generated on Adobe I/O Console.'),(0,c.mdx)("li",{parentName:"ul"},"Replace <YOUR_CLIENT_ID>. You can find this on the same page you generated your token on."),(0,c.mdx)("li",{parentName:"ul"},"Once all variables have been replaced you can run the command.")))),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET \\\n  --url https://image.adobe.io/pie/psdService/hello \\\n  --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" \\\n  --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,c.mdx)("p",null,"If you are using Windows machine don't use the backslash for the curl commands. e.g"),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-shell"},'curl --request GET --url https://image.adobe.io/pie/psdService/hello --header "Authorization: Bearer <YOUR_ACCESS_TOKEN>" --header "x-api-key: <YOUR_CLIENT_ID>"\n')),(0,c.mdx)("p",null,"Congratulations! You just made your first request to the Photoshop API."),(0,c.mdx)("h2",{id:"build-something-cool"},"Build something cool#"),(0,c.mdx)("p",null,"You have now Access Token and Client Id. You can use that to build your application using Photoshop API.\nCheck out this SDK and API Reference for that."),(0,c.mdx)("ul",null,(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("a",{parentName:"li",href:"https://github.com/Firefly-Services"},"Firefly Services SDK")),(0,c.mdx)("li",{parentName:"ul"},(0,c.mdx)("a",{parentName:"li",href:"../api/"},"Photoshop API Reference"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-photoshop-getting-started-index-md-3565e7cd17b178ee48c3.js.map
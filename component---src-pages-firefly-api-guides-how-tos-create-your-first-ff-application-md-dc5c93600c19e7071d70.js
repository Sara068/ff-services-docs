"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[39],{91525:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return f}});var t=a(58168),i=a(80045),o=(a(88763),a(15680)),r=a(83407);const s=["components"],d={},l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",n)},p=l("InlineAlert"),m=l("CodeBlock"),c={_frontmatter:d},u=r.A;function f(e){let{components:n}=e,a=(0,i.A)(e,s);return(0,o.mdx)(u,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-your-first-firefly-api-implementation"},"Create your first Firefly API implementation"),(0,o.mdx)("p",null,"A step-by-step guide to creating your first implementation with the Firefly APIs."),(0,o.mdx)("p",null,"The Adobe Firefly APIs offer a seamless way to integrate powerful creative workflows into your applications using a simple REST-based API. In this tutorial, you'll be guided through creating your first implementation using the ",(0,o.mdx)("a",{parentName:"p",href:"../api/image_generation/V3/"},"Firefly Generate Images API"),"."),(0,o.mdx)(p,{slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This tutorial provides code snippets in both ",(0,o.mdx)("inlineCode",{parentName:"p"},"Node.js")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"Python")," for your convenience. Feel free to use the language of your choice to complete the implementation of your first Firefly API."),(0,o.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.mdx)("p",null,"Before beginning, make sure you have the following:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Firefly API credentials. If you don't have them yet, first visit the Firefly Services ",(0,o.mdx)("a",{parentName:"li",href:"../../../guides/get-started.md"},"Getting Started")," guide to obtain a ",(0,o.mdx)("inlineCode",{parentName:"li"},"client_id")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"client_secret"),"."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"Node.js")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"Python")," installed on your machine and basic familiarity with ",(0,o.mdx)("inlineCode",{parentName:"li"},"JavaScript")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"Python"),".")),(0,o.mdx)("h2",{id:"step-1-set-up-your-environment"},"Step 1: Set Up Your Environment"),(0,o.mdx)("p",null,"Begin by creating a new script, named ",(0,o.mdx)("inlineCode",{parentName:"p"},"firefly.js")," (or ",(0,o.mdx)("inlineCode",{parentName:"p"},"firefly.py"),"), and save it anywhere on your computer. This will be the script used for testing your integration with the Firefly API endpoints."),(0,o.mdx)("p",null,"Next, set your ",(0,o.mdx)("inlineCode",{parentName:"p"},"client_id")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"client_secret")," as environment variables. For example, on a Mac or in Windows Subsystem for Linux (WSL), you can do the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"export CLIENT_ID=YOURIDHERE\nexport CLIENT_SECRET=YOURSECRETHERE\n")),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"This tutorial assumes you have set these variables in uppercase (ie: ",(0,o.mdx)("inlineCode",{parentName:"p"},"CLIENT_ID")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"CLIENT_SECRET"),"), and case matters."),(0,o.mdx)("h2",{id:"step-2-authentication"},"Step 2: Authentication"),(0,o.mdx)("p",null,"Next, you will initialize a few variables. ",(0,o.mdx)("strong",{parentName:"p"},"Note:")," It's crucial to have your environment variables set up from above prior to this step, as the following code relies on them:"),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"/* Set our creds based on environment variables.\n*/\nconst CLIENT_ID = process.env.CLIENT_ID;\nconst CLIENT_SECRET = process.env.CLIENT_SECRET;\n")),(0,o.mdx)("h4",{id:"sample-code-1"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"#Set our creds based on environment variables.\nCLIENT_ID = os.environ.get('CLIENT_ID')\nCLIENT_SECRET = os.environ.get('CLIENT_SECRET')\n")),(0,o.mdx)("p",null,"Now, these two variables will be used to make a ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST")," request to the authentication endpoint: ",(0,o.mdx)("inlineCode",{parentName:"p"},"https://ims-na1.adobelogin.com/ims/token/v3"),". You need to pass your credentials along with the requested scopes that allow for access to Firefly. All of this can be done in this simple function:"),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-2"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"async function getAccessToken(id, secret) {\n\n    const params = new URLSearchParams();\n\n    params.append('grant_type', 'client_credentials');\n    params.append('client_id', id);\n    params.append('client_secret', secret);\n    params.append('scope', 'openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis');\n    \n    let resp = await fetch('https://ims-na1.adobelogin.com/ims/token/v3', \n        { \n            method: 'POST', \n            body: params\n        }\n    );\n\n    let data = await resp.json();\n    return data.access_token;\n}\n\nlet token = await getAccessToken(CLIENT_ID, CLIENT_SECRET);\n")),(0,o.mdx)("h4",{id:"sample-code-3"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'def getAccessToken(id, secret):\n    response = requests.post(f"https://ims-na1.adobelogin.com/ims/token/v3?client_id={id}&client_secret={secret}&grant_type=client_credentials&scope=openid,AdobeID,session,additional_info,read_organizations,firefly_api,ff_apis")\n    return response.json()["access_token"]\n\ntoken = getAccessToken(CLIENT_ID, CLIENT_SECRET)\n')),(0,o.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"The provided code example does not include error handling for credentials. For production code, it's essential to implement proper error handling to ensure the security and reliability of your application."),(0,o.mdx)("h2",{id:"step-3-generate-an-image-with-a-prompt"},"Step 3: Generate an Image with a Prompt"),(0,o.mdx)("p",null,"For the demo, you will use Firefly to generate four images from a single prompt using the ",(0,o.mdx)("a",{parentName:"p",href:"../api/image_generation/V3/"},"Firefly Generate Images API"),", which includes optional generative matching."),(0,o.mdx)(p,{variant:"help",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"Please refer to the ",(0,o.mdx)("a",{parentName:"p",href:"../api/image_generation/V3/"},"Generate Images API")," in the API Reference for more details."),(0,o.mdx)("p",null,"Based on the docs, we can see that the only required parameter is prompt. Also, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"numVariations")," prompt specifies how many images we want. So the simplest request body we could build would look like so:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'{\n    "prompt":"a cat dancing on a rainbow",\n    "numVariations":4\n}\n')),(0,o.mdx)("p",null,"Now, let's create a function to generate an image using a prompt."),(0,o.mdx)("p",null,"First, we'll build a simple function to call the REST endpoint.\nIt requires our previous ",(0,o.mdx)("inlineCode",{parentName:"p"},"client_id")," value and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"access_token"),", and our prompt:"),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-4"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"async function generateImage(prompt, id, token) {\n\n    let body = {\n        \"numVariations\":4,\n        prompt\n    }\n\n    let req = await fetch('https://firefly-api.adobe.io/v3/images/generate', {\n        method:'POST',\n        headers: {\n            'X-Api-Key':id, \n            'Authorization':`Bearer ${token}`,\n            'Content-Type':'application/json'\n        }, \n        body: JSON.stringify(body)\n    });\n\n    return await req.json();\n}\n")),(0,o.mdx)("h4",{id:"sample-code-5"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'def generateImage(text, id, token):\n\n    data = {\n        "prompt":text,\n        "numVariations":4,\n    }\n\n    response = requests.post("https://firefly-api.adobe.io/v2/images/generate", json=data, headers = {\n        "X-API-Key":id, \n        "Authorization":f"Bearer {token}",\n        "Content-Type":"application/json"\n    }) \n\n    return response.json()\n')),(0,o.mdx)("p",null,"Please ensure you include the authentication headers correctly; pass the token in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Authorization")," header and the ",(0,o.mdx)("inlineCode",{parentName:"p"},"client id")," in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"X-Api-Key")," header. The API will return a JSON string for you to process and return to the caller."),(0,o.mdx)("h3",{id:"executing-the-firefly-api-call"},"Executing the Firefly API Call"),(0,o.mdx)("p",null,"Next, define a simple prompt and call the function to interact with the Firefly API, displaying the result on the screen."),(0,o.mdx)(m,{slots:"heading, code",repeat:"3",languages:"JavaScript, PYTHON, JSON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-6"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"let prompt = 'a cat dancing on a rainbow';\nlet result = await generateImage(prompt, CLIENT_ID, token);\nconsole.log(JSON.stringify(result, null, '\\t'));\n")),(0,o.mdx)("h4",{id:"sample-code-7"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'prompt = "a cat dancing on a rainbow"\nresult = generateImage(prompt, CLIENT_ID, token)\nprint(json.dumps(result, indent=True))\n')),(0,o.mdx)("h4",{id:"response"},"Response"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'{\n "size": {\n  "width": 2048,\n  "height": 2048\n },\n "outputs": [\n  {\n   "seed": 295213121,\n   "image": {\n    "uploadId": "014c2235-f2e9-47be-98a9-33bc9d62568b",\n    "url": "https://pre-signed-firefly.s3.amazonaws.com/images/014c2235-f2e9-47be-98a9-33bc9d62568b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA55EBG7KCZFCHQDZT%2F20240510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240510T145429Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a91dfaf608f5f539c80339778aa1bd45dc8698fc35bd32ba41e93d0d2e288632"\n   }\n  },\n  {\n   "seed": 295109025,\n   "image": {\n    "uploadId": "1c1ae898-0709-4a28-bb6d-1c677189a03b",\n    "url": "https://pre-signed-firefly.s3.amazonaws.com/images/1c1ae898-0709-4a28-bb6d-1c677189a03b?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA55EBG7KCZFCHQDZT%2F20240510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240510T145429Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=88bf526592ef5e72e016619c470a346789403660933f05f523af467704ebb0b8"\n   }\n  },\n  {\n   "seed": 779747824,\n   "image": {\n    "uploadId": "e56845cd-bf6d-4242-b1db-2eb357c821a5",\n    "url": "https://pre-signed-firefly.s3.amazonaws.com/images/e56845cd-bf6d-4242-b1db-2eb357c821a5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA55EBG7KCZFCHQDZT%2F20240510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240510T145429Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=77d4b996909b04cfe1e892c12345f28d97b47a43e79bdf8ae91a36a87eac73a3"\n   }\n  },\n  {\n   "seed": 1081574056,\n   "image": {\n    "uploadId": "0985b3be-5961-409a-a6e5-8a31e44e6aed",\n    "url": "https://pre-signed-firefly.s3.amazonaws.com/images/0985b3be-5961-409a-a6e5-8a31e44e6aed?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA55EBG7KCZFCHQDZT%2F20240510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240510T145429Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0fc4ff2e7b0545208fc5b08f1bb18d265b429166d0e0bfbe49b411aa01142bae"\n   }\n  }\n ],\n "photoSettings": {\n  "aperture": 1.2,\n  "shutterSpeed": 0.0005,\n  "fieldOfView": 14\n },\n "contentClass": "art"\n}\n')),(0,o.mdx)("p",null,"This function sends a ",(0,o.mdx)("inlineCode",{parentName:"p"},"POST")," request to the Firefly API with the prompt, and retrieves the generated images. Replace ",(0,o.mdx)("inlineCode",{parentName:"p"},'"a cat dancing on a rainbow"')," with your desired prompt."),(0,o.mdx)("p",null,"You can copy and paste any of the ",(0,o.mdx)("inlineCode",{parentName:"p"},"url")," values from the result to view the images."),(0,o.mdx)("h2",{id:"step-4-downloading-images-from-firefly-api"},"Step 4: Downloading Images from Firefly API"),(0,o.mdx)("p",null,"Next, you will learn how to write a quick utility to download the resulting images."),(0,o.mdx)("h3",{id:"import-the-required-modules"},"Import the Required Modules"),(0,o.mdx)("p",null,"First, import the necessary file-related modules and the requests modules for ",(0,o.mdx)("inlineCode",{parentName:"p"},"Node")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"Python"),":"),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-8"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import fs from 'fs';\nimport { Readable } from 'stream';\nimport { finished } from 'stream/promises';\n")),(0,o.mdx)("h4",{id:"sample-code-9"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"import requests \n")),(0,o.mdx)("h3",{id:"define-the-downloadfile-function"},"Define the ",(0,o.mdx)("inlineCode",{parentName:"h3"},"downloadFile")," function"),(0,o.mdx)("p",null,"Next, create a function that takes a URL and a file path as arguments, and downloads the file from the URL to the specified path."),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-10"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"async function downloadFile(url, filePath) {\n    let res = await fetch(url);\n    const body = Readable.fromWeb(res.body);\n    const download_write_stream = fs.createWriteStream(filePath);\n    return await finished(body.pipe(download_write_stream));\n}\n")),(0,o.mdx)("h4",{id:"sample-code-11"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},"def downloadFile(url, filePath):\n    with open(filePath,'wb') as output:\n        bits = requests.get(url, stream=True).content\n        output.write(bits)\n")),(0,o.mdx)("h3",{id:"iterate-over-the-results-and-save-each-image"},"Iterate over the results and save each image"),(0,o.mdx)("p",null,"Finally, iterate over the results and save each image with a unique file name using the seed value from the result:"),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-12"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"for(let output of result.outputs) {\n    let fileName = `./${output.seed}.jpg`;\n    await downloadFile(output.image.url, fileName);\n}\n")),(0,o.mdx)("h4",{id:"sample-code-13"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'for output in result["outputs"]:\n    fileName = f\'./{output["seed"]}.jpg\';\n    downloadFile(output["image"]["url"], fileName);\n')),(0,o.mdx)("p",null,"After running these steps, you'll see four images output in the same directory."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Sample output")),(0,o.mdx)("p",null,"A result of an image generated with the prompt specified above is shown here for reference."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/5530d/cat-rainbow.webp 320w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/0c8fb/cat-rainbow.webp 640w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/94b1e/cat-rainbow.webp 1280w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/0b34d/cat-rainbow.webp 1920w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/96d48/cat-rainbow.webp 2048w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/8980b/cat-rainbow.jpg 320w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/56d4e/cat-rainbow.jpg 640w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/62aaf/cat-rainbow.jpg 1280w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/aaf92/cat-rainbow.jpg 1920w","/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/09658/cat-rainbow.jpg 2048w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/jpeg"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/ff-services-docs/static/0a2cba425e96a0679fe867f632570ae0/62aaf/cat-rainbow.jpg",alt:"a cat dancing on a rainbow",title:"a cat dancing on a rainbow",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"complete-source-code"},"Complete Source Code"),(0,o.mdx)("p",null,"Here's the entire code sample. As a reminder, feel free to modify and change the prompt."),(0,o.mdx)(p,{variant:"warning",slots:"title, text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"IMPORTANT"),(0,o.mdx)("p",null,"Note that this Node.js code uses imports and top-level ",(0,o.mdx)("inlineCode",{parentName:"p"},"await"),", so you must either use the ",(0,o.mdx)("inlineCode",{parentName:"p"},".mjs")," extension on your script file, or ensure you have a ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," with ",(0,o.mdx)("inlineCode",{parentName:"p"},'type: "module"'),"."),(0,o.mdx)(m,{slots:"heading, code",repeat:"2",languages:"JavaScript, PYTHON",mdxType:"CodeBlock"}),(0,o.mdx)("h4",{id:"sample-code-14"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import fs from 'fs';\nimport { Readable } from 'stream';\nimport { finished } from 'stream/promises';\n\n/*\n  Set the creds based on environment variables.\n*/\nconst CLIENT_ID = process.env.CLIENT_ID;\nconst CLIENT_SECRET = process.env.CLIENT_SECRET;\n\n\nasync function getAccessToken(id, secret) {\n\n    const params = new URLSearchParams();\n\n    params.append('grant_type', 'client_credentials');\n    params.append('client_id', id);\n    params.append('client_secret', secret);\n    params.append('scope', 'openid,AdobeID,firefly_enterprise,firefly_api,ff_apis');\n    \n    let resp = await fetch('https://ims-na1-stg1.adobelogin.com/ims/token/v3', \n        { \n            method: 'POST', \n            body: params\n        }\n    );\n\n    let data = await resp.json();\n    return data.access_token;\n}\n\nlet token = await getAccessToken(CLIENT_ID, CLIENT_SECRET);\n\nasync function generateImage(prompt, id, token) {\n\n    let body = {\n        \"numVariations\":4,\n        prompt\n    }\n\n    let req = await fetch('https://firefly-api.adobe.io/v3/images/generate', {\n        method:'POST',\n        headers: {\n            'X-Api-Key':id, \n            'Authorization':`Bearer ${token}`,\n            'Content-Type':'application/json'\n        }, \n        body: JSON.stringify(body)\n    });\n\n    return await req.json();\n}\n\nlet prompt = 'a cat dancing on a rainbow';\nlet result = await generateImage(prompt, CLIENT_ID, token);\nconsole.log(JSON.stringify(result,null,'\\t'));\n\nasync function downloadFile(url, filePath) {\n    let res = await fetch(url);\n    const body = Readable.fromWeb(res.body);\n    const download_write_stream = fs.createWriteStream(filePath);\n    return await finished(body.pipe(download_write_stream));\n}\n\nfor(let output of result.outputs) {\n    let fileName = `./${output.seed}.jpg`;\n    await downloadFile(output.image.url, fileName);\n}\n")),(0,o.mdx)("h4",{id:"sample-code-15"},"Sample code"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'import os \nimport requests \nimport json \n\n#Set our creds based on environment variables.\nCLIENT_ID = os.environ.get(\'CLIENT_ID\')\nCLIENT_SECRET = os.environ.get(\'CLIENT_SECRET\')\n\ndef getAccessToken(id, secret):\n    response = requests.post(f"https://ims-na1-stg1.adobelogin.com/ims/token/v3?client_id={id}&client_secret={secret}&grant_type=client_credentials&scope=openid,AdobeID,firefly_enterprise,firefly_api,ff_apis")\n    return response.json()["access_token"]\n\ntoken = getAccessToken(CLIENT_ID, CLIENT_SECRET)\n\ndef generateImage(text, id, token):\n\n    data = {\n        "prompt":text,\n        "numVariations":4,\n    }\n\n    response = requests.post("https://firefly-api.adobe.io/v3/images/generate", json=data, headers = {\n        "X-API-Key":id, \n        "Authorization":f"Bearer {token}",\n        "Content-Type":"application/json"\n    }) \n\n    return response.json()\n\n\nprompt = "a cat dancing on a rainbow"\nresult = generateImage(prompt, CLIENT_ID, token)\nprint(json.dumps(result, indent=True))\n\ndef downloadFile(url, filePath):\n    with open(filePath,\'wb\') as output:\n            output.write(bits)\n\nfor output in result["outputs"]:\n    fileName = f\'./{output["seed"]}.jpg\'\n    downloadFile(output["image"]["url"], fileName)\n')))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-firefly-api-guides-how-tos-create-your-first-ff-application-md-dc5c93600c19e7071d70.js.map
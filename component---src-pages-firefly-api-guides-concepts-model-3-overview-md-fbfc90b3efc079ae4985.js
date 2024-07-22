"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9953],{30617:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return s}});var m=n(58168),t=n(80045),i=(n(88763),n(15680)),r=n(83407);const p=["components"],d={},o={_frontmatter:d},l=r.A;function s(e){let{components:a}=e,n=(0,t.A)(e,p);return(0,i.mdx)(l,(0,m.A)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"firefly-image-3-model-preview"},"Firefly Image 3 Model (preview)"),(0,i.mdx)("p",null,"The Firefly Image 3 Model (preview) offers an improved generative Al image model for faster ideation and content creation."),(0,i.mdx)("h2",{id:"overview"},"Overview"),(0,i.mdx)("p",null,"This document provides an overview of the changes and new APIs introduced for the Firefly Image 3 Model (preview)."),(0,i.mdx)("p",null,"Specific benefits include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Improved generation quality with better depiction of details and more photorealistic results."),(0,i.mdx)("li",{parentName:"ul"},"Greater variety in generated outputs from a single prompt for photos, art, or flat illustrations."),(0,i.mdx)("li",{parentName:"ul"},"Improved ability to take reference images into account, both for stylization and for structure matching."),(0,i.mdx)("li",{parentName:"ul"},"Better understanding of prompts and compositions of complex scenes and text rendering."),(0,i.mdx)("li",{parentName:"ul"},"Improved image variations with varied options for composition, mood, and lighting.")),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/firefly/using/whats-new.html"},"this link")," for more details on what's new."),(0,i.mdx)("h3",{id:"new-apis"},"New APIs"),(0,i.mdx)("p",null,"The following new APIs were introduced in Firefly Image Model 3:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"../api/generate-similar/"},"Generate Similar Images"),":")," Pass in a source image to use as a reference for generating similar image results."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},(0,i.mdx)("a",{parentName:"strong",href:"../api/generate-object-composite/"},"Generate Object Composite"),":")," Upload an image (with or without mask), such as a product photo, and utilize a text prompt to generate a seamlessly composited scene featuring the product. Additionally, provide optional parameters to influence the style and content of the background. See ",(0,i.mdx)("a",{parentName:"li",href:"https://helpx.adobe.com/firefly/using/whats-new/2024-3.html#object-composites"},"this link")," for more specific details.")),(0,i.mdx)("h3",{id:"updated-apis"},"Updated APIs"),(0,i.mdx)("p",null,"The following existing APIs were updated to use the new Image Model 3, and have new and/or renamed parameters:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../api/image_generation/V3/"},"Generate Images API"),":")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"n")," parameter has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"numVariations"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"styles")," object parameter was renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"style")," and contains renamed child parameters as well. You can still supply a reference image to be used, but it should now be passed as ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," (for a presigned image URL), or ",(0,i.mdx)("inlineCode",{parentName:"p"},"uploadId")," for an uploaded image within the ",(0,i.mdx)("inlineCode",{parentName:"p"},"imageReference.source")," field:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'style": {\n    "presets": [\n        "bw"\n    ],\n    "imageReference": {\n        "source": {\n            "url": "https://example.com/",\n            "uploadId": "string"\n        }\n    }\n    "strength": 50,\n}\n'))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"photoSettings")," parameter has been removed.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"locale")," parameter has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"promptBiasingLocaleCode"),".")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../api/generative_expand/V3/"},"Expand Image"),":")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"n")," parameter has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"numVariations"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"locale")," has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"promptBiasingLocaleCode"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," parameter now has a ",(0,i.mdx)("inlineCode",{parentName:"p"},"source")," and a ",(0,i.mdx)("inlineCode",{parentName:"p"},"mask")," that can be provided as sub-parameters in the form of either an ",(0,i.mdx)("inlineCode",{parentName:"p"},"uploadId")," of an uploaded image (ie: ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.source.uploadId")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.mask.uploadId"),", or a url for a presigned URL (ie: ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.source.url")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.mask.url"),"):"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"image": {\n    "source": {\n      "url": "https://example.com/",\n      "uploadId": "string"\n    },\n    "mask": {\n      "url": "https://example.com/",\n      "uploadId": "string"\n    }\n}\n'))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"A new ",(0,i.mdx)("inlineCode",{parentName:"p"},"placement")," object parameter can be specified, with ",(0,i.mdx)("inlineCode",{parentName:"p"},"insets")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"alignment")," child parameter values that can be provided. See the placement section below for more details.")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"../api/generative_fill/V3"},"Fill Image"),":")),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"n")," parameter has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"numVariations"),".")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("inlineCode",{parentName:"p"},"locale")," has been renamed to ",(0,i.mdx)("inlineCode",{parentName:"p"},"promptBiasingLocaleCode"),".\n​- Support for a ",(0,i.mdx)("inlineCode",{parentName:"p"},"negativePrompt")," parameter has been added.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," parameter now contains both the ",(0,i.mdx)("inlineCode",{parentName:"p"},"source")," parameter for the ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," input, and the ",(0,i.mdx)("inlineCode",{parentName:"p"},"mask")," parameter for the mask to use. (The previous version of the API had ",(0,i.mdx)("inlineCode",{parentName:"p"},"mask")," at the same level as the ",(0,i.mdx)("inlineCode",{parentName:"p"},"image")," parameter). Please note, for both, you can supply either a ",(0,i.mdx)("inlineCode",{parentName:"p"},"url")," (for a presigned URL – ie: ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.source.url")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.mask.url"),") or an ",(0,i.mdx)("inlineCode",{parentName:"p"},"uploadId")," (for an uploaded image – ie: ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.source.uploadId")," or ",(0,i.mdx)("inlineCode",{parentName:"p"},"image.mask.uploadId"),"):"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'"image": {\n    "source": {\n      "url": "https://example.com/",\n      "uploadId": "string"\n    },\n    "mask": {\n      "url": "https://example.com/",\n      "uploadId": "string"\n    }\n}\n')))),(0,i.mdx)("p",{parentName:"li"},"See ",(0,i.mdx)("a",{parentName:"p",href:"https://helpx.adobe.com/firefly/using/generative-expand.html"},"this link")," for more details about the capabilities available for expanding and filling images with Firefly Image Model 3."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-firefly-api-guides-concepts-model-3-overview-md-fbfc90b3efc079ae4985.js.map
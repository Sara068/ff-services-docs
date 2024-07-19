---
title: Generating Images with Content Class and Style Presets
description: A guide to generating images with specific content classes and style presets when using the Firefly APIs.
keywords:
  - Adobe Firefly Services
  - Firefly API
  - Firefly API Style Reference
  - Firefly API Structure Reference
  - How-to guides
  - Firefly usage examples
  - Firefly generate images
  - Access token
  - Client ID
  - API Key
  - Text to image
  - Firefly endpoint
contributors:
  - https://github.com/cfjedimaster
  - https://github.com/hollyschinsky
hideBreadcrumbNav: true
---

# Using Content Class and Style Presets

Learn how to use optional parameters to direct the style of the images generated in your API calls.

## Prerequisites

-  Firefly API credentials. If you don't have them yet, first visit the Firefly Services [Getting Started](../../../guides/get-started.md) guide to obtain a `client_id` and `client_secret`.
-  Node.js installed on your machine and basic familiarity with `JavaScript`. **Note:** The code for this guide will make use of the [Firefly REST APIs](../api/generate-images/V3/) via Node.js, but could be written in any language, or with the [SDK](https://developer.adobe.com/firefly-services/docs/guides/sdks/).

<InlineAlert variant="warning" slots="title, text" />

IMPORTANT

The Node.js code provided in this guide uses imports and top-level `await`, so you must either use the `.mjs` extension on your script file, or ensure you have a `package.json` with `type: "module"`.

## Specifying a Content Class

Images generated by Firefly fall into two general categories - photos and art. This is represented in the REST API as the parameter, `contentClass`. When you do not pass this value as part of your call, Firefly will do its best to guess what makes sense based on the prompt. However, if you know what kind of result you want, it always makes sense to pass that in your code. To specify the value, simply add the `contentClass` parameter to your request body. For example:

```json
{
 "numVariations":1,
 "prompt":"The prompt here...",
 "contentClass":"art",
 "size": {
     "width":1792,
     "height":2304
  }
}
```

First, you will see this in action by coding a simple demo that shows the result of *not* specifying a class, followed by specifying each of the two options, and note the differences.

Below is the generic function which will be used to try out the image generation features with a `prompt` and optional `contentClass`:

```js
async function generateImage(prompt, id, token, contentClass) {
    let body = {
        numVariations:1,
        prompt,
        size:{
            width:1792,
            height:2304
        }
    }
 
    if (contentClass) body.contentClass = contentClass;
 
    let req = await fetch('https://firefly-api.adobe.io/v3/images/generate', {
        method:'POST',
        headers: {
            'X-Api-Key':id,
            'Authorization':`Bearer ${token}`,
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
    });
 
    return await req.json();
}
```

In this method, you'll notice the `contentClass` is specified as an argument, and when it exists, it will be passed along with the rest of the body in the call to the API. This makes it really easy to test with different options.

Before calling the API, you'll need to authenticate using your Firefly API credentials. You can do so with the following code provided for you to retrieve an access token and define a prompt:

```js 
/*
  Set our creds based on environment variables.
*/
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

async function getAccessToken(id, secret) {
	const params = new URLSearchParams();

	params.append('grant_type', 'client_credentials');
	params.append('client_id', id);
	params.append('client_secret', secret);
	params.append('scope', 'openid,AdobeID,firefly_enterprise,firefly_api,ff_apis');
	
	let resp = await fetch('https://ims-na1-stg1.adobelogin.com/ims/token/v3', 
		{ 
			method: 'POST', 
			body: params
		}
	);

	let data = await resp.json();
	return data.access_token;
}

let token = await getAccessToken(CLIENT_ID, CLIENT_SECRET);
let prompt = 'A long-haired cat majestically riding a flying unicorn. The cat is wielding a rainbow shield and sword, pointing the swords tip outwards.';

```

You will also need a utility class to download the result, which is provided below:

```js
import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';

async function downloadFile(url, filePath) {
	let res = await fetch(url);
	const body = Readable.fromWeb(res.body);
	const download_write_stream = fs.createWriteStream(filePath);
	return await finished(body.pipe(download_write_stream));
}
```

Now, use the following code which runs three calls; one without specifying the `contentClass` and one that specifies `"photo"`, and subsequently `"art"`.

```js
// First, don't specify a content class at all
let result = await generateImage(prompt, CLIENT_ID, token);
let fileName = `./output/v3_noclass.jpg`;
await downloadFile(result.outputs[0].image.url, fileName);
  
// Second, specify the "photo" content class
result = await generateImage(prompt, CLIENT_ID, token, "photo");
fileName = `./output/v3_photo.jpg`;
await downloadFile(result.outputs[0].image.url, fileName);
 
// Third, pass in the "art" content class
result = await generateImage(prompt, CLIENT_ID, token, "art");
fileName = `./output/v3_art.jpg`;
await downloadFile(result.outputs[0].image.url, fileName);
```

### Generated Results

Given the `prompt` defined above: `"A long-haired cat majestically riding a flying unicorn. The cat is wielding a rainbow shield and sword, pointing the swords tip outwards."` - you should see the following results:

#### No Content Class

![Result with no class specified](../images/v3_noclass.jpg)

#### Art Content Class

![Result with art class specified](../images/v3_artClass.jpg)

#### Photo Content Class

![Result with photo class specified](../images/v3_photoClass.jpg)

## Specifying Style Presets

Another way for Firefly to direct its output is via the use of [style presets](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/styles/). These style presets are a *long* list of options ranging from "black and white", to "warm tone" and "misty".

As with `contentClass` above, to specify a style preset, you simply include the [preset ID](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/styles/) for it in your request body:

```json
{
  "numVariations":1,
  "prompt":"The prompt here...",
  "style":{
      "presets":["bw","grainy_film"]
  },
  "size":{
      "width":1792,
      "height":2304
  }
}
```

In the above example, two presets are used,` bw`, for black and white, and `grainy_film` for a grainy film effect. In [the documentation](https://developer.adobe.com/firefly-services/docs/firefly-api/guides/concepts/styles/), you'll notice that each preset has a name and ID. For the API, you need to specify the ID values only.

Also, note that while the presets value can be an array, Firefly will not "sanity" check these values. What that means is, if you intentionally ask Firefly to use presets that don't necessarily make sense, Firefly will try its best but the result may not be good. This is a case where artistic sense has to be applied, not developer skill.

Once again, you can use a simple method to test this:

```js
async function generateImage(prompt, id, token, presets) {
 
let body = {
  numVariations:1,
  prompt,
  size:{
    width:1792,
    height:2304
  }
}
 
if (presets) body.style = { presets };
 
let req = await fetch('https://firefly-api.adobe.io/v3/images/generate', {
  method:'POST',
  headers: {
    'X-Api-Key':id,
    'Authorization':`Bearer ${token}`,
    'Content-Type':'application/json'
  },
  body: JSON.stringify(body)
});
 
return await req.json();
}
```

The method above simply adds the `presets` value to the call when it's specified. This can be tested with the following:

```js
result = await generateImage(prompt, CLIENT_ID, token, ["golden"]);
fileName = `./output/v3_golden.jpg`;
await downloadFile(result.outputs[0].image.url, fileName);
 
result = await generateImage(prompt, CLIENT_ID, token, ["pastel_color"]);
fileName = `./output/v3_pastel_color.jpg`;
await downloadFile(result.outputs[0].image.url, fileName);
```

### Generated Results

The results of using the `golden` and `pastel_color` as `presets` in the above function are shown below:

#### Golden Preset Result

![Result with golden](../images/v3_golden.jpg)

#### Pastel Colors Preset Result

![Result with pastel_colors](../images/v3_pastel_color.jpg)

## Next Steps

While this guide demonstrated two powerful ways to influence Firefly when generating images, there's still more you can learn about to tweak what's generated from your API calls. Check out the other guides in this [how-tos](../how-tos/) section and the [API Reference](../api/generate-images/V3/) for more details.
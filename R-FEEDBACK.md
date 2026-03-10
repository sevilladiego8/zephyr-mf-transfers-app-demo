<h1 align="center">Zephyr Overview - Feedback<h1>


# Overview

Zephyr is a quite interesting tool because it helps solve different problems and complexities related to micro-frontends and module federation.

It provides a variety of features that make it easier, less cumbersome, to implement/configure micro-frontends, such as:

- instant deployment
- dependency resolution
- seamless version management
- framework agnostic
- handles Module Federation configuration across multiple bundlers (Webpack, Vite, Rspack, Rollup, etc).

The micro-frontends approach for a project has advantages, but it comes with high complexity in particular when it comes to configuration.

# Feedback

> I ran the tests of zephyr on a Notebook Dell  with `Ubuntu 24.04`and using Node.js v24.11.1, npm 11.6.2 and pnpm 10.30.3 respectively.

I executed various tests accross different bundler examples mentioned in Zephyr Docs | [Quick Start](https://docs.zephyr-cloud.io/getting-started/quick-start) | [Tutorials](https://docs.zephyr-cloud.io/tutorials/first-app) aiming to test the module federation features and discovered different things, some of them are:

## 1. [react-webpack-mf](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/vanilla/examples/mf-react-webpack)

I had a CORS problems when trying to run `app1` and `app2` apps locally for the `react-webpack-mf` example. The host (app1) can reach `mf-manifest.json`, but the remote server (app2) does not return CORS headers permitting `http://localhost:3001` to read it. As a result, the module federation runtime cannot consume the manifest, so lazy loading of `react_webpack_mf_second/App` fails. The solution for development is to add a wildcard or the following headers to the webpack dev server configuration within `app2`:
```js
devServer: {
  headers: {
    "Access-Control-Allow-Origin": "http://localhost:3001", // "*"
  }
}
```
Nevertheless, the solution for production is unclear to me at this moment. The example works locally after setting dev CORS correctly, but the deployed build still resolves the remote to `localhost`. I also noticed the github README of this example refers to an `app2Url` variable that does not exist in the current source, which makes the deployment instructions inconsistent with the repo at this moment. Since this reproduces from a fresh clean clone, it seems like an issue in the example, docs, or Zephyr’s webpack integration. 

## 2. [react-rsbuild-mf](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/vanilla/examples/mf-react-rsbuild)

I had a consistent/blocker bug 🐛🐛 testing this example. When I first cloned it, it deployed well to zephyr cloud, but once I started adding extra apps to consume them, I got these errors: 

<p align="center"> 
  <img src="./imgs/providers-error-1.png" alt="not loading providers 1"/>
</p>
<p align="center"> 
  <img src="./imgs/providers-error-2.png" alt="not loading providers 2"/>
</p>

After these changes, the comsumer stopped loading the providers correctly for some reason. I built the apps again and checked whether everything was setup correctly according to the docs, but i didn't make any progress. Hence one solution I found to solve this was to rename my local `package.json` project name and the `providers` (apps) in order to generate a new project with fresh apps created in my `zephyr cloud dashboard`. 

<p align="center"> 
  <img src="./imgs/providers-tmp-solution.png" alt="renaming project and providers" />
</p>


## 3. [mf-nx-rspack](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/nx/examples/mf-nx-rspack)

I didn't have any issues modifying the NX example, I was able to add more apps with no problem and deployed it to zephyr cloud with no problems. ✅✅

## 4.SSR

Zephyr does not currently present SSR for micro-frontends as a broadly supported, cloud-agnostic capability. As a recommendation, in the future it would be terrific to upgrade the `Cloudfare SSR Worker` to work not only for cloudfare, but also for other cloud providers such as AWS, Google Cloud, etc.

## 5. Automate MF configuration

I had to manually configure the Module Federation plugin when working with the rsbuild (webpack) configuration for all apps, which was a bit **time-consuming** and **error-prone**. The usage of [MF Generation](https://docs.zephyr-cloud.io/tutorials/create-mf-app#create-a-module-federation-app) is quite useful and promotes a more stright forward configuration of micro-frontend out of the box. 

# Observations 
1. I noticed the generated UIDs for the Urls versioning of the apps have a fixed length which crops the url after modifying the name of my **providers**, **consumers** and **applications** accordingly. It would be an excellent idea to mention that sticking to short names is recommended to maintain a descriptive project. 

<p align="center"> 
  <img src="./imgs/urls-cropped.png" alt="not able to delete folders" width="260"/>
</p>


2. I realized that I can't delete folders in my organization. Since I did several tests to understand zephyr's workflow, I ended up with a messy org with lots of PROJECTS/Directories with test apps inside. I tried delete some of them, but I was only able to delete the apps inside. It would be wondefull to allows users to delete projects to keep the space more organized. 📋

<p align="center"> 
  <img src="./imgs/not-able-to-delete-folders.png" alt="not able to delete folders" width="260"/>
</p>

# Conclusions

1. Zephyr is a very interesting tool that provides value by fast forwarding complexities and problems related to **module-federation** and **micro-frontends**, furthermore it completely removes the need to create ci/cd pipelines that deploy the apps automatically to **production environments**
2. Zephyr has first-class support for micro-frontends based on Module Federation applications. The docs offer micro-frontend guides about deploying MF apps, resolving remote dependencies, and managing versions/environments.
3. I discovered some issues that blocked me temporarily, but I might definitely need to dive deeper into zephyr's internals in order to understand the issues better.
4. I would probably stick to **Zephyr + NX** for a quick setup, a `less error prone` project and a faster module federation configuration. Nonetheless, having more control over the setup of your micro-frontends is something that is worth considering if starting a project from scratch and having the mf generation tool: [MF Generation](https://docs.zephyr-cloud.io/tutorials/create-mf-app#create-a-module-federation-app)
5. This public example doesn't have a `README.md` [mf-read-rsbuild](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/vanilla/examples/mf-react-rsbuild-1), adding a readme always serves as a guide to understand the example easier and better



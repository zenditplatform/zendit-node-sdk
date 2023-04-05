# Zendit SDK for Node.js

The Zendit SDK for Node.js allows developers to easily interact with the Zendit API using TypeScript. 
The SDK provides convenient methods for making API requests and handling responses, abstracting away the details of HTTP requests and JSON parsing.

# Documentation
The documentation for the Zendit API can be found [here][docs-link].

# Versions
Zendit-node uses [Semantic Versioning](https://semver.org/) for all changes.

# Supported Node.js Versions
This library has been tested using the following Node.js implementations:

* Node.js 18
* TypeScript is supported for version 4.0 and above.

# Installation

## Add Zendit SDK to your project

Add the Zendit SDK to your NPM dependencies by running the following command:
```bash
npm install git+https://github.com/zenditplatform/zendit-node-sdk.git
```

To use the Zendit SDK in your project, provide your API key instead of the placeholder `YOUR_KEY_HERE`. 
You can find your key in the [dashboard](https://console.zendit.io/)
```typescript
import { ZenditApi } from "@zenditplatform/zendit-sdk";

const zenditAPI = new ZenditApi("YOUR_KEY_HERE")
```

# Example

For a quick start, we have set up the [example app](https://github.com/zenditplatform/zendit-node-sdk/blob/main/example) for you.

You can install the example app in two ways:

1. **Clone the example app**: Copy the [example app](https://github.com/zenditplatform/zendit-node-sdk/blob/main/example) to your own directory and run the following command: 
```bash
npm install
```
2. **Install from the NPM registry**: Use this command to install the example app directly from the NPM registry:
```bash
npm install @zenditplatform/zendit-sdk-example
```

## Configuration
To configure the example app, you'll need to set the `ZENDIT_API_KEY` environment variable. 
You can find this key on the [dashboard](https://console.zendit.io/).

To set this variable, you can use a .env file located in the root folder of the example application. 
Paste your API key instead of placeholder `YOUR_KEY_HERE`:
```.env
ZENDIT_API_KEY=YOUR_KEY_HERE
```

## Run example
To run an example of the Zendit SDK for Node.js, execute the following command:
```bash
npm run example
```

## SDK Guide

For additional documentation checkout the [SDK Guide](SDK-GUIDE.md)

## Getting help

If you need assistance with installing or using the library, please refer to the [Developers site][docs-link] first. 
If you cannot find the answer to your question, you can [contact support][support-page].

If you've instead found a bug in the library or would like new features added, go ahead and open issues or pull requests against this repo!

## Contributing

Bug fixes, docs, and library improvements are always welcome. Please refer to our [Contributing Guide](CONTRIBUTING.md) for detailed information on how you can contribute.

> You are welcome to suggest changes and submit PRs illustrating the changes. You can find more info about this in the [Contributing Guide](CONTRIBUTING.md).

If you're not familiar with the GitHub pull request/contribution process, [this is a nice tutorial](https://gun.io/blog/how-to-github-fork-branch-and-pull-request/).

[docs-link]: https://developers.zendit.io
[issue-link]: https://github.com/zenditplatform/zendit-node-sdk/issues/new
[github]: https://github.com/zenditplatform/zendit-node-sdk
[support-page]: https://developers.zendit.io/zendit-support

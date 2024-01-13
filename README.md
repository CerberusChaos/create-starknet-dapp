# Create Starknet Dapp 🚀 <a href="https://npmjs.com/package/create-starknet-dapp"><img src="https://img.shields.io/npm/v/create-starknet-dapp" alt="npm package"></a>

`create-starknet-dapp` is a command-line tool designed to help developers quickly create Starknet Dapp projects. It offers multiple project templates, pre-built with the libraries and tools necessary for Starknet Dapp development, including `starknet-react`, `starknet`, `get-starknet-core`, and more.

## Usage 🛠️

> **Compatibility Note:**
> Starknet-Dapp requires [Node.js](https://nodejs.org/en/) version 18+, 20+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

Creating a Starknet Dapp project is straightforward. Simply run the following command and follow the prompts:

With Npm:

```bash
$ npx create-starknet-dapp
```

With Pnpm:

```bash
$ pnpx create-starknet-dapp
```

With Bun:

```bash
$ bunx create-starknet-dapp
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Starknet React + Next.js project, run:

```bash
# npm 7+, extra double-dash is needed:
npm create starknet-dapp my-starknet-app -- --template nextjs

# yarn
yarn create starknet-dapp my-vue-app --template nextjs

# pnpm
pnpm create starknet-dapp my-starknet-appp --template nextjs

# Bun
bunx create-starknet-dapp my-starknet-app --template nextjs
```

You will be asked to choose a project template, enter a project name, and provide other necessary information. Afterward, `create-starknet-dapp` will create a brand new Starknet Dapp project for you.

## Supported Project Templates 📋

`create-starknet-dapp` offers the following project templates:

- `react`: Starknet Dapp template based on React
- `react-ts`: Starknet Dapp template based on TypeScript and React
- `nextjs`: Starknet Dapp template based on Next.js

You can choose the template that suits your project requirements.

## Development and Deployment 🚀

After creating your project, you can use various tools and libraries to develop and deploy your Starknet Dapp. Refer to the README file of the selected template for detailed instructions on getting started.

## Contributions 🙌

If you encounter issues or have improvement suggestions, please feel free to raise issues or submit pull requests. We welcome contributions from the community!

## License 📜

This tool is licensed under the [MIT License](LICENSE).

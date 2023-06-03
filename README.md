# Rell introduction

## Blockend
Prerequisites:
 - Docker
 - Java 11+ [install with sdk man](https://sdkman.io)
 - Chromia-cli ([installation instructions](https://docs.chromia.com/dev-setup/backend/cli-installation#install))

To get started with this repo, make sure that your system complies with all the prerequisites and then execute `run.sh` from this dirctory. This will start a single postchain node and install the dApp defined with the source code in the [src](src/) directory.

Run a query towards the dApp: `chr query --blockchain-rid <blockchain-rid> hello_world`

Run tests: `chr tests`

## Front-end
To run the front-end:

1. `cd client`
2. `npm install`
3. `npm run dev`
4. Navigate to: [http://localhost:5173](http://localhost:5173)

> **Note:** that the client assumes that the backend is running on [http://localhost:7740].

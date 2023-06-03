# Rell introduction

## Blockend
Prerequisites:
 - Docker
 - Java 11+ [install with sdk man](https://sdkman.io)
 - Chromia-cli ([installation instructions](https://docs.chromia.com/dev-setup/backend/cli-installation#install))

To get started with this repo, make sure that your system complies with all the prerequisites and then execute `run.sh` from this dirctory. This will start a single postchain node and install the dApp defined with the source code in the [src](src/) directory.

Run a query towards the dApp: `chr query --blockchain-rid <blockchain-rid> hello_world`

Run tests: `chr tests`


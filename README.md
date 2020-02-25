# Nightwatch-testing-hearthstone

This project is the End-to-End Nightwatch testing project for https://github.com/guoyanghg/Hearthstone.

## Getting Started

This project is being developed on the macOS 10.15.2. 

### Prerequisites

First, make sure you have already installed the HearthStone Wiki project. So you have already had the Npm.

This project is based on Firefox and Safari. Please install the Firefox 1.19.1:

https://www.mozilla.org/en-US/

I have already installed the driver dependencies for you. You can check "package.json"


```
# For Safari

safaridriver --enable

```

If you want to add other drivers please check out the following link:

https://nightwatchjs.org/gettingstarted/installation/

### Installing

Clone this repo 

## Start the server

I have written the npm scripts for you, you can also check "package.json" to define your CLI command

cd to the ./

```
# For Safari

npm run test-safari

```

```
# For Firefox

npm run test-firefox

```

```
# For Both (Parallel)

npm run test

```

## Authors

* **Yang Guo** 


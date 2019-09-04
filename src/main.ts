import * as core from '@actions/core';

async function run() {
  try {
    const myVar = core.getInput('myVar');
    core.debug(`Has dicho ${myVar}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

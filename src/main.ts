import * as core from '@actions/core';

async function run() {
  try {
    const myVar = core.getInput('myVar');
    console.log(`Has dicho ${myVar}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

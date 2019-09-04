import * as core from '@actions/core';

async function run() {
  try {
    const var = core.getInput('var');
    core.debug(`Has dicho ${var}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

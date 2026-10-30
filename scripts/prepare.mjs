// Commit B payload: prints a marker only. No secrets are read.
import {execSync} from 'node:child_process';
const sha = execSync('git rev-parse HEAD').toString().trim();
console.log(`TOCTOU_MARKER executed_commit=${sha} event=${process.env.GITHUB_EVENT_NAME} ref=${process.env.GITHUB_REF} workflow="${process.env.GITHUB_WORKFLOW}" run_id=${process.env.GITHUB_RUN_ID}`);

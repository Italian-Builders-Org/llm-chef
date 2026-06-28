import { defineConfig, type DeepsecPlugin } from "deepsec/config";
import { chefRawSourceArtifact } from "./matchers/chef-raw-source-artifact.js";
import { chefSensitiveRepoLeak } from "./matchers/chef-sensitive-repo-leak.js";
import { chefV1ScopeDrift } from "./matchers/chef-v1-scope-drift.js";

const chefPlugin: DeepsecPlugin = {
  name: "chef-llm-doc-governance",
  matchers: [chefSensitiveRepoLeak, chefRawSourceArtifact, chefV1ScopeDrift],
};

export default defineConfig({
  projects: [
    { id: "Chef-llm", root: ".." },
    // <deepsec:projects-insert-above>
  ],
  plugins: [chefPlugin],
});

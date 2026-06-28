import type { CandidateMatch, MatcherPlugin } from "deepsec/config";
import { regexMatcher } from "deepsec/config";

export const chefV1ScopeDrift: MatcherPlugin = {
  slug: "chef-v1-scope-drift",
  description: "Docs implying premature V1 recipe extraction or rights clearance",
  noiseTier: "normal",
  filePatterns: ["**/*.md"],
  match(content, filePath): CandidateMatch[] {
    if (filePath.startsWith(".deepsec/")) return [];
    return regexMatcher(
      "chef-v1-scope-drift",
      [
        { regex: /\bpilot extraction\b/i, label: "pilot extraction phrasing" },
        { regex: /\bstart(?:ing)? recipe extraction\b/i, label: "start recipe extraction phrasing" },
        { regex: /\bV1\b[^\n]{0,100}\b(recipe extraction|clean-room recipes|fine-tuning|model weights)\b/i, label: "post-V1 work framed as V1" },
        { regex: /\bpre-?1929\b[^\n]{0,120}\b(safe to publish|cleared|approved|public[- ]release approved)\b/i, label: "pre-1929 treated as clearance" },
      ],
      content,
    );
  },
};

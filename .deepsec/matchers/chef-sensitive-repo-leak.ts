import type { CandidateMatch, MatcherPlugin } from "deepsec/config";
import { regexMatcher } from "deepsec/config";

export const chefSensitiveRepoLeak: MatcherPlugin = {
  slug: "chef-sensitive-repo-leak",
  description: "Chef-LLM docs/configs leaking local paths, private links, or secrets",
  noiseTier: "precise",
  filePatterns: [
    "**/*.md",
    "**/*.json",
    "**/*.yaml",
    "**/*.yml",
    "**/*.toml",
    "**/.gitignore",
    "**/.env*",
  ],
  match(content, filePath): CandidateMatch[] {
    if (filePath.startsWith(".deepsec/")) return [];
    return regexMatcher(
      "chef-sensitive-repo-leak",
      [
        { regex: /\/Users\/[A-Za-z0-9._-]+(?:\/|\b)/, label: "macOS user-local path" },
        { regex: /\/home\/[A-Za-z0-9._-]+(?:\/|\b)/, label: "Linux user-local path" },
        { regex: /file:\/\/[^\s)>'"]+/, label: "file:// local URL" },
        { regex: /https:\/\/(?:drive|docs)\.google\.com\/[^\s)>'"]+/i, label: "Google Drive/Docs private link" },
        { regex: /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9/_-]+/, label: "Slack webhook URL" },
        { regex: /\b(?:sk-[A-Za-z0-9_-]{20,}|vck_[A-Za-z0-9_-]{20,}|xox[baprs]-[A-Za-z0-9-]{20,})\b/, label: "API token literal" },
      ],
      content,
    );
  },
};

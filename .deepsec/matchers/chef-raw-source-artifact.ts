import type { CandidateMatch, MatcherPlugin } from "deepsec/config";

export const chefRawSourceArtifact: MatcherPlugin = {
  slug: "chef-raw-source-artifact",
  description: "Raw scans/PDFs or non-placeholder raw source files committed to the repo",
  noiseTier: "precise",
  filePatterns: [
    "10_source_library/raw_sources/**",
    "**/*.{pdf,tif,tiff,heic,mov,mp4}",
  ],
  match(content, filePath): CandidateMatch[] {
    if (filePath === "10_source_library/raw_sources/README.md") return [];
    if (filePath.startsWith(".deepsec/")) return [];
    return [
      {
        vulnSlug: "chef-raw-source-artifact",
        lineNumbers: [1],
        snippet: content.slice(0, 400),
        matchedPattern: "raw source artifact path should remain off-git",
      },
    ];
  },
};

# Schema Questions

Status: Open.

## Core Questions

1. Is the first database book-first, recipe-first, or source-fragment-first?
2. Do we store full OCR text in the repo, outside the repo, or only references?
3. How do we represent uncertain dates, authors, or editions?
4. How do we link one historical recipe to modern variants or duplicates?
5. Should ingredients be normalized immediately or preserved as original strings first?
6. How do we represent measurement ambiguity without losing meaning?
7. What is the citation unit: page, paragraph, recipe number, image region, or OCR span?

## Default Recommendation

Start source-first and citation-first. If the project cannot trace a structured claim back to a source location, the database will not be trustworthy.


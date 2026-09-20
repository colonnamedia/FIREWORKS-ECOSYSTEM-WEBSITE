# FIREWORKS project handoff specification

`FIREWORKS-PROJECT.md` is the portable source of project continuity. It must describe the repository state another chat will actually receive.

## Required qualities

- Keep it concise enough to load at the start of every project chat.
- Prefer tables and short bullets over a development diary.
- Include facts needed to work safely; exclude conversation history that does not change implementation.
- Use exact repository, branch, commit, host, URLs, commands, paths, and environment variable names.
- Label unknown, blocked, placeholder, preview-only, and production values accurately.
- Never include credentials, tokens, passwords, private customer information, or secret values.

## Required sections

Complete every section in the bundled template. Use `None` only after checking that a category does not apply. Do not delete headings merely because setup is unfinished.

The integration table must distinguish:

- **Not selected:** deliberately excluded;
- **Planned:** approved but not implemented;
- **Configured locally:** code exists but external setup or environment values remain;
- **Preview verified:** tested in the preview environment;
- **Production verified:** confirmed against the live deployment.

## Commit accuracy

Update the handoff after the final code changes, then commit both together. Record the resulting commit SHA after the commit when possible; if that requires one follow-up documentation commit, record both the tested implementation commit and the handoff update commit clearly.

## New-chat starting prompt

The final section must contain a ready-to-copy prompt telling the next chat to:

1. treat the file as project context;
2. inspect the repository and verify whether anything changed after the recorded commit;
3. preserve the listed hosting and integration decisions;
4. work on a branch and preview;
5. avoid merging or publishing until Anthony approves.

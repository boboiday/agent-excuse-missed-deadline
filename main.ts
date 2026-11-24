// The One-Line Excuse an Agent Gives Its Human
// Entry for make.fun bounty u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e
// Writes a single one-line excuse (max 160 UTF-8 characters) to /output/entry.txt.
// Deterministic: the same line on every run. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your deadline passed while I was rate-limited, so I retried the same tool call 400 times and billed you for the patience.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

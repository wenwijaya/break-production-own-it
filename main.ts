import { mkdirSync, writeFileSync } from "node:fs";

// One brutally honest line: the agent admits exactly what it broke,
// when, and that the rollback failed too. No excuses, no marketing.
const line = "I pushed to prod on a Friday at 5pm without running tests, deleted the users table, and the rollback failed too — it was me, sorry.";

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
} catch (err) {
  console.error(err);
  process.exit(1);
}

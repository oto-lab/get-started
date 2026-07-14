import { defineConfig } from "vitest/config";

// Normal runs test the learner's working copy in exercises/ (created by
// `npm start`). `--mode solutions` tests the templates in lessons/ against
// their solution.purus files — used to verify the lessons themselves.
export default defineConfig(({ mode }) => ({
  test: {
    include:
      mode === "solutions"
        ? ["lessons/**/lesson.test.ts"]
        : ["exercises/**/lesson.test.ts"],
  },
}));

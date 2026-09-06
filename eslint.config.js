import antfu from "@antfu/eslint-config";

export default antfu({
  vue: true,
  typescript: true,
  ignores: ["dist", "node_modules", "*.d.ts"],
  rules: {
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
      },
    ],
  },
});

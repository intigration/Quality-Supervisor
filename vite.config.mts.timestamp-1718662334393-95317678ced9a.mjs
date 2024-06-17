// vite.config.mts
import { defineConfig } from "file:///G:/code/personal-security-checklist/Quality-Supervisor/node_modules/.pnpm/vite@4.5.3_@types+node@20.12.12/node_modules/vite/dist/node/index.js";
import { qwikVite } from "file:///G:/code/personal-security-checklist/Quality-Supervisor/node_modules/.pnpm/@builder.io+qwik@1.5.5_@types+node@20.12.12_undici@5.28.4/node_modules/@builder.io/qwik/optimizer.mjs";
import { qwikCity } from "file:///G:/code/personal-security-checklist/Quality-Supervisor/node_modules/.pnpm/@builder.io+qwik-city@1.5.5_@types+node@20.12.12_rollup@4.18.0/node_modules/@builder.io/qwik-city/vite/index.mjs";
import tsconfigPaths from "file:///G:/code/personal-security-checklist/Quality-Supervisor/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@4.5.3_@types+node@20.12.12_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { viteStaticCopy } from "file:///G:/code/personal-security-checklist/Quality-Supervisor/node_modules/.pnpm/vite-plugin-static-copy@1.0.5_vite@4.5.3_@types+node@20.12.12_/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig(() => {
  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      viteStaticCopy({
        targets: [
          {
            src: "framework.tsx",
            dest: "components/starter/icons"
          },
          {
            src: "personal-security-checklist.yml",
            dest: "public"
          }
        ]
      })
    ],
    server: {
      headers: {
        "Cache-Control": "public, max-age=0"
      }
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRzpcXFxcY29kZVxcXFxwZXJzb25hbC1zZWN1cml0eS1jaGVja2xpc3RcXFxcUXVhbGl0eS1TdXBlcnZpc29yXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJHOlxcXFxjb2RlXFxcXHBlcnNvbmFsLXNlY3VyaXR5LWNoZWNrbGlzdFxcXFxRdWFsaXR5LVN1cGVydmlzb3JcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9HOi9jb2RlL3BlcnNvbmFsLXNlY3VyaXR5LWNoZWNrbGlzdC9RdWFsaXR5LVN1cGVydmlzb3Ivdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCB0eXBlIFVzZXJDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgeyBxd2lrVml0ZSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrL29wdGltaXplclwiO1xyXG5pbXBvcnQgeyBxd2lrQ2l0eSB9IGZyb20gXCJAYnVpbGRlci5pby9xd2lrLWNpdHkvdml0ZVwiO1xyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiO1xyXG5pbXBvcnQgeyB2aXRlU3RhdGljQ29weSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXN0YXRpYy1jb3B5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCgpOiBVc2VyQ29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICBxd2lrQ2l0eSgpLFxyXG4gICAgICBxd2lrVml0ZSgpLFxyXG4gICAgICB0c2NvbmZpZ1BhdGhzKCksXHJcbiAgICAgIHZpdGVTdGF0aWNDb3B5KHtcclxuICAgICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJ2ZyYW1ld29yay50c3gnLFxyXG4gICAgICAgICAgICBkZXN0OiAnY29tcG9uZW50cy9zdGFydGVyL2ljb25zJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc3JjOiAncGVyc29uYWwtc2VjdXJpdHktY2hlY2tsaXN0LnltbCcsXHJcbiAgICAgICAgICAgIGRlc3Q6ICdwdWJsaWMnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9KVxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDYWNoZS1Db250cm9sXCI6IFwicHVibGljLCBtYXgtYWdlPTBcIixcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3OiB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNhY2hlLUNvbnRyb2xcIjogXCJwdWJsaWMsIG1heC1hZ2U9NjAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThWLFNBQVMsb0JBQXFDO0FBQzVZLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsZ0JBQWdCO0FBQ3pCLE9BQU8sbUJBQW1CO0FBQzFCLFNBQVMsc0JBQXNCO0FBRS9CLElBQU8sc0JBQVEsYUFBYSxNQUFrQjtBQUM1QyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxjQUFjO0FBQUEsTUFDZCxlQUFlO0FBQUEsUUFDYixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixTQUFTO0FBQUEsUUFDUCxpQkFBaUI7QUFBQSxNQUNuQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

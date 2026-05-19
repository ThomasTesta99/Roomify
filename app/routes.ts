import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    { path: "visualizer/:id", file: "routes/visualizer.$id.tsx" }
] satisfies RouteConfig;

export const config = {
  apiUri: `${import.meta.env.VITE_BACKEND_API + import.meta.env.VITE_BACKEND_PORT}`,
  deployUri: import.meta.env.VITE_DEPLOY_BACKEND,
  env: import.meta.env.VITE_NODE_ENV,
  github : import.meta.env.VITE_CREATOR_GITHUB
}

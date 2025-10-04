module.exports = {
  apps: [
    {
      name: 'my-react-app',
      script: 'npm',
      args: 'run preview',
      watch: true,
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: '3000'
      },
    },
  ],
}
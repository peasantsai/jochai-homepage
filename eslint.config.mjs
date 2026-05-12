import nextPlugin from 'eslint-config-next';

const nextConfig = Array.isArray(nextPlugin) ? nextPlugin : [nextPlugin];
const config = [
  ...nextConfig,
  {
    rules: {
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
];

export default config;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Gera uma versão estática do site
  basePath: '/my-website', // Substitua pelo nome do repositório
  assetPrefix: '/my-website/', // Substitua pelo nome do repositório
};

export default nextConfig;
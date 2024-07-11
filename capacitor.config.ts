import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'discord.clone',
  appName: 'discord-clone',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;

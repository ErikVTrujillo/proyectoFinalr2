import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'biblio',
  webDir: 'dist',
  server: {
    androidScheme: 'https/biblio'
  }
};

export default config;

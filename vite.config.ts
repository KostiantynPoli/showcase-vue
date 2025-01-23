import { defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig((mode: any) => {
  const env = loadEnv(mode, process.cwd());
  const GA_TRACKING_ID =  env.VITE_GA_TRACKING_ID;
  return {
    base: '/',
    plugins: [
      vue(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          if (!GA_TRACKING_ID) return html;
          const gaScript = `
            <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            </script>
          `;
          return html.replace('</head>', `${gaScript}</head>`);
        },
      },
    ],
    css: {
      preprocessorOptions: {
        scss: {
          log(){
            console.log('GA4')
          },
          additionalData: `
          $main_background_color: ${env.VITE_MAIN_BACKGROUND || '#eaedf2' };
          $main_header_color: ${env.VITE_HEADER_BACKGROUND || '#eaedf2' };
          $slogan-color: ${env.VITE_BLOCK_SLOGAN_COLOR || '#55af9a'};
          $slogan-text-color: ${env.VITE_SLOGAN_TEXT_COLOR || '#fff'};
          $button_color: ${env.VITE_OFFER_BUTTON_COLOR || '#55af9a'};
          $offer-title: ${env.VITE_OFFER_TITLE_COLOR || '#000'};
          $footer-color: ${env.VITE_FOOTER_BACKGROUND || '#1665cf'};`
        }
      }
    },
    build: {
      outDir: 'dist',
    },
  };
});
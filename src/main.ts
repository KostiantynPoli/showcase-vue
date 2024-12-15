import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {domainName, queryParams, urlParams, writeCookies} from "./api/offers.ts";

export function handleClick(event: MouseEvent) {
    console.log(event);
    const target = event.currentTarget as HTMLElement;
    const href = target.dataset.href;

    if (href) {
        window.open(href, '_blank'); // Открываем ссылку в новой вкладке
    }
}
export const getParams = queryParams(urlParams);
writeCookies(getParams, domainName);



createApp(App).mount('#app')


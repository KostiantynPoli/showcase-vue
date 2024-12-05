import {createApp, ref} from 'vue'
import './style.css'
import App from './App.vue'
import Cookies from 'js-cookie';


export const offers: Record<string, any> = ref([
    {
        id: 1,
        slogan: "Працюємо 24/7",
        name: "MoneyGo",
        period: 30,
        priceFrom: 5000,
        priceTo: 30000,
        percentFrom: 0.05,
        percentTo: 300,
        image: "https://napotreby.uno/img/CreditPlus.svg",
        characteristic: "https://napotreby.uno/",
        warning: "https://youtrack.treeum.net/agiles/106-139/current",
        address: "Україна, 01010, м. Київ, площа Арсенальна, будинок 1-Б",
        supportPhone: "322333322",
        supportEmail: "test@info.lom",
        certificate: "booka",
        licence: "Ліцензія видана рішенням Нацкомфінпослуг № 998 від 28.05.20xx"
    },
    {
        id: 2,
        slogan: "Працюємо 24/7",
        name: "Money To Go",
        period: 30,
        priceTo: 30000,
        percentFrom: 0.05,
        percentTo: 300,
        image: "https://napotreby.uno/img/CreditPlus.svg",
        characteristic: "https://napotreby.uno/",
        warning: "https://youtrack.treeum.net/agiles/106-139/current",
        address: "м. Київ, вул. Казимира Малевича, 86 літ. Д",
        supportPhone: "911333322",
        supportEmail: "test@info.bom",
        certificate: "booka",
        licence: "Ліцензія видана рішенням Нацкомфінпослуг № 997 від 28.05.20xx"
    },
    {
        id: 1,
        slogan: "Працюємо 24/7",
        name: "Money Foo Go",
        period: 30,
        priceFrom: 5000,
        priceTo: 30000,
        percentTo: 300,
        image: "https://napotreby.uno/img/CreditPlus.svg",
        characteristic: "https://napotreby.uno/",
        warning: "https://youtrack.treeum.net/agiles/106-139/current",
        address: "м. Київ, вул. Казимира Малевича, 9 3/4",
        supportPhone: "822333322",
        supportEmail: "test@info.com",
        certificate: "booka",
        licence: "Ліцензія видана рішенням Нацкомфінпослуг № 987 від 28.05.20xx"
    },
]);

type DefaultParams = {
    aid: string;
    promo: string;
    campaign: string;
    source: string;
    tid1: string;
    tid2: string;
    hash: string;
};
export const domainName: string = 'test_cookie_set'
const rdrDomain: string = 'go.salesdoubler.net'
const defaultAid: number = 105674;

const urlParams = new URLSearchParams(window.location.search);

const defaultParams: DefaultParams = {
    aid: "",
    promo: "",
    campaign: "",
    source: "",
    tid1: "",
    tid2: "",
    hash: "",
};

function checkAid(paramId?: string | null): string {

    if (!paramId || paramId === "") {
        paramId = String(defaultAid);
    }
    return paramId;
}

function writeCookies(queryParams: Record<string, unknown>, domainName: string): void {
    if (Object.keys(queryParams).length > 0) {
        const params: Record<string, unknown> = { ...defaultParams, ...queryParams };
        Cookies.set(domainName, JSON.stringify(params), { expires: 365 });
    }
}

function queryParams(urlParams: URLSearchParams): Record<string, string | undefined> {
    const getParams: Record<string, string | undefined> = {};
    urlParams.forEach((value, key) => {
        getParams[key.toLowerCase()] = value;
    });
    return getParams;
}


export function renderRDRLink(
    queryParams: Record<string, any>,
    offer: any,
    domain: string,
): string {
    const defaultParams = { promo: "", campaign: "", source: "", tid1: "", tid2: "", hash: "", aid: "" };
    let params = { ...defaultParams, ...queryParams };

    const storedParams = Cookies.get(domain) ? JSON.parse(Cookies.get(domain) || "{}") : null;
    if (storedParams) {
        params = { ...defaultParams, ...storedParams };
    }

    const baseUrl = `https://${rdrDomain}/in/offer/${offer.id}?aid=${checkAid(params.aid)}`;

    const additionalParams = Object.entries(params)
        .filter(([key, value]) => key !== "aid" && value)
        .map(([key, value]) => `&${key}=${value}`)
        .join("");

    return `${baseUrl}${additionalParams}`;
}


export function handleClick(event: MouseEvent) {
    console.log(event);
    const target = event.currentTarget as HTMLElement; // Получаем родительский элемент
    const href = target.dataset.href;

    if (href) {
        window.open(href, '_blank'); // Открываем ссылку в новой вкладке
    }
}
export const getParams = queryParams(urlParams)
writeCookies(getParams, domainName)



createApp(App).mount('#app')


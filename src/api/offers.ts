
import Cookies from "js-cookie";
import offers from "./offers.json";

// const data = ref<any[]>([]);
// const isLoading = ref<boolean>(true);

// export const getOffers = async () => {
//     try {
//         const response =  await fetch('./src/api/offers.json');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         data.value = await response.json();
//     } catch (err) {
//         error.value = (err as Error).message;
//     } finally {
//         isLoading.value = false;
//     }
// }

export const getOffers = offers.offers


type DefaultParams = {
    aid: string;
    promo: string;
    campaign: string;
    source: string;
    tid1: string;
    tid2: string;
    hash: string;
};

const defaultParams: DefaultParams = {
    aid: "",
    promo: "",
    campaign: "",
    source: "",
    tid1: "",
    tid2: "",
    hash: "",
};

export const domainName: string = 'test_cookie_set'
const rdrDomain: string = 'go.salesdoubler.net'
const defaultAid: number = 105674;

export const urlParams = new URLSearchParams(window.location.search);

function checkAid(paramId?: string | null): string {

    if (!paramId || paramId === "") {
        paramId = String(defaultAid);
    }
    return paramId;
}

export function writeCookies(queryParams: Record<string, unknown>, domainName: string): void {
    if (Object.keys(queryParams).length > 0) {
        const params: Record<string, unknown> = { ...defaultParams, ...queryParams };
        Cookies.set(domainName, JSON.stringify(params), { expires: 365 });
    }
}

export function queryParams(urlParams: URLSearchParams): Record<string, string | undefined> {
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
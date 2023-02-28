import { log, url } from "../common/vars";

export async function post(endpoint: string, bodyObj: any): Promise<any> {
    log({ endpoint, bodyObj });
    const json = await fetch(`${url}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(bodyObj),
    }).then(res => res.json());
    log({ json });
    return json;
}
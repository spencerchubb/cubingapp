import { getToken } from "../auth";
import { log, url } from "../common/vars";

export async function post(endpoint: string, bodyObj: any): Promise<any> {
    log({ endpoint, bodyObj });
    const authToken = await getToken() ?? "";
    const json = await fetch(`${url}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": authToken,
        },
        body: JSON.stringify(bodyObj),
    }).then(res => {
        if (res.status === 500) {
            alert("Server error - Please reach out to me and I will fix it. (spencerchubb@gmail.com)");
            return;
        }
        return res.json();
    });
    log({ json });
    return json;
}
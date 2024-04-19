import { JSDOM } from "jsdom"

export async function load() {
    const html = "<p>world</p>"
    const document = new JSDOM(html).window.document
    const message = document.querySelector("p")?.textContent ?? "unknown"

    return { message }
}

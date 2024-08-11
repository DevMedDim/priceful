"use server";

import { scrapeProduct } from "../scrapper";

export async function ScrapeSaveAction(ProductUrl: string) {
if(!ProductUrl) return;
try {
const scrapedProduct = await scrapeProduct(ProductUrl);
} catch (error: any) {
throw new Error(`Product setup failure:${error.message}`);
}
}

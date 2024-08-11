export async function scrapeProduct(ProductUrl: string) {
    if (!ProductUrl) return;
    // echo -e "\n\nThis is the VERBOSE version sample cURL code for Web Unlocker.\nIn order to instantly use Web Unlocker, you need to either install an SSL certificate\nor to ignore SSL errors in your code.\n\nThis cURL includes the '-k' option to ignore SSL errors.\n\nPress Enter to continue..." && read input && echo -e "\nThanks. I am going to run the following cURL command now:\n" && echo "curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_3b869c83-zone-priceful:snit4260swl2 -k \"https://geo.brdtest.com/welcome.txt\"" && echo -e "\nCopy this cURL if you want to run it in non-verbose mode.\n\nHere's the result of the cURL:\n" && curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_3b869c83-zone-priceful:snit4260swl2 -k "https://geo.brdtest.com/welcome.txt" && echo -e "\n\nFor additional information visit:\nhttps://docs.brightdata.com/general/account/ssl-certificate\n"


    // TODO: Implement scrapper, brightdata proxy scrapper config
    const username = String(process.env.BRIGHT_DATA_USERNAME);
    const password = String(process.env.BRIGHT_DATA_PASSWORD);
    const port = String(process.env.BRIGHT_DATA_PORT);
    const sessionId = (1000000 * Math.random()) | 0;
    const options = {
        auth: {
            username: `${username}-session-${sessionId}`,
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized: false,
    };
    try {
        // fetch product
    } catch (error: any) {
        throw new Error(`Error while scraping product: ${error.message}`);

    }
}

const eventBaseUrl: any = `${process.env.NEXT_PUBLIC_FEED_API}`;

export default {
    CREATE_POST: () => eventBaseUrl + `feed`,
    GET_POST: () => eventBaseUrl + `feed`

}
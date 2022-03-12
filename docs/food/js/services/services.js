const postData = async(url, data) => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    return await res.json();
};

const getResource = async(url) => {
    const res = await fetch(url);
    // c Promise (fetch) возвращаются такие свойства как: 
    // .ОК (что-то получили)
    // status - статус который вернул сервер
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    return await res.json();
};

export { postData };
export { getResource };
const metaData = require('./metadata.js')
const AssetCache = require("@11ty/eleventy-cache-assets");

async function fetchData() {
    urlToCache = metaData.apiUrl + '/menus/all';
    cacheInterval = metaData.cacheInterval;
    try {
        return AssetCache(
            urlToCache,
            {
                duration: cacheInterval,
                type: "json"
            }
        );
    } catch (error) {
        console.error(`Error: ${error}`);
        return [];
    }
}

async function processData(data) {
    return Promise.all(
        Object.keys(data).map(async (key, index) => {
            return await {
                menu: data[key].menu,
                id: data[key].id,
                parentId: data[key].parent_id,
                title: data[key].title,
                url: data[key].url,
                children: data[key].children,
                order: data[key].order
            };
        })
    );
}

module.exports = async () => {
    const data = await fetchData();
    const processedData = await processData(data);
    return processedData;
};






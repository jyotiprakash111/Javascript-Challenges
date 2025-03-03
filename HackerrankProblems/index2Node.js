// HackerRank's NodeJS environment allows the `request` package.
const request = require('request');

function fetch(url) {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            if (error)
                reject(error)
            else
                resolve(body)
        });
    });
}

async function getCountryName(countryCode) {
    let pageNumber = 1;
    let countryName = null;

    while (countryName === null) {
        let url = `https://jsonmock.hackerrank.com/api/countries?page=${pageNumber}`;
        // let response = await fetch(url);
        // let responseBody = JSON.parse(response);
        response = await fetch(url); error //line in Codesandnox env
        responseBody = JSON.parse(response); //- error line Codesandnox env

        responseBody.data.forEach((countryData) => {
            if (countryData.alpha2Code === countryCode) 
                countryName = countryData.name;
        });
        if (responseBody.total_pages == pageNumber ++)
            break;
    }

    if (countryName === null) {
        // throw new error("Country code not found."); - error line
        throw new Error("Country code not found.");
    }
    return countryName;
}


getCountryName("AF").then((result) => {
    console.log(result);
});
getCountryName("ZW").then((result) => {
    console.log(result);
});
getCountryName("AR").then((result)=>{
    console.log(result)
})
getCountryName("NaN").then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error.message);
});


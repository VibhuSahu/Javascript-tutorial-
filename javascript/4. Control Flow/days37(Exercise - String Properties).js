function showProperties(obj) {      // It print the properties who value is strings
    for (var key in obj) {
        if (typeof obj[key] === 'string') console.log(key + ' : ' + obj[key]);
    }
}


const movie = {
    title : 'a',
    releaseYear : 2018,
    rating : 4.5,
    director : 'b'
};

showProperties(movie);
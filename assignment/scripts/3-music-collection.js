console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
    if (collection && title) {
        const record = { title, artist, yearPublished };
        collection.push(record);
        return record;
    }
    return null;
}

console.log(`Add Neil Young record to collection with addToCollection()`, addToCollection(myCollection, 'Rust Never Sleeps', 'Neil Young', 1979));
console.log(`Record collection is now:`, myCollection);

console.log(`Add 6 records to collection by various artists`);
console.log(`Add record:`, addToCollection(myCollection, 'Lateralus', 'TOOL', 2001));
console.log(`Add record:`, addToCollection(myCollection, 'Gaslighter', 'The Chicks', 2020));
console.log(`Add record:`, addToCollection(myCollection, 'Pink Floyd', 'The Darkside of the Moon', 1973));
console.log(`Add record:`, addToCollection(myCollection, 'Take It Like a Man', 'Amanda Shires', 2022));
console.log(`Add record:`, addToCollection(myCollection, 'Love Letters From The Western Gate', 'Going To The Sun', 2020));
console.log(`Add record:`, addToCollection(myCollection, 'The Great Subconscious Club', 'K\'s Choice', 1994));
console.log(`Collection is now ${myCollection.length} records:`, myCollection);

function showCollection(collection) {
    if (collection.length) {
        for (const record of collection) {
            console.log(`"${record.title}" by ${record.artist}, published in ${record.yearPublished}`);
        }
    }
    return null;
}

console.log(`Show record collection with showCollection() in formatted strings:`);
showCollection(myCollection);

function findByArtist(collection, artist) {
    let results = [];
    if (collection && artist) {
        for (const record of collection) {
            if (record.artist === artist) {
                results.push(record);
            }
        }
    }
    return results;
}

console.log(`Add an additional Neil Young record to collection with addToCollection()`);
addToCollection(myCollection, 'Harvest', 'Neil Young', 1972);

let results = findByArtist(myCollection, 'Neil Young');
console.log(`${results.length} albums found for 'Neil Young' using findByArtist():`, results);

results = findByArtist(myCollection, 'Tina Turner');
console.log(`${results.length} albums found for 'Tina Turner' using findByArtist():`, results);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}


const { SegmentedWord, WordSolution, WordCombination } = require("./wordModels");
const { runQuery } = require("./helpers");

const harakatList = ["َ", "ً", "ُ", "ٌ", "ِ", "ٍ", "ْ", "ّ"];

function removeDiacritics(word) {
    for (const haraka of harakatList) {
        word = word.replace(haraka, "");
    }
    return word;
}


function segmentWord(word) {
    let possibleSegments = new Set();
    let prefixLength = 0;
    let suffixLength = 0;

    while (prefixLength <= 4 && prefixLength < word.length) {
        let prefix = word.substring(0, prefixLength);
        let stemLength = word.length - prefixLength;
        suffixLength = 0;

        while (stemLength >= 1 && suffixLength <= 6) {
            let stem = word.substring(prefixLength, (prefixLength + stemLength));
            let suffix = word.substring((prefixLength + stemLength), (prefixLength + stemLength + suffixLength));
            possibleSegments.add(new SegmentedWord(prefix, stem, suffix));
            stemLength--;
            suffixLength--;
        }
        prefixLength++;
    }

    return possibleSegments;
}


function runAnalyser(arabicWord) {

    arabicWord = removeDiacritics(arabicWord);
    let solutionsArray = [];

    const possibleSegments = segmentWord(arabicWord);

    for (let segment of possibleSegments) {
        let prefix = segment.prefix;
        let stem = segment.stem;
        let suffix = segment.suffix;

        let wordCombination = new WordCombination(prefix, stem, suffix);
        runQuery(wordCombination);

    }

}


function main(lookupWord) {
    wordMeanings = runAnalyser(lookupWord);

}


main("كتاب");


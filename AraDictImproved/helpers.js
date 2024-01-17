const sqlite3 = require("sqlite3").verbose();
const { WordCombination, WordSolution } = require("./wordModels");



const selectQuery = `SELECT DISTINCT 
prefixes.VOC_FORM || stems.VOC_FORM || suffixes.VOC_FORM AS VOC_FORM,
prefixes.GLOSS AS PRE_GLOSS, 
stems.GLOSS AS STE_GLOSS, 
suffixes.GLOSS AS SUF_GLOSS, 
prefixes.POS_NICE || ', ' || stems.POS_NICE || ', ' || suffixes.POS_NICE AS POS, 
stems.ROOT, 
stems.MEASURE
FROM stems 
INNER JOIN tableAB 
ON stems.CAT_ID=tableAB.stemCatId 
INNER JOIN prefixes 
ON tableAB.prefCatID=prefixes.CAT_ID 
INNER JOIN tableBC 
ON stems.CAT_ID=tableBC.stemCatID 
INNER JOIN suffixes 
ON tableBC.suffCatID=suffixes.CAT_ID 
WHERE prefixes.FORM=$prefix 
AND stems.FORM=$stem 
AND suffixes.FORM=$suffix 
AND EXISTS 
(SELECT * 
FROM tableAC 
WHERE tableAC.prefCatID=prefixes.CAT_ID 
AND tableAC.suffCatID=suffixes.CAT_ID);`;



function runQuery(wordCombination) {

    let db = new sqlite3.Database("../data/aramorph.sqlite", sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.log(err.message);
        }
    });


    db.all(selectQuery,
        { $prefix: wordCombination.prefix, $stem: wordCombination.stem, $suffix: wordCombination.suffix },
        (err, rows) => {
            if (err) {
                console.log(err.message);
            }

            rows.forEach((row) => {
                console.log(row);
            })

        });


    db.close((err) => {
        if (err) {
            console.log(err.message);
        }
    });

}



module.exports = { runQuery };


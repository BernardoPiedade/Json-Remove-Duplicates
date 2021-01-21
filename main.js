var list = [
    //just copy-paste your json file here, it's faster than reading the file..
    //All you have to do is copy-paste, run the script and done.
];

function arrUnique(arr) {
    var cleaned = [];
    list.forEach(function(itm) {
        var unique = true;
        cleaned.forEach(function(itm2) {
            if (_.isEqual(itm, itm2)) unique = false;
        });
        if (unique)  cleaned.push(itm);
    });
    return cleaned;
}

var uniqueStandards = arrUnique(list);

document.body.innerHTML = '<pre>' + JSON.stringify(uniqueStandards, null, 4) + '</pre>';

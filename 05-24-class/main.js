function reverse(str) {
    return [...str].reverse().join("")
}

console.log(reverse("salam"));


function getDifference(a, b)
{
    var i = 0;
    var j = 0;
    var result = "";

    while (j < b.length)
    {
     if (a[i] != b[j] || i == a.length)
         result += b[j];
     else
         i++;
     j++;
    }
    return result;
}

console.log(getDifference("abcd", "abcde"));


function makeBrecket(str){
    let splitStr=[...str];
}

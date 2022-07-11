const runLengthEncoding = (string) => {
    let cnt = 1;
    let output = '';

    string.split('').forEach((ch, idx) => {
        if (string[idx + 1] === ch && cnt < 9) {
            cnt++;
        } else {
            output += `${cnt}${ch}`;
            cnt = 1;
        }
    })

    return output;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
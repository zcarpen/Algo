const tournamentWinner = (competitions, results) => {
    // create a participants object
    const participants = {};
    // create highest score variable
    let highestScore = 0;
    // loop through the competitions array
    for (let i = 0; i < competitions.length; i++) {
        let home = competitions[i][0];
        let away = competitions[i][1];
        participants[home] = participants[home] === undefined ? 0 : participants[home]
        participants[away] = participants[away] === undefined ? 0 : participants[away]
        if (results[i] === 1) {
            participants[home] = participants[home] + 3;
            highestScore = Math.max(participants[home], highestScore)
        } else {
            participants[away] = participants[away] + 3;
            highestScore = Math.max(participants[away], highestScore)
        }
    }
    // loop through object and return team with highest score
    for (let team in participants) {
        if (participants[team] === highestScore) {
            return team;
        }
    }
}
console.log(tournamentWinner([
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ], [0,0,1]))
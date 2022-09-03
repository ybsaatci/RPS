function getComputerChoice() {
    const rps = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    console.log(rps[choice]);
}
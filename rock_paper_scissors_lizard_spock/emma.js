/**
 * Scissors cuts paper. 
 * Paper covers rock.
 * Rock crushes lizard.
 * Lizard poisons Spock.
 * Spock smashes scissors.
 * Scissors decapitates lizard.
 * Lizard eats paper.
 * Paper disproves Spock.
 * Spock vaporizes rock.
 * And, as it always has, rock crushes scissors.
 */
function playRound(userHand, computerHand) {
    if (userHand.name === computerHand.name) {
        return "It's a draw!";
    }

    let outcomes = {
        "Rock": {
            "Paper": { win: 0, verb: "Covers" },
            "Scissors": { win: 1, verb: "Crushes" },
            "Lizard": { win: 1, verb: "Crushes" },
            "Spock": { win: 0, verb: "Vaporizes" }
        },
        "Paper": {
            "Rock": { win: 1, verb: "Covers" },
            "Scissors": { win: 0, verb: "Cuts" },
            "Lizard": { win: 0, verb: "Eats" },
            "Spock": { win: 1, verb: "Disproves" }
        },
        "Scissors": {
            "Rock": { win: 0, verb: "Crushes" },
            "Paper": { win: 1, verb: "Cuts" },
            "Lizard": { win: 1, verb: "Decapitates" },
            "Spock": { win: 0, verb: "Smashes" }
        },
        "Lizard": {
            "Rock": { win: 0, verb: "Crushes" },
            "Paper": { win: 1, verb: "Eats" },
            "Scissors": { win: 0, verb: "Decapitates" },
            "Spock": { win: 1, verb: "Poisons" }
        },
        "Spock": {
            "Rock": { win: 1, verb: "Vaporizes" },
            "Paper": { win: 0, verb: "Disproves" },
            "Scissors": { win: 1, verb: "Smashes" },
            "Lizard": { win: 0, verb: "Poisons" },
        }
    };

    let outcome = outcomes[userHand.name][computerHand.name];
    if (outcome.win) {
        return `You Win! ${userHand.name} ${outcome.verb} ${computerHand.name}.`;
    }
    return `You Lose! ${computerHand.name} ${outcome.verb} ${userHand.name}.`;
}

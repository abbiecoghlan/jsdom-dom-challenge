const counter = document.getElementById('counter');
let counterNumber = parseInt(counter.innerText)
let likesCounter = 0
let likedNumbers = {}
let counterRunning = true


function incrementCounter() {
if (counterRunning){
    counterNumber += 1
    counter.innerText = counterNumber;    
    }
}

function decrementCounter() {
if (counterRunning){
    counterNumber -= 1
    counter.innerText = counterNumber;    
    }
}



function resetLikes(){
    likesCounter  = 0  
}



setInterval(incrementCounter, 1000)
// setInterval(resetLikes, 1000)


const plusButton = document.getElementById('plus')
const minusButton = document.getElementById('minus')
const pauseButton = document.getElementById('pause')
const form = document.querySelector("#comment-form")
const commentSection = document.querySelector("#comment-list")

form.addEventListener('submit', addComment)

function addComment(e){
    e.preventDefault()
    let newComment = document.createElement('li')
    newComment.innerText = e.target['comment'].value
    commentSection.append(newComment)
    form.reset()
}


pauseButton.addEventListener("click", () => {
    counterRunning = !counterRunning
    if (counterRunning)
    {
        pauseButton.innerText = "pause"
    }
    else 
    {
        pauseButton.innerText = "resume"
    }
} );

plusButton.addEventListener("click", incrementCounter);
minusButton.addEventListener("click", decrementCounter);

let heartButton = document.querySelector("#heart")
let likesContainer = document.querySelector(".likes")


heartButton.addEventListener("click", displayLikes)

function displayLikes(e){ if(counterRunning){
    if (!document.getElementsByClassName(`${counterNumber}`)[0]) {
        resetLikes()
        likesCounter += 1
        likedNumbers[counterNumber] = likesCounter
        let newLi = document.createElement("li");
        newLi.className = counterNumber
        newLi.dataset.likesCounter = likesCounter
        newLi.innerText = `${counterNumber} has ${likesCounter} likes`;
        likesContainer.append(newLi);


    } else {

        likesCounter = likedNumbers[counterNumber]
        likesCounter += 1
        likedNumbers[counterNumber] = likesCounter
        let currentLi = document.getElementsByClassName(`${counterNumber}`)[0]
        currentLi.dataset.likesCounter = likesCounter
        currentLi.innerText = `${counterNumber} has ${likesCounter} likes`;
    }
}
    
}






// function displayLikes(e){
//     if (likesCounter == 0) {
//         likesCounter += 1
//         let newLi = document.createElement("li");
//         newLi.id = counterNumber
//         newLi.innerText = `${counterNumber} has ${likesCounter} likes`;
//         likesContainer.append(newLi);

//     } else {
//         likesCounter += 1
//         currentLi = likesContainer.lastChild
//         currentLi.innerText = `${counterNumber} has ${likesCounter} likes`;
//     }

    
// }




function shakeMagic8Ball(){
    const question = prompt('Ask the magic 8 ball a question');
    if(question === null){
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList ='text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS 
    }
    
    if (!question.trim()){
        alert('Please enter a valid question')
        return
    }
const randomNumber = Math.floor(Math.random()*8);
let answer, image, color;

switch (randomNumber) {
    case 0:
        answer = "Yes";
        image = "yes.jpg"
        color = "text-success";
        break;
    case 1:
        answer = "No";
        image = "no.jpg" //change this!!;
        color = "text-danger";
        break;
    case 2:
        answer = "Ask again later";
        image = "later.jpg" //change this!!;
        color = "text-secondary";
        break;
    case 3:
        answer = "Maybe";
        image = "maybe.jpg";//change this!!;
        color = "text-warning";
        break;
    case 4:
        answer = "Cannot predict now";
        image = "predict no.jpg";//change this!!;
        color = "text-muted";
        break;
    case 5:
        answer = "Don't count on it";
        image = "dont count on it.jpg";//change this!!;
        color = "text-danger";
        break;
    case 6:
        answer = "Most likely";
        image = "likely.webp";//change this!!;
        color = "text-success";
        break;
    case 7:
        answer = "Outlook not so good";
        image = "not good.jpg";//change this!!;
        color = "text-danger";
        break;
    default:
        break;
}

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;



}


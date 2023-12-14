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
}
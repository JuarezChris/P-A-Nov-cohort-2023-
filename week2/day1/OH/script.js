

const isPalidrome = (word) => {
    let lowerCaseWord = word.trim().toLowerCase()
    let reversed = lowerCaseWord.split("").reverse().join
    ("")
    if( lowerCaseWord == reversed ){
        return true
    } 
    return false
}

// word.toLowerCase()
// console.log(isPalidrome('tacocat'))

// have function accept form data
// call isPalidrome
// display answer in web app 

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target[0].value)
    // let word = e.target[0].value // other way to grab input value
    let word = document.querySelector("#word").value
    if(isPalidrome(word)){
        document.querySelector("#answer").innerText = "Answer: Yes this is a palindrome!!"
    } else {
        document.querySelector("#answer").innerText = "Answer: No this is not a palindrome!! Try again!"
    }
}

// console.log(document.querySelector("#answer").innerText)


const isPalidrome = (word) => {
    let reversed = word.split("").reverse().join
    ("")
    if( word == reversed){
        return true
    } 
    return false
}

// console.log(isPalidrome('tacocat'))

// have function accept form data
// call isPalidrome
// display answer in web app 

const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    console.log(document.querySelector("#word").value)
}

console.log(document.querySelector("#answer").innerText)
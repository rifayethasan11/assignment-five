// will hide the seection and appears history section

function showSectionById (id){
    document.getElementById('donation-content').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

// all input value
function inputFieldGetById(id){
    const inputValue = Number(document.getElementById(id).value);
    return inputValue
}



// will hide the section and show history

function showSectionById (id){
    document.getElementById('donation-content').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

// all input value get by id
function inputFieldGetById(id){
    const inputValue = Number(document.getElementById(id).value);
    return inputValue
}



    // button shift
    const blogBtn = document.getElementById('index-page')
    const donationBtn = document.getElementById('donation-btn')
    const historyBtn = document.getElementById('history-btn')
    const faqPageBtn = document.getElementById('index-page')

// donation btn
    donationBtn.addEventListener('click', function(){
        showSectionById('donation-content')

        donationBtn.classList.add(
            "text-white",
            "bg-gradient-to-r",
            "from-lime-500",
            "to-lime-600"
        );

        historyBtn.classList.remove(
            "text-white",
            "bg-gradient-to-r",
            "from-lime-500",
            "to-lime-600"
        );
    })

// history btn
    historyBtn.addEventListener('click', function(){
        showSectionById('history-section')

        historyBtn.classList.add(
            "text-white",
            "bg-gradient-to-r",
            "from-lime-500",
            "to-lime-600"
        );

        donationBtn.classList.remove(
            "text-white",
            "bg-gradient-to-r",
            "from-lime-500",
            "to-lime-600"
        );
    })


// blog btn
    blogBtn.addEventListener('click', function(){
        window.location.href = 'faq.html';
    })





// modal
    const myModal = document.getElementById('my_modal_5')
    const closeModal = document.getElementById('close-modal')


// donation noakhali
    document.getElementById('donate-btn1').addEventListener('click', function(){
        const donateInput1 = inputFieldGetById('donate-Input1');
        const donateAmountElement = document.getElementById('donate-amount1')
        const donateAmount1 = parseFloat(donateAmountElement.innerText)
        
        
        const mainBalanceElement = document.getElementById('main-balance');
        const mainBalance = parseFloat(mainBalanceElement.innerText);
        const donateTitle1 = document.getElementById('donate-title').innerText;
        
        
        if(donateInput1 > mainBalance){
            alert('You Do not have sufficient balance')
            return;
        }

        if(isNaN(donateInput1) || donateInput1 <=0 ) { 
            alert('Please Enter a valid input') 
        }
        else {
            donateAmountElement.innerText = donateInput1.toFixed(2)

            // calculate balance
            const balance = mainBalance - donateInput1
            
            
            // update balance
            mainBalanceElement.innerText = balance.toFixed(2)

            // sum of donation
            const totalDonate = donateAmount1 + donateInput1
            donateAmountElement.innerText = totalDonate
            myModal.showModal()

            // history 

            const history = document.createElement('div')
            history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
            history.innerHTML = `
                <p class="text-lg text-gray-500" > <span class="font-bold text-blue-500"> ${donateInput1} Tk. </span>  ${donateTitle1} </p>
                <p class="text-md text-gray-500 bg-gray-300 p-3 rounded-md " >  ${ new Date().toLocaleString()} </p>
            `
            document.getElementById('history-section').appendChild(history)

            
        };
        
        
        
        
    })

// donation feni
    document.getElementById('donate-btn-feni').addEventListener('click', function(){
        const donateInputFeni = inputFieldGetById('donate-Input-feni');
        const donateAmountElement = document.getElementById('donate-amount-feni')
        const donateAmountFeni = parseFloat(donateAmountElement.innerText)

        const mainBalanceElement = document.getElementById('main-balance');
        const mainBalance = parseFloat(mainBalanceElement.innerText);

        const donateTitle2 = document.getElementById('donate-title2').innerText;

        if(donateInputFeni > mainBalance){
            alert('You Do not have sufficient balance')
            return;
        }

        if(isNaN(donateInputFeni) || donateInputFeni <=0 ) { 
            return alert('Please Enter a valid input') 
        } else {
            donateAmountElement.innerText = donateInputFeni.toFixed(2)

            // calculate balance
            const balance = mainBalance - donateInputFeni
            
            // update balance
            mainBalanceElement.innerText = balance.toFixed(2)

            // sum of balance
            const totalDonate = donateAmountFeni + donateInputFeni
            donateAmountElement.innerText = totalDonate
            myModal.showModal()

            // history 

            const history = document.createElement('div')
            history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
            history.innerHTML = `
                <p class="text-lg text-gray-500" > <span class="font-bold text-blue-500"> ${donateInputFeni} Tk. </span>  ${donateTitle2} </p>
                <p class="text-md text-gray-500 bg-gray-300 p-3 rounded-md " >  ${ new Date().toLocaleString()} </p>
            `
            document.getElementById('history-section').appendChild(history)
        }
        


        

    })
    
    //donate quota movement 

    document.getElementById('donate-btn-qouta').addEventListener('click', function(){
        const donateInputQuota = inputFieldGetById('donate-Input-quota') 
        const donateAmountElement = document.getElementById('donate-amount-quota')
        const donateAmountQuota = parseFloat(donateAmountElement.innerText)

        const mainBalanceElement = document.getElementById('main-balance');
        const mainBalance = parseFloat(mainBalanceElement.innerText);
        
        const donateTitle3 = document.getElementById('donate-title3').innerText;

        if(donateInputQuota > mainBalance){
            alert('You Do not have sufficient balance')
            return;
        }

        if( isNaN(donateInputQuota) || donateInputQuota <= 0){
            return alert('Please Enter a Valid input')
        } else {
            donateAmountElement.innerText = donateInputQuota.toFixed(2)
            // calculate balance
            const balance = mainBalance - donateInputQuota
            
            // update balance
            mainBalanceElement.innerText = balance.toFixed(2)

            // sum of balance
            const totalDonate = donateAmountQuota + donateInputQuota
            donateAmountElement.innerText = totalDonate 
            myModal.showModal()

            // history 

            const history = document.createElement('div')
            history.className = "bg-white p-4 rounded-md border-2 border-gray-300 mb-4 shadow-lg";
            history.innerHTML = `
                <p class="text-lg text-gray-500" > <span class="font-bold text-blue-500"> ${donateInputQuota} Tk. </span>  ${donateTitle3} </p>
                <p class="text-md text-gray-500 bg-gray-300 p-3 rounded-md " >  ${ new Date().toLocaleString() } </p>
            `
            document.getElementById('history-section').appendChild(history)
        }

    })








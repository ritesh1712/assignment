// variables 
const sign_up_open = document.getElementById("sign_up")
const sign_up_model = document.getElementById("sign_up_model")
const sign_up_close = document.getElementById("sign_up_close")

const sign_up_btn = document.getElementById('sign_up_btn')
const name = document.getElementById('name')
const email_up = document.getElementById('email_up')
const password_up = document.getElementById('password_up')
const already_account = document.getElementById('already_account')

const sign_in_open = document.getElementById("sign_in")
const sign_in_model = document.getElementById('sign_in_model')
const sign_in_close = document.getElementById("sign_in_close")

const sign_in_btn = document.getElementById('sign_in_btn')
const email = document.getElementById('email')
const password = document.getElementById('password')
const donot_account = document.getElementById("donot_account")

const ul_btn = document.getElementById('ul_btn')
const card_section = document.getElementById('card_section')

const clocation = document.getElementById('location')
const jobrole = document.getElementById('jobrole')

const applications = [
    {
      "id": "1",
      "name": "Alice Johnson",
      "role": "Marketing Manager",
      "experience": "8 years",
      "location": "New York, NY"
    },
    {
      "id": "2",
      "name": "Bob Smith",
      "role": "Software Developer",
      "experience": "3 years",
      "location": "Miami, FL"
    },
    {
      "id": "3",
      "name": "Emma Davis",
      "role": "Graphic Designer",
      "experience": "5 years",
      "location": "Los Angeles, CA"
    },
    {
      "id": "4",
      "name": "James Wilson",
      "role": "Project Manager",
      "experience": "10 years",
      "location": "Chicago, IL"
    },
    {
      "id": "5",
      "name": "Sophia Thompson",
      "role": "Data Analyst",
      "experience": "2 years",
      "location": "Seattle, WA"
    },
    {
      "id": "6",
      "name": "Oliver Harris",
      "role": "Sales Representative",
      "experience": "4 years",
      "location": "Dallas, TX"
    },
    {
      "id": "7",
      "name": "Mia Martinez",
      "role": "Human Resources Coordinator",
      "experience": "6 years",
      "location": "Miami, FL"
    },
    {
      "id": "8",
      "name": "William Anderson",
      "role": "Financial Analyst",
      "experience": "7 years",
      "location": "Boston, MA"
    },
    {
      "id": "9",
      "name": "Emily Brown",
      "role": "Customer Service Representative",
      "experience": "2 years",
      "location": "Denver, CO"
    },
    {
      "id": "10",
      "name": "Liam Wilson",
      "role": "Product Manager",
      "experience": "9 years",
      "location": "Denver, CO"
    },
    {
      "id": "11",
      "name": "Ava Thomas",
      "role": "Marketing Manager",
      "experience": "3 years",
      "location": "San Francisco, CA"
    },
    {
      "id": "12",
      "name": "Noah Davis",
      "role": "Software Developer",
      "experience": "6 years",
      "location": "Chicago, IL"
    },
    {
      "id": "13",
      "name": "Isabella Wilson",
      "role": "Graphic Designer",
      "experience": "4 years",
      "location": "Los Angeles, CA"
    },
    {
      "id": "14",
      "name": "Mason Taylor",
      "role": "Project Manager",
      "experience": "5 years",
      "location": "Chicago, IL"
    },
    {
      "id": "15",
      "name": "Sophie Johnson",
      "role": "Marketing Manager",
      "experience": "7 years",
      "location": "Chicago, IL"
    },
    {
      "id": "16",
      "name": "Lucas Thompson",
      "role": "Data Analyst",
      "experience": "3 years",
      "location": "Chicago, IL"
    },
    {
      "id": "17",
      "name": "Amelia Harris",
      "role": "Sales Representative",
      "experience": "4 years",
      "location": "Dallas, TX"
    },
    {
      "id": "18",
      "name": "Benjamin Martinez",
      "role": "Human Resources Coordinator",
      "experience": "2 years",
      "location": "Miami, FL"
    },
    {
      "id": "19",
      "name": "Harper Wilson",
      "role": "Financial Analyst",
      "experience": "6 years",
      "location": "Boston, MA"
    },
    {
      "id": "20",
      "name": "Elijah Davis",
      "role": "Customer Service Representative",
      "experience": "8 years",
      "location": "Denver, CO"
    }
  ]
  

  let ISsign = false

  

// open function
const open = (element)=>{
element.style.display='flex'
document.body.style.overflowY='hidden'
}

// close function
const close = (element)=>{
    element.style.display='none'
   document.body.style.overflowY='scroll'
}

// sign_up model open
sign_up_open.addEventListener('click',()=>open(sign_up_model))

// sign_up model close
sign_up_close.addEventListener('click',()=>close(sign_up_model))


// sign up 
sign_up_btn.addEventListener('click',()=>{  
    if(localStorage.getItem(email_up.value)){
        alert('This account is already present')
    }else{
        localStorage.setItem(email_up.value,
            JSON.stringify( {   
                "name": name.value,
                "password":password_up.value
            }));
           close(sign_up_model)
        }
})

already_account.addEventListener('click',()=>{
    close(sign_up_model)
    open(sign_in_model)
    })

// sign_in model open
sign_in_open.addEventListener('click',()=>open(sign_in_model))

// sign_up model close
sign_in_close.addEventListener('click',()=>close(sign_in_model))

// sign up 
sign_in_btn.addEventListener('click',()=>{  
    if(!localStorage.getItem(email.value)){
        alert('please enter valid email or password')
    }
    else if(JSON.parse(localStorage.getItem(email.value)).password!==password.value){
        alert('please enter valid email or password')
    }
    else{
        
           close(sign_in_model)
        ul_btn.innerHTML=`<h3>Hello ${JSON.parse(localStorage.getItem(email.value)).name}`  
        ISsign=true    
        showAppliction()  
    }

})


donot_account.addEventListener('click',()=>{
    close(sign_in_model)
    open(sign_up_model)
    })


const showAppliction =()=>{    
    if(ISsign){
let application= ''  
let newlocation = ''
let newrole=''
 applications.forEach((element)=>{
 application += `<div class="candidate-card">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMcgnSW9p088bFtCMH-4knvUY35IyE8l77Q&usqp=CAU" alt="Candidate Profile Picture" class="candidate-img">
<div class="candidate-details">
    <h3 class="candidate-name">${element.name}</h3>
    <p class="candidate-role">${element.role}</p>
    <p class="candidate-experience">${element.experience}</p>
    <p class="candidate-location">${element.location}</p>
    </div>
    </div>`
  newlocation += `
 <option value="${element.location}">${element.location}</option>
 `    
 newrole += `
<option value="${element.role}">${element.role}</option>
`   

 })   
 card_section.innerHTML= application
 clocation.innerHTML += newlocation
 jobrole.innerHTML += newrole
}
}

clocation.addEventListener('click',()=>{
let flocation
if(clocation.value!=='none'||jobrole.value!=='none'){
    flocation = applications.filter((application)=>{
return application.location == clocation.value || application.role == jobrole.value
    })
}else{
    if(ISsign){
    flocation = applications
    }
}

filtered(flocation)

})

jobrole.addEventListener('click',()=>{
    let flocation
    if(clocation.value!=='none' || jobrole.value!=='none'){
        flocation = applications.filter((application)=>{
    return application.role == jobrole.value || application.location == clocation.value
        })
    }else{
        if(ISsign){
        flocation = applications
        }
    }
    filtered(flocation)
    })


const filtered = (flocation=[],frole=[])=>{

    let newapplication = [...flocation,...frole]
    let application = ''
    newapplication.forEach((element)=>{
        application += `<div class="candidate-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMMcgnSW9p088bFtCMH-4knvUY35IyE8l77Q&usqp=CAU" alt="Candidate Profile Picture" class="candidate-img">
        <div class="candidate-details">
        <h3 class="candidate-name">${element.name}</h3>
        <p class="candidate-role">${element.role}</p>
        <p class="candidate-experience">${element.experience}</p>
        <p class="candidate-location">${element.location}</p>
        </div>
        </div>`
    })   
    card_section.innerHTML = application
}
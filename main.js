let p = document.createElement('p')
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')
let p6 = document.createElement('p')
let p7 = document.createElement('p')
let p8 = document.createElement('p')
let p9 = document.createElement('p')
let p10 = document.createElement('p')
let p11 = document.createElement('p')
let p12 = document.createElement('p')
let p13 = document.createElement('p')
let p14 = document.createElement('p')
let img = document.createElement('img')
let div = document.createElement('div')
let div1 = document.createElement('div')
let div2 = document.createElement('div')
fetch('https://randomuser.me/api/').then((res)=>res.json()).then((date)=>{
    console.log(date);
    let container = document.querySelector('#container')



p.innerHTML = 'Name: '+date.results[0].name.first
p1.innerHTML = 'Surname: '+date.results[0].name.last
p2.innerHTML = 'Phone: '+date.results[0].phone    
p3.innerHTML = 'Cell: '+date.results[0].cell
p4.innerHTML = 'Age: ' +date.results[0].dob.age
p5.innerHTML = 'Email: '+date.results[0].email
p6.innerHTML = 'Gender: '+date.results[0].gender
p7.innerHTML = 'Id name: '+date.results[0].id.name
p8.innerHTML = 'Registrated age: '+date.results[0].registered.age
p9.innerHTML = 'Nat: '+date.results[0].nat
p10.innerHTML = 'Title: '+date.results[0].name.title
p11.innerHTML = 'Registrated date: '+date.results[0].registered.date
p12.innerHTML = 'Gender: '+date.results[0].gender
p13.innerHTML = 'Information of work:'
p14.innerHTML = 'Gender: '+date.results[0].gender
img.src = date.results[0].picture.large

div.append(img,div1,p2,p3,p4,div2,p6,p9,p12)
container.appendChild(div)
div1.append(p,p1,p10)
div2.append(p13,p5,p7,p8,p11)
})
div1.style.width = '150px'
p13.style.fontSize = '30px'
// div1.style.background = 'white'
// div1.style.color = 'green'
div1.style.borderRadius = '20px'
p13.style.color = 'red'
div1.style.marginLeft = '250px'
div1.style.marginTop = '-200px'
div2.style.width = '320px'
div2.style.marginLeft = '250px'
div2.style.marginTop = '-150px'
div2.style.marginBottom = '-150px'
p9.style.marginTop=  '-0px'
p4.style.marginBottom= '-100px'


img.style.borderRadius ='50%'

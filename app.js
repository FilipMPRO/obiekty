// const cars = [{marka:"BMW", model:"M2",opony:{rozmiar:16,rodzaj:"zimowe"}},
//     {marka:"BMW", model:"M3",opony:{rozmiar:19,rodzaj:"letnie"}},
//     {marka:"Audi", model:"A3",opony:{rozmiar:13,rodzaj:"letnie"}}
// ]



// for(let i = 0;i<cars.length;i++){
//     console.log(cars[i].model);
//     if(cars[i].opony.rodzaj=="letnie"){
//         cars[i].opony.rodzaj="zimowe"

//     }
// }
//  console.log(cars);


async function getData(){

    const res = await fetch("https:restcountries.com/v3.1/all")
    const data = await res.json()
    
    return data
}
// const ul = document.createElement("ul")
// document.body.appendChild(ul)



async function nazwy(){
    
    const kraje = await getData()
    console.log(kraje);

    for(let i in kraje){
        //if(kraje[i].continents.length>1){
        // const li = document.createElement("li")
        // li.textContent = kraje[i].name.common
        // ul.appendChild(li)
        // console.log(kraje[i].name.common);
        //}
        const p1 = document.createElement("p")
        const p2 = document.createElement("p")
        const p3 = document.createElement("p")

        const h1 = document.createElement("h1")
        const div = document.createElement("div")
        div.style.border="1px solid black"
        div.style.height="400px"
        div.style.width="200px"
        div.style.backgroundColor = "grey"

        const img = document.createElement("img")
        img.setAttribute("src",kraje[i].flags.png)
        img.style.height="150px"
        img.style.width="200px"

        h1.textContent = kraje[i].name.common
        h1.style.textAlign='center'
        p1.textContent = `Stolica: ${kraje[i].capital}`
        p2.textContent = `Powierzchnia${kraje[i].area}`
        p3.textContent = kraje[i].population

        p1.style.textAlign='center'
        p2.style.textAlign='center'
        p3.style.textAlign='center'

        document.querySelector("body").appendChild(div)
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p1)
        div.appendChild(p2) 
        div.appendChild(p3)

    }
    

}
nazwy()

 fetch('https://fakestoreapi.com/products/').then((data) => {

    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    // console.log(completedata[2].title);

   

    completedata.map((value) => {
        document.getElementById('cardSec').innerHTML += `<div class="card">
        <h3 class="Product-title">${value.title}</h3>
        <img class="image" src="${value.image}" alt="">
        <p class="price">${value.category}</p>
        <p class="desc">${value.description}</p>
        <p class="price">${value.price}</p>
    </div>`;

        // console.log(data2)

    });

   
    // console.log(data1)
    
   
    
});





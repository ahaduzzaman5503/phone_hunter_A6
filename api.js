const searchPhone = () => {
    const searchFeild = document.getElementById('input-feild');
    const searchValue = searchFeild.value;
    // console.log(searchValue);
    
    searchFeild.value = "";

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`

    // console.log(url);
    fetch(url)
    .then (res => res.json())
    .then (data => displayPhoneResult(data.data));
}

const displayPhoneResult = iPhone => {
    // console.log(iPhone);
    const searchRasult = document.getElementById('class-rasult');
    // console.log(searchRasult);
    iPhone.forEach(phone => {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML= `
        <div class="card h-100 ">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h5 class="card-title">${phone.phone_name}</h5>
              <a href="#" class="btn btn-primary">Details</a>
            </div>
          </div>
        `;
        searchRasult.appendChild(div);
    });
}
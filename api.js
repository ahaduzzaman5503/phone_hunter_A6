const searchPhone = () => {
    const searchFeild = document.getElementById('input-feild');
    const searchValue = searchFeild.value;
    searchFeild.value = "";

    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
    .then (res => res.json())
    .then (data => displayPhoneResult(data.data));
}

const displayPhoneResult = iPhone => {
    const searchRasult = document.getElementById('class-rasult');
    searchRasult.innerHTML = "";
    iPhone.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add("col");
        div.innerHTML= `
        <div class="card h-100 ">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${phone.brand}</h5>
              <h5 class="card-title">${phone.phone_name}</h5>
              <a href="#" onclick="showPhoneDetails()"  class="btn btn-primary">Details</a>
            </div>
          </div>
        `;
        searchRasult.appendChild(div);
    });
}

const searchFeild = document.getElementById('input-feild');
    const searchValue = searchFeild.value;

    const searchButton = () => {
      const searchFeild = document.getElementById('input-feild');
      const searchValue = searchFeild.value;
      searchFeild.value = "";
  
      const urlOne = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
      fetch(urlOne)
      .then (res => res.json())
      .then (data => showPhoneDetails(data.data));
  }
  const showPhoneDetails =  (displayPhoneResult, showData ) => {
  const phoneDetails = document.getElementById('details');
  // showData.forEach(show=> {
    const p = document.createElement('p');
    p.classList.add("col");
    p.innerHTML= `
          <div class="card h-100 ">
              <img src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">Phone Brand:...</h5>
                <h5 class="card-title">Phone Name:...</h5>
                <h5 class="card-title">Phone :...</h5>
              </div>
            </div>
          `;
    phoneDetails.appendChild(p);
  console.log("click")
  // })
  
};
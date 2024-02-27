const loadPhone = (searchText) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

   fetch(url)
      .then((res) => res.json())
      .then((data) => displayPhones(data.data));
};

const displayPhones = (phone) => {
   // this is the parent container where each items will be appended
   const phoneContainer = document.getElementById("phone-container");
   phoneContainer.innerHTML = "";

   phone.forEach((phone) => {
      // 1. create the div for each item
      const phoneCard = document.createElement("div");

      // 2. add class list to it
      phoneCard.classList.add("card", "w-full", "bg-base-100", "shadow-xl");

      // 3. setting innerHTML now
      phoneCard.innerHTML = `
      
      <figure class="px-10 pt-10">
            <img
            src="${phone.image}"
            alt="Shoes"
            class="rounded-xl"
            />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
      
      `;

      // 4. now append the phoneCard div to the parent container
      phoneContainer.appendChild(phoneCard);
   });
};

// search Button
const handleSearch = () => {
   const searchField = document.getElementById("searchInput");
   const searchText = searchField.value;

   loadPhone(searchText);
};

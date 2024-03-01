const showAllBtn = document.getElementById("showAllBtn");

const loadPhone = (searchText, isShowAll) => {
   const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

   fetch(url)
      .then((res) => res.json())
      .then((data) => displayPhones(data.data, isShowAll));
};

const displayPhones = (phone, isShowAll) => {
   // this is the parent container where each items will be appended
   const phoneContainer = document.getElementById("phone-container");
   phoneContainer.innerText = "";

   // 6. We will only show the "Show All" button only when array
   // length is above 12 items
   const showButtonContainer = document.getElementById("showButtonContainer");
   if (phone.length > 12 && !isShowAll) {
      showButtonContainer.classList.remove("hidden");
   } else {
      showButtonContainer.classList.add("hidden");
   }

   // 9. Show All aikhane aisha finally hit korbe and niche conditional
   // er shathe add hobe je slice korbe ki korbena.

   // 5. slice the total phone array to 12 items if not 'SHOW ALL'
   // because we want to show 12 phones at first search

   if (!isShowAll) {
      phone = phone.slice(0, 12);
   }

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
            <button onclick = "handleShowDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
      
      `;

      // 4. now append the phoneCard div to the parent container
      phoneContainer.appendChild(phoneCard);

      // 8. hide the spinner div
      showSpinner(false);
   });
};

// search Button
const handleSearch = (isShowAll) => {
   showSpinner(true);

   const searchField = document.getElementById("searchInput");
   const searchText = searchField.value;

   loadPhone(searchText, isShowAll);
};

// ai function e akta parameter nibo,
// parameter present thakle bhitore condition dibo show and hide er.
const showSpinner = (isLoading) => {
   const spinnerDiv = document.getElementById("spinner-div");

   isLoading
      ? spinnerDiv.classList.remove("hidden")
      : spinnerDiv.classList.add("hidden");
};

// 9. handle Show all
function handleShowAll() {
   handleSearch(true);
}

// 10. handle show Detail

const handleShowDetails = (id) => {
   fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
      .then((res) => res.json())
      .then((data) => showPhoneDetails(data.data));
};

const showPhoneDetails = (phone) => {
   // this will pop up the modal
   modal_show_details.showModal();

   // now as you have got the phone details as well as modal
   // modify your code to make it dynamic.
};

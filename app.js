let il = prompt("Il giriniz: ");
let ilce = prompt("Ilce giriniz: ");

let xhr = new XMLHttpRequest();
xhr.withCredentials = false;

const userlistDiv = document.getElementById('user_list');

xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        const pharmacies = response.result;

        pharmacies.forEach(eczane => {
            userlistDiv.innerHTML += `<div class="col-3">
                    <div class="card">
                        <div style="width: 100%">
                            <iframe
                                width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=${eczane.loc}+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            ${eczane.name}
          </h5>
          <p class="card-text">
            ${eczane.address}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            ${eczane.phone}
          </li>
          <li class="list-group-item">${eczane.loc}</li>
          <li class="list-group-item">${eczane.dist}</li>
        </ul>
      </div>
    </div>`;
        });
    }
});

xhr.open("GET", `https://api.collectapi.com/health/dutyPharmacy?ilce=${ilce}&il=${il}`);
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 61TPvxVJelurTdRIcKt2G0:78zGb0eR1Cc0QmHJ89eytf");

xhr.send();
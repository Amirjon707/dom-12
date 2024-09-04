let arr = [];
let p = document.querySelector("p");

fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => GetData(data.products));

function GetData(array) {
    array.forEach((item, index) => {
        arr[index] = item;
    });

    const container = document.querySelector(".con");

    const CreateElement = (array, con) => {
        for (let i = 0; i < array.length; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.id = array[i].id;

            let txt = document.createElement("div");
            txt.classList.add("txt");
            let imgBox = document.createElement("div");
            imgBox.classList.add("imgBox");

            let img = document.createElement("img");
            img.setAttribute("src", array[i].images);

            let h2 = document.createElement("h2");
            h2.classList.add("title");
            h2.innerHTML = array[i].title;

            let description = document.createElement("p");
            description.classList.add("description");
            description.innerHTML = array[i].description;

            let rating = document.createElement("div");
            rating.classList.add("rating");

            let price = document.createElement("span");
            price.classList.add("rating-elem");
            let priceIcon = document.createElement("i");
            priceIcon.classList.add("fas", "fa-dollar-sign");
            price.innerHTML = array[i].price;
            price.prepend(priceIcon);

            let rate = document.createElement("span");
            rate.classList.add("rating-elem");
            let rateIcon = document.createElement("i");
            rateIcon.classList.add("far", "fa-star");
            rate.innerHTML = array[i].rating;
            rate.prepend(rateIcon);

            let count = document.createElement("span");
            count.classList.add("rating-elem");
            let countIcon = document.createElement("i");
            countIcon.classList.add("fas", "fa-box-archive");
            count.innerHTML = array[i].stock;
            count.prepend(countIcon);

            let tags = document.createElement("div");
            tags.classList.add("tags");
            let tag = array[i].tags[0] + ", " + array[i].tags[1];
            tags.innerHTML = `<span>Tags:</span> ${tag}`;
            console.log(tag);

            let brand = document.createElement("p");
            brand.classList.add("brand");
            brand.innerHTML = "Brand: " + array[i].brand;

            let category = document.createElement('p')
            category.classList.add("category");
            category.innerHTML = `<span>category:</span> ${array[i].category}`;

            rating.appendChild(price);
            rating.appendChild(rate);
            rating.appendChild(count);

            let categoryTag = document.createElement('div')
            categoryTag.classList.add("category-tag");
            categoryTag.appendChild(category);
            categoryTag.appendChild(tags);
            
            imgBox.appendChild(img);
            box.appendChild(imgBox);
            box.appendChild(txt);
            txt.appendChild(h2);
            txt.appendChild(brand);
            txt.appendChild(description);
            txt.appendChild(categoryTag)
            txt.appendChild(rating);

            con.appendChild(box);
        }
    };

    CreateElement(arr, container);
}

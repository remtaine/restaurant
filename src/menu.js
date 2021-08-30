let content = document.getElementById('content');

export default function createMenu() {
    let food1 = document.createElement('article');
    food1.classList.add("food");
    let img1 = document.createElement('img');
    img1.setAttribute('src', './images/food1.jpg');
    let article1 = document.createElement('article');
    let article1H2 = document.createElement('h2');
    article1H2.innerHTML = "Egg On Bread"
    let article1P = document.createElement('p');
    article1P.innerHTML = "Et dolor duis ad id officia sit consequat.";

    article1.appendChild(article1H2);
    article1.appendChild(article1P);
    food1.appendChild(img1);
    food1.appendChild(article1);

    content.appendChild(food1);

    let food2 = document.createElement('article');
    food2.classList.add("food");
    let img2 = document.createElement('img');
    img2.setAttribute('src', './images/food2.jpg');
    let article2 = document.createElement('article');
    let article2H2 = document.createElement('h2');
    article2H2.innerHTML = "Blueberry Waffle"
    let article2P = document.createElement('p');
    article2P.innerHTML = "Velit ea sunt nisi laborum sit laborum elit.";

    article2.appendChild(article2H2);
    article2.appendChild(article2P);
    food2.appendChild(img2);
    food2.appendChild(article2);

    content.appendChild(food2);

    let food3 = document.createElement('article');
    food3.classList.add("food");
    let img3 = document.createElement('img');
    img3.setAttribute('src', './images/food3.jpg');
    let article3 = document.createElement('article');
    let article3H2 = document.createElement('h2');
    article3H2.innerHTML = "Meatballs"
    let article3P = document.createElement('p');
    article3P.innerHTML = "Laborum consectetur occaecat sit deserunt mollit.";

    article3.appendChild(article3H2);
    article3.appendChild(article3P);
    food3.appendChild(img3);
    food3.appendChild(article3);

    content.appendChild(food3);

    content.classList.add('menu');
    content.classList.remove('contact');
    content.classList.remove('front');
}

/* 
<section class="food">
    <img src="./images/food1.jpg" />
    <article>
        <h2>Egg On Bread</h2>
        <p>Et dolor duis ad id officia sit consequat.</p>
    </article>
</section>
<section class="food">
    <img src="./images/food2.jpg" />
    <article>
        <h2>Blueberry Waffle</h2>
        <p>Velit ea sunt nisi laborum sit laborum elit velit est quis enim aliqua amet.</p>
    </article>
</section>
<section class="food">
    <img src="./images/food3.jpg" />
    <article>
        <h2>Meatballs</h2>
        <p>Laborum consectetur occaecat sit deserunt mollit.</p>
    </article> 
</section>
*/
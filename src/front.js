let content = document.getElementById('content');

export default function createFront() {
    console.log("Menu");
    let title = document.createElement('section');
    title.setAttribute('id', 'title');

    let h1 = document.createElement('h1');
    h1.innerHTML = "Malasa Lounge";
    let h5 = document.createElement('h5');
    h5.innerHTML = 'since <i class="fas fa-glass-martini-alt"></i> 1969';

    title.appendChild(h1);
    title.appendChild(h5);


    let details = document.createElement('section');
    details.setAttribute('id', 'details');
    
    let h2 = document.createElement('h2');
    h2.innerHTML = "469 Deans Lane, NY";
    let h4 = document.createElement('h4');
    h4.innerHTML = '(123) 345-46-78';

    let socialMedia = document.createElement('ul');
    socialMedia.setAttribute('id', 'social-media');
    let facebook = document.createElement('li');
    let twitter = document.createElement('li');
    let instagram = document.createElement('li');
    facebook.innerHTML = '<a href="#"><i class="fab fa-facebook"></i></a>';
    twitter.innerHTML = '<a href="#"><i class="fab fa-twitter"></i></a>';
    instagram.innerHTML = '<a href="#"><i class="fab fa-instagram"></i></a>';

    socialMedia.appendChild(facebook);
    socialMedia.appendChild(twitter);
    socialMedia.appendChild(instagram);
    
    details.appendChild(h2);
    details.appendChild(h4);
    details.appendChild(socialMedia);

    content.appendChild(title);
    content.appendChild(details);
    console.log("appended shiz");
}

/* 

<section id="title">
    <h1>Malasa Lounge</h1>
    <h5>since <i class="fas fa-glass-martini-alt"></i> 1969</h5>
</section>
<section id="details">
    <h2>469 Deans Lane, NY</h2>
    <h4>(123) 345-46-78</h4>
    <ul id="social-media">
        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
    </ul>
</section> 

*/
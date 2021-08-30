let content = document.getElementById('content');

export default function createContact() {
    let contact1 = document.createElement('h1');
    contact1.innerHTML = "Contact Us";
    
    let detail1 = document.createElement('h4');
    detail1.innerHTML = '<i class="fas fa-clock"></i> Mon-Fri: 6am-12mn';
    
    let detail2 = document.createElement('h4');
    detail2.innerHTML = '<i class="fas fa-phone-alt"></i> (123) 345-46-78';

    let detail3 = document.createElement('h4');
    detail3.innerHTML = '<i class="fas fa-map-marker-alt"></i> 469 Deans Lane, NY';

    content.appendChild(contact1);
    content.appendChild(detail1);
    content.appendChild(detail2);
    content.appendChild(detail3);

    content.classList.remove('menu');
    content.classList.add('contact');
    content.classList.remove('front');
}

/* 
<h1>Contact Us</h1>
<h4><i class="fas fa-clock"></i> Mon-Fri: 6am-12mn</h4>
<h4><i class="fas fa-phone-alt"></i> (123) 345-46-78</h4>
<h4><i class="fas fa-map-marker-alt"></i> 469 Deans Lane, NY</h4> 
*/
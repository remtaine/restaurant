let content = document.getElementById('content');

export default function createContact() {
    content.classList.remove('menu');
    content.classList.add('contact');
    content.classList.remove('front');
}
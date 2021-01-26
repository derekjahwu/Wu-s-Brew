document.querySelector('.subscribe').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();

    //getting value of email
    let email = document.querySelector('.email-box').value;

    document.querySelector('.subscribe').reset();

    sendEmail(email);

}

function sendEmail(email){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "derekjwu96@gmail.com",
        Password : "hkemikayruzwqnva",
        To : `${email}, derekjwu96@gmail.com`,
        From : "derekjwu96@gmail.com",
        Subject : `Thanks for Subscribing to Wu's Brew!`,
        Body : "Hello! <br/> Thank you very much for visiting my web page and subscribing. Unfortunately this not a real coffee shop in the making. My name is Derek Wu and I am a Web Developer and I enjoy making custom web pages for small business. Please visit my site at www.derekjahwu.com if you would like to see more of my work. From there, you can contact me if you're interest in your own cusom web page. <br/>Cheers!<br/>Derek Wu"
    }).then(
      message => alert('Thanks for Subscribing! We will send you a confirmation email shortly')
    );
}

let test = document.querySelector('.subscribe');
console.log(test);
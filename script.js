function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.innerText = "Terima kasih " + name + ", pesan Anda telah dikirim!";
    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    question.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        faqItems.forEach(i => {
            i.classList.remove("active");
            i.querySelector(".icon").innerText = "+";
        });

        if (!isActive) {
            item.classList.add("active");
            icon.innerText = "×";
        }
    });
});


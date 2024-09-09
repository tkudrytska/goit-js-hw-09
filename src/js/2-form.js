const formData = { email: "", message: "" };
const form = document.querySelector('.feedback-form');
const localStorageKey = "feedback-form-state";

function loadFormData() {
    const savedValue = localStorage.getItem(localStorageKey) ?? '';
    if (savedValue !== '') {
        const parsedValue = JSON.parse(savedValue);
        const { email, message } = parsedValue;
        form.elements.email.value = email;
        form.elements.message.value = message;
        formData.email = email;
        formData.message = message;
    }
};

loadFormData();

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    const { email, message } = formData;
    if (email === "" || message === "") {
        alert `Fill please all fields`
    };
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    form.reset();
});

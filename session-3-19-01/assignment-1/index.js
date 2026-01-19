const button = document.getElementById("btn");
button.addEventListener("click", () => {
    const inputTitle = (document.getElementById("url").value).toLowerCase();
    console.log(inputTitle);
    const words =inputTitle.split(" ")
    const slug = words.join("-")
    const result = document.getElementById("result");
    result.innerHTML = `<h3>The url slug: ${slug}</h3>`;
});

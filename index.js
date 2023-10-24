document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("text");
    let text = textElement.textContent;
    // 1. <mark>
    text = text.replace(/\b\w{9,}\b/g, (match) => `<mark>${match}</mark>`);

    // 3. Split sentences into separate lines
    text = text.split('. ').join('.<br>');

    // 4. Count the number of words
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const wordCountElement = document.createElement("p");
    wordCountElement.textContent = `Word Count: ${wordCount}`;
    document.body.insertBefore(wordCountElement, textElement);

    // 5. Replace ? and !
    text = text.replace(/\?/g, "🤔").replace(/!/g, "😮");

    // Update all changes
    textElement.innerHTML = text;
});

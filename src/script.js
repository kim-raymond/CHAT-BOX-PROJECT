// OFFICIAL SCRIPT

    document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chatBox");

    if (!chatBox) return; // safety check

    // scroll to bottom on load
    chatBox.scrollTop = chatBox.scrollHeight;

    // observe new messages
    const observer = new MutationObserver(() => {
      chatBox.scrollTop = chatBox.scrollHeight;
    });

    observer.observe(chatBox, { childList: true, subtree: true });
  });

  // const chatBox = document.getElementById("chatBox");
  // chatBox.scrollTop = chatBox.scrollHeight;
  // const observer = new MutationObserver(() => {
  // chatBox.scrollTop = chatBox.scrollHeight;
  // });
  // observer.observe(chatBox, { childList: true, subtree: true });
  

  function openEventDetail() {
  const div = document.getElementById("eventDetail");

  if (div.classList.contains("hidden")) {
    // Show it back with absolute positioning
    div.classList.remove("hidden");
    div.classList.add("absolute");
  } else {
    // Hide it
    div.classList.remove("absolute")
    div.classList.add("hidden");
  }
}

  function adjustRequestAndPrice() {
  const div = document.getElementById("adjustEvent");

  if (div.classList.contains("hidden")) {
    // Show it back with absolute positioning
    div.classList.remove("hidden");
    div.classList.add("absolute");
  } else {
    // Hide it
    div.classList.remove("absolute")
    div.classList.add("hidden");
  }
}

  function showAcceptNotice() {
  const div = document.getElementById("acceptNotice");

  openEventDetail()

  if (div.classList.contains("hidden")) {
    // Show it back with absolute positioning
    div.classList.remove("hidden");
    div.classList.add("flex");
    requestAnimationFrame(() => {
    chatBox.scrollTop = chatBox.scrollHeight;
    });
  } 
}

  function showPriceAdjustNotif() {
  const div = document.getElementById("priceAdjustNotif");

  adjustRequestAndPrice()
  if (div.classList.contains("hidden")) {
    // Show it back with absolute positioning
    div.classList.remove("hidden");
    div.classList.add("flex");
    requestAnimationFrame(() => {
    chatBox.scrollTop = chatBox.scrollHeight;
    });
  } 
}


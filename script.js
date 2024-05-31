//your JS code here. If required.
 let form = document.getElementById("myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let age = document.getElementById("age");
  let name = document.getElementById("name");

  if (!age.value || !name.value) {
    alert("Please enter valid details");
    return;
  }

  const p = new Promise((resolve, reject) => {
    if (age.value > 18) {
      setTimeout(() => {
        resolve(`Welcome, ${name.value}. You can vote.`);
      }, 4000);
    } else {
      setTimeout(() => {
        reject(`Oh sorry ${name.value}. You aren't old enough.`);
      }, 4000);
    }
  });

  p.then((data) => {
    alert(data);
  }).catch((error) => {
    alert(error);
  });
});
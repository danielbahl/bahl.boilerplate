/**
 *  Light Switch med Local Storage (for at gemme valg)
 */

(function () {
  let lightSwitch = document.getElementById("lightSwitch");
  if (lightSwitch) {
	darkMode();
	lightSwitch.addEventListener("change", () => {
	  lightMode();
	});

	function darkMode() {
	  let isSelected =
		localStorage.getItem("lightSwitch") !== null &&
		localStorage.getItem("lightSwitch") === "dark";

	  if (isSelected) {
		document.querySelectorAll(".bg-light").forEach((element) => {
		  element.className = element.className.replace(/-light/g, "-dark");
		});

		document.body.classList.add("bg-dark");

		if (document.body.classList.contains("text-dark")) {
		  document.body.classList.replace("text-dark", "text-light");
		} else {
		  document.body.classList.add("text-light");
		}
		
		// set light switch input to true
		lightSwitch.checked = true;
	  }
	}

	function lightMode() {
	  if (lightSwitch.checked) {
		localStorage.setItem("lightSwitch", "dark");
		darkMode();
	  } else {
		document.querySelectorAll(".bg-dark").forEach((element) => {
		  element.className = element.className.replace(/-dark/g, "-light");
		});
		document.body.classList.replace("text-light", "text-dark");
		localStorage.removeItem("lightSwitch");
	  }
	}
  }
})();
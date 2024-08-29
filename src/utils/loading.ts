// by removing `hide` class
export function registerLoading() {
  const loadingElement = document.getElementById("initial-loading");

  if (loadingElement) {
    const classes = loadingElement.classList;

    if (classes.contains("hide")) {
      classes.remove("hide");
    }
  }
}

// by adding `hide` class
export function hideLoading() {
  const loadingElement = document.getElementById("initial-loading");

  if (loadingElement) {
    const classes = loadingElement.classList;

    if (!classes.contains("hide")) {
      classes.add("hide");
    }
  }
}

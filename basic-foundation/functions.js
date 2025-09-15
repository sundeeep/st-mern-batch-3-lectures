function demo(a, b) {
  console.log("Outer arguments:", arguments);

  function classicInner() {
    console.log("Classic inner arguments:", arguments);
  }

  const arrowInner = () => {
    console.log("Arrow inner arguments:", arguments);
  };

  classicInner(100, 200);
  arrowInner(300, 400);
}

demo(10, 20);

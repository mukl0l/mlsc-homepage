
  const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const colors = [ "#AC79F2", "#87CEFA", "#191970", "#2D68C4"];
  const rndBorderRadius = () =>
    [...Array(4).keys()].map(() => rnd(30, 85) + "%").join(" ") +
    " / " +
    [...Array(4).keys()].map(() => rnd(30, 85) + "%").join(" ");

  const createBlob = ({ id, x, y, color }) => {
    const card = document.querySelector(".card");
    const blob = document.createElement("div");
    blob.id = `blob-${id}`;
    blob.classList.add("blob");
    blob.style.top = `${y}%`;
    blob.style.left = `${x}%`;
    blob.style.backgroundColor = color;
    blob.style.scale = rnd(1.25, 2);
    blob.style.borderRadius = rndBorderRadius();
    card.appendChild(blob);
    animateBlob(id);
  };

  const animateBlob = (id) => {
    anime({
      targets: `#blob-${id}`,
      translateX: () => `+=${rnd(-25, 25)}`,
      translateY: () => `+=${rnd(-25, 25)}`,
      borderRadius: () => rndBorderRadius(),
      rotate: () => rnd(-25, 25),
      opacity: () => rnd(0.4, 0.8),
      delay: () => rnd(0, 1000),
      scale: () => rnd(1.25, 2),
      duration: 2000,
      easing: "linear",
      complete: () => animateBlob(id),
    }).play();
  };

  const genBlobs = () => {
    const card = document.querySelector(".card");
    card.innerHTML = ""; 
    [...Array(25).keys()].forEach((id) => {
      const x = rnd(10, 90);
      const y = rnd(10, 90);
      const color = colors[rnd(0, colors.length - 1)];
      createBlob({ x, y, color, id });
    });
  };

  window.onload = genBlobs;

import React, { useEffect, useRef } from "react";

const MatrixBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const count = 80; // number of squares
    const minSize = 8;
    const maxSize = 36;

    const vw = () =>
      Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = () =>
      Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function pickDepth() {
      const r = Math.random();
      if (r < 0.55) return "depth-1";
      if (r < 0.9) return "depth-2";
      return "depth-3";
    }

    for (let i = 0; i < count; i++) {
      const el = document.createElement("div");
      el.className = "square " + pickDepth();

      const size = Math.floor(rand(minSize, maxSize));
      el.style.width = size + "px";
      el.style.height = size + "px";
      el.style.left = rand(-8, vw() + 8) + "px";
      el.style.top = rand(-8, vh() + 8) + "px";

      const duration = rand(6, 22);
      const delay = rand(-6, 10);
      el.style.animation = `floaty ${duration}s ease-in-out ${delay}s infinite`;

      el.style.opacity = rand(0.45, 1).toFixed(2);
      el.style.rotate = rand(-5, 7).toFixed(2) + "deg";
      const a = rand(0.04, 0.18).toFixed(3);
      el.style.background = `linear-gradient(180deg, rgba(18,113,255,${a}), rgba(100,220,255,${
        (a / 2).toFixed(3)
      }))`;

      container.appendChild(el);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={containerRef} className="matrix-bg"></div>;
};

export default MatrixBackground;

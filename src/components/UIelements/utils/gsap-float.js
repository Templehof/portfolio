
import { gsap } from "gsap";

function gsapFloat(boxRef, container) {
  if (window.visualViewport.width > 1000) {
    const body = document.querySelector(`${container}`);
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    let clientX;
    let clientY;

    body.addEventListener("mousemove", (e) => {
      clientX = e.pageX;
      clientY = e.pageY;

      //console.log(clientX, "/", clientY)
      requestAnimationFrame(updateMe);
    });

    function updateMe() {
      const dx = clientX - cx;
      const dy = clientY - cy;
      const tiltX = dy / cy;
      const tiltY = dx / cx;
      const radius = Math.sqrt(Math.pow(tiltX, 2) + Math.pow(tiltY, 2));
      const degree = radius * 12;

      if (body) {
        gsap.to(boxRef.current, 1, {
          transform: `rotate3d( ${tiltX}, ${tiltY}, 0, ${degree}deg )`,
        });
      }
    }
  }
}

export default gsapFloat

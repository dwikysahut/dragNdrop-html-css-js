window.addEventListener("load", () => {
  const leftBtn = document.querySelector("#leftBtn");
  const rightBtn = document.querySelector("#rightBtn");
  const wrapper = document.querySelector(".wrapper");
  let pos = {
    x: 0,
    y: 0,
  };
  let isDrag;
  wrapper.addEventListener("mousedown", (e) => {
    console.log(e.clientX);
    isDrag = true;
    //simpan nilai koordinat klik dari mouse
    pos.x = e.clientX;
    console.log(e.clientX);
  });
  wrapper.addEventListener("mouseup", () => {
    isDrag = false;
    console.log("[up]");
  });
  wrapper.addEventListener("mousemove", (e) => {
    if (isDrag) {
      //cari selisih dari koordinat klik sekarang dikurangi kondisi sebelumnya /pada mouse down
      const dx = e.clientX - pos.x;

      // apabila slide dari kiri ke kanan maka seperti ini 0-(-300). jadi ke kanan
      wrapper.scrollLeft -= dx;
      // console.log(wrapper.scrollLeft)
      console.log("client" + dx);
      console.log(wrapper.scrollLeft);
    }
  });
});

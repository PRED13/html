document.getElementById("registroForm").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const datos = Object.fromEntries(formData.entries());
  
    try {
      const res = await fetch("/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
      });
  
      if (!res.ok) throw new Error("Error al registrar");
  
      alert("Corredor registrado correctamente");
      e.target.reset();
    } catch (err) {
      console.error(err);
      alert("Ocurrió un error al registrar");
    }
  });
  
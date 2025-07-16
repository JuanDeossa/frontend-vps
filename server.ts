const server = Bun.serve({
  port: 3001,
  fetch(req) {
    const url = new URL(req.url);
    let path = `./dist${url.pathname}`;

    // Si la ruta termina en `/`, intenta servir index.html
    if (url.pathname === "/") {
      path = "./dist/index.html";
    }

    try {
      return new Response(Bun.file(path));
    } catch (err) {
      console.error(`Error al servir el archivo: ${err}`);
      return new Response("Not found", { status: 404 });
    }
  },
});

console.log(`🚀 Servidor Bun en http://localhost:${server.port}`);

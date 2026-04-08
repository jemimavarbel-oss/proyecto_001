
const ciudades = [
  { nombre:'Santiago', temp:25, estado:'☀️', humedad:40, viento:10 },
  { nombre:'Valparaíso', temp:18, estado:'⛅', humedad:60, viento:15 },
  { nombre:'Concepción', temp:20, estado:'🌦️', humedad:55, viento:13 },
  { nombre:'Temuco', temp:16, estado:'🌧️', humedad:70, viento:18 },
  { nombre:'La Serena', temp:22, estado:'☀️', humedad:35, viento:9 },
  { nombre:'Antofagasta', temp:24, estado:'☀️', humedad:30, viento:8 },
  { nombre:'Iquique', temp:23, estado:'☀️', humedad:38, viento:12 },
  { nombre:'Rancagua', temp:21, estado:'⛅', humedad:50, viento:11 },
  { nombre:'Talca', temp:22, estado:'☀️', humedad:45, viento:10 },
  { nombre:'Puerto Montt', temp:14, estado:'🌧️', humedad:80, viento:22 }
];

const contenedor = document.getElementById('cards');
if(contenedor){
  ciudades.forEach((c,i)=>{
    contenedor.innerHTML += `
    <article class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="card text-center">
        <div class="card-body">
          <h5>${c.nombre}</h5>
          <p>${c.estado} ${c.temp}°C</p>
          <a href="detalle.html?id=${i}" class="btn btn-primary">Ver detalle</a>
        </div>
      </div>
    </article>`;
  });
}

const params = new URLSearchParams(window.location.search);
const id = params.get('id');
if(id!==null){
  const c = ciudades[id];
  document.getElementById('ciudad').textContent = c.nombre;
  document.getElementById('temp').textContent = c.temp;
  document.getElementById('humedad').textContent = c.humedad;
  document.getElementById('viento').textContent = c.viento;
  const semana = document.getElementById('semana');
  ['Lun','Mar','Mie','Jue','Vie'].forEach(d=>{
    semana.innerHTML += `<li class="list-group-item">${d}: ${c.estado}</li>`;
  });
}

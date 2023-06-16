import Curso from "./classes/Curso.js";
import Profesor from "./classes/Profesor.js";
import Alumno from "./classes/Alumno.js";

// Para el ejemplo
// const html = new Curso(
//   "Curso HTML",
//   "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F927f5294-45af-4593-a52f-f437bf16d811.png&w=1920&q=75",
//   10
// );

// const css = new Curso(
//   "Curso CSS",
//   "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F82daef93-44b7-4a0a-9910-42aa609c6eee.png&w=1920&q=75",
//   5
// );

// const js = new Curso(
//   "Curso JavaScript",
//   "https://ed.team/_next/image?url=https%3A%2F%2Fedteam-media.s3.amazonaws.com%2Fcourses%2Fbig%2F1fc49db5-2454-43e5-b94b-bed0d98719f2.png&w=1920&q=75",
//   25
// );

const elemento = document.getElementById("cursos");

function mostrarCurso(curso) {
  const hijo = document.createElement("div");
  hijo.classList.add("card");
  hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="${curso.getPoster()}" alt="${curso.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 class="t5 s-mb-2 s-center">${curso.getNombre()}</h3>
      <div class="s-mb-2 s-main-center">
        <div class="card__teacher s-cross-center">
          <span class="small">Cantidad de clases: ${curso.getClases()}</span>
        </div>
      </div>
    </div>
`;

  elemento.appendChild(hijo);
}

// Para el ejemplo
// mostrarCurso(html)
// mostrarCurso(css)
// mostrarCurso(js)

const formulario = document.getElementById("formCursos");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const target = e.target;
  const curso = new Curso(
    target.nombreCurso.value,
    target.posterCurso.value,
    target.clasesCurso.value
  );
  mostrarCurso(curso);
});

const profe = new Profesor("Pedro", "Lopez", 42, "Masculino", ["JS","Java","NodeJS"])

const alumno = new Alumno("Juan", "Hincapie", 19, "Masculino", ["JS", ".NET", "Vuejs"]);


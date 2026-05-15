const courses = [
    { id: 1, name: "Cálculo Integral", schedule: "Lun-Mie 08:00 - 10:00", prof: "Dr. Arrieta" },
    { id: 2, name: "Programación Orientada a Objetos", schedule: "Mar-Jue 10:00 - 12:00", prof: "Ing. Chavez" },
    { id: 3, name: "Bases de Datos I", schedule: "Vie 14:00 - 18:00", prof: "Mg. Arteaga" },
    { id: 4, name: "Redes de Computadoras", schedule: "Sab 09:00 - 13:00", prof: "Ing. Pereyra" }
];

const container = document.getElementById('course-container');
const searchInput = document.getElementById('search');

function displayCourses(filter = "") {
    container.innerHTML = "";
    const filtered = courses.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()));
    
    filtered.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.name}</h3>
            <p><strong>Horario:</strong> ${course.schedule}</p>
            <p><strong>Docente:</strong> ${course.prof}</p>
        `;
        container.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => displayCourses(e.target.value));

// Carga inicial
displayCourses();
console.log('Validando conexión con el servidor...');

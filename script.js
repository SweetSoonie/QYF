const ramos = {
    '1-1': [
        { nombre: 'Química General I', codigo: 'qg1' },
        { nombre: 'Matemáticas', codigo: 'mat' },
        { nombre: 'Biología Celular', codigo: 'biocel' },
        { nombre: 'Introducción al Laboratorio', codigo: 'introlab' },
        { nombre: 'Introducción a la Química y Farmacia', codigo: 'introqyf' },
        { nombre: 'Anatomía', codigo: 'anat' },
        { nombre: 'Taller de Nivelación de Lenguaje', codigo: 'tnl' }
    ],
    '1-2': [
        { nombre: 'Química General II', codigo: 'qg2', prereq: ['qg1', 'introlab'] },
        { nombre: 'Cálculo', codigo: 'calc', prereq: ['mat'] },
        { nombre: 'Fisiología I', codigo: 'fisio1', prereq: ['biocel', 'anat'] },
        { nombre: 'Química Orgánica I', codigo: 'qo1', prereq: ['qg1', 'introlab'] },
        { nombre: 'Introducción a la Estadística', codigo: 'introestad', prereq: ['mat'] },
        { nombre: 'Taller de Nivelación de Inglés', codigo: 'tni' }
    ],
    '2-1': [
        { nombre: 'Química Orgánica II', codigo: 'qo2', prereq: ['qg2', 'qo1'] },
        { nombre: 'Química Analítica', codigo: 'qa', prereq: ['qg2', 'calc'] },
        { nombre: 'Fisiología II', codigo: 'fisio2', prereq: ['fisio1'] },
        { nombre: 'Administración de Organizaciones', codigo: 'adminorg', prereq: ['mat', 'tnl'] },
        { nombre: 'Bioquímica', codigo: 'bioq', prereq: ['biocel', 'qo1'] },
        { nombre: 'Ética', codigo: 'et', prereq: ['tnl'] },
    ],
    '2-2': [
        { nombre: 'Botánica', codigo: 'btnc', prereq: ['biocel', 'qo1'] },
        { nombre: 'Análisis Instrumental', codigo: 'aninstr', prereq: ['qa'] },
        { nombre: 'Fisiopatología', codigo: 'fisiopato', prereq: ['fisio2'] },
        { nombre: 'Fisicoquímica', codigo: 'fisicoq', prereq: ['qg2', 'calc'] },
        { nombre: 'Administración de Recursos Humanos', codigo: 'adminrrhh', prereq: ['adminorg', 'et'] },
        { nombre: 'Introducción a la Química Farmacéutica', codigo: 'itroqf', prereq: ['qo2'] }
    ],
    '3-1': [
        { nombre: 'Farmacognosia', codigo: 'fgnosia', prereq: ['qo2', 'btnc'] },
        { nombre: 'Biología Molecular', codigo: 'biomol', prereq: ['bioq'] },
        { nombre: 'Operaciones Unitarias', codigo: 'opus', prereq: ['fisicoq'] },
        { nombre: 'Química Farmacéutica I', codigo: 'qf1', prereq: ['fisio2', 'introqf'] },
        { nombre: 'Asignatura Electiva Profesional I', codigo: 'aep1', prereq: ['et'] },
        { nombre: 'Microbiología', codigo: 'microb', prereq: ['bioq'] },
        { nombre: 'Legislación Farmacéutica', codigo: 'legsf', prereq: ['adminorg'] },
    ],
    '3-2': [
        { nombre: 'Biofarmacia', codigo: 'biofarma', prereq: ['fisio2', 'aninstr'] },
        { nombre: 'Farmacología I', codigo: 'flogia1', prereq: ['fisiopato', 'qf1'] },
        { nombre: 'Inmunología', codigo: 'inmuno', prereq: ['fisiopato', 'biomol'] },
        { nombre: 'Química Farmacéutica II', codigo: 'qf2', prereq: ['qf1', 'microb'] },
        { nombre: 'Práctica Profesional Farmacia I', codigo: 'ppf1', prereq: ['et', 'adminrrhh', 'legsf'] },
        { nombre: 'Bioestadística', codigo: 'bioestad', prereq: ['mat', 'et'] }
    ],
    '4-1': [
        { nombre: 'Tecnología Farmacéutica I', codigo: 'tf1', prereq: ['opus', 'biofarma'] },
        { nombre: 'Farmacología II', codigo: 'flogia2', prereq: ['flogia1', 'qf2'] },
        { nombre: 'Química Fisiológica y Patológica', codigo: 'qfyp', prereq: ['aninstr', 'inmuno'] },
        { nombre: 'Salud Pública y Epidemiología', codigo: 'spye', prereq: ['et', 'bioestad'] },
        { nombre: 'Química de Alimentos', codigo: 'qalimen', prereq: ['aninstr'] },
        { nombre: 'Metodología de la Investigación', codigo: 'metodoin', prereq: ['et', 'bioestad'] },
        { nombre: 'Taller Integración Perfil de Egreso I', codigo: 'tip1', prereq: ['ppf1'] },
    ],
    '4-2': [
        { nombre: 'Tecnología Farmacéutica II', codigo: 'tf2', prereq: ['tf1'] },
        { nombre: 'Farmacia Asistencial, codigo: 'farmasist', prereq: ['adminrrhh', 'spye'] },
        { nombre: 'Nutrición', codigo: 'nutri', prereq: ['qfyp', 'qalimen'] },
        { nombre: 'Gestión de Calidad', codigo: 'gesca', prereq: ['legsf', 'tf1'] },
        { nombre: 'Bioquímica Clínica', codigo: 'bioqclin', prereq: ['qfyp'] },
        { nombre: 'Seminario de Licenciatura', codigo: 'semlic', prereq: ['tf1', 'flogia2', 'qfyp', 'spye', 'qalimen', 'metodoin', 'tip1'] }
        { nombre: 'Taller Integración Perfil de Egreso II', codigo: 'tip2', prereq: ['tip1'] },
    ],
    '5-1': [
        { nombre: 'Farmacia Clínica I', codigo: 'farmaclin1', prereq: ['tf2', 'farmasist', 'nutri', 'gesca', 'bioqclin', 'semlic', 'tip2'] },
        { nombre: 'Cosmética', codigo: 'cosme', prereq: ['tf2'] },
        { nombre: 'Toxicología', codigo: 'toxi', prereq: ['flogia2'] },
        { nombre: 'Gestión Comercial', codigo: 'gescom', prereq: ['adminrrhh', 'gesca'] },
        { nombre: 'Medicamentos Complementarios', codigo: 'medcom', prereq: ['flogia2', 'nutri'] },
        { nombre: 'Práctica Profesional II', codigo: 'ppf2', prereq: ['ppf1', 'flogia2'] },
        { nombre: 'Taller Integración Perfil de Egreso III', codigo: 'tip3', prereq: ['tip2'] },
    ],
    '5-2': [
        { nombre: 'Asignatura Electiva Profesional II', codigo: 'aep2', prereq: ['et'] },
        { nombre: 'Farmacia Clínica II', codigo: 'farmaclin2', prereq: ['farmaclin1'] },
        { nombre: 'Unidad de Investigación I o Internado I', codigo: 'ui1', prereq: ['semlic'] },
        { nombre: 'Práctica Profesional III', codigo: 'ppf3', prereq: ['aninstr', 'qalimen', 'tf2', 'farmasist', 'bioqclin', 'toxi'] },
    ],
    '6-1': [
        { nombre: 'Unidad de Investigación II o Internado II', codigo: 'ui2', prereq: ['ui1'] },
    ],
};

function cargarRamos() {
    const container = document.getElementById('malla-container');
    for (let semestre in ramos) {
        const semDiv = document.createElement('div');
        semDiv.classList.add('semestre');
        semDiv.innerHTML = `<h2>Semestre ${semestre}</h2>`;

        ramos[semestre].forEach(ramo => {
            const div = document.createElement('div');
            div.classList.add('ramo');
            div.textContent = ramo.nombre;
            div.dataset.codigo = ramo.codigo;

            if (!cumplePrerreq(ramo)) {
                div.classList.add('bloqueado');
            } else if (estaAprobado(ramo.codigo)) {
                div.classList.add('aprobado');
            }

            div.addEventListener('click', () => {
                if (div.classList.contains('bloqueado')) return;
                div.classList.toggle('aprobado');
                guardarEstado(ramo.codigo, div.classList.contains('aprobado'));
            });

            semDiv.appendChild(div);
        });

        container.appendChild(semDiv);
    }
}

function cumplePrerreq(ramo) {
    if (!ramo.prereq) return true;
    return ramo.prereq.every(cod => estaAprobado(cod));
}

function estaAprobado(codigo) {
    return localStorage.getItem(`ramo-${codigo}`) === 'true';
}

function guardarEstado(codigo, aprobado) {
    localStorage.setItem(`ramo-${codigo}`, aprobado);
    location.reload();
}

window.onload = cargarRamos;

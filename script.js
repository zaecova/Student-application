const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatWindow = document.getElementById('chatWindow');

const respuestas = [
  'Las afecciones neurológicas afectan a millones de personas y son una de las principales causas de discapacidad.',
  'Más de 11 millones de vidas se pierden cada año por trastornos neurológicos, según la OMS.',
  'El acceso a atención neurológica especializada es clave para reducir el impacto de estas enfermedades.',
  'La prevención, el diagnóstico temprano y la rehabilitación son fundamentales para mejorar la calidad de vida.',
  'El apoyo global es necesario para mejorar la atención y reducir la carga de las enfermedades neurológicas.'
];

const knowledge = {
  datos: 'La OMS estima que más de 1 de cada 3 personas se ven afectadas por una condición neurológica, y las afecciones neurológicas son la principal causa de enfermedad y discapacidad en todo el mundo.',
  impacto: 'Las enfermedades neurológicas afectan a personas de todas las edades y regiones. El crecimiento de la población y el envejecimiento incrementan la carga año tras año.',
  accion: 'La OMS recomienda mejorar el acceso a la atención neurológica, fortalecer los sistemas de salud y la capacitación profesional, y promover prevención, detección precoz y rehabilitación.',
  sintomas: 'Los síntomas neurológicos pueden incluir dolor de cabeza, mareos, desmayos, pérdida de consciencia, problemas de memoria, dificultades cognitivas, problemas de habla, problemas de visión, debilidad muscular, entumecimiento, espasmos, temblores, alteraciones del sueño y cambios de humor o comportamiento.',
  causas: 'Las causas pueden incluir enfermedades degenerativas como Alzheimer, Parkinson y esclerosis múltiple; traumatismos craneoencefálicos; accidentes cerebrovasculares; infecciones como meningitis o encefalitis; tumores; trastornos del desarrollo; factores genéticos y hábitos de vida como abuso de alcohol, drogas, falta de sueño, estrés y mala alimentación.',
  diagnostico: 'El diagnóstico empieza con la evaluación del historial médico y el examen neurológico, incluyendo fuerza muscular, coordinación, sensibilidad, reflejos y estado mental. Puede complementarse con EEG, TC, resonancia magnética, angiografía cerebral y punción lumbar.',
  tratamiento: 'El tratamiento depende de la causa y puede incluir medicamentos para dolor, convulsiones y síntomas psiquiátricos; terapia física, ocupacional y de lenguaje; cirugía; radioterapia; y rehabilitación.',
  prevencion: 'Para reducir el riesgo se recomienda dieta saludable, ejercicio regular, control del estrés, dormir bien, evitar alcohol y drogas, y usar protección en actividades de riesgo para prevenir lesiones cerebrales.',
  definicion: 'Los trastornos neurológicos son patologías del sistema nervioso, incluyendo cerebro, médula espinal y nervios periféricos, que alteran su funcionamiento y generan síntomas tanto de déficit como de exceso de actividad neuronal.',
  prevalencias: ['Accidente cerebrovascular: 160 millones', 'Encefalopatía neonatal: 58,6 millones', 'Migraña: 43,4 millones', 'Demencia: 36,3 millones', 'Neuropatía diabética: 26,3 millones', 'Meningitis: 14,5 millones', 'Epilepsia: 14,4 millones', 'Parto prematuro: 13,8 millones', 'Trastorno del espectro autista: 11,5 millones', 'Cáncer del sistema nervioso: 9,2 millones'],
  principales: ['Accidentes cerebrovasculares', 'Enfermedad de Alzheimer', 'Enfermedad de Parkinson', 'Cefalea tensional', 'Migraña', 'Epilepsia', 'Esclerosis múltiple', 'Tumores cerebrales', 'Distrofia muscular de Duchenne', 'Meningitis', 'Esclerosis lateral amiotrófica (ELA)', 'TDAH', 'Trastornos del Espectro Autista (TEA)', 'Dislexia', 'Síndrome de Tourette', 'Discalculia'],
  estadisticas: ['Personas afectadas (2021): Más de 3,000 millones (más del 40% de la población mundial)', 'Muertes anuales: 11 millones por trastornos neurológicos', 'Incremento en AVAD desde 1990: 18%', 'Porcentaje en países de ingreso bajo/mediano: más del 80%', 'Países con política nacional: 63 (32%) de 194', 'Países con financiación específica: 34 (18%) de 194'],
  riesgos: ['Presión arterial sistólica elevada: hasta 84% reducción en AVAD', 'Contaminación atmosférica y del aire doméstico: reducción significativa', 'Exposición al plomo: 63.1% reducción', 'Glucosa plasmática elevada: 14.6% reducción', 'Tabaquismo: contribución significativa a AVC, demencia y esclerosis múltiple'],
  globalIndicators: {
    'personas afectadas': '3.4 mil millones (42% población mundial)',
    'daly': '435 millones',
    'muertes': '11.8 millones',
    'años vividos con discapacidad': '162 millones',
    'años de vida perdidos': '272 millones',
    'principales causas': 'Ictus, encefalopatía neonatal, migraña, Alzheimer/demencias, neuropatía diabética, meningitis, epilepsia idiopática, complicaciones de parto prematuro, autismo, cánceres del sistema nervioso'
  },
  ageGroupsDetailed: {
    'menores de 5 años': {
      trastornos: 'Encefalopatía neonatal, complicaciones de parto prematuro, meningitis',
      regiones: 'África y Asia Sur-Este',
      observaciones: 'Alta mortalidad infantil asociada a condiciones prevenibles'
    },
    'niños y adolescentes (5–19 años)': {
      trastornos: 'Epilepsia idiopática, autismo, migraña',
      regiones: 'África y Mediterráneo Oriental',
      observaciones: 'Epilepsia es la condición neurológica más frecuente en este grupo'
    },
    'adultos jóvenes (20–44 años)': {
      trastornos: 'Migraña, epilepsia, traumatismos craneales',
      regiones: 'Europa y Américas',
      observaciones: 'Migraña es la principal causa de años vividos con discapacidad'
    },
    'adultos medios (45–64 años)': {
      trastornos: 'Ictus, neuropatía diabética, cánceres del sistema nervioso',
      regiones: 'Pacífico Occidental y Europa',
      observaciones: 'Ictus comienza a ser la principal causa de mortalidad neurológica'
    },
    'mayores de 65 años': {
      trastornos: 'Alzheimer y otras demencias, ictus',
      regiones: 'Europa y Américas',
      observaciones: 'Demencias son la principal causa de discapacidad prolongada'
    }
  },
  goals: {
    'gobernanza': [
      '75% países con políticas sobre trastornos neurológicos: 32% (62% de países que respondieron)',
      '100% países con campañas de concienciación: 24% (45% de países que respondieron)'
    ],
    'diagnóstico y tratamiento': [
      '75% países incluyen trastornos neurológicos en cobertura UHC: 25% (48% de países que respondieron)',
      '80% países con acceso a medicinas y tecnologías esenciales en atención primaria: 29% (56% de países que respondieron)'
    ],
    'prevención y promoción': [
      '80% países con programas intersectoriales de promoción de salud cerebral: 20% (38% de países que respondieron)',
      'Cumplimiento de metas globales de prevención (NCD-GAP, meningitis, recién nacidos): Valores varios'
    ],
    'investigación y sistemas': [
      '80% países con indicadores rutinarios de neurología: 37% (70% de países que respondieron)',
      'Duplicar producción de investigación en neurología: 6.7% del total de investigación en salud'
    ],
    'epilepsia': [
      'Incrementar cobertura de servicios en 50%: 49% cobertura global (mediana)',
      '80% países con legislación que proteja derechos de personas con epilepsia: 25% (48% de países que respondieron)'
    ]
  }
};

const ageGroupResponses = {
  '0-14': {
    percent: '12%',
    info: 'En este grupo predominan los trastornos neurológicos pediátricos y de desarrollo.',
    diseases: ['Epilepsia', 'Parálisis cerebral', 'Desórdenes del neurodesarrollo']
  },
  '15-44': {
    percent: '26%',
    info: 'Este grupo incluye migraña y trastornos psiquiátricos con manifestaciones neurológicas.',
    diseases: ['Migraña', 'Esclerosis múltiple', 'Traumatismo craneal']
  },
  '45-64': {
    percent: '34%',
    info: 'El riesgo de AVC y neuropatías aumenta en este grupo de edad.',
    diseases: ['Accidente cerebrovascular', 'Neuropatía diabética', 'Demencia temprana']
  },
  '65+': {
    percent: '48%',
    info: 'El grupo mayor muestra más demencia y enfermedades cerebrovasculares.',
    diseases: ['Demencia', 'Accidente cerebrovascular', 'Enfermedad de Parkinson']
  }
};

function agregarMensaje(texto, tipo) {
  const mensaje = document.createElement('div');
  mensaje.className = `message ${tipo}`;
  mensaje.textContent = texto;
  chatWindow.appendChild(mensaje);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function respuestaEdad(edad) {
  const grupo = ageGroupResponses[edad];
  return `Grupo de edad ${edad} (${grupo.percent} del gráfico): ${grupo.info} Enfermedades más comunes: ${grupo.diseases.join(', ')}.`;
}

function responderTextoUsuario(texto) {
  const pregunta = texto.toLowerCase();

  if (pregunta.includes('qué son') && pregunta.includes('neurológicos')) {
    return knowledge.definicion;
  }
  if (pregunta.includes('qué dicen') || pregunta.includes('datos') || pregunta.includes('cantidad') || pregunta.includes('afectadas')) {
    return knowledge.datos;
  }
  if (pregunta.includes('impacto') || pregunta.includes('global') || pregunta.includes('afecta a personas')) {
    return knowledge.impacto;
  }
  if (pregunta.includes('acción urgente') || pregunta.includes('recomienda') || pregunta.includes('prevenir') || pregunta.includes('diagnóstico') || pregunta.includes('rehabilitación')) {
    return knowledge.accion;
  }
  if (pregunta.includes('síntomas') || pregunta.includes('sintomas') || pregunta.includes('dolor de cabeza') || pregunta.includes('mareos') || pregunta.includes('temblores') || pregunta.includes('hormigueo')) {
    return knowledge.sintomas;
  }
  if (pregunta.includes('causas') || pregunta.includes('por qué') || pregunta.includes('causa') || pregunta.includes('debe a')) {
    return knowledge.causas;
  }
  if (pregunta.includes('diagnóstico') || pregunta.includes('diagnosticar') || pregunta.includes('cómo se diagnostica') || pregunta.includes('prueba')) {
    return knowledge.diagnostico;
  }
  if (pregunta.includes('tratamiento') || pregunta.includes('tratar') || pregunta.includes('qué hacer') || pregunta.includes('terapia')) {
    return knowledge.tratamiento;
  }
  if (pregunta.includes('prevencion') || pregunta.includes('prevención') || pregunta.includes('prevenir') || pregunta.includes('riesgo')) {
    return knowledge.prevencion;
  }
  if (pregunta.includes('principales') || pregunta.includes('top 10') || pregunta.includes('afecciones principales') || pregunta.includes('enfermedades principales')) {
    return `Las afecciones neurológicas más frecuentes incluyen: ${knowledge.principales.join(', ')}.`;
  }
  if (pregunta.includes('prevalencias') || pregunta.includes('millones') || pregunta.includes('cantidad') || pregunta.includes('incidencia') || pregunta.includes('prevalencia')) {
    return `Prevalencias aproximadas: ${knowledge.prevalencias.join('; ')}.`;
  }
  const enfermedadMap = {
    'accidente cerebrovascular': 'Accidente cerebrovascular: 160 millones',
    'encefalopatía neonatal': 'Encefalopatía neonatal: 58,6 millones',
    'migraña': 'Migraña: 43,4 millones',
    'demencia': 'Demencia: 36,3 millones',
    'neuropatía diabética': 'Neuropatía diabética: 26,3 millones',
    'meningitis': 'Meningitis: 14,5 millones',
    'epilepsia': 'Epilepsia: 14,4 millones',
    'parto prematuro': 'Parto prematuro: 13,8 millones',
    'trastorno del espectro autista': 'Trastorno del espectro autista: 11,5 millones',
    'cáncer del sistema nervioso': 'Cáncer del sistema nervioso: 9,2 millones'
  };
  for (const clave in enfermedadMap) {
    if (pregunta.includes(clave)) {
      return enfermedadMap[clave];
    }
  }
  if (pregunta.includes('riesgo') || pregunta.includes('riesgos') || pregunta.includes('factores de riesgo')) {
    return `Factores de riesgo modificables: ${knowledge.riesgos.join('; ')}.`;
  }
  if (pregunta.includes('indicadores') || pregunta.includes('globales') || pregunta.includes('estadísticas') || pregunta.includes('estadisticas')) {
    const indicadores = Object.entries(knowledge.globalIndicators).map(([key, value]) => `${key}: ${value}`).join('; ');
    return `Indicadores globales: ${indicadores}.`;
  }
  if (pregunta.includes('grupos de edad') || pregunta.includes('detallados') || pregunta.includes('regiones') || pregunta.includes('incidencia')) {
    let respuesta = 'Grupos de edad detallados:\n';
    for (const [grupo, data] of Object.entries(knowledge.ageGroupsDetailed)) {
      respuesta += `${grupo}: Trastornos principales: ${data.trastornos}; Regiones con mayor incidencia: ${data.regiones}; Observaciones: ${data.observaciones}.\n`;
    }
    return respuesta.trim();
  }
  if (pregunta.includes('objetivos') || pregunta.includes('metas') || pregunta.includes('gobernanza') || pregunta.includes('diagnóstico') || pregunta.includes('prevención') || pregunta.includes('investigación') || pregunta.includes('epilepsia')) {
    let respuesta = 'Objetivos y valores base (2022):\n';
    for (const [area, objetivos] of Object.entries(knowledge.goals)) {
      respuesta += `${area.toUpperCase()}:\n`;
      objetivos.forEach(obj => respuesta += `- ${obj}\n`);
    }
    return respuesta.trim();
  }
  if (pregunta.includes('0-14') || pregunta.includes('niño') || pregunta.includes('infantil')) {
    return respuestaEdad('0-14');
  }
  if (pregunta.includes('15-44') || pregunta.includes('joven') || pregunta.includes('adultos jóvenes')) {
    return respuestaEdad('15-44');
  }
  if (pregunta.includes('45-64') || pregunta.includes('adulto') || pregunta.includes('mayor de 45')) {
    return respuestaEdad('45-64');
  }
  if (pregunta.includes('65') || pregunta.includes('mayores') || pregunta.includes('anciano') || pregunta.includes('vejez')) {
    return respuestaEdad('65+');
  }

  return respuestas[Math.floor(Math.random() * respuestas.length)];
}

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const texto = chatInput.value.trim();
  if (!texto) return;

  agregarMensaje(texto, 'user');
  chatInput.value = '';

  setTimeout(() => {
    const respuesta = responderTextoUsuario(texto);
    agregarMensaje(respuesta, 'bot');
  }, 600);
});

const ageBars = document.querySelectorAll('.age-chart .bar');
const ageInfoDisplay = document.getElementById('ageInfoDisplay');

ageBars.forEach((bar) => {
  bar.addEventListener('click', () => {
    ageBars.forEach((item) => item.classList.remove('active'));
    bar.classList.add('active');
    const edad = bar.dataset.age;
    const respuesta = respuestaEdad(edad);
    ageInfoDisplay.textContent = respuesta;
    ageInfoDisplay.classList.add('show');
  });
});

const prevalenceLegendItems = document.querySelectorAll('.radar-legend-item');
const prevalenceInfoDisplay = document.getElementById('prevalenceInfoDisplay');
const prevalenceRadarChart = document.getElementById('prevalenceRadarChart');

function setPrevalenceInfo(item) {
  const disease = item.dataset.label;
  const value = item.dataset.value;
  const description = item.dataset.description;
  const respuesta = `<strong>${disease}:</strong> ${value} (${description})`;
  prevalenceInfoDisplay.innerHTML = respuesta;
  prevalenceInfoDisplay.classList.add('show');
}

function buildRadarChart(items) {
  if (!prevalenceRadarChart || !items.length) return;

  const ns = 'http://www.w3.org/2000/svg';
  const size = 700;
  const center = size / 2;
  const maxRadius = 230;
  const levels = 5;

  const createSvgNode = (tag, attrs = {}) => {
    const node = document.createElementNS(ns, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };

  const toPointString = (radiusFactor) => items.map((item, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / items.length) * index;
    const x = center + Math.cos(angle) * maxRadius * radiusFactor;
    const y = center + Math.sin(angle) * maxRadius * radiusFactor;
    return `${x},${y}`;
  }).join(' ');

  for (let level = levels; level >= 1; level -= 1) {
    prevalenceRadarChart.appendChild(createSvgNode('polygon', {
      points: toPointString(level / levels),
      class: 'radar-level'
    }));
  }

  items.forEach((item, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / items.length) * index;
    const outerX = center + Math.cos(angle) * maxRadius;
    const outerY = center + Math.sin(angle) * maxRadius;
    prevalenceRadarChart.appendChild(createSvgNode('line', {
      x1: center,
      y1: center,
      x2: outerX,
      y2: outerY,
      class: 'radar-axis'
    }));
  });

  const valueShape = items.map((item, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / items.length) * index;
    const radius = maxRadius * Number(item.dataset.ratio);
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    return `${x},${y}`;
  }).join(' ');

  prevalenceRadarChart.appendChild(createSvgNode('polygon', {
    points: valueShape,
    class: 'radar-shape'
  }));

  for (let level = 1; level <= levels; level += 1) {
    prevalenceRadarChart.appendChild(createSvgNode('text', {
      x: center + 10,
      y: center - (maxRadius * (level / levels)) + 4,
      class: 'radar-scale-label'
    })).textContent = `${Math.round((100 / levels) * level)}%`;
  }

  items.forEach((item, index) => {
    const angle = (-Math.PI / 2) + ((Math.PI * 2) / items.length) * index;
    const radius = maxRadius * Number(item.dataset.ratio);
    const x = center + Math.cos(angle) * radius;
    const y = center + Math.sin(angle) * radius;
    const labelRadius = maxRadius + 48;
    const labelX = center + Math.cos(angle) * labelRadius;
    const labelY = center + Math.sin(angle) * labelRadius;
    const point = createSvgNode('circle', {
      cx: x,
      cy: y,
      r: 8,
      class: 'radar-point',
      'data-index': item.dataset.index
    });

    const label = createSvgNode('text', {
      x: labelX,
      y: labelY,
      class: 'radar-label',
      'text-anchor': labelX < center - 20 ? 'end' : labelX > center + 20 ? 'start' : 'middle'
    });
    label.textContent = item.dataset.short;

    point.addEventListener('click', () => activatePrevalenceItem(item.dataset.index));
    prevalenceRadarChart.appendChild(point);
    prevalenceRadarChart.appendChild(label);
  });
}

function activatePrevalenceItem(index) {
  prevalenceLegendItems.forEach((item) => {
    item.classList.toggle('active', item.dataset.index === index);
  });

  const radarPoints = prevalenceRadarChart.querySelectorAll('.radar-point');
  radarPoints.forEach((point) => {
    point.classList.toggle('active', point.dataset.index === index);
  });

  const selectedItem = Array.from(prevalenceLegendItems).find((item) => item.dataset.index === index);
  if (selectedItem) {
    setPrevalenceInfo(selectedItem);
  }
}

prevalenceLegendItems.forEach((item) => {
  item.addEventListener('click', () => activatePrevalenceItem(item.dataset.index));
});

buildRadarChart(Array.from(prevalenceLegendItems));
activatePrevalenceItem('0');

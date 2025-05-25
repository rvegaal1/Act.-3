document.addEventListener('DOMContentLoaded', function () {
  // Login simulado
  const loginForm = document.querySelector('.form-login');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;

      if (email === "paciente@correo.com" && password === "1234") {
        window.location.href = "dashboard-paciente.html";
      } else if (email === "medico@correo.com" && password === "1234") {
        window.location.href = "dashboard-medico.html";
      } else {
        alert("Credenciales incorrectas.");
      }
    });
  }

  // Confirmación al agendar cita
  const formCita = document.querySelector('.form-cita');
  if (formCita) {
    formCita.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("¡Cita agendada con éxito!");
      window.location.href = 'dashboard-paciente.html';
    });
  }

  // Marcar como atendido
  const botonesAtender = document.querySelectorAll('button');
  botonesAtender.forEach(btn => {
    if (btn.textContent === 'Marcar como atendido') {
      btn.addEventListener('click', function () {
        btn.textContent = 'Atendido';
        btn.disabled = true;
        btn.style.backgroundColor = '#4CAF50';
      });
    }
  });
});

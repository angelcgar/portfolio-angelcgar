export function showNotification(
    message = '¡Esto es una notificación!',
  ) {

    const notif = document.createElement('div');
    notif.classList.add('notification');
    notif.textContent = message;

    document.body.appendChild(notif);

    // Forzar reflow para animación
    void notif.offsetWidth;
    notif.classList.add('show');

    // Ocultar después de 3 segundos
    setTimeout(() => {
      notif.classList.remove('show');
      notif.classList.add('hide');

      // Eliminar del DOM después de animación
      notif.addEventListener('transitionend', () => {
        notif.remove();
      });
    }, 3000);
  };

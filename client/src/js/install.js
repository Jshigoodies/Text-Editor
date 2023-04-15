const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Update UI to notify the user that they can add the app to the home screen
  butInstall.style.display = 'block';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  // Show the prompt
  deferredPrompt.prompt();

  // Wait for the user to respond to the prompt
  const { outcome } = await deferredPrompt.userChoice;

  // Update UI to notify the user whether they installed the app or not
  if (outcome === 'accepted') {
    console.log('User accepted the install prompt');
  } else {
    console.log('User dismissed the install prompt');
  }

  // Clear the deferredPrompt variable
  deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  // Show a confirmation message to the user
  console.log('App installed successfully!');
});
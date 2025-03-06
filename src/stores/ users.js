import { writable } from 'svelte/store';

export  const  users = writable([
  { id: 1, name: 'John Doe', status: 'Online', image: '/images/user1.jpg' },
  { id: 2, name: 'Jane Smith', status: 'Offline', image: '/images/user2.jpg' },
]);
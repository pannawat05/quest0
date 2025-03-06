<script>
  import { users } from '../stores/users.js';
  import { searchTerm, filterStatus } from '../stores/filter.js';
  import UserCard from './UserCard.svelte';
  import { fly } from 'svelte/transition';
  import { onDestroy } from 'svelte';

  let filteredUsers = [];
  let userList = [];

  const unsubscribe = users.subscribe(value => {
    userList = value;
  });

  $: filteredUsers = userList.filter(user => {
    const search = $searchTerm.toLowerCase();
    const status = $filterStatus;
    const nameMatch = user.name.toLowerCase().includes(search);
    const statusMatch = status === 'All' || user.status === status;
    return nameMatch && statusMatch;
  });

  onDestroy(() => {
    unsubscribe();
  });

  console.log(import.meta.resolve('../stores/users.js')); 
</script>
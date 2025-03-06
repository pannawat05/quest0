<script>
import {users} from '../stores/users.js';
  import { searchTerm, filterStatus } from '../stores/filter.js';
  import UserCard from './UserCard.svelte';
  import { fly } from 'svelte/transition';
  import { onDestroy } from 'svelte';

  let filteredUsers = [];
  let userList = [];
  let search = '';
  let status = 'All';

  // Subscribe to stores
  const unsubscribeUsers = users.subscribe(value => {
    userList = value;
  });

  const unsubscribeSearchTerm = searchTerm.subscribe(value => {
    search = value.toLowerCase();
  });

  const unsubscribeFilterStatus = filterStatus.subscribe(value => {
    status = value;
  });

  // Reactive statement
  $: filteredUsers = userList.filter(user => {
    const nameMatch = user.name.toLowerCase().includes(search);
    const statusMatch = status === 'All' || user.status === status;
    return nameMatch && statusMatch;
  });

  // Cleanup on destroy
  onDestroy(() => {
    unsubscribeUsers();
    unsubscribeSearchTerm();
    unsubscribeFilterStatus();
  });

  // ใช้ new URL() แทน import.meta.resolve()
  console.log(new URL('../stores/users.js', import.meta.url).href);
</script>

<!-- แสดงรายการผู้ใช้ -->
{#each filteredUsers as user (user.id)}
  <div transition:fly={{ y: 20, duration: 300 }}>
    <UserCard {user} />
  </div>
{/each}

<script>
  export let user;
  import { createEventDispatcher } from 'svelte';
  import { scale } from 'svelte/transition';
  const dispatch = createEventDispatcher();
</script>

<div class="user-detail" transition:scale>
  <button on:click={() => dispatch('close')}>Close</button>
  <img src={user.image} alt={user.name} />
  <h2>{user.name}</h2>
  <p>Status: {user.status}</p>
</div>
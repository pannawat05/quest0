<script>
  export let user;
  import UserDetails from "./UserDetails.svelte";
  let showDetail = false;
</script>

<div class="user-card" on:click={() => showDetail = true}>
  <img src={user.image} alt={user.name} />
  <h3>{user.name}</h3>
  <p>Status: {user.status}</p>
</div>

{#if showDetail}
  <UserDetail {user} on:close={() => showDetail = false} />
{/if}
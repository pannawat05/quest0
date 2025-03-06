<script>
  import { searchTerm, filterStatus } from '../stores/filter.js';
</script>

<input type="text" placeholder="Search" bind:value={$searchTerm} />
<select bind:value={$filterStatus}>
  <option value="All">All</option>
  <option value="Online">Online</option>
  <option value="Offline">Offline</option>
</select>
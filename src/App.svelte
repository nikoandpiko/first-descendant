<script lang="ts">
  import { onMount } from 'svelte';
  import WeaponList from './components/WeaponList.svelte';
  import DescendantList from './components/DescendantList.svelte';
  import { loadData, weaponData, descendantData, error } from './stores/apiStore';

  onMount(() => {
    loadData();
  });
</script>

<main>
  <h1>The First Descendant Data</h1>
  {#if $error}
    <div class="error">Error: {$error.message}</div>
  {:else}
    <WeaponList {weaponData} />
    <DescendantList {descendantData} />
  {/if}
</main>

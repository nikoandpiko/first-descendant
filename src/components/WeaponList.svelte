<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let weaponData: Writable<any[]>;

  let data: any[] = [];

  $: data = $weaponData;
</script>

<div class="metadata-section" id="weapon-data">
  <h2>Weapons</h2>
  {#if data.length > 0}
    <ul>
      {#each data as weapon}
        <li>
          <strong>{weapon.weapon_name}</strong><br>
          Type: {weapon.weapon_type}<br>
          Rarity: {weapon.weapon_tier}<br>
          Rounds Type: {weapon.weapon_rounds_type}<br>
          Perk Ability: {weapon.weapon_perk_ability_name ? `${weapon.weapon_perk_ability_name} - ${weapon.weapon_perk_ability_description}` : 'None'}<br>
          <img src={weapon.image_url} alt={weapon.weapon_name} loading="lazy" />
        </li>
      {/each}
    </ul>
  {:else}
    <div>Loading weapon data...</div>
  {/if}
</div>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    margin-bottom: 15px;
    background: #1a1a1a;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  li > img {
    margin: 10px 0;
    width: 1024px;
    height: 304px;
    height: auto;
  }
</style>

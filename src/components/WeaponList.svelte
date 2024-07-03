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
          <div class="weapon-details">
            <strong>{weapon.weapon_name}</strong>
            <span>Type: {weapon.weapon_type}</span>
            <span>Rarity: {weapon.weapon_tier}</span>
            <span>Rounds Type: {weapon.weapon_rounds_type}</span>
            <span class="perk">
              Perk Ability: {weapon.weapon_perk_ability_name ? weapon.weapon_perk_ability_name : 'None'}
              {#if weapon.weapon_perk_ability_name}
                <span class="perk-tooltip">
                  <img src="/images/question-mark.svg" alt="?" class="icon">
                  <span class="tooltip-text">{weapon.weapon_perk_ability_description}</span>
                </span>
              {/if}
            </span>
          </div>
          <div class="weapon-image">
            <img src={weapon.image_url} alt={weapon.weapon_name} loading="lazy" />
          </div>
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
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(1, 1fr);
  }
  li {
    background: #1a1a1a;
    color: #fff;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    position: relative;
  }
  .weapon-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    flex-grow: 1;
  }
  .weapon-details span {
    margin: 5px 0;
  }
  .perk {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .perk-tooltip {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    margin-left: 5px;
    height: 16px;
    width: 16px;
  }
  .perk-tooltip .icon {
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background-color: #fff;
    border-radius: 50%;
    padding: 2px;
  }
  .perk-tooltip .tooltip-text {
    padding: 0.5em;
    visibility: hidden;
    width: 220px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -110px;
    opacity: 0;
    transition: opacity 0.3s;
  }
  .perk-tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
  .weapon-image {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .weapon-image img {
    width: 100%;
    height: auto;
  }

  @media (min-width: 480px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 768px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1024px) {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>

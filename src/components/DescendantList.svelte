<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let descendantData: Writable<any[]>;

  let data: any[] = [];

  $: data = $descendantData;
</script>

<div class="metadata-section" id="descendant-data">
  <h2>Descendant Information</h2>
  {#if data.length > 0}
    <ul>
      {#each data as descendant}
        <li>
          <strong>{descendant.descendant_name}</strong><br>
          <img src={descendant.descendant_image_url} alt={descendant.descendant_name} loading="lazy" />
          <div>
            <h3>Skills</h3>
            <ul>
              {#each descendant.descendant_skill as skill}
                <li>
                  <strong>{skill.skill_name}</strong><br>
                  Type: {skill.skill_type}<br>
                  Element: {skill.element_type}<br>
                  Archetype: {skill.arche_type}<br>
                  Description: {skill.skill_description}<br>
                  <img src={skill.skill_image_url} alt={skill.skill_name} width="100" loading="lazy" />
                </li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <div>Loading descendant data...</div>
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
    width: 150px;
    height: auto;
  }
</style>

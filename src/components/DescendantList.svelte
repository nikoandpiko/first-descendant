<script lang="ts">
  import type { Writable } from 'svelte/store';

  export let descendantData: Writable<any[]>;

  let data: any[] = [];

  $: data = $descendantData;
</script>

<div class="metadata-section" id="descendant-data">
  <h2>Descendants</h2>
  {#if data.length > 0}
    <ul class="descendant-list">
      {#each data as descendant}
        <li>
          <strong>{descendant.descendant_name}</strong><br>
          <img class="descendant-image" src={descendant.descendant_image_url} alt={descendant.descendant_name} loading="lazy" />
          <div class="skills">
            <ul class="skill-list">
              {#each descendant.descendant_skill as skill, index}
                <li class="skill-item">
                  <span class="skill-tooltip">
                    <img class="skill-image" src={skill.skill_image_url} alt={skill.skill_name} loading="lazy" />
                    <strong>{skill.skill_name}</strong>
                    <span class="tooltip-text">
                      Type: {skill.skill_type}<br>
                      Element: {skill.element_type}<br>
                      Archetype: {skill.arche_type}<br>
                      Description: {skill.skill_description}
                    </span>
                  </span>
                </li>
              {/each}
            </ul>
          </div>
        </li>
      {/each}
    </ul>
  {:else}
    <div>Loading Descendant data...</div>
  {/if}
</div>

<style>
  ul.descendant-list {
    list-style-type: none;
    padding: 0;
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(1, 1fr);
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

  .descendant-image {
    margin: 10px 0;
    width: 256px;
    height: 256px;
    border-radius: 50%;
  }

  .skills {
    width: 100%;
  }

  .skill-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 30%;
  }

  .skill-tooltip {
    position: relative;
    padding: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .skill-image {
    width: 96px;
    height: 96px;
    border-radius: 50%;
  }

  .tooltip-text {
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

  .skill-tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  @media (min-width: 768px) {
    ul.descendant-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>

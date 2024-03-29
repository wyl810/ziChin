// List.js
import { inject } from 'vue'
export default {
  setup() {
    const { data } = inject('app-data')
    return {
      data,
    }
  },
  template: `
  <section class="content">

      <ul v-for="{ title, list } in data">
        <li style="list-style-type: disclosure-open;">
          <div>{{ title }}</div>
        </li>
        <br>

        <template v-for="{ name, url, target, disc, br } in list">
          <li>
            {{ name }}
            <a
              :href="url"
              :target="target"
            >{{ disc }}</a>
          </li>
          <br v-if="br">
        </template>
        <br>
      </ul>

      <br>
      <br>

    </section>`,
}

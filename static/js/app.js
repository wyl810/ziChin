import { provide, reactive, onMounted } from 'vue'
import List from './List.js'
import Footer from './footer.js'
import { iconBase64, listData as data } from './info.js'
export default {
	setup() {
		const appData = reactive({
			title: 'zichin',
			data,
		})
		provide('app-data', appData)
		onMounted(() => {
			const vm = document.querySelector('link[rel="icon"]')
			vm.setAttribute('href', iconBase64)
		})
		return {
			appData,
		}
	},
	template: `
    <div>
      <br>
      <List></List>
      <br>
      <Footer></Footer>
    </div>
  `,
	components: {
		List,
		Footer,
	},
}

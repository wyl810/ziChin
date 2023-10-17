// my-component.js
import { ref, inject } from 'vue'
export default {
	setup() {
		const count = ref(0)
		const appInfo = inject('app-info')
		return {
			count,
			appInfo,
		}
	},
	template: `<div style="border: 1px solid silver;">
      <div> child: </div>
      <div> count is {{ count }} </div>
      <div> inject appInfo is {{ appInfo }} </div>
    </div>`,
}

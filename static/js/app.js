import { ref, provide, reactive } from 'vue'
import List from './List.js'
import Footer from './footer.js'
export default {
	setup() {
		const message = ref('Hello Vue!')
		const appData = reactive({
			title: 'zichin',
			data: [
				{
					title: 'test www',
					list: [
						{
							name: 'mdclub论坛',
							url: 'http://mdclub.zichin.com',
							disc: 'http://mdclub.zichin.com',
							target: '_blank',
						},
						{
							name: 'mdclub论坛admin',
							url: 'http://mdclub.zichin.com/admin/',
							disc: 'http://mdclub.zichin.com/admin/',
							target: '_blank',
							br: true,
						},
						{
							name: 'discuz论坛',
							url: 'http://luntan.zichin.com',
							disc: 'http://luntan.zichin.com',
							target: '_blank',
						},
						{
							name: 'discuz论坛admin',
							url: 'http://luntan.zichin.com',
							disc: 'http://luntan.zichin.com',
							target: '_blank',
							br: true,
						},
						{
							name: 'emlog博客',
							url: 'http://blog.zichin.com',
							disc: 'http://blog.zichin.com',
							target: '_blank',
						},
						{
							name: 'emlog博客admin',
							url: 'http://blog.zichin.com/admin/',
							disc: 'http://blog.zichin.com/admin/',
							target: '_blank',
							br: true,
						},
						{
							name: 'wordpress博客',
							url: 'http://blog2.zichin.com',
							disc: 'http://blog2.zichin.com',
							target: '_blank',
						},
						{
							name: 'wordpress博客admin',
							url: 'http://blog2.zichin.com/wp-admin/',
							disc: 'http://blog2.zichin.com/wp-admin/',
							target: '_blank',
						},
					],
				},
				{
					title: '常用网址',
					list: [
						{
							name: '查询兼容性',
							url: 'https://caniuse.com/',
							disc: 'caniuse.com',
							target: '_blank',
						},
					],
				},
				{
					title: 'test sth.',
					list: [
						{
							name: 'marquee',
							url: './marquee-test.html',
							disc: 'marquee-test',
							target: '_self',
						},
						{
							name: 'card',
							url: './card-test.html',
							disc: 'card-test',
							target: '_self',
						},
						{
							name: 'css3 line',
							url: './css3-line-test.html',
							disc: 'css3-line-test',
							target: '_self',
						},
						{
							name: 'canvas river',
							url: './canvas-test.html',
							disc: 'canvas-test',
							target: '_self',
						},
						{
							name: 'vue3 raw',
							url: './www/vue3-raw-test/index.html',
							disc: 'vue3-test',
							target: '_self',
						},
						{
							name: 'vue3 vite',
							url: './www/vue3-vite-test/dist/index.html',
							disc: 'vue3-vite-test',
							target: '_self',
						},
					],
				},
			],
		})
		provide('app-data', appData)
		return {
			message,
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

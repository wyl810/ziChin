import { ref, provide, reactive } from 'vue'
import MyComponent from './my-component.js'
export default {
  setup () {
    const message = ref('Hello Vue!')
    const appInfo = reactive({
      title: 'vue3-test'
    })
    provide('app-info', appInfo)
    return {
      message,
      appInfo
    }
  },
  template: `
    <div> 
      <div> app message is{{ message }} </div>
      <div> provide is {{ appInfo }} </div>
      <MyComponent></MyComponent>
    </div>
  `,
  components: {
    MyComponent
  }
}
<script>
	import {
		useAuthStore
	} from '@/stores/useAuthStore.js';

	export default {
		onLaunch: function() {
			console.log('App Launch')
			// 使用仓库
			const store = useAuthStore();
			// 仓库去获取用户信息
			store.getUser();
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
<template>
  <view class="container">
    <!-- 显示当前选中的页面内容 -->
    <home v-if="selectedTab === 'home'" />
    <content v-else-if="selectedTab === 'content'" />
    <profile v-else-if="selectedTab === 'profile'" />

    <!-- 底部选项卡 -->
    <view class="tabbar">
      <view
        v-for="tab in tabs"
        :key="tab.key"
        :class="{ 'tabbar-item': true, 'active': selectedTab === tab.key }"
        @click="selectTab(tab.key)"
      >
        {{ tab.text }}
      </view>
    </view>
  </view>
</template>

<script>
import Home from '@/components/adminPage/Home.vue';
import Content from '@/components/adminPage/Content.vue';
import Profile from '@/components/adminPage/Profile.vue';

export default {
  components: {
    Home,
    Content,
    Profile
  },
  data() {
    return {
      selectedTab: 'home', // 默认选中主页
      tabs: [
        { key: 'home', text: '主页' },
        { key: 'content', text: '内容' },
        { key: 'profile', text: '我' }
      ]
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    }
  }
};
</script>

<style lang="scss">
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}

	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		display: flex;
		background-color: #fff;
		box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);

		.tabbar-item {
			flex: 1;
			padding: 12px 0;
			text-align: center;
			color: #888;
			font-size: 14px;

			&.active {
        background-color: #cecece;
        
				color: #007aff; // 选中项的颜色
			}
		}
	}
</style>

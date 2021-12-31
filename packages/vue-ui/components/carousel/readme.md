## carousel走马灯
### 需求
1. 能够循环播放，视觉上最后一张和第一张能够无缝衔接
- 实现方案：
2. 需要有面板指示点，且可选择位置
3. autoPlay，可设置自动播放
- 

### props
1. autoplay: boolean 是否自动播放，默认false
2. interval: number 自动播放时间间隔，单位ms，默认3000
3. height: number 轮播图容器的高度，单位px，默认150
4. dots: boolean 是否显示指示点面板，默认true
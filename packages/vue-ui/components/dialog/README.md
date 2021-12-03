# Dialog 对话框

## Attributes
                                                              
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|:----|:----|:----:|:----:|:----:|
| visible | 是否显示 Dialog | boolean | - | false |
| title | Dialog 的标题，也可通过slot（见下表）传入 | string | - | - |
| width | Dialog 的宽度 | string | - | 50% |
| top | 距离窗口顶部距离 | string | - | 15vh |
| modal | 是否需要遮罩层 | boolean | - | true |
| showClose | 是否需要关闭按钮 | boolean | - | true |
| center | 头部和底部是否要布局居中 | boolean | - | false |

## Slot

| name | 说明 |
|:----|:----|
| - | Dialog内容 |
| title | Dialog 标题区的内容 |
| footer | Dialog 按钮区的内容 |

## Events

| Event name | 说明 | 回调参数 |
|:----|:----|:----:|
| close | Dialog关闭的回调 | - |



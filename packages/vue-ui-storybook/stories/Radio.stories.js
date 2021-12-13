export default {
  title: '组件/Radio 单选框',
  args: {
    // value: '1',
  },
  argTypes: {
    // value: {
    //   control: { type: 'text' },
    // },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <div style="margin: 10px">无group</div>
      <c-radio v-model="value" label="1" group="cho" disabled>
        C语言
      </c-radio>
      <c-radio v-model="value" label="2" group="cho">
        JavaScript
      </c-radio>
      <c-radio v-model="value" label="3" group="cho">
        java
      </c-radio>
      <div style="margin: 10px">有group</div>
      <c-radio-group v-model="value2">
        <c-radio label="1">
          CPP
        </c-radio>
        <c-radio label="2" >
          Python
        </c-radio>
        <c-radio label="3">
          Go
        </c-radio>
      </c-radio-group>
    </div>

  `,
  data() {
    return {
      value: '2',
      value2: '3',
    };
  },
});

export const Radio = Template.bind({});

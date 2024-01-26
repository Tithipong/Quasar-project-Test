//InputPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

test('should show the form element on the user output', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form').exists()).toBe(true)
  })

  test('should contain input fields in template', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('form > input').exists()).toBe(true)
  })

  test('should have button', () => {
    const wrapper = shallowMount(IndexPage)
    expect(wrapper.find('button').exists()).toBe(true)
  })
  test('trigger click event on button ', async () => {
    const wrapper = shallowMount(IndexPage)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('submit form')
  })
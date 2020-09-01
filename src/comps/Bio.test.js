import React from 'react'
import {shallow} from 'enzyme'
import Bio from './Bio'

it('should contain my name', () => {
	const wrapper = shallow(<Bio name="Sunny" age="5"/>)
	const headingText = wrapper.find('h4.header').text()

	expect(headingText).toBe("My name is Sunny")
	
})

it('should contain my previous feeling', () => {
	const wrapper = shallow(<Bio name="Sunny" age="5"/>)
	const prevFeeling = wrapper.find('p.feeling').text()
	
	expect(prevFeeling).toBe("I am feeling nice")
})

it('should contain my name', () => {
	const wrapper = shallow(<Bio name="Sunny" age="5"/>)

	const button = wrapper.find('button')

	button.simulate("click")

	const nextFeeling = wrapper.find('p.feeling').text()

	expect(nextFeeling).toBe("I am feeling very nice")
})
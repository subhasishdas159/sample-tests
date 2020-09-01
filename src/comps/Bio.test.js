import React from 'react'
import {shallow} from 'enzyme'
import Bio from './Bio'

it('should contain my name', () => {
	const wrapper = shallow(<Bio name="Sunny" age="5"/>)

	const h4 = wrapper.find('h4')
	const result = h4.text()

	expect(result).toBe("My name is Sunny")
})
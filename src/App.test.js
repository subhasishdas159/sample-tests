import React from 'react'
import {shallow} from 'enzyme'
import Bio from './comps/Bio'
import App from './App' 

it('should contain my name', () => {
	const wrapper = shallow(<App />)
	const bio = wrapper.find(Bio)

	expect(bio.exists()).toBe(true)
	
})
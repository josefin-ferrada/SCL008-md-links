#!/usr/bin/env node

const add = (b,c) =>{

	if(typeof(b) !== 'number' || typeof(c) !== 'number' ){
		return false;
	}
	return b+c;
	
} 

const multiply = (a,b) =>{
	return a*b;
}

module.export = () {
	add,
	multiply
}
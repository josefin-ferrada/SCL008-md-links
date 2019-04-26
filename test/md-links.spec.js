
const mdLinks = require("./../md-links");


describe('validatef', () => {

  it('si ha ingresado el archivo test.md  y --validate deberia retornar un arreglo con 2 objetos', () => {
    expect(mdLinks.validatef('./../test.md')).resolves.toEqual(
    [ { link:
     'https://josefin-ferrada.github.io/project-hackaton/src/index.html',
    title: '<strong>Filmaton</strong>',
    status: 200,
    statustext: 'OK' },
  { link: 'http://www.omdbapi.com/',
    title: 'OMDB',
    status: 200,
    statustext: 'OK' } ]);;
  });


});

describe('stat', () => {
	it('si ha ingresado --stat debe retornar dos objetos',()=>{
		expect(mdLinks.stat('./../test.md')).resolves.toEqual({ total: 2, unique: 2 })
	})
})
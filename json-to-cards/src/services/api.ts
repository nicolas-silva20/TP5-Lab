import Instrumento from "../models/instrumento";

export async function getInstrumentosJSONFetch(){
	const urlServer = ('http://localhost:8080/api/instrumentos');
	const response = await fetch(urlServer, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
		mode: 'cors'
	})
	return await response.json();
}

export async function getInstrumentPorIdFetch(id: number) {
	const urlServer = (`http://localhost:8080/api/instrumentos/${id}`);
	const response = await fetch(urlServer, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
		mode: 'cors'
	})
	return await response.json() as Instrumento;
}
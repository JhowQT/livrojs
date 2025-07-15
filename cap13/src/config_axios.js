import axios from 'axios';

// cria uma instancia Axios com a URL base do Web Service a ser acessado pelo app

export const inAxios = axios.create({baseURL: 'http://localhost:3001'});


const formulario = document.querySelector("#form-contacto");
const nombre = document.querySelector("#form-nombre");
const apellido = document.querySelector("#form-apellido");
const email = document.querySelector("#form-email");
const numero = document.querySelector("#form-numero");
const motivo = document.querySelector("#form-motivo");
const enviar = document.querySelector("#form-submit");
const btnSolicitud = document.querySelector("#btn-solicitud");
const btnDelete=document.querySelector("#btn-delete-solicitud");
const btnBar=document.querySelector("#btns-solicitudes");
const tableBody = document.querySelector('#table-body');
let solicitudes = [];
export{formulario,nombre,apellido,email,numero,motivo,enviar,btnSolicitud,solicitudes,btnDelete,btnBar,tableBody};
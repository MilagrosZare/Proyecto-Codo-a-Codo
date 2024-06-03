

/* =================== TYPING ANIMATION ====================== */
var typed = new Typed (".typing",{
    strings:["","Full Stack Developer", "Web Applications Developer","UX Designer","Software Engineer",""],
typeSpeed:100,
BackSpeed:60,
loop:true
})
/* ===== HEADER ===== */
const nav = document.querySelector(".nav"),
	navList = nav.querySelectorAll("li"),
	totalNavList = navList.length,
	allSection = document.querySelectorAll(".section"),
	totalSection = allSection.length;
	for(let i=0; i<totalNavList; i++)
	{
		const a = navList[i].querySelector("a");
		a.addEventListener("click", function()
		{
			removeBackSection();
                for(let j=0; j<totalNavList; j++)
                {
                    if(navList[j].querySelector("a").classList.contains("active"))
                    {
                        addBackSection(j);
                        //allSection[j].classList.add("back-section");
                    }
                    navList[j].querySelector("a").classList.remove("active");
                }
			this.classList.add("active")
			showSection(this);
			if(window.innerWidth < 1200)
			{
				headerSectionTogglerBtn();
		    }
        })
    }
function removeBackSection()
{
    for(let i=0; i<totalSection; i++)
         {
            allSection[i].classList.remove("back-section");
         }
}
function addBackSection(num)
{
    allSection[num].classList.add("back-section");
}
function showSection(element)
{
	for(let i=0 ; i<totalSection ; i++)
	{
		allSection[i].classList.remove("active");
    }
	const target = element.getAttribute("href").split("#")[1];
	document.querySelector("#" + target).classList.add("active")
	
}
function updateNav(element)
{
    for(let i=0; i<totalNavList; i++)
    {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if(target === navList[i].querySelector("a").getAttribute("href").split("#"))
        {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}
document.querySelector(".hire-me").addEventListener("click", function()
{
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
})
const navTogglerBtn = document.querySelector(".ham"),
header = document.querySelector(".nav");
const barras = document.querySelectorAll(".ham span");

navTogglerBtn.addEventListener("click", () =>
    {
         headerSectionTogglerBtn()
    })     
function headerSectionTogglerBtn()
{   
    header.classList.toggle("active");
    barras.forEach(child =>
    {
        child.classList.toggle("animated");
    });
}

/* =================== CONTACT ============================= */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    telefono: /^\d{7,10}$/, // 7 a 10 numeros.
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,60}$/, // Letras y espacios, pueden llevar acentos.
}

const campos = {
    nombre: false,
    email: false,
    telefono: false,
    asunto: false,
}

const validarFormulario = (e) => {
    switch (e.target.name) {
            case "nombre":
                validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
            case "email":
                validarCampo(expresiones.email, e.target, 'email');
            break;
            case "telefono":
                validarCampo(expresiones.telefono, e.target, 'telefono');
            break;
            case "asunto":
                validarCampo(expresiones.asunto, e.target, 'asunto');
            break;
            
        }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
            document.getElementById(`campo_${campo}`).classList.remove('form-group-incorrecto');
            document.getElementById(`campo_${campo}`).classList.add('form-group-correcto');
            document.querySelector(`#campo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
    } else {
            document.getElementById(`campo_${campo}`).classList.add('form-group-incorrecto');
            document.getElementById(`campo_${campo}`).classList.remove('form-group-correcto');
            document.querySelector(`#campo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
    }
}


    //obtener valor select
    let selectServicios = document.getElementById('servicios')
    let valueTexto = selectServicios.options[selectServicios.selectedIndex].value
    //console.log(valueTexto)

    //obtener valor checkbox
    let checkboxes = {}
    document.querySelectorAll('[type="checkbox"]').forEach(item => {
        if (item.checked === true){
            checkboxes[item.value] = true
        } else if (item.checked === false){
            checkboxes[item.value] = false 
        }
        })
        //console.log(Object.entries(checkboxes))

/* ============ FORM IMG - DRAG AND DROP ============== */


const $fileInput = document.getElementById('image')
const $dropZone = document.getElementById('result-image')
const $img = document.getElementById('img-result')

$dropZone.addEventListener('click', () => $fileInput.click())

$dropZone.addEventListener('dragover', (e) => {
	e.preventDefault() //Evita que la imagen se abra en otra pestaña del navegador

	$dropZone.classList.add('form-file__result--active')
})

$dropZone.addEventListener('dragleave', (e) => {
	e.preventDefault()

	$dropZone.classList.remove('form-file__result--active')
})

const uploadImage = (file) => {
	const fileReader = new FileReader()
	fileReader.readAsDataURL(file)

	fileReader.addEventListener('load', (e) => {
		$img.setAttribute('src', e.target.result)
	})
}

$dropZone.addEventListener('drop', (e) => {
	e.preventDefault()

	/* console.log(e.dataTransfer) */

	$fileInput.files = e.dataTransfer.files
	const file = $fileInput.files[0]

	uploadImage(file)
	
})

$fileInput.addEventListener('change', (e) => {
	/* console.log(e.target.files[0]) */
	const file = e.target.files[0]

	uploadImage(file)
})


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre && campos.email && campos.telefono ){
		formulario.reset();
        $img.remove();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);
		
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

/* ================================= BOTON LOGIN ================================= */ 
const boton = document.getElementById("abrirModal");
const modal = document.getElementById("ventanaModal");
const btnCerrar = document.getElementById("btn-cerrar");

boton.addEventListener ("click", ()=> {
    modal.showModal();
});

btnCerrar.addEventListener ("click", ()=> {
    modal.close();
});

/* =============================== VALIDACION LOGIN===================================== */ 
const userNameField = document.getElementById("uname");
const passwordField = document.getElementById("psw");


const setErrors = (message, field, isError = true) => {
  if (isError) {
    field.classList.add("invalid-input");
    field.nextElementSibling.classList.add("error-input");
    field.nextElementSibling.innerText = message;
  } else {
    field.classList.remove("invalid-input");
    field.nextElementSibling.classList.remove("error-input");
    field.nextElementSibling.innerText = "";
  }
}

const validateEmptyField = (message, e) => {
  const field = e.target;
  const fieldValue = e.target.value;

  if (fieldValue.trim().length === 0) {
    setErrors(message, field);
  } else {
    setErrors("", field, false);
  }
}

userNameField.addEventListener("blur", (e) => validateEmptyField("Ingresa tu nombre", e));
passwordField.addEventListener("blur", (e) => validateEmptyField("Ingresa tu password", e));
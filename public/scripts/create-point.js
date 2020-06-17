
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]");

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?OrderBy=nome")
        .then((res) => res.json())
        .then( states => {

            for(const state of states){
                ufSelect.innerHTML += `<option value=${state.id}>${state.nome}</option>`
            }
        })
}

populateUFs();

function getCities(event){
    const citySelect = document.querySelector("select[name=city]");
    const stateInput = document.querySelector("input[name=state]");

    const indexOfSelectedState = event.target.selectedIndex;

    stateInput.value = event.target.options[indexOfSelectedState].text;

    citySelect.innerHTML = '<option value>Selecione a cidade</option>';
    citySelect.disabled = true;

    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)
        .then(res => res.json())
        .then(cities => {

            for(const city of cities){
                citySelect.innerHTML += `<option value=${city.nome}>${city.nome}</option>`;
            }

            citySelect.disabled = false;
        });

    console.log(event.target.value)
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)



//itens de coleta
// pegar todos os lis

const itemsToCollect = document.querySelectorAll(".itens-grid li");

for(let item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}


const collectedItems = document.querySelector("input[name=items]")

let selectedItems = [];

function handleSelectedItem(event){
    const itemLi = event.target;

    // adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected");

    const itemId = itemLi.dataset.id;

    console.log('ITEM ID: ', itemId);

    // verificar se existem itens selecionados
    const alreadySelected = selectedItems.findIndex(function(item){
        const itemFound = item == itemId;
        
        return itemFound;
    });


    // se já estiver selecionado, tirar da seleção
    if(alreadySelected >= 0){
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId;

            return itemIsDifferent;
        })

        selectedItems = filteredItems;
    } else {
        // se não tiver selecionando adiciona ele
        selectedItems.push(itemId);
    }

    console.log('selectedItems: ', selectedItems)

    collectedItems.value = selectedItems;
}

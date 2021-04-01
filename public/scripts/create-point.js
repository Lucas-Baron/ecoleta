function populateUFs(){
    const ufSelect = document.querySelector('select[name=uf]')

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {

        for( let state of states){
            ufSelect.innerHTML += `<option value = "${state.id}">${state.nome}</option>`
        }

    })
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector('select[name=city]')
    const stateImput = document.querySelector('input[name=state]')
    
    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateImput.value = event.target.options[indexOfSelectedState].text


    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = " "
    citySelect.disabled = true

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        
        for( const city of cities){
            citySelect.innerHTML += `<option value = "${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false

    })

}


document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities)

//============== Items de coleta ==============
    const itemsToCollect = document.querySelectorAll('.items-grids li')

    for (const item of itemsToCollect) {
        item.addEventListener('click', handleSelectedItem)
    }

    const collectedItems = document.querySelector("input[name=items]")

    let selectedItems = []

    function handleSelectedItem(event){
        const itemLi = event.target
        //add ou remover uma classe com js
        itemLi.classList.toggle('selected')

        const itemId = itemLi.dataset.id

        console.log("ITEM ID: ", itemId)

        //Verificar se existem itens selecionados
        //Se existir, pegar os itens selecionados por
        const alreadySelected = selectedItems.findIndex(item => {
            const itemFound = item == itemId
            return itemFound
        })

        //Se já estiver selecionado
        if(alreadySelected >= 0){
            //retirar seleção
            const filteredItems = selectedItems.filter(item => {
                const itemIsDifferent = item != itemId
                return itemIsDifferent
            })

            selectedItems = filteredItems
        } else{
            //Se não estiver selecionada, adicionar seleção
            selectedItems.push(itemId)
        }

        console.log("selectedItems: ", selectedItems)

        //Atualizar o campo escondido com os itens selecionados
        collectedItems.value = selectedItems        
    }
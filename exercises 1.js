// usando o map, as pessoas que são vip irão para a area black, as que não são vip vão para o setor green

const list = [
    { name: 'Rodolfo', vip: true},
    { name: 'Maria', vip: false},
    { name: 'João', vip: true},
    { name: 'Bruno', vip: true},
    { name: 'Carla', vip: false},
    { name: 'Ana', vip: true},
    { name: 'Julio', vip: false}
]

const newLists = list.map( (sector) => {
    const newList = {
        name: sector.name,
        vip: sector.name,
        area: sector.vip ? 'Black' : 'Green'
    }
    return newList
})

console.log(newLists)
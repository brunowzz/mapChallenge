// 

const students = [
    { name: 'Rodolfo', testGrade: 7},
    { name: 'Maria', testGrade: 5},
    { name: 'João', testGrade: 8},
    { name: 'Bruno', testGrade: 9},
    { name: 'Carla', testGrade: 3},
    { name: 'Ana', testGrade: 2},
    { name: 'Julio', testGrade: 10}
]

const stats = students.map( (status) => {
    const reportStats = {
        name: status.name,
        result: status.testGrade >= 7 ? 'Okay' : 'Failed'
    }
    return reportStats
})

console.log(stats)
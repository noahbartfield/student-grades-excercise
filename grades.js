const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60, 59, 83, 88]
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0
}

// increments values within grades object
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
        grades.a += 1
    } else if (scores[i] > 80 && scores[i] <= 90) {
        grades.b += 1
    } else if (scores[i] > 70 && scores[i] <= 80) {
        grades.c += 1
    } else if (scores[i] > 60 && scores[i] <= 70) {
        grades.d += 1
    } else {
        grades.f += 1
    }
}

// displays properties and keys
for (const property in grades) {
    console.log(property, grades[property])  
}



// displays lowest score
scores.sort(function(a, b) {return a - b})
console.info(scores[0])

// displays highest score
scores.sort(function(a, b) {return b - a})
console.info(scores[0])




// displays the grade type that occurs most
let currentGradeCount = 0

for (const property in grades) {
    if (grades[property] > currentGradeCount) {
        currentGradeCount += (grades[property] - currentGradeCount)
    }
}

if (currentGradeCount === grades.a) {
    console.log("a")
} else if (currentGradeCount === grades.b) {
    console.log("b")
} else if (currentGradeCount === grades.c) {
    console.log("c")
} else if (currentGradeCount === grades.d) {
    console.log("d")
} else if (currentGradeCount === grades.f) {
    console.log("f")
}




// displays the grade type that occurs least
let lowGradeCount = 9999999999999

for (const property in grades) {
    if (grades[property] < lowGradeCount) {
        lowGradeCount += (grades[property] - lowGradeCount)
    }
}

if (lowGradeCount === grades.a) {
    console.log("a")
} else if (lowGradeCount === grades.b) {
    console.log("b")
} else if (lowGradeCount === grades.c) {
    console.log("c")
} else if (lowGradeCount === grades.d) {
    console.log("d")
} else if (lowGradeCount === grades.f) {
    console.log("f")
}
